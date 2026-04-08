// packages/infrastructure/src/repositories/subject.repository.ts
import { prisma } from '../prisma/client';
import type { Subject } from '@edu-platform/core';

export class SubjectRepository {
  async findBySeries(seriesId: number): Promise<Subject[]> {
    return await prisma.subject.findMany({
      where: { seriesId },
      include: { series: true },
    });
  }

  async findAll(): Promise<Subject[]> {
    return await prisma.subject.findMany({ include: { series: true } });
  }
}