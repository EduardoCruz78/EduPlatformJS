// packages/core/src/use-cases/vestibular/get-available.use-case.ts
import type { VestibularRepository } from '@edu-platform/infrastructure';
import type { Vestibular } from '../../entities';

export class GetAvailableVestibularsUseCase {
  constructor(private readonly vestibularRepository: VestibularRepository) {}

  async execute(): Promise<Vestibular[]> {
    return this.vestibularRepository.findAll();
  }
}