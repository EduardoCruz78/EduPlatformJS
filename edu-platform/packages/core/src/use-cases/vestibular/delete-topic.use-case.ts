import type { DeleteResponseDto } from '../../dtos';
import type { DeleteVestibularTopicInput } from '../../dtos/admin.dto';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class DeleteVestibularTopicUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: DeleteVestibularTopicInput): Promise<DeleteResponseDto> {
    if (!input.vestibularId || !input.topicId) {
      throw new Error('Tópico inválido');
    }

    await this.vestibularRepository.deleteTopic(input);
    return { success: true };
  }
}
