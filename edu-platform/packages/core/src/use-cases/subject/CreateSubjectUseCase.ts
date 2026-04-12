import type { SubjectRepository } from '@edu-platform/infrastructure';

export interface CreateSubjectInput {
  name: string;
  description: string;
  imageUrl?: string | null;
  order?: number;
}

export class CreateSubjectUseCase {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async execute(input: CreateSubjectInput) {
    if (!input.name?.trim()) {
      throw new Error("Nome da matéria é obrigatório");
    }

    const existingSubject = await this.subjectRepository.findByName(input.name);
    if (existingSubject) {
      throw new Error("Matéria com este nome já existe");
    }

    return this.subjectRepository.create({
      name: input.name.trim(),
      description: input.description.trim(),
      imageUrl: input.imageUrl || null,
      order: input.order || 0,
    });
  }
}