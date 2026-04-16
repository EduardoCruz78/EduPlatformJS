// apps/web/app/contents/page.tsx

'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { trpc } from '@/lib/trpc';
import type { Content } from '@edu-platform/core';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

function ContentsPageContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const topicIdParam = searchParams.get('topicId');
  const topicId = Number(topicIdParam || 0);

  const {
    data: contents = [],
    isLoading,
    error,
  } = trpc.content.findByTopic.useQuery({ topicId }, { enabled: topicId > 0 });

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
              <CardContent className="space-y-6 p-8">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-36 w-full rounded-3xl" />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || topicId === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione um topico primeiro</p>
            <Link
              href="/topics"
              className="mt-6 inline-block text-primary transition hover:text-primary/80"
            >
              Voltar
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              Conteudos
              <Badge variant="secondary">{contents.length}</Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {contents.map((content: Content) => (
              <div
                key={content.id}
                className="rounded-2xl border border-border bg-card p-4"
              >
                {content.title}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ContentsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8" />}>
      <ContentsPageContent />
    </Suspense>
  );
}
