// packages/core/src/use-cases/checklist/get-by-user.use-case.ts
import type { ChecklistRepository } from '@edu-platform/infrastructure';
import type { Checklist } from '../../entities';

export class GetChecklistByUserUseCase {
  constructor(private readonly checklistRepository: ChecklistRepository) {}

  async execute(userId: string): Promise<Checklist[]> {
    return this.checklistRepository.getByUser(userId);
  }
}