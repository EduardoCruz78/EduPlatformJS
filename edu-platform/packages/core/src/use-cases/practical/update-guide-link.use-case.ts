import type { UpdatePracticalGuideLinkInput } from '../../dtos';
import type { PracticalGuideLink } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';
import { normalizeNumber } from '../../utils/normalize.ts';

export class UpdatePracticalGuideLinkUseCase {
  constructor(private readonly practicalRepository: IPracticalRepository) {}

  async execute(input: UpdatePracticalGuideLinkInput): Promise<PracticalGuideLink> {
    const existingLink = await this.practicalRepository.findGuideLinkById(input.id);

    if (!existingLink) {
      throw AppError.notFound('Link util nao encontrado.');
    }

    const practicalGuideId = input.practicalGuideId ?? existingLink.practicalGuideId;
    const guide = await this.practicalRepository.findGuideById(practicalGuideId);

    if (!guide) {
      throw AppError.notFound('Guia de vida pratica nao encontrado.');
    }

    const label =
      input.label === undefined ? existingLink.label : input.label.trim();
    const url = input.url === undefined ? existingLink.url : input.url.trim();

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

    return this.practicalRepository.updateGuideLink(existingLink.id, {
      practicalGuideId,
      label,
      url,
      order: normalizeNumber(input.order, existingLink.order ?? 0),
    });
  }
}
