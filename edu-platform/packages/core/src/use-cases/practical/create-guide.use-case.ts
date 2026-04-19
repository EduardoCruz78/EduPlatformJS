import type { CreatePracticalGuideInput } from '../../dtos';
import type { PracticalGuide } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';
import { slugify } from '../../utils/slug.ts';

export class CreatePracticalGuideUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(input: CreatePracticalGuideInput): Promise<PracticalGuide> {
    const category = await this.practicalRepository.findCategoryById(
      input.practicalCategoryId
    );

    if (!category) {
      throw AppError.notFound('Categoria de vida pratica nao encontrada.');
    }

    const title = input.title.trim();
    const summary = input.summary.trim();
    const content = input.content.trim();

    if (!title) {
      throw AppError.validation('Titulo do guia e obrigatorio.');
    }

    if (!summary) {
      throw AppError.validation('Resumo do guia e obrigatorio.');
    }

    if (!content) {
      throw AppError.validation('Conteudo do guia e obrigatorio.');
    }

    const slug = slugify(input.slug?.trim() || title);

    if (!slug) {
      throw AppError.validation('Slug do guia e obrigatorio.');
    }

    const existingGuide = await this.practicalRepository.findGuideBySlug(slug);

    if (existingGuide) {
      throw AppError.conflict('Ja existe um guia com este slug.');
    }

    return this.practicalRepository.createGuide({
      practicalCategoryId: input.practicalCategoryId,
      title,
      summary,
      content,
      slug,
      order: input.order ?? 0,
      isPublished: input.isPublished ?? false,
    });
  }
}
