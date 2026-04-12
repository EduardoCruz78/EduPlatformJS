import type { SeriesRepository } from '@edu-platform/infrastructure';

export interface UpdateSeriesInput {
  id: number;
  name?: string;
  description?: string;
  imageUrl?: string | null;
  order?: number;
}

export class UpdateSeriesUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute(input: UpdateSeriesInput) {
    const series = await this.seriesRepository.findById(input.id);
    if (!series) {
      throw new Error("Série não encontrada");
    }

    return this.seriesRepository.update(input.id, {
      name: input.name?.trim() || series.name,
      description: input.description?.trim() || series.description,
      imageUrl: input.imageUrl !== undefined ? input.imageUrl : series.imageUrl,
      order: input.order !== undefined ? input.order : series.order,
    });
  }
}