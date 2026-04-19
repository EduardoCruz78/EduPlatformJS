'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, Link2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function PracticalGuidePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const { data: guide, isLoading, error } = trpc.practical.findGuideBySlug.useQuery(
    { slug },
    { enabled: Boolean(slug) }
  );

  if (isLoading) {
    return (
      <div className="edu-shell">
        <div className="space-y-6">
          <Skeleton className="h-64 w-full rounded-[2.5rem]" />
          <Skeleton className="h-96 w-full rounded-[2rem]" />
        </div>
      </div>
    );
  }

  if (error || !guide) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-3xl">
          <CardContent className="p-8 text-center text-destructive">
            Guia de vida pratica nao encontrado.
          </CardContent>
        </Card>
      </div>
    );
  }

  const paragraphs = guide.content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">Guia</span>
          <span className="text-sm text-muted-foreground">{guide.title}</span>
        </div>
        <Link href="/vida-pratica" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Voltar para vida pratica
        </Link>
      </div>

      <section className="edu-hero space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">{guide.slug}</Badge>
          <Badge variant="secondary">{guide.links?.length ?? 0} links uteis</Badge>
        </div>
        <h1 className="edu-section-title">{guide.title}</h1>
        <p className="edu-lead">{guide.summary}</p>
      </section>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Leitura guiada</CardTitle>
            <CardDescription>
              Informacao objetiva para consulta rapida e tomada de decisao com mais contexto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="edu-subtle-card">
                <p className="whitespace-pre-line text-sm leading-8 text-slate-100">
                  {paragraph}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Link2 className="h-5 w-5" />
                Links uteis
              </CardTitle>
              <CardDescription>
                Acesse fontes oficiais e servicos relacionados ao tema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {(guide.links ?? []).length ? (
                guide.links?.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="edu-subtle-card block transition hover:border-primary/60"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-foreground">{link.label}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{link.url}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                  </a>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Nenhum link util cadastrado para este guia.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proximo passo</CardTitle>
              <CardDescription>
                Continue explorando outros guias praticos para a vida adulta.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/vida-pratica" className="edu-action w-full">
                Ver outras categorias
              </Link>
              <Link href="/dashboard" className="edu-action-outline w-full">
                Voltar ao painel
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
