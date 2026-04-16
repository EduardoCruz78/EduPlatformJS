import test from 'node:test';
import assert from 'node:assert/strict';

import { AccessibilityMapper } from './accessibility.mapper.ts';

test('AccessibilityMapper.toDomain preserves description, topics and theme content', () => {
  const category = AccessibilityMapper.toDomain({
    id: 4,
    name: 'Deficiência visual',
    description: 'Recursos de apoio para leitura',
    needs: [{ id: 1, name: 'Leitura ampliada', accessibilityCategoryId: 4 }],
    themes: [
      {
        id: 8,
        title: 'Fonte ampliada',
        accessibilityCategoryId: 4,
        accessibilityNeedId: null,
        content: 'Aumentar a escala do texto.',
      },
    ],
    categoryTopics: [{ topic: { id: 11, name: 'Interpretação de texto' } }],
  });

  assert.deepEqual(category, {
    id: 4,
    name: 'Deficiência visual',
    description: 'Recursos de apoio para leitura',
    needs: [{ id: 1, name: 'Leitura ampliada', accessibilityCategoryId: 4 }],
    themes: [
      {
        id: 8,
        title: 'Fonte ampliada',
        accessibilityCategoryId: 4,
        accessibilityNeedId: null,
        content: 'Aumentar a escala do texto.',
      },
    ],
    topics: [{ id: 11, name: 'Interpretação de texto' }],
  });
});
