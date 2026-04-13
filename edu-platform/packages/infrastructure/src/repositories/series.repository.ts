// packages/infrastructure/src/repositories/series.repository.ts

import { prisma } from '../prisma/client';
import type { Series } from '@edu-platform/core';

export class SeriesRepository {
  async getAll(): Promise<Series[]> {
    return prisma.series.findMany({
      include: { subjects: true },
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: number): Promise<Series | null> {
    return prisma.series.findUnique({
      where: { id },
      include: { subjects: true },
    });
  }

  async findByName(name: string): Promise<Series | null> {
    return prisma.series.findFirst({
      where: { name },
    });
  }

  async create(data: { name: string }): Promise<Series> {
    return prisma.series.create({ data });
  }

  async update(id: number, data: { name?: string }): Promise<Series> {
    return prisma.series.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.series.delete({
      where: { id },
    });
  }
}