import test from 'node:test';
import assert from 'node:assert/strict';

import { AddAccessibilityTopicToCategoryUseCase } from './add-topic-to-category.use-case.ts';
import { CreateAccessibilityCategoryUseCase } from './create-category.use-case.ts';
import { CreateAccessibilityThemeUseCase } from './create-theme.use-case.ts';
import { CreateAccessibilityThemeMaterialUseCase } from './create-theme-material.use-case.ts';
import type {
  AddAccessibilityCategoryTopicInput,
  CreateAccessibilityCategoryInput,
  CreateAccessibilityThemeMaterialInput,
  CreateAccessibilityThemeInput,
} from '../../dtos/index.ts';
import type {
  AccessibilityCategory,
  AccessibilityThemeMaterial,
  AccessibilityTheme,
  Topic,
} from '../../entities/index.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository.ts';

function createAccessibilityRepositoryMock() {
  const calls: {
    createCategory: CreateAccessibilityCategoryInput[];
    createTheme: CreateAccessibilityThemeInput[];
    createThemeMaterial: CreateAccessibilityThemeMaterialInput[];
    addTopicToCategory: AddAccessibilityCategoryTopicInput[];
  } = {
    createCategory: [],
    createTheme: [],
    createThemeMaterial: [],
    addTopicToCategory: [],
  };

  const repository: IAccessibilityRepository = {
    async getCategories() {
      return [];
    },
    async findThemesByCategory() {
      return [];
    },
    async findTopicsByCategory() {
      return [];
    },
    async createCategory(data: CreateAccessibilityCategoryInput) {
      calls.createCategory.push(data);
      return {
        id: 1,
        name: data.name,
        description: data.description ?? null,
      } satisfies AccessibilityCategory;
    },
    async deleteCategory() {},
    async createTheme(data: CreateAccessibilityThemeInput) {
      calls.createTheme.push(data);
      return {
        id: 1,
        accessibilityCategoryId: data.accessibilityCategoryId,
        accessibilityNeedId: data.accessibilityNeedId ?? null,
        title: data.title,
        content: data.content ?? null,
      } satisfies AccessibilityTheme;
    },
    async deleteTheme() {},
    async createThemeMaterial(data: CreateAccessibilityThemeMaterialInput) {
      calls.createThemeMaterial.push(data);
      return {
        id: 12,
        accessibilityThemeId: data.accessibilityThemeId,
        title: data.title,
        summary: data.summary,
        content: data.content,
        type: data.type,
        link: data.link,
        order: data.order ?? 0,
      } satisfies AccessibilityThemeMaterial;
    },
    async deleteThemeMaterial() {},
    async addTopicToCategory(data: AddAccessibilityCategoryTopicInput) {
      calls.addTopicToCategory.push(data);
    },
    async removeTopicFromCategory() {},
  };

  return { repository, calls };
}

test('CreateAccessibilityCategoryUseCase trims name and normalizes blank description', async () => {
  const { repository, calls } = createAccessibilityRepositoryMock();
  const useCase = new CreateAccessibilityCategoryUseCase(repository);

  const result = await useCase.execute({
    name: '  Deficiência Visual  ',
    description: '   ',
  });

  assert.deepEqual(calls.createCategory[0], {
    name: 'Deficiência Visual',
    description: null,
  });
  assert.equal(result.name, 'Deficiência Visual');
});

test('CreateAccessibilityThemeUseCase trims title/content and rejects empty title', async () => {
  const { repository, calls } = createAccessibilityRepositoryMock();
  const useCase = new CreateAccessibilityThemeUseCase(repository);

  const result = await useCase.execute({
    accessibilityCategoryId: 7,
    title: '  Leitura ampliada  ',
    content: '  Disponibilizar texto com zoom.  ',
  });

  assert.deepEqual(calls.createTheme[0], {
    accessibilityCategoryId: 7,
    accessibilityNeedId: null,
    title: 'Leitura ampliada',
    content: 'Disponibilizar texto com zoom.',
  });
  assert.equal(result.title, 'Leitura ampliada');

  await assert.rejects(
    () =>
      useCase.execute({
        accessibilityCategoryId: 7,
        title: '   ',
      }),
    /T.tulo.+obrigat.rio/i
  );
});

test('CreateAccessibilityThemeMaterialUseCase trims material fields and stores ordering', async () => {
  const { repository, calls } = createAccessibilityRepositoryMock();
  const useCase = new CreateAccessibilityThemeMaterialUseCase(repository);

  const result = await useCase.execute({
    accessibilityThemeId: 8,
    title: '  Vídeo com legenda  ',
    summary: '  Apoio visual  ',
    content: '  Conteúdo detalhado  ',
    type: 'VIDEO',
    link: '  https://example.com/video  ',
    order: 2,
  });

  assert.deepEqual(calls.createThemeMaterial[0], {
    accessibilityThemeId: 8,
    title: 'Vídeo com legenda',
    summary: 'Apoio visual',
    content: 'Conteúdo detalhado',
    type: 'VIDEO',
    link: 'https://example.com/video',
    order: 2,
  });
  assert.equal(result.title, 'Vídeo com legenda');
});

test('AddAccessibilityTopicToCategoryUseCase forwards validated ids to the repository', async () => {
  const { repository, calls } = createAccessibilityRepositoryMock();
  const useCase = new AddAccessibilityTopicToCategoryUseCase(repository);

  await useCase.execute({
    accessibilityCategoryId: 3,
    topicId: 11,
  });

  assert.deepEqual(calls.addTopicToCategory[0], {
    accessibilityCategoryId: 3,
    topicId: 11,
  });
});
