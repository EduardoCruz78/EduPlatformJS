
// ✅ CORRETO
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';
export class DeleteVestibularUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(id: number) { // Mudei de string para number
    const vestibular = await this.vestibularRepository.findById(id);
    if (!vestibular) {
      throw new Error("Vestibular não encontrado");
    }

    await this.vestibularRepository.delete(id);
    return { success: true, message: "Vestibular deletado com sucesso" };
  }
}