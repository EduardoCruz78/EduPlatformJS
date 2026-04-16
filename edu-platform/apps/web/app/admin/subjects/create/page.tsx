'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

import type { Series } from '@edu-platform/core';
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

const createSubjectSchema = z.object({
  name: z.string().min(1, 'Nome obrigatorio').min(3, 'Minimo 3 caracteres'),
  seriesId: z.string().optional(),
});

type CreateSubjectFormData = z.infer<typeof createSubjectSchema>;

export default function CreateSubjectPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: series } = trpc.series.findAll.useQuery();

  const form = useForm<CreateSubjectFormData>({
    resolver: zodResolver(createSubjectSchema),
    defaultValues: {
      name: '',
      seriesId: '',
    },
  });

  const createSubjectMutation = trpc.subject.create.useMutation({
    onSuccess: () => {
      router.push('/admin/subjects');
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao criar materia';

      form.setError('root', { message });
    },
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const onSubmit = async (data: CreateSubjectFormData) => {
    await createSubjectMutation.mutateAsync({
      name: data.name.trim(),
      seriesId:
        data.seriesId && data.seriesId !== 'none'
          ? Number(data.seriesId)
          : undefined,
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
        <Link href="/admin/subjects">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nova Materia</h1>
          <p className="mt-2 text-muted-foreground">
            Crie uma nova materia no sistema
          </p>
        </div>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Informacoes da Materia</CardTitle>
          <CardDescription>Preencha os dados para criar uma nova materia</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Materia</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Matematica, Portugues, Historia..."
                        {...field}
                        disabled={createSubjectMutation.isPending}
                      />
                    </FormControl>
                    <FormDescription>
                      Nome unico para identificar a materia
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="seriesId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serie (Opcional)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || 'none'}
                      disabled={createSubjectMutation.isPending}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma serie" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">Nenhuma</SelectItem>
                        {series?.map((item: Series) => (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Associe a materia a uma serie, se necessario
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {form.formState.errors.root.message}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <Link href="/admin/subjects">
                  <Button
                    type="button"
                    variant="outline"
                    disabled={createSubjectMutation.isPending}
                  >
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={createSubjectMutation.isPending}
                  className="gap-2"
                >
                  {createSubjectMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Criando...
                    </>
                  ) : (
                    'Criar Materia'
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
