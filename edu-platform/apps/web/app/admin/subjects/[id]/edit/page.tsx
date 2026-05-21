'use client';

import { useRouter, useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

import type { Series } from '@edu-platform/core';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

const schema = z.object({
  name: z.string().min(3, 'Minimo 3 caracteres'),
  seriesId: z.string().min(1, 'Selecione uma série'),
});

type FormData = z.infer<typeof schema>;

export default function EditSubjectPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();

  const subjectId = Number(params.id);
  const { data: series } = trpc.series.find.useQuery();
  const { data: subject, isLoading } = trpc.subject.findById.useQuery(subjectId, {
    enabled: !Number.isNaN(subjectId),
  });

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      seriesId: '',
    },
  });
  const selectedSeriesId =
    useWatch({
      control: form.control,
      name: 'seriesId',
    }) ?? 'none';

  useEffect(() => {
    if (subject) {
      form.reset({
        name: subject.name,
        seriesId: subject.seriesId ? String(subject.seriesId) : '',
      });
    }
  }, [subject, form]);

  const mutation = trpc.subject.update.useMutation({
    onSuccess: () => router.push('/admin/subjects'),
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao atualizar matéria';

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
      id: subjectId,
      name: data.name.trim(),
      seriesId: Number(data.seriesId),
    });
  };

  if (status === 'loading') {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  if (Number.isNaN(subjectId)) {
    return <div className="p-8 text-center">ID invalido</div>;
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
          <h1 className="text-3xl font-bold tracking-tight">Editar Materia</h1>
          <p className="mt-2 text-muted-foreground">
            Atualize as informações da matéria selecionada
          </p>
        </div>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Informações da Materia</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-10 w-full" />
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Input {...form.register('name')} disabled={mutation.isPending} />

              <Select
                onValueChange={(value) => form.setValue('seriesId', value)}
                value={selectedSeriesId}
                disabled={mutation.isPending}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Serie" />
                </SelectTrigger>
                <SelectContent>
                  {series?.map((item: Series) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {form.formState.errors.root && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {form.formState.errors.root.message}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <Link href="/admin/subjects">
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}
