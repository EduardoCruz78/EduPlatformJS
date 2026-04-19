import type { UpdatePracticalGuideInput } from '../../dtos';
import type { PracticalGuide } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';
import { normalizeNumber } from '../../utils/normalize.ts';
import { slugify } from '../../utils/slug.ts';

export class UpdatePracticalGuideUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(input: UpdatePracticalGuideInput): Promise<PracticalGuide> {
    const existingGuide = await this.practicalRepository.findGuideById(input.id);

    if (!existingGuide) {
      throw AppError.notFound('Guia de vida pratica nao encontrado.');
    }

    const practicalCategoryId =
      input.practicalCategoryId ?? existingGuide.practicalCategoryId;

    const category = await this.practicalRepository.findCategoryById(practicalCategoryId);

    if (!category) {
      throw AppError.notFound('Categoria de vida pratica nao encontrada.');
    }

    const title =
      input.title === undefined ? existingGuide.title : input.title.trim();
    const summary =
      input.summary === undefined ? existingGuide.summary : input.summary.trim();
    const content =
      input.content === undefined ? existingGuide.content : input.content.trim();

    if (!title) {
      throw AppError.validation('Titulo do guia e obrigatorio.');
    }

    if (!summary) {
      throw AppError.validation('Resumo do guia e obrigatorio.');
    }

    if (!content) {
      throw AppError.validation('Conteudo do guia e obrigatorio.');
    }

    const slugSource =
      input.slug === undefined ? existingGuide.slug : input.slug?.trim() || title;
    const slug = slugify(slugSource);

    if (!slug) {
      throw AppError.validation('Slug do guia e obrigatorio.');
    }

    const conflictingGuide = await this.practicalRepository.findGuideBySlug(slug);

    if (conflictingGuide && conflictingGuide.id !== existingGuide.id) {
      throw AppError.conflict('Ja existe um guia com este slug.');
    }

    return this.practicalRepository.updateGuide(existingGuide.id, {
      practicalCategoryId,
      title,
      summary,
      content,
      slug,
      order: normalizeNumber(input.order, existingGuide.order ?? 0),
      isPublished: input.isPublished ?? existingGuide.isPublished,
    });
  }
}
