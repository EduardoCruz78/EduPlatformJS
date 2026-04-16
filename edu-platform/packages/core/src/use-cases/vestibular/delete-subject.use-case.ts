import type { DeleteResponseDto } from '../../dtos';
import type { DeleteVestibularSubjectInput } from '../../dtos/admin.dto';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class DeleteVestibularSubjectUseCase {
  constructor(private readonly vestibularRepository: IVestibularRepository) {}

  async execute(input: DeleteVestibularSubjectInput): Promise<DeleteResponseDto> {
    if (!input.vestibularId || !input.subjectId) {
      throw new Error('Vínculo inválido');
    }

    await this.vestibularRepository.deleteSubject(input);
    return { success: true };
  }
}
