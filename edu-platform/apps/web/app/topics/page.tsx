'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ListTree } from 'lucide-react';
import type { Topic } from '@edu-platform/core';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ComingSoonPanel } from '@/components/coming-soon-panel';
import { isLockedSeriesName } from '@/lib/content-locks';
import { buildContentsHref, buildSubjectsHref } from '@/lib/study-navigation';
import { trpc } from '@/lib/trpc';

function TopicsPageContent() {
  const searchParams = useSearchParams();
  const utils = trpc.useUtils();
  const subjectIdParam = searchParams.get('subjectId');
  const seriesIdParam = searchParams.get('seriesId');
  const subjectId = Number(subjectIdParam || 0);
  const fallbackSériesId = Number(seriesIdParam || 0);

  const { data: subject, isLoading: isLoadingSubject } = trpc.subject.findById.useQuery(subjectId, {
    enabled: subjectId > 0,
  });

  const resolvedSériesId = subject?.seriesId ?? fallbackSériesId;

  const { data: séries, isLoading: isLoadingSéries } = trpc.series.findById.useQuery(resolvedSériesId, {
    enabled: resolvedSériesId > 0,
  });

  const seriesLocked = séries ? isLockedSeriesName(séries.name) : false;

  const {
    data: topics = [],
    isLoading: isLoadingTopics,
    error,
  } = trpc.topic.findBySubject.useQuery(
    { subjectId },
    { enabled: subjectId > 0 && Boolean(subject) && Boolean(séries) && !seriesLocked }
  );

  const subjectsHref = buildSubjectsHref(resolvedSériesId);

  useEffect(() => {
    if (seriesLocked) {
      return;
    }

    topics.forEach((topic) => {
      void utils.content.findByTopic.prefetch({ topicId: topic.id });
      void utils.topic.findById.prefetch(topic.id);
    });
  }, [seriesLocked, topics, utils]);

  if (isLoadingSubject || isLoadingSéries || isLoadingTopics) {
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

  if (subjectId === 0 || !subject || !séries) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione uma matéria primeiro</p>
            <Link href={subjectsHref} className="mt-6 inline-flex edu-nav-link">
              Voltar as matérias
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (seriesLocked) {
    return (
      <div className="edu-shell">
        <ComingSoonPanel
          title={`${séries.name} está trancado`}
          description="Os tópicos dessa série continuam bloqueados até a base estár preenchida com os conteúdos definitivos."
          backHref="/"
          backLabel="Voltar ao início"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-xl">
          <CardContent className="p-8 text-center">
          <p className="text-xl text-destructive">Não foi possível carregar os tópicos desta matéria</p>
            <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
            <Link href={subjectsHref} className="mt-6 inline-flex edu-nav-link">
              Voltar as matérias
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
          <span className="edu-brand">Tópicos</span>
          <span className="text-sm text-muted-foreground">
            {subject.name ? `matéria ${subject.name}` : 'selecione a camada certa'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href={subjectsHref} className="edu-nav-link">
            <ArrowLeft className="h-4 w-4" />
            Matérias
          </Link>
          <Link href="/" className="edu-nav-link">
            Início
          </Link>
        </div>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <ListTree className="mr-2 h-4 w-4" />
          Camada de estudo
        </span>
        <h1 className="edu-section-title">Escolha o tópico para abrir os conteúdos.</h1>
        <p className="edu-lead">
          Aqui o fluxo fica mais específico: cada tópico concentra matériais relacionados e prepara o checklist.
        </p>
      </section>

      <section className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              Todos os tópicos
              <Badge variant="secondary">{topics.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topics.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">
                Nenhum tópico encontrado.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {topics.map((topic: Topic) => (
                  <Link
                    key={topic.id}
                    href={buildContentsHref({
                      topicId: topic.id,
                      subjectId,
                      seriesId: resolvedSériesId,
                    })}
                    className="edu-home-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="block text-3xl font-black text-white">{topic.name}</span>
                        <p className="mt-3 text-sm text-muted-foreground">
                          Clique para ver os conteúdos e marcar progresso.
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 text-primary transition-all group-hover:translaté-x-1" />
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
