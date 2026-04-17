'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap, LayoutGrid, LogOut } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import type { Series } from '@edu-platform/core';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

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

  if (status === 'loading' || isLoading) {
    return (
      <div className="edu-shell">
        <div className="space-y-8">
          <div className="h-16 w-full rounded-[2rem] bg-muted" />
          <Skeleton className="h-80 w-full rounded-[2.5rem]" />
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-40 w-full rounded-[2rem]" />
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
            <p className="text-xl text-destructive">Erro ao carregar series</p>
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
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">EduPlatform</span>
          <span className="text-sm text-muted-foreground">
            ola, {session?.user?.name || 'estudante'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/subjects" className="edu-nav-link">
            Materias
          </Link>
          <Link href="/vestibulares" className="edu-nav-link">
            Vestibulares
          </Link>
          <Link href="/checklist" className="edu-nav-link">
            Checklist
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="edu-nav-link"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </div>

      <section className="edu-hero">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <span className="edu-kicker">
              <GraduationCap className="mr-2 h-4 w-4" />
              Painel do estudante
            </span>
            <div className="space-y-3">
              <h1 className="edu-section-title">Seu estudo esta organizado em blocos claros.</h1>
              <p className="edu-lead">
                Escolha uma serie, avance por materias e topicos e acompanhe o
                que ja foi concluido sem perder o fio da navegacao.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="edu-metric">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                series
              </p>
              <p className="mt-2 text-3xl font-display">{series.length}</p>
            </div>
            <div className="edu-metric">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                checklist
              </p>
              <p className="mt-2 text-3xl font-display">{checklist.length}</p>
            </div>
            <div className="rounded-[1.75rem] border border-[rgba(255,198,39,0.38)] bg-primary px-5 py-4 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                foco
              </p>
              <p className="mt-2 text-2xl font-display">Continuar agora</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <LayoutGrid className="h-6 w-6" />
              Series disponiveis
              <Badge variant="secondary">{series.length}</Badge>
            </CardTitle>
          </CardHeader>

          <CardContent>
            {series.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">
                Nenhuma serie encontrada.
                <br />
                Rode o seed do Prisma.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {series.map((item: Series) => (
                  <Link
                    key={item.id}
                    href={`/subjects?seriesId=${item.id}`}
                    className="edu-home-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          trilha
                        </p>
                        <span className="mt-3 block text-2xl font-display text-foreground">
                          {item.name}
                        </span>
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
            <CardTitle className="flex items-center gap-3 text-3xl text-white">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Progresso recente
              <Badge className="border-primary bg-primary text-primary-foreground">{checklist.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {checklist.length === 0 ? (
              <p className="text-white/70">
                Voce ainda nao marcou conteudos como concluidos.
              </p>
            ) : (
              <div className="space-y-3">
                {checklist.slice(0, 5).map((item) => (
                  <div
                    key={item.id}
                    className="edu-subtle-card"
                  >
                    <p className="font-semibold text-white">
                      {item.content?.title || `Conteudo #${item.contentId}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.content?.type || 'Material'} concluido em{' '}
                      {new Date(item.createdAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
