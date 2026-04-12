import type { ContentRepository } from '@edu-platform/infrastructure';

export interface UpdateContentInput {
  id: number;
  title?: string;
  description?: string;
  type?: "VIDEO" | "PDF" | "ARTICLE";
  videoUrl?: string | null;
  pdfUrl?: string | null;
  thumbnailUrl?: string | null;
  order?: number;
}

export class UpdateContentUseCase {
  constructor(private readonly contentRepository: ContentRepository) {}

  async execute(input: UpdateContentInput) {
    const content = await this.contentRepository.findById(input.id);
    if (!content) {
      throw new Error("Conteúdo não encontrado");
    }

    return this.contentRepository.update(input.id, {
      title: input.title?.trim() || content.title,
      description: input.description?.trim() || content.description,
      type: input.type || content.type,
      videoUrl: input.videoUrl !== undefined ? input.videoUrl : content.videoUrl,
      pdfUrl: input.pdfUrl !== undefined ? input.pdfUrl : content.pdfUrl,
      thumbnailUrl: input.thumbnailUrl !== undefined ? input.thumbnailUrl : content.thumbnailUrl,
      order: input.order !== undefined ? input.order : content.order,
    });
  }
}