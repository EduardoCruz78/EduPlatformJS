'use client';

import { useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

import type { Series, Subject } from '@edu-platform/core';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

const schema = z.object({
  name: z.string().trim().min(3, 'Informe ao menos 3 caracteres'),
  seriesId: z.string().min(1, 'Selecione uma série'),
  subjectIds: z.array(z.string()).min(1, 'Selecione ao menos uma matéria'),
});

type FormData = z.infer<typeof schema>;

function subjectMatchesSeries(subject: Subject, seriesId: string) {
  return String(subject.seriesId ?? '') === seriesId;
}

export default function EditTopicPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();

  const rawId = params.id;
  const topicId = Number(Array.isArray(rawId) ? rawId[0] : rawId);

  const { data: series = [] } = trpc.series.find.useQuery();
  const { data: subjects = [] } = trpc.subject.find.useQuery();
  const { data: topic, isLoading } = trpc.topic.findById.useQuery(topicId, {
    enabled: !Number.isNaN(topicId),
  });

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      seriesId: '',
      subjectIds: [],
    },
  });

  const selectedSeriesId = useWatch({ control: form.control, name: 'seriesId' });
  const selectedSubjectIds = useWatch({ control: form.control, name: 'subjectIds' }) ?? [];

  const filteredSubjects = useMemo(
    () => subjects.filter((subject) => subjectMatchesSeries(subject, selectedSeriesId)),
    [subjects, selectedSeriesId]
  );

  useEffect(() => {
    if (!topic) {
      return;
    }

    const firstSubject = topic.topicSubjects?.[0]?.subject ?? topic.subjects?.[0];

    form.reset({
      name: topic.name,
      seriesId: firstSubject?.seriesId ? String(firstSubject.seriesId) : '',
      subjectIds: topic.topicSubjects?.map((item) => String(item.subjectId)) ?? [],
    });
  }, [topic, form]);

  const mutation = trpc.topic.update.useMutation({
    onSuccess: () => router.push('/admin/topics'),
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : 'Erro ao atualizar tópico';
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
      name: data.name,
      subjectIds: data.subjectIds.map((id) => Number(id)),
    });
  };

  if (status === 'loading') return <div className="p-8 text-center">Carregando...</div>;
  if (!session) return <div className="p-8 text-center">Redirecionando...</div>;
  if (Number.isNaN(topicId)) return <div className="p-8 text-center">ID inválido</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/topics">
          <Button variant="outline" size="sm" aria-label="Voltar para tópicos">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editar tópico</h1>
          <p className="mt-2 text-muted-foreground">
            Ajuste o nome e os vínculos mantendo a referência da série.
          </p>
        </div>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Dados do tópico</CardTitle>
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
                      <FormLabel>Nome do tópico</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="seriesId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Série</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue('subjectIds', [], { shouldValidate: true });
                        }}
                        value={field.value}
                        disabled={mutation.isPending}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a série" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {series.map((item: Series) => (
                            <SelectItem key={item.id} value={String(item.id)}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-3">
                  <Label>Matérias vinculadas</Label>
                  <div className="grid gap-3 rounded-md border border-border p-4 md:grid-cols-2">
                    {selectedSeriesId ? (
                      filteredSubjects.map((subject) => {
                        const checked = selectedSubjectIds.includes(String(subject.id));

                        return (
                          <label
                            key={subject.id}
                            className="flex cursor-pointer items-start gap-3 rounded-md border border-border p-3 transition hover:bg-muted"
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
                      })
                    ) : (
                      <p className="text-sm text-muted-foreground">Escolha uma série para listar as matérias.</p>
                    )}
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

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
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
