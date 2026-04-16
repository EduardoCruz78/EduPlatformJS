'use client';

import Link from 'next/link';
import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccessibilityPage() {
  const { data: categories = [], isLoading, error } =
    trpc.accessibility.getCategories.useQuery();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Accessibility</h1>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              Categorias, temas e tópicos organizados para apoiar diferentes necessidades de
              acessibilidade.
            </p>
          </div>
          <Link href="/" className="text-sm font-medium text-primary hover:text-primary/80">
            Voltar ao início
          </Link>
        </header>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-72 w-full rounded-3xl" />
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
              <Card key={category.id} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-3">
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.themes?.length ?? 0} temas</Badge>
                  </CardTitle>
                  <CardDescription>
                    {category.description || 'Categoria sem descrição adicional.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Tópicos relacionados
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
                          Nenhum tópico vinculado.
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Temas e orientações
                    </h2>
                    <div className="space-y-3">
                      {category.themes?.length ? (
                        category.themes.map((theme) => (
                          <div
                            key={theme.id}
                            className="rounded-2xl border border-border bg-muted/40 p-4"
                          >
                            <p className="font-medium text-foreground">{theme.title}</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {theme.content || 'Sem conteúdo detalhado para este tema.'}
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
      </div>
    </div>
  );
}
