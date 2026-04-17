// packages/core/src/use-cases/checklist/create-checklist.use-case.ts

import type { CreateChecklistInput } from '../../dtos';
import type { Checklist } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository';

export class CreateChecklistUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(input: CreateChecklistInput): Promise<Checklist> {
    if (!input.userId.trim()) {
      throw AppError.validation('Usuario obrigatorio.');
    }

    if (!Number.isInteger(input.contentId) || input.contentId <= 0) {
      throw AppError.validation('Conteudo invalido.');
    }

    const existingChecklist = await this.checklistRepository.findByUserIdAndContentId(
      input.userId,
      input.contentId
    );

    if (existingChecklist) {
      throw AppError.conflict('Conteudo ja marcado no checklist.');
    }

    return this.checklistRepository.create(input);
  }
}

