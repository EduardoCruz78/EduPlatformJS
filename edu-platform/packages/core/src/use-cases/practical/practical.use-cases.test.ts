import test from 'node:test';
import assert from 'node:assert/strict';

import { CreatePracticalCategoryUseCase } from './create-category.use-case.ts';
import { UpdatePracticalCategoryUseCase } from './update-category.use-case.ts';
import { CreatePracticalGuideUseCase } from './create-guide.use-case.ts';
import { UpdatePracticalGuideUseCase } from './update-guide.use-case.ts';
import { CreatePracticalGuideLinkUseCase } from './create-guide-link.use-case.ts';
import type {
  CreatePracticalCategoryInput,
  CreatePracticalGuideInput,
  CreatePracticalGuideLinkInput,
  UpdatePracticalCategoryInput,
  UpdatePracticalGuideInput,
} from '../../dtos/index.ts';
import type {
  PracticalCategory,
  PracticalGuide,
  PracticalGuideLink,
} from '../../entities/index.ts';
import type { IPracticalRepository } from '../../repositories/IPracticalRepository.ts';

function createPracticalRepositoryMock(options?: {
  existingCategoryById?: PracticalCategory | null;
  existingCategoryBySlug?: PracticalCategory | null;
  existingGuideById?: PracticalGuide | null;
  existingGuideBySlug?: PracticalGuide | null;
  existingLinkById?: PracticalGuideLink | null;
}) {
  const calls: {
    createCategory: CreatePracticalCategoryInput[];
    updateCategory: Array<{ id: number; data: Omit<UpdatePracticalCategoryInput, 'id'> }>;
    createGuide: CreatePracticalGuideInput[];
    updateGuide: Array<{ id: number; data: Omit<UpdatePracticalGuideInput, 'id'> }>;
    createGuideLink: CreatePracticalGuideLinkInput[];
  } = {
    createCategory: [],
    updateCategory: [],
    createGuide: [],
    updateGuide: [],
    createGuideLink: [],
  };

  const repository: IPracticalRepository = {
    async findCategories() {
      return [];
    },
    async findPublicCategories() {
      return [];
    },
    async findCategoryById() {
      return options?.existingCategoryById ?? null;
    },
    async findCategoryBySlug() {
      return options?.existingCategoryBySlug ?? null;
    },
    async findPublicCategoryBySlug() {
      return options?.existingCategoryBySlug ?? null;
    },
    async createCategory(data) {
      calls.createCategory.push(data);
      return {
        id: 1,
        name: data.name,
        description: data.description ?? null,
        slug: data.slug ?? 'vida-pratica',
        icon: data.icon ?? null,
        order: data.order ?? 0,
      } satisfies PracticalCategory;
    },
    async updateCategory(id, data) {
      calls.updateCategory.push({ id, data });
      return {
        id,
        name: data.name ?? options?.existingCategoryById?.name ?? 'Categoria',
        description: data.description ?? null,
        slug: data.slug ?? options?.existingCategoryById?.slug ?? 'categoria',
        icon: data.icon ?? null,
        order: data.order ?? 0,
      } satisfies PracticalCategory;
    },
    async deleteCategory() {
      return;
    },
    async findGuideById() {
      return options?.existingGuideById ?? null;
    },
    async findGuideBySlug() {
      return options?.existingGuideBySlug ?? null;
    },
    async findPublicGuideBySlug() {
      return options?.existingGuideBySlug ?? null;
    },
    async createGuide(data) {
      calls.createGuide.push(data);
      return {
        id: 1,
        practicalCategoryId: data.practicalCategoryId,
        title: data.title,
        summary: data.summary,
        content: data.content,
        slug: data.slug ?? 'guia',
        order: data.order ?? 0,
        isPublished: data.isPublished ?? false,
      } satisfies PracticalGuide;
    },
    async updateGuide(id, data) {
      calls.updateGuide.push({ id, data });
      return {
        id,
        practicalCategoryId:
          data.practicalCategoryId ?? options?.existingGuideById?.practicalCategoryId ?? 1,
        title: data.title ?? options?.existingGuideById?.title ?? 'Guia',
        summary: data.summary ?? options?.existingGuideById?.summary ?? 'Resumo',
        content: data.content ?? options?.existingGuideById?.content ?? 'Conteudo',
        slug: data.slug ?? options?.existingGuideById?.slug ?? 'guia',
        order: data.order ?? 0,
        isPublished: data.isPublished ?? false,
      } satisfies PracticalGuide;
    },
    async deleteGuide() {
      return;
    },
    async findGuideLinkById() {
      return options?.existingLinkById ?? null;
    },
    async createGuideLink(data) {
      calls.createGuideLink.push(data);
      return {
        id: 1,
        practicalGuideId: data.practicalGuideId,
        label: data.label,
        url: data.url,
        order: data.order ?? 0,
      } satisfies PracticalGuideLink;
    },
    async updateGuideLink() {
      return {
        id: 1,
        practicalGuideId: 1,
        label: 'Atualizado',
        url: 'https://example.com',
        order: 0,
      };
    },
    async deleteGuideLink() {
      return;
    },
  };

  return { repository, calls };
}

test('CreatePracticalCategoryUseCase trims fields and generates slug', async () => {
  const { repository, calls } = createPracticalRepositoryMock();
  const useCase = new CreatePracticalCategoryUseCase(repository);

  const result = await useCase.execute({
    name: '  Autoescola e CNH  ',
    description: '  Passo a passo para habilitacao.  ',
    icon: '  CNH  ',
  });

  assert.deepEqual(calls.createCategory[0], {
    name: 'Autoescola e CNH',
    description: 'Passo a passo para habilitacao.',
    slug: 'autoescola-e-cnh',
    icon: 'CNH',
    order: 0,
  });
  assert.equal(result.slug, 'autoescola-e-cnh');
});

test('UpdatePracticalCategoryUseCase preserves description and rejects duplicate slug', async () => {
  const existingCategory: PracticalCategory = {
    id: 5,
    name: 'Direitos do consumidor',
    description: 'Descricao atual',
    slug: 'direitos-do-consumidor',
    icon: 'CDC',
    order: 2,
  };

  const { repository, calls } = createPracticalRepositoryMock({
    existingCategoryById: existingCategory,
  });
  const useCase = new UpdatePracticalCategoryUseCase(repository);

  await useCase.execute({
    id: 5,
    name: '  Direitos do consumidor atualizados  ',
    description: undefined,
    order: 4,
  });

  assert.deepEqual(calls.updateCategory[0], {
    id: 5,
    data: {
      name: 'Direitos do consumidor atualizados',
      description: 'Descricao atual',
      slug: 'direitos-do-consumidor',
      icon: 'CDC',
      order: 4,
    },
  });

  const duplicatedSlugUseCase = new UpdatePracticalCategoryUseCase(
    createPracticalRepositoryMock({
      existingCategoryById: existingCategory,
      existingCategoryBySlug: {
        id: 7,
        name: 'Outro',
        slug: 'outro',
      },
    }).repository
  );

  await assert.rejects(
    () =>
      duplicatedSlugUseCase.execute({
        id: 5,
        slug: 'outro',
      }),
    /slug/i
  );
});

test('CreatePracticalGuideUseCase validates category, trims content and generates slug', async () => {
  const { repository, calls } = createPracticalRepositoryMock({
    existingCategoryById: {
      id: 2,
      name: 'Direitos trabalhistas',
      slug: 'direitos-trabalhistas',
    },
  });
  const useCase = new CreatePracticalGuideUseCase(repository);

  const result = await useCase.execute({
    practicalCategoryId: 2,
    title: '  O que receber em demissao sem justa causa  ',
    summary: '  Entenda verbas rescisorias e direitos basicos.  ',
    content: '  FGTS, multa, aviso previo e ferias proporcionais.  ',
    isPublished: true,
  });

  assert.deepEqual(calls.createGuide[0], {
    practicalCategoryId: 2,
    title: 'O que receber em demissao sem justa causa',
    summary: 'Entenda verbas rescisorias e direitos basicos.',
    content: 'FGTS, multa, aviso previo e ferias proporcionais.',
    slug: 'o-que-receber-em-demissao-sem-justa-causa',
    order: 0,
    isPublished: true,
  });
  assert.equal(result.isPublished, true);
});

test('UpdatePracticalGuideUseCase preserves slug when omitted and rejects blank content', async () => {
  const existingGuide: PracticalGuide = {
    id: 9,
    practicalCategoryId: 2,
    title: 'Cobranca indevida',
    summary: 'Resumo atual',
    content: 'Conteudo atual',
    slug: 'cobranca-indevida',
    order: 1,
    isPublished: false,
  };
  const { repository, calls } = createPracticalRepositoryMock({
    existingCategoryById: {
      id: 2,
      name: 'Direitos do consumidor',
      slug: 'direitos-do-consumidor',
    },
    existingGuideById: existingGuide,
  });
  const useCase = new UpdatePracticalGuideUseCase(repository);

  await useCase.execute({
    id: 9,
    title: '  Cobranca indevida: o que fazer  ',
    isPublished: true,
  });

  assert.deepEqual(calls.updateGuide[0], {
    id: 9,
    data: {
      practicalCategoryId: 2,
      title: 'Cobranca indevida: o que fazer',
      summary: 'Resumo atual',
      content: 'Conteudo atual',
      slug: 'cobranca-indevida',
      order: 1,
      isPublished: true,
    },
  });

  await assert.rejects(
    () =>
      useCase.execute({
        id: 9,
        content: '   ',
      }),
    /conteudo/i
  );
});

test('CreatePracticalGuideLinkUseCase validates URL and forwards normalized data', async () => {
  const { repository, calls } = createPracticalRepositoryMock({
    existingGuideById: {
      id: 4,
      practicalCategoryId: 1,
      title: 'Primeira habilitacao',
      summary: 'Resumo',
      content: 'Conteudo',
      slug: 'primeira-habilitacao',
      isPublished: true,
    },
  });
  const useCase = new CreatePracticalGuideLinkUseCase(repository);

  await useCase.execute({
    practicalGuideId: 4,
    label: '  Portal Gov.br  ',
    url: '  https://www.gov.br  ',
  });

  assert.deepEqual(calls.createGuideLink[0], {
    practicalGuideId: 4,
    label: 'Portal Gov.br',
    url: 'https://www.gov.br',
    order: 0,
  });

  await assert.rejects(
    () =>
      useCase.execute({
        practicalGuideId: 4,
        label: 'Link invalido',
        url: 'site-invalido',
      }),
    /URL/i
  );
});
