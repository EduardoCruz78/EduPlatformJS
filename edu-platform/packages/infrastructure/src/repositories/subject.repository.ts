// packages/infrastructure/src/repositories/subject.repository.ts
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
      orderBy: { name: 'asc' }
    });
  }

  async findById(id: number): Promise<Subject | null> {
    return prisma.subject.findUnique({
      where: { id },
      include: { series: true },
    });
  }

  // 👇 NOVOS MÉTODOS ADICIONADOS 👇

  async create(data: { name: string; seriesId?: number }): Promise<Subject> {
    return prisma.subject.create({
      data,
      include: { series: true }
    });
  }

  async update(id: number, data: { name?: string; seriesId?: number }): Promise<Subject> {
    return prisma.subject.update({
      where: { id },
      data,
      include: { series: true }
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.subject.delete({
      where: { id }
    });
  }
}