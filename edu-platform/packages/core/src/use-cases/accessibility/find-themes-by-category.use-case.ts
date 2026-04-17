import type { AccessibilityTheme } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class FindAccessibilityThemesByCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(categoryId: number): Promise<AccessibilityTheme[]> {
    if (!categoryId) {
      throw AppError.validation('Categoria invalida.');
    }

    return this.accessibilityRepository.findThemesByCategory(categoryId);
  }
}

