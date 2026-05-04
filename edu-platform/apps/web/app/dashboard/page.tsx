'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Layers3, LogOut } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getSeriesMeta } from '@/lib/content-locks';
import { buildSubjectsHref } from '@/lib/study-navigation';
import { trpc } from '@/lib/trpc';

function DashboardSeriesCard({
  name,
  href,
  label,
  description,
}: {
  name: string;
  href: string;
  label: string;
  description: string;
}) {
  return (
    <Link href={href} className="edu-home-card">
    <div className="flex h-full items-start justify-between gap-4">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <span className="mt-3 block text-2xl font-display text-foreground">{name}</span>
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      </div>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translaté-x-1" />
    </div>
    </Link>
  );
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: séries = [], isLoading, error } = trpc.series.find.useQuery();
  const { data: checklist = [] } = trpc.checklist.findByUserId.useQuery(undefined, {
    enabled: status === 'authenticated',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const orderedSeries = useMemo(() => {
    return [...séries].sort((left, right) => {
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
  }, [séries]);

  const groupedSeries = useMemo(() => {
    return {
      fundamental: orderedSeries.filter((item) => getSeriesMeta(item.name).group === 'fundamental'),
      medio: orderedSeries.filter((item) => getSeriesMeta(item.name).group === 'medio'),
    };
  }, [orderedSeries]);

  const completedCountLabel = useMemo(() => {
    if (checklist.length === 1) {
      return '1 conteúdo concluído';
    }

    return `${checklist.length} conteúdos concluídos`;
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
            <p className="text-xl text-destructive">Erro ao carregar séries</p>
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
                  Olá, {session?.user?.name || 'estudante'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/" className="edu-nav-link">
                  Início
                </Link>
                <Link href="/vestibulares" className="edu-nav-link">
                  Vestibulares
                </Link>
                <Link href="/accessibility" className="edu-nav-link">
                  Acessibilidade
                </Link>
                <Link href="/vida-pratica" className="edu-nav-link">
                  Vida prática
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
                  Seu estudo agora está organizado por anos e séries.
                </h1>
                <p className="edu-lead">
                  A base provisória já libera todas as séries, matérias, tópicos, conteúdos,
                  vestibulares, vida prática e acessibilidade para navegação completa.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="edu-metric">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Ensino Fundamental
                </p>
                <p className="mt-2 text-3xl font-display">{groupedSeries.fundamental.length}</p>
                <p className="mt-2 text-sm text-muted-foreground">anos cadastrados</p>
              </div>
              <div className="edu-metric">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Ensino Médio
                </p>
                <p className="mt-2 text-3xl font-display">{groupedSeries.medio.length}</p>
                <p className="mt-2 text-sm text-muted-foreground">séries cadastradas</p>
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
                Módulos especiais
                <Badge variant="secondary">Liberados</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <Link href="/vestibulares" className="edu-subtle-card">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Vestibulares
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Trilhas de preparação com matérias, tópicos e conteúdos de apoio.
                </p>
              </Link>
              <Link href="/vida-pratica" className="edu-subtle-card">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Vida prática
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Guias úteis para documentos, carreira, finanças, consumo e saúde.
                </p>
              </Link>
              <Link href="/accessibility" className="edu-subtle-card">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Acessibilidade
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Categorias, temas e vínculos para recursos adaptados.
                </p>
              </Link>
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
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {groupedSeries.fundamental.map((item) => (
                    <DashboardSeriesCard
                      key={item.id}
                      name={item.name}
                      href={buildSubjectsHref(item.id)}
                      label="Ano"
                      description={
                        item.subjects?.length
                          ? `${item.subjects.length} matérias prontas para explorar.`
                          : 'Trilha pronta para explorar.'
                      }
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Layers3 className="h-6 w-6" />
                Séries do Ensino Médio
                <Badge variant="secondary">{groupedSeries.medio.length}</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent>
              {groupedSeries.medio.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  Nenhuma série do Ensino Médio encontrada.
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {groupedSeries.medio.map((item) => (
                    <DashboardSeriesCard
                      key={item.id}
                      name={item.name}
                      href={buildSubjectsHref(item.id)}
                      label="Série"
                      description={
                        item.subjects?.length
                          ? `${item.subjects.length} matérias prontas para explorar.`
                          : 'Trilha pronta para explorar.'
                      }
                    />
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
