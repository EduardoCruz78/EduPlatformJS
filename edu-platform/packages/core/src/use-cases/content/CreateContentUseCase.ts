import {IContentRepository} from "../../repositories";

export interface CreateContentInput {
  title: string;
  description?: string;
  topicId: number;
  type: "VIDEO" | "PDF" | "ARTICLE";
  link: string;
  thumbnailUrl: string;
  videoUrl?: string | null;
  pdfUrl?: string | null;
  order?: number;
}

export class CreateContentUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: CreateContentInput) {
    if (!input.title?.trim()) {
      throw new Error("Título do conteúdo é obrigatório");
    }

    if (!input.topicId) {
      throw new Error("Tópico é obrigatório");
    }

    if (!input.link?.trim()) {
      throw new Error("Link do conteúdo é obrigatório");
    }

    if (!input.thumbnailUrl?.trim()) {
      throw new Error("Thumbnail é obrigatória");
    }

    return this.contentRepository.create({
      title: input.title.trim(),
      description: input.description?.trim() ?? null,
      topicId: input.topicId,
      type: input.type,
      link: input.link.trim(),
      thumbnailUrl: input.thumbnailUrl.trim(),
      videoUrl: input.videoUrl ?? null,
      pdfUrl: input.pdfUrl ?? null,
      order: input.order ?? 0,
    });
  }
}