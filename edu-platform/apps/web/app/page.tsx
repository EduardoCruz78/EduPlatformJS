'use client';

import Link from 'next/link';
import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import type { Topic as TopicItem } from '@edu-platform/core';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { buildContentsHref, buildSubjectsHref, buildTopicsHref } from '@/lib/study-navigation';
import { trpc } from '@/lib/trpc';

const seriesIcons = ['EG', 'VB', 'AC', 'TP', 'CT', 'PR'];

type SeriesGroup = 'fundamental' | 'medio';
type SearchResult = {
  id: string;
  kind: 'serie' | 'materia' | 'topico';
  title: string;
  description: string;
  href: string;
  badge: string;
  score: number;
};

function normalizeSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getSeriesMeta(name: string) {
  const normalized = normalizeSearchText(name)
    .replace(/[º°ª]/g, '')
    .replace(/[-–—]/g, ' ')
    .replace(/\s+/g, ' ');
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

export default function HomePage() {
  const { data: session, status } = useSession();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const utils = trpc.useUtils();

  const { data: series = [], isLoading: isLoadingSeries } = trpc.series.find.useQuery();
  const { data: topics = [] } = trpc.topic.find.useQuery();
  const { data: vestibulares = [], isLoading: isLoadingVestibulares } =
    trpc.vestibular.find.useQuery();
  const { data: accessibilityCategories = [] } = trpc.accessibility.getCategories.useQuery();
  const { data: checklist = [] } = trpc.checklist.findByUserId.useQuery(undefined, {
    enabled: status === 'authenticated',
  });

  const orderedSeries = useMemo(() => {
    return [...series].sort((left, right) => {
      const leftMeta = getSeriesMeta(left.name);
      const rightMeta = getSeriesMeta(right.name);

      const groupWeight = {
        fundamental: 0,
        medio: 1,
      };

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

  const searchResults = useMemo(() => {
    const normalizedQuery = normalizeSearchText(deferredSearchQuery);

    if (!normalizedQuery) {
      return [] as SearchResult[];
    }

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    const results: SearchResult[] = [];

    const matchesTokens = (value: string) => tokens.every((token) => value.includes(token));
    const buildScore = (title: string, context: string, weight: number) => {
      const normalizedTitle = normalizeSearchText(title);
      const normalizedContext = normalizeSearchText(context);
      let score = weight;

      if (normalizedTitle === normalizedQuery) {
        score += 120;
      } else if (normalizedTitle.startsWith(normalizedQuery)) {
        score += 80;
      } else if (normalizedTitle.includes(normalizedQuery)) {
        score += 48;
      }

      if (normalizedContext.includes(normalizedQuery)) {
        score += 20;
      }

      score -= normalizedTitle.length / 100;
      return score;
    };

    orderedSeries.forEach((serie) => {
      const seriesSearchable = normalizeSearchText(`${serie.name} serie ano`);
      if (matchesTokens(seriesSearchable)) {
        results.push({
          id: `series-${serie.id}`,
          kind: 'serie',
          title: serie.name,
          description: `${serie.subjects?.length ?? 0} materias vinculadas`,
          href: buildSubjectsHref(serie.id),
          badge: 'Serie',
          score: buildScore(serie.name, seriesSearchable, 30),
        });
      }

      (serie.subjects ?? []).forEach((subject) => {
        const subjectContext = `${subject.name} ${serie.name}`;
        const subjectSearchable = normalizeSearchText(
          `${subject.name} ${subject.description ?? ''} ${serie.name}`
        );

        if (matchesTokens(subjectSearchable)) {
          results.push({
            id: `subject-${subject.id}`,
            kind: 'materia',
            title: subject.name,
            description: `${serie.name} • materia`,
            href: buildTopicsHref({ subjectId: subject.id, seriesId: serie.id }),
            badge: 'Materia',
            score: buildScore(subject.name, subjectContext, 45),
          });
        }
      });
    });

    topics.forEach((topic: TopicItem) => {
      (topic.subjects ?? []).forEach((subject) => {
        const seriesItem = orderedSeries.find((serie) => serie.id === subject.seriesId);
        const topicContext = `${topic.name} ${subject.name} ${seriesItem?.name ?? ''}`;
        const topicSearchable = normalizeSearchText(
          `${topic.name} ${subject.name} ${seriesItem?.name ?? ''}`
        );

        if (!matchesTokens(topicSearchable)) {
          return;
        }

        results.push({
          id: `topic-${topic.id}-${subject.id}`,
          kind: 'topico',
          title: topic.name,
          description: `${subject.name} • ${seriesItem?.name ?? 'Serie nao identificada'}`,
          href: buildContentsHref({
            topicId: topic.id,
            subjectId: subject.id,
            seriesId: seriesItem?.id,
          }),
          badge: 'Topico',
          score: buildScore(topic.name, topicContext, 70),
        });
      });
    });

    return results
      .sort((left, right) => right.score - left.score)
      .slice(0, 12);
  }, [deferredSearchQuery, orderedSeries, topics]);

  useEffect(() => {
    orderedSeries.slice(0, 12).forEach((item) => {
      void utils.subject.findBySeries.prefetch({ seriesId: item.id });
    });

    if (searchOpen) {
      void utils.topic.find.prefetch();
    }
  }, [orderedSeries, searchOpen, utils]);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    searchInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  return (
    <div className="min-h-screen">
      <section className="border-b border-white/8 bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
          <div className="edu-topbar md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="edu-home-icon h-11 w-11">
                <BookOpen className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-display text-2xl leading-none text-white">EduPlatform</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  estudo guiado para vestibulares com acessibilidade em mente
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2">
              <Link href="#series" className="edu-nav-link">
                Series
              </Link>
              <Link href="/vestibulares" className="edu-nav-link">
                Vestibulares
              </Link>
              <Link href="/accessibility" className="edu-nav-link">
                Accessibility
              </Link>
              <Link href={session ? '/dashboard' : '/login'} className="edu-nav-link">
                {session ? 'Painel' : 'Entrar'}
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Abrir busca"
                onClick={() => setSearchOpen(true)}
                className="edu-nav-link h-11 w-11 justify-center p-0"
              >
                <Search className="h-4 w-4" />
              </button>
              {session ? (
                <Link href="/dashboard" className="edu-action">
                  Abrir meu painel
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link href="/login" className="edu-action">
                  Entrar com Google
                </Link>
              )}
            </div>
          </div>

          <div className="mt-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:items-end">
              <div className="space-y-7">
                <div className="edu-kicker">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-60"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black"></span>
                  </span>
                  Open source, acessivel e sem bloqueio de entrada
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                    Estudo serio,
                    <br />
                    visual forte
                    <br />e fluxo claro
                  </h1>
                  <p className="max-w-3xl text-justify text-lg leading-8 text-slate-300">
                    A plataforma open source completa para preparar voce para os
                    vestibulares com acessibilidade em mente e progresso visivel.
                    Voce pode explorar o conteudo sem login e entrar depois para
                    salvar seu ritmo.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 lg:items-stretch lg:pl-6">
                <Link
                  href="/vestibulares"
                  className="edu-action-outline w-full justify-between px-8 py-4 text-base"
                >
                  Ver vestibulares
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="grid gap-3">
                  <div className="edu-chip w-full justify-between gap-3 px-4 py-3 text-sm normal-case tracking-normal">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      Login Google opcional
                    </span>
                  </div>
                  <div className="edu-chip w-full justify-between gap-3 px-4 py-3 text-sm normal-case tracking-normal">
                    <span className="inline-flex items-center gap-2">
                      <BookOpenText className="h-4 w-4" />
                      Series ja visiveis na home
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {searchOpen ? (
        <div className="fixed inset-0 z-50 bg-black/72 px-4 py-6 backdrop-blur-sm sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="edu-panel">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                    Busca inteligente
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    Busque por serie, materia ou topico
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="edu-nav-link h-11 w-11 justify-center p-0"
                  aria-label="Fechar busca"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <Input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Ex.: Algebra, Matematica, 8 Ano..."
                    className="h-14 pl-11 pr-12 text-base"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
                      aria-label="Limpar busca"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>

                {!searchQuery.trim() ? (
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="edu-subtle-card">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                        Topicos
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Procure por nomes como Algebra, Geometria ou Redacao.
                      </p>
                    </div>
                    <div className="edu-subtle-card">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                        Materias
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Tambem funciona para Matematica, Historia, Biologia e outras materias.
                      </p>
                    </div>
                    <div className="edu-subtle-card">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                        Series
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Digite 8 ano, 1 serie ou Ensino Medio para abrir a trilha certa.
                      </p>
                    </div>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="edu-subtle-card text-sm text-muted-foreground">
                    Nenhum resultado encontrado para essa busca.
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        href={result.href}
                        onClick={() => setSearchOpen(false)}
                        className="edu-home-card p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <Badge variant="outline">{result.badge}</Badge>
                            </div>
                            <p className="text-xl font-black text-white">{result.title}</p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <section className="grid gap-4 md:grid-cols-3">
              <Card className="h-full">
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-black text-white">Accessibility</h3>
                    <Badge variant="secondary">{accessibilityCategories.length}</Badge>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    {accessibilityCategories.length} categorias organizadas e prontas para consulta.
                  </p>
                  <Link href="/accessibility" className="edu-nav-link w-full justify-between">
                    Abrir modulo
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-black text-white">Checklist</h3>
                    <Badge variant="secondary">{session ? checklist.length : 0}</Badge>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    {session
                      ? `${checklist.length} itens ja marcados na sua conta.`
                      : 'Recurso opcional para acompanhar progresso pessoal.'}
                  </p>
                  <Link
                    href={session ? '/checklist' : '/login'}
                    className="edu-nav-link w-full justify-between"
                  >
                    {session ? 'Abrir checklist' : 'Entrar depois'}
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-black text-white">Vestibulares</h3>
                    <Badge variant="secondary">{vestibulares.length}</Badge>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    {vestibulares.length} vestibulares publicados para explorar.
                  </p>
                  <Link href="/vestibulares" className="edu-nav-link w-full justify-between">
                    Explorar agora
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </Link>
                </CardContent>
              </Card>
            </section>

            <section id="series">
              <div className="mb-6 space-y-4">
                <h2 className="font-display text-4xl text-white">Series Educacionais</h2>
                <p className="mt-2 text-slate-400">
                  Primeiro os 9 anos do Ensino Fundamental, depois as 3 series do Ensino Medio.
                </p>
              </div>

              {isLoadingSeries ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} className="h-40 rounded-xl bg-neutral-800" />
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                          bloco 1
                        </p>
                        <h3 className="mt-2 text-2xl font-black text-white">Ensino Fundamental</h3>
                      </div>
                      <Badge variant="outline">{groupedSeries.fundamental.length} anos</Badge>
                    </div>

                    {groupedSeries.fundamental.length ? (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {groupedSeries.fundamental.map((item, index) => (
                          <Link
                            key={item.id}
                            href={buildSubjectsHref(item.id)}
                            className="edu-home-card"
                          >
                            <div className="relative flex h-full flex-col justify-between gap-5">
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Ano
                                  </p>
                                  <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                                    {item.name}
                                  </h3>
                                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {item.subjects?.length
                                      ? `${item.subjects.length} materias prontas para explorar.`
                                      : 'Trilha com materias, topicos e conteudos.'}
                                  </p>
                                </div>

                                <div className="edu-home-icon">
                                  {seriesIcons[index % seriesIcons.length]}
                                </div>
                              </div>

                              <div className="flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
                                <span className="edu-chip">Abrir ano</span>
                                <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="edu-panel p-6 text-sm text-muted-foreground">
                        Nenhum ano do Ensino Fundamental encontrado.
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                          bloco 2
                        </p>
                        <h3 className="mt-2 text-2xl font-black text-white">Ensino Medio</h3>
                      </div>
                      <Badge variant="outline">{groupedSeries.medio.length} series</Badge>
                    </div>

                    {groupedSeries.medio.length ? (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {groupedSeries.medio.map((item, index) => (
                          <Link
                            key={item.id}
                            href={buildSubjectsHref(item.id)}
                            className="edu-home-card"
                          >
                            <div className="relative flex h-full flex-col justify-between gap-5">
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Serie
                                  </p>
                                  <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                                    {item.name}
                                  </h3>
                                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {item.subjects?.length
                                      ? `${item.subjects.length} materias prontas para explorar.`
                                      : 'Trilha com materias, topicos e conteudos.'}
                                  </p>
                                </div>

                                <div className="edu-home-icon">
                                  {seriesIcons[(index + groupedSeries.fundamental.length) % seriesIcons.length]}
                                </div>
                              </div>

                              <div className="flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
                                <span className="edu-chip">Abrir serie</span>
                                <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="edu-panel p-6 text-sm text-muted-foreground">
                        Nenhuma serie do Ensino Medio encontrada.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            <section className="edu-panel overflow-hidden">
              <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-7">
                <div className="flex items-start gap-4">
                  <div className="edu-home-icon h-14 w-14 text-2xl">A11Y</div>
                  <div>
                    <h3 className="text-2xl font-black text-gradient-primary">
                      Recursos de Accessibility
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                      Categorias, temas e topicos estruturados para alunos com
                      necessidades especificas e estudo com mais contexto.
                    </p>
                  </div>
                </div>

                <Link href="/accessibility" className="edu-action uppercase tracking-[0.12em]">
                  Acessar
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-4xl text-white">Vestibulares</h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Prepare-se para os principais exames.
                  </p>
                </div>
                <Link
                  href="/vestibulares"
                  className="edu-inline-link hidden items-center gap-1 text-sm font-semibold sm:inline-flex"
                >
                  Ver todos
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {isLoadingVestibulares &&
                  Array.from({ length: 2 }).map((_, index) => (
                    <Skeleton key={index} className="h-24 rounded-xl bg-neutral-800" />
                  ))}

                {!isLoadingVestibulares &&
                  vestibulares.map((item, index) => (
                    <Link
                      key={item.id}
                      href={`/vestibulares/${item.id}`}
                      className="edu-home-card"
                    >
                      <div className="flex items-center gap-4">
                        <div className="edu-home-icon">{index === 0 ? 'V1' : 'V2'}</div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-lg font-black text-white">{item.name}</h3>
                          <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                            <Calendar className="h-3 w-3" />
                            {item.year ? `Edicao ${item.year}` : 'Vestibular ativo'}
                          </p>
                        </div>

                        <ChevronRight className="h-5 w-5 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
