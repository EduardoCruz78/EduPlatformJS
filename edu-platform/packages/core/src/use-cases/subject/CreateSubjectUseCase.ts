import type { SubjectRepository } from '@edu-platform/infrastructure';

export interface CreateSubjectInput {
  name: string;
  description?: string;
  imageUrl?: string | null;
  order?: number;
  seriesId?: number | null;
}

export class CreateSubjectUseCase {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async execute(input: CreateSubjectInput) {
    if (!input.name?.trim()) {
      throw new Error("Nome da matéria é obrigatório");
    }

    const existingSubject = await this.subjectRepository.findByName(input.name.trim());
    if (existingSubject) {
      throw new Error("Matéria com este nome já existe");
    }

    return this.subjectRepository.create({
      name: input.name.trim(),
      description: input.description?.trim() ?? null,
      imageUrl: input.imageUrl ?? null,
      order: input.order ?? 0,
      seriesId: input.seriesId ?? null,
    });
  }
}