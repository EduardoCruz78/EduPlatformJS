import type { ContentRepository, ChecklistRepository } from '@edu-platform/infrastructure';

export class DeleteContentUseCase {
  constructor(
    private readonly contentRepository: ContentRepository,
    private readonly checklistRepository: ChecklistRepository
  ) {}

  async execute(id: number) {
    const content = await this.contentRepository.findById(id);
    if (!content) {
      throw new Error("Conteúdo não encontrado");
    }

    await this.checklistRepository.deleteByContentId(id);
    await this.contentRepository.delete(id);
    
    return { success: true, message: "Conteúdo deletado com sucesso" };
  }
}