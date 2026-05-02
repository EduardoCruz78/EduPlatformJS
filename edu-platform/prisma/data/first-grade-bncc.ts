export type BnccTopic = {
  unit: string;
  name: string;
};

export type BnccSubject = {
  name: string;
  description: string;
  sourcePageStart: number;
  sourcePageEnd: number;
  topics: BnccTopic[];
};

export const BNCC_SOURCE_URL =
  'https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf';

export const firstGradeBnccSubjects: BnccSubject[] = [
  {
    name: 'Lingua Portuguesa',
    description:
      'Componentes e objetos de conhecimento do 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 100,
    sourcePageEnd: 113,
    topics: [
      { unit: 'Todos os campos de atuacao', name: 'Protocolos de leitura' },
      { unit: 'Todos os campos de atuacao', name: 'Decodificacao e fluencia de leitura' },
      { unit: 'Todos os campos de atuacao', name: 'Formacao de leitor' },
      { unit: 'Todos os campos de atuacao', name: 'Correspondencia fonema-grafema' },
      {
        unit: 'Todos os campos de atuacao',
        name: 'Construcao do sistema alfabetico e convencoes da escrita',
      },
      {
        unit: 'Todos os campos de atuacao',
        name: 'Construcao do sistema alfabetico e relacoes anaforicas na referenciacao e coesao',
      },
      {
        unit: 'Todos os campos de atuacao',
        name: 'Conhecimento do alfabeto do portugues do Brasil',
      },
      { unit: 'Todos os campos de atuacao', name: 'Construcao do sistema alfabetico' },
      {
        unit: 'Todos os campos de atuacao',
        name: 'Construcao do sistema alfabetico e da ortografia',
      },
      {
        unit: 'Todos os campos de atuacao',
        name: 'Conhecimento das diversas grafias do alfabeto e acentuacao',
      },
      {
        unit: 'Todos os campos de atuacao',
        name: 'Segmentacao de palavras e classificacao por numero de silabas',
      },
      { unit: 'Todos os campos de atuacao', name: 'Pontuacao' },
      {
        unit: 'Todos os campos de atuacao',
        name: 'Sinonimia, antonimia, morfologia e pontuacao',
      },
      { unit: 'Todos os campos de atuacao', name: 'Morfologia' },
      { unit: 'Campo da vida cotidiana', name: 'Compreensao em leitura' },
      { unit: 'Campo da vida cotidiana', name: 'Escrita autonoma e compartilhada' },
      { unit: 'Campo da vida cotidiana', name: 'Escrita compartilhada' },
      { unit: 'Campo da vida cotidiana', name: 'Producao de texto oral' },
      { unit: 'Campo da vida cotidiana', name: 'Forma de composicao do texto' },
      { unit: 'Campo da vida publica', name: 'Compreensao em leitura' },
      { unit: 'Campo da vida publica', name: 'Escrita compartilhada' },
      { unit: 'Campo da vida publica', name: 'Producao de texto oral' },
      { unit: 'Campo da vida publica', name: 'Forma de composicao do texto' },
      {
        unit: 'Campo das praticas de estudo e pesquisa',
        name: 'Compreensao em leitura',
      },
      {
        unit: 'Campo das praticas de estudo e pesquisa',
        name: 'Imagens analiticas em textos',
      },
      { unit: 'Campo das praticas de estudo e pesquisa', name: 'Pesquisa' },
      { unit: 'Campo das praticas de estudo e pesquisa', name: 'Producao de textos' },
      { unit: 'Campo das praticas de estudo e pesquisa', name: 'Escrita autonoma' },
      {
        unit: 'Campo das praticas de estudo e pesquisa',
        name: 'Planejamento de texto oral',
      },
      { unit: 'Campo das praticas de estudo e pesquisa', name: 'Exposicao oral' },
      {
        unit: 'Campo das praticas de estudo e pesquisa',
        name: 'Forma de composicao dos textos e adequacao as normas de escrita',
      },
      { unit: 'Campo artistico-literario', name: 'Formacao do leitor literario' },
      { unit: 'Campo artistico-literario', name: 'Apreciacao estetica e estilo' },
      {
        unit: 'Campo artistico-literario',
        name: 'Escrita autonoma e compartilhada',
      },
      {
        unit: 'Campo artistico-literario',
        name: 'Formas de composicao de narrativas',
      },
      {
        unit: 'Campo artistico-literario',
        name: 'Formas de composicao de textos poeticos',
      },
      {
        unit: 'Campo artistico-literario',
        name: 'Formas de composicao de textos poeticos visuais',
      },
    ],
  },
  {
    name: 'Matematica',
    description:
      'Objetos de conhecimento do 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 280,
    sourcePageEnd: 283,
    topics: [
      { unit: 'Numeros', name: 'Contagem de rotina' },
      { unit: 'Numeros', name: 'Contagem ascendente e descendente' },
      {
        unit: 'Numeros',
        name: 'Reconhecimento de numeros no contexto diario: quantidade, ordem e codigo',
      },
      {
        unit: 'Numeros',
        name: 'Quantificacao de elementos de uma colecao e comparacao',
      },
      {
        unit: 'Numeros',
        name: 'Leitura, escrita e comparacao de numeros naturais ate 100',
      },
      { unit: 'Numeros', name: 'Reta numerica' },
      { unit: 'Numeros', name: 'Construcao de fatos basicos da adicao' },
      { unit: 'Numeros', name: 'Composicao e decomposicao de numeros naturais' },
      {
        unit: 'Numeros',
        name: 'Problemas com significados de juntar, acrescentar, separar e retirar',
      },
      {
        unit: 'Algebra',
        name: 'Padroes figurais e numericos em sequencias',
      },
      {
        unit: 'Algebra',
        name: 'Sequencias recursivas em seriacoes numericas',
      },
      {
        unit: 'Geometria',
        name: 'Localizacao de objetos e pessoas no espaco',
      },
      {
        unit: 'Geometria',
        name: 'Figuras geometricas espaciais e relacoes com objetos do mundo fisico',
      },
      {
        unit: 'Geometria',
        name: 'Figuras geometricas planas e faces de solidos',
      },
      {
        unit: 'Grandezas e medidas',
        name: 'Medidas de comprimento, massa e capacidade',
      },
      {
        unit: 'Grandezas e medidas',
        name: 'Medidas de tempo e uso do calendario',
      },
      {
        unit: 'Grandezas e medidas',
        name: 'Sistema monetario brasileiro: cedulas e moedas',
      },
      { unit: 'Probabilidade e estatistica', name: 'Nocao de acaso' },
      {
        unit: 'Probabilidade e estatistica',
        name: 'Leitura de tabelas e graficos de colunas simples',
      },
      {
        unit: 'Probabilidade e estatistica',
        name: 'Coleta e organizacao de informacoes',
      },
      {
        unit: 'Probabilidade e estatistica',
        name: 'Registros pessoais para comunicacao de informacoes coletadas',
      },
    ],
  },
  {
    name: 'Ciencias',
    description:
      'Objetos de conhecimento do 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 334,
    sourcePageEnd: 335,
    topics: [
      { unit: 'Materia e energia', name: 'Caracteristicas dos materiais' },
      { unit: 'Vida e evolucao', name: 'Corpo humano' },
      { unit: 'Vida e evolucao', name: 'Respeito a diversidade' },
      { unit: 'Terra e Universo', name: 'Escalas de tempo' },
    ],
  },
  {
    name: 'Geografia',
    description:
      'Objetos de conhecimento do 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 372,
    sourcePageEnd: 373,
    topics: [
      {
        unit: 'O sujeito e seu lugar no mundo',
        name: 'O modo de vida das criancas em diferentes lugares',
      },
      {
        unit: 'O sujeito e seu lugar no mundo',
        name: 'Situacoes de convivio em diferentes lugares',
      },
      { unit: 'Conexoes e escalas', name: 'Ciclos naturais e a vida cotidiana' },
      {
        unit: 'Mundo do trabalho',
        name: 'Diferentes tipos de trabalho existentes no dia a dia',
      },
      {
        unit: 'Formas de representacao e pensamento espacial',
        name: 'Pontos de referencia',
      },
      {
        unit: 'Natureza, ambientes e qualidade de vida',
        name: 'Condicoes de vida nos lugares de vivencia',
      },
    ],
  },
  {
    name: 'Historia',
    description:
      'Objetos de conhecimento do 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 408,
    sourcePageEnd: 409,
    topics: [
      {
        unit: 'Mundo pessoal: meu lugar no mundo',
        name: 'Fases da vida e ideia de temporalidade',
      },
      {
        unit: 'Mundo pessoal: meu lugar no mundo',
        name: 'Formas de organizacao da familia e da comunidade',
      },
      {
        unit: 'Mundo pessoal: meu lugar no mundo',
        name: 'A escola e a diversidade do grupo social envolvido',
      },
      {
        unit: 'Mundo pessoal: eu, meu grupo social e meu tempo',
        name: 'Vida em casa, vida na escola e jogos e brincadeiras',
      },
      {
        unit: 'Mundo pessoal: eu, meu grupo social e meu tempo',
        name: 'Vida em familia: diferentes configuracoes e vinculos',
      },
      {
        unit: 'Mundo pessoal: eu, meu grupo social e meu tempo',
        name: 'Escola, representacao espacial, historia e papel na comunidade',
      },
    ],
  },
  {
    name: 'Artes',
    description:
      'Objetos de conhecimento do 1o ao 5o ano usados no 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 202,
    sourcePageEnd: 204,
    topics: [
      { unit: 'Artes visuais', name: 'Contextos e praticas' },
      { unit: 'Artes visuais', name: 'Elementos da linguagem' },
      { unit: 'Artes visuais', name: 'Matrizes esteticas e culturais' },
      { unit: 'Artes visuais', name: 'Materialidades' },
      { unit: 'Artes visuais', name: 'Processos de criacao' },
      { unit: 'Artes visuais', name: 'Sistemas da linguagem' },
      { unit: 'Danca', name: 'Contextos e praticas' },
      { unit: 'Danca', name: 'Elementos da linguagem' },
      { unit: 'Danca', name: 'Processos de criacao' },
      { unit: 'Musica', name: 'Contexto e praticas' },
      { unit: 'Musica', name: 'Elementos da linguagem' },
      { unit: 'Musica', name: 'Materialidades' },
      { unit: 'Musica', name: 'Notacao e registro musical' },
      { unit: 'Musica', name: 'Processos de criacao' },
      { unit: 'Teatro', name: 'Contextos e praticas' },
      { unit: 'Teatro', name: 'Elementos da linguagem' },
      { unit: 'Teatro', name: 'Processos de criacao' },
      { unit: 'Artes integradas', name: 'Processos de criacao' },
      { unit: 'Artes integradas', name: 'Matrizes esteticas culturais' },
      { unit: 'Artes integradas', name: 'Patrimonio cultural' },
      { unit: 'Artes integradas', name: 'Arte e tecnologia' },
    ],
  },
  {
    name: 'Educacao Fisica',
    description:
      'Objetos de conhecimento do 1o e 2o anos usados no 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 228,
    sourcePageEnd: 229,
    topics: [
      {
        unit: 'Brincadeiras e jogos',
        name: 'Brincadeiras e jogos da cultura popular presentes no contexto comunitario e regional',
      },
      { unit: 'Esportes', name: 'Esportes de marca' },
      { unit: 'Esportes', name: 'Esportes de precisao' },
      { unit: 'Ginasticas', name: 'Ginastica geral' },
      { unit: 'Dancas', name: 'Dancas do contexto comunitario e regional' },
    ],
  },
  {
    name: 'Ensino Religioso',
    description:
      'Objetos de conhecimento do 1o ano do Ensino Fundamental conforme a BNCC oficial.',
    sourcePageStart: 444,
    sourcePageEnd: 445,
    topics: [
      { unit: 'Identidades e alteridades', name: 'O eu, o outro e o nos' },
      { unit: 'Identidades e alteridades', name: 'Imanencia e transcendencia' },
      {
        unit: 'Manifestacoes religiosas',
        name: 'Sentimentos, lembrancas, memorias e saberes',
      },
    ],
  },
];
