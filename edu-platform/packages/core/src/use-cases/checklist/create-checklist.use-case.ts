// packages/core/src/use-cases/checklist/create-checklist.use-case.ts
import type { CreateChecklistInput } from '../../dtos';
import type { Checklist } from '../../entities';
import {IChecklistRepository} from "../../repositories";

export class CreateChecklistUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(input: CreateChecklistInput): Promise<Checklist> {
    return this.checklistRepository.create(input);
  }
}