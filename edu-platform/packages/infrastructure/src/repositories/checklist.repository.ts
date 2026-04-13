// packages/infrastructure/src/repositories/checklist.repository.ts

import { prisma } from '../prisma/client';
import type { Checklist, CreateChecklistInput } from '@edu-platform/core';

export class ChecklistRepository {
  async create(data: CreateChecklistInput): Promise<Checklist> {
    return prisma.checklist.create({ data });
  }

  async getByUser(userId: string): Promise<Checklist[]> {
    return prisma.checklist.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string): Promise<Checklist | null> {
    return prisma.checklist.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async findByContentId(contentId: number): Promise<Checklist[]> {
    return prisma.checklist.findMany({
      where: { contentId },
    });
  }

  async delete(id: string) {
    return prisma.checklist.delete({ where: { id: parseInt(id) } });
  }

  async deleteByContentId(contentId: number) {
    return prisma.checklist.deleteMany({ where: { contentId } });
  }
}