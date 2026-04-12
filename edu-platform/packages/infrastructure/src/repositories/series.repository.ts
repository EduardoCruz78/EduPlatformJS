import { PrismaClient } from "@prisma/client";
import type { Series } from "@edu-platform/core";

export class SeriesRepository {
  constructor(private prisma: PrismaClient) {} // ✅ CONSTRUTOR COM PRISMA

  async getAll(): Promise<Series[]> {
    return this.prisma.series.findMany({
      include: { subjects: true },
      orderBy: { name: "asc" },
    });
  }

  async findById(id: number): Promise<Series | null> {
    return this.prisma.series.findUnique({
      where: { id },
      include: { subjects: true },
    });
  }

  async findByName(name: string) {
    return this.prisma.series.findFirst({ where: { name } });
  }

  async create(data: any) {
    return this.prisma.series.create({ data });
  }

  async update(id: number, data: any) {
    return this.prisma.series.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.series.delete({ where: { id } });
  }
}