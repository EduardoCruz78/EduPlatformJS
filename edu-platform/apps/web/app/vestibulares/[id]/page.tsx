'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, BookOpen, FileText, LibraryBig } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function getVestibularContentHref(content: { pdfUrl?: string | null; link?: string | null }) {
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
      <div className="edu-shell">
        <div className="space-y-6">
          <Skeleton className="h-64 w-full rounded-[2.5rem]" />
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-72 w-full rounded-[2rem]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !vestibular) {
    return (
      <div className="edu-shell">
        <Card className="mx-auto max-w-3xl">
          <CardContent className="p-8 text-center text-destructive">
            Vestibular nao encontrado.
          </CardContent>
        </Card>
      </div>
    );
  }

  const sharedContents = contents.filter((content) => content.isShared).length;
  const exclusiveContents = contents.length - sharedContents;

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <div className="flex items-center gap-3">
          <span className="edu-brand">Vestibular</span>
          <span className="text-sm text-muted-foreground">{vestibular.name}</span>
        </div>
        <Link href="/vestibulares" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Voltar a lista
        </Link>
      </div>

      <section className="edu-hero space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">Vestibular</Badge>
          {vestibular.year ? <Badge variant="secondary">{vestibular.year}</Badge> : null}
          <Badge variant="secondary">{subjects.length} materias</Badge>
          <Badge variant="secondary">{contents.length} conteudos</Badge>
        </div>
        <h1 className="edu-section-title">{vestibular.name}</h1>
        <p className="edu-lead">
          {vestibular.description || 'Sem descricao adicional para este vestibular.'}
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Materias vinculadas</CardDescription>
            <CardTitle>{subjects.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Conteudos compartilhados</CardDescription>
            <CardTitle>{sharedContents}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Conteudos exclusivos</CardDescription>
            <CardTitle>{exclusiveContents}</CardTitle>
          </CardHeader>
        </Card>
      </section>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <LibraryBig className="h-5 w-5" />
              Materias
            </CardTitle>
            <CardDescription>{subjects.length} materia(s) vinculada(s)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {subjects.length ? (
              subjects.map((subject) => (
                <div key={subject.id} className="edu-subtle-card">
                  <p className="font-semibold text-foreground">{subject.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {subject.description || 'Sem descricao.'}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhuma materia vinculada.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <BookOpen className="h-5 w-5" />
              Topicos
            </CardTitle>
            <CardDescription>{topics.length} topico(s) cadastrados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {topics.length ? (
              topics.map((topic) => (
                <div key={topic.id} className="edu-subtle-card">
                  <p className="font-semibold text-foreground">{topic.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {topic.notes || 'Sem observacoes adicionais.'}
                  </p>
                  {topic.tags ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {topic.tags
                        .split(',')
                        .map((tag) => tag.trim())
                        .filter(Boolean)
                        .map((tag) => (
                          <Badge key={`${topic.id}-${tag}`} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum topico cadastrado.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-5 w-5" />
              Conteudos
            </CardTitle>
            <CardDescription>{contents.length} conteudo(s) disponiveis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contents.length ? (
              contents.map((content) => {
                const href = getVestibularContentHref(content);

                return (
                  <div key={content.id} className="edu-subtle-card">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-foreground">{content.title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {content.type || 'Material'}
                          {content.isShared ? ' - compartilhado' : ' - exclusivo'}
                        </p>
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="edu-nav-link px-3 py-2 text-xs"
                        >
                          Abrir
                        </a>
                      ) : null}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum conteudo disponivel.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
