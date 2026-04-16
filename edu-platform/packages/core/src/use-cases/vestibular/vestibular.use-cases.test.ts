import test from 'node:test';
import assert from 'node:assert/strict';

import { CreateVestibularUseCase } from './create-vestibular.use-case.ts';
import { UpdateVestibularUseCase } from './update-vestibular.use-case.ts';
import { DeleteVestibularUseCase } from './delete-vestibular.use-case.ts';
import type {
  CreateVestibularInput,
  UpdateVestibularInput,
} from '../../dtos/index.ts';
import type { Vestibular } from '../../entities/index.ts';
import type { IVestibularRepository } from '../../repositories/IVestibularRepository.ts';

function createVestibularRepositoryMock(options?: {
  existingById?: Vestibular | null;
  existingByNameAndYear?: Vestibular | null;
}) {
  const calls: {
    findByNameAndYear: Array<{ name: string; year: number }>;
    create: CreateVestibularInput[];
    update: Array<{ id: number; data: Omit<UpdateVestibularInput, 'id'> }>;
    delete: number[];
  } = {
    findByNameAndYear: [],
    create: [],
    update: [],
    delete: [],
  };

  const repository: IVestibularRepository = {
    async find() {
      return [];
    },
    async findById() {
      return options?.existingById ?? null;
    },
    async findByNameAndYear(name: string, year: number) {
      calls.findByNameAndYear.push({ name, year });
      return options?.existingByNameAndYear ?? null;
    },
    async create(data: CreateVestibularInput) {
      calls.create.push(data);
      return {
        id: 1,
        ...data,
      } satisfies Vestibular;
    },
    async update(id: number, data: Omit<UpdateVestibularInput, 'id'>) {
      calls.update.push({ id, data });
      return {
        id,
        name: data.name ?? options?.existingById?.name ?? 'Vestibular',
        description: data.description ?? '',
        year: data.year ?? options?.existingById?.year ?? 2025,
        imageUrl: data.imageUrl ?? null,
      } satisfies Vestibular;
    },
    async delete(id: number) {
      calls.delete.push(id);
    },
  };

  return { repository, calls };
}

test('CreateVestibularUseCase trims fields and validates uniqueness by name and year', async () => {
  const { repository, calls } = createVestibularRepositoryMock();
  const useCase = new CreateVestibularUseCase(repository);

  const result = await useCase.execute({
    name: '  ENEM  ',
    description: '  Exame nacional  ',
    year: 2025,
  });

  assert.deepEqual(calls.findByNameAndYear[0], {
    name: 'ENEM',
    year: 2025,
  });
  assert.deepEqual(calls.create[0], {
    name: 'ENEM',
    description: 'Exame nacional',
    year: 2025,
    imageUrl: null,
  });
  assert.equal(result.name, 'ENEM');
});

test('CreateVestibularUseCase rejects invalid years', async () => {
  const { repository } = createVestibularRepositoryMock();
  const useCase = new CreateVestibularUseCase(repository);

  await assert.rejects(
    () =>
      useCase.execute({
        name: 'Vestibular',
        description: 'Descricao',
        year: 1980,
      }),
    /Ano.+v.+lido/i
  );
});

test('CreateVestibularUseCase rejects duplicate vestibulars with the same name and year', async () => {
  const { repository } = createVestibularRepositoryMock({
    existingByNameAndYear: {
      id: 1,
      name: 'ENEM',
      description: 'Existente',
      year: 2025,
    },
  });
  const useCase = new CreateVestibularUseCase(repository);

  await assert.rejects(
    () =>
      useCase.execute({
        name: 'ENEM',
        description: 'Descricao',
        year: 2025,
      }),
    /j.+ existe/i
  );
});

test('UpdateVestibularUseCase preserves current values when optional fields are omitted', async () => {
  const existingVestibular: Vestibular = {
    id: 5,
    name: 'Fuvest',
    description: 'Descricao atual',
    year: 2026,
    imageUrl: 'cover.png',
  };
  const { repository, calls } = createVestibularRepositoryMock({
    existingById: existingVestibular,
  });
  const useCase = new UpdateVestibularUseCase(repository);

  await useCase.execute({
    id: 5,
    name: '  Fuvest Atualizada  ',
    description: '   ',
  });

  assert.deepEqual(calls.update[0], {
    id: 5,
    data: {
      name: 'Fuvest Atualizada',
      description: '',
      year: 2026,
      imageUrl: 'cover.png',
    },
  });
});

test('UpdateVestibularUseCase rejects blank names', async () => {
  const { repository } = createVestibularRepositoryMock({
    existingById: {
      id: 5,
      name: 'Fuvest',
    },
  });
  const useCase = new UpdateVestibularUseCase(repository);

  await assert.rejects(
    () =>
      useCase.execute({
        id: 5,
        name: '   ',
      }),
    /Nome n.+o pode estar vazio/
  );
});

test('DeleteVestibularUseCase rejects deleting a non-existent vestibular', async () => {
  const { repository, calls } = createVestibularRepositoryMock();
  const useCase = new DeleteVestibularUseCase(repository);

  await assert.rejects(() => useCase.execute(9), /n.+o encontrado/i);
  assert.deepEqual(calls.delete, []);
});
