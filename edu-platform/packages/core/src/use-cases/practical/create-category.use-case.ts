import type { CreatePracticalCategoryInput } from '../../dtos';
import type { PracticalCategory } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';
import { slugify } from '../../utils/slug.ts';

export class CreatePracticalCategoryUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(input: CreatePracticalCategoryInput): Promise<PracticalCategory> {
    const name = input.name.trim();

    if (!name) {
      throw AppError.validation('Nome da categoria e obrigatorio.');
    }

    const slug = slugify(input.slug?.trim() || name);

    if (!slug) {
      throw AppError.validation('Slug da categoria e obrigatorio.');
    }

    const existingCategory = await this.practicalRepository.findCategoryBySlug(slug);

    if (existingCategory) {
      throw AppError.conflict('Ja existe uma categoria com este slug.');
    }

    return this.practicalRepository.createCategory({
      name,
      description: input.description?.trim() || null,
      slug,
      icon: input.icon?.trim() || null,
      order: input.order ?? 0,
    });
  }
}
