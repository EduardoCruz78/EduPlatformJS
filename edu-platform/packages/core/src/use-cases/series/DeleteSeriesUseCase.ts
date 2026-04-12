import type { SeriesRepository, TopicRepository } from '@edu-platform/infrastructure';

export class DeleteSeriesUseCase {
  constructor(
    private readonly seriesRepository: SeriesRepository,
    private readonly topicRepository: TopicRepository
  ) {}

  async execute(id: number) {
    const series = await this.seriesRepository.findById(id);
    if (!series) {
      throw new Error("Série não encontrada");
    }

    const topicsCount = await this.topicRepository.countBySeriesId(id);
    if (topicsCount > 0) {
      throw new Error("Não é possível deletar uma série que possui tópicos associados");
    }

    await this.seriesRepository.delete(id);
    return { success: true, message: "Série deletada com sucesso" };
  }
}