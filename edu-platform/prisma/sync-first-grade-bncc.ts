import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

import {
  BNCC_SOURCE_URL,
  firstGradeBnccSubjects,
  type BnccSubject,
} from './data/first-grade-bncc.ts';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL nao encontrada no ambiente.');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const SERIES_NAME = '1 Ano - Ensino Fundamental';
const THUMBNAIL_URL = 'https://placehold.co/640x360?text=BNCC+1o+Ano';

function normalizeComparison(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
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

async function ensureSubject(subject: BnccSubject, seriesId: number, order: number) {
  const existing = await prisma.subject.findFirst({
    where: {
      name: subject.name,
      seriesId,
    },
  });

  if (existing) {
    return prisma.subject.update({
      where: { id: existing.id },
      data: {
        description: subject.description,
        order,
      },
    });
  }

  return prisma.subject.create({
    data: {
      name: subject.name,
      description: subject.description,
      order,
      seriesId,
    },
  });
}

async function deleteTopicForSubject(topicId: number, subjectId: number) {
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

function buildContentDescription(subject: BnccSubject, topicUnit: string) {
  return [
    `${subject.description}`,
    `Unidade tematica: ${topicUnit}.`,
    `Fonte oficial: BNCC/MEC, paginas ${subject.sourcePageStart}-${subject.sourcePageEnd}.`,
  ].join(' ');
}

async function syncSubject(subject: BnccSubject, subjectId: number) {
  const existingRelations = await prisma.topicSubject.findMany({
    where: { subjectId },
    include: {
      topic: {
        include: {
          contents: true,
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
  const desiredNames = new Set(
    subject.topics.map((topic) =>
      normalizeComparison(`${topic.unit}: ${topic.name}`)
    )
  );

  for (const relation of existingRelations) {
    const normalizedName = normalizeComparison(relation.topic.name);

    if (!desiredNames.has(normalizedName)) {
      await deleteTopicForSubject(relation.topicId, subjectId);
    }
  }

  for (const [topicOrder, topic] of subject.topics.entries()) {
    const topicName = `${topic.unit}: ${topic.name}`;
    const normalizedName = normalizeComparison(topicName);
    const existing = existingByName.get(normalizedName);

    let topicRecord;

    if (existing) {
      topicRecord = await prisma.topic.update({
        where: { id: existing.topicId },
        data: { name: topicName },
      });
    } else {
      topicRecord = await prisma.topic.create({
        data: {
          name: topicName,
          topicSubjects: {
            create: {
              subjectId,
            },
          },
        },
      });
    }

    const contentTitle = `Base oficial BNCC - ${topic.name}`;
    const existingContents = await prisma.content.findMany({
      where: { topicId: topicRecord.id },
    });
    const existingContent = existingContents.find(
      (content) => content.title === contentTitle
    );

    const payload = {
      title: contentTitle,
      description: buildContentDescription(subject, topic.unit),
      type: 'ARTICLE',
      link: `${BNCC_SOURCE_URL}#page=${subject.sourcePageStart}`,
      thumbnailUrl: THUMBNAIL_URL,
      videoUrl: null,
      pdfUrl: BNCC_SOURCE_URL,
      order: topicOrder,
      topicId: topicRecord.id,
    };

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

    for (const staleContent of existingContents) {
      if (staleContent.id !== existingContent?.id) {
        await prisma.content.delete({
          where: { id: staleContent.id },
        });
      }
    }
  }
}

async function removeSubjectsOutsideOfficialScope(seriesId: number) {
  const allowedNames = new Set(firstGradeBnccSubjects.map((subject) => subject.name));
  const subjects = await prisma.subject.findMany({
    where: { seriesId },
  });

  for (const subject of subjects) {
    if (!allowedNames.has(subject.name)) {
      const relations = await prisma.topicSubject.findMany({
        where: { subjectId: subject.id },
      });

      for (const relation of relations) {
        await deleteTopicForSubject(relation.topicId, subject.id);
      }

      await prisma.subject.delete({
        where: { id: subject.id },
      });
    }
  }
}

async function main() {
  const series = await ensureSeries(SERIES_NAME);

  await removeSubjectsOutsideOfficialScope(series.id);

  for (const [index, subject] of firstGradeBnccSubjects.entries()) {
    const subjectRecord = await ensureSubject(subject, series.id, index);
    await syncSubject(subject, subjectRecord.id);
    console.log(`- ${subject.name}: ${subject.topics.length} topico(s) sincronizado(s)`);
  }

  const subjects = await prisma.subject.findMany({
    where: { seriesId: series.id },
    orderBy: { order: 'asc' },
    include: {
      topicSubjects: true,
    },
  });

  const totalTopics = subjects.reduce(
    (sum, subject) => sum + subject.topicSubjects.length,
    0
  );
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
    `Sincronizacao oficial concluida para ${SERIES_NAME}. Disciplinas: ${subjects.length}. Topicos: ${totalTopics}. Conteudos: ${totalContents}.`
  );
}

main()
  .catch((error) => {
    console.error('Erro ao sincronizar a base oficial do 1o ano:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
