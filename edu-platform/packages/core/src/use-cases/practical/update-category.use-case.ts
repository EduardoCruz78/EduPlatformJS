import type { UpdatePracticalCategoryInput } from '../../dtos';
import type { PracticalCategory } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';
import { normalizeNullableString, normalizeNumber } from '../../utils/normalize.ts';
import { slugify } from '../../utils/slug.ts';

export class UpdatePracticalCategoryUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(input: UpdatePracticalCategoryInput): Promise<PracticalCategory> {
    const existingCategory = await this.practicalRepository.findCategoryById(input.id);

    if (!existingCategory) {
      throw AppError.notFound('Categoria de vida pratica nao encontrada.');
    }

    const name =
      input.name === undefined ? existingCategory.name : input.name.trim();

    if (!name) {
      throw AppError.validation('Nome da categoria e obrigatorio.');
    }

    const slugSource =
      input.slug === undefined ? existingCategory.slug : input.slug?.trim() || name;
    const slug = slugify(slugSource);

    if (!slug) {
      throw AppError.validation('Slug da categoria e obrigatorio.');
    }

    const conflictingCategory = await this.practicalRepository.findCategoryBySlug(slug);

    if (conflictingCategory && conflictingCategory.id !== existingCategory.id) {
      throw AppError.conflict('Ja existe uma categoria com este slug.');
    }

    return this.practicalRepository.updateCategory(existingCategory.id, {
      name,
      description: normalizeNullableString(
        input.description,
        existingCategory.description ?? null
      ),
      slug,
      icon: normalizeNullableString(input.icon, existingCategory.icon ?? null),
      order: normalizeNumber(input.order, existingCategory.order ?? 0),
    });
  }
}
