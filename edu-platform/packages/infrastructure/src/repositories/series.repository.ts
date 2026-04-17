// packages/infrastructure/src/repositories/series.repository.ts

import { prisma } from '../prisma/client';
import { SeriesMapper } from '../mappers/series.mapper';
import type { CreateSeriesInput, ISeriesRepository, Series } from '@edu-platform/core';

export class SeriesRepository implements ISeriesRepository {
  async find(): Promise<Series[]> {
    const data = await prisma.series.findMany({
      include: { subjects: true },
      orderBy: { name: 'asc' },
    });

    return SeriesMapper.toDomainList(data);
  }

  async findById(id: number): Promise<Series | null> {
    const data = await prisma.series.findUnique({
      where: { id },
      include: { subjects: true },
    });

    if (!data) {
      return null;
    }

    return SeriesMapper.toDomain(data);
  }

  async findByName(name: string): Promise<Series | null> {
    const data = await prisma.series.findUnique({
      where: { name },
      include: { subjects: true },
    });

    if (!data) {
      return null;
    }

    return SeriesMapper.toDomain(data);
  }

  async create(data: CreateSeriesInput): Promise<Series> {
    const created = await prisma.series.create({
      data: {
        name: data.name,
      },
      include: { subjects: true },
    });

    return SeriesMapper.toDomain(created);
  }

  async update(id: number, data: Omit<import('@edu-platform/core').UpdateSeriesInput, 'id'>): Promise<Series> {
    const updated = await prisma.series.update({
      where: { id },
      data: {
        name: data.name,
      },
      include: { subjects: true },
    });

    return SeriesMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await prisma.series.delete({
      where: { id },
    });
  }
}
