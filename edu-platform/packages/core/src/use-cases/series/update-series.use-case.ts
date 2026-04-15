// packages/core/src/use-cases/series/update-series.use-case.ts

import type { UpdateSeriesInput } from '../../dtos';
import type { Series } from '../../entities';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';

export class UpdateSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(input: UpdateSeriesInput): Promise<Series> {
    const series = await this.seriesRepository.findById(input.id);

    if (!series) {
      throw new Error('Série não encontrada');
    }

    const name =
        input.name !== undefined ? input.name.trim() || series.name : series.name;

    return this.seriesRepository.update(input.id, {
      name,
    });
  }
}