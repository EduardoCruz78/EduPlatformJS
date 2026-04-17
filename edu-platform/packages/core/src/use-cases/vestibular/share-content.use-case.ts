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

    return this.vestibularRepository.shareContent(input);
  }
}

