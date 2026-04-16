import type { AddAccessibilityCategoryTopicInput } from '../../dtos';
import type { DeleteResponseDto } from '../../dtos';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class RemoveAccessibilityTopicFromCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(input: AddAccessibilityCategoryTopicInput): Promise<DeleteResponseDto> {
    if (!input.accessibilityCategoryId || !input.topicId) {
      throw new Error('Categoria e tópico são obrigatórios');
    }

    await this.accessibilityRepository.removeTopicFromCategory(input);
    return { success: true };
  }
}
