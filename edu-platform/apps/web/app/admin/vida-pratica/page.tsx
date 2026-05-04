'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { CheckCircle2, Loader2, Plus, Trash2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trpc } from '@/lib/trpc';

type FeedbackState = { tone: 'success' | 'error'; message: string } | null;

type CategoryFormState = {
  name: string;
  description: string;
  slug: string;
  icon: string;
  order: string;
};

type GuideFormState = {
  title: string;
  summary: string;
  content: string;
  slug: string;
  order: string;
  isPublished: boolean;
};

type LinkFormState = {
  label: string;
  url: string;
  order: string;
};

function toErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

function slugifyInput(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function numberOrZero(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function createCategoryFormState(category: {
  name: string;
  description?: string | null;
  slug: string;
  icon?: string | null;
  order?: number;
}): CategoryFormState {
  return {
    name: category.name,
    description: category.description ?? '',
    slug: category.slug,
    icon: category.icon ?? '',
    order: String(category.order ?? 0),
  };
}

function createGuideFormState(guide: {
  title: string;
  summary: string;
  content: string;
  slug: string;
  order?: number;
  isPublished: boolean;
}): GuideFormState {
  return {
    title: guide.title,
    summary: guide.summary,
    content: guide.content,
    slug: guide.slug,
    order: String(guide.order ?? 0),
    isPublished: guide.isPublished,
  };
}

export default function AdminPracticalPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const utils = trpc.useUtils();
  const { data: categories = [], isLoading } = trpc.practical.findCategories.useQuery();

  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [selectedGuideId, setSelectedGuideId] = useState<number | null>(null);

  const [categoryCreateForm, setCategoryCreateForm] = useState<CategoryFormState>({
    name: '',
    description: '',
    slug: '',
    icon: '',
    order: '0',
  });
  const [categoryEditForms, setCategoryEditForms] = useState<Record<number, CategoryFormState>>({});
  const [guideCreateForm, setGuideCreateForm] = useState<GuideFormState>({
    title: '',
    summary: '',
    content: '',
    slug: '',
    order: '0',
    isPublished: false,
  });
  const [guideEditForms, setGuideEditForms] = useState<Record<number, GuideFormState>>({});
  const [linkCreateForm, setLinkCreateForm] = useState<LinkFormState>({
    label: '',
    url: '',
    order: '0',
  });
  const [linkEditForms, setLinkEditForms] = useState<Record<number, LinkFormState>>({});

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const totals = useMemo(() => {
    return categories.reduce(
      (accumulator, category) => {
        accumulator.guides += category.guides?.length ?? 0;
        accumulator.published +=
          category.guides?.filter((guide) => guide.isPublished).length ?? 0;
        accumulator.links +=
          category.guides?.reduce(
            (guideTotal, guide) => guideTotal + (guide.links?.length ?? 0),
            0
          ) ?? 0;
        return accumulator;
      },
      { guides: 0, published: 0, links: 0 }
    );
  }, [categories]);

  const selectedCategory =
    categories.find((category) => category.id === selectedCategoryId) ?? categories[0] ?? null;
  const selectedGuide =
    selectedCategory?.guides?.find((guide) => guide.id === selectedGuideId) ??
    selectedCategory?.guides?.[0] ??
    null;

  const categoryEditForm = selectedCategory
    ? categoryEditForms[selectedCategory.id] ?? createCategoryFormState(selectedCategory)
    : null;

  const guideEditForm = selectedGuide
    ? guideEditForms[selectedGuide.id] ?? createGuideFormState(selectedGuide)
    : null;

  const updateSelectedCategoryForm = (
    updater: (current: CategoryFormState) => CategoryFormState
  ) => {
    if (!selectedCategory) {
      return;
    }

    setCategoryEditForms((current) => ({
      ...current,
      [selectedCategory.id]: updater(
        current[selectedCategory.id] ?? createCategoryFormState(selectedCategory)
      ),
    }));
  };

  const updateSelectedGuideForm = (updater: (current: GuideFormState) => GuideFormState) => {
    if (!selectedGuide) {
      return;
    }

    setGuideEditForms((current) => ({
      ...current,
      [selectedGuide.id]: updater(current[selectedGuide.id] ?? createGuideFormState(selectedGuide)),
    }));
  };

  const invalidatePractical = async () => {
    await Promise.all([
      utils.practical.findCategories.invalidate(),
      utils.practical.findPublicCategories.invalidate(),
      utils.practical.findCategoryBySlug.invalidate(),
      utils.practical.findGuideBySlug.invalidate(),
    ]);
  };

  const createCategory = trpc.practical.createCategory.useMutation({
    onSuccess: async () => {
      setCategoryCreateForm({
        name: '',
        description: '',
        slug: '',
        icon: '',
        order: '0',
      });
      setFeedback({ tone: 'success', message: 'Categoria criada com sucesso.' });
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível criar a categoria.'),
      }),
  });

  const updateCategory = trpc.practical.updateCategory.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Categoria atualizada com sucesso.' });
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível atualizar a categoria.'),
      }),
  });

  const deleteCategory = trpc.practical.deleteCategory.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Categoria removida com sucesso.' });
      setSelectedCategoryId(null);
      setSelectedGuideId(null);
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover a categoria.'),
      }),
  });

  const createGuide = trpc.practical.createGuide.useMutation({
    onSuccess: async () => {
      setGuideCreateForm({
        title: '',
        summary: '',
        content: '',
        slug: '',
        order: '0',
        isPublished: false,
      });
      setFeedback({ tone: 'success', message: 'Guia criado com sucesso.' });
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível criar o guia.'),
      }),
  });

  const updateGuide = trpc.practical.updateGuide.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Guia atualizado com sucesso.' });
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível atualizar o guia.'),
      }),
  });

  const deleteGuide = trpc.practical.deleteGuide.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Guia removido com sucesso.' });
      setSelectedGuideId(null);
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover o guia.'),
      }),
  });

  const createGuideLink = trpc.practical.createGuideLink.useMutation({
    onSuccess: async () => {
      setLinkCreateForm({ label: '', url: '', order: '0' });
      setFeedback({ tone: 'success', message: 'Link ?til criado com sucesso.' });
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível criar o link ?til.'),
      }),
  });

  const updateGuideLink = trpc.practical.updateGuideLink.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Link ?til atualizado com sucesso.' });
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível atualizar o link ?til.'),
      }),
  });

  const deleteGuideLink = trpc.practical.deleteGuideLink.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Link ?til removido com sucesso.' });
      await invalidatePractical();
    },
    onError: (error) =>
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover o link ?til.'),
      }),
  });

  if (status === 'loading') {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="space-y-6">
      <section className="edu-hero">
        <span className="edu-kicker">Administração de vida prática</span>
        <h1 className="edu-section-title">Gestão editorial de guias úteis para a vida real.</h1>
        <p className="edu-lead">
          Organize categorias, publique guias com linguagem acessivel e conecte links
          oficiais para consulta rapida da população.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Categorias</CardDescription>
            <CardTitle>{categories.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Guias</CardDescription>
            <CardTitle>{totals.guides}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Guias públicados</CardDescription>
            <CardTitle>{totals.published}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Links úteis</CardDescription>
            <CardTitle>{totals.links}</CardTitle>
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
            Crie a estrutura base da ?rea pública com nome, slug, ?cone e descrição.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Input
            placeholder="Nome"
            value={categoryCreateForm.name}
            onChange={(event) =>
              setCategoryCreateForm((current) => ({
                ...current,
                name: event.target.value,
                slug: current.slug || slugifyInput(event.target.value),
              }))
            }
          />
          <Input
            placeholder="Slug"
            value={categoryCreateForm.slug}
            onChange={(event) =>
              setCategoryCreateForm((current) => ({
                ...current,
                slug: slugifyInput(event.target.value),
              }))
            }
          />
          <Input
            placeholder="Icone curto (ex.: CNH)"
            value={categoryCreateForm.icon}
            onChange={(event) =>
              setCategoryCreateForm((current) => ({ ...current, icon: event.target.value }))
            }
          />
          <Input
            placeholder="Ordem"
            type="number"
            min={0}
            value={categoryCreateForm.order}
            onChange={(event) =>
              setCategoryCreateForm((current) => ({ ...current, order: event.target.value }))
            }
          />
          <div className="md:col-span-2">
            <Textarea
              placeholder="Descrição"
              value={categoryCreateForm.description}
              onChange={(event) =>
                setCategoryCreateForm((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
            />
          </div>
          <div className="md:col-span-2">
            <Button
              className="gap-2"
              disabled={createCategory.isPending || !categoryCreateForm.name.trim()}
              onClick={() =>
                createCategory.mutate({
                  name: categoryCreateForm.name,
                  description: categoryCreateForm.description || undefined,
                  slug: categoryCreateForm.slug || undefined,
                  icon: categoryCreateForm.icon || undefined,
                  order: numberOrZero(categoryCreateForm.order),
                })
              }
            >
              {createCategory.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Criar categoria
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Categorias</CardTitle>
            <CardDescription>
              {isLoading ? 'Carregando...' : `${categories.length} categoria(s)`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setSelectedCategoryId(category.id);
                  setSelectedGuideId(category.guides?.[0]?.id ?? null);
                }}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  selectedCategory?.id === category.id
                    ? 'border-primary bg-[#111111]'
                    : 'border-border hover:bg-[#141414]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-foreground">{category.name}</p>
                    <p className="text-sm text-muted-foreground">{category.slug}</p>
                  </div>
                  <Badge variant="outline">{category.guides?.length ?? 0}</Badge>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
        {selectedCategory && categoryEditForm ? (
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div>
                  <CardTitle>{selectedCategory.name}</CardTitle>
                  <CardDescription>
                    {selectedCategory.description || 'Sem descrição adicional.'}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  disabled={deleteCategory.isPending}
                  onClick={() => deleteCategory.mutate(selectedCategory.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Input
                  placeholder="Nome"
                  value={categoryEditForm.name}
                  onChange={(event) =>
                    updateSelectedCategoryForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                />
                <Input
                  placeholder="Slug"
                  value={categoryEditForm.slug}
                  onChange={(event) =>
                    updateSelectedCategoryForm((current) => ({
                      ...current,
                      slug: slugifyInput(event.target.value),
                    }))
                  }
                />
                <Input
                  placeholder="Icone"
                  value={categoryEditForm.icon}
                  onChange={(event) =>
                    updateSelectedCategoryForm((current) => ({
                      ...current,
                      icon: event.target.value,
                    }))
                  }
                />
                <Input
                  placeholder="Ordem"
                  type="number"
                  min={0}
                  value={categoryEditForm.order}
                  onChange={(event) =>
                    updateSelectedCategoryForm((current) => ({
                      ...current,
                      order: event.target.value,
                    }))
                  }
                />
                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Descrição"
                    value={categoryEditForm.description}
                    onChange={(event) =>
                      updateSelectedCategoryForm((current) => ({
                        ...current,
                        description: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    variant="outline"
                    disabled={updateCategory.isPending}
                    onClick={() =>
                      updateCategory.mutate({
                        id: selectedCategory.id,
                        name: categoryEditForm.name,
                        description: categoryEditForm.description || undefined,
                        slug: categoryEditForm.slug || undefined,
                        icon: categoryEditForm.icon || undefined,
                        order: numberOrZero(categoryEditForm.order),
                      })
                    }
                  >
                    Salvar categoria
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Guias</CardTitle>
                  <CardDescription>
                    {selectedCategory.guides?.length ?? 0} guia(s) nesta categoria
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {(selectedCategory.guides ?? []).map((guide) => (
                    <button
                      key={guide.id}
                      type="button"
                      onClick={() => setSelectedGuideId(guide.id)}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        selectedGuide?.id === guide.id
                          ? 'border-primary bg-[#111111]'
                          : 'border-border hover:bg-[#141414]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-foreground">{guide.title}</p>
                          <p className="text-sm text-muted-foreground">{guide.slug}</p>
                        </div>
                        <Badge variant={guide.isPublished ? 'secondary' : 'outline'}>
                          {guide.isPublished ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Novo guia</CardTitle>
                    <CardDescription>
                      Crie um guia com resumo, conteúdo e status de publicação.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    <Input
                      placeholder="Título"
                      value={guideCreateForm.title}
                      onChange={(event) =>
                        setGuideCreateForm((current) => ({
                          ...current,
                          title: event.target.value,
                          slug: current.slug || slugifyInput(event.target.value),
                        }))
                      }
                    />
                    <Input
                      placeholder="Slug"
                      value={guideCreateForm.slug}
                      onChange={(event) =>
                        setGuideCreateForm((current) => ({
                          ...current,
                          slug: slugifyInput(event.target.value),
                        }))
                      }
                    />
                    <Input
                      placeholder="Ordem"
                      type="number"
                      min={0}
                      value={guideCreateForm.order}
                      onChange={(event) =>
                        setGuideCreateForm((current) => ({
                          ...current,
                          order: event.target.value,
                        }))
                      }
                    />
                    <label className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm text-foreground">
                      <input
                        type="checkbox"
                        checked={guideCreateForm.isPublished}
                        onChange={(event) =>
                          setGuideCreateForm((current) => ({
                            ...current,
                            isPublished: event.target.checked,
                          }))
                        }
                      />
                      Publicar assim que criar
                    </label>
                    <div className="md:col-span-2">
                      <Textarea
                        placeholder="Resumo"
                        value={guideCreateForm.summary}
                        onChange={(event) =>
                          setGuideCreateForm((current) => ({
                            ...current,
                            summary: event.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Textarea
                        placeholder="Conteúdo"
                        className="min-h-40"
                        value={guideCreateForm.content}
                        onChange={(event) =>
                          setGuideCreateForm((current) => ({
                            ...current,
                            content: event.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Button
                        className="gap-2"
                        disabled={createGuide.isPending || !guideCreateForm.title.trim()}
                        onClick={() =>
                          createGuide.mutate({
                            practicalCategoryId: selectedCategory.id,
                            title: guideCreateForm.title,
                            summary: guideCreateForm.summary,
                            content: guideCreateForm.content,
                            slug: guideCreateForm.slug || undefined,
                            order: numberOrZero(guideCreateForm.order),
                            isPublished: guideCreateForm.isPublished,
                          })
                        }
                      >
                        {createGuide.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                        Criar guia
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {selectedGuide && guideEditForm ? (
                  <Card>
                    <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                      <div>
                        <CardTitle>{selectedGuide.title}</CardTitle>
                        <CardDescription>{selectedGuide.summary}</CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        disabled={deleteGuide.isPending}
                        onClick={() => deleteGuide.mutate(selectedGuide.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <Input
                          placeholder="Título"
                          value={guideEditForm.title}
                          onChange={(event) =>
                            updateSelectedGuideForm((current) => ({
                              ...current,
                              title: event.target.value,
                            }))
                          }
                        />
                        <Input
                          placeholder="Slug"
                          value={guideEditForm.slug}
                          onChange={(event) =>
                            updateSelectedGuideForm((current) => ({
                              ...current,
                              slug: slugifyInput(event.target.value),
                            }))
                          }
                        />
                        <Input
                          placeholder="Ordem"
                          type="number"
                          min={0}
                          value={guideEditForm.order}
                          onChange={(event) =>
                            updateSelectedGuideForm((current) => ({
                              ...current,
                              order: event.target.value,
                            }))
                          }
                        />
                        <label className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm text-foreground">
                          <input
                            type="checkbox"
                            checked={guideEditForm.isPublished}
                            onChange={(event) =>
                              updateSelectedGuideForm((current) => ({
                                ...current,
                                isPublished: event.target.checked,
                              }))
                            }
                          />
                          Publicado
                        </label>
                        <div className="md:col-span-2">
                          <Textarea
                            placeholder="Resumo"
                            value={guideEditForm.summary}
                            onChange={(event) =>
                              updateSelectedGuideForm((current) => ({
                                ...current,
                                summary: event.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Textarea
                            placeholder="Conteúdo"
                            className="min-h-40"
                            value={guideEditForm.content}
                            onChange={(event) =>
                              updateSelectedGuideForm((current) => ({
                                ...current,
                                content: event.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Button
                            variant="outline"
                            disabled={updateGuide.isPending}
                            onClick={() =>
                              updateGuide.mutate({
                                id: selectedGuide.id,
                                practicalCategoryId: selectedCategory.id,
                                title: guideEditForm.title,
                                summary: guideEditForm.summary,
                                content: guideEditForm.content,
                                slug: guideEditForm.slug || undefined,
                                order: numberOrZero(guideEditForm.order),
                                isPublished: guideEditForm.isPublished,
                              })
                            }
                          >
                            Salvar guia
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Links úteis
                        </h3>
                        {(selectedGuide.links ?? []).map((link) => {
                          const linkForm = linkEditForms[link.id] ?? {
                            label: link.label,
                            url: link.url,
                            order: String(link.order ?? 0),
                          };

                          return (
                            <div
                              key={link.id}
                              className="grid gap-3 rounded-2xl border border-border p-4 md:grid-cols-[1fr_1.4fr_120px_auto_auto]"
                            >
                              <Input
                                placeholder="Rotulo"
                                value={linkForm.label}
                                onChange={(event) =>
                                  setLinkEditForms((current) => ({
                                    ...current,
                                    [link.id]: { ...linkForm, label: event.target.value },
                                  }))
                                }
                              />
                              <Input
                                placeholder="URL"
                                value={linkForm.url}
                                onChange={(event) =>
                                  setLinkEditForms((current) => ({
                                    ...current,
                                    [link.id]: { ...linkForm, url: event.target.value },
                                  }))
                                }
                              />
                              <Input
                                placeholder="Ordem"
                                type="number"
                                min={0}
                                value={linkForm.order}
                                onChange={(event) =>
                                  setLinkEditForms((current) => ({
                                    ...current,
                                    [link.id]: { ...linkForm, order: event.target.value },
                                  }))
                                }
                              />
                              <Button
                                variant="outline"
                                disabled={updateGuideLink.isPending}
                                onClick={() =>
                                  updateGuideLink.mutate({
                                    id: link.id,
                                    practicalGuideId: selectedGuide.id,
                                    label: linkForm.label,
                                    url: linkForm.url,
                                    order: numberOrZero(linkForm.order),
                                  })
                                }
                              >
                                Salvar
                              </Button>
                              <Button
                                variant="ghost"
                                className="text-destructive hover:text-destructive"
                                disabled={deleteGuideLink.isPending}
                                onClick={() => deleteGuideLink.mutate(link.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          );
                        })}
                        <div className="grid gap-3 rounded-2xl border border-dashed border-border p-4 md:grid-cols-[1fr_1.4fr_120px_auto]">
                          <Input
                            placeholder="Novo link"
                            value={linkCreateForm.label}
                            onChange={(event) =>
                              setLinkCreateForm((current) => ({ ...current, label: event.target.value }))
                            }
                          />
                          <Input
                            placeholder="https://..."
                            value={linkCreateForm.url}
                            onChange={(event) =>
                              setLinkCreateForm((current) => ({ ...current, url: event.target.value }))
                            }
                          />
                          <Input
                            placeholder="Ordem"
                            type="number"
                            min={0}
                            value={linkCreateForm.order}
                            onChange={(event) =>
                              setLinkCreateForm((current) => ({ ...current, order: event.target.value }))
                            }
                          />
                          <Button
                            variant="outline"
                            disabled={createGuideLink.isPending || !linkCreateForm.label.trim()}
                            onClick={() =>
                              createGuideLink.mutate({
                                practicalGuideId: selectedGuide.id,
                                label: linkCreateForm.label,
                                url: linkCreateForm.url,
                                order: numberOrZero(linkCreateForm.order),
                              })
                            }
                          >
                            Novo link
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center text-muted-foreground">
                      Selecione um guia para editar publicação, conteúdo e links úteis.
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              Crie ou selecione uma categoria para gerenciar o modulo.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
