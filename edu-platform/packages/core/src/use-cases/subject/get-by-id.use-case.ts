// packages/core/src/use-cases/subject/get-by-id.use-case.ts

import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class GetSubjectByIdUseCase {
    constructor(private readonly subjectRepository: ISubjectRepository) {}

    async execute(id: number): Promise<Subject | null> {
        return this.subjectRepository.findById(id);
    }
}