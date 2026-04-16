'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { CheckCircle2, Trash2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

  if (status === 'loading' || isLoading) {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="flex items-start justify-between gap-6">
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
              Acompanhe os conteúdos que você já concluiu.
            </p>
          </div>
          <Link href="/dashboard" className="text-sm font-medium text-primary hover:text-primary/80">
            Voltar ao dashboard
          </Link>
        </header>

        {checklist.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              Você ainda não marcou nenhum conteúdo como concluído.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {checklist.map((item) => (
              <Card key={item.id} className="rounded-3xl">
                <CardHeader>
                  <CardTitle>{item.content?.title || `Conteúdo #${item.contentId}`}</CardTitle>
                  <CardDescription>
                    {item.content?.description || 'Conteúdo concluído pelo usuário.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{item.content?.type || 'Material'}</Badge>
                    <span>Concluído em {new Date(item.createdAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={() => deleteChecklist.mutate(item.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remover do checklist
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
