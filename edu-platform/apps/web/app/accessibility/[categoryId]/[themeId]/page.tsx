'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, FileText, PlayCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

function getMaterialIcon(type: string | null | undefined) {
  return type === 'VIDEO' ? (
    <PlayCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
  ) : (
    <FileText className="mt-1 h-4 w-4 shrink-0 text-primary" />
  );
}

export default function AccessibilityThemePage() {
  const params = useParams<{ categoryId: string; themeId: string }>();
  const categoryId = Number(params.categoryId);
  const themeId = Number(params.themeId);
  const { data: categories = [], isLoading } =
    trpc.accessibility.getCategories.useQuery();
  const category = categories.find((item) => item.id === categoryId);
  const theme = category?.themes?.find((item) => item.id === themeId);

  if (isLoading) {
    return (
      <div className="edu-shell space-y-6">
        <Skeleton className="h-16 rounded-[2rem]" />
        <Skeleton className="h-64 rounded-[2.5rem]" />
      </div>
    );
  }

  if (!category || !theme) {
    return (
      <div className="edu-shell">
        <div className="edu-panel p-8 text-center">
          <p className="text-lg text-destructive">Tema não encontrado.</p>
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
        <Link href={`/accessibility/${category.id}`} className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          {category.name}
        </Link>
        <Badge variant="outline">{theme.materials?.length ?? 0} materiais</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">{category.name}</span>
        <h1 className="edu-section-title">{theme.title}</h1>
        <p className="edu-lead">
          {theme.content || 'Materiais provisórios para apoiar este tema de acessibilidade.'}
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {theme.materials?.length ? (
          theme.materials.map((material) => (
            <a
              key={material.id}
              href={material.link}
              target="_blank"
              rel="noreferrer"
              className="edu-home-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {getMaterialIcon(material.type)}
                  <div>
                    <Badge variant="secondary">{material.type}</Badge>
                    <h2 className="mt-3 text-2xl font-black text-white">
                      {material.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {material.summary}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {material.content}
                    </p>
                  </div>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-primary" />
              </div>
            </a>
          ))
        ) : (
          <div className="edu-panel p-8 text-center text-muted-foreground">
            Nenhum material cadastrado para este tema.
          </div>
        )}
      </section>
    </div>
  );
}
