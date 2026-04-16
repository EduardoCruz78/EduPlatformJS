import type { VestibularContent } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class FindVestibularContentsUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(vestibularId: number): Promise<VestibularContent[]> {
    if (!vestibularId) {
      throw new Error('Vestibular inválido');
    }

    return this.vestibularRepository.findContents(vestibularId);
  }
}
