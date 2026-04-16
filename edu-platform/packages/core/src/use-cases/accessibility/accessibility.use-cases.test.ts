import test from 'node:test';
import assert from 'node:assert/strict';

import { AddAccessibilityTopicToCategoryUseCase } from './add-topic-to-category.use-case.ts';
import { CreateAccessibilityCategoryUseCase } from './create-category.use-case.ts';
import { CreateAccessibilityThemeUseCase } from './create-theme.use-case.ts';
import type {
  AddAccessibilityCategoryTopicInput,
  CreateAccessibilityCategoryInput,
  CreateAccessibilityThemeInput,
} from '../../dtos/index.ts';
import type {
  AccessibilityCategory,
  AccessibilityTheme,
  Topic,
} from '../../entities/index.ts';
import type { IAccessibilityRepository } from '../../repositories/IAccessibilityRepository.ts';

function createAccessibilityRepositoryMock() {
  const calls: {
    createCategory: CreateAccessibilityCategoryInput[];
    createTheme: CreateAccessibilityThemeInput[];
    addTopicToCategory: AddAccessibilityCategoryTopicInput[];
  } = {
    createCategory: [],
    createTheme: [],
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
