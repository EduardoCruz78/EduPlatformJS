// packages/core/src/use-cases/vestibular/get-available.use-case.ts

import type { Vestibular } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class GetAvailableVestibularsUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(): Promise<Vestibular[]> {
    return this.vestibularRepository.findAll();
  }
}
