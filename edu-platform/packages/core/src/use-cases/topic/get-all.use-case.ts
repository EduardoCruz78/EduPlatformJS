// packages/core/src/use-cases/topic/get-all.use-case.ts
import type { ITopicRepository } from "@/repositories/ITopicRepository";

export class GetAllTopicsUseCase {
  constructor(private topicRepository: ITopicRepository) {}

  async execute() {
    return this.topicRepository.getAll();
  }
}