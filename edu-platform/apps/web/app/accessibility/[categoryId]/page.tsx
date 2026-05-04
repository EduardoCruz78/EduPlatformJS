'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, HandHeart } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function AccessibilityCategoryPage() {
  const params = useParams<{ categoryId: string }>();
  const categoryId = Number(params.categoryId);
  const { data: categories = [], isLoading } =
    trpc.accessibility.getCategories.useQuery();
  const category = categories.find((item) => item.id === categoryId);

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
          <p className="text-lg text-destructive">Categoria não encontrada.</p>
          <Link href="/accessibility" className="mt-6 inline-flex edu-nav-link">
            Voltar para acessibilidade
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <Link href="/accessibility" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Acessibilidade
        </Link>
        <Badge variant="outline">{category.themes?.length ?? 0} temas</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <HandHeart className="mr-2 h-4 w-4" />
          {category.name}
        </span>
        <h1 className="edu-section-title">Temas de apoio</h1>
        <p className="edu-lead">
          {category.description ||
            'Escolha um tema para abrir vídeos, artigos e materiais de apoio.'}
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {category.themes?.length ? (
          category.themes.map((theme) => (
            <Link
              key={theme.id}
              href={`/accessibility/${category.id}/${theme.id}`}
              className="edu-home-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-white">{theme.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {theme.content || 'Tema provisório com materiais de apoio.'}
                  </p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 text-primary" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-[rgba(168,124,29,0.22)] pt-4">
                <Badge variant="secondary">{theme.materials?.length ?? 0} materiais</Badge>
              </div>
            </Link>
          ))
        ) : (
          <div className="edu-panel p-8 text-center text-muted-foreground">
            Nenhum tema cadastrado nesta categoria.
          </div>
        )}
      </section>
    </div>
  );
}
