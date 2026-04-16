import type { VestibularTopic } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class FindVestibularTopicsUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(vestibularId: number): Promise<VestibularTopic[]> {
    if (!vestibularId) {
      throw new Error('Vestibular inválido');
    }

    return this.vestibularRepository.findTopics(vestibularId);
  }
}
