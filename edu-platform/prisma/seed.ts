import 'dotenv/config';
import { PrismaClient, type Series, type Subject } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL nao encontrada no ambiente.');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const seriesNames = [
  '1 Ano - Ensino Fundamental',
  '2 Ano - Ensino Fundamental',
  '3 Ano - Ensino Fundamental',
  '4 Ano - Ensino Fundamental',
  '5 Ano - Ensino Fundamental',
  '6 Ano - Ensino Fundamental',
  '7 Ano - Ensino Fundamental',
  '8 Ano - Ensino Fundamental',
  '9 Ano - Ensino Fundamental',
  '1 Serie - Ensino Medio',
  '2 Serie - Ensino Medio',
  '3 Serie - Ensino Medio',
];

const fundamentalSubjects = [
  'Lingua Portuguesa',
  'Matematica',
  'Ciencias',
  'Historia',
  'Geografia',
  'Ingles',
  'Artes',
  'Educacao Fisica',
];

const highSchoolSubjects = [
  'Lingua Portuguesa',
  'Matematica',
  'Biologia',
  'Fisica',
  'Quimica',
  'Historia',
  'Geografia',
  'Filosofia',
  'Sociologia',
];

const contentTypes = ['VIDEO', 'PDF', 'ARTICLE'] as const;

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
    where: { name, seriesId },
  });

  if (existing) {
    return existing;
  }

  return prisma.subject.create({
    data: { name, seriesId },
  });
}

async function ensureTopicForSubject(topicName: string, subjectId: number) {
  const existingTopic = await prisma.topic.findFirst({
    where: {
      name: topicName,
      topicSubjects: {
        some: { subjectId },
      },
    },
  });

  if (existingTopic) {
    return existingTopic;
  }

  const topic = await prisma.topic.create({
    data: { name: topicName },
  });

  await prisma.topicSubject.create({
    data: {
      topicId: topic.id,
      subjectId,
    },
  });

  return topic;
}

async function ensureContent(topicId: number, topicName: string, order: number) {
  const title = `Conteudo BNCC - ${topicName}`;
  const existing = await prisma.content.findFirst({
    where: { title, topicId },
  });

  if (existing) {
    return existing;
  }

  const type = contentTypes[order % contentTypes.length];

  return prisma.content.create({
    data: {
      title,
      type,
      link: 'https://youtube.com/watch?v=bncc-exemplo',
      thumbnailUrl: `https://picsum.photos/id/${200 + order}/600/400`,
      topicId,
      order,
    },
  });
}

async function main() {
  console.log('Iniciando seed BNCC completo...');

  const allSeries: Series[] = [];
  for (const name of seriesNames) {
    const series = await ensureSeries(name);
    allSeries.push(series);
  }

  const allSubjects: Subject[] = [];
  for (const series of allSeries) {
    const subjectNames = series.name.includes('Fundamental')
      ? fundamentalSubjects
      : highSchoolSubjects;

    for (const name of subjectNames) {
      const subject = await ensureSubject(name, series.id);
      allSubjects.push(subject);
    }
  }

  for (const [subjectIndex, subject] of allSubjects.entries()) {
    const baseTopics = getBaseTopics(subject.name);

    for (const [topicIndex, topicName] of baseTopics.entries()) {
      const topic = await ensureTopicForSubject(topicName, subject.id);
      await ensureContent(topic.id, topic.name, subjectIndex + topicIndex);
    }
  }

  const [seriesCount, subjectCount, topicCount, contentCount] = await Promise.all([
    prisma.series.count(),
    prisma.subject.count(),
    prisma.topic.count(),
    prisma.content.count(),
  ]);

  console.log('Seed finalizado!');
  console.log(
    `Series: ${seriesCount} | Materias: ${subjectCount} | Topicos: ${topicCount} | Conteudos: ${contentCount}`
  );
}

function getBaseTopics(subjectName: string): string[] {
  if (subjectName === 'Lingua Portuguesa') {
    return ['Alfabetizacao', 'Generos textuais', 'Gramatica', 'Producao textual'];
  }

  if (subjectName === 'Matematica') {
    return ['Numeros', 'Geometria', 'Fracoes', 'Algebra'];
  }

  return ['Introducao', 'Conceitos basicos', 'Exercicios praticos'];
}

main()
  .catch((error) => {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
