import type { UpdateContentInput } from '../../dtos';
import type { Content } from '../../entities';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class UpdateContentUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: UpdateContentInput): Promise<Content> {
    const content = await this.contentRepository.findById(input.id);

    if (!content) {
      throw new Error('Conteúdo não encontrado');
    }

    const title =
        input.title === undefined
            ? content.title
            : input.title.trim() || content.title;

    const description =
        input.description === undefined
            ? content.description ?? null
            : input.description === null
                ? null
                : input.description.trim() || null;

    const videoUrl =
        input.videoUrl === undefined
            ? content.videoUrl ?? null
            : input.videoUrl;

    const pdfUrl =
        input.pdfUrl === undefined
            ? content.pdfUrl ?? null
            : input.pdfUrl;

    const thumbnailUrl =
        input.thumbnailUrl === undefined
            ? content.thumbnailUrl
            : input.thumbnailUrl === null
                ? content.thumbnailUrl
                : input.thumbnailUrl.trim() || content.thumbnailUrl;

    const order =
        input.order === undefined ? content.order ?? 0 : input.order;

    return this.contentRepository.update(input.id, {
      title,
      description,
      type: input.type ?? content.type,
      videoUrl,
      pdfUrl,
      thumbnailUrl,
      order,
    });
  }
}