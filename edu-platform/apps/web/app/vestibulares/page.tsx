'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

export default function VestibularesPage() {
  const { data: vestibulares = [], isLoading } = trpc.vestibular.find.useQuery();

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <Link href="/" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Início
        </Link>
        <Badge variant="outline">{vestibulares.length} vestibulares</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <GraduationCap className="mr-2 h-4 w-4" />
          Preparação para provas
        </span>
        <h1 className="edu-section-title">Vestibulares</h1>
        <p className="edu-lead">
          Trilhas provisórias com matérias, tópicos e conteúdos de apoio para estudo orientado.
        </p>
      </section>

      <section className="mt-8">
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-44 rounded-[2rem]" />
            ))}
          </div>
        ) : vestibulares.length === 0 ? (
          <div className="edu-panel p-8 text-center text-muted-foreground">
            Nenhum vestibular encontrado. Execute o seed provisório para preencher a base.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {vestibulares.map((vestibular) => (
              <Link
                key={vestibular.id}
                href={`/vestibulares/${vestibular.id}`}
                className="edu-home-card"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <Badge variant="secondary">{vestibular.year ?? 'Atual'}</Badge>
                    <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">{vestibular.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {vestibular.description || 'Trilha provisória para estudo.'}
                    </p>
                  </div>
                  <ArrowRight className="mt-2 h-5 w-5 text-primary" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
