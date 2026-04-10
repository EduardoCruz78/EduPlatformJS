import { prisma } from '../prisma/client';
import type { Checklist, CreateChecklistInput } from '@edu-platform/core';

export class ChecklistRepository {
  async create(data: CreateChecklistInput): Promise<Checklist> {
    return prisma.checklist.create({ data });
  }

  async getByUser(userId: string): Promise<Checklist[]> {
    return prisma.checklist.findMany({
      where: { userId },
      include: { content: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}