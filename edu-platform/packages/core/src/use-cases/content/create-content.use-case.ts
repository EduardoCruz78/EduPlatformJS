// packages/core/src/use-cases/content/create-content.use-case.ts

import type { CreateContentInput } from '../../dtos';
import type { Content } from '../../entities';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class CreateContentUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: CreateContentInput): Promise<Content> {
    const title = input.title.trim();
    const link = input.link.trim();
    const thumbnailUrl = input.thumbnailUrl.trim();

    if (!title) {
      throw new Error('Título do conteúdo é obrigatório');
    }

    if (!input.topicId) {
      throw new Error('Tópico é obrigatório');
    }

    if (!link) {
      throw new Error('Link do conteúdo é obrigatório');
    }

    if (!thumbnailUrl) {
      throw new Error('Thumbnail é obrigatória');
    }

    return this.contentRepository.create({
      title,
      description: input.description?.trim() ?? null,
      topicId: input.topicId,
      type: input.type,
      link,
      thumbnailUrl,
      videoUrl: input.videoUrl ?? null,
      pdfUrl: input.pdfUrl ?? null,
      order: input.order ?? 0,
    });
  }
}