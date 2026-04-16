import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class FindTopicsUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(): Promise<Topic[]> {
    return this.topicRepository.find();
  }
}
