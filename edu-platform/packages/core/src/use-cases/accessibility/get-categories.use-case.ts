// packages/core/src/use-cases/accessibility/get-categories.use-case.ts

import type { AccessibilityCategory } from '../../entities';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class GetAccessibilityCategoriesUseCase {
  constructor(
      private readonly accessibilityRepository: IAccessibilityRepository
  ) {}

  async execute(): Promise<AccessibilityCategory[]> {
    return this.accessibilityRepository.getCategories();
  }
}