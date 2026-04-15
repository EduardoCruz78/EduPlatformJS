// packages/core/src/use-cases/subject/get-all.use-case.ts

import type { Subject } from '../../entities';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository';

export class GetAllSubjectsUseCase {
    constructor(private readonly subjectRepository: ISubjectRepository) {}

    async execute(): Promise<Subject[]> {
        return this.subjectRepository.findAll();
    }
}