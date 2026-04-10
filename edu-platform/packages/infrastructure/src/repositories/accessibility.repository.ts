import { prisma } from '../prisma/client';
import type { AccessibilityCategory, AccessibilityTheme } from '@edu-platform/core';

export class AccessibilityRepository {
  async getCategories(): Promise<AccessibilityCategory[]> {
    return prisma.accessibilityCategory.findMany({
      include: {
        needs: true,
        themes: true,                          // ← mantido e melhorado
      },
      orderBy: { name: 'asc' },
    });
  }

  async findThemesByCategory(categoryId: number): Promise<AccessibilityTheme[]> {  // ← método extra do original
    return prisma.accessibilityTheme.findMany({
      where: { accessibilityCategoryId: categoryId },
    });
  }
}