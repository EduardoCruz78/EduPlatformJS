// packages/core/src/use-cases/checklist/get-by-user.use-case.ts

import type { Checklist } from '../../entities';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class GetChecklistByUserUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(userId: string): Promise<Checklist[]> {
    return this.checklistRepository.findByUserId(userId);
  }
}