import {ISeriesRepository} from "../../repositories";

export interface CreateSeriesInput {
  name: string;

  // Mantidos para não quebrar os chamadores atuais,
  // mas não são persistidos porque o schema atual de Series só tem "name".
  description?: string;
  imageUrl?: string | null;
  order?: number;
}

export class CreateSeriesUseCase {
  constructor(private readonly seriesRepository: ISeriesRepository) {}

  async execute(input: CreateSeriesInput) {
    const name = input.name?.trim();

    if (!name) {
      throw new Error('Nome da série é obrigatório');
    }

    const existingSeries = await this.seriesRepository.findByName(name);
    if (existingSeries) {
      throw new Error('Série com este nome já existe');
    }

    return this.seriesRepository.create({
      name,
    });
  }
}