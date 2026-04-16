import type { Vestibular } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class FindVestibularsUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(): Promise<Vestibular[]> {
    return this.vestibularRepository.find();
  }
}
