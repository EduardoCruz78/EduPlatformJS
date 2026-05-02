'use client';

import { useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ExternalLink, FileText, PlayCircle, Sparkles } from 'lucide-react';
import type { Content } from '@edu-platform/core';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ComingSoonPanel } from '@/components/coming-soon-panel';
import { isLockedSeriesName } from '@/lib/content-locks';
import { buildTopicsHref } from '@/lib/study-navigation';
import { trpc } from '@/lib/trpc';

function getContentHref(content: Content) {
  if (content.type === 'PDF') {
    return content.pdfUrl || content.link;
  }

  return content.link;
}

function getTypeLabel(type: Content['type']) {
  switch (type) {
    case 'VIDEO':
      return 'Video';
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
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const utils = trpc.useUtils();
  const topicIdParam = searchParams.get('topicId');
  const subjectIdParam = searchParams.get('subjectId');
  const seriesIdParam = searchParams.get('seriesId');
  const topicId = Number(topicIdParam || 0);
  const fallbackSubjectId = Number(subjectIdParam || 0);
  const fallbackSeriesId = Number(seriesIdParam || 0);

  const { data: topic, isLoading: isLoadingTopic } = trpc.topic.findById.useQuery(topicId, {
    enabled: topicId > 0,
  });

  const primarySubject = topic?.subjects?.find((item) => item.id === fallbackSubjectId) || topic?.subjects?.[0];
  const resolvedSubjectId = primarySubject?.id ?? fallbackSubjectId;
  const resolvedSeriesId = primarySubject?.seriesId ?? fallbackSeriesId;

  const { data: series, isLoading: isLoadingSeries } = trpc.series.findById.useQuery(resolvedSeriesId, {
    enabled: resolvedSeriesId > 0,
  });

  const seriesLocked = series ? isLockedSeriesName(series.name) : false;

  const {
    data: contents = [],
    isLoading: isLoadingContents,
    error,
  } = trpc.content.findByTopic.useQuery(
    { topicId },
    { enabled: topicId > 0 && Boolean(topic) && Boolean(series) && !seriesLocked }
  );

  const { data: checklist = [] } = trpc.checklist.findByUserId.useQuery(undefined, {
    enabled: status === 'authenticated' && !seriesLocked,
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

  const topicsHref = buildTopicsHref({
    subjectId: resolvedSubjectId,
    seriesId: resolvedSeriesId,
  });

  if (isLoadingTopic || isLoadingSeries || isLoadingContents) {
    return (
      <div className="edu-shell">
        <div className="space-y-8">
          <div className="h-16 w-full rounded-[2rem] bg-muted" />
          <Skeleton className="h-64 w-full rounded-[2.5rem]" />
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-48 w-full rounded-[2rem]" />
          ))}
        </div>
      </div>
    );
  }

  if (topicId === 0 || !topic || !series) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione um topico primeiro</p>
            <Link href={topicsHref} className="mt-6 inline-flex edu-nav-link">
              Voltar
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
          title={`${series.name} esta trancado`}
          description="Os conteudos dessa serie continuam bloqueados ate o banco de dados receber a carga completa e revisada."
          backHref="/"
          backLabel="Voltar ao inicio"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione um topico primeiro</p>
            <Link href={topicsHref} className="mt-6 inline-flex edu-nav-link">
              Voltar
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
          <span className="edu-brand">Conteudos</span>
          <span className="text-sm text-muted-foreground">{topic.name || 'materiais do topico'}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {session ? (
            <Link href="/checklist" className="edu-nav-link">
              Meu checklist
            </Link>
          ) : (
            <Link href="/login" className="edu-nav-link">
              Entrar para salvar progresso
            </Link>
          )}
          <Link href={topicsHref} className="edu-nav-link">
            <ArrowLeft className="h-4 w-4" />
            Voltar aos topicos
          </Link>
        </div>
      </div>

      <section className="edu-hero">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <div className="space-y-5">
            <span className="edu-kicker">
              <Sparkles className="mr-2 h-4 w-4" />
              Materiais do topico
            </span>
            <div className="space-y-3">
              <h1 className="edu-section-title">{topic.name || 'Conteudos do topico'}</h1>
              <p className="edu-lead">
                Abra o material certo, veja rapidamente o tipo de conteudo e marque o que ja foi concluido sem sair do fluxo.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="edu-metric">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">conteudos</p>
              <p className="mt-2 text-3xl font-display">{contents.length}</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-700 bg-slate-950 px-5 py-4 text-slate-50">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">concluidos</p>
              <p className="mt-2 text-3xl font-display">
                {session ? contents.filter((content) => checklistByContentId.has(content.id)).length : '---'}
              </p>
              {!session ? (
                <p className="mt-2 text-xs text-slate-400">Entre depois, se quiser usar checklist.</p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-6">
        {contents.map((content: Content) => {
          const href = getContentHref(content);
          const checklistItem = checklistByContentId.get(content.id);

          return (
            <Card key={content.id}>
              <CardHeader>
                <CardTitle className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="gap-2">
                        {getTypeIcon(content.type)}
                        {getTypeLabel(content.type)}
                      </Badge>
                      {checklistItem ? (
                        <Badge className="gap-2 border-emerald-700 bg-emerald-500 text-white">
                          <CheckCircle2 className="h-4 w-4" />
                          Concluido
                        </Badge>
                      ) : null}
                    </div>
                    <span>{content.title}</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  {content.description || 'Material disponivel para estudo neste topico.'}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2 text-sm text-muted-foreground">
                  {content.videoUrl ? <p>Video complementar disponivel.</p> : null}
                  {content.pdfUrl ? <p>PDF de apoio disponivel.</p> : null}
                  {!content.videoUrl && !content.pdfUrl ? <p>Material externo ou artigo vinculado.</p> : null}
                </div>

                <div className="flex flex-wrap gap-3">
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      <Button className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Abrir conteudo
                      </Button>
                    </a>
                  ) : null}

                  {session && checklistItem ? (
                    <Button
                      variant="outline"
                      onClick={() => deleteChecklist.mutate(checklistItem.id)}
                      disabled={deleteChecklist.isPending}
                    >
                      Desmarcar conclusao
                    </Button>
                  ) : session ? (
                    <Button
                      onClick={() => createChecklist.mutate({ contentId: content.id })}
                      disabled={createChecklist.isPending}
                    >
                      Marcar como concluido
                    </Button>
                  ) : (
                    <Link
                      href="/login"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-yellow-400/45 hover:bg-slate-800"
                    >
                      Entrar para marcar progresso
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {contents.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              Nenhum conteudo disponivel para este topico.
            </CardContent>
          </Card>
        ) : null}
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
