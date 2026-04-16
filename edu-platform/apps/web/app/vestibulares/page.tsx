'use client';

import Link from 'next/link';
import { trpc } from '@/lib/trpc';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function VestibularesPage() {
  const { data: vestibulares = [], isLoading, error } = trpc.vestibular.find.useQuery();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Vestibulares</h1>
            <p className="mt-2 text-muted-foreground">
              Explore vestibulares, matérias relacionadas e conteúdos exclusivos.
            </p>
          </div>
          <Link href="/" className="text-sm font-medium text-primary hover:text-primary/80">
            Voltar ao início
          </Link>
        </header>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-48 w-full rounded-3xl" />
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
                <Card className="h-full rounded-3xl transition hover:border-primary/40 hover:bg-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-3">
                      <span>{vestibular.name}</span>
                      {vestibular.year ? <Badge variant="secondary">{vestibular.year}</Badge> : null}
                    </CardTitle>
                    <CardDescription>
                      {vestibular.description || 'Vestibular sem descrição adicional.'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 text-sm text-muted-foreground">
                    <div>Matérias: {vestibular.vestibularSubjects?.length ?? 0}</div>
                    <div>Tópicos: {vestibular.vestibularTopics?.length ?? 0}</div>
                    <div>Conteúdos: {vestibular.vestibularContents?.length ?? 0}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
