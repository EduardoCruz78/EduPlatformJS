import { prisma } from '../prisma/client';
import type { Series } from '@edu-platform/core';

export class SeriesRepository {
  async getAll(): Promise<Series[]> {
    return prisma.series.findMany({
      include: { subjects: true },           // ← mantido do original .NET
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: number): Promise<Series | null> {
    return prisma.series.findUnique({
      where: { id },
      include: { subjects: true },           // ← mantido do original .NET
    });
  }
}