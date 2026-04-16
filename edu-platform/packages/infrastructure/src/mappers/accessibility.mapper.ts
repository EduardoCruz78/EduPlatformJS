// packages/infrastructure/src/mappers/accessibility.mapper.ts

import type {
    AccessibilityCategory,
    AccessibilityNeed,
    AccessibilityTheme,
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
};

type PrismaAccessibilityCategory = {
    id: number;
    name: string;
    needs?: PrismaAccessibilityNeed[];
    themes?: PrismaAccessibilityTheme[];
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
            name: data.title,
            accessibilityCategoryId: data.accessibilityCategoryId,
        };
    }

    static toDomain(data: PrismaAccessibilityCategory): AccessibilityCategory {
        return {
            id: data.id,
            name: data.name,
            needs: data.needs?.map((need) => this.toNeed(need)),
            themes: data.themes?.map((theme) => this.toTheme(theme)),
        };
    }

    static toDomainList(data: PrismaAccessibilityCategory[]): AccessibilityCategory[] {
        return data.map((item) => this.toDomain(item));
    }

    static toThemeList(data: PrismaAccessibilityTheme[]): AccessibilityTheme[] {
        return data.map((item) => this.toTheme(item));
    }
}
