// packages/infrastructure/src/repositories/accessibility.repository.ts

import { prisma } from '../prisma/client';
import { AccessibilityMapper } from '../mappers/accessibility.mapper';
import type {
  AccessibilityCategory,
  AccessibilityTheme,
  IAccessibilityRepository,
} from '@edu-platform/core';

export class AccessibilityRepository implements IAccessibilityRepository {
  async getCategories(): Promise<AccessibilityCategory[]> {
    const data = await prisma.accessibilityCategory.findMany({
      include: {
        needs: true,
        themes: true,
      },
      orderBy: { name: 'asc' },
    });

    return AccessibilityMapper.toCategoryList(data);
  }

  async findThemesByCategory(categoryId: number): Promise<AccessibilityTheme[]> {
    const data = await prisma.accessibilityTheme.findMany({
      where: { accessibilityCategoryId: categoryId },
    });

    return data.map((theme) =>
        AccessibilityMapper.toTheme({
          id: theme.id,
          title: theme.title,
          accessibilityCategoryId: theme.accessibilityCategoryId,
        })
    );
  }
}