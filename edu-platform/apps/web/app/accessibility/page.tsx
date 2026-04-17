'use client';

import Link from 'next/link';
import { Ear, Sparkles } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccessibilityPage() {
  const { data: categories = [], isLoading, error } =
    trpc.accessibility.getCategories.useQuery();

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">Accessibility</span>
          <span className="text-sm text-muted-foreground">
            categorias, topicos e orientacoes conectadas
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="edu-nav-link">
            Voltar ao inicio
          </Link>
          <Link href="/login" className="edu-nav-link">
            Entrar
          </Link>
        </div>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <Ear className="mr-2 h-4 w-4" />
          Modulo publico
        </span>
        <h1 className="edu-section-title">
          Acessibilidade organizada como conhecimento vivo, nao como lista solta.
        </h1>
        <p className="edu-lead">
          O conteudo esta estruturado por categorias, temas e topicos
          relacionados para facilitar consulta, revisao e administracao.
        </p>
      </section>

      <section className="mt-8">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-72 w-full rounded-[2rem]" />
            ))}
          </div>
        ) : error ? (
          <Card>
            <CardContent className="p-8 text-center text-destructive">
              Erro ao carregar accessibility: {error.message}
            </CardContent>
          </Card>
        ) : categories.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              Nenhuma categoria cadastrada ainda.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-3">
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.themes?.length ?? 0} temas</Badge>
                  </CardTitle>
                  <CardDescription>
                    {category.description || 'Categoria sem descricao adicional.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Topicos relacionados
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {category.topics?.length ? (
                        category.topics.map((topic) => (
                          <Badge key={`${category.id}-${topic.id}`} variant="outline">
                            {topic.name}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          Nenhum topico vinculado.
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      <Sparkles className="h-4 w-4" />
                      Temas e orientacoes
                    </h2>
                    <div className="space-y-3">
                      {category.themes?.length ? (
                        category.themes.map((theme) => (
                          <div
                            key={theme.id}
                            className="edu-subtle-card"
                          >
                            <p className="font-semibold text-foreground">{theme.title}</p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {theme.content || 'Sem conteudo detalhado para este tema.'}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Nenhum tema cadastrado.
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
