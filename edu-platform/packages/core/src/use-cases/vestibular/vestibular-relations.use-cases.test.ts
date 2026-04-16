import test from 'node:test';
import assert from 'node:assert/strict';

import { CreateVestibularContentUseCase } from './create-content.use-case.ts';
import { CreateVestibularSubjectUseCase } from './create-subject.use-case.ts';
import { CreateVestibularTopicUseCase } from './create-topic.use-case.ts';
import { ShareVestibularContentUseCase } from './share-content.use-case.ts';
import type {
  AttachVestibularSubjectInput,
  CreateSubjectInput,
  CreateVestibularContentInput,
  CreateVestibularTopicInput,
  ShareVestibularContentInput,
} from '../../dtos/index.ts';
import type {
  Subject,
  Vestibular,
  VestibularContent,
  VestibularTopic,
} from '../../entities/index.ts';
import type { ISubjectRepository } from '../../repositories/ISubjectRepository.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository.ts';

function createVestibularRepositoryMock(options?: {
  existingSubjects?: Subject[];
}) {
  const calls: {
    attachSubject: AttachVestibularSubjectInput[];
    createTopic: CreateVestibularTopicInput[];
    createContent: CreateVestibularContentInput[];
    shareContent: ShareVestibularContentInput[];
  } = {
    attachSubject: [],
    createTopic: [],
    createContent: [],
    shareContent: [],
  };

  const repository: IVestibularRepository = {
    async find() {
      return [];
    },
    async findById() {
      return null;
    },
    async findByNameAndYear() {
      return null;
    },
    async findSubjects() {
      return options?.existingSubjects ?? [];
    },
    async attachSubject(data: AttachVestibularSubjectInput) {
      calls.attachSubject.push(data);
    },
    async deleteSubject() {},
    async findTopics() {
      return [];
    },
    async createTopic(data: CreateVestibularTopicInput) {
      calls.createTopic.push(data);
      return {
        id: 1,
        vestibularId: data.vestibularId,
        name: data.name,
        notes: data.notes ?? null,
        tags: data.tags ?? null,
        isShared: false,
        originalTopicId: null,
      } satisfies VestibularTopic;
    },
    async deleteTopic() {},
    async findContents() {
      return [];
    },
    async createContent(data: CreateVestibularContentInput) {
      calls.createContent.push(data);
      return {
        id: 1,
        vestibularId: data.vestibularId,
        title: data.title,
        type: data.type ?? null,
        link: data.link ?? null,
        pdfUrl: data.pdfUrl ?? null,
        isShared: false,
        originalContentId: null,
      } satisfies VestibularContent;
    },
    async shareContent(data: ShareVestibularContentInput) {
      calls.shareContent.push(data);
      return {
        id: 2,
        vestibularId: data.vestibularId,
        title: 'Compartilhado',
        type: 'ARTICLE',
        link: null,
        pdfUrl: null,
        isShared: true,
        originalContentId: data.contentId,
      } satisfies VestibularContent;
    },
    async deleteContent() {},
    async create() {
      throw new Error('not used');
    },
    async update() {
      throw new Error('not used');
    },
    async delete() {},
  };

  return { repository, calls };
}

function createSubjectRepositoryMock(options?: {
  existingSubject?: Subject | null;
}) {
  const calls: {
    findByName: string[];
    create: CreateSubjectInput[];
  } = {
    findByName: [],
    create: [],
  };

  const repository: ISubjectRepository = {
    async find() {
      return [];
    },
    async findById() {
      return null;
    },
    async findByName(name: string) {
      calls.findByName.push(name);
      return options?.existingSubject ?? null;
    },
    async findBySeries() {
      return [];
    },
    async create(data: CreateSubjectInput) {
      calls.create.push(data);
      return {
        id: 9,
        name: data.name,
        description: data.description ?? null,
        imageUrl: data.imageUrl ?? null,
        order: data.order ?? 0,
        seriesId: data.seriesId ?? null,
      } satisfies Subject;
    },
    async update() {
      throw new Error('not used');
    },
    async delete() {},
  };

  return { repository, calls };
}

test('CreateVestibularSubjectUseCase reuses an existing subject and links it to the vestibular', async () => {
  const existingSubject: Subject = {
    id: 15,
    name: 'Matemática',
  };
  const { repository, calls } = createVestibularRepositoryMock();
  const { repository: subjectRepository, calls: subjectCalls } = createSubjectRepositoryMock({
    existingSubject,
  });
  const useCase = new CreateVestibularSubjectUseCase(repository, subjectRepository);

  const result = await useCase.execute({
    vestibularId: 3,
    name: '  Matemática  ',
  });

  assert.equal(result.id, 15);
  assert.deepEqual(subjectCalls.findByName[0], 'Matemática');
  assert.deepEqual(calls.attachSubject[0], {
    vestibularId: 3,
    subjectId: 15,
  });
  assert.equal(subjectCalls.create.length, 0);
});

test('CreateVestibularSubjectUseCase rejects a subject that is already linked to the vestibular', async () => {
  const { repository } = createVestibularRepositoryMock({
    existingSubjects: [{ id: 8, name: 'Física' }],
  });
  const { repository: subjectRepository } = createSubjectRepositoryMock();
  const useCase = new CreateVestibularSubjectUseCase(repository, subjectRepository);

  await assert.rejects(
    () =>
      useCase.execute({
        vestibularId: 2,
        name: 'Física',
      }),
    /j. vinculada/i
  );
});

test('CreateVestibularTopicUseCase trims notes and tags before persisting', async () => {
  const { repository, calls } = createVestibularRepositoryMock();
  const useCase = new CreateVestibularTopicUseCase(repository);

  const result = await useCase.execute({
    vestibularId: 5,
    name: '  Geometria analítica  ',
    notes: '  Revisar exercícios  ',
    tags: '  enem, matematica  ',
  });

  assert.deepEqual(calls.createTopic[0], {
    vestibularId: 5,
    name: 'Geometria analítica',
    notes: 'Revisar exercícios',
    tags: 'enem, matematica',
  });
  assert.equal(result.name, 'Geometria analítica');
});

test('CreateVestibularContentUseCase requires title and normalizes optional fields', async () => {
  const { repository, calls } = createVestibularRepositoryMock();
  const useCase = new CreateVestibularContentUseCase(repository);

  const result = await useCase.execute({
    vestibularId: 4,
    title: '  Lista 1  ',
    type: 'PDF',
    pdfUrl: '  https://example.com/lista.pdf  ',
  });

  assert.deepEqual(calls.createContent[0], {
    vestibularId: 4,
    title: 'Lista 1',
    type: 'PDF',
    link: null,
    pdfUrl: 'https://example.com/lista.pdf',
  });
  assert.equal(result.title, 'Lista 1');

  await assert.rejects(
    () =>
      useCase.execute({
        vestibularId: 4,
        title: '   ',
      }),
    /T.tulo.+obrigat.rio/i
  );
});

test('ShareVestibularContentUseCase forwards validated ids to the repository', async () => {
  const { repository, calls } = createVestibularRepositoryMock();
  const useCase = new ShareVestibularContentUseCase(repository);

  const result = await useCase.execute({
    vestibularId: 4,
    contentId: 22,
  });

  assert.deepEqual(calls.shareContent[0], {
    vestibularId: 4,
    contentId: 22,
  });
  assert.equal(result.originalContentId, 22);
});
