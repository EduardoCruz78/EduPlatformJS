import type { CreateVestibularContentInput } from '../../dtos';
import type { VestibularContent } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class CreateVestibularContentUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: CreateVestibularContentInput): Promise<VestibularContent> {
    if (!input.vestibularId) {
      throw new Error('Vestibular inválido');
    }

    const title = input.title.trim();

    if (!title) {
      throw new Error('Título do conteúdo é obrigatório');
    }

    return this.vestibularRepository.createContent({
      vestibularId: input.vestibularId,
      title,
      type: input.type?.trim() || null,
      link: input.link?.trim() || null,
      pdfUrl: input.pdfUrl?.trim() || null,
    });
  }
}
