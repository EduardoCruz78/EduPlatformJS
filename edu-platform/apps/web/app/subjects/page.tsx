'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import type { Subject } from '@edu-platform/core';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

function SubjectsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { status } = useSession();
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
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-6xl">
          <div className="animate-pulse space-y-8">
            <div className="h-10 w-80 rounded-2xl bg-muted" />
            <Card>
              <CardContent className="space-y-4 p-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-24 w-full rounded-3xl" />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || seriesId === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione uma serie primeiro</p>
            <Link
              href="/dashboard"
              className="mt-6 inline-block rounded-2xl bg-primary px-6 py-3 text-primary-foreground transition hover:bg-primary/90"
            >
              Voltar ao dashboard
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Materias</h1>
            <p className="mt-1 text-muted-foreground">
              {series
                ? `Selecione uma materia da serie ${series.name}`
                : 'Selecione uma materia'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="font-medium text-primary transition hover:text-primary/80"
            >
              Voltar ao dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="font-medium text-destructive transition hover:text-destructive/80"
            >
              Sair
            </button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
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
                    href={`/topics?subjectId=${subject.id}`}
                    className="group rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-accent"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">
                          {subject.name}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {subject.description ||
                            'Clique para ver os topicos desta materia.'}
                        </p>
                      </div>
                      {subject.series ? (
                        <Badge variant="outline">{subject.series.name}</Badge>
                      ) : null}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
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
