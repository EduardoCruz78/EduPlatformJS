// packages/infrastructure/src/repositories/series.repository.ts
import { prisma } from '../prisma/client';
import type { Series } from '@edu-platform/core';

export class SeriesRepository {
  async findAll(): Promise<Series[]> {
    return await prisma.series.findMany({
      include: { subjects: true },
    });
  }

  async findById(id: number): Promise<Series | null> {
    return await prisma.series.findUnique({
      where: { id },
      include: { subjects: true },
    });
  }
}