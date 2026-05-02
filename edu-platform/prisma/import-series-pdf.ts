import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { PDFParse } from 'pdf-parse';

type ParsedContentType = 'VIDEO' | 'ARTICLE';

type ParsedContent = {
  type: ParsedContentType;
  url: string;
};

type ParsedTopic = {
  name: string;
  contents: ParsedContent[];
};

type ParsedSubject = {
  name: string;
  topics: ParsedTopic[];
};

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL nao encontrada no ambiente.');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

function normalizeComparison(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function isPageMarker(line: string) {
  return /^-- \d+ of \d+ --$/.test(line);
}

function isUrlContinuation(line: string) {
  return !/\s/.test(line);
}

function isSkippableSummary(normalizedLine: string) {
  const exactMatches = new Set([
    'videos',
    'video',
    'exercicios',
    'exercicio',
    'ou',
    'so falar',
  ]);

  const partialMatches = [
    'resultado',
    'proximo passo',
    'proximo',
    'conclusao',
    'agora sim',
    'perfeito',
    'todos os topicos',
    'estrutura perfeita',
    'pronto pra banco',
    'consistente com bncc',
    'conteudo alinhado',
    'conteudo coerente',
    'totalmente alinhado',
    'faltam so',
    'ou posso ja',
    'agora faltam',
    'rigorosamente o padrao',
    'mantendo rigorosamente o padrao',
    'seguindo rigorosamente o padrao',
    'estrutura perfeita para banco',
    'escalavel',
    'produto',
    'backend',
    'json',
    'seed real',
    'sem agrupamento',
    'agrupamento',
    '1 topico 4 conteudos',
    '1 topico 4 conteudos',
    'posso seguir com',
    'posso continuar com',
    'ensino religioso',
  ];

  return (
    !normalizedLine ||
    exactMatches.has(normalizedLine) ||
    partialMatches.some((candidate) => normalizedLine.includes(candidate)) ||
    normalizedLine.endsWith('100 completo')
  );
}

function mapHeadingToSubjectName(line: string) {
  const normalized = normalizeComparison(line);

  if (!normalized.includes('ano') || !normalized.includes('completo')) {
    return null;
  }

  if (normalized.includes('lingua portuguesa')) {
    return 'Lingua Portuguesa';
  }

  if (normalized.includes('matematica')) {
    return 'Matematica';
  }

  if (normalized.includes('ciencias')) {
    return 'Ciencias';
  }

  if (normalized.includes('geografia')) {
    return 'Geografia';
  }

  if (normalized.includes('historia')) {
    return 'Historia';
  }

  if (normalized.includes('educacao fisica')) {
    return 'Educacao Fisica';
  }

  if (normalized.includes('arte')) {
    return 'Artes';
  }

  return null;
}

function extractYoutubeId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '');
    }

    if (parsed.hostname.includes('youtube.com')) {
      return parsed.searchParams.get('v');
    }
  } catch {
    return null;
  }

  return null;
}

function buildThumbnailUrl(url: string, topicName: string, order: number) {
  const youtubeId = extractYoutubeId(url);

  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }

  return `https://picsum.photos/seed/${slugify(topicName)}-${order}/640/360`;
}

function buildContentTitle(
  topicName: string,
  type: ParsedContentType,
  typeOrder: number
) {
  return `${type === 'VIDEO' ? 'Video' : 'Exercicio'} ${typeOrder} - ${topicName}`;
}

async function parseSubjectsFromPdf(pdfPath: string) {
  const parser = new PDFParse({
    data: await readFile(pdfPath),
  });

  try {
    const result = await parser.getText();
    const lines = result.text.split(/\r?\n/).map((line) => line.trim());
    const subjects: ParsedSubject[] = [];
    let currentSubject: ParsedSubject | null = null;
    let currentTopic: ParsedTopic | null = null;
    let currentMode: ParsedContentType | null = null;
    let pendingUrl: string | null = null;

    const pushPendingUrl = () => {
      if (!pendingUrl || !currentTopic || !currentMode) {
        return;
      }

      currentTopic.contents.push({
        type: currentMode,
        url: pendingUrl,
      });
      pendingUrl = null;
    };

    const finalizeTopic = () => {
      pushPendingUrl();

      if (!currentTopic || !currentSubject) {
        currentTopic = null;
        currentMode = null;
        return;
      }

      if (currentTopic.contents.length !== 4) {
        throw new Error(
          `Topico "${currentTopic.name}" foi extraido com ${currentTopic.contents.length} conteudo(s), mas o esperado era 4.`
        );
      }

      currentSubject.topics.push(currentTopic);
      currentTopic = null;
      currentMode = null;
    };

    for (const line of lines) {
      if (!line || isPageMarker(line)) {
        continue;
      }

      if (pendingUrl && !line.startsWith('http')) {
        if (isUrlContinuation(line)) {
          pendingUrl += line;
          continue;
        }

        pushPendingUrl();
      }

      const subjectName = mapHeadingToSubjectName(line);

      if (subjectName) {
        finalizeTopic();
        currentSubject = {
          name: subjectName,
          topics: [],
        };
        subjects.push(currentSubject);
        continue;
      }

      if (!currentSubject) {
        continue;
      }

      const normalizedLine = normalizeComparison(line);

      if (normalizedLine === 'videos' || normalizedLine === 'video') {
        currentMode = 'VIDEO';
        continue;
      }

      if (normalizedLine === 'exercicios' || normalizedLine === 'exercicio') {
        currentMode = 'ARTICLE';
        continue;
      }

      if (line.startsWith('http')) {
        if (pendingUrl) {
          pushPendingUrl();
        }

        pendingUrl = line;
        continue;
      }

      if (isSkippableSummary(normalizedLine)) {
        continue;
      }

      if (currentTopic && currentTopic.contents.length === 4) {
        finalizeTopic();
      }

      if (currentTopic && currentTopic.contents.length > 0 && currentTopic.contents.length < 4) {
        throw new Error(
          `Foi encontrado um novo bloco antes de completar o topico "${currentTopic.name}".`
        );
      }

      currentTopic = {
        name: line,
        contents: [],
      };
      currentMode = null;
    }

    finalizeTopic();

    return subjects;
  } finally {
    await parser.destroy();
  }
}

async function ensureSeries(name: string) {
  const existing = await prisma.series.findFirst({
    where: { name },
  });

  if (existing) {
    return existing;
  }

  return prisma.series.create({
    data: { name },
  });
}

async function ensureSubject(name: string, seriesId: number) {
  const existing = await prisma.subject.findFirst({
    where: {
      name,
      seriesId,
    },
  });

  if (existing) {
    return existing;
  }

  return prisma.subject.create({
    data: {
      name,
      seriesId,
    },
  });
}

async function removeTopicForSubject(topicId: number, subjectId: number) {
  const topic = await prisma.topic.findUnique({
    where: { id: topicId },
    include: {
      topicSubjects: true,
    },
  });

  if (!topic) {
    return;
  }

  if (topic.topicSubjects.length <= 1) {
    await prisma.topic.delete({
      where: { id: topicId },
    });
    return;
  }

  await prisma.topicSubject.delete({
    where: {
      topicId_subjectId: {
        topicId,
        subjectId,
      },
    },
  });
}

async function syncSubjectTopics(
  subjectId: number,
  parsedTopics: ParsedTopic[]
) {
  const existingRelations = await prisma.topicSubject.findMany({
    where: { subjectId },
    include: {
      topic: {
        include: {
          contents: {
            orderBy: {
              order: 'asc',
            },
          },
          topicSubjects: true,
        },
      },
    },
  });

  const existingByName = new Map(
    existingRelations.map((relation) => [
      normalizeComparison(relation.topic.name),
      relation,
    ])
  );
  const desiredNames = new Set(parsedTopics.map((topic) => normalizeComparison(topic.name)));

  for (const relation of existingRelations) {
    const normalizedName = normalizeComparison(relation.topic.name);

    if (!desiredNames.has(normalizedName)) {
      await removeTopicForSubject(relation.topicId, subjectId);
    }
  }

  for (const parsedTopic of parsedTopics) {
    const normalizedName = normalizeComparison(parsedTopic.name);
    const existing = existingByName.get(normalizedName);

    let topicId: number;

    if (existing) {
      topicId = existing.topicId;

      if (existing.topic.name !== parsedTopic.name) {
        await prisma.topic.update({
          where: { id: topicId },
          data: { name: parsedTopic.name },
        });
      }
    } else {
      const topic = await prisma.topic.create({
        data: {
          name: parsedTopic.name,
          topicSubjects: {
            create: {
              subjectId,
            },
          },
        },
      });

      topicId = topic.id;
    }

    const existingContents = await prisma.content.findMany({
      where: { topicId },
      orderBy: {
        order: 'asc',
      },
    });
    const existingContentByTitle = new Map(
      existingContents.map((content) => [content.title, content])
    );
    const desiredTitles = new Set<string>();

    for (const [index, content] of parsedTopic.contents.entries()) {
      const typeOrder = content.type === 'VIDEO' ? index + 1 : index - 1;
      const title = buildContentTitle(parsedTopic.name, content.type, typeOrder);
      desiredTitles.add(title);

      const payload = {
        title,
        description:
          content.type === 'VIDEO'
            ? `Video recomendado para o topico ${parsedTopic.name}.`
            : `Exercicio recomendado para o topico ${parsedTopic.name}.`,
        type: content.type,
        link: content.url,
        thumbnailUrl: buildThumbnailUrl(content.url, parsedTopic.name, index + 1),
        videoUrl: content.type === 'VIDEO' ? content.url : null,
        pdfUrl: null,
        order: index,
        topicId,
      };
      const existingContent = existingContentByTitle.get(title);

      if (existingContent) {
        await prisma.content.update({
          where: { id: existingContent.id },
          data: payload,
        });
      } else {
        await prisma.content.create({
          data: payload,
        });
      }
    }

    for (const content of existingContents) {
      if (!desiredTitles.has(content.title)) {
        await prisma.content.delete({
          where: { id: content.id },
        });
      }
    }
  }
}

async function main() {
  const pdfPathArg = process.argv[2];
  const seriesName = process.argv[3] ?? '1 Ano - Ensino Fundamental';

  if (!pdfPathArg) {
    throw new Error(
      'Uso: node --experimental-transform-types --experimental-specifier-resolution=node prisma/import-series-pdf.ts "C:\\caminho\\arquivo.pdf" "1 Ano - Ensino Fundamental"'
    );
  }

  const pdfPath = resolve(pdfPathArg);
  const parsedSubjects = await parseSubjectsFromPdf(pdfPath);
  const series = await ensureSeries(seriesName);

  console.log(
    `Importando ${parsedSubjects.length} disciplina(s) do arquivo ${pdfPath} para ${series.name}...`
  );

  for (const parsedSubject of parsedSubjects) {
    const subject = await ensureSubject(parsedSubject.name, series.id);
    await syncSubjectTopics(subject.id, parsedSubject.topics);
    console.log(
      `- ${parsedSubject.name}: ${parsedSubject.topics.length} topico(s) sincronizado(s)`
    );
  }

  const totalTopics = await prisma.topicSubject.count({
    where: { subject: { seriesId: series.id } },
  });
  const totalContents = await prisma.content.count({
    where: {
      topic: {
        topicSubjects: {
          some: {
            subject: {
              seriesId: series.id,
            },
          },
        },
      },
    },
  });

  console.log(
    `Importacao concluida para ${series.name}. Topicos vinculados: ${totalTopics}. Conteudos: ${totalContents}.`
  );
}

main()
  .catch((error) => {
    console.error('Erro ao importar PDF para o banco:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
