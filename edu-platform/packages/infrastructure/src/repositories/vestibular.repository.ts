// packages/infrastructure/src/repositories/vestibular.repository.ts
import { prisma } from '../prisma/client';
import type { Vestibular, VestibularContent } from '@edu-platform/core';

export class VestibularRepository {
  async getAll(): Promise<Vestibular[]> {
    return prisma.vestibular.findMany({
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
      orderBy: { name: 'asc' },
    });
  }

  async getAvailable(): Promise<Vestibular[]> {
    return prisma.vestibular.findMany({
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
      orderBy: { name: 'asc' },
    });
  }

  // 👇 MÉTODO FALTANDO - ADICIONE AQUI
  async findById(id: number): Promise<Vestibular | null> {
    return prisma.vestibular.findUnique({
      where: { id },
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });
  }

  // 👇 MÉTODO FALTANDO - ADICIONE AQUI
  async findByNameAndYear(name: string, year: number): Promise<Vestibular | null> {
    return prisma.vestibular.findFirst({
      where: {
        name,
        // Se você quer filtrar por ano, precisa adicionar 'year' ao schema do Vestibular
        // Por enquanto, apenas filtra por nome
      },
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });
  }

  // 👇 MÉTODO FALTANDO - ADICIONE AQUI
  async create(data: {
    name: string;
    description: string;
    year: number;
    imageUrl?: string | null;
  }): Promise<Vestibular> {
    return prisma.vestibular.create({
      data: {
        name: data.name,
        description: data.description,
        // year: data.year, // ← Descomente quando adicionar 'year' ao schema
      },
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });
  }

  // 👇 MÉTODO FALTANDO - ADICIONE AQUI
  async update(
    id: number,
    data: {
      name?: string;
      description?: string;
      year?: number;
      imageUrl?: string | null;
    }
  ): Promise<Vestibular> {
    return prisma.vestibular.update({
      where: { id },
      data,
      include: {
        vestibularSubjects: { include: { subject: true } },
        vestibularContents: true,
        vestibularTopics: true,
      },
    });
  }

  // 👇 MÉTODO FALTANDO - ADICIONE AQUI
  async delete(id: number): Promise<void> {
    await prisma.vestibular.delete({ where: { id } });
  }

  async findContents(vestibularId: number): Promise<VestibularContent[]> {
    return prisma.vestibularContent.findMany({
      where: { vestibularId },
    });
  }
}