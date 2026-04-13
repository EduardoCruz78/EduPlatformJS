
// ✅ CORRETO
import type { VestibularRepository } from '@edu-platform/infrastructure';

export class DeleteVestibularUseCase {
  constructor(private readonly vestibularRepository: VestibularRepository) {}

  async execute(id: number) { // Mudei de string para number
    const vestibular = await this.vestibularRepository.findById(id);
    if (!vestibular) {
      throw new Error("Vestibular não encontrado");
    }

    await this.vestibularRepository.delete(id);
    return { success: true, message: "Vestibular deletado com sucesso" };
  }
}