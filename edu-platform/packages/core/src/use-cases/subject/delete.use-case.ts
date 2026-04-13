import type { SubjectRepository, TopicRepository } from '@edu-platform/infrastructure';

export class DeleteSubjectUseCase {
  constructor(
      private readonly subjectRepository: SubjectRepository,
      private readonly topicRepository: TopicRepository
  ) {}

  async execute(id: number) {
    const subject = await this.subjectRepository.findById(id);

    if (!subject) {
      throw new Error("Matéria não encontrada");
    }

    // ⚠️ SEU ERRO REAL ESTAVA AQUI
    const topics = await this.topicRepository.getBySubject(id);

    if (topics.length > 0) {
      throw new Error(
          "Não é possível deletar uma matéria que possui tópicos associados"
      );
    }

    await this.subjectRepository.delete(id);

    return {
      success: true,
      message: "Matéria deletada com sucesso",
    };
  }
}