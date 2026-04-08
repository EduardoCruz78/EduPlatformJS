// packages/core/src/use-cases/checklist/get-by-user.use-case.ts
import { prisma } from '@edu-platform/infrastructure';
import type { Checklist } from '../../entities';

export class GetChecklistByUserUseCase {
  async execute(userId: string): Promise<Checklist[]> {
    return await prisma.checklist.findMany({
      where: { userId },
      include: { content: true },
    });
  }
}