import {IChecklistRepository} from "../../repositories";

export class DeleteChecklistUseCase {
  constructor(private readonly checklistRepository: IChecklistRepository) {}

  async execute(id: number) {
    const checklist = await this.checklistRepository.findById(id);
    if (!checklist) {
      throw new Error("Checklist não encontrada");
    }

    await this.checklistRepository.delete(id);
    return { success: true, message: "Checklist deletada com sucesso" };
  }
}