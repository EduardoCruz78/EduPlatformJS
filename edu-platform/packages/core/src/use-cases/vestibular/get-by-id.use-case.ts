// packages/core/src/use-cases/vestibular/get-by-id.use-case.ts

import type { Vestibular } from '../../entities';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository';

export class GetVestibularByIdUseCase {
    constructor(private readonly vestibularRepository: IVestibularRepository) {}

    async execute(id: number): Promise<Vestibular | null> {
        return this.vestibularRepository.findById(id);
    }
}