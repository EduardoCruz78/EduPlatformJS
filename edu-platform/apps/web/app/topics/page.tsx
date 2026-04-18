'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ListTree } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import type { Topic } from '@edu-platform/core';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { buildContentsHref, buildSubjectsHref } from '@/lib/study-navigation';

function TopicsPageContent() {
  const searchParams = useSearchParams();
  const utils = trpc.useUtils();
  const subjectIdParam = searchParams.get('subjectId');
  const seriesIdParam = searchParams.get('seriesId');
  const subjectId = Number(subjectIdParam || 0);
  const seriesId = Number(seriesIdParam || 0);

  const {
    data: topics = [],
    isLoading,
    error,
  } = trpc.topic.findBySubject.useQuery({ subjectId }, { enabled: subjectId > 0 });
  const { data: subject } = trpc.subject.findById.useQuery(subjectId, {
    enabled: subjectId > 0,
  });

  const resolvedSeriesId = subject?.seriesId ?? seriesId;
  const subjectsHref = buildSubjectsHref(resolvedSeriesId);

  useEffect(() => {
    topics.forEach((topic) => {
      void utils.content.findByTopic.prefetch({ topicId: topic.id });
      void utils.topic.findById.prefetch(topic.id);
    });
  }, [topics, utils]);

  if (isLoading) {
    return (
      <div className="edu-shell">
        <div className="space-y-8">
          <div className="h-16 w-full rounded-[2rem] bg-muted" />
          <Skeleton className="h-64 w-full rounded-[2.5rem]" />
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-36 w-full rounded-[2rem]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (subjectId === 0) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione uma materia primeiro</p>
            <Link href={subjectsHref} className="mt-6 inline-flex edu-nav-link">
              Voltar as materias
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-xl">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Nao foi possivel carregar os topicos desta materia</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {error.message}
            </p>
            <Link href={subjectsHref} className="mt-6 inline-flex edu-nav-link">
              Voltar as materias
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">Topicos</span>
          <span className="text-sm text-muted-foreground">
            {subject?.name
              ? `materia ${subject.name}`
              : 'selecione a camada certa antes de abrir os materiais'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href={subjectsHref} className="edu-nav-link">
            <ArrowLeft className="h-4 w-4" />
            Materias
          </Link>
          <Link href="/" className="edu-nav-link">
            Inicio
          </Link>
        </div>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <ListTree className="mr-2 h-4 w-4" />
          Camada de estudo
        </span>
        <h1 className="edu-section-title">Escolha o topico para abrir os conteudos.</h1>
        <p className="edu-lead">
          Aqui o fluxo fica mais especifico: cada topico concentra materiais
          relacionados e prepara o checklist.
        </p>
      </section>

      <section className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              Todos os topicos
              <Badge variant="secondary">{topics.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topics.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">
                Nenhum topico encontrado. Rode o seed do Prisma.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {topics.map((topic: Topic) => (
                  <Link
                    key={topic.id}
                    href={buildContentsHref({
                      topicId: topic.id,
                      subjectId,
                      seriesId: resolvedSeriesId,
                    })}
                    className="edu-home-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="block text-3xl font-black text-white">
                          {topic.name}
                        </span>
                        <p className="mt-3 text-sm text-muted-foreground">
                          Clique para ver os conteudos e marcar progresso.
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 text-primary transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default function TopicsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8" />}>
      <TopicsPageContent />
    </Suspense>
  );
}
