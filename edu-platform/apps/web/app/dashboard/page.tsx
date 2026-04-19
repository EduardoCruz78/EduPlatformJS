'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Layers3, LogOut } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import type { Series } from '@edu-platform/core';
import { buildSubjectsHref } from '@/lib/study-navigation';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

type SeriesGroup = 'fundamental' | 'medio';

function normalizeSeriesLabel(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u00ba\u00b0\u00aa]/g, '')
    .replace(/[\u2013\u2014-]/g, ' ')
    .toLowerCase()
    .trim();
}

function getSeriesMeta(name: string) {
  const normalized = normalizeSeriesLabel(name).replace(/\s+/g, ' ');
  const fundamentalMatch = normalized.match(/(\d+)\s*ano/);
  const medioMatch = normalized.match(/(\d+)\s*serie/);

  if (fundamentalMatch || normalized.includes('fundamental')) {
    return {
      group: 'fundamental' as SeriesGroup,
      order: fundamentalMatch ? Number(fundamentalMatch[1]) : Number.MAX_SAFE_INTEGER - 1,
    };
  }

  if (medioMatch || normalized.includes('medio')) {
    return {
      group: 'medio' as SeriesGroup,
      order: medioMatch ? Number(medioMatch[1]) : Number.MAX_SAFE_INTEGER - 1,
    };
  }

  return {
    group: 'fundamental' as SeriesGroup,
    order: Number.MAX_SAFE_INTEGER,
  };
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: series = [], isLoading, error } = trpc.series.find.useQuery();
  const { data: checklist = [] } = trpc.checklist.findByUserId.useQuery(undefined, {
    enabled: status === 'authenticated',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const orderedSeries = useMemo(() => {
    return [...series].sort((left, right) => {
      const leftMeta = getSeriesMeta(left.name);
      const rightMeta = getSeriesMeta(right.name);
      const groupWeight = { fundamental: 0, medio: 1 };

      if (groupWeight[leftMeta.group] !== groupWeight[rightMeta.group]) {
        return groupWeight[leftMeta.group] - groupWeight[rightMeta.group];
      }

      if (leftMeta.order !== rightMeta.order) {
        return leftMeta.order - rightMeta.order;
      }

      return left.name.localeCompare(right.name, 'pt-BR');
    });
  }, [series]);

  const groupedSeries = useMemo(() => {
    return {
      fundamental: orderedSeries.filter((item) => getSeriesMeta(item.name).group === 'fundamental'),
      medio: orderedSeries.filter((item) => getSeriesMeta(item.name).group === 'medio'),
    };
  }, [orderedSeries]);

  const completedCountLabel = useMemo(() => {
    if (checklist.length === 1) {
      return '1 conte\u00fado conclu\u00eddo';
    }

    return `${checklist.length} conte\u00fados conclu\u00eddos`;
  }, [checklist]);

  if (status === 'loading' || isLoading) {
    return (
      <div className="edu-shell">
        <div className="space-y-8">
          <div className="h-16 w-full rounded-[2rem] bg-muted" />
          <Skeleton className="h-80 w-full rounded-[2.5rem]" />
          <div className="grid gap-6">
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton key={index} className="h-72 w-full rounded-[2rem]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-xl">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">{'Erro ao carregar s\u00e9ries'}</p>
            <p className="mt-2 text-muted-foreground">{error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full border border-red-800 bg-destructive px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-destructive-foreground"
            >
              Tentar novamente
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-black">
        <div className="edu-topbar-shell">
          <div className="mx-auto max-w-[82rem] px-4 pt-6 sm:px-6 lg:px-8">
            <div className="edu-topbar mb-0 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="edu-home-icon h-11 w-11" aria-hidden="true">
                  <BookOpen className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <span className="edu-brand">EduPlatform</span>
                <span className="text-sm text-muted-foreground">
                  {'Ol\u00e1'}, {session?.user?.name || 'estudante'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/" className="edu-nav-link">
                  {'In\u00edcio'}
                </Link>
                <Link href="/vestibulares" className="edu-nav-link">
                  Vestibulares
                </Link>
                <Link href="/accessibility" className="edu-nav-link">
                  Accessibility
                </Link>
                <Link href="/vida-pratica" className="edu-nav-link">
                  Vida pratica
                </Link>
                <Link href="/checklist" className="edu-nav-link">
                  Checklist
                </Link>
                <button onClick={() => signOut({ callbackUrl: '/login' })} className="edu-nav-link">
                  <LogOut className="h-4 w-4" />
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[82rem] px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <section className="edu-hero">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <span className="edu-kicker">
                <GraduationCap className="mr-2 h-4 w-4" />
                Painel do estudante
              </span>
              <div className="space-y-3">
                <h1 className="edu-section-title">
                  {'Seu estudo agora est\u00e1 organizado por anos e s\u00e9ries.'}
                </h1>
                <p className="edu-lead">
                  {
                    'Primeiro v\u00eam os 9 anos do Ensino Fundamental. Depois, as 3 s\u00e9ries do Ensino M\u00e9dio. Assim fica mais f\u00e1cil encontrar a trilha certa e seguir estudando sem confus\u00e3o.'
                  }
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="edu-metric">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Ensino Fundamental
                </p>
                <p className="mt-2 text-3xl font-display">{groupedSeries.fundamental.length}</p>
                <p className="mt-2 text-sm text-muted-foreground">{'anos dispon\u00edveis'}</p>
              </div>
              <div className="edu-metric">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {'Ensino M\u00e9dio'}
                </p>
                <p className="mt-2 text-3xl font-display">{groupedSeries.medio.length}</p>
                <p className="mt-2 text-sm text-muted-foreground">{'s\u00e9ries dispon\u00edveis'}</p>
              </div>
              <div className="edu-metric">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Checklist
                </p>
                <p className="mt-2 text-3xl font-display">{checklist.length}</p>
                <p className="mt-2 text-sm text-muted-foreground">{completedCountLabel}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Layers3 className="h-6 w-6" />
                Vida pratica
                <Badge variant="secondary">Novo modulo</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm leading-7 text-muted-foreground">
                  Encontre guias sobre CNH, direitos trabalhistas, consumo e outros
                  assuntos do cotidiano que ajudam a resolver problemas reais fora da sala
                  de aula.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/vida-pratica" className="edu-action">
                  Explorar guias
                </Link>
                <Link href="/vestibulares" className="edu-action-outline">
                  Ver vestibulares
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Layers3 className="h-6 w-6" />
                Anos do Ensino Fundamental
                <Badge variant="secondary">{groupedSeries.fundamental.length}</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent>
              {groupedSeries.fundamental.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  Nenhum ano do Ensino Fundamental encontrado.
                  <br />
                  Rode o seed do Prisma.
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {groupedSeries.fundamental.map((item: Series) => (
                    <Link key={item.id} href={buildSubjectsHref(item.id)} className="edu-home-card">
                      <div className="flex h-full items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Ano
                          </p>
                          <span className="mt-3 block text-2xl font-display text-foreground">
                            {item.name}
                          </span>
                          <p className="mt-3 text-sm text-muted-foreground">
                            {item.subjects?.length
                              ? `${item.subjects.length} mat\u00e9rias prontas para explorar.`
                              : 'Trilha pronta para explorar.'}
                          </p>
                        </div>

                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Layers3 className="h-6 w-6" />
                {'S\u00e9ries do Ensino M\u00e9dio'}
                <Badge variant="secondary">{groupedSeries.medio.length}</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent>
              {groupedSeries.medio.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  {'Nenhuma s\u00e9rie do Ensino M\u00e9dio encontrada.'}
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {groupedSeries.medio.map((item: Series) => (
                    <Link key={item.id} href={buildSubjectsHref(item.id)} className="edu-home-card">
                      <div className="flex h-full items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {'S\u00e9rie'}
                          </p>
                          <span className="mt-3 block text-2xl font-display text-foreground">
                            {item.name}
                          </span>
                          <p className="mt-3 text-sm text-muted-foreground">
                            {item.subjects?.length
                              ? `${item.subjects.length} mat\u00e9rias prontas para explorar.`
                              : 'Trilha pronta para explorar.'}
                          </p>
                        </div>

                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
