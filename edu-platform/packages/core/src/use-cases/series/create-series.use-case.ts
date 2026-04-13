import { ISeriesRepository } from '../../repositories';

export class CreateSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(input: { name: string }) {
    const name = input.name?.trim();

    if (!name) {
      throw new Error('Nome obrigatório');
    }

    const exists = await this.seriesRepository.findByName(name);

    if (exists) {
      throw new Error('Já existe');
    }

    return this.seriesRepository.create({ name });
  }
}