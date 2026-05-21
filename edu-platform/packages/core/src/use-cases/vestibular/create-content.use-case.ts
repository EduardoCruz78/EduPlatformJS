import type { CreateVestibularContentInput } from '../../dtos';
import type { VestibularContent } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class CreateVestibularContentUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: CreateVestibularContentInput): Promise<VestibularContent> {
    if (!input.vestibularId) {
      throw AppError.validation('Vestibular invalido.');
    }

    const title = input.title.trim();

    if (!title) {
      throw AppError.validation('Titulo do conteudo e obrigatorio.');
    }

    if (!input.vestibularTopicId) {
      throw AppError.validation('Topico do vestibular e obrigatorio.');
    }

    const type = input.type?.trim() || null;
    const link = input.link?.trim() || null;
    const pdfUrl = input.pdfUrl?.trim() || null;

    if (type === 'VIDEO' && !link) {
      throw AppError.validation('Video precisa de link.');
    }

    if (type === 'PDF' && !pdfUrl && !link) {
      throw AppError.validation('PDF precisa de URL do arquivo ou link.');
    }

    if (type === 'ARTICLE' && !link) {
      throw AppError.validation('Artigo precisa de link.');
    }

    return this.vestibularRepository.createContent({
      vestibularId: input.vestibularId,
      vestibularTopicId: input.vestibularTopicId,
      title,
      type,
      link,
      pdfUrl,
      transcript: input.transcript?.trim() || null,
      captionsUrl: input.captionsUrl?.trim() || null,
      librasUrl: input.librasUrl?.trim() || null,
      audioDescriptionUrl: input.audioDescriptionUrl?.trim() || null,
    });
  }
}

