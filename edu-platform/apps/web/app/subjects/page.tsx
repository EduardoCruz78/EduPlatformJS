'use client';

import { useRouter, useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

import { trpc } from '@/lib/trpc';

import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

const updateSubjectSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').min(3, 'Mínimo 3 caracteres'),
});

type UpdateSubjectFormData = z.infer<typeof updateSubjectSchema>;

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();

  const subjectId = Number(params.id);

  const { data: subject, isLoading } = trpc.subject.getById.useQuery(
      subjectId,
      { enabled: !Number.isNaN(subjectId) }
  );

  const form = useForm<UpdateSubjectFormData>({
    resolver: zodResolver(updateSubjectSchema),
    defaultValues: {
      name: '',
    },
  });

  useEffect(() => {
    if (subject) {
      form.reset({
        name: subject.name,
      });
    }
  }, [subject, form]);

  const updateSubjectMutation = trpc.subject.update.useMutation({
    onSuccess: () => {
      router.push('/admin/subjects');
    },
    onError: (error: unknown) => {
      const message =
          error instanceof Error ? error.message : 'Erro ao atualizar matéria';

      form.setError('root', { message });
    },
  });

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  const onSubmit = async (data: UpdateSubjectFormData) => {
    await updateSubjectMutation.mutateAsync({
      id: subjectId,
      name: data.name,
    });
  };

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  if (Number.isNaN(subjectId)) {
    return <div className="p-8 text-center">ID inválido</div>;
  }

  return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/subjects">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>

          <div>
            <h1 className="text-3xl font-bold">Editar Matéria</h1>
            <p className="text-muted-foreground mt-2">
              Atualize as informações da matéria
            </p>
          </div>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Informações</CardTitle>
            <CardDescription>Modifique os dados</CardDescription>
          </CardHeader>

          <CardContent>
            {isLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
            ) : (
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                  <Input {...form.register('name')} />

                  {form.formState.errors.root && (
                      <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
                        {form.formState.errors.root.message}
                      </div>
                  )}

                  <div className="flex gap-3 justify-end">
                    <Link href="/admin/subjects">
                      <Button
                          type="button"
                          variant="outline"
                          disabled={updateSubjectMutation.isPending}
                      >
                        Cancelar
                      </Button>
                    </Link>

                    <Button
                        type="submit"
                        disabled={updateSubjectMutation.isPending}
                        className="flex items-center gap-2"
                    >
                      {updateSubjectMutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Atualizando...
                          </>
                      ) : (
                          'Salvar'
                      )}
                    </Button>
                  </div>
                </form>
            )}
          </CardContent>
        </Card>
      </div>
  );
}