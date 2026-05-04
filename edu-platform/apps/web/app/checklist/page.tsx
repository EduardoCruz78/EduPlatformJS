'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { CheckCircle2, ExternalLink, Trash2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function getContentHref(content?: {
  videoUrl?: string | null;
  pdfUrl?: string | null;
  link?: string | null;
} | null) {
  return content?.videoUrl || content?.pdfUrl || content?.link || null;
}

export default function ChecklistPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const utils = trpc.useUtils();

  const { data: checklist = [], isLoading } = trpc.checklist.findByUserId.useQuery(undefined, {
    enabled: status === 'authenticated',
  });

  const deleteChecklist = trpc.checklist.delete.useMutation({
    onSuccess: async () => {
      await utils.checklist.findByUserId.invalidate();
    },
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const latestCompletion = useMemo(() => {
    if (checklist.length === 0) {
      return null;
    }

    const latést = [...checklist].sort(
      (left, right) =>
        new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
    )[0];

    return new Date(latést.createdAt).toLocaleDateString('pt-BR');
  }, [checklist]);

  if (status === 'loading' || isLoading) {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="edu-shell">
      <div className="space-y-8">
        <div className="edu-topbar">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="outline" className="gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Checklist
              </Badge>
              <Badge variant="secondary">{checklist.length} item(ns)</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground">Meu checklist</h1>
            <p className="mt-2 text-muted-foreground">
              Acompanhe o que já foi concluído e retome matériais com um clique.
            </p>
          </div>
          <Link href="/dashboard" className="edu-nav-link">
            Voltar ao dashboard
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="card-interactive">
            <CardHeader>
              <CardDescription>Concluidos</CardDescription>
              <CardTitle>{checklist.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="card-interactive">
            <CardHeader>
              <CardDescription>Ultima marcação</CardDescription>
              <CardTitle>{latestCompletion ?? 'Sem historico'}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="card-interactive">
            <CardHeader>
              <CardDescription>Proximo passo</CardDescription>
              <CardTitle>Retomar revisoes</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {checklist.length === 0 ? (
          <Card>
            <CardContent className="space-y-4 p-8 text-center text-muted-foreground">
              <p>Você ainda não marcou nenhum conteúdo como concluído.</p>
              <div>
                <Link href="/contents">
                  <Button variant="outline">Explorar conteúdos</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {checklist.map((item) => {
              const href = getContentHref(item.content);

              return (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.content?.title || `Conteúdo #${item.contentId}`}</CardTitle>
                    <CardDescription>
                      {item.content?.description || 'Conteúdo concluído pelo usuario.'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{item.content?.type || 'Matérial'}</Badge>
                      <span>
                        Concluido em {new Date(item.createdAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="edu-nav-link"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Abrir matérial
                        </a>
                      ) : null}
                      <Button
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        onClick={() => deleteChecklist.mutate(item.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remover do checklist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
