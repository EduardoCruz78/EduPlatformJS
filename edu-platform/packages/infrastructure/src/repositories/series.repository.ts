// packages/infrastructure/src/repositories/series.repository.ts

import { prisma } from '../prisma/client';
import type { CreateSeriesInput, ISeriesRepository, Series } from '@edu-platform/core';

export class SeriesRepository implements ISeriesRepository {
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

  async create(data: CreateSeriesInput): Promise<Series> {
    return prisma.series.create({
      data: {
        name: data.name,
      },
      include: { subjects: true },
    });
  }

  async update(id: number, data: Omit<import('@edu-platform/core').UpdateSeriesInput, 'id'>): Promise<Series> {
    return prisma.series.update({
      where: { id },
      data: {
        name: data.name,
      },
      include: { subjects: true },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.series.delete({
      where: { id },
    });
  }
}