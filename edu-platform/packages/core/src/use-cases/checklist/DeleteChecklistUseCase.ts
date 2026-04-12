import type { ChecklistRepository } from '@edu-platform/infrastructure';

export class DeleteChecklistUseCase {
  constructor(private readonly checklistRepository: ChecklistRepository) {}

  async execute(id: string) {
    const checklist = await this.checklistRepository.findById(id);
    if (!checklist) {
      throw new Error("Checklist não encontrada");
    }

    await this.checklistRepository.delete(id);
    return { success: true, message: "Checklist deletada com sucesso" };
  }
}