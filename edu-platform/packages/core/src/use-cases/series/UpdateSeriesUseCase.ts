import {ISeriesRepository} from "../../repositories";

export interface UpdateSeriesInput {
  id: number;
  name?: string;
}

export class UpdateSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

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