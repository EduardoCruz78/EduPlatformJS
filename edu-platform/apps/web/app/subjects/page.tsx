'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import type { Subject } from '@edu-platform/core';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { trpc } from '@/lib/trpc';


// legacy block removed
/*
  name: z.string().min(1, 'Nome é obrigatório').min(3, 'Mínimo 3 caracteres'),
});

type UpdateSubjectFormData = z.infer<typeof updateSubjectSchema>;

*/
function SubjectsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const seriesIdParam = searchParams.get('seriesId');
  const seriesId = Number(seriesIdParam || 0);

  const {
    data: subjects = [],
    isLoading,
    error,
  } = trpc.subject.getBySeries.useQuery(
    { seriesId },
    { enabled: seriesId > 0 }
  );

  const { data: series } = trpc.series.getById.useQuery(seriesId, {
    enabled: seriesId > 0,
  });

  /*
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

  */

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-6xl">
          <div className="animate-pulse space-y-8">
            <div className="h-10 w-80 rounded-2xl bg-muted" />
            <Card>
              <CardContent className="space-y-4 p-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-24 w-full rounded-3xl" />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || seriesId === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-xl text-destructive">Selecione uma serie primeiro</p>
            <Link
              href="/dashboard"
              className="mt-6 inline-block rounded-2xl bg-primary px-6 py-3 text-primary-foreground transition hover:bg-primary/90"
            >
              Voltar ao dashboard
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Materias</h1>
            <p className="mt-1 text-muted-foreground">
              {series ? `Selecione uma materia da serie ${series.name}` : 'Selecione uma materia'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="font-medium text-primary transition hover:text-primary/80"
            >
              Voltar ao dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="font-medium text-destructive transition hover:text-destructive/80"
            >
              Sair
            </button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              Materias disponiveis
              <Badge variant="secondary">{subjects.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subjects.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">
                Nenhuma materia encontrada para esta serie.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {subjects.map((subject: Subject) => (
                  <Link
                    key={subject.id}
                    href={`/topics?subjectId=${subject.id}`}
                    className="group rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-accent"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">
                          {subject.name}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {subject.description || 'Clique para ver os topicos desta materia.'}
                        </p>
                      </div>
                      {subject.series ? (
                        <Badge variant="outline">{subject.series.name}</Badge>
                      ) : null}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
  /*
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
  */
}

export default function SubjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8" />}>
      <SubjectsPageContent />
    </Suspense>
  );
}
