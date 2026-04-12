import type { ContentRepository } from '@edu-platform/infrastructure';

export interface CreateContentInput {
  title: string;
  description: string;
  topicId: number;
  type: "VIDEO" | "PDF" | "ARTICLE";
  videoUrl?: string | null;
  pdfUrl?: string | null;
  thumbnailUrl?: string | null;
  order?: number;
}

export class CreateContentUseCase {
  constructor(private readonly contentRepository: ContentRepository) {}

  async execute(input: CreateContentInput) {
    if (!input.title?.trim()) {
      throw new Error("Título do conteúdo é obrigatório");
    }

    if (!input.topicId) {
      throw new Error("Tópico é obrigatório");
    }

    return this.contentRepository.create({
      title: input.title.trim(),
      description: input.description.trim(),
      topicId: input.topicId,
      type: input.type,
      videoUrl: input.videoUrl || null,
      pdfUrl: input.pdfUrl || null,
      thumbnailUrl: input.thumbnailUrl || null,
      order: input.order || 0,
    });
  }
}