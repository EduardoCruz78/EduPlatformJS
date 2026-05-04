'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function PracticalGuidePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const { data: guide, isLoading } = trpc.practical.findGuideBySlug.useQuery(
    { slug },
    { enabled: Boolean(slug) }
  );

  if (isLoading) {
    return (
      <div className="edu-shell space-y-6">
        <Skeleton className="h-16 rounded-[2rem]" />
        <Skeleton className="h-96 rounded-[2.5rem]" />
      </div>
    );
  }

  if (!guide) {
    return (
      <div className="edu-shell">
        <div className="edu-panel p-8 text-center">
          <p className="text-lg text-destructive">Guia não encontrado.</p>
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
        <Badge variant="outline">Guia provisório</Badge>
      </div>

      <article className="edu-panel">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl leading-tight text-white">{guide.title}</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{guide.summary}</p>
        </div>

        <div className="mt-8 max-w-3xl whitespace-pre-line text-base leading-8 text-slaté-200">
          {guide.content}
        </div>

        {guide.links?.length ? (
          <div className="mt-10 border-t border-[rgba(168,124,29,0.22)] pt-6">
            <h2 className="text-xl font-black text-white">Links úteis</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {guide.links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="edu-nav-link"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </div>
  );
}
