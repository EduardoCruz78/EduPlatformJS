import type { CreateVestibularTopicInput } from '../../dtos';
import type { VestibularTopic } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class CreateVestibularTopicUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: CreateVestibularTopicInput): Promise<VestibularTopic> {
    if (!input.vestibularId) {
      throw AppError.validation('Vestibular invalido.');
    }

    const name = input.name.trim();

    if (!name) {
      throw AppError.validation('Nome do topico e obrigatorio.');
    }

    return this.vestibularRepository.createTopic({
      vestibularId: input.vestibularId,
      subjectId: input.subjectId ?? null,
      originalTopicId: input.originalTopicId ?? null,
      name,
      notes: input.notes?.trim() || null,
      tags: input.tags?.trim() || null,
    });
  }
}

