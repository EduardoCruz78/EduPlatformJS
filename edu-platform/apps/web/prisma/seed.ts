import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed BNCC completo...')

  // 1. Séries
  const seriesData = [
    { name: '1º Ano - Ensino Fundamental' }, { name: '2º Ano - Ensino Fundamental' },
    { name: '3º Ano - Ensino Fundamental' }, { name: '4º Ano - Ensino Fundamental' },
    { name: '5º Ano - Ensino Fundamental' }, { name: '6º Ano - Ensino Fundamental' },
    { name: '7º Ano - Ensino Fundamental' }, { name: '8º Ano - Ensino Fundamental' },
    { name: '9º Ano - Ensino Fundamental' },
    { name: '1ª Série - Ensino Médio' }, { name: '2ª Série - Ensino Médio' },
    { name: '3ª Série - Ensino Médio' },
  ]
  await prisma.series.createMany({ data: seriesData, skipDuplicates: true })
  const allSeries = await prisma.series.findMany()

  // 2. Matérias (Subjects)
  const subjectsData: any[] = []
  allSeries.forEach((series) => {
    const isFundamental = series.name.includes('Fundamental')
    const materias = isFundamental
      ? ['Língua Portuguesa', 'Matemática', 'Ciências', 'História', 'Geografia', 'Inglês', 'Artes', 'Educação Física']
      : ['Língua Portuguesa', 'Matemática', 'Biologia', 'Física', 'Química', 'História', 'Geografia', 'Filosofia', 'Sociologia']
    materias.forEach((name) => {
      subjectsData.push({ name, seriesId: series.id })
    })
  })
  await prisma.subject.createMany({ data: subjectsData, skipDuplicates: true })
  const allSubjects = await prisma.subject.findMany({ include: { series: true } })

  // 3. Tópicos + relação many-to-many TopicSubject
  const topicsData: any[] = []
  const topicSubjectData: any[] = []

  allSubjects.forEach((subject) => {
    const baseTopics = getBaseTopics(subject.name)
    baseTopics.forEach((name) => {
      const topic = {
        name,
        // description não existe no model atual → removido
      }
      topicsData.push(topic)
      // Depois vamos linkar com TopicSubject
    })
  })

  await prisma.topic.createMany({ data: topicsData, skipDuplicates: true })
  const allTopics = await prisma.topic.findMany()

  // Link many-to-many (TopicSubject)
  allSubjects.forEach((subject, subjIndex) => {
    const topicsForThisSubject = allTopics.slice(subjIndex * 5, subjIndex * 5 + 5)
    topicsForThisSubject.forEach((topic) => {
      topicSubjectData.push({ topicId: topic.id, subjectId: subject.id })
    })
  })
  await prisma.topicSubject.createMany({ data: topicSubjectData, skipDuplicates: true })

  // 4. Conteúdos
  const contentsData: any[] = []
  allTopics.forEach((topic, index) => {
    contentsData.push({
      title: `Conteúdo BNCC - ${topic.name}`,
      type: index % 3 === 0 ? 'video' : index % 2 === 0 ? 'pdf' : 'exercicio',
      link: 'https://youtube.com/watch?v=bncc-exemplo',
      thumbnailUrl: `https://picsum.photos/id/${200 + index}/600/400`,
      topicId: topic.id,
    })
  })
  await prisma.content.createMany({ data: contentsData, skipDuplicates: true })

  console.log('✅ Seed finalizado!')
  console.log(`Séries: ${allSeries.length} | Matérias: ${allSubjects.length} | Tópicos: ${allTopics.length} | Conteúdos: ${contentsData.length}`)
}

function getBaseTopics(subjectName: string): string[] {
  if (subjectName === 'Língua Portuguesa') return ['Alfabetização', 'Gêneros textuais', 'Gramática', 'Produção textual']
  if (subjectName === 'Matemática') return ['Números', 'Geometria', 'Frações', 'Álgebra']
  // ... (adicione mais se quiser)
  return ['Introdução', 'Conceitos básicos', 'Exercícios práticos']
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())