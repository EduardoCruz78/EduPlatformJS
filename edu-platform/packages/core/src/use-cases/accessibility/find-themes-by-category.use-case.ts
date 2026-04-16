import type { AccessibilityTheme } from '../../entities';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class FindAccessibilityThemesByCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(categoryId: number): Promise<AccessibilityTheme[]> {
    if (!categoryId) {
      throw new Error('Categoria inválida');
    }

    return this.accessibilityRepository.findThemesByCategory(categoryId);
  }
}
