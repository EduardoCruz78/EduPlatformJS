import { PrismaClient } from "@prisma/client";
import type { Content } from "@edu-platform/core";

export class ContentRepository {
  constructor(private prisma: PrismaClient) {}

  // ✅ NOVO: Método getAll
  async getAll(): Promise<Content[]> {
    return this.prisma.content.findMany({
      orderBy: { title: "asc" },
    });
  }

  async getByTopic(topicId: number): Promise<Content[]> {
    return this.prisma.content.findMany({
      where: { topicId },
      orderBy: { title: "asc" },
    });
  }

  async findById(id: number): Promise<Content | null> {
    return this.prisma.content.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.content.create({ data });
  }

  async update(id: number, data: any) {
    return this.prisma.content.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.content.delete({ where: { id } });
  }

  async countByTopicId(topicId: number) {
    return this.prisma.content.count({ where: { topicId } });
  }
}