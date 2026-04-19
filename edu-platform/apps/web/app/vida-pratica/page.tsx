'use client';

import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CarFront, ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

function getCategoryIcon(icon?: string | null) {
  if (icon === 'CNH') {
    return <CarFront className="h-5 w-5" />;
  }

  if (icon === 'CLT') {
    return <BriefcaseBusiness className="h-5 w-5" />;
  }

  return <ShieldCheck className="h-5 w-5" />;
}

export default function PracticalLifePage() {
  const { data: categories = [], isLoading, error } = trpc.practical.findPublicCategories.useQuery();

  const totalGuides = categories.reduce(
    (total, category) => total + (category.guides?.length ?? 0),
    0
  );

  const totalLinks = categories.reduce(
    (total, category) =>
      total +
      (category.guides?.reduce(
        (guideTotal, guide) => guideTotal + (guide.links?.length ?? 0),
        0
      ) ?? 0),
    0
  );

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">Vida pratica</span>
          <span className="text-sm text-muted-foreground">
            guias uteis para trabalho, consumo, documentos e cidadania
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="edu-nav-link">
            Voltar ao inicio
          </Link>
          <Link href="/dashboard" className="edu-nav-link">
            Meu painel
          </Link>
        </div>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">O que a escola nao te ensina mas deveria</span>
        <h1 className="edu-section-title">
          Vida pratica com explicacao clara para problemas reais do dia a dia.
        </h1>
        <p className="edu-lead">
          Aqui voce encontra guias diretos sobre CNH, autoescola, direitos trabalhistas,
          defesa do consumidor e outros assuntos que ajudam a tomar decisoes com mais
          seguranca.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Categorias publicadas</CardDescription>
            <CardTitle>{categories.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Guias disponiveis</CardDescription>
            <CardTitle>{totalGuides}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Links uteis</CardDescription>
            <CardTitle>{totalLinks}</CardTitle>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-8">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-72 w-full rounded-[2rem]" />
            ))}
          </div>
        ) : error ? (
          <Card>
            <CardContent className="p-8 text-center text-destructive">
              Erro ao carregar vida pratica: {error.message}
            </CardContent>
          </Card>
        ) : categories.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              Nenhuma categoria publicada ainda.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} href={`/vida-pratica/${category.slug}`}>
                <Card className="card-interactive h-full">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="edu-home-icon" aria-hidden="true">
                        {getCategoryIcon(category.icon)}
                      </div>
                      <Badge variant="secondary">{category.guides?.length ?? 0} guias</Badge>
                    </div>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>
                      {category.description || 'Categoria sem descricao adicional.'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {(category.guides ?? []).slice(0, 3).map((guide) => (
                        <div key={guide.id} className="edu-subtle-card">
                          <p className="font-semibold text-foreground">{guide.title}</p>
                          <p className="mt-2 text-sm text-muted-foreground">{guide.summary}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between font-semibold uppercase tracking-[0.16em] text-foreground">
                      <span>Explorar categoria</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
