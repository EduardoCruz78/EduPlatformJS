
import type { VestibularRepository } from '@edu-platform/infrastructure';

export interface UpdateVestibularInput {
  id: number; // Mudei de string para number
  name?: string;
  description?: string;
  year?: number;
  imageUrl?: string | null;
}

export class UpdateVestibularUseCase {
  constructor(private readonly vestibularRepository: VestibularRepository) {}

  async execute(input: UpdateVestibularInput) {
    const vestibular = await this.vestibularRepository.findById(input.id);
    if (!vestibular) {
      throw new Error("Vestibular não encontrado");
    }

    if (input.name && !input.name.trim()) {
      throw new Error("Nome não pode estar vazio");
    }

    if (input.year && (input.year < 1990 || input.year > 2100)) {
      throw new Error("Ano inválido");
    }

    return this.vestibularRepository.update(input.id, {
      name: input.name?.trim() || vestibular.name,
      description: input.description?.trim() || vestibular.description,
      year: input.year || vestibular.year,
      imageUrl: input.imageUrl !== undefined ? input.imageUrl : vestibular.imageUrl,
    });
  }
}