'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookMarked } from 'lucide-react';
import type { Subject } from '@edu-platform/core';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';
import { buildTopicsHref } from '@/lib/study-navigation';

function SubjectsPageContent() {
  const searchParams = useSearchParams();
  const utils = trpc.useUtils();
  const seriesIdParam = searchParams.get('seriesId');
  const seriesId = Number(seriesIdParam || 0);

  const {
    data: subjects = [],
    isLoading,
    error,
  } = trpc.subject.findBySeries.useQuery({ seriesId }, { enabled: seriesId > 0 });

  const { data: series } = trpc.series.findById.useQuery(seriesId, {
    enabled: seriesId > 0,
  });

  useEffect(() => {
    subjects.forEach((subject) => {
      void utils.topic.findBySubject.prefetch({ subjectId: subject.id });
    });
  }, [subjects, utils]);

  if (isLoading) {
    return (
      <div className="edu-shell">
        <div className="space-y-8">
          <div className="h-16 w-full rounded-[2rem] bg-muted" />
          <Skeleton className="h-64 w-full rounded-[2.5rem]" />
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-40 w-full rounded-[2rem]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || seriesId === 0) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione uma serie primeiro</p>
            <Link href="/" className="mt-6 inline-flex edu-nav-link">
              Voltar ao inicio
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
          <span className="edu-brand">Materias</span>
          <span className="text-sm text-muted-foreground">
            {series ? `serie ${series.name}` : 'escolha sua trilha'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="edu-nav-link">
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <Link href="/vestibulares" className="edu-nav-link">
            Vestibulares
          </Link>
        </div>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <BookMarked className="mr-2 h-4 w-4" />
          Selecao por serie
        </span>
        <h1 className="edu-section-title">Escolha a materia e siga para os topicos.</h1>
        <p className="edu-lead">
          Cada materia abre a proxima camada do estudo sem ruir o contexto da
          serie atual.
        </p>
      </section>

      <section className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              Materias disponiveis
              <Badge variant="secondary">{subjects.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subjects.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">
                Nenhuma materia encontrada para esta serie.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {subjects.map((subject: Subject) => (
                  <Link
                    key={subject.id}
                    href={buildTopicsHref({ subjectId: subject.id, seriesId })}
                    className="edu-home-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-3xl font-black text-white">
                          {subject.name}
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {subject.description ||
                            'Clique para abrir os topicos dessa materia.'}
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

export default function SubjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8" />}>
      <SubjectsPageContent />
    </Suspense>
  );
}
