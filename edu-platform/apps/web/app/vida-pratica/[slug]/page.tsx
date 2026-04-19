'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Bookmark, Link2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function PracticalCategoryPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const { data: category, isLoading, error } = trpc.practical.findCategoryBySlug.useQuery(
    { slug },
    { enabled: Boolean(slug) }
  );

  if (isLoading) {
    return (
      <div className="edu-shell">
        <div className="space-y-6">
          <Skeleton className="h-64 w-full rounded-[2.5rem]" />
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton key={index} className="h-64 w-full rounded-[2rem]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-3xl">
          <CardContent className="p-8 text-center text-destructive">
            Categoria de vida pratica nao encontrada.
          </CardContent>
        </Card>
      </div>
    );
  }

  const linksCount = category.guides?.reduce(
    (total, guide) => total + (guide.links?.length ?? 0),
    0
  ) ?? 0;

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">Vida pratica</span>
          <span className="text-sm text-muted-foreground">{category.name}</span>
        </div>
        <Link href="/vida-pratica" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Voltar para categorias
        </Link>
      </div>

      <section className="edu-hero space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">{category.slug}</Badge>
          <Badge variant="secondary">{category.guides?.length ?? 0} guias</Badge>
          <Badge variant="secondary">{linksCount} links uteis</Badge>
        </div>
        <h1 className="edu-section-title">{category.name}</h1>
        <p className="edu-lead">
          {category.description || 'Sem descricao adicional para esta categoria.'}
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {(category.guides ?? []).length ? (
          category.guides?.map((guide) => (
            <Link key={guide.id} href={`/vida-pratica/guias/${guide.slug}`}>
              <Card className="card-interactive h-full">
                <CardHeader>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <Badge variant="outline">
                      <Bookmark className="mr-1 h-3.5 w-3.5" />
                      Guia
                    </Badge>
                    <Badge variant="secondary">{guide.links?.length ?? 0} links</Badge>
                  </div>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="edu-subtle-card">
                    <p className="text-sm leading-7 text-muted-foreground">
                      {guide.content.slice(0, 180)}
                      {guide.content.length > 180 ? '...' : ''}
                    </p>
                  </div>
                  <div className="flex items-center justify-between font-semibold uppercase tracking-[0.16em] text-foreground">
                    <span>Ler guia completo</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  {(guide.links?.length ?? 0) > 0 ? (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Link2 className="h-4 w-4" />
                      Links oficiais para consulta rapida
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <Card className="md:col-span-2">
            <CardContent className="p-8 text-center text-muted-foreground">
              Esta categoria ainda nao tem guias publicados.
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
