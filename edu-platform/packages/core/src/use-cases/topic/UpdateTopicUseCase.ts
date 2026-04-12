import { TopicRepository } from "@/infrastructure/repositories/TopicRepository";

export interface UpdateTopicInput {
  id: string;
  name?: string;
  description?: string;
  subjectIds?: string[];
  imageUrl?: string | null;
  order?: number;
}

export class UpdateTopicUseCase {
  constructor(private topicRepository: TopicRepository) {}

  async execute(input: UpdateTopicInput) {
    const topic = await this.topicRepository.findById(input.id);
    if (!topic) {
      throw new Error("Tópico não encontrado");
    }

    if (input.name && !input.name.trim()) {
      throw new Error("Nome não pode estar vazio");
    }

    return this.topicRepository.update(input.id, {
      name: input.name?.trim() || topic.name,
      description: input.description?.trim() || topic.description,
      subjectIds: input.subjectIds || topic.subjects.map((s) => s.id),
      imageUrl:
        input.imageUrl !== undefined ? input.imageUrl : topic.imageUrl,
      order: input.order !== undefined ? input.order : topic.order,
    });
  }
}