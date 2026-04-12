import { VestibularRepository } from "@/infrastructure/repositories/VestibularRepository";

export class DeleteVestibularUseCase {
  constructor(private vestibularRepository: VestibularRepository) {}

  async execute(id: string) {
    const vestibular = await this.vestibularRepository.findById(id);
    if (!vestibular) {
      throw new Error("Vestibular não encontrado");
    }

    await this.vestibularRepository.delete(id);
    return { success: true, message: "Vestibular deletado com sucesso" };
  }
}