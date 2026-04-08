// packages/core/src/use-cases/accessibility/get-categories.use-case.ts
import type { AccessibilityRepository } from '@edu-platform/infrastructure';
import type { AccessibilityCategory } from '../../entities';

export class GetAccessibilityCategoriesUseCase {
  constructor(private readonly accessibilityRepository: AccessibilityRepository) {}

  async execute() {
    return this.accessibilityRepository.findAllCategories();
  }
}