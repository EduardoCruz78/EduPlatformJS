import type { SubjectRepository } from '@edu-platform/infrastructure';

export interface UpdateSubjectInput {
  id: number;
  name?: string;
  description?: string;
  imageUrl?: string | null;
  order?: number;
}

export class UpdateSubjectUseCase {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async execute(input: UpdateSubjectInput) {
    const subject = await this.subjectRepository.findById(input.id);
    if (!subject) {
      throw new Error("Matéria não encontrada");
    }

    return this.subjectRepository.update(input.id, {
      name: input.name?.trim() || subject.name,
      description: input.description?.trim() || subject.description || "",
      imageUrl: input.imageUrl !== undefined ? input.imageUrl : subject.imageUrl,
      order: input.order !== undefined ? input.order : (subject as any).order || 0,
    });
  }
}