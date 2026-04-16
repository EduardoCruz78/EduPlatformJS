'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import type { Series } from '@edu-platform/core';
import { trpc } from '@/lib/trpc';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

const createSubjectSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').min(3, 'Mínimo 3 caracteres'),
  seriesId: z.string().optional(),
});

type CreateSubjectFormData = z.infer<typeof createSubjectSchema>;

export default function CreateSubjectPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: series } = trpc.series.getAll.useQuery();

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
    onError: (error: any) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao criar materia';

      form.setError('root', {
        message: error.message || 'Erro ao criar matéria',
      });
    },
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const onSubmit = async (data: CreateSubjectFormData) => {
    await createSubjectMutation.mutateAsync({
      name: data.name,
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
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Nova Matéria</h1>
            <p className="text-muted-foreground mt-2">
              Crie uma nova matéria no sistema
            </p>
          </div>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Informações da Matéria</CardTitle>
            <CardDescription>
              Preencha os dados para criar uma nova matéria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome da Matéria *</FormLabel>
                          <FormControl>
                            <Input
                                placeholder="Ex: Matemática, Português, História..."
                                {...field}
                                disabled={createSubjectMutation.isPending}
                            />
                          </FormControl>
                          <FormDescription>
                            Nome único para identificar a matéria
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
                          <FormLabel>Série (Opcional)</FormLabel>
                          <Select
                              onValueChange={field.onChange}
                              value={field.value || 'none'}
                              disabled={createSubjectMutation.isPending}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma série" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="none">Nenhuma</SelectItem>
                              {series?.map((item: Series) => (
                                  <SelectItem key={item.id} value={item.id.toString()}>
                                    {item.name}
                                  </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Associe a matéria a uma série (opcional)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                    )}
                />

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
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Criando...
                        </>
                    ) : (
                        'Criar Matéria'
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
