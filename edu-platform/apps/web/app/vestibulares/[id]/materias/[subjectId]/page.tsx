'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ChevronRight, ListChecks } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function VestibularSubjectPage() {
  const params = useParams<{ id: string; subjectId: string }>();
  const vestibularId = Number(params.id);
  const subjectId = Number(params.subjectId);

  const { data: vestibular, isLoading: isLoadingVestibular } =
    trpc.vestibular.findById.useQuery(vestibularId, { enabled: vestibularId > 0 });
  const { data: subjects = [], isLoading: isLoadingSubjects } =
    trpc.vestibular.findSubjects.useQuery({ vestibularId }, { enabled: vestibularId > 0 });
  const { data: topics = [], isLoading: isLoadingTopics } =
    trpc.vestibular.findTopics.useQuery(
      { vestibularId, subjectId },
      { enabled: vestibularId > 0 && subjectId > 0 }
    );

  const subject = subjects.find((item) => item.id === subjectId);

  if (isLoadingVestibular || isLoadingSubjects || isLoadingTopics) {
    return (
      <div className="edu-shell space-y-6">
        <Skeleton className="h-16 rounded-[2rem]" />
        <Skeleton className="h-72 rounded-[2.5rem]" />
      </div>
    );
  }

  if (!vestibular || !subject) {
    return (
      <div className="edu-shell">
        <div className="edu-panel p-8 text-center">
          <p className="text-lg text-destructive">Matéria não encontrada neste vestibular.</p>
          <Link href={`/vestibulares/${vestibularId}`} className="mt-6 inline-flex edu-nav-link">
            Voltar para o vestibular
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <Link href={`/vestibulares/${vestibular.id}`} className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          {vestibular.name}
        </Link>
        <Badge variant="outline">{subject.series?.name ?? 'Ensino Médio'}</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <ListChecks className="mr-2 h-4 w-4" />
          Tópicos do {vestibular.name}
        </span>
        <h1 className="edu-section-title">{subject.name}</h1>
        <p className="edu-lead">
          Escolha um tópico para estudar os materiais gerais e a aplicação específica em prova.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topics.length ? (
          topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/vestibulares/${vestibular.id}/materias/${subject.id}/topicos/${topic.id}`}
              className="edu-home-card group flex min-h-52 flex-col justify-between"
            >
              <div>
                <Badge variant={topic.isShared ? 'secondary' : 'outline'}>
                  {topic.isShared ? 'Base compartilhada' : 'Exclusivo'}
                </Badge>
                <h2 className="mt-4 text-2xl font-black text-white">{topic.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {topic.notes || `Conteúdos de ${subject.name} aplicados ao ${vestibular.name}.`}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ver conteúdos
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))
        ) : (
          <div className="edu-panel p-6 text-sm text-muted-foreground">
            Nenhum tópico cadastrado para esta matéria ainda.
          </div>
        )}
      </section>
    </div>
  );
}
