import type { CreateVestibularInput } from '../../dtos';
import type { Vestibular } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class CreateVestibularUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: CreateVestibularInput): Promise<Vestibular> {
    const name = input.name.trim();

    if (!name) {
      throw AppError.validation('Nome do vestibular e obrigatorio.');
    }

    if (!input.year || input.year < 1990 || input.year > 2100) {
      throw AppError.validation('Ano do vestibular deve ser valido.');
    }

    const existingVestibular = await this.vestibularRepository.findByNameAndYear(
      name,
      input.year
    );

    if (existingVestibular) {
      throw AppError.conflict('Vestibular com este nome e ano ja existe.');
    }

    return this.vestibularRepository.create({
      name,
      description: input.description.trim(),
      year: input.year,
      imageUrl: input.imageUrl ?? null,
    });
  }
}

