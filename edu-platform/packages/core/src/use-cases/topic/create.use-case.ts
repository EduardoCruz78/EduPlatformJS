import {ITopicRepository} from "../../repositories";

export interface CreateTopicInput {
  name: string;
  subjectIds: number[];

  // Mantidos para não quebrar os chamadores atuais,
  // mas não são persistidos porque o schema atual não possui esses campos.
  description?: string;
  seriesId?: number;
  imageUrl?: string | null;
  order?: number;
}

export class CreateTopicUseCase {
  constructor(private readonly topicRepository: ITopicRepository) {}

  async execute(input: CreateTopicInput) {
    const name = input.name?.trim();

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