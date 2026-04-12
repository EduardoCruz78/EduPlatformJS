// packages/core/src/use-cases/topic/GetAllTopicsUseCase.ts
import type { ITopicRepository } from '@/repositories/ITopicRepository';

export class GetAllTopicsUseCase {
  constructor(private topicRepository: ITopicRepository) {}

  async execute() {
    return this.topicRepository.getAll();
  }
}