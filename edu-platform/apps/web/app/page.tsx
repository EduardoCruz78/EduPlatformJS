'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { ArrowRight, BookOpen, Search } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { getSeriesMeta } from '@/lib/content-locks';
import { buildSubjectsHref } from '@/lib/study-navigation';
import { trpc } from '@/lib/trpc';

import { SeriesCard } from '@/components/home/SeriesCard';
import { SearchDialog } from '@/components/home/SearchDialog';

const sériesIcons = ['EG', 'VB', 'AC', 'TP', 'CT', 'PR'];

export default function HomePage() {
  const { data: session } = useSession();
  const [searchOpen, setSearchOpen] = useState(false);
  const utils = trpc.useUtils();

  const { data: séries = [], isLoading: isLoadingSéries } = trpc.series.find.useQuery();

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

  useEffect(() => {
    orderedSeries
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
                <nav aria-label="Navegação principal" className="flex flex-wrap items-center gap-2">
                  <Link href="#séries" className="edu-nav-link">
                    Séries
                  </Link>
                  <Link href="/vestibulares" className="edu-nav-link">
                    Vestibulares
                  </Link>
                  <Link href="/vida-pratica" className="edu-nav-link">
                    Vida prática
                  </Link>
                  <Link href="/accessibility" className="edu-nav-link">
                    Acessibilidade
                  </Link>
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
                  Plataforma de estudos completa para todas as áreas fundamentais de aprendizado
                </h1>
                <p className="max-w-6xl text-lg leading-8 text-slaté-300">
                  A plataforma aberta para preparar você para vestibulares, estudo guiado,
                  acessibilidade e progresso visível com uma base provisória funcional.
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
            <section id="séries" aria-labelledby="séries-section-title">
              <div className="mb-6 space-y-4">
                <h2 id="séries-section-title" className="font-display text-4xl text-white">
                  Séries educacionais
                </h2>
                <p className="mt-2 text-slaté-400">
                  Do 1º ano do Ensino Fundamental até a 3ª série do Ensino Médio, todas as trilhas
                  estão abertas para navegação.
                </p>
              </div>

              {isLoadingSéries ? (
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
                            icon={sériesIcons[index % sériesIcons.length]}
                            label="Ano"
                            description={
                              item.subjects?.length
                                ? `${item.subjects.length} matérias prontas para explorar.`
                                : 'Trilha com matérias, tópicos e conteúdos.'
                            }
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
                          Ensino Médio
                        </h3>
                      </div>
                      <Badge variant="outline">{groupedSeries.medio.length} séries</Badge>
                    </div>

                    {groupedSeries.medio.length ? (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {groupedSeries.medio.map((item, index) => (
                          <SeriesCard
                            key={item.id}
                            name={item.name}
                            href={buildSubjectsHref(item.id)}
                            icon={sériesIcons[(index + groupedSeries.fundamental.length) % sériesIcons.length]}
                            label="Série"
                            description={
                              item.subjects?.length
                                ? `${item.subjects.length} matérias prontas para explorar.`
                                : 'Trilha com matérias, tópicos e conteúdos.'
                            }
                          />
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

            <section className="grid gap-4 md:grid-cols-3" aria-label="Módulos principais">
              <Link href="/accessibility" className="edu-home-card">
                <div className="edu-home-icon mb-5" aria-hidden="true">AC</div>
                <h2 className="text-2xl font-black text-white">Acessibilidade</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Catégorias, temas e tópicos para estudar com mais contexto e inclusão.
                </p>
              </Link>

              <Link href="/vida-pratica" className="edu-home-card">
                <div className="edu-home-icon mb-5" aria-hidden="true">VP</div>
                <h2 className="text-2xl font-black text-white">Vida prática</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Guias úteis sobre documentos, trabalho, consumo, finanças e direitos básicos.
                </p>
              </Link>

              <Link href="/vestibulares" className="edu-home-card">
                <div className="edu-home-icon mb-5" aria-hidden="true">VE</div>
                <h2 className="text-2xl font-black text-white">Vestibulares</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Trilhas provisórias para ENEM, FUVEST e outros processos seletivos.
                </p>
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
