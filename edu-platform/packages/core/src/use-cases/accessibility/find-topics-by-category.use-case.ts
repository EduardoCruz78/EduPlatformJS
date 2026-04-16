import type { Topic } from '../../entities';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class FindAccessibilityTopicsByCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(categoryId: number): Promise<Topic[]> {
    if (!categoryId) {
      throw new Error('Categoria inválida');
    }

    return this.accessibilityRepository.findTopicsByCategory(categoryId);
  }
}
