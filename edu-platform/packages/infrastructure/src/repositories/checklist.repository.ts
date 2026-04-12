import { PrismaClient } from "@prisma/client";
import type { Checklist, CreateChecklistInput } from "@edu-platform/core";

export class ChecklistRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateChecklistInput): Promise<Checklist> {
    return this.prisma.checklist.create({ data });
  }

  async getByUser(userId: string): Promise<Checklist[]> {
    return this.prisma.checklist.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: string): Promise<Checklist | null> {
    return this.prisma.checklist.findUnique({
      where: { id: parseInt(id) },
    });
  }

  // ✅ NOVO: Método findByContentId
  async findByContentId(contentId: number): Promise<Checklist[]> {
    return this.prisma.checklist.findMany({
      where: { contentId },
    });
  }

  async delete(id: string) {
    return this.prisma.checklist.delete({ where: { id: parseInt(id) } });
  }

  async deleteByContentId(contentId: number) {
    return this.prisma.checklist.deleteMany({ where: { contentId } });
  }
}