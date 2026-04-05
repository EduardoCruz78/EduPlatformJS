// packages/infrastructure/src/repositories/accessibility.repository.ts
import { prisma } from '../prisma/client.js';
import type { AccessibilityCategory, AccessibilityTheme } from '@edu-platform/core';

export class AccessibilityRepository {
  async findAllCategories(): Promise<AccessibilityCategory[]> {
    return await prisma.accessibilityCategory.findMany({
      include: { themes: true },
    });
  }

  async findThemesByCategory(categoryId: number): Promise<AccessibilityTheme[]> {
    return await prisma.accessibilityTheme.findMany({
      where: { accessibilityCategoryId: categoryId },
    });
  }
}