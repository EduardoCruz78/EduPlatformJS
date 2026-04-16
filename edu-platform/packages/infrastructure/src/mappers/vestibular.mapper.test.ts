import test from 'node:test';
import assert from 'node:assert/strict';

import { VestibularMapper } from './vestibular.mapper.ts';

test('VestibularMapper.toVestibularSubject preserves vestibularId from persistence data', () => {
  const subject = VestibularMapper.toVestibularSubject({
    vestibularId: 42,
    subjectId: 7,
    subject: {
      id: 7,
      name: 'Matematica',
      description: null,
      imageUrl: null,
      order: 0,
      seriesId: null,
      series: null,
    },
  });

  assert.deepEqual(subject, {
    vestibularId: 42,
    subjectId: 7,
    subject: {
      id: 7,
      name: 'Matematica',
      description: null,
      imageUrl: null,
      order: 0,
      seriesId: null,
      series: undefined,
    },
  });
});

test('VestibularMapper.toVestibularContent keeps the vestibular content metadata', () => {
  const content = VestibularMapper.toVestibularContent({
    id: 9,
    vestibularId: 42,
    title: 'Lista exclusiva',
    type: 'PDF',
    link: null,
    pdfUrl: 'https://example.com/lista.pdf',
    originalContentId: null,
    isShared: false,
  });

  assert.deepEqual(content, {
    id: 9,
    vestibularId: 42,
    title: 'Lista exclusiva',
    type: 'PDF',
    link: null,
    pdfUrl: 'https://example.com/lista.pdf',
    isShared: false,
    originalContentId: null,
    content: null,
  });
});
