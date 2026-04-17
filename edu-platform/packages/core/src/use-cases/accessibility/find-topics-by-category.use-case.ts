import type { Topic } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class FindAccessibilityTopicsByCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(categoryId: number): Promise<Topic[]> {
    if (!categoryId) {
      throw AppError.validation('Categoria invalida.');
    }

    return this.accessibilityRepository.findTopicsByCategory(categoryId);
  }
}

