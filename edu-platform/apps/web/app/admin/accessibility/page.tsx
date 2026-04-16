'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Loader2, Plus, Trash2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function AdminAccessibilityPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const utils = trpc.useUtils();

  const { data: categories = [], isLoading } = trpc.accessibility.getCategories.useQuery();
  const { data: topics = [] } = trpc.topic.find.useQuery();

  const [categoryForm, setCategoryForm] = useState({ name: '', description: '' });
  const [themeForms, setThemeForms] = useState<Record<number, { title: string; content: string }>>(
    {}
  );
  const [topicSelections, setTopicSelections] = useState<Record<number, string>>({});

  const invalidateAccessibility = async () => {
    await Promise.all([
      utils.accessibility.getCategories.invalidate(),
      utils.accessibility.findThemesByCategory.invalidate(),
      utils.accessibility.findTopicsByCategory.invalidate(),
    ]);
  };

  const createCategory = trpc.accessibility.createCategory.useMutation({
    onSuccess: async () => {
      setCategoryForm({ name: '', description: '' });
      await invalidateAccessibility();
    },
  });

  const deleteCategory = trpc.accessibility.deleteCategory.useMutation({
    onSuccess: invalidateAccessibility,
  });

  const createTheme = trpc.accessibility.createTheme.useMutation({
    onSuccess: invalidateAccessibility,
  });

  const deleteTheme = trpc.accessibility.deleteTheme.useMutation({
    onSuccess: invalidateAccessibility,
  });

  const addTopicToCategory = trpc.accessibility.addTopicToCategory.useMutation({
    onSuccess: invalidateAccessibility,
  });

  const removeTopicFromCategory = trpc.accessibility.removeTopicFromCategory.useMutation({
    onSuccess: invalidateAccessibility,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Accessibility</h1>
        <p className="mt-2 text-muted-foreground">
          Gerencie categorias, temas e vínculos com tópicos.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nova Categoria</CardTitle>
          <CardDescription>Crie uma categoria para organizar temas e tópicos.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
          <Input
            placeholder="Nome da categoria"
            value={categoryForm.name}
            onChange={(event) =>
              setCategoryForm((current) => ({ ...current, name: event.target.value }))
            }
          />
          <Input
            placeholder="Descrição"
            value={categoryForm.description}
            onChange={(event) =>
              setCategoryForm((current) => ({
                ...current,
                description: event.target.value,
              }))
            }
          />
          <Button
            className="gap-2"
            disabled={createCategory.isPending}
            onClick={() =>
              createCategory.mutate({
                name: categoryForm.name,
                description: categoryForm.description || undefined,
              })
            }
          >
            {createCategory.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            Criar
          </Button>
        </CardContent>
      </Card>

      {isLoading ? (
        <Card>
          <CardContent className="p-8 text-center text-muted-foreground">
            Carregando categorias...
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>
                    {category.description || 'Sem descrição adicional.'}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  onClick={() => deleteCategory.mutate(category.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Tópicos vinculados
                  </h2>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {category.topics?.length ? (
                      category.topics.map((topic) => (
                        <Badge
                          key={`${category.id}-${topic.id}`}
                          variant="outline"
                          className="gap-2 px-3 py-1"
                        >
                          {topic.name}
                          <button
                            type="button"
                            onClick={() =>
                              removeTopicFromCategory.mutate({
                                accessibilityCategoryId: category.id,
                                topicId: topic.id,
                              })
                            }
                          >
                            ×
                          </button>
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Nenhum tópico vinculado.
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row">
                    <select
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={topicSelections[category.id] ?? ''}
                      onChange={(event) =>
                        setTopicSelections((current) => ({
                          ...current,
                          [category.id]: event.target.value,
                        }))
                      }
                    >
                      <option value="">Selecione um tópico</option>
                      {topics.map((topic) => (
                        <option key={topic.id} value={String(topic.id)}>
                          {topic.name}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline"
                      onClick={() => {
                        const topicId = Number(topicSelections[category.id]);
                        if (!topicId) return;
                        addTopicToCategory.mutate({
                          accessibilityCategoryId: category.id,
                          topicId,
                        });
                        setTopicSelections((current) => ({ ...current, [category.id]: '' }));
                      }}
                    >
                      Vincular tópico
                    </Button>
                  </div>
                </div>

                <div>
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Temas
                  </h2>
                  <div className="space-y-3">
                    {category.themes?.map((theme) => (
                      <div
                        key={theme.id}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-muted/30 p-4"
                      >
                        <div>
                          <p className="font-medium text-foreground">{theme.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {theme.content || 'Sem conteúdo detalhado.'}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          onClick={() => deleteTheme.mutate(theme.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3">
                    <Input
                      placeholder="Título do tema"
                      value={themeForms[category.id]?.title ?? ''}
                      onChange={(event) =>
                        setThemeForms((current) => ({
                          ...current,
                          [category.id]: {
                            title: event.target.value,
                            content: current[category.id]?.content ?? '',
                          },
                        }))
                      }
                    />
                    <Textarea
                      placeholder="Conteúdo do tema"
                      value={themeForms[category.id]?.content ?? ''}
                      onChange={(event) =>
                        setThemeForms((current) => ({
                          ...current,
                          [category.id]: {
                            title: current[category.id]?.title ?? '',
                            content: event.target.value,
                          },
                        }))
                      }
                    />
                    <div>
                      <Button
                        variant="outline"
                        onClick={() => {
                          const form = themeForms[category.id];
                          if (!form?.title) return;
                          createTheme.mutate({
                            accessibilityCategoryId: category.id,
                            title: form.title,
                            content: form.content || undefined,
                          });
                          setThemeForms((current) => ({
                            ...current,
                            [category.id]: { title: '', content: '' },
                          }));
                        }}
                      >
                        Adicionar tema
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {categories.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-muted-foreground">
                Nenhuma categoria cadastrada.
              </CardContent>
            </Card>
          ) : null}
        </div>
      )}
    </div>
  );
}
