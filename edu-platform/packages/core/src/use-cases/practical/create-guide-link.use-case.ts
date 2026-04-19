import type { CreatePracticalGuideLinkInput } from '../../dtos';
import type { PracticalGuideLink } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

export class CreatePracticalGuideLinkUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(input: CreatePracticalGuideLinkInput): Promise<PracticalGuideLink> {
    const guide = await this.practicalRepository.findGuideById(input.practicalGuideId);

    if (!guide) {
      throw AppError.notFound('Guia de vida pratica nao encontrado.');
    }

    const label = input.label.trim();
    const url = input.url.trim();

    if (!label) {
      throw AppError.validation('Rotulo do link e obrigatorio.');
    }

    if (!url) {
      throw AppError.validation('URL do link e obrigatoria.');
    }

    try {
      new URL(url);
    } catch {
      throw AppError.validation('URL do link deve ser valida.');
    }

    return this.practicalRepository.createGuideLink({
      practicalGuideId: input.practicalGuideId,
      label,
      url,
      order: input.order ?? 0,
    });
  }
}
