// packages/core/src/use-cases/checklist/create.use-case.ts
import type { ChecklistRepository } from '@edu-platform/infrastructure';
import type { CreateChecklistInput } from '../../dtos';
import type { Checklist } from '../../entities';

export class CreateChecklistUseCase {
  constructor(private readonly checklistRepository: ChecklistRepository) {}

  async execute(input: CreateChecklistInput): Promise<Checklist> {
    return this.checklistRepository.create(input);
  }
}