import type { CreateVestibularTopicInput } from '../../dtos';
import type { VestibularTopic } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class CreateVestibularTopicUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: CreateVestibularTopicInput): Promise<VestibularTopic> {
    if (!input.vestibularId) {
      throw new Error('Vestibular inválido');
    }

    const name = input.name.trim();

    if (!name) {
      throw new Error('Nome do tópico é obrigatório');
    }

    return this.vestibularRepository.createTopic({
      vestibularId: input.vestibularId,
      name,
      notes: input.notes?.trim() || null,
      tags: input.tags?.trim() || null,
    });
  }
}
