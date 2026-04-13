import type { SeriesRepository } from '@edu-platform/infrastructure';

export interface UpdateSeriesInput {
  id: number;
  name?: string;
}

export class UpdateSeriesUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute(input: UpdateSeriesInput) {
    const series = await this.seriesRepository.findById(input.id);

    if (!series) {
      throw new Error('Série não encontrada');
    }

    return this.seriesRepository.update(input.id, {
      name: input.name?.trim() || series.name,
    });
  }
}