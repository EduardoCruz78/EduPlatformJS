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
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: number): Promise<Subject | null> {
    return prisma.subject.findUnique({
      where: { id },
      include: { series: true },
    });
  }

  // ✅ ADICIONADO (corrige TS2339)
  async findByName(name: string): Promise<Subject | null> {
    return prisma.subject.findFirst({
      where: { name },
    });
  }

  // ✅ CREATE CORRIGIDO
  async create(data: {
    name: string;
    description?: string | null;
    imageUrl?: string | null;
    order?: number;
    seriesId?: number | null;
  }): Promise<Subject> {
    return prisma.subject.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        imageUrl: data.imageUrl ?? null,
        order: data.order ?? 0,
        seriesId: data.seriesId ?? null,
      },
      include: { series: true },
    });
  }

  // ✅ UPDATE CORRIGIDO
  async update(
      id: number,
      data: {
        name?: string;
        description?: string | null;
        imageUrl?: string | null;
        order?: number;
        seriesId?: number | null;
      }
  ): Promise<Subject> {
    return prisma.subject.update({
      where: { id },
      data: {
        ...data,
        description: data.description ?? undefined,
        imageUrl: data.imageUrl ?? undefined,
        order: data.order ?? undefined,
        seriesId: data.seriesId ?? undefined,
      },
      include: { series: true },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.subject.delete({
      where: { id },
    });
  }
}