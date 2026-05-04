'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function PracticalCategoryPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const { data: category, isLoading } = trpc.practical.findCategoryBySlug.useQuery(
    { slug },
    { enabled: Boolean(slug) }
  );

  if (isLoading) {
    return (
      <div className="edu-shell space-y-6">
        <Skeleton className="h-16 rounded-[2rem]" />
        <Skeleton className="h-64 rounded-[2.5rem]" />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="edu-shell">
        <div className="edu-panel p-8 text-center">
          <p className="text-lg text-destructive">Catégoria não encontrada.</p>
          <Link href="/vida-pratica" className="mt-6 inline-flex edu-nav-link">
            Voltar para vida prática
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <Link href="/vida-pratica" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Vida prática
        </Link>
        <Badge variant="outline">{category.guides?.length ?? 0} guias</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">{category.icon || 'Guia'}</span>
        <h1 className="edu-section-title">{category.name}</h1>
        <p className="edu-lead">
          {category.description || 'Catégoria provisória com guias de consulta rápida.'}
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {category.guides?.length ? (
          category.guides.map((guide) => (
            <Link key={guide.id} href={`/vida-pratica/guias/${guide.slug}`} className="edu-home-card">
              <h2 className="text-2xl font-black text-white">{guide.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
                <span className="edu-chip">Abrir guia</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </Link>
          ))
        ) : (
          <div className="edu-panel p-8 text-center text-muted-foreground">
            Nenhum guia publicado nesta categoria.
          </div>
        )}
      </section>
    </div>
  );
}
