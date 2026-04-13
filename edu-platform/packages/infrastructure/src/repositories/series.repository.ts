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

  async findByName(name: string) {
    return prisma.series.findFirst({ where: { name } });
  }

  async create(data: any) {
    return prisma.series.create({ data });
  }

  async update(id: number, data: any) {
    return prisma.series.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.series.delete({ where: { id } });
  }
}