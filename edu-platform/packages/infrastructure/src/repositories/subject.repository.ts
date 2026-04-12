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

  async findAll(): Promise<Subject[]> {
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

  async findByName(name: string) {
    return prisma.subject.findFirst({ where: { name } });
  }

  async create(data: any) {
    return prisma.subject.create({ data });
  }

  async update(id: number, data: any) {
    return prisma.subject.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.subject.delete({ where: { id } });
  }
}