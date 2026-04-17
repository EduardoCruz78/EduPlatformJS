import type { VestibularContent } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class FindVestibularContentsUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(vestibularId: number): Promise<VestibularContent[]> {
    if (!vestibularId) {
      throw AppError.validation('Vestibular invalido.');
    }

    return this.vestibularRepository.findContents(vestibularId);
  }
}

