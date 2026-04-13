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
  CardDescription,
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

import { trpc } from '@/lib/trpc';

import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

// ================= SCHEMA =================
const updateSubjectSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').min(3, 'Mínimo 3 caracteres'),
  seriesId: z.string().optional(),
});

type UpdateSubjectFormData = z.infer<typeof updateSubjectSchema>;

// ================= PAGE =================
export default function EditSubjectPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();

  const subjectId = Number(params.id);

  const { data: series } = trpc.series.getAll.useQuery();

  const { data: subject, isLoading } = trpc.subject.getById.useQuery(
      { id: subjectId },
      { enabled: !Number.isNaN(subjectId) }
  );

  const form = useForm<UpdateSubjectFormData>({
    resolver: zodResolver(updateSubjectSchema),
    defaultValues: {
      name: '',
      seriesId: undefined,
    },
  });

  useEffect(() => {
    if (subject) {
      form.reset({
        name: subject.name,
        seriesId: subject.seriesId?.toString(),
      });
    }
  }, [subject, form]);

  const updateSubjectMutation = trpc.subject.update.useMutation({
    onSuccess: () => {
      router.push('/admin/subjects');
    },
    onError: (error: unknown) => {
      const message =
          error instanceof Error ? error.message : 'Erro ao atualizar matéria';

      form.setError('root', { message });
    },
  });

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  const onSubmit = async (data: UpdateSubjectFormData) => {
    await updateSubjectMutation.mutateAsync({
      id: subjectId,
      name: data.name,
      seriesId: data.seriesId ? parseInt(data.seriesId, 10) : undefined,
    });
  };

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  if (Number.isNaN(subjectId)) {
    return <div className="p-8 text-center">ID inválido</div>;
  }

  return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/subjects">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>

          <div>
            <h1 className="text-3xl font-bold">Editar Matéria</h1>
            <p className="text-muted-foreground mt-2">
              Atualize as informações da matéria
            </p>
          </div>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Informações</CardTitle>
            <CardDescription>Modifique os dados</CardDescription>
          </CardHeader>

          <CardContent>
            {isLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
            ) : (
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                  <Input {...form.register('name')} />

                  <Select
                      onValueChange={(value) =>
                          form.setValue(
                              'seriesId',
                              value === 'none' ? undefined : value
                          )
                      }
                      value={form.watch('seriesId') ?? 'none'}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="none">Nenhuma</SelectItem>

                      {series?.map((s: any) => (
                          <SelectItem key={s.id} value={s.id.toString()}>
                            {s.name}
                          </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button type="submit">Salvar</Button>
                </form>
            )}
          </CardContent>
        </Card>
      </div>
  );
}