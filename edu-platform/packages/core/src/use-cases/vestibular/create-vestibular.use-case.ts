// packages/core/src/use-cases/vestibular/create-vestibular.use-case.ts

import type { CreateVestibularInput } from '../../dtos';
import type { Vestibular } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class CreateVestibularUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: CreateVestibularInput): Promise<Vestibular> {
    const name = input.name.trim();

    if (!name) {
      throw new Error('Nome do vestibular é obrigatório');
    }

    if (!input.year || input.year < 1990 || input.year > 2100) {
      throw new Error('Ano do vestibular deve ser válido');
    }

    const existingVestibular = await this.vestibularRepository.findByNameAndYear(
        name,
        input.year
    );

    if (existingVestibular) {
      throw new Error('Vestibular com este nome e ano já existe');
    }

    return this.vestibularRepository.create({
      name,
      description: input.description.trim(),
      year: input.year,
      imageUrl: input.imageUrl ?? null,
    });
  }
}