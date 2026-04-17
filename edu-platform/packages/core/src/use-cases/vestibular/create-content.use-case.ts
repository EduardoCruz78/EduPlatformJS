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

    return this.vestibularRepository.createContent({
      vestibularId: input.vestibularId,
      title,
      type: input.type?.trim() || null,
      link: input.link?.trim() || null,
      pdfUrl: input.pdfUrl?.trim() || null,
      transcript: input.transcript?.trim() || null,
      captionsUrl: input.captionsUrl?.trim() || null,
      librasUrl: input.librasUrl?.trim() || null,
      audioDescriptionUrl: input.audioDescriptionUrl?.trim() || null,
    });
  }
}

