import type {
  PracticalCategory,
  PracticalGuide,
  PracticalGuideLink,
} from '@edu-platform/core';

type PrismaPracticalGuideLink = {
  id: number;
  practicalGuideId: number;
  label: string;
  url: string;
  order: number;
};

type PrismaPracticalGuide = {
  id: number;
  practicalCategoryId: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
  order: number;
  isPublished: boolean;
  links?: PrismaPracticalGuideLink[];
};

type PrismaPracticalCategory = {
  id: number;
  name: string;
  description: string | null;
  slug: string;
  icon: string | null;
  order: number;
  guides?: PrismaPracticalGuide[];
};

export class PracticalMapper {
  static toGuideLink(data: PrismaPracticalGuideLink): PracticalGuideLink {
    return {
      id: data.id,
      practicalGuideId: data.practicalGuideId,
      label: data.label,
      url: data.url,
      order: data.order,
    };
  }

  static toGuide(data: PrismaPracticalGuide): PracticalGuide {
    return {
      id: data.id,
      practicalCategoryId: data.practicalCategoryId,
      title: data.title,
      summary: data.summary,
      content: data.content,
      slug: data.slug,
      order: data.order,
      isPublished: data.isPublished,
      links: data.links?.map((link) => this.toGuideLink(link)),
    };
  }

  static toCategory(data: PrismaPracticalCategory): PracticalCategory {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      slug: data.slug,
      icon: data.icon,
      order: data.order,
      guides: data.guides?.map((guide) => this.toGuide(guide)),
    };
  }

  static toCategoryList(data: PrismaPracticalCategory[]): PracticalCategory[] {
    return data.map((item) => this.toCategory(item));
  }
}
