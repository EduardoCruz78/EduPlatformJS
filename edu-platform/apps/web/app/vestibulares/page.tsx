'use client';

import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function VestibularesPage() {
  const { data: vestibulares = [], isLoading, error } = trpc.vestibular.find.useQuery();

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">Vestibulares</span>
          <span className="text-sm text-muted-foreground">
            trilhas especiais, materias relacionadas e conteudos dedicados
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="edu-nav-link">
            Voltar ao inicio
          </Link>
          <Link href="/login" className="edu-nav-link">
            Entrar
          </Link>
        </div>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">
          <GraduationCap className="mr-2 h-4 w-4" />
          Preparacao orientada
        </span>
        <h1 className="edu-section-title">
          Escolha um vestibular e entre numa trilha mais especifica de estudo.
        </h1>
        <p className="edu-lead">
          Cada vestibular concentra materias, topicos e materiais exclusivos ou
          compartilhados, com leitura clara e navegação direta.
        </p>
      </section>

      <section className="mt-8">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-56 w-full rounded-[2rem]" />
            ))}
          </div>
        ) : error ? (
          <Card>
            <CardContent className="p-8 text-center text-destructive">
              Erro ao carregar vestibulares: {error.message}
            </CardContent>
          </Card>
        ) : vestibulares.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              Nenhum vestibular cadastrado.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {vestibulares.map((vestibular) => (
              <Link key={vestibular.id} href={`/vestibulares/${vestibular.id}`}>
                <Card className="card-interactive h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-3">
                      <span>{vestibular.name}</span>
                      {vestibular.year ? <Badge variant="secondary">{vestibular.year}</Badge> : null}
                    </CardTitle>
                    <CardDescription>
                      {vestibular.description || 'Vestibular sem descricao adicional.'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="edu-subtle-card rounded-[1.25rem] p-3">
                        Materias
                        <p className="mt-2 text-xl font-display text-foreground">
                          {vestibular.vestibularSubjects?.length ?? 0}
                        </p>
                      </div>
                      <div className="edu-subtle-card rounded-[1.25rem] p-3">
                        Topicos
                        <p className="mt-2 text-xl font-display text-foreground">
                          {vestibular.vestibularTopics?.length ?? 0}
                        </p>
                      </div>
                      <div className="edu-subtle-card rounded-[1.25rem] p-3">
                        Conteudos
                        <p className="mt-2 text-xl font-display text-foreground">
                          {vestibular.vestibularContents?.length ?? 0}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between font-semibold uppercase tracking-[0.16em] text-foreground">
                      <span>Abrir trilha</span>
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
