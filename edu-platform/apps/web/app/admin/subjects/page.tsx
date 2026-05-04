'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import type { Series, Subject } from '@edu-platform/core';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';
import { Edit2, Trash2, Plus, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function SubjectsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const { data: subjects, isLoading, refetch } = trpc.subject.find.useQuery();
  const { data: series } = trpc.series.find.useQuery();

  const deleteSubjectMutation = trpc.subject.delete.useMutation({
    onSuccess: () => {
      setDeleteId(null);
      setIsDeleting(false);
      refetch();
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao deletar matéria';

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
    await deleteSubjectMutation.mutateAsync(deleteId);
  };

  const getSeriesName = (seriesId: number | null | undefined): string => {
    if (!seriesId) {
      return 'N/A';
    }

    return series?.find((item: Series) => item.id === seriesId)?.name || 'N/A';
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
          <h1 className="text-3xl font-bold tracking-tight">Matérias</h1>
          <p className="mt-2 text-muted-foreground">
            Gerencie todas as matérias do sistema
          </p>
        </div>
        <Link href="/admin/subjects/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nova matéria
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de matérias</CardTitle>
          <CardDescription>
            {subjects?.length || 0} matérias cadastradas no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-12 w-full" />
              ))}
            </div>
          ) : subjects && subjects.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Serie</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjects.map((subject: Subject) => (
                    <TableRow key={subject.id}>
                      <TableCell className="font-mono text-sm">
                        {subject.id}
                      </TableCell>
                      <TableCell className="font-medium">{subject.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {getSeriesName(subject.seriesId)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/subjects/${subject.id}/edit`}>
                            <Button variant="ghost" size="sm" className="gap-2">
                              <Edit2 className="h-4 w-4" />
                              Editar
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                            onClick={() => setDeleteId(subject.id)}
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
              <p className="text-muted-foreground">Nenhuma matéria cadastrada</p>
              <Link href="/admin/subjects/create">
                <Button variant="outline" className="mt-4">
                  Criar primeira matéria
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
          <AlertDialogTitle>Deletar matéria</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que desejá deletar esta matéria Esta ação não pode ser
            desfeita.
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
