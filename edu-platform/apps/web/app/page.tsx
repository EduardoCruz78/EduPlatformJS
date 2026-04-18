'use client';

import Link from 'next/link';
import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Search,
  X,
} from 'lucide-react';
import type { Topic as TopicItem } from '@edu-platform/core';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { buildContentsHref, buildSubjectsHref, buildTopicsHref } from '@/lib/study-navigation';
import { trpc } from '@/lib/trpc';

const seriesIcons = ['EG', 'VB', 'AC', 'TP', 'CT', 'PR'];
const searchTitleId = 'home-search-dialog-title';
const searchDescriptionId = 'home-search-dialog-description';
const searchInputId = 'home-search-input';

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

function getFocusableElements(container: HTMLElement) {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  return Array.from(container.querySelectorAll<HTMLElement>(selectors)).filter(
    (element) => !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true'
  );
}

export default function HomePage() {
  const { data: session } = useSession();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchDialogRef = useRef<HTMLDivElement | null>(null);
  const openSearchButtonRef = useRef<HTMLButtonElement | null>(null);
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const utils = trpc.useUtils();

  const { data: series = [], isLoading: isLoadingSeries } = trpc.series.find.useQuery();
  const { data: topics = [] } = trpc.topic.find.useQuery();
  const { data: vestibulares = [], isLoading: isLoadingVestibulares } =
    trpc.vestibular.find.useQuery();

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
          description: `${serie.subjects?.length ?? 0} matérias vinculadas`,
          href: buildSubjectsHref(serie.id),
          badge: 'Série',
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
            description: `${serie.name} • matéria`,
            href: buildTopicsHref({ subjectId: subject.id, seriesId: serie.id }),
            badge: 'Matéria',
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
          description: `${subject.name} • ${seriesItem?.name ?? 'Série não identificada'}`,
          href: buildContentsHref({
            topicId: topic.id,
            subjectId: subject.id,
            seriesId: seriesItem?.id,
          }),
          badge: 'Tópico',
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
      document.body.style.overflow = '';
      openSearchButtonRef.current?.focus();
      return;
    }

    document.body.style.overflow = 'hidden';
    searchInputRef.current?.focus();

    const dialog = searchDialogRef.current;
    if (!dialog) {
      return () => {
        document.body.style.overflow = '';
      };
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setSearchOpen(false);
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = getFocusableElements(dialog);
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchOpen]);

  return (
    <div className="min-h-screen">
      <header className="bg-black">
        <div className="edu-topbar-shell">
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <div className="edu-topbar mb-0 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="edu-home-icon h-11 w-11" aria-hidden="true">
                <BookOpen className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-display text-2xl leading-none text-white">EduPlatform</p>
              </div>
            </div>

            <div className="ml-auto flex flex-wrap items-center gap-2">
              <nav aria-label="Navegação principal" className="flex flex-wrap items-center gap-2">
                <Link href="#series" className="edu-nav-link">
                  Séries
                </Link>
                <Link href="/vestibulares" className="edu-nav-link">
                  Vestibulares
                </Link>
                <Link href="/accessibility" className="edu-nav-link">
                  Accessibility
                </Link>
              </nav>

              <div className="flex items-center gap-2">
                <button
                  ref={openSearchButtonRef}
                  type="button"
                  aria-label="Abrir busca"
                  aria-haspopup="dialog"
                  aria-expanded={searchOpen}
                  aria-controls={searchTitleId}
                  onClick={() => setSearchOpen(true)}
                  className="edu-nav-link h-11 w-11 justify-center p-0"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
                {session ? (
                  <Link href="/dashboard" className="edu-action">
                    Abrir meu painel
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <Link href="/login" className="edu-action">
                    Entrar com Google
                  </Link>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="border-b border-white/8">
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pt-40 lg:px-8 lg:pb-24 lg:pt-44">
          <div className="mt-10">
            <div className="w-full space-y-5">
              <h1 className="max-w-6xl font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Plataforma de estudos completa para todas as áreas fundamentais de aprendizado
              </h1>
              <p className="max-w-6xl text-lg leading-8 text-slate-300">
                A plataforma open source para preparar você para os vestibulares com acessibilidade
                em mente e progresso visível. Você pode explorar o conteúdo sem login e entrar
                depois para salvar seu ritmo.
              </p>
            </div>
          </div>
        </div>
        </div>
      </header>

      {searchOpen ? (
        <div className="fixed inset-0 z-50 bg-black/72 px-4 py-6 backdrop-blur-sm sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div
              ref={searchDialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={searchTitleId}
              aria-describedby={searchDescriptionId}
              className="edu-panel"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                    Busca inteligente
                  </p>
                  <h2 id={searchTitleId} className="mt-2 text-2xl font-black text-white">
                    Busque por série, matéria ou tópico
                  </h2>
                  <p id={searchDescriptionId} className="mt-2 text-sm text-muted-foreground">
                    Digite um termo para encontrar rapidamente trilhas, matérias e conteúdos.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="edu-nav-link h-11 w-11 justify-center p-0"
                  aria-label="Fechar busca"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-4" aria-live="polite">
                <div className="relative">
                  <label htmlFor={searchInputId} className="sr-only">
                    Buscar por série, matéria ou tópico
                  </label>
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <Input
                    id={searchInputId}
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Ex.: Álgebra, Matemática, 8º ano..."
                    className="h-14 pl-11 pr-12 text-base"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label="Limpar busca"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : null}
                </div>

                {!searchQuery.trim() ? (
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="edu-subtle-card">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                        Tópicos
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Procure por nomes como Álgebra, Geometria ou Redação.
                      </p>
                    </div>
                    <div className="edu-subtle-card">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                        Matérias
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Também funciona para Matemática, História, Biologia e outras matérias.
                      </p>
                    </div>
                    <div className="edu-subtle-card">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                        Séries
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Digite 8º ano, 1ª série ou Ensino Médio para abrir a trilha certa.
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
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
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

      <main id="main-content" className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <section id="series" aria-labelledby="series-section-title">
              <div className="mb-6 space-y-4">
                <h2 id="series-section-title" className="font-display text-4xl text-white">
                  Séries educacionais
                </h2>
                <p className="mt-2 text-slate-400">
                  Primeiro os 9 anos do Ensino Fundamental, depois as 3 séries do Ensino Médio.
                </p>
              </div>

              {isLoadingSeries ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} className="h-40 rounded-xl bg-neutral-800" />
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  <section aria-labelledby="fundamental-title">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                          Bloco 1
                        </p>
                        <h3 id="fundamental-title" className="mt-2 text-2xl font-black text-white">
                          Ensino Fundamental
                        </h3>
                      </div>
                      <Badge variant="outline">{groupedSeries.fundamental.length} anos</Badge>
                    </div>

                    {groupedSeries.fundamental.length ? (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {groupedSeries.fundamental.map((item, index) => (
                          <Link
                            key={item.id}
                            href={buildSubjectsHref(item.id)}
                            className="edu-home-card"
                          >
                            <div className="relative flex h-full flex-col justify-between gap-5">
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Ano
                                  </p>
                                  <h4 className="mt-3 text-2xl font-black leading-tight text-white">
                                    {item.name}
                                  </h4>
                                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {item.subjects?.length
                                      ? `${item.subjects.length} matérias prontas para explorar.`
                                      : 'Trilha com matérias, tópicos e conteúdos.'}
                                  </p>
                                </div>

                                <div className="edu-home-icon" aria-hidden="true">
                                  {seriesIcons[index % seriesIcons.length]}
                                </div>
                              </div>

                              <div className="flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
                                <span className="edu-chip">Abrir ano</span>
                                <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
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
                  </section>

                  <section aria-labelledby="medio-title">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                          Bloco 2
                        </p>
                        <h3 id="medio-title" className="mt-2 text-2xl font-black text-white">
                          Ensino Médio
                        </h3>
                      </div>
                      <Badge variant="outline">{groupedSeries.medio.length} séries</Badge>
                    </div>

                    {groupedSeries.medio.length ? (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {groupedSeries.medio.map((item, index) => (
                          <Link
                            key={item.id}
                            href={buildSubjectsHref(item.id)}
                            className="edu-home-card"
                          >
                            <div className="relative flex h-full flex-col justify-between gap-5">
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Série
                                  </p>
                                  <h4 className="mt-3 text-2xl font-black leading-tight text-white">
                                    {item.name}
                                  </h4>
                                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {item.subjects?.length
                                      ? `${item.subjects.length} matérias prontas para explorar.`
                                      : 'Trilha com matérias, tópicos e conteúdos.'}
                                  </p>
                                </div>

                                <div className="edu-home-icon" aria-hidden="true">
                                  {seriesIcons[(index + groupedSeries.fundamental.length) % seriesIcons.length]}
                                </div>
                              </div>

                              <div className="flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
                                <span className="edu-chip">Abrir série</span>
                                <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="edu-panel p-6 text-sm text-muted-foreground">
                        Nenhuma série do Ensino Médio encontrada.
                      </div>
                    )}
                  </section>
                </div>
              )}
            </section>

            <section className="edu-panel overflow-hidden" aria-labelledby="a11y-section-title">
              <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-7">
                <div className="flex items-start gap-4">
                  <div className="edu-home-icon h-14 w-14 text-2xl" aria-hidden="true">
                    A11Y
                  </div>
                  <div>
                    <h2 id="a11y-section-title" className="text-2xl font-black text-gradient-primary">
                      Recursos de Accessibility
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                      Categorias, temas e tópicos estruturados para alunos com necessidades
                      específicas e estudo com mais contexto.
                    </p>
                  </div>
                </div>

                <Link href="/accessibility" className="edu-action uppercase tracking-[0.12em]">
                  Acessar
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </section>

            <section className="space-y-6" aria-labelledby="vestibulares-section-title">
              <div className="edu-panel overflow-hidden">
                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-7">
                  <div>
                    <h2 id="vestibulares-section-title" className="font-display text-4xl text-white">
                      Vestibulares
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Prepare-se para os principais exames.
                    </p>
                  </div>

                  <Link href="/vestibulares" className="edu-action uppercase tracking-[0.12em]">
                    Ver todos
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
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
                        <div className="edu-home-icon" aria-hidden="true">
                          {index === 0 ? 'V1' : 'V2'}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-lg font-black text-white">{item.name}</h3>
                          <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {item.year ? `Edição ${item.year}` : 'Vestibular ativo'}
                          </p>
                        </div>

                        <ChevronRight className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
