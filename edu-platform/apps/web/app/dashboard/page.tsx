'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { trpc } from '@/lib/trpc';
import type { Series } from '@edu-platform/core';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: series = [], isLoading, error } = trpc.series.find.useQuery();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-6xl animate-pulse space-y-8">
          <div className="h-10 w-80 rounded-2xl bg-muted" />
          <Card>
            <CardContent className="space-y-4 p-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-20 w-full rounded-3xl" />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Erro ao carregar series</p>
            <p className="mt-2 text-muted-foreground">{error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-2xl bg-destructive px-6 py-3 text-destructive-foreground transition hover:bg-destructive/90"
            >
              Tentar novamente
            </button>
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
            <h1 className="text-4xl font-bold text-foreground">
              Bem-vindo, {session?.user?.name}
            </h1>
            <p className="mt-1 text-muted-foreground">
              Selecione uma serie para comecar
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/subjects"
              className="font-medium text-primary hover:text-primary/80"
            >
              Ver materias
            </Link>

            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="font-medium text-destructive hover:text-destructive/80"
            >
              Sair
            </button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
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
                    className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-accent"
                  >
                    <div>
                      <span className="text-xl font-semibold text-foreground">
                        {item.name}
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">-&gt;</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        entrar
                      </div>
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
