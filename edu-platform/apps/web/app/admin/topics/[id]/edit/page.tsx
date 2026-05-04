'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';

const schema = z.object({
  name: z.string().min(3, 'Informe ao menos 3 caracteres'),
  subjectIds: z.array(z.string()).min(1, 'Selecione ao menos uma matéria'),
});

type FormData = z.infer<typeof schema>;

export default function EditTopicPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();

  const rawId = params.id;
  const topicId = Number(Array.isArray(rawId) ? rawId[0] : rawId);

  const { data: subjects } = trpc.subject.find.useQuery();
  const { data: topic, isLoading } = trpc.topic.findById.useQuery(topicId, {
    enabled: !Number.isNaN(topicId),
  });

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      subjectIds: [],
    },
  });

  const selectedSubjectIds = useWatch({
    control: form.control,
    name: 'subjectIds',
  }) ?? [];

  useEffect(() => {
    if (topic) {
      form.reset({
        name: topic.name,
        subjectIds:
          topic.topicSubjects?.map((item) => String(item.subjectId)) ?? [],
      });
    }
  }, [topic, form]);

  const mutation = trpc.topic.update.useMutation({
    onSuccess: () => router.push('/admin/topics'),
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao atualizar tópico';

      form.setError('root', { message });
    },
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const toggleSubject = (subjectId: string) => {
    const current = form.getValues('subjectIds');
    const next = current.includes(subjectId)
      ? current.filter((item) => item !== subjectId)
      : [...current, subjectId];

    form.setValue('subjectIds', next, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    await mutation.mutateAsync({
      id: topicId,
      name: data.name.trim(),
      subjectIds: data.subjectIds.map((id) => Number(id)),
    });
  };

  if (status === 'loading') return <div className="p-8 text-center">Carregando...</div>;
  if (!session) return <div className="p-8 text-center">Redirecionando...</div>;
  if (Number.isNaN(topicId)) return <div className="p-8 text-center">ID invalido</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/topics">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editar Tópico</h1>
          <p className="mt-2 text-muted-foreground">
            Atualize o nome e as matérias vinculadas
          </p>
        </div>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Informações do Tópico</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-10 w-full" />
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do Tópico</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-3">
                  <Label>Matérias vinculadas</Label>
                  <div className="grid gap-3 rounded-2xl border border-border p-4 md:grid-cols-2">
                    {subjects?.map((subject) => {
                      const checked = selectedSubjectIds.includes(String(subject.id));

                      return (
                        <label
                          key={subject.id}
                          className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3 transition hover:bg-muted"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleSubject(String(subject.id))}
                            disabled={mutation.isPending}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-medium">{subject.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {subject.series?.name ?? 'Sem série'}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  {form.formState.errors.subjectIds && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.subjectIds.message}
                    </p>
                  )}
                </div>

                {form.formState.errors.root && (
                  <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    {form.formState.errors.root.message}
                  </div>
                )}

                <div className="flex justify-end gap-3">
                  <Link href="/admin/topics">
                    <Button type="button" variant="outline" disabled={mutation.isPending}>
                      Cancelar
                    </Button>
                  </Link>
                  <Button type="submit" disabled={mutation.isPending} className="gap-2">
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Salvando...
                      </>
                    ) : (
                      'Salvar'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
