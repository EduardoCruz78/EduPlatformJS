import type { CreateAccessibilityThemeInput } from '../../dtos';
import type { AccessibilityTheme } from '../../entities';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class CreateAccessibilityThemeUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(input: CreateAccessibilityThemeInput): Promise<AccessibilityTheme> {
    const title = input.title.trim();

    if (!input.accessibilityCategoryId) {
      throw new Error('Categoria obrigatória');
    }

    if (!title) {
      throw new Error('Título do tema é obrigatório');
    }

    return this.accessibilityRepository.createTheme({
      accessibilityCategoryId: input.accessibilityCategoryId,
      accessibilityNeedId: input.accessibilityNeedId ?? null,
      title,
      content: input.content?.trim() || null,
    });
  }
}
