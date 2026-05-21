import type { ShareVestibularContentInput } from '../../dtos';
import type { VestibularContent } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class ShareVestibularContentUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: ShareVestibularContentInput): Promise<VestibularContent> {
    if (!input.vestibularId || !input.contentId) {
      throw AppError.validation('Conteudo invalido.');
    }

    if (!input.vestibularTopicId) {
      throw AppError.validation('Topico do vestibular e obrigatorio.');
    }

    const existingContents = await this.vestibularRepository.findContents(
      input.vestibularId,
      input.vestibularTopicId
    );
    const alreadyShared = existingContents.some(
      (content) => content.originalContentId === input.contentId
    );

    if (alreadyShared) {
      throw AppError.conflict('Conteudo ja compartilhado neste topico.');
    }

    return this.vestibularRepository.shareContent(input);
  }
}

