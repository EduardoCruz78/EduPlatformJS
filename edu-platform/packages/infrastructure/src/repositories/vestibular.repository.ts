// packages/infrastructure/src/repositories/vestibular.repository.ts
import { prisma } from '../prisma/client';
import type { Vestibular, VestibularContent } from '@edu-platform/core';

export class VestibularRepository {
  async findAll(): Promise<Vestibular[]> {
    return await prisma.vestibular.findMany();
  }

  async findContents(vestibularId: number): Promise<VestibularContent[]> {
    return await prisma.vestibularContent.findMany({
      where: { vestibularId },
    });
  }
}