// packages/core/src/use-cases/topic/get-by-id.use-case.ts

import type { Topic } from '../../entities';
import type { ITopicRepository } from '../../repositories/ITopicRepository';

export class GetTopicByIdUseCase {
    constructor(private readonly topicRepository: ITopicRepository) {}

    async execute(id: number): Promise<Topic | null> {
        return this.topicRepository.findById(id);
    }
}