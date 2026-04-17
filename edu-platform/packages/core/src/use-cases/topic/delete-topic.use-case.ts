import type { DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { IContentRepository } from '../../repositories/IContentRepository';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class DeleteTopicUseCase {
  constructor(
    private readonly topicRepository: ITopicRepository,
    private readonly contentRepository: IContentRepository
  ) {}

  async execute(id: number): Promise<DeleteResponseDto> {
    const topic = await this.topicRepository.findById(id);

    if (!topic) {
      throw AppError.notFound('Topico nao encontrado.');
    }

    const contentsCount = await this.contentRepository.countByTopicId(id);

    if (contentsCount > 0) {
      throw AppError.conflict(
        'Nao e possivel deletar um topico que possui conteudos associados.'
      );
    }

    await this.topicRepository.delete(id);

    return { success: true };
  }
}

