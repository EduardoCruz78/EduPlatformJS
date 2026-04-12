import type { TopicRepository } from '@edu-platform/infrastructure';

export interface CreateTopicInput {
  name: string;
  description: string;
  seriesId: number;
  subjectIds: number[];
  imageUrl?: string | null;
  order?: number;
}

export class CreateTopicUseCase {
  constructor(private readonly topicRepository: TopicRepository) {}

  async execute(input: CreateTopicInput) {
    if (!input.name?.trim()) {
      throw new Error("Nome do tópico é obrigatório");
    }

    const existingTopic = await this.topicRepository.findByName(input.name);
    if (existingTopic) {
      throw new Error("Tópico com este nome já existe");
    }

    return this.topicRepository.create({
      name: input.name.trim(),
      description: input.description.trim(),
      seriesId: input.seriesId,
      subjectIds: input.subjectIds,
      imageUrl: input.imageUrl || null,
      order: input.order || 0,
    });
  }
}