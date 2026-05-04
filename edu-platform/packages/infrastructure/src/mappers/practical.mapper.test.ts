import test from 'node:test';
import assert from 'node:assert/strict';

import { PracticalMapper } from './practical.mapper.ts';

test('PracticalMapper.toCategory preserves nested published guides and ordered links', () => {
  const category = PracticalMapper.toCategory({
    id: 1,
    name: 'Documentos',
    description: 'Guias sobre documentos essenciais',
    slug: 'documentos',
    icon: 'FileText',
    order: 2,
    guides: [
      {
        id: 10,
        practicalCategoryId: 1,
        title: 'Como tirar RG',
        summary: 'Passo a passo resumido',
        content: 'Conteudo completo',
        slug: 'como-tirar-rg',
        order: 1,
        isPublished: true,
        links: [
          {
            id: 100,
            practicalGuideId: 10,
            label: 'Portal oficial',
            url: 'https://example.com/rg',
            order: 1,
          },
        ],
      },
    ],
  });

  assert.equal(category.guides?.[0]?.isPublished, true);
  assert.equal(category.guides?.[0]?.links?.[0]?.url, 'https://example.com/rg');
  assert.deepEqual(category, {
    id: 1,
    name: 'Documentos',
    description: 'Guias sobre documentos essenciais',
    slug: 'documentos',
    icon: 'FileText',
    order: 2,
    guides: [
      {
        id: 10,
        practicalCategoryId: 1,
        title: 'Como tirar RG',
        summary: 'Passo a passo resumido',
        content: 'Conteudo completo',
        slug: 'como-tirar-rg',
        order: 1,
        isPublished: true,
        links: [
          {
            id: 100,
            practicalGuideId: 10,
            label: 'Portal oficial',
            url: 'https://example.com/rg',
            order: 1,
          },
        ],
      },
    ],
  });
});
