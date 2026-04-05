// packages/core/src/use-cases/vestibular/get-available.use-case.ts
import type { VestibularRepository } from '@edu-platform/infrastructure';

export class GetAvailableVestibularsUseCase {
  constructor(private readonly vestibularRepository: VestibularRepository) {}

  async execute() {
    return this.vestibularRepository.findAll();
  }
}