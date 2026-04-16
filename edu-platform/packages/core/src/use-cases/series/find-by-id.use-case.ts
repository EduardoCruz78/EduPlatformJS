import type { Series } from '../../entities';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';

export class FindSeriesByIdUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(id: number): Promise<Series | null> {
    return this.seriesRepository.findById(id);
  }
}
