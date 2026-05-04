'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import type { Topic } from '@edu-platform/core';
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

export default function TopicsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { data: topics, isLoading, refetch } = trpc.topic.find.useQuery();

  const deleteTopicMutation = trpc.topic.delete.useMutation({
    onSuccess: () => {
      setDeleteId(null);
      setIsDeleting(false);
      refetch();
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao deletar tópico';

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
    if (!deleteId) return;

    setIsDeleting(true);
    await deleteTopicMutation.mutateAsync(deleteId);
  };

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
          <h1 className="text-3xl font-bold tracking-tight">Tópicos</h1>
          <p className="mt-2 text-muted-foreground">
            Gerencie os tópicos e suas relações com matérias
          </p>
        </div>
        <Link href="/admin/topics/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Tópico
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Tópicos</CardTitle>
          <CardDescription>{topics?.length || 0} tópicos cadastrados</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-12 w-full" />
              ))}
            </div>
          ) : topics && topics.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Matérias</TableHead>
                    <TableHead>Conteúdos</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topics.map((topic: Topic) => (
                    <TableRow key={topic.id}>
                      <TableCell className="font-mono text-sm">{topic.id}</TableCell>
                      <TableCell className="font-medium">{topic.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {topic.subjects?.length ? (
                            topic.subjects.map((subject) => (
                              <Badge key={`${topic.id}-${subject.id}`} variant="outline">
                                {subject.name}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-sm text-muted-foreground">Sem matérias</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{topic.contents?.length ?? 0}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/topics/${topic.id}/edit`}>
                            <Button variant="ghost" size="sm" className="gap-2">
                              <Edit2 className="h-4 w-4" />
                              Editar
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                            onClick={() => setDeleteId(topic.id)}
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
              <p className="text-muted-foreground">Nenhum tópico cadastrado</p>
              <Link href="/admin/topics/create">
                <Button variant="outline" className="mt-4">
                  Criar primeiro tópico
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog
        open={deleteId !== null}
        onOpenChange={(open: boolean) => {
          if (!open) setDeleteId(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogTitle>Deletar Tópico</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que desejá deletar este tópico? Esta ação não pode ser desfeita.
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
