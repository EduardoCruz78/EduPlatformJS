'use client';

import { useRouter, useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import type { Series } from '@edu-platform/core';

import { trpc } from '@/lib/trpc';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// ================= SCHEMA =================
const schema = z.object({
  name: z.string().min(3),
  seriesId: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();

  const subjectId = Number(params.id);

  const { data: series } = trpc.series.getAll.useQuery();

  // ✅ CORREÇÃO AQUI
  const { data: subject, isLoading } =
      trpc.subject.getById.useQuery(subjectId, {
        enabled: !Number.isNaN(subjectId),
      });

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      seriesId: 'none',
    },
  });

  useEffect(() => {
    if (subject) {
      form.reset({
        name: subject.name,
        seriesId: subject.seriesId ? subject.seriesId.toString() : 'none',
      });
    }
  }, [subject, form]);

  const mutation = trpc.subject.update.useMutation({
    onSuccess: () => router.push('/admin/subjects'),
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : 'Erro ao atualizar materia';

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
      name: data.name,
      seriesId:
        data.seriesId && data.seriesId !== 'none'
          ? Number(data.seriesId)
          : null,
    });
  };

  if (status === 'loading') return <div className="p-8 text-center">Carregando...</div>;
  if (!session) return <div className="p-8">Redirect...</div>;
  if (Number.isNaN(subjectId)) return <div>ID inválido</div>;

  return (
      <div className="space-y-6">
        <Link href="/admin/subjects">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle>Editar</CardTitle>
          </CardHeader>

          <CardContent>
            {isLoading ? (
                <Skeleton className="h-10 w-full" />
            ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <Input {...form.register('name')} />

                  <Select
                      onValueChange={(v) => form.setValue('seriesId', v)}
                      value={form.watch('seriesId') ?? 'none'}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Série" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="none">Nenhuma</SelectItem>
                      {series?.map((item: Series) => (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {form.formState.errors.root && (
                      <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
                        {form.formState.errors.root.message}
                      </div>
                  )}

                  <Button type="submit">Salvar</Button>
                </form>
            )}
          </CardContent>
        </Card>
      </div>
  );
}
