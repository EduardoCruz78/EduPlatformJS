import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class FindTopicByIdUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(id: number): Promise<Topic | null> {
    return this.topicRepository.findById(id);
  }
}
