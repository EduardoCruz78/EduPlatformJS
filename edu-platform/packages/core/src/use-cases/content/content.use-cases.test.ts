import test from 'node:test';
import assert from 'node:assert/strict';

import { CreateContentUseCase } from './create-content.use-case.ts';
import { UpdateContentUseCase } from './update-content.use-case.ts';
import { DeleteContentUseCase } from './delete-content.use-case.ts';
import type {
  CreateContentInput,
  UpdateContentInput,
  CreateChecklistInput,
} from '../../dtos/index.ts';
import type { Checklist, Content } from '../../entities/index.ts';
import type { IChecklistRepository } from '../../repositories/IChecklistRepository.ts';
import type { IContentRepository } from '../../repositories/IContentRepository.ts';

function createContentRepositoryMock(existingById: Content | null = null) {
  const calls: {
    create: CreateContentInput[];
    update: Array<{ id: number; data: Omit<UpdateContentInput, 'id'> }>;
    delete: number[];
  } = {
    create: [],
    update: [],
    delete: [],
  };

  const repository: IContentRepository = {
    async find() {
      return [];
    },
    async findById() {
      return existingById;
    },
    async findByTopic() {
      return [];
    },
    async countByTopicId() {
      return 0;
    },
    async create(data: CreateContentInput) {
      calls.create.push(data);
      return {
        id: 1,
        ...data,
      } satisfies Content;
    },
    async update(id: number, data: Omit<UpdateContentInput, 'id'>) {
      calls.update.push({ id, data });
      return {
        id,
        title: data.title ?? existingById?.title ?? 'Conteudo',
        description: data.description ?? null,
        topicId: data.topicId ?? existingById?.topicId ?? 1,
        type: data.type ?? existingById?.type ?? 'VIDEO',
        link: data.link ?? existingById?.link ?? 'https://example.com',
        thumbnailUrl:
          data.thumbnailUrl ?? existingById?.thumbnailUrl ?? 'thumb.png',
        videoUrl: data.videoUrl ?? null,
        pdfUrl: data.pdfUrl ?? null,
        order: data.order ?? 0,
      } satisfies Content;
    },
    async delete(id: number) {
      calls.delete.push(id);
    },
  };

  return { repository, calls };
}

function createChecklistRepositoryMock(existingById: Checklist | null = null) {
  const calls: {
    deleteByContentId: number[];
    delete: number[];
    create: CreateChecklistInput[];
  } = {
    deleteByContentId: [],
    delete: [],
    create: [],
  };

  const repository: IChecklistRepository = {
    async findByUserId() {
      return [];
    },
    async findById() {
      return existingById;
    },
    async findByContentId() {
      return [];
    },
    async create(data: CreateChecklistInput) {
      calls.create.push(data);
      return {
        id: 1,
        userId: data.userId,
        contentId: data.contentId,
        createdAt: new Date('2025-01-01T00:00:00Z'),
      } satisfies Checklist;
    },
    async delete(id: number) {
      calls.delete.push(id);
    },
    async deleteByContentId(contentId: number) {
      calls.deleteByContentId.push(contentId);
    },
  };

  return { repository, calls };
}

test('CreateContentUseCase trims fields and fills default values before creating', async () => {
  const { repository, calls } = createContentRepositoryMock();
  const useCase = new CreateContentUseCase(repository);

  const result = await useCase.execute({
    title: '  Algebra Linear  ',
    description: '  Matrizes e vetores  ',
    topicId: 4,
    type: 'ARTICLE',
    link: '  https://example.com/article  ',
    thumbnailUrl: '  thumb.png  ',
  });

  assert.deepEqual(calls.create[0], {
    title: 'Algebra Linear',
    description: 'Matrizes e vetores',
    topicId: 4,
    type: 'ARTICLE',
    link: 'https://example.com/article',
    thumbnailUrl: 'thumb.png',
    videoUrl: null,
    pdfUrl: null,
    order: 0,
  });
  assert.equal(result.title, 'Algebra Linear');
});

test('CreateContentUseCase rejects blank required fields', async () => {
  const { repository } = createContentRepositoryMock();
  const useCase = new CreateContentUseCase(repository);

  await assert.rejects(
    () =>
      useCase.execute({
        title: '   ',
        topicId: 1,
        type: 'VIDEO',
        link: 'https://example.com',
        thumbnailUrl: 'thumb.png',
      }),
    /obrigat/i
  );
});

test('UpdateContentUseCase preserves current values when blank strings are provided', async () => {
  const existingContent: Content = {
    id: 12,
    title: 'Original',
    description: 'Descricao',
    topicId: 2,
    type: 'PDF',
    link: 'https://example.com/original',
    thumbnailUrl: 'cover.png',
    videoUrl: null,
    pdfUrl: 'content.pdf',
    order: 7,
  };
  const { repository, calls } = createContentRepositoryMock(existingContent);
  const useCase = new UpdateContentUseCase(repository);

  await useCase.execute({
    id: 12,
    title: '   ',
    description: '   ',
    link: '   ',
    thumbnailUrl: '   ',
    order: 9,
  });

  assert.deepEqual(calls.update[0], {
    id: 12,
    data: {
      title: 'Original',
      description: null,
      topicId: 2,
      type: 'PDF',
      link: 'https://example.com/original',
      videoUrl: null,
      pdfUrl: 'content.pdf',
      thumbnailUrl: 'cover.png',
      order: 9,
    },
  });
});

test('DeleteContentUseCase removes related checklists before deleting the content', async () => {
  const { repository, calls } = createContentRepositoryMock({
    id: 4,
    title: 'PDF',
    topicId: 2,
    type: 'PDF',
    link: 'https://example.com',
    thumbnailUrl: 'thumb.png',
  });
  const checklistRepository = createChecklistRepositoryMock();
  const useCase = new DeleteContentUseCase(repository, checklistRepository.repository);

  const result = await useCase.execute(4);

  assert.deepEqual(checklistRepository.calls.deleteByContentId, [4]);
  assert.deepEqual(calls.delete, [4]);
  assert.deepEqual(result, { success: true });
});
