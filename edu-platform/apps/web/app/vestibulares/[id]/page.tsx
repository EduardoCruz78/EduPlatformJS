'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function getVestibularContentHref(
  content: { pdfUrl?: string | null; link?: string | null }
) {
  return content.pdfUrl || content.link || null;
}

export default function VestibularDetailPage() {
  const params = useParams<{ id: string }>();
  const vestibularId = Number(params.id);

  const { data: vestibular, isLoading, error } = trpc.vestibular.findById.useQuery(
    vestibularId,
    { enabled: vestibularId > 0 }
  );
  const { data: subjects = [] } = trpc.vestibular.findSubjects.useQuery(
    { vestibularId },
    { enabled: vestibularId > 0 }
  );
  const { data: topics = [] } = trpc.vestibular.findTopics.useQuery(
    { vestibularId },
    { enabled: vestibularId > 0 }
  );
  const { data: contents = [] } = trpc.vestibular.findContents.useQuery(
    { vestibularId },
    { enabled: vestibularId > 0 }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <Skeleton className="h-16 w-full rounded-3xl" />
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-64 w-full rounded-3xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !vestibular) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="p-8 text-center text-destructive">
              Vestibular não encontrado.
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-start justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <Badge variant="outline">Vestibular</Badge>
              {vestibular.year ? <Badge variant="secondary">{vestibular.year}</Badge> : null}
            </div>
            <h1 className="text-4xl font-bold text-foreground">{vestibular.name}</h1>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              {vestibular.description || 'Sem descrição adicional para este vestibular.'}
            </p>
          </div>
          <Link href="/vestibulares" className="text-sm font-medium text-primary hover:text-primary/80">
            Voltar à lista
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Matérias</CardTitle>
              <CardDescription>{subjects.length} matéria(s) vinculada(s)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {subjects.length ? (
                subjects.map((subject) => (
                  <div key={subject.id} className="rounded-2xl border border-border p-3">
                    <p className="font-medium text-foreground">{subject.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {subject.description || 'Sem descrição.'}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Nenhuma matéria vinculada.</p>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Tópicos</CardTitle>
              <CardDescription>{topics.length} tópico(s) cadastrados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {topics.length ? (
                topics.map((topic) => (
                  <div key={topic.id} className="rounded-2xl border border-border p-3">
                    <p className="font-medium text-foreground">{topic.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {topic.notes || 'Sem observações adicionais.'}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Nenhum tópico cadastrado.</p>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Conteúdos</CardTitle>
              <CardDescription>{contents.length} conteúdo(s) disponíveis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {contents.length ? (
                contents.map((content) => {
                  const href = getVestibularContentHref(content);

                  return (
                    <div key={content.id} className="rounded-2xl border border-border p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-foreground">{content.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {content.type || 'Material'}
                            {content.isShared ? ' • compartilhado' : ' • exclusivo'}
                          </p>
                        </div>
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-primary hover:text-primary/80"
                          >
                            Abrir
                          </a>
                        ) : null}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-muted-foreground">Nenhum conteúdo disponível.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
