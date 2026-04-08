// packages/core/src/use-cases/series/get-all.use-case.ts
import type { SeriesRepository } from '@edu-platform/infrastructure';
import type { Series } from '../../entities';

export class GetAllSeriesUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute(): Promise<Series[]> {
    return this.seriesRepository.findAll();
  }
}