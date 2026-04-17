import type { CreateAccessibilityThemeInput } from '../../dtos';
import type { AccessibilityTheme } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class CreateAccessibilityThemeUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(input: CreateAccessibilityThemeInput): Promise<AccessibilityTheme> {
    const title = input.title.trim();

    if (!input.accessibilityCategoryId) {
      throw AppError.validation('Categoria obrigatoria.');
    }

    if (!title) {
      throw AppError.validation('Titulo do tema e obrigatorio.');
    }

    return this.accessibilityRepository.createTheme({
      accessibilityCategoryId: input.accessibilityCategoryId,
      accessibilityNeedId: input.accessibilityNeedId ?? null,
      title,
      content: input.content?.trim() || null,
    });
  }
}

