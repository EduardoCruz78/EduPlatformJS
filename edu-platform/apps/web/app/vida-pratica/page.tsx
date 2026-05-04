'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function PracticalLifePage() {
  const { data: categories = [], isLoading } = trpc.practical.findPublicCategories.useQuery();

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
          <Compass className="mr-2 h-4 w-4" />
          Guias para o cotidiano
        </span>
        <h1 className="edu-section-title">Vida prática</h1>
        <p className="edu-lead">
          Conteúdos provisórios e funcionais sobre documentos, trabalho, consumo, finanças e
          organização pessoal.
        </p>
      </section>

      <section className="mt-8">
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-44 rounded-[2rem]" />
            ))}
          </div>
        ) : categories.length === 0 ? (
          <div className="edu-panel p-8 text-center text-muted-foreground">
            Nenhuma categoria encontrada. Execute o seed provisório para preencher a base.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/vida-pratica/${category.slug}`}
                className="edu-home-card"
              >
                <div className="edu-home-icon mb-5" aria-hidden="true">
                  {category.icon || 'VP'}
                </div>
                <h2 className="text-2xl font-black text-white">{category.name}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {category.description || 'Guias provisórios para consulta rápida.'}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
                  <Badge variant="secondary">{category.guides?.length ?? 0} guias</Badge>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
