'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function VestibularDetailPage() {
  const params = useParams<{ id: string }>();
  const vestibularId = Number(params.id);

  const { data: vestibular, isLoading: isLoadingVestibular } =
    trpc.vestibular.findById.useQuery(vestibularId, { enabled: vestibularId > 0 });
  const { data: subjects = [], isLoading: isLoadingSubjects } =
    trpc.vestibular.findSubjects.useQuery({ vestibularId }, { enabled: vestibularId > 0 });
  const { data: topics = [] } =
    trpc.vestibular.findTopics.useQuery({ vestibularId }, { enabled: vestibularId > 0 });
  const { data: contents = [] } =
    trpc.vestibular.findContents.useQuery({ vestibularId }, { enabled: vestibularId > 0 });

  if (isLoadingVestibular || isLoadingSubjects) {
    return (
      <div className="edu-shell space-y-6">
        <Skeleton className="h-16 rounded-[2rem]" />
        <Skeleton className="h-64 rounded-[2.5rem]" />
      </div>
    );
  }

  if (!vestibular) {
    return (
      <div className="edu-shell">
        <div className="edu-panel p-8 text-center">
          <p className="text-lg text-destructive">Vestibular não encontrado.</p>
          <Link href="/vestibulares" className="mt-6 inline-flex edu-nav-link">
            Voltar para vestibulares
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <Link href="/vestibulares" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Vestibulares
        </Link>
        <Badge variant="outline">{vestibular.year ?? 'Atual'}</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <GraduationCap className="mr-2 h-4 w-4" />
          Trilha por matéria
        </span>
        <h1 className="edu-section-title">{vestibular.name}</h1>
        <p className="edu-lead">
          {vestibular.description ||
            'Conteúdo provisório para organizar a preparação e validar a navegação.'}
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="edu-metric">
          <p className="text-sm text-muted-foreground">Matérias</p>
          <p className="mt-2 text-4xl font-black">{subjects.length}</p>
        </div>
        <div className="edu-metric">
          <p className="text-sm text-muted-foreground">Tópicos</p>
          <p className="mt-2 text-4xl font-black">{topics.length}</p>
        </div>
        <div className="edu-metric">
          <p className="text-sm text-muted-foreground">Conteúdos</p>
          <p className="mt-2 text-4xl font-black">{contents.length}</p>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-black text-white">Escolha uma matéria</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {subjects.length ? (
            subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/vestibulares/${vestibular.id}/materias/${subject.id}`}
                className="edu-home-card group flex min-h-44 flex-col justify-between"
              >
                <div>
                  <Badge variant="secondary">{subject.series?.name ?? 'Ensino Médio'}</Badge>
                  <h3 className="mt-4 text-2xl font-black text-white">{subject.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tópicos e conteúdos aplicados ao {vestibular.name}.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Abrir matéria
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))
          ) : (
            <div className="edu-panel p-6 text-sm text-muted-foreground">
              Nenhuma matéria vinculada a este vestibular ainda.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
