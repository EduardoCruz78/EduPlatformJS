import test from 'node:test';
import assert from 'node:assert/strict';

import { ContentMapper } from './content.mapper.ts';

test('ContentMapper.toDomain preserves accessibility metadata and ordering', () => {
  const content = ContentMapper.toDomain({
    id: 7,
    title: 'Videoaula de matrizes',
    description: 'Introducao guiada',
    type: 'VIDEO',
    link: 'https://example.com/matrizes',
    thumbnailUrl: 'https://example.com/thumb.png',
    videoUrl: 'https://example.com/video.mp4',
    pdfUrl: null,
    transcript: 'Transcricao completa',
    captionsUrl: 'https://example.com/captions.vtt',
    librasUrl: 'https://example.com/libras.mp4',
    audioDescriptionUrl: 'https://example.com/audio.mp3',
    order: 3,
    topicId: 4,
  });

  assert.deepEqual(content, {
    id: 7,
    title: 'Videoaula de matrizes',
    description: 'Introducao guiada',
    type: 'VIDEO',
    link: 'https://example.com/matrizes',
    thumbnailUrl: 'https://example.com/thumb.png',
    videoUrl: 'https://example.com/video.mp4',
    pdfUrl: null,
    transcript: 'Transcricao completa',
    captionsUrl: 'https://example.com/captions.vtt',
    librasUrl: 'https://example.com/libras.mp4',
    audioDescriptionUrl: 'https://example.com/audio.mp3',
    order: 3,
    topicId: 4,
  });
});
