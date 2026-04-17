import type { UpdateContentInput } from '../../dtos';
import type { Content } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class UpdateContentUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: UpdateContentInput): Promise<Content> {
    const content = await this.contentRepository.findById(input.id);

    if (!content) {
      throw AppError.notFound('Conteudo nao encontrado.');
    }

    const title =
      input.title === undefined ? content.title : input.title.trim() || content.title;

    const description =
      input.description === undefined
        ? content.description ?? null
        : input.description === null
          ? null
          : input.description.trim() || null;

    const link =
      input.link === undefined ? content.link : input.link.trim() || content.link;

    const topicId = input.topicId === undefined ? content.topicId : input.topicId;

    const videoUrl =
      input.videoUrl === undefined ? content.videoUrl ?? null : input.videoUrl;

    const pdfUrl =
      input.pdfUrl === undefined ? content.pdfUrl ?? null : input.pdfUrl;

    const thumbnailUrl =
      input.thumbnailUrl === undefined
        ? content.thumbnailUrl
        : input.thumbnailUrl === null
          ? content.thumbnailUrl
          : input.thumbnailUrl.trim() || content.thumbnailUrl;

    const order = input.order === undefined ? content.order ?? 0 : input.order;

    return this.contentRepository.update(input.id, {
      title,
      description,
      topicId,
      type: input.type ?? content.type,
      link,
      videoUrl,
      pdfUrl,
      thumbnailUrl,
      order,
    });
  }
}

