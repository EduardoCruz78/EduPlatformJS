import type { CreateContentInput } from '../../dtos';
import type { Content } from '../../entities';
import { AppError } from '../../errors/app-error.ts';
import type { IContentRepository } from '../../repositories/IContentRepository';

const DEFAULT_THUMBNAILS = {
  VIDEO: 'https://picsum.photos/seed/video-aula/960/540',
  PDF: 'https://picsum.photos/seed/material-pdf/960/540',
  ARTICLE: 'https://picsum.photos/seed/artigo-educacional/960/540',
} as const;

function extractYoutubeId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.split('/').filter(Boolean)[0] ?? null;
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      return parsedUrl.searchParams.get('v');
    }
  } catch {
    return null;
  }

  return null;
}

function buildThumbnailUrl(type: Content['type'], link: string, provided?: string | null) {
  const thumbnailUrl = provided?.trim();

  if (thumbnailUrl) {
    return thumbnailUrl;
  }

  if (type === 'VIDEO') {
    const youtubeId = extractYoutubeId(link);

    if (youtubeId) {
      return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    }
  }

  return DEFAULT_THUMBNAILS[type];
}

export class CreateContentUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(input: CreateContentInput): Promise<Content> {
    const title = input.title.trim();
    const type = input.type;
    const rawLink = input.link?.trim() ?? '';
    const rawVideoUrl = input.videoUrl?.trim() ?? '';
    const rawPdfUrl = input.pdfUrl?.trim() ?? '';

    if (!title) {
      throw AppError.validation('Titulo do conteudo e obrigatorio.');
    }

    if (!input.topicId) {
      throw AppError.validation('Topico e obrigatorio.');
    }

    if (type === 'VIDEO' && !rawLink && !rawVideoUrl) {
      throw AppError.validation('Video precisa de link ou URL de video.');
    }

    if (type === 'PDF' && !rawPdfUrl && !rawLink) {
      throw AppError.validation('PDF precisa de URL do arquivo ou link principal.');
    }

    if (type === 'ARTICLE' && !rawLink) {
      throw AppError.validation('Artigo precisa de link principal.');
    }

    const link = rawLink || rawVideoUrl || rawPdfUrl;
    const thumbnailUrl = buildThumbnailUrl(type, link, input.thumbnailUrl);

    return this.contentRepository.create({
      title,
      description: input.description?.trim() ?? null,
      topicId: input.topicId,
      type,
      link,
      thumbnailUrl,
      videoUrl: rawVideoUrl || null,
      pdfUrl: rawPdfUrl || null,
      transcript: input.transcript?.trim() ?? null,
      captionsUrl: input.captionsUrl?.trim() || null,
      librasUrl: input.librasUrl?.trim() || null,
      audioDescriptionUrl: input.audioDescriptionUrl?.trim() || null,
      order: input.order ?? 0,
    });
  }
}

