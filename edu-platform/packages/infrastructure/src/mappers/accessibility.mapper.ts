import type {
  AccessibilityCategory,
  AccessibilityNeed,
  AccessibilityTheme,
  AccessibilityThemeMaterial,
  Topic,
} from '@edu-platform/core';

type PrismaAccessibilityNeed = {
  id: number;
  name: string;
  accessibilityCategoryId: number;
};

type PrismaAccessibilityTheme = {
  id: number;
  title: string;
  accessibilityCategoryId: number;
  accessibilityNeedId: number | null;
  content: string | null;
  materials?: PrismaAccessibilityThemeMaterial[];
};

type PrismaAccessibilityThemeMaterial = {
  id: number;
  accessibilityThemeId: number;
  title: string;
  summary: string;
  content: string;
  type: string;
  link: string;
  order: number;
};

type PrismaTopic = {
  id: number;
  name: string;
};

type PrismaAccessibilityCategoryTopic = {
  topic: PrismaTopic;
};

type PrismaAccessibilityCategory = {
  id: number;
  name: string;
  description: string | null;
  needs?: PrismaAccessibilityNeed[];
  themes?: PrismaAccessibilityTheme[];
  categoryTopics?: PrismaAccessibilityCategoryTopic[];
};

export class AccessibilityMapper {
  static toNeed(data: PrismaAccessibilityNeed): AccessibilityNeed {
    return {
      id: data.id,
      name: data.name,
      accessibilityCategoryId: data.accessibilityCategoryId,
    };
  }

  static toTheme(data: PrismaAccessibilityTheme): AccessibilityTheme {
    return {
      id: data.id,
      title: data.title,
      accessibilityCategoryId: data.accessibilityCategoryId,
      accessibilityNeedId: data.accessibilityNeedId,
      content: data.content,
      materials: data.materials?.map((material) => this.toThemeMaterial(material)),
    };
  }

  static toThemeMaterial(
    data: PrismaAccessibilityThemeMaterial
  ): AccessibilityThemeMaterial {
    return {
      id: data.id,
      accessibilityThemeId: data.accessibilityThemeId,
      title: data.title,
      summary: data.summary,
      content: data.content,
      type: data.type as AccessibilityThemeMaterial['type'],
      link: data.link,
      order: data.order,
    };
  }

  static toTopic(data: PrismaTopic): Topic {
    return {
      id: data.id,
      name: data.name,
    };
  }

  static toDomain(data: PrismaAccessibilityCategory): AccessibilityCategory {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      needs: data.needs?.map((need) => this.toNeed(need)),
      themes: data.themes?.map((theme) => this.toTheme(theme)),
      topics: data.categoryTopics?.map((entry) => this.toTopic(entry.topic)),
    };
  }

  static toDomainList(data: PrismaAccessibilityCategory[]): AccessibilityCategory[] {
    return data.map((item) => this.toDomain(item));
  }

  static toThemeList(data: PrismaAccessibilityTheme[]): AccessibilityTheme[] {
    return data.map((item) => this.toTheme(item));
  }

  static toTopicList(data: PrismaTopic[]): Topic[] {
    return data.map((item) => this.toTopic(item));
  }
}
