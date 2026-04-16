import type { ShareVestibularContentInput } from '../../dtos';
import type { VestibularContent } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class ShareVestibularContentUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: ShareVestibularContentInput): Promise<VestibularContent> {
    if (!input.vestibularId || !input.contentId) {
      throw new Error('Conteúdo inválido');
    }

    return this.vestibularRepository.shareContent(input);
  }
}
