import type { Vestibular } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class FindVestibularByIdUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(id: number): Promise<Vestibular | null> {
    return this.vestibularRepository.findById(id);
  }
}
