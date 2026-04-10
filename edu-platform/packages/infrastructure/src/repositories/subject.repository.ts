import { prisma } from '../prisma/client';
import type { Subject } from '@edu-platform/core';

export class SubjectRepository {
  async getBySeries(seriesId: number): Promise<Subject[]> {
    return prisma.subject.findMany({
      where: { seriesId },
      include: { series: true },
      orderBy: { name: 'asc' },
    });
  }

  async findAll(): Promise<Subject[]> {        // ← método extra do original .NET
    return prisma.subject.findMany({
      include: { series: true },
    });
  }

  async findById(id: number): Promise<Subject | null> {
    return prisma.subject.findUnique({
      where: { id },
      include: { series: true },
    });
  }
}