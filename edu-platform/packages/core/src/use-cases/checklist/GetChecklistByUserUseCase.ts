// packages/core/src/use-cases/checklist/GetChecklistByUserUseCase.ts
import type { IChecklistRepository } from '@/repositories/IChecklistRepository';

export class GetChecklistByUserUseCase {
  constructor(private checklistRepository: IChecklistRepository) {}

  async execute(userId: string) {
    return this.checklistRepository.findByUserId(userId);
  }
}