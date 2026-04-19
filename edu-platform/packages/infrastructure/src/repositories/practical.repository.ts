import type {
  CreatePracticalCategoryInput,
  CreatePracticalGuideInput,
  CreatePracticalGuideLinkInput,
  IPracticalRepository,
  PracticalCategory,
  PracticalGuide,
  PracticalGuideLink,
  UpdatePracticalCategoryInput,
  UpdatePracticalGuideInput,
  UpdatePracticalGuideLinkInput,
} from '@edu-platform/core';
import type { Prisma } from '@prisma/client';
import { PracticalMapper } from '../mappers/practical.mapper';
import { prisma } from '../prisma/client';

const guideLinkOrderBy: Prisma.PracticalGuideLinkOrderByWithRelationInput[] = [
  { order: 'asc' },
  { label: 'asc' },
];

const guideOrderBy: Prisma.PracticalGuideOrderByWithRelationInput[] = [
  { order: 'asc' },
  { title: 'asc' },
];

const categoryOrderBy: Prisma.PracticalCategoryOrderByWithRelationInput[] = [
  { order: 'asc' },
  { name: 'asc' },
];

const guideInclude: Prisma.PracticalGuideInclude = {
  links: {
    orderBy: guideLinkOrderBy,
  },
};

const categoryInclude: Prisma.PracticalCategoryInclude = {
  guides: {
    include: guideInclude,
    orderBy: guideOrderBy,
  },
};

export class PracticalRepository implements IPracticalRepository {
  async findCategories(): Promise<PracticalCategory[]> {
    const data = await prisma.practicalCategory.findMany({
      include: categoryInclude,
      orderBy: categoryOrderBy,
    });

    return PracticalMapper.toCategoryList(data);
  }

  async findPublicCategories(): Promise<PracticalCategory[]> {
    const data = await prisma.practicalCategory.findMany({
      where: {
        guides: {
          some: {
            isPublished: true,
          },
        },
      },
      include: {
        guides: {
          where: { isPublished: true },
          include: guideInclude,
          orderBy: guideOrderBy,
        },
      },
      orderBy: categoryOrderBy,
    });

    return PracticalMapper.toCategoryList(data);
  }

  async findCategoryById(id: number): Promise<PracticalCategory | null> {
    const data = await prisma.practicalCategory.findUnique({
      where: { id },
      include: categoryInclude,
    });

    return data ? PracticalMapper.toCategory(data) : null;
  }

  async findCategoryBySlug(slug: string): Promise<PracticalCategory | null> {
    const data = await prisma.practicalCategory.findUnique({
      where: { slug },
      include: categoryInclude,
    });

    return data ? PracticalMapper.toCategory(data) : null;
  }

  async findPublicCategoryBySlug(slug: string): Promise<PracticalCategory | null> {
    const data = await prisma.practicalCategory.findUnique({
      where: { slug },
      include: {
        guides: {
          where: { isPublished: true },
          include: guideInclude,
          orderBy: guideOrderBy,
        },
      },
    });

    return data ? PracticalMapper.toCategory(data) : null;
  }

  async createCategory(data: CreatePracticalCategoryInput): Promise<PracticalCategory> {
    const created = await prisma.practicalCategory.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        slug: data.slug!,
        icon: data.icon ?? null,
        order: data.order ?? 0,
      },
      include: categoryInclude,
    });

    return PracticalMapper.toCategory(created);
  }

  async updateCategory(
    id: number,
    data: Omit<UpdatePracticalCategoryInput, 'id'>
  ): Promise<PracticalCategory> {
    const updated = await prisma.practicalCategory.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        slug: data.slug ?? undefined,
        icon: data.icon,
        order: data.order,
      },
      include: categoryInclude,
    });

    return PracticalMapper.toCategory(updated);
  }

  async deleteCategory(id: number): Promise<void> {
    await prisma.practicalCategory.delete({
      where: { id },
    });
  }

  async findGuideById(id: number): Promise<PracticalGuide | null> {
    const data = await prisma.practicalGuide.findUnique({
      where: { id },
      include: guideInclude,
    });

    return data ? PracticalMapper.toGuide(data) : null;
  }

  async findGuideBySlug(slug: string): Promise<PracticalGuide | null> {
    const data = await prisma.practicalGuide.findUnique({
      where: { slug },
      include: guideInclude,
    });

    return data ? PracticalMapper.toGuide(data) : null;
  }

  async findPublicGuideBySlug(slug: string): Promise<PracticalGuide | null> {
    const data = await prisma.practicalGuide.findFirst({
      where: {
        slug,
        isPublished: true,
      },
      include: guideInclude,
    });

    return data ? PracticalMapper.toGuide(data) : null;
  }

  async createGuide(data: CreatePracticalGuideInput): Promise<PracticalGuide> {
    const created = await prisma.practicalGuide.create({
      data: {
        practicalCategoryId: data.practicalCategoryId,
        title: data.title,
        summary: data.summary,
        content: data.content,
        slug: data.slug!,
        order: data.order ?? 0,
        isPublished: data.isPublished ?? false,
      },
      include: guideInclude,
    });

    return PracticalMapper.toGuide(created);
  }

  async updateGuide(
    id: number,
    data: Omit<UpdatePracticalGuideInput, 'id'>
  ): Promise<PracticalGuide> {
    const updated = await prisma.practicalGuide.update({
      where: { id },
      data: {
        practicalCategoryId: data.practicalCategoryId,
        title: data.title,
        summary: data.summary,
        content: data.content,
        slug: data.slug ?? undefined,
        order: data.order,
        isPublished: data.isPublished,
      },
      include: guideInclude,
    });

    return PracticalMapper.toGuide(updated);
  }

  async deleteGuide(id: number): Promise<void> {
    await prisma.practicalGuide.delete({
      where: { id },
    });
  }

  async findGuideLinkById(id: number): Promise<PracticalGuideLink | null> {
    const data = await prisma.practicalGuideLink.findUnique({
      where: { id },
    });

    return data ? PracticalMapper.toGuideLink(data) : null;
  }

  async createGuideLink(
    data: CreatePracticalGuideLinkInput
  ): Promise<PracticalGuideLink> {
    const created = await prisma.practicalGuideLink.create({
      data: {
        practicalGuideId: data.practicalGuideId,
        label: data.label,
        url: data.url,
        order: data.order ?? 0,
      },
    });

    return PracticalMapper.toGuideLink(created);
  }

  async updateGuideLink(
    id: number,
    data: Omit<UpdatePracticalGuideLinkInput, 'id'>
  ): Promise<PracticalGuideLink> {
    const updated = await prisma.practicalGuideLink.update({
      where: { id },
      data: {
        practicalGuideId: data.practicalGuideId,
        label: data.label,
        url: data.url,
        order: data.order,
      },
    });

    return PracticalMapper.toGuideLink(updated);
  }

  async deleteGuideLink(id: number): Promise<void> {
    await prisma.practicalGuideLink.delete({
      where: { id },
    });
  }
}
