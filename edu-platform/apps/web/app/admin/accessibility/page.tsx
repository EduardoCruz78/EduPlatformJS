'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { CheckCircle2, Loader2, Plus, Trash2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type FeedbackState = { tone: 'success' | 'error'; message: string } | null;

function toErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

export default function AdminAccessibilityPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const utils = trpc.useUtils();

  const { data: categories = [], isLoading } = trpc.accessibility.getCategories.useQuery();
  const { data: topics = [] } = trpc.topic.find.useQuery();

  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [categoryForm, setCategoryForm] = useState({ name: '', description: '' });
  const [themeForms, setThemeForms] = useState<Record<number, { title: string; content: string }>>(
    {}
  );
  const [topicSelections, setTopicSelections] = useState<Record<number, string>>({});

  const totalThemes = useMemo(
    () => categories.reduce((total, category) => total + (category.themes?.length ?? 0), 0),
    [categories]
  );
  const totalTopicLinks = useMemo(
    () => categories.reduce((total, category) => total + (category.topics?.length ?? 0), 0),
    [categories]
  );

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
      setFeedback({ tone: 'success', message: 'Categoria criada com sucesso.' });
      await invalidateAccessibility();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível criar a categoria.'),
      });
    },
  });

  const deleteCategory = trpc.accessibility.deleteCategory.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Categoria removida com sucesso.' });
      await invalidateAccessibility();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover a categoria.'),
      });
    },
  });

  const createTheme = trpc.accessibility.createTheme.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Tema adicionado com sucesso.' });
      await invalidateAccessibility();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível adicionar o tema.'),
      });
    },
  });

  const deleteTheme = trpc.accessibility.deleteTheme.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Tema removido com sucesso.' });
      await invalidateAccessibility();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover o tema.'),
      });
    },
  });

  const addTopicToCategory = trpc.accessibility.addTopicToCategory.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Tópico vinculado com sucesso.' });
      await invalidateAccessibility();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível vincular o tópico.'),
      });
    },
  });

  const removeTopicFromCategory = trpc.accessibility.removeTopicFromCategory.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Vínculo removido com sucesso.' });
      await invalidateAccessibility();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover o vínculo.'),
      });
    },
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
      <section className="edu-hero">
        <span className="edu-kicker">Administração de acessibilidade</span>
        <h1 className="edu-section-title">Categorias, temas e tópicos com leitura editorial clara.</h1>
        <p className="edu-lead">
          Organize o conhecimento de acessibilidade sem perder domínio, contexto textual
          e relação com os tópicos reais do produto.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Categorias</CardDescription>
            <CardTitle>{categories.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Temas</CardDescription>
            <CardTitle>{totalThemes}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Tópicos vinculados</CardDescription>
            <CardTitle>{totalTopicLinks}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {feedback ? (
        <Card
          className={
            feedback.tone === 'success'
              ? 'border-primary/40 bg-primary/5'
              : 'border-destructive/40 bg-destructive/5'
          }
        >
          <CardContent className="flex items-center gap-3 p-4 text-sm">
            <CheckCircle2 className="h-4 w-4" />
            <span>{feedback.message}</span>
          </CardContent>
        </Card>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Nova categoria</CardTitle>
          <CardDescription>
            Crie uma categoria com descrição clara para orientar temas e tópicos relacionados.
          </CardDescription>
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
            disabled={createCategory.isPending || !categoryForm.name.trim()}
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
      ) : categories.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-muted-foreground">
            Nenhuma categoria cadastrada ainda.
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
                  disabled={deleteCategory.isPending}
                  onClick={() => deleteCategory.mutate(category.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="grid gap-6 xl:grid-cols-[1fr_1.15fr]">
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Tópicos vinculados
                  </h2>
                  <div className="flex flex-wrap gap-2">
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
                            className="text-xs"
                            onClick={() =>
                              removeTopicFromCategory.mutate({
                                accessibilityCategoryId: category.id,
                                topicId: topic.id,
                              })
                            }
                          >
                            remover
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
                      disabled={addTopicToCategory.isPending || !topicSelections[category.id]}
                      onClick={() => {
                        const topicId = Number(topicSelections[category.id]);

                        if (!topicId) {
                          return;
                        }

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

                <div className="space-y-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Temas
                  </h2>
                  <div className="space-y-3">
                    {category.themes?.length ? (
                      category.themes.map((theme) => (
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
                            disabled={deleteTheme.isPending}
                            onClick={() => deleteTheme.mutate(theme.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                        Nenhum tema cadastrado para esta categoria.
                      </div>
                    )}
                  </div>

                  <div className="grid gap-3">
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
                        disabled={createTheme.isPending || !themeForms[category.id]?.title?.trim()}
                        onClick={() => {
                          const form = themeForms[category.id];

                          if (!form?.title.trim()) {
                            return;
                          }

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
        </div>
      )}
    </div>
  );
}
