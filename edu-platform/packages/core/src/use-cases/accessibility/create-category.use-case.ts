import type { CreateAccessibilityCategoryInput } from '../../dtos';
import type { AccessibilityCategory } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class CreateAccessibilityCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(input: CreateAccessibilityCategoryInput): Promise<AccessibilityCategory> {
    const name = input.name.trim();

    if (!name) {
      throw AppError.validation('Nome da categoria e obrigatorio.');
    }

    return this.accessibilityRepository.createCategory({
      name,
      description: input.description?.trim() || null,
    });
  }
}

