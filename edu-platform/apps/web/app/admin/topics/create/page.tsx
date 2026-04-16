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
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().min(3, 'Informe ao menos 3 caracteres'),
  subjectIds: z.array(z.string()).min(1, 'Selecione ao menos uma materia'),
});

type FormData = z.infer<typeof schema>;

export default function CreateTopicPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: subjects } = trpc.subject.findAll.useQuery();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      subjectIds: [],
    },
  });

  const selectedSubjectIds = form.watch('subjectIds');

  const mutation = trpc.topic.create.useMutation({
    onSuccess: () => router.push('/admin/topics'),
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao criar topico';

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
      name: data.name.trim(),
      subjectIds: data.subjectIds.map((id) => Number(id)),
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
        <Link href="/admin/topics">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Novo Topico</h1>
          <p className="mt-2 text-muted-foreground">
            Crie um topico e vincule as materias correspondentes
          </p>
        </div>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Informacoes do Topico</CardTitle>
          <CardDescription>Preencha os dados abaixo para criar o topico</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Topico</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={mutation.isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-3">
                <Label>Materias vinculadas</Label>
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
                            {subject.series?.name ?? 'Sem serie'}
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
                      Criando...
                    </>
                  ) : (
                    'Criar Topico'
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
