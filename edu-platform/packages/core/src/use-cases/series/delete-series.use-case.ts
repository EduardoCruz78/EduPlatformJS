// packages/core/src/use-cases/series/delete-series.use-case.ts

import type { DeleteResponseDto } from '../../dtos';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class DeleteSeriesUseCase {
  constructor(
      private readonly seriesRepository: ISeriesRepository,
      private readonly topicRepository: ITopicRepository
  ) {}

  async execute(id: number): Promise<DeleteResponseDto> {
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