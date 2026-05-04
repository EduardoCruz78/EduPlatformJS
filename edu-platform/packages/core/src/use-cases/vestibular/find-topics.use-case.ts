import type { VestibularTopic } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class FindVestibularTopicsUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(vestibularId: number, subjectId?: number): Promise<VestibularTopic[]> {
    if (!vestibularId) {
      throw AppError.validation('Vestibular invalido.');
    }

    return this.vestibularRepository.findTopics(vestibularId, subjectId);
  }
}

