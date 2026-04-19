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

async function ensurePracticalCategory(data: {
  name: string;
  description: string;
  slug: string;
  icon: string;
  order: number;
}) {
  const existing =
    (await prisma.practicalCategory.findUnique({
      where: { slug: data.slug },
    })) ??
    (await prisma.practicalCategory.findUnique({
      where: { name: data.name },
    }));

  if (existing) {
    return prisma.practicalCategory.update({
      where: { id: existing.id },
      data,
    });
  }

  return prisma.practicalCategory.create({
    data,
  });
}

async function ensurePracticalGuide(data: {
  practicalCategoryId: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
  order: number;
  isPublished: boolean;
}) {
  const existing = await prisma.practicalGuide.findUnique({
    where: { slug: data.slug },
  });

  if (existing) {
    return prisma.practicalGuide.update({
      where: { id: existing.id },
      data,
    });
  }

  return prisma.practicalGuide.create({
    data,
  });
}

async function ensurePracticalGuideLink(data: {
  practicalGuideId: number;
  label: string;
  url: string;
  order: number;
}) {
  const existing = await prisma.practicalGuideLink.findFirst({
    where: {
      practicalGuideId: data.practicalGuideId,
      label: data.label,
    },
  });

  if (existing) {
    return prisma.practicalGuideLink.update({
      where: { id: existing.id },
      data,
    });
  }

  return prisma.practicalGuideLink.create({
    data,
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

  const cnhCategory = await ensurePracticalCategory({
    name: 'Autoescola e CNH',
    description:
      'Guias diretos sobre primeira habilitacao, etapas da autoescola e preparacao para o processo.',
    slug: 'autoescola-e-cnh',
    icon: 'CNH',
    order: 1,
  });

  const laborCategory = await ensurePracticalCategory({
    name: 'Direitos trabalhistas',
    description:
      'Explicacoes objetivas sobre CLT, rescisao, ferias, FGTS e direitos que ajudam no dia a dia.',
    slug: 'direitos-trabalhistas',
    icon: 'CLT',
    order: 2,
  });

  const consumerCategory = await ensurePracticalCategory({
    name: 'Direitos do consumidor',
    description:
      'Guia pratico para problemas de compra, cobranca indevida, garantia e canais de reclamacao.',
    slug: 'direitos-do-consumidor',
    icon: 'CDC',
    order: 3,
  });

  const firstLicenseGuide = await ensurePracticalGuide({
    practicalCategoryId: cnhCategory.id,
    title: 'Como tirar a primeira habilitacao',
    summary:
      'Entenda documentos, exames, aulas e custos mais comuns para iniciar o processo da CNH.',
    slug: 'como-tirar-a-primeira-habilitacao',
    order: 1,
    isPublished: true,
    content: [
      '1. Separe documentos basicos como RG, CPF e comprovante de residencia.',
      '2. Procure um CFC ou autoescola credenciada no seu estado.',
      '3. Confirme valores de matricula, exames medico e psicotecnico e carga de aulas.',
      '4. Organize um cronograma para estudo teorico e pratica supervisionada.',
      '',
      'Dica pratica: compare prazos, reputacao e taxas extras antes de fechar contrato.',
    ].join('\n'),
  });

  const layoffGuide = await ensurePracticalGuide({
    practicalCategoryId: laborCategory.id,
    title: 'O que receber em demissao sem justa causa',
    summary:
      'Resumo dos direitos mais comuns na rescisao para saber o que conferir antes de assinar.',
    slug: 'o-que-receber-em-demissao-sem-justa-causa',
    order: 1,
    isPublished: true,
    content: [
      'Confira se entraram saldo de salario, aviso previo, 13 salario proporcional e ferias proporcionais.',
      'Verifique tambem saque do FGTS e multa de 40 por cento quando aplicavel.',
      'Peça comprovantes e guarde holerites, contrato e termo de rescisao.',
      '',
      'Se algo parecer errado, procure sindicato, contador ou advogado trabalhista de confianca.',
    ].join('\n'),
  });

  const chargeGuide = await ensurePracticalGuide({
    practicalCategoryId: consumerCategory.id,
    title: 'Cobranca indevida: o que fazer',
    summary:
      'Passos simples para registrar prova, pedir correcao e acionar canais formais quando necessario.',
    slug: 'cobranca-indevida-o-que-fazer',
    order: 1,
    isPublished: true,
    content: [
      'Guarde prints, boletos, notas fiscais e qualquer comprovante da cobranca.',
      'Entre em contato com a empresa por canal oficial e anote protocolo, data e atendente.',
      'Se nao resolver, registre reclamacao em Procon, Consumidor.gov.br ou outro canal competente.',
      '',
      'Em valores repetidos ou insistentes, vale buscar orientacao juridica para avaliar devolucao em dobro e danos.',
    ].join('\n'),
  });

  await Promise.all([
    ensurePracticalGuideLink({
      practicalGuideId: firstLicenseGuide.id,
      label: 'Portal Gov.br',
      url: 'https://www.gov.br',
      order: 1,
    }),
    ensurePracticalGuideLink({
      practicalGuideId: firstLicenseGuide.id,
      label: 'Detran SP',
      url: 'https://www.detran.sp.gov.br',
      order: 2,
    }),
    ensurePracticalGuideLink({
      practicalGuideId: layoffGuide.id,
      label: 'Carteira de Trabalho Digital',
      url: 'https://www.gov.br/pt-br/temas/carteira-de-trabalho-digital',
      order: 1,
    }),
    ensurePracticalGuideLink({
      practicalGuideId: chargeGuide.id,
      label: 'Consumidor.gov.br',
      url: 'https://www.consumidor.gov.br',
      order: 1,
    }),
  ]);

  const [seriesCount, subjectCount, topicCount, contentCount, practicalCategoryCount, practicalGuideCount] = await Promise.all([
    prisma.series.count(),
    prisma.subject.count(),
    prisma.topic.count(),
    prisma.content.count(),
    prisma.practicalCategory.count(),
    prisma.practicalGuide.count(),
  ]);

  console.log('Seed finalizado!');
  console.log(
    `Series: ${seriesCount} | Materias: ${subjectCount} | Topicos: ${topicCount} | Conteudos: ${contentCount} | Categorias Vida Pratica: ${practicalCategoryCount} | Guias: ${practicalGuideCount}`
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
