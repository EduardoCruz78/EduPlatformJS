// packages/core/src/use-cases/subject/create-subject.use-case.ts

import type { CreateSubjectInput } from '../../dtos';
import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class CreateSubjectUseCase {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async execute(input: CreateSubjectInput): Promise<Subject> {
    const name = input.name.trim();

    if (!name) {
      throw new Error('Nome da matéria é obrigatório');
    }

    const existingSubject = await this.subjectRepository.findByName(name);

    if (existingSubject) {
      throw new Error('Matéria com este nome já existe');
    }

    return this.subjectRepository.create({
      name,
      description: input.description?.trim() ?? null,
      imageUrl: input.imageUrl ?? null,
      order: input.order ?? 0,
      seriesId: input.seriesId ?? null,
    });
  }
}