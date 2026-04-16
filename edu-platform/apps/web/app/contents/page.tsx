'use client';

import { useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, ExternalLink, FileText, PlayCircle } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import type { Content } from '@edu-platform/core';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function getContentHref(content: Content) {
  if (content.type === 'PDF') {
    return content.pdfUrl || content.link;
  }

  return content.link;
}

function getTypeLabel(type: Content['type']) {
  switch (type) {
    case 'VIDEO':
      return 'Vídeo';
    case 'PDF':
      return 'PDF';
    case 'ARTICLE':
      return 'Artigo';
    default:
      return type;
  }
}

function getTypeIcon(type: Content['type']) {
  switch (type) {
    case 'VIDEO':
      return <PlayCircle className="h-5 w-5" />;
    case 'PDF':
      return <FileText className="h-5 w-5" />;
    default:
      return <ExternalLink className="h-5 w-5" />;
  }
}

function ContentsPageContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const utils = trpc.useUtils();
  const topicIdParam = searchParams.get('topicId');
  const topicId = Number(topicIdParam || 0);

  const {
    data: contents = [],
    isLoading,
    error,
  } = trpc.content.findByTopic.useQuery({ topicId }, { enabled: topicId > 0 });
  const { data: topic } = trpc.topic.findById.useQuery(topicId, {
    enabled: topicId > 0,
  });
  const { data: checklist = [] } = trpc.checklist.findByUserId.useQuery(undefined, {
    enabled: status === 'authenticated',
  });

  const createChecklist = trpc.checklist.create.useMutation({
    onSuccess: async () => {
      await utils.checklist.findByUserId.invalidate();
    },
  });

  const deleteChecklist = trpc.checklist.delete.useMutation({
    onSuccess: async () => {
      await utils.checklist.findByUserId.invalidate();
    },
  });

  const checklistByContentId = useMemo(
    () => new Map(checklist.map((item) => [item.contentId, item])),
    [checklist]
  );

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
                  <Skeleton key={index} className="h-44 w-full rounded-3xl" />
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
            <p className="text-xl text-destructive">Selecione um tópico primeiro</p>
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
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-start justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <Badge variant="outline">Tópico</Badge>
              <Badge variant="secondary">{contents.length} conteúdos</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              {topic?.name || 'Conteúdos do tópico'}
            </h1>
            <p className="mt-2 text-muted-foreground">
              Explore os materiais disponíveis e marque o que já concluiu.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/checklist" className="text-sm font-medium text-primary hover:text-primary/80">
              Meu checklist
            </Link>
            <Link href="/topics" className="text-sm font-medium text-primary hover:text-primary/80">
              Voltar aos tópicos
            </Link>
          </div>
        </header>

        <div className="grid gap-6">
          {contents.map((content: Content) => {
            const href = getContentHref(content);
            const checklistItem = checklistByContentId.get(content.id);

            return (
              <Card key={content.id} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="outline" className="gap-2">
                          {getTypeIcon(content.type)}
                          {getTypeLabel(content.type)}
                        </Badge>
                        {checklistItem ? (
                          <Badge className="gap-2 bg-emerald-600 hover:bg-emerald-600">
                            <CheckCircle2 className="h-4 w-4" />
                            Concluído
                          </Badge>
                        ) : null}
                      </div>
                      <span>{content.title}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    {content.description || 'Material disponível para estudo neste tópico.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {content.videoUrl ? <p>Vídeo complementar disponível.</p> : null}
                    {content.pdfUrl ? <p>PDF de apoio disponível.</p> : null}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer">
                        <Button className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Abrir conteúdo
                        </Button>
                      </a>
                    ) : null}

                    {checklistItem ? (
                      <Button
                        variant="outline"
                        onClick={() => deleteChecklist.mutate(checklistItem.id)}
                        disabled={deleteChecklist.isPending}
                      >
                        Desmarcar conclusão
                      </Button>
                    ) : (
                      <Button
                        onClick={() => createChecklist.mutate({ contentId: content.id })}
                        disabled={createChecklist.isPending}
                      >
                        Marcar como concluído
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {contents.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-muted-foreground">
                Nenhum conteúdo disponível para este tópico.
              </CardContent>
            </Card>
          ) : null}
        </div>
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
