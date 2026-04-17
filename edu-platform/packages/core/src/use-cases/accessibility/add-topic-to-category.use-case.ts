import type { AddAccessibilityCategoryTopicInput, DeleteResponseDto } from '../../dtos';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class AddAccessibilityTopicToCategoryUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(input: AddAccessibilityCategoryTopicInput): Promise<DeleteResponseDto> {
    if (!input.accessibilityCategoryId || !input.topicId) {
      throw AppError.validation('Categoria e topico sao obrigatorios.');
    }

    await this.accessibilityRepository.addTopicToCategory(input);
    return { success: true };
  }
}

