// packages/core/src/use-cases/topic/delete-topic.use-case.ts

import type { DeleteResponseDto } from '../../dtos';
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
      throw new Error('Tópico não encontrado');
    }

    const contentsCount = await this.contentRepository.countByTopicId(id);

    if (contentsCount > 0) {
      throw new Error('Não é possível deletar um tópico que possui conteúdos associados');
    }

    await this.topicRepository.delete(id);

    return { success: true };
  }
}