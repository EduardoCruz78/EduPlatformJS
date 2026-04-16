'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import type { Content, Topic } from '@edu-platform/core';
import Link from 'next/link';
import { Edit2, Loader2, Plus, Trash2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function getTypeLabel(type: Content['type']) {
  switch (type) {
    case 'VIDEO':
      return 'Video';
    case 'PDF':
      return 'PDF';
    case 'ARTICLE':
      return 'Artigo';
    default:
      return type;
  }
}

export default function AdminContentsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { data: contents, isLoading, refetch } = trpc.content.findAll.useQuery();
  const { data: topics } = trpc.topic.findAll.useQuery();

  const deleteContentMutation = trpc.content.delete.useMutation({
    onSuccess: () => {
      setDeleteId(null);
      setIsDeleting(false);
      refetch();
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao deletar conteudo';

      alert(`Erro ao deletar: ${message}`);
      setIsDeleting(false);
    },
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const handleDelete = async () => {
    if (!deleteId) {
      return;
    }

    setIsDeleting(true);
    await deleteContentMutation.mutateAsync(deleteId);
  };

  const getTopicName = (topicId: number) =>
    topics?.find((topic: Topic) => topic.id === topicId)?.name ?? `Topico #${topicId}`;

  if (status === 'loading') {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Conteudos</h1>
          <p className="mt-2 text-muted-foreground">
            Gerencie todos os conteudos cadastrados no sistema
          </p>
        </div>
        <Link href="/admin/contents/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Conteudo
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Conteudos</CardTitle>
          <CardDescription>{contents?.length || 0} conteudos cadastrados</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-12 w-full" />
              ))}
            </div>
          ) : contents && contents.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Titulo</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Topico</TableHead>
                    <TableHead className="text-right">Acoes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contents.map((content: Content) => (
                    <TableRow key={content.id}>
                      <TableCell className="font-mono text-sm">{content.id}</TableCell>
                      <TableCell className="font-medium">{content.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{getTypeLabel(content.type)}</Badge>
                      </TableCell>
                      <TableCell>{getTopicName(content.topicId)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/contents/${content.id}/edit`}>
                            <Button variant="ghost" size="sm" className="gap-2">
                              <Edit2 className="h-4 w-4" />
                              Editar
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                            onClick={() => setDeleteId(content.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="py-10 text-center">
              <p className="text-muted-foreground">Nenhum conteudo cadastrado</p>
              <Link href="/admin/contents/create">
                <Button variant="outline" className="mt-4">
                  Criar primeiro conteudo
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog
        open={deleteId !== null}
        onOpenChange={(open: boolean) => {
          if (!open) {
            setDeleteId(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogTitle>Deletar Conteudo</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja deletar este conteudo? Esta acao nao pode ser desfeita.
          </AlertDialogDescription>
          <div className="flex justify-end gap-3">
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deletando...
                </>
              ) : (
                'Deletar'
              )}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
