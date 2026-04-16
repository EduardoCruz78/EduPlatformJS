import type { CreateAccessibilityCategoryInput } from '../../dtos';
import type { AccessibilityCategory } from '../../entities';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class CreateAccessibilityCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(input: CreateAccessibilityCategoryInput): Promise<AccessibilityCategory> {
    const name = input.name.trim();

    if (!name) {
      throw new Error('Nome da categoria é obrigatório');
    }

    return this.accessibilityRepository.createCategory({
      name,
      description: input.description?.trim() || null,
    });
  }
}
