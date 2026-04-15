// packages/core/src/use-cases/content/get-by-id.use-case.ts

import type { Content } from '../../entities';
import type { IContentRepository } from '../../repositories/IContentRepository';

export class GetContentByIdUseCase {
    constructor(private readonly contentRepository: IContentRepository) {}

    async execute(id: number): Promise<Content | null> {
        return this.contentRepository.findById(id);
    }
}