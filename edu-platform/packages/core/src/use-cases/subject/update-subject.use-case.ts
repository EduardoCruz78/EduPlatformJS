// packages/core/src/use-cases/subject/update-subject.use-case.ts

import type { UpdateSubjectInput } from '../../dtos';
import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class UpdateSubjectUseCase {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async execute(input: UpdateSubjectInput): Promise<Subject> {
    const subject = await this.subjectRepository.findById(input.id);

    if (!subject) {
      throw new Error('Matéria não encontrada');
    }

    const name =
        input.name === undefined
            ? subject.name
            : input.name.trim() || subject.name;

    const description =
        input.description === undefined
            ? subject.description ?? null
            : input.description === null
                ? null
                : input.description.trim() || null;

    const imageUrl =
        input.imageUrl === undefined
            ? subject.imageUrl ?? null
            : input.imageUrl;

    const order =
        input.order === undefined ? subject.order ?? 0 : input.order;

    const seriesId =
        input.seriesId === undefined
            ? subject.seriesId ?? null
            : input.seriesId;

    return this.subjectRepository.update(input.id, {
      name,
      description,
      imageUrl,
      order,
      seriesId,
    });
  }
}