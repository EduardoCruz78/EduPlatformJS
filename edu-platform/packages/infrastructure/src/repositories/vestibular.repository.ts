import { prisma } from '../prisma/client';
import type { Vestibular, VestibularContent } from '@edu-platform/core';

export class VestibularRepository {
  async getAvailable(): Promise<Vestibular[]> {
    return prisma.vestibular.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findContents(vestibularId: number): Promise<VestibularContent[]> {  // ← método extra do original
    return prisma.vestibularContent.findMany({
      where: { vestibularId },
    });
  }
}