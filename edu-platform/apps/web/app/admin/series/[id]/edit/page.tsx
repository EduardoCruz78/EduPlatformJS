'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
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
import { Skeleton } from '@/components/ui/skeleton';

const schema = z.object({
  name: z.string().min(3, 'Informe ao menos 3 caracteres'),
});

type FormData = z.infer<typeof schema>;

export default function EditSeriesPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();

  const rawId = params.id;
  const seriesId = Number(Array.isArray(rawId) ? rawId[0] : rawId);

  const { data: series, isLoading } = trpc.series.findById.useQuery(seriesId, {
    enabled: !Number.isNaN(seriesId),
  });

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  useEffect(() => {
    if (series) {
      form.reset({ name: series.name });
    }
  }, [series, form]);

  const mutation = trpc.series.update.useMutation({
    onSuccess: () => router.push('/admin/series'),
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao atualizar série';

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
      id: seriesId,
      name: data.name.trim(),
    });
  };

  if (status === 'loading') return <div className="p-8 text-center">Carregando...</div>;
  if (!session) return <div className="p-8 text-center">Redirecionando...</div>;
  if (Number.isNaN(seriesId)) return <div className="p-8 text-center">ID invalido</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/series">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editar Serie</h1>
          <p className="mt-2 text-muted-foreground">
            Atualize o nome da série selecionada
          </p>
        </div>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Informações da Serie</CardTitle>
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
                      <FormLabel>Nome da Serie</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={mutation.isPending} />
                      </FormControl>
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
                  <Link href="/admin/series">
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
