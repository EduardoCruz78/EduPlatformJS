// packages/core/src/use-cases/series/get-by-id.use-case.ts

import type { Series } from '../../entities';
import type { ISeriesRepository } from '../../repositories/ISeriesRepository';

export class GetSeriesByIdUseCase {
    constructor(private readonly seriesRepository: ISeriesRepository) {}

    async execute(id: number): Promise<Series | null> {
        return this.seriesRepository.findById(id);
    }
}