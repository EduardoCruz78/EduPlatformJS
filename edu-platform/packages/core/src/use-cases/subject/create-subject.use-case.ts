import type { CreateSubjectInput } from '../../dtos';
import type { Subject } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class CreateSubjectUseCase {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async execute(input: CreateSubjectInput): Promise<Subject> {
    const name = input.name.trim();

    if (!name) {
      throw AppError.validation('Nome da materia e obrigatorio.');
    }

    const existingSubject = await this.subjectRepository.findByName(name);

    if (existingSubject) {
      throw AppError.conflict('Materia com este nome ja existe.');
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

