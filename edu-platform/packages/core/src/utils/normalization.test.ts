import test from 'node:test';
import assert from 'node:assert/strict';

import { normalizeNullableString, normalizeNumber, normalizeString } from './normalize.ts';
import { slugify } from './slug.ts';

test('slugify normalizes accents, punctuation and repeated separators', () => {
  assert.equal(slugify('  Matemática: Álgebra & Funções  '), 'matematica-algebra-funcoes');
  assert.equal(slugify('CNH -- 1ª habilitação'), 'cnh-1-habilitacao');
});

test('string normalizers preserve fallback semantics for optional updates', () => {
  assert.equal(normalizeString(undefined, 'valor atual'), 'valor atual');
  assert.equal(normalizeString('   ', 'valor atual'), 'valor atual');
  assert.equal(normalizeString('  novo valor  ', 'valor atual'), 'novo valor');

  assert.equal(normalizeNullableString(undefined, 'descricao atual'), 'descricao atual');
  assert.equal(normalizeNullableString(null, 'descricao atual'), null);
  assert.equal(normalizeNullableString('   ', 'descricao atual'), null);
  assert.equal(normalizeNullableString('  descricao nova  ', 'descricao atual'), 'descricao nova');
});

test('normalizeNumber only falls back for omitted values', () => {
  assert.equal(normalizeNumber(undefined, 5), 5);
  assert.equal(normalizeNumber(0, 5), 0);
  assert.equal(normalizeNumber(8, 5), 8);
});
