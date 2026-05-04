import type { CreateAccessibilityThemeMaterialInput } from '../../dtos';
import type { AccessibilityThemeMaterial } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository';

export class CreateAccessibilityThemeMaterialUseCase {
  constructor(private readonly accessibilityRepository: IAccessibilityRepository) {}

  async execute(
    input: CreateAccessibilityThemeMaterialInput
  ): Promise<AccessibilityThemeMaterial> {
    if (!input.accessibilityThemeId) {
      throw AppError.validation('Tema obrigatorio.');
    }

    const title = input.title.trim();
    const summary = input.summary.trim();
    const content = input.content.trim();
    const link = input.link.trim();

    if (!title || !summary || !content || !link) {
      throw AppError.validation('Material precisa de titulo, resumo, conteudo e link.');
    }

    return this.accessibilityRepository.createThemeMaterial({
      accessibilityThemeId: input.accessibilityThemeId,
      title,
      summary,
      content,
      type: input.type,
      link,
      order: input.order ?? 0,
    });
  }
}
