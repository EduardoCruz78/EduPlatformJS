import type { TopicRepository, ContentRepository } from '@edu-platform/infrastructure';

export class DeleteTopicUseCase {
  constructor(
    private readonly topicRepository: TopicRepository,
    private readonly contentRepository: ContentRepository
  ) {}

  async execute(id: number) {
    const topic = await this.topicRepository.findById(id);
    if (!topic) {
      throw new Error("Tópico não encontrado");
    }

    const contentsCount = await this.contentRepository.countByTopicId(id);
    if (contentsCount > 0) {
      throw new Error("Não é possível deletar um tópico que possui conteúdos associados");
    }

    await this.topicRepository.delete(id);
    return { success: true, message: "Tópico deletado com sucesso" };
  }
}