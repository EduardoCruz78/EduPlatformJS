import { VestibularRepository } from "@/infrastructure/repositories/VestibularRepository";

export interface CreateVestibularInput {
  name: string;
  description: string;
  year: number;
  imageUrl?: string | null;
}

export class CreateVestibularUseCase {
  constructor(private vestibularRepository: VestibularRepository) {}

  async execute(input: CreateVestibularInput) {
    if (!input.name?.trim()) {
      throw new Error("Nome do vestibular é obrigatório");
    }

    if (!input.year || input.year < 1990 || input.year > 2100) {
      throw new Error("Ano do vestibular deve ser válido");
    }

    const existingVestibular =
      await this.vestibularRepository.findByNameAndYear(input.name, input.year);
    if (existingVestibular) {
      throw new Error("Vestibular com este nome e ano já existe");
    }

    return this.vestibularRepository.create({
      name: input.name.trim(),
      description: input.description?.trim() || "",
      year: input.year,
      imageUrl: input.imageUrl || null,
    });
  }
}