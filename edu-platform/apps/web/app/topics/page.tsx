'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { trpc } from '@/lib/trpc';
import type { Topic } from '@edu-platform/core';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

function TopicsPageContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjectIdParam = searchParams.get('subjectId');
  const subjectId = Number(subjectIdParam || 0);

  const {
    data: topics = [],
    isLoading,
    error,
  } = trpc.topic.findBySubject.useQuery({ subjectId }, { enabled: subjectId > 0 });

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
              <CardContent className="p-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="mb-4 h-24 w-full rounded-3xl" />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || subjectId === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione uma materia primeiro</p>
            <Link
              href="/subjects"
              className="mt-6 inline-block rounded-2xl bg-primary px-6 py-3 text-primary-foreground transition hover:bg-primary/90"
            >
              Voltar as materias
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
            <h1 className="text-4xl font-bold text-foreground">Topicos</h1>
            <p className="mt-1 text-muted-foreground">
              Escolha um topico para ver os conteudos
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/subjects"
              className="flex items-center gap-2 font-medium text-primary transition hover:text-primary/80"
            >
              Voltar as materias
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="flex items-center gap-2 font-medium text-destructive transition hover:text-destructive/80"
            >
              Sair
            </button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
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
                    href={`/contents?topicId=${topic.id}`}
                    className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-accent"
                  >
                    <span className="mb-3 line-clamp-2 text-xl font-semibold text-foreground">
                      {topic.name}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Clique para ver os conteudos
                    </p>
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

export default function TopicsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8" />}>
      <TopicsPageContent />
    </Suspense>
  );
}
