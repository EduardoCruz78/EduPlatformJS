import { config } from 'dotenv';
import { PrismaClient, type Content, type Subject, type Topic } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

config({ path: '.env.local' });
config();

const connectionString = process.env.DATABASE_URL ?? process.env.DIRECT_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL ou DIRECT_URL não encontrada no ambiente.');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const contentTypes = ['VIDEO', 'PDF', 'ARTICLE'] as const;
const provisionalVideoUrl = 'https://youtu.be/BggrpKfqh1c?si=kTGSzLCK9NiZIe0z';
const provisionalTextUrl = 'https://pt.wikipedia.org/wiki/Lorem_ipsum';

const seriesNames = [
  '1º ano do Ensino Fundamental',
  '2º ano do Ensino Fundamental',
  '3º ano do Ensino Fundamental',
  '4º ano do Ensino Fundamental',
  '5º ano do Ensino Fundamental',
  '6º ano do Ensino Fundamental',
  '7º ano do Ensino Fundamental',
  '8º ano do Ensino Fundamental',
  '9º ano do Ensino Fundamental',
  '1ª série do Ensino Médio',
  '2ª série do Ensino Médio',
  '3ª série do Ensino Médio',
];

const fundamentalSubjects = [
  'Língua Portuguesa',
  'Matemática',
  'Ciências',
  'História',
  'Geografia',
  'Inglês',
  'Artes',
  'Educação Física',
];

const highSchoolSubjects = [
  'Língua Portuguesa',
  'Matemática',
  'Biologia',
  'Física',
  'Química',
  'História',
  'Geografia',
  'Filosofia',
  'Sociologia',
  'Redação',
];

const subjectTopicMap: Record<string, string[]> = {
  'Língua Portuguesa': ['Interpretação de texto', 'Gramática aplicada', 'Produção textual'],
  Matemática: ['Números e operações', 'Geometria', 'Álgebra e funções'],
  Ciências: ['Seres vivos', 'Matéria e energia', 'Terra e universo'],
  História: ['Cidadania e sociedade', 'Brasil colonial', 'Mundo contemporâneo'],
  Geografia: ['Cartografia', 'Paisagens naturais', 'População e território'],
  Inglês: ['Vocabulário cotidiano', 'Leitura guiada', 'Comunicação básica'],
  Artes: ['Linguagens artísticas', 'História da arte', 'Projetos criativos'],
  'Educação Física': ['Corpo e movimento', 'Esportes coletivos', 'Saúde e bem-estar'],
  Biologia: ['Citologia', 'Genética', 'Ecologia'],
  Física: ['Cinemática', 'Eletricidade', 'Ondulatória'],
  Química: ['Estrutura da matéria', 'Ligações químicas', 'Reações químicas'],
  Filosofia: ['Ética', 'Conhecimento', 'Filosofia política'],
  Sociologia: ['Cultura e identidade', 'Trabalho e sociedade', 'Cidadania'],
  Redação: ['Projeto de texto', 'Argumentação', 'Coesão e coerência'],
};

const practicalCategories = [
  {
    name: 'Documentos e cidadania',
    description: 'Guias para emissão de documentos, cadastros públicos e organização da vida civil.',
    slug: 'documentos-e-cidadania',
    icon: 'DOC',
    guides: [
      {
        title: 'Como organizar documentos pessoais',
        slug: 'como-organizar-documentos-pessoais',
        summary: 'Passos simples para manter RG, CPF, comprovantes e senhas em ordem.',
      },
      {
        title: 'Primeiro acesso ao Gov.br',
        slug: 'primeiro-acesso-ao-gov-br',
        summary: 'Orientação provisória para criar conta, recuperar senha e usar serviços digitais.',
      },
    ],
  },
  {
    name: 'Trabalho e carreira',
    description: 'Conteúdos sobre currículo, entrevista, direitos trabalhistas e primeiros passos profissionais.',
    slug: 'trabalho-e-carreira',
    icon: 'TRB',
    guides: [
      {
        title: 'Currículo para primeiro emprego',
        slug: 'curriculo-para-primeiro-emprego',
        summary: 'Modelo de estrutura para apresentar formação, cursos e experiências escolares.',
      },
      {
        title: 'O que conferir na rescisão',
        slug: 'o-que-conferir-na-rescisao',
        summary: 'Lista provisória de pontos para revisar antes de assinar documentos de saída.',
      },
    ],
  },
  {
    name: 'Finanças pessoais',
    description: 'Noções iniciais de orçamento, economia doméstica, crédito e planejamento.',
    slug: 'financas-pessoais',
    icon: 'FIN',
    guides: [
      {
        title: 'Orçamento mensal básico',
        slug: 'orcamento-mensal-basico',
        summary: 'Como separar renda, gastos fixos, metas e reserva de emergência.',
      },
      {
        title: 'Como comparar juros',
        slug: 'como-comparar-juros',
        summary: 'Explicação simples para ler parcelas, taxas e custo total.',
      },
    ],
  },
  {
    name: 'Direitos do consumidor',
    description: 'Apoio para compras, garantias, cobranças indevidas e canais de reclamação.',
    slug: 'direitos-do-consumidor',
    icon: 'CDC',
    guides: [
      {
        title: 'Cobrança indevida: o que fazer',
        slug: 'cobranca-indevida-o-que-fazer',
        summary: 'Como reunir provas, pedir correção e registrar uma reclamação formal.',
      },
      {
        title: 'Garantia de produto',
        slug: 'garantia-de-produto',
        summary: 'Resumo provisório sobre prazos, nota fiscal e assistência técnica.',
      },
    ],
  },
  {
    name: 'Saúde e bem-estar',
    description: 'Orientações de rotina, prevenção, atendimento público e cuidado emocional.',
    slug: 'saude-e-bem-estar',
    icon: 'SUS',
    guides: [
      {
        title: 'Como marcar atendimento na UBS',
        slug: 'como-marcar-atendimento-na-ubs',
        summary: 'Caminho básico para buscar atendimento, documentos e acompanhamento.',
      },
      {
        title: 'Rotina de estudos saudável',
        slug: 'rotina-de-estudos-saudavel',
        summary: 'Hábitos provisórios para combinar foco, descanso e alimentação.',
      },
    ],
  },
];

const accessibilityCategories = [
  {
    name: 'Deficiência visual',
    description: 'Recursos para leitura ampliada, descrição de imagens e navegação por teclado.',
    needs: ['Leitor de tela', 'Alto contraste', 'Audiodescrição'],
    themes: [
      'Materiais com transcrição completa',
      'Imagens acompanhadas de descrição objetiva',
      'Contraste suficiente em cards e botões',
    ],
  },
  {
    name: 'Deficiência auditiva',
    description: 'Apoio com legendas, Libras, transcrição e comunicação visual clara.',
    needs: ['Legendas', 'Libras', 'Transcrição textual'],
    themes: [
      'Vídeos com legenda revisada',
      'Materiais com alternativa em Libras',
      'Avisos importantes em formato visual',
    ],
  },
  {
    name: 'Neurodiversidade',
    description: 'Organização de conteúdo com linguagem direta, ritmo claro e previsibilidade.',
    needs: ['Linguagem simples', 'Rotina visual', 'Menos distrações'],
    themes: [
      'Sequência de estudo em pequenos blocos',
      'Resumo antes de exercícios complexos',
      'Indicadores claros de progresso',
    ],
  },
  {
    name: 'Mobilidade e autonomia',
    description: 'Boas práticas para uso com teclado, toque, voz e navegação assistida.',
    needs: ['Teclado', 'Área de toque ampla', 'Atalhos consistentes'],
    themes: [
      'Botões com área clicável confortável',
      'Fluxos que funcionam sem mouse',
      'Mensagens de erro próximas ao campo',
    ],
  },
  {
    name: 'Linguagem simples',
    description: 'Adaptação de textos para leitura objetiva, exemplos concretos e instruções curtas.',
    needs: ['Texto objetivo', 'Exemplos práticos', 'Glossário'],
    themes: [
      'Explicações com frases curtas',
      'Termos técnicos acompanhados de exemplos',
      'Revisão editorial antes da publicação',
    ],
  },
];

const vestibulares = [
  {
    name: 'ENEM',
    year: 2026,
    description: 'Trilha provisória para estudar competências, redação e áreas cobradas no exame.',
  },
  {
    name: 'FUVEST',
    year: 2026,
    description: 'Base inicial com conteúdos de alta incidência para preparação gradual.',
  },
  {
    name: 'UNICAMP',
    year: 2026,
    description: 'Percurso de estudo com leitura crítica, escrita e resolução interdisciplinar.',
  },
  {
    name: 'UNESP',
    year: 2026,
    description: 'Organização provisória de matérias, tópicos e materiais de apoio.',
  },
];

type SubjectTopicCatalog = {
  subject: Subject;
  topic: Topic;
  contents: Content[];
};

async function clearCatalog() {
  await prisma.$transaction([
    prisma.checklist.deleteMany(),
    prisma.vestibularContent.deleteMany(),
    prisma.vestibularTopic.deleteMany(),
    prisma.vestibularSubject.deleteMany(),
    prisma.vestibular.deleteMany(),
    prisma.accessibilityCategoryTopic.deleteMany(),
    prisma.accessibilityThemeMaterial.deleteMany(),
    prisma.accessibilityTheme.deleteMany(),
    prisma.accessibilityNeed.deleteMany(),
    prisma.accessibilityCategory.deleteMany(),
    prisma.practicalGuideLink.deleteMany(),
    prisma.practicalGuide.deleteMany(),
    prisma.practicalCategory.deleteMany(),
    prisma.content.deleteMany(),
    prisma.topicSubject.deleteMany(),
    prisma.topic.deleteMany(),
    prisma.subject.deleteMany(),
    prisma.series.deleteMany(),
  ]);
}

function getSubjectsForSeries(seriesName: string) {
  return seriesName.includes('Ensino Médio') ? highSchoolSubjects : fundamentalSubjects;
}

function buildContentData(topic: Topic, subject: Subject, order: number) {
  const type = contentTypes[order % contentTypes.length];
  const slug = `${subject.name}-${topic.name}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const materialUrl = type === 'VIDEO' ? provisionalVideoUrl : provisionalTextUrl;

  return {
    title: `${topic.name} em ${subject.name}`,
    description: `Material provisório para estudar ${topic.name.toLowerCase()} com exemplos, revisão guiada e exercícios de fixação.`,
    type,
    link: materialUrl,
    thumbnailUrl: `https://picsum.photos/seed/${slug}/960/540`,
    videoUrl: type === 'VIDEO' ? provisionalVideoUrl : null,
    pdfUrl: type === 'PDF' ? provisionalTextUrl : null,
    transcript: `Transcrição provisória da aula sobre ${topic.name}. O conteúdo apresenta conceitos, exemplo resolvido e proposta de prática.`,
    captionsUrl: materialUrl,
    librasUrl: type === 'VIDEO' ? provisionalVideoUrl : provisionalTextUrl,
    audioDescriptionUrl: materialUrl,
    order,
    topicId: topic.id,
  };
}

function buildGuideContent(title: string) {
  return [
    `${title}`,
    '',
    'Este guia provisório organiza informações em linguagem simples para validar a experiência do produto.',
    '1. Leia o objetivo do guia antes de começar.',
    '2. Separe documentos, comprovantes ou dados que forem citados.',
    '3. Registre prazos, protocolos e próximos passos em um lugar seguro.',
    '4. Em situações sensíveis, confirme a orientação em canais oficiais.',
    '',
    'Resumo: o conteúdo funciona como base inicial de estudo e deve ser revisado por especialistas antes de publicação definitiva.',
  ].join('\n');
}

async function seedSeriesCatalog() {
  const allSubjects: Subject[] = [];
  const allTopics: Topic[] = [];
  const allContents: Content[] = [];
  const topicCatalog: SubjectTopicCatalog[] = [];

  for (const [seriesIndex, seriesName] of seriesNames.entries()) {
    const series = await prisma.series.create({ data: { name: seriesName } });
    const subjects = getSubjectsForSeries(seriesName);

    for (const [subjectIndex, subjectName] of subjects.entries()) {
      const subject = await prisma.subject.create({
        data: {
          name: subjectName,
          description: `${subjectName} para ${seriesName}, com trilha provisória completa e navegável.`,
          imageUrl: `https://picsum.photos/seed/${seriesName}-${subjectName}/800/500`,
          order: subjectIndex + 1,
          seriesId: series.id,
        },
      });
      allSubjects.push(subject);

      for (const [topicIndex, topicName] of (subjectTopicMap[subjectName] ?? ['Introdução', 'Prática guiada', 'Revisão']).entries()) {
        const topic = await prisma.topic.create({ data: { name: topicName } });
        await prisma.topicSubject.create({
          data: { topicId: topic.id, subjectId: subject.id },
        });
        allTopics.push(topic);

        const topicContents: Content[] = [];
        for (let contentIndex = 0; contentIndex < 2; contentIndex += 1) {
          const order = seriesIndex * 1000 + subjectIndex * 100 + topicIndex * 10 + contentIndex + 1;
          const content = await prisma.content.create({
            data: buildContentData(topic, subject, order),
          });
          allContents.push(content);
          topicContents.push(content);
        }
        topicCatalog.push({ subject, topic, contents: topicContents });
      }
    }
  }

  return { allSubjects, allTopics, allContents, topicCatalog };
}

async function seedPracticalLife() {
  for (const [categoryIndex, categoryData] of practicalCategories.entries()) {
    const category = await prisma.practicalCategory.create({
      data: {
        name: categoryData.name,
        description: categoryData.description,
        slug: categoryData.slug,
        icon: categoryData.icon,
        order: categoryIndex + 1,
      },
    });

    for (const [guideIndex, guideData] of categoryData.guides.entries()) {
      const guide = await prisma.practicalGuide.create({
        data: {
          practicalCategoryId: category.id,
          title: guideData.title,
          summary: guideData.summary,
          content: buildGuideContent(guideData.title),
          slug: guideData.slug,
          order: guideIndex + 1,
          isPublished: true,
        },
      });

      await prisma.practicalGuideLink.createMany({
        data: [
          {
            practicalGuideId: guide.id,
            label: 'Referência provisória',
            url: provisionalTextUrl,
            order: 1,
          },
          {
            practicalGuideId: guide.id,
            label: 'Texto de apoio',
            url: provisionalTextUrl,
            order: 2,
          },
        ],
      });
    }
  }
}

async function seedAccessibility(topics: Topic[]) {
  for (const [categoryIndex, categoryData] of accessibilityCategories.entries()) {
    const category = await prisma.accessibilityCategory.create({
      data: {
        name: categoryData.name,
        description: categoryData.description,
      },
    });

    const needs = await Promise.all(
      categoryData.needs.map((needName) =>
        prisma.accessibilityNeed.create({
          data: {
            accessibilityCategoryId: category.id,
            name: needName,
          },
        })
      )
    );

    for (const [themeIndex, themeTitle] of categoryData.themes.entries()) {
      const theme = await prisma.accessibilityTheme.create({
        data: {
          accessibilityCategoryId: category.id,
          accessibilityNeedId: needs[themeIndex % needs.length]?.id ?? null,
          title: themeTitle,
          content: `Orientação provisória para ${themeTitle.toLowerCase()}, com foco em autonomia, clareza e adaptação do conteúdo educacional.`,
        },
      });

      await prisma.accessibilityThemeMaterial.createMany({
        data: [
          {
            accessibilityThemeId: theme.id,
            title: `Vídeo de apoio: ${themeTitle}`,
            summary: `Aula provisória com demonstração visual sobre ${themeTitle.toLowerCase()}.`,
            content: `Material em vídeo para apresentar ${themeTitle.toLowerCase()} com linguagem clara, legendas revisadas e indicações visuais para autonomia do estudante.`,
            type: 'VIDEO',
            link: provisionalVideoUrl,
            order: 1,
          },
          {
            accessibilityThemeId: theme.id,
            title: `Artigo de referência: ${themeTitle}`,
            summary: `Texto provisório para orientar adaptações sobre ${themeTitle.toLowerCase()}.`,
            content: `Artigo provisório em estilo lorem ipsum para documentar recomendações, exemplos de aplicação e cuidados editoriais relacionados a ${themeTitle.toLowerCase()}.`,
            type: 'ARTICLE',
            link: provisionalTextUrl,
            order: 2,
          },
        ],
      });
    }

    const topicSlice = topics.slice(categoryIndex * 4, categoryIndex * 4 + 4);
    await prisma.accessibilityCategoryTopic.createMany({
      data: topicSlice.map((topic) => ({
        accessibilityCategoryId: category.id,
        topicId: topic.id,
      })),
      skipDuplicates: true,
    });
  }
}

async function seedVestibulares(subjects: Subject[], topicCatalog: SubjectTopicCatalog[]) {
  const preferredSubjectNames = [
    'Língua Portuguesa',
    'Matemática',
    'Biologia',
    'Física',
    'Química',
    'História',
    'Geografia',
    'Redação',
  ];
  const highSchoolSubjects = subjects.filter((subject) =>
    preferredSubjectNames.includes(subject.name)
  );
  const subjectByName = new Map<string, Subject>();

  for (const subject of highSchoolSubjects) {
    subjectByName.set(subject.name, subject);
  }

  for (const [vestibularIndex, data] of vestibulares.entries()) {
    const vestibular = await prisma.vestibular.create({
      data: {
        name: data.name,
        year: data.year,
        description: data.description,
        imageUrl: `https://picsum.photos/seed/${data.name}-${data.year}/900/520`,
      },
    });

    const selectedSubjects = preferredSubjectNames
      .map((subjectName) => subjectByName.get(subjectName))
      .filter((subject): subject is Subject => Boolean(subject));

    await prisma.vestibularSubject.createMany({
      data: selectedSubjects.map((subject) => ({
        vestibularId: vestibular.id,
        subjectId: subject.id,
      })),
      skipDuplicates: true,
    });

    for (const subject of selectedSubjects) {
      const subjectTopics = topicCatalog.filter((entry) => entry.subject.id === subject.id);

      for (const entry of subjectTopics) {
        const vestibularTopic = await prisma.vestibularTopic.create({
          data: {
            vestibularId: vestibular.id,
            subjectId: subject.id,
            name: entry.topic.name,
            originalTopicId: entry.topic.id,
            isShared: true,
            notes: `Tópico provisório usado como referência para ${data.name} ${data.year}.`,
            tags: `${data.name.toLowerCase()},${subject.name.toLowerCase()},aplicação`,
          },
        });

        await prisma.vestibularContent.createMany({
          data: [
            ...entry.contents.map((content) => ({
              vestibularId: vestibular.id,
              vestibularTopicId: vestibularTopic.id,
              title: `${content.title} para ${data.name}`,
              type: content.type,
              link: content.link,
              pdfUrl: content.pdfUrl,
              transcript: content.transcript,
              captionsUrl: content.captionsUrl,
              librasUrl: content.librasUrl,
              audioDescriptionUrl: content.audioDescriptionUrl,
              isShared: true,
              originalContentId: content.id,
            })),
            {
              vestibularId: vestibular.id,
              vestibularTopicId: vestibularTopic.id,
              title: `${entry.topic.name} aplicado ao ${data.name}`,
              type: 'ARTICLE',
              link: provisionalTextUrl,
              pdfUrl: null,
              transcript: `Texto provisório com leitura aplicada de ${entry.topic.name} para o ${data.name}.`,
              captionsUrl: provisionalTextUrl,
              librasUrl: provisionalTextUrl,
              audioDescriptionUrl: provisionalTextUrl,
              isShared: false,
              originalContentId: null,
            },
          ],
        });
      }
    }
  }
}

async function main() {
  console.log('Iniciando seed provisório completo...');
  await clearCatalog();

  const { allSubjects, allTopics, topicCatalog } = await seedSeriesCatalog();
  await seedPracticalLife();
  await seedAccessibility(allTopics);
  await seedVestibulares(allSubjects, topicCatalog);

  const [
    seriesCount,
    subjectCount,
    topicCount,
    contentCount,
    practicalCategoryCount,
    practicalGuideCount,
    accessibilityCategoryCount,
    vestibularCount,
  ] = await Promise.all([
    prisma.series.count(),
    prisma.subject.count(),
    prisma.topic.count(),
    prisma.content.count(),
    prisma.practicalCategory.count(),
    prisma.practicalGuide.count(),
    prisma.accessibilityCategory.count(),
    prisma.vestibular.count(),
  ]);

  console.log('Seed finalizado!');
  console.log(
    [
      `Séries: ${seriesCount}`,
      `Matérias: ${subjectCount}`,
      `Tópicos: ${topicCount}`,
      `Conteúdos: ${contentCount}`,
      `Categorias de vida prática: ${practicalCategoryCount}`,
      `Guias: ${practicalGuideCount}`,
      `Categorias de acessibilidade: ${accessibilityCategoryCount}`,
      `Vestibulares: ${vestibularCount}`,
    ].join(' | ')
  );
}

main()
  .catch((error) => {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
