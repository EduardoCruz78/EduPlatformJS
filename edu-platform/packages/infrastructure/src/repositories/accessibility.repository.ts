import { prisma } from '../prisma/client';
import { AccessibilityMapper } from '../mappers/accessibility.mapper';
import type {
  AccessibilityCategory,
  AccessibilityTheme,
  AccessibilityThemeMaterial,
  AddAccessibilityCategoryTopicInput,
  CreateAccessibilityCategoryInput,
  CreateAccessibilityThemeInput,
  CreateAccessibilityThemeMaterialInput,
  IAccessibilityRepository,
  Topic,
} from '@edu-platform/core';

export class AccessibilityRepository implements IAccessibilityRepository {
  async getCategories(): Promise<AccessibilityCategory[]> {
    const data = await prisma.accessibilityCategory.findMany({
      include: {
        needs: true,
        themes: {
          include: { materials: true },
          orderBy: { title: 'asc' },
        },
        categoryTopics: {
          include: {
            topic: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });

    return AccessibilityMapper.toDomainList(data);
  }

  async findThemesByCategory(categoryId: number): Promise<AccessibilityTheme[]> {
    const data = await prisma.accessibilityTheme.findMany({
      where: { accessibilityCategoryId: categoryId },
      include: { materials: { orderBy: { order: 'asc' } } },
      orderBy: { title: 'asc' },
    });

    return AccessibilityMapper.toThemeList(data);
  }

  async findTopicsByCategory(categoryId: number): Promise<Topic[]> {
    const data = await prisma.accessibilityCategoryTopic.findMany({
      where: { accessibilityCategoryId: categoryId },
      include: { topic: true },
      orderBy: { topicId: 'asc' },
    });

    return AccessibilityMapper.toTopicList(data.map((entry) => entry.topic));
  }

  async createCategory(
    data: CreateAccessibilityCategoryInput
  ): Promise<AccessibilityCategory> {
    const created = await prisma.accessibilityCategory.create({
      data: {
        name: data.name,
        description: data.description ?? null,
      },
      include: {
        needs: true,
        themes: true,
        categoryTopics: {
          include: {
            topic: true,
          },
        },
      },
    });

    return AccessibilityMapper.toDomain(created);
  }

  async deleteCategory(id: number): Promise<void> {
    await prisma.accessibilityCategory.delete({
      where: { id },
    });
  }

  async createTheme(data: CreateAccessibilityThemeInput): Promise<AccessibilityTheme> {
    const created = await prisma.accessibilityTheme.create({
      data: {
        accessibilityCategoryId: data.accessibilityCategoryId,
        accessibilityNeedId: data.accessibilityNeedId ?? null,
        title: data.title,
        content: data.content ?? null,
      },
    });

    return AccessibilityMapper.toTheme({ ...created, materials: [] });
  }

  async deleteTheme(id: number): Promise<void> {
    await prisma.accessibilityTheme.delete({
      where: { id },
    });
  }

  async createThemeMaterial(
    data: CreateAccessibilityThemeMaterialInput
  ): Promise<AccessibilityThemeMaterial> {
    const created = await prisma.accessibilityThemeMaterial.create({
      data: {
        accessibilityThemeId: data.accessibilityThemeId,
        title: data.title,
        summary: data.summary,
        content: data.content,
        type: data.type,
        link: data.link,
        order: data.order ?? 0,
      },
    });

    return AccessibilityMapper.toThemeMaterial(created);
  }

  async deleteThemeMaterial(id: number): Promise<void> {
    await prisma.accessibilityThemeMaterial.delete({
      where: { id },
    });
  }

  async addTopicToCategory(data: AddAccessibilityCategoryTopicInput): Promise<void> {
    await prisma.accessibilityCategoryTopic.create({
      data: {
        accessibilityCategoryId: data.accessibilityCategoryId,
        topicId: data.topicId,
      },
    });
  }

  async removeTopicFromCategory(data: AddAccessibilityCategoryTopicInput): Promise<void> {
    await prisma.accessibilityCategoryTopic.delete({
      where: {
        accessibilityCategoryId_topicId: {
          accessibilityCategoryId: data.accessibilityCategoryId,
          topicId: data.topicId,
        },
      },
    });
  }
}
