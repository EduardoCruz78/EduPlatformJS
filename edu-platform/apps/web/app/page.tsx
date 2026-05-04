'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { ArrowRight, BookOpen, Search, LockKeyhole } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  COMING_SOON_LABEL,
  getSeriesMeta,
  isLockedModulePath,
  isLockedSeriesName,
} from '@/lib/content-locks';
import { buildSubjectsHref } from '@/lib/study-navigation';
import { trpc } from '@/lib/trpc';

import { SeriesCard } from '@/components/home/SeriesCard';
import { LockedModuleSection } from '@/components/home/LockedModuleSection';
import { LockedNavItem } from '@/components/home/LockedNavItem';
import { SearchDialog } from '@/components/home/SearchDialog';

const seriesIcons = ['EG', 'VB', 'AC', 'TP', 'CT', 'PR'];

export default function HomePage() {
  const { data: session } = useSession();
  const [searchOpen, setSearchOpen] = useState(false);
  const utils = trpc.useUtils();
  
  const vestibularesLocked = isLockedModulePath('/vestibulares');
  const practicalLocked = isLockedModulePath('/vida-pratica');
  const accessibilityLocked = isLockedModulePath('/accessibility');

  const { data: series = [], isLoading: isLoadingSeries } = trpc.series.find.useQuery();

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

  useEffect(() => {
    orderedSeries
      .filter((item) => !isLockedSeriesName(item.name))
      .slice(0, 12)
      .forEach((item) => {
        void utils.subject.findBySeries.prefetch({ seriesId: item.id });
      });
  }, [orderedSeries, utils]);

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
                <nav aria-label="Navegacao principal" className="flex flex-wrap items-center gap-2">
                  <Link href="#series" className="edu-nav-link">
                    Series
                  </Link>
                  {vestibularesLocked ? <LockedNavItem label="Vestibulares" /> : null}
                  {practicalLocked ? <LockedNavItem label="Vida pratica" /> : null}
                  {accessibilityLocked ? <LockedNavItem label="Accessibility" /> : null}
                </nav>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Abrir busca"
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
                  Plataforma de estudos completa para todas as areas fundamentais de aprendizado
                </h1>
                <p className="max-w-6xl text-lg leading-8 text-slate-300">
                  A plataforma open source para preparar voce para vestibulares, estudo guiado e
                  progresso visivel. Enquanto algumas trilhas ainda estao sendo preenchidas, elas
                  ficam marcadas como em breve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

      <main id="main-content" className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <section id="series" aria-labelledby="series-section-title">
              <div className="mb-6 space-y-4">
                <h2 id="series-section-title" className="font-display text-4xl text-white">
                  Series educacionais
                </h2>
                <p className="mt-2 text-slate-400">
                  Do 1 ano do Fundamental ate a 2 serie do Medio, as trilhas ficam trancadas ate o
                  banco estar completo. A 3 serie do Medio continua acessivel.
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
                          <SeriesCard
                            key={item.id}
                            name={item.name}
                            href={buildSubjectsHref(item.id)}
                            icon={seriesIcons[index % seriesIcons.length]}
                            label="Ano"
                            description={
                              isLockedSeriesName(item.name)
                                ? 'Esse ano sera liberado quando os conteudos estiverem completos no banco.'
                                : item.subjects?.length
                                  ? `${item.subjects.length} materias prontas para explorar.`
                                  : 'Trilha com materias, topicos e conteudos.'
                            }
                            locked={isLockedSeriesName(item.name)}
                          />
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
                          Ensino Medio
                        </h3>
                      </div>
                      <Badge variant="outline">{groupedSeries.medio.length} series</Badge>
                    </div>

                    {groupedSeries.medio.length ? (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {groupedSeries.medio.map((item, index) => (
                          <SeriesCard
                            key={item.id}
                            name={item.name}
                            href={buildSubjectsHref(item.id)}
                            icon={seriesIcons[(index + groupedSeries.fundamental.length) % seriesIcons.length]}
                            label="Serie"
                            description={
                              isLockedSeriesName(item.name)
                                ? 'Essa serie sera liberada quando os conteudos estiverem completos no banco.'
                                : item.subjects?.length
                                  ? `${item.subjects.length} materias prontas para explorar.`
                                  : 'Trilha com materias, topicos e conteudos.'
                            }
                            locked={isLockedSeriesName(item.name)}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="edu-panel p-6 text-sm text-muted-foreground">
                        Nenhuma serie do Ensino Medio encontrada.
                      </div>
                    )}
                  </section>
                </div>
              )}
            </section>

            <LockedModuleSection
              id="a11y-section-title"
              icon="A11Y"
              title="Recursos de Accessibility"
              description="Categorias, temas e topicos estruturados para alunos com necessidades especificas e estudo com mais contexto."
            />

            <LockedModuleSection
              id="practical-section-title"
              icon="VP"
              title="Vida pratica"
              description="Guias uteis sobre CNH, trabalho, consumo e direitos basicos para o dia a dia."
            />

            <section className="space-y-6" aria-labelledby="vestibulares-section-title">
              <div className="edu-panel overflow-hidden">
                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-7">
                  <div>
                    <h2 id="vestibulares-section-title" className="font-display text-4xl text-white">
                      Vestibulares
                    </h2>
                    <Badge variant="secondary" className="mt-3 gap-2">
                      <LockKeyhole className="h-3.5 w-3.5" />
                      {COMING_SOON_LABEL}
                    </Badge>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Essa area vai abrir quando as trilhas especificas estiverem completas.
                    </p>
                  </div>

                  <span className="edu-action pointer-events-none uppercase tracking-[0.12em] opacity-70">
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                    {COMING_SOON_LABEL}
                  </span>
                </div>
              </div>

              <div className="edu-home-card cursor-not-allowed opacity-80" aria-disabled="true">
                <div className="flex items-center gap-4">
                  <div className="edu-home-icon" aria-hidden="true">
                    VT
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-black text-white">Vestibulares trancados</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Vamos liberar essa area quando materias, topicos e conteudos estiverem prontos.
                    </p>
                  </div>
                  <LockKeyhole className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
