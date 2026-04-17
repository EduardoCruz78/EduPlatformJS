import type { CreateContentInput } from '../../dtos';
import type { Content } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class CreateContentUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: CreateContentInput): Promise<Content> {
    const title = input.title.trim();
    const link = input.link.trim();
    const thumbnailUrl = input.thumbnailUrl.trim();

    if (!title) {
      throw AppError.validation('Titulo do conteudo e obrigatorio.');
    }

    if (!input.topicId) {
      throw AppError.validation('Topico e obrigatorio.');
    }

    if (!link) {
      throw AppError.validation('Link do conteudo e obrigatorio.');
    }

    if (!thumbnailUrl) {
      throw AppError.validation('Thumbnail e obrigatoria.');
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
      transcript: input.transcript?.trim() ?? null,
      captionsUrl: input.captionsUrl ?? null,
      librasUrl: input.librasUrl ?? null,
      audioDescriptionUrl: input.audioDescriptionUrl ?? null,
      order: input.order ?? 0,
    });
  }
}

