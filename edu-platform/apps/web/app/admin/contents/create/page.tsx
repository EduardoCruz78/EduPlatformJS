'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

import type { Series, Subject, Topic } from '@edu-platform/core';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const urlOrEmpty = z
  .string()
  .trim()
  .optional()
  .refine((value) => !value || z.url().safeParse(value).success, 'Informe uma URL válida');

const schema = z
  .object({
    title: z.string().trim().min(1, 'Título obrigatório'),
    description: z.string().optional(),
    seriesId: z.string().min(1, 'Série obrigatória'),
    subjectId: z.string().min(1, 'Matéria obrigatória'),
    topicId: z.string().min(1, 'Tópico obrigatório'),
    type: z.enum(['VIDEO', 'PDF', 'ARTICLE']),
    link: urlOrEmpty,
    thumbnailUrl: urlOrEmpty,
    videoUrl: urlOrEmpty,
    pdfUrl: urlOrEmpty,
    order: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === 'VIDEO' && !data.link && !data.videoUrl) {
      ctx.addIssue({
        code: 'custom',
        path: ['link'],
        message: 'Vídeo precisa de link principal ou URL de vídeo',
      });
    }

    if (data.type === 'PDF' && !data.pdfUrl && !data.link) {
      ctx.addIssue({
        code: 'custom',
        path: ['pdfUrl'],
        message: 'PDF precisa da URL do arquivo ou de um link principal',
      });
    }

    if (data.type === 'ARTICLE' && !data.link) {
      ctx.addIssue({
        code: 'custom',
        path: ['link'],
        message: 'Artigo precisa de link principal',
      });
    }
  });

type FormData = z.infer<typeof schema>;

const contentTypeLabel = {
  VIDEO: 'Vídeo',
  PDF: 'PDF',
  ARTICLE: 'Artigo',
} as const;

function subjectMatchesSeries(subject: Subject, seriesId: string) {
  return String(subject.seriesId ?? '') === seriesId;
}

function topicMatchesSubject(topic: Topic, subjectId: string) {
  return topic.subjects?.some((subject) => String(subject.id) === subjectId) ?? false;
}

function topicLabel(topic: Topic) {
  const subjects = topic.subjects
    ?.map((subject) => `${subject.series?.name ?? 'Sem série'} / ${subject.name}`)
    .join(', ');

  return subjects ? `${topic.name} (${subjects})` : topic.name;
}

export default function CreateContentPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: series = [] } = trpc.series.find.useQuery();
  const { data: subjects = [] } = trpc.subject.find.useQuery();
  const { data: topics = [] } = trpc.topic.find.useQuery();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      seriesId: '',
      subjectId: '',
      topicId: '',
      type: 'VIDEO',
      link: '',
      thumbnailUrl: '',
      videoUrl: '',
      pdfUrl: '',
      order: '0',
    },
  });

  const selectedSeriesId = useWatch({ control: form.control, name: 'seriesId' });
  const selectedSubjectId = useWatch({ control: form.control, name: 'subjectId' });
  const selectedTopicId = useWatch({ control: form.control, name: 'topicId' });
  const selectedType = useWatch({ control: form.control, name: 'type' });

  const filteredSubjects = useMemo(
    () => subjects.filter((subject) => subjectMatchesSeries(subject, selectedSeriesId)),
    [subjects, selectedSeriesId]
  );
  const filteredTopics = useMemo(
    () => topics.filter((topic) => topicMatchesSubject(topic, selectedSubjectId)),
    [topics, selectedSubjectId]
  );
  const selectedTopic = useMemo(
    () => topics.find((topic) => String(topic.id) === selectedTopicId),
    [topics, selectedTopicId]
  );

  const mutation = trpc.content.create.useMutation({
    onSuccess: () => router.push('/admin/contents'),
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : 'Erro ao criar conteúdo';
      form.setError('root', { message });
    },
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const onSubmit = async (data: FormData) => {
    await mutation.mutateAsync({
      title: data.title,
      description: data.description?.trim() || undefined,
      topicId: Number(data.topicId),
      type: data.type,
      link: data.link || undefined,
      thumbnailUrl: data.thumbnailUrl || undefined,
      videoUrl: data.videoUrl || undefined,
      pdfUrl: data.pdfUrl || undefined,
      order: data.order?.trim() ? Number(data.order) : undefined,
    });
  };

  if (status === 'loading') {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/contents">
          <Button variant="outline" size="sm" aria-label="Voltar para conteúdos">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Novo conteúdo</h1>
          <p className="mt-2 text-muted-foreground">
            Escolha série, matéria e tópico antes de adicionar o material.
          </p>
        </div>
      </div>

      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>Dados do conteúdo</CardTitle>
          <CardDescription>
            A sequência guiada reduz vínculos incorretos entre anos, matérias e tópicos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 lg:grid-cols-3">
                <FormField
                  control={form.control}
                  name="seriesId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Série</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue('subjectId', '', { shouldValidate: true });
                          form.setValue('topicId', '', { shouldValidate: true });
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

                <FormField
                  control={form.control}
                  name="subjectId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Matéria</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue('topicId', '', { shouldValidate: true });
                        }}
                        value={field.value}
                        disabled={mutation.isPending || !selectedSeriesId}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={
                                selectedSeriesId ? 'Selecione a matéria' : 'Escolha a série'
                              }
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {filteredSubjects.map((subject) => (
                            <SelectItem key={subject.id} value={String(subject.id)}>
                              {subject.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="topicId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tópico</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={mutation.isPending || !selectedSubjectId}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={
                                selectedSubjectId ? 'Selecione o tópico' : 'Escolha a matéria'
                              }
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {filteredTopics.map((topic) => (
                            <SelectItem key={topic.id} value={String(topic.id)}>
                              {topic.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={mutation.isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={mutation.isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={mutation.isPending}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(contentTypeLabel).map(([value, label]) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {selectedType === 'VIDEO'
                          ? 'Link do vídeo'
                          : selectedType === 'PDF'
                            ? 'Link alternativo'
                            : 'Link do artigo'}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
                      </FormControl>
                      <FormDescription>
                        Vídeos do YouTube recebem thumbnail automaticamente quando possível.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="pdfUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL do PDF</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending || selectedType !== 'PDF'} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="thumbnailUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thumbnail opcional</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="order"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ordem</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="0" disabled={mutation.isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {selectedTopic ? (
                <div className="rounded-md border border-border p-3 text-sm text-muted-foreground">
                  Destino: {topicLabel(selectedTopic)}
                </div>
              ) : null}

              {form.formState.errors.root && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {form.formState.errors.root.message}
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Link href="/admin/contents">
                  <Button type="button" variant="outline" disabled={mutation.isPending}>
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" disabled={mutation.isPending} className="gap-2">
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Criando...
                    </>
                  ) : (
                    'Criar conteúdo'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
