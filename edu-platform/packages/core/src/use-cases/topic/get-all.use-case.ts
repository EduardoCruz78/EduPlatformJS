// packages/core/src/use-cases/topic/get-all.use-case.ts

import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class GetAllTopicsUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(): Promise<Topic[]> {
    return this.topicRepository.findAll();
  }
}
