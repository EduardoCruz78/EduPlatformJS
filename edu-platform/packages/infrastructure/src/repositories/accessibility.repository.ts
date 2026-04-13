import { prisma } from '../prisma/client';
import type {
  AccessibilityCategory,
  AccessibilityTheme,
  IAccessibilityRepository
} from '@edu-platform/core';

export class AccessibilityRepository implements IAccessibilityRepository {
  async getCategories(): Promise<AccessibilityCategory[]> {
    return prisma.accessibilityCategory.findMany({
      include: {
        needs: true,
        themes: true,
      },
      orderBy: { name: 'asc' },
    });
  }

  async findThemesByCategory(categoryId: number): Promise<AccessibilityTheme[]> {
    return prisma.accessibilityTheme.findMany({
      where: { accessibilityCategoryId: categoryId },
    });
  }
}