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
  const { data: session } = useSession();

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
  }, [subject]);

  const mutation = trpc.subject.update.useMutation({
    onSuccess: () => router.push('/admin/subjects'),
  });

  useEffect(() => {
    if (!session) router.push('/login');
  }, [session]);

  const onSubmit = async (data: FormData) => {
    await mutation.mutateAsync({
      id: subjectId,
      name: data.name,
    });
  };

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
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Série" />
                    </SelectTrigger>

                    <SelectContent>
                      {series?.map((s: any) => (
                          <SelectItem key={s.id} value={String(s.id)}>
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