import {
  ISeriesRepository,
  ITopicRepository,
} from '../../repositories';

export class DeleteSeriesUseCase {
  constructor(
      private readonly seriesRepository: ISeriesRepository,
      private readonly topicRepository: ITopicRepository
  ) {}

  async execute(id: number) {
    const series = await this.seriesRepository.findById(id);

    if (!series) {
      throw new Error('Não encontrada');
    }

    const count = await this.topicRepository.countBySeriesId(id);

    if (count > 0) {
      throw new Error('Possui tópicos');
    }

    await this.seriesRepository.delete(id);

    return { success: true };
  }
}