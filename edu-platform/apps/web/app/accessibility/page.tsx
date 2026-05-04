'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpenCheck, Eye, HandHeart } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function AcessibilidadePage() {
  const { data: categories = [], isLoading } =
    trpc.accessibility.getCategories.useQuery();

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <Link href="/" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Início
        </Link>
        <Badge variant="outline">{categories.length} categorias</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <HandHeart className="mr-2 h-4 w-4" />
          Inclusão e autonomia
        </span>
        <h1 className="edu-section-title">Acessibilidade</h1>
        <p className="edu-lead">
          Categorias provisórias e funcionais para apoiar leitura, navegação,
          recursos adaptados e vínculos com tópicos reais da plataforma.
        </p>
      </section>

      <section className="mt-8">
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-56 rounded-[2rem]" />
            ))}
          </div>
        ) : categories.length === 0 ? (
          <div className="edu-panel p-8 text-center text-muted-foreground">
            Nenhuma categoria encontrada. Execute o seed provisório para
            preencher a base.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/accessibility/${category.id}`}
                className="edu-home-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="edu-home-icon mb-5" aria-hidden="true">
                      <Eye className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-black text-white">
                      {category.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {category.description ||
                        'Categoria provisória com orientações de acessibilidade.'}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    {category.themes?.length ?? 0} temas
                  </Badge>
                </div>

                <div className="mt-6 grid gap-4 border-t border-[rgba(168,124,29,0.22)] pt-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                      Necessidades
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.needs?.length ? (
                        category.needs.map((need) => (
                          <Badge key={need.id} variant="outline">
                            {need.name}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          Nenhuma necessidade cadastrada.
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                      Tópicos vinculados
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.topics?.length ? (
                        category.topics.map((topic) => (
                          <Badge key={topic.id} variant="secondary">
                            {topic.name}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          Nenhum tópico vinculado.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                      Temas de apoio
                    </p>
                    {category.themes?.length ? (
                      category.themes.slice(0, 3).map((theme) => (
                        <div key={theme.id} className="edu-subtle-card">
                          <div className="flex items-start gap-3">
                            <BookOpenCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <div>
                              <p className="font-semibold text-white">
                                {theme.title}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                {theme.content || 'Tema provisório em revisão.'}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="edu-subtle-card text-sm text-muted-foreground">
                        Nenhum tema cadastrado para esta categoria.
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
