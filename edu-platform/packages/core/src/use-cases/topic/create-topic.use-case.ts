// packages/core/src/use-cases/topic/create-topic.use-case.ts

import type { CreateTopicInput } from '../../dtos';
import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class CreateTopicUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(input: CreateTopicInput): Promise<Topic> {
    const name = input.name.trim();

    if (!name) {
      throw new Error('Nome do tópico é obrigatório');
    }

    if (!input.subjectIds?.length) {
      throw new Error('Selecione ao menos uma matéria');
    }

    const existingTopic = await this.topicRepository.findByName(name);

    if (existingTopic) {
      throw new Error('Tópico com este nome já existe');
    }

    return this.topicRepository.create({
      name,
      subjectIds: [...new Set(input.subjectIds)],
    });
  }
}
