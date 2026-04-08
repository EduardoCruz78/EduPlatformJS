// packages/core/src/use-cases/checklist/create.use-case.ts
import type { CreateChecklistInput } from '../../dtos';
import type { Checklist } from '../../entities';
import { prisma } from '@edu-platform/infrastructure';

export class CreateChecklistUseCase {
  async execute(input: CreateChecklistInput): Promise<Checklist> {
    return await prisma.checklist.create({ data: input });
  }
}