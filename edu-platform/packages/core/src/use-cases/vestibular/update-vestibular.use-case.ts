// packages/core/src/use-cases/vestibular/update-vestibular.use-case.ts

import type { UpdateVestibularInput } from '../../dtos';
import type { Vestibular } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class UpdateVestibularUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: UpdateVestibularInput): Promise<Vestibular> {
    const vestibular = await this.vestibularRepository.findById(input.id);

    if (!vestibular) {
      throw new Error('Vestibular não encontrado');
    }

    if (input.name !== undefined && !input.name.trim()) {
      throw new Error('Nome não pode estar vazio');
    }

    if (input.year !== undefined && (input.year < 1990 || input.year > 2100)) {
      throw new Error('Ano inválido');
    }

    const name =
        input.name === undefined
            ? vestibular.name
            : input.name.trim() || vestibular.name;

    const description =
        input.description === undefined
            ? vestibular.description ?? ''
            : input.description === null
                ? ''
                : input.description.trim() || '';

    const year =
        input.year === undefined ? vestibular.year ?? undefined : input.year;

    const imageUrl =
        input.imageUrl === undefined
            ? vestibular.imageUrl ?? null
            : input.imageUrl;

    return this.vestibularRepository.update(input.id, {
      name,
      description,
      year,
      imageUrl,
    });
  }
}