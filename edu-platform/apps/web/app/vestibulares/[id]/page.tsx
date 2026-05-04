'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';

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
          <BookOpen className="mr-2 h-4 w-4" />
          Trilha de estudo
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

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="edu-panel">
          <h2 className="text-2xl font-black text-white">Matérias relacionadas</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {subjects.length ? (
              subjects.map((subject) => (
                <Badge key={subject.id} variant="secondary">
                  {subject.name}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhuma matéria vinculada.</p>
            )}
          </div>
        </div>

        <div className="edu-panel">
          <h2 className="text-2xl font-black text-white">Conteúdos provisórios</h2>
          <div className="mt-4 space-y-3">
            {contents.length ? (
              contents.map((content) => (
                <a
                  key={content.id}
                  href={content.link ?? content.pdfUrl ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="edu-subtle-card block"
                >
                  <div className="flex items-start gap-3">
                    <FileText className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-white">{content.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {content.type || 'Matérial'} de apoio para a trilha.
                      </p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum conteúdo vinculado.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
