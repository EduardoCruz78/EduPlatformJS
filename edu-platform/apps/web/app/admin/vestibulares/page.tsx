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
type ContentType = 'VIDEO' | 'PDF' | 'ARTICLE';

function toErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

export default function AdminVestibularesPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const utils = trpc.useUtils();

  const { data: vestibulares = [], isLoading } = trpc.vestibular.find.useQuery();
  const { data: allContents = [] } = trpc.content.find.useQuery();
  const { data: allTopics = [] } = trpc.topic.find.useQuery();

  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [createForm, setCreateForm] = useState({
    name: '',
    description: '',
    year: String(new Date().getFullYear()),
    imageUrl: '',
  });
  const [subjectName, setSubjectName] = useState('');
  const [topicForm, setTopicForm] = useState({
    name: '',
    notes: '',
    tags: '',
    subjectId: '',
    originalTopicId: '',
  });
  const [contentForm, setContentForm] = useState({
    title: '',
    type: 'ARTICLE' as ContentType,
    link: '',
    pdfUrl: '',
    vestibularTopicId: '',
  });
  const [shareForm, setShareForm] = useState({ contentId: '', vestibularTopicId: '' });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const effectiveSelectedId = selectedId ?? vestibulares[0]?.id ?? null;
  const selectedVestibular = useMemo(
    () => vestibulares.find((item) => item.id === effectiveSelectedId) ?? null,
    [effectiveSelectedId, vestibulares]
  );

  const { data: subjects = [] } = trpc.vestibular.findSubjects.useQuery(
    { vestibularId: effectiveSelectedId ?? 0 },
    { enabled: Boolean(effectiveSelectedId) }
  );
  const { data: topics = [] } = trpc.vestibular.findTopics.useQuery(
    { vestibularId: effectiveSelectedId ?? 0 },
    { enabled: Boolean(effectiveSelectedId) }
  );
  const { data: contents = [] } = trpc.vestibular.findContents.useQuery(
    { vestibularId: effectiveSelectedId ?? 0 },
    { enabled: Boolean(effectiveSelectedId) }
  );

  const sharedContentCount = useMemo(
    () => contents.filter((content) => content.isShared).length,
    [contents]
  );

  const invalidateVestibulares = async () => {
    await Promise.all([
      utils.vestibular.find.invalidate(),
      utils.vestibular.findById.invalidate(),
      utils.vestibular.findSubjects.invalidate(),
      utils.vestibular.findTopics.invalidate(),
      utils.vestibular.findContents.invalidate(),
    ]);
  };

  const createVestibular = trpc.vestibular.create.useMutation({
    onSuccess: async (vestibular) => {
      await invalidateVestibulares();
      setCreateForm({
        name: '',
        description: '',
        year: String(new Date().getFullYear()),
        imageUrl: '',
      });
      setSelectedId(vestibular.id);
      setFeedback({ tone: 'success', message: 'Vestibular criado com sucesso.' });
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível criar o vestibular.'),
      });
    },
  });

  const deleteVestibular = trpc.vestibular.delete.useMutation({
    onSuccess: async () => {
      await invalidateVestibulares();
      setSelectedId(null);
      setFeedback({ tone: 'success', message: 'Vestibular removido com sucesso.' });
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover o vestibular.'),
      });
    },
  });

  const createSubject = trpc.vestibular.createSubject.useMutation({
    onSuccess: async () => {
      setSubjectName('');
      setFeedback({ tone: 'success', message: 'Matéria adicionada com sucesso.' });
      await invalidateVestibulares();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível adicionar a matéria.'),
      });
    },
  });

  const deleteSubject = trpc.vestibular.deleteSubject.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Matéria removida com sucesso.' });
      await invalidateVestibulares();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover a matéria.'),
      });
    },
  });

  const createTopic = trpc.vestibular.createTopic.useMutation({
    onSuccess: async () => {
      setTopicForm({ name: '', notes: '', tags: '', subjectId: '', originalTopicId: '' });
      setFeedback({ tone: 'success', message: 'Tópico adicionado com sucesso.' });
      await invalidateVestibulares();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível adicionar o tópico.'),
      });
    },
  });

  const deleteTopic = trpc.vestibular.deleteTopic.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Tópico removido com sucesso.' });
      await invalidateVestibulares();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover o tópico.'),
      });
    },
  });

  const createContent = trpc.vestibular.createContent.useMutation({
    onSuccess: async () => {
      setContentForm({ title: '', type: 'ARTICLE', link: '', pdfUrl: '', vestibularTopicId: '' });
      setFeedback({ tone: 'success', message: 'Conteúdo exclusivo adicionado com sucesso.' });
      await invalidateVestibulares();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível adicionar o conteúdo.'),
      });
    },
  });

  const shareContent = trpc.vestibular.shareContent.useMutation({
    onSuccess: async () => {
      setShareForm({ contentId: '', vestibularTopicId: '' });
      setFeedback({ tone: 'success', message: 'Conteúdo compartilhado com sucesso.' });
      await invalidateVestibulares();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível compartilhar o conteúdo.'),
      });
    },
  });

  const deleteContent = trpc.vestibular.deleteContent.useMutation({
    onSuccess: async () => {
      setFeedback({ tone: 'success', message: 'Conteúdo removido com sucesso.' });
      await invalidateVestibulares();
    },
    onError: (error) => {
      setFeedback({
        tone: 'error',
        message: toErrorMessage(error, 'Não foi possível remover o conteúdo.'),
      });
    },
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
        <span className="edu-kicker">Administração de vestibulares</span>
        <h1 className="edu-section-title">Trilhas por matéria, tópico e aplicação em prova.</h1>
        <p className="edu-lead">
          Organize vestibulares com a mesma lógica das séries: escolha matéria, cadastre tópicos e
          vincule conteúdos gerais ou materiais exclusivos do exame.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Vestibulares</CardDescription>
            <CardTitle>{vestibulares.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Matérias selecionadas</CardDescription>
            <CardTitle>{subjects.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Tópicos selecionados</CardDescription>
            <CardTitle>{topics.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Conteúdos compartilhados</CardDescription>
            <CardTitle>{sharedContentCount}</CardTitle>
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
          <CardTitle>Novo vestibular</CardTitle>
          <CardDescription>Crie a trilha base com nome, ano, imagem e descrição.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Input
            placeholder="Nome"
            value={createForm.name}
            onChange={(event) =>
              setCreateForm((current) => ({ ...current, name: event.target.value }))
            }
          />
          <Input
            placeholder="Ano"
            type="number"
            value={createForm.year}
            onChange={(event) =>
              setCreateForm((current) => ({ ...current, year: event.target.value }))
            }
          />
          <Input
            placeholder="Imagem"
            value={createForm.imageUrl}
            onChange={(event) =>
              setCreateForm((current) => ({ ...current, imageUrl: event.target.value }))
            }
          />
          <div className="md:col-span-2">
            <Textarea
              placeholder="Descrição"
              value={createForm.description}
              onChange={(event) =>
                setCreateForm((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
            />
          </div>
          <div className="md:col-span-2">
            <Button
              className="gap-2"
              disabled={createVestibular.isPending || !createForm.name.trim()}
              onClick={() =>
                createVestibular.mutate({
                  name: createForm.name,
                  description: createForm.description,
                  year: Number(createForm.year),
                  imageUrl: createForm.imageUrl || undefined,
                })
              }
            >
              {createVestibular.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Criar vestibular
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Lista</CardTitle>
            <CardDescription>
              {isLoading ? 'Carregando...' : `${vestibulares.length} vestibular(es)`}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {vestibulares.length ? (
              vestibulares.map((vestibular) => (
                <button
                  key={vestibular.id}
                  type="button"
                  onClick={() => setSelectedId(vestibular.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    effectiveSelectedId === vestibular.id
                      ? 'border-primary bg-[#111111]'
                      : 'border-border hover:bg-[#141414]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-foreground">{vestibular.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {vestibular.year || 'Ano não informado'}
                      </p>
                    </div>
                    <Badge variant="outline">{vestibular.id}</Badge>
                  </div>
                </button>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                Nenhum vestibular cadastrado ainda.
              </div>
            )}
          </CardContent>
        </Card>

        {selectedVestibular ? (
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div>
                  <CardTitle>{selectedVestibular.name}</CardTitle>
                  <CardDescription>
                    {selectedVestibular.description || 'Sem descrição adicional.'}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  disabled={deleteVestibular.isPending}
                  onClick={() => deleteVestibular.mutate(selectedVestibular.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>

            <div className="grid gap-6 xl:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Matérias</CardTitle>
                  <CardDescription>{subjects.length} vinculada(s)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Nova matéria"
                      value={subjectName}
                      onChange={(event) => setSubjectName(event.target.value)}
                    />
                    <Button
                      variant="outline"
                      disabled={createSubject.isPending || !subjectName.trim()}
                      onClick={() =>
                        createSubject.mutate({
                          vestibularId: selectedVestibular.id,
                          name: subjectName,
                        })
                      }
                    >
                      Adicionar
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {subjects.length ? (
                      subjects.map((subject) => (
                        <div
                          key={subject.id}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-border p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{subject.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {subject.series?.name || 'Sem série'}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                            disabled={deleteSubject.isPending}
                            onClick={() =>
                              deleteSubject.mutate({
                                vestibularId: selectedVestibular.id,
                                subjectId: subject.id,
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                        Nenhuma matéria vinculada ainda.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tópicos</CardTitle>
                  <CardDescription>{topics.length} cadastrados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                    value={topicForm.subjectId}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, subjectId: event.target.value }))
                    }
                  >
                    <option value="">Matéria do vestibular</option>
                    {subjects.map((subject) => (
                      <option key={subject.id} value={String(subject.id)}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                  <Input
                    placeholder="Nome do tópico"
                    value={topicForm.name}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, name: event.target.value }))
                    }
                  />
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                    value={topicForm.originalTopicId}
                    onChange={(event) =>
                      setTopicForm((current) => ({
                        ...current,
                        originalTopicId: event.target.value,
                      }))
                    }
                  >
                    <option value="">Tópico global relacionado</option>
                    {allTopics.map((topic) => (
                      <option key={topic.id} value={String(topic.id)}>
                        {topic.name}
                      </option>
                    ))}
                  </select>
                  <Textarea
                    placeholder="Notas"
                    value={topicForm.notes}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, notes: event.target.value }))
                    }
                  />
                  <Input
                    placeholder="Tags separadas por vírgula"
                    value={topicForm.tags}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, tags: event.target.value }))
                    }
                  />
                  <Button
                    variant="outline"
                    disabled={
                      createTopic.isPending || !topicForm.name.trim() || !topicForm.subjectId
                    }
                    onClick={() =>
                      createTopic.mutate({
                        vestibularId: selectedVestibular.id,
                        subjectId: Number(topicForm.subjectId),
                        originalTopicId: topicForm.originalTopicId
                          ? Number(topicForm.originalTopicId)
                          : undefined,
                        name: topicForm.name,
                        notes: topicForm.notes || undefined,
                        tags: topicForm.tags || undefined,
                      })
                    }
                  >
                    Adicionar tópico
                  </Button>
                  <div className="space-y-2">
                    {topics.length ? (
                      topics.map((topic) => (
                        <div
                          key={topic.id}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-border p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{topic.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {topic.subject?.name || 'Sem matéria'} • {topic.notes || 'Sem notas'}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                            disabled={deleteTopic.isPending}
                            onClick={() =>
                              deleteTopic.mutate({
                                vestibularId: selectedVestibular.id,
                                topicId: topic.id,
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                        Nenhum tópico cadastrado ainda.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conteúdos</CardTitle>
                  <CardDescription>
                    {contents.length} disponíveis, {sharedContentCount} compartilhado(s)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                    value={contentForm.vestibularTopicId}
                    onChange={(event) =>
                      setContentForm((current) => ({
                        ...current,
                        vestibularTopicId: event.target.value,
                      }))
                    }
                  >
                    <option value="">Tópico do vestibular</option>
                    {topics.map((topic) => (
                      <option key={topic.id} value={String(topic.id)}>
                        {topic.subject?.name ? `${topic.subject.name} • ` : ''}
                        {topic.name}
                      </option>
                    ))}
                  </select>
                  <Input
                    placeholder="Título"
                    value={contentForm.title}
                    onChange={(event) =>
                      setContentForm((current) => ({ ...current, title: event.target.value }))
                    }
                  />
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                    value={contentForm.type}
                    onChange={(event) =>
                      setContentForm((current) => ({
                        ...current,
                        type: event.target.value as ContentType,
                      }))
                    }
                  >
                    <option value="ARTICLE">Artigo</option>
                    <option value="VIDEO">Vídeo</option>
                    <option value="PDF">PDF</option>
                  </select>
                  <Input
                    placeholder="Link"
                    value={contentForm.link}
                    onChange={(event) =>
                      setContentForm((current) => ({ ...current, link: event.target.value }))
                    }
                  />
                  <Input
                    placeholder="URL do PDF"
                    value={contentForm.pdfUrl}
                    onChange={(event) =>
                      setContentForm((current) => ({ ...current, pdfUrl: event.target.value }))
                    }
                  />
                  <Button
                    variant="outline"
                    disabled={
                      createContent.isPending ||
                      !contentForm.title.trim() ||
                      !contentForm.vestibularTopicId
                    }
                    onClick={() =>
                      createContent.mutate({
                        vestibularId: selectedVestibular.id,
                        vestibularTopicId: Number(contentForm.vestibularTopicId),
                        title: contentForm.title,
                        type: contentForm.type,
                        link: contentForm.link || undefined,
                        pdfUrl: contentForm.pdfUrl || undefined,
                      })
                    }
                  >
                    Adicionar conteúdo exclusivo
                  </Button>

                  <div className="space-y-3 rounded-2xl border border-border p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Compartilhar conteúdo global
                    </p>
                    <select
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={shareForm.vestibularTopicId}
                      onChange={(event) =>
                        setShareForm((current) => ({
                          ...current,
                          vestibularTopicId: event.target.value,
                        }))
                      }
                    >
                      <option value="">Tópico de destino</option>
                      {topics.map((topic) => (
                        <option key={topic.id} value={String(topic.id)}>
                          {topic.subject?.name ? `${topic.subject.name} • ` : ''}
                          {topic.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={shareForm.contentId}
                      onChange={(event) =>
                        setShareForm((current) => ({ ...current, contentId: event.target.value }))
                      }
                    >
                      <option value="">Selecionar conteúdo global</option>
                      {allContents.map((content) => (
                        <option key={content.id} value={String(content.id)}>
                          {content.title}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline"
                      disabled={
                        shareContent.isPending || !shareForm.contentId || !shareForm.vestibularTopicId
                      }
                      onClick={() =>
                        shareContent.mutate({
                          vestibularId: selectedVestibular.id,
                          contentId: Number(shareForm.contentId),
                          vestibularTopicId: Number(shareForm.vestibularTopicId),
                        })
                      }
                    >
                      Compartilhar conteúdo existente
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {contents.length ? (
                      contents.map((content) => (
                        <div
                          key={content.id}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-border p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{content.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {content.type || 'Material'}
                              {content.isShared ? ' • compartilhado' : ' • exclusivo'}
                              {content.vestibularTopicId
                                ? ` • tópico #${content.vestibularTopicId}`
                                : ''}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                            disabled={deleteContent.isPending}
                            onClick={() =>
                              deleteContent.mutate({
                                vestibularId: selectedVestibular.id,
                                contentId: content.id,
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                        Nenhum conteúdo disponível ainda.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              Selecione um vestibular para gerenciar matérias, tópicos e conteúdos.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
