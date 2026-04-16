'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
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

const schema = z.object({
  title: z.string().min(1, 'Titulo obrigatorio'),
  description: z.string().optional(),
  topicId: z.string().min(1, 'Topico obrigatorio'),
  type: z.enum(['VIDEO', 'PDF', 'ARTICLE']),
  link: z.string().min(1, 'Link obrigatorio'),
  thumbnailUrl: z.string().min(1, 'Thumbnail obrigatoria'),
  videoUrl: z.string().optional(),
  pdfUrl: z.string().optional(),
  order: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CreateContentPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: topics } = trpc.topic.findAll.useQuery();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      topicId: '',
      type: 'VIDEO',
      link: '',
      thumbnailUrl: '',
      videoUrl: '',
      pdfUrl: '',
      order: '0',
    },
  });

  const mutation = trpc.content.create.useMutation({
    onSuccess: () => router.push('/admin/contents'),
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao criar conteudo';

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
      title: data.title.trim(),
      description: data.description?.trim() || undefined,
      topicId: Number(data.topicId),
      type: data.type,
      link: data.link.trim(),
      thumbnailUrl: data.thumbnailUrl.trim(),
      videoUrl: data.videoUrl?.trim() || undefined,
      pdfUrl: data.pdfUrl?.trim() || undefined,
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
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Novo Conteudo</h1>
          <p className="mt-2 text-muted-foreground">
            Cadastre um novo conteudo para um topico existente
          </p>
        </div>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Informacoes do Conteudo</CardTitle>
          <CardDescription>Preencha os campos obrigatorios para criar o conteudo</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titulo</FormLabel>
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
                    <FormLabel>Descricao</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={mutation.isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="topicId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topico</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={mutation.isPending}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um topico" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {topics?.map((topic) => (
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
                          <SelectItem value="VIDEO">VIDEO</SelectItem>
                          <SelectItem value="PDF">PDF</SelectItem>
                          <SelectItem value="ARTICLE">ARTICLE</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link principal</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
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
                      <FormLabel>Thumbnail</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="videoUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Video URL</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pdfUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PDF URL</FormLabel>
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
                        <Input {...field} type="number" disabled={mutation.isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {form.formState.errors.root && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {form.formState.errors.root.message}
                </div>
              )}

              <div className="flex justify-end gap-3">
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
                    'Criar Conteudo'
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
