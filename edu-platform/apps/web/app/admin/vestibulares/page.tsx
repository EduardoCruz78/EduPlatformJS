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
  const [selectedSubjectId, setSelectedSubjectId] = useState<number | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
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
    originalTopicId: '',
  });
  const [contentForm, setContentForm] = useState({
    title: '',
    type: 'ARTICLE' as ContentType,
    link: '',
    pdfUrl: '',
  });
  const [shareForm, setShareForm] = useState({ contentId: '' });

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

  const selectedSubject = useMemo(
    () => subjects.find((subject) => subject.id === selectedSubjectId) ?? null,
    [selectedSubjectId, subjects]
  );
  const topicsFromSelectedSubject = useMemo(
    () =>
      selectedSubject
        ? topics.filter((topic) => topic.subjectId === selectedSubject.id)
        : [],
    [selectedSubject, topics]
  );
  const selectedTopic = useMemo(
    () => topicsFromSelectedSubject.find((topic) => topic.id === selectedTopicId) ?? null,
    [selectedTopicId, topicsFromSelectedSubject]
  );
  const contentsFromSelectedTopic = useMemo(
    () =>
      selectedTopic
        ? contents.filter((content) => content.vestibularTopicId === selectedTopic.id)
        : [],
    [contents, selectedTopic]
  );
  const originalTopicsForSelectedSubject = useMemo(
    () =>
      selectedSubject
        ? allTopics.filter((topic) =>
            topic.subjects?.some((subject) => subject.id === selectedSubject.id)
          )
        : [],
    [allTopics, selectedSubject]
  );
  const shareableContents = useMemo(() => {
    if (!selectedTopic?.originalTopicId) {
      return allContents;
    }

    return allContents.filter((content) => content.topicId === selectedTopic.originalTopicId);
  }, [allContents, selectedTopic]);
  const topicNameById = useMemo(
    () => new Map(topics.map((topic) => [topic.id, topic.name])),
    [topics]
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
      setSelectedSubjectId(null);
      setSelectedTopicId(null);
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
      setSelectedSubjectId(null);
      setSelectedTopicId(null);
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
      setTopicForm({ name: '', notes: '', tags: '', originalTopicId: '' });
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
      setContentForm({ title: '', type: 'ARTICLE', link: '', pdfUrl: '' });
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
      setShareForm({ contentId: '' });
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
                  onClick={() => {
                    setSelectedId(vestibular.id);
                    setSelectedSubjectId(null);
                    setSelectedTopicId(null);
                  }}
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

            <div className="grid gap-6 xl:grid-cols-[minmax(240px,0.8fr)_minmax(280px,1fr)_minmax(300px,1.2fr)]">
              <Card>
                <CardHeader>
                  <CardTitle>Matérias</CardTitle>
                  <CardDescription>
                    {subjects.length} vinculada(s). Abra uma matéria para gerenciar seus tópicos.
                  </CardDescription>
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
                          className={`flex items-center justify-between gap-3 rounded-md border p-3 ${
                            selectedSubjectId === subject.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border'
                          }`}
                        >
                          <div>
                            <p className="font-medium text-foreground">{subject.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {subject.series?.name || 'Sem série'}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedSubjectId(subject.id);
                                setSelectedTopicId(null);
                              }}
                            >
                              Abrir
                            </Button>
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
                              aria-label={`Remover ${subject.name}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
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
                  <CardDescription>
                    {selectedSubject
                      ? `${topicsFromSelectedSubject.length} tópico(s) em ${selectedSubject.name}`
                      : 'Selecione uma matéria para ver os tópicos.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedSubject ? (
                    <div className="rounded-md border border-border p-3 text-sm">
                      Matéria ativa: <strong>{selectedSubject.name}</strong>
                    </div>
                  ) : null}
                  <Input
                    placeholder="Nome do tópico"
                    value={topicForm.name}
                    disabled={!selectedSubject}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, name: event.target.value }))
                    }
                  />
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                    value={topicForm.originalTopicId}
                    disabled={!selectedSubject}
                    onChange={(event) =>
                      setTopicForm((current) => ({
                        ...current,
                        originalTopicId: event.target.value,
                      }))
                    }
                  >
                    <option value="">Tópico global relacionado</option>
                    {originalTopicsForSelectedSubject.map((topic) => (
                      <option key={topic.id} value={String(topic.id)}>
                        {topic.name}
                      </option>
                    ))}
                  </select>
                  <Textarea
                    placeholder="Notas"
                    value={topicForm.notes}
                    disabled={!selectedSubject}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, notes: event.target.value }))
                    }
                  />
                  <Input
                    placeholder="Tags separadas por vírgula"
                    value={topicForm.tags}
                    disabled={!selectedSubject}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, tags: event.target.value }))
                    }
                  />
                  <Button
                    variant="outline"
                    disabled={
                      createTopic.isPending || !topicForm.name.trim() || !selectedSubject
                    }
                    onClick={() =>
                      createTopic.mutate({
                        vestibularId: selectedVestibular.id,
                        subjectId: selectedSubject?.id ?? 0,
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
                    {topicsFromSelectedSubject.length ? (
                      topicsFromSelectedSubject.map((topic) => (
                        <div
                          key={topic.id}
                          className={`flex items-center justify-between gap-3 rounded-md border p-3 ${
                            selectedTopicId === topic.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border'
                          }`}
                        >
                          <div>
                            <p className="font-medium text-foreground">{topic.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {topic.notes || 'Sem notas'}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedTopicId(topic.id)}
                            >
                              Abrir
                            </Button>
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
                              aria-label={`Remover ${topic.name}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                        {selectedSubject
                          ? 'Nenhum tópico cadastrado para esta matéria.'
                          : 'Abra uma matéria para listar os tópicos.'}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conteúdos</CardTitle>
                  <CardDescription>
                    {selectedTopic
                      ? `${contentsFromSelectedTopic.length} conteúdo(s) em ${selectedTopic.name}`
                      : `${contents.length} disponíveis, ${sharedContentCount} compartilhado(s)`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedTopic ? (
                    <div className="rounded-md border border-border p-3 text-sm">
                      Tópico ativo: <strong>{selectedTopic.name}</strong>
                    </div>
                  ) : null}
                  <Input
                    placeholder="Título"
                    value={contentForm.title}
                    disabled={!selectedTopic}
                    onChange={(event) =>
                      setContentForm((current) => ({ ...current, title: event.target.value }))
                    }
                  />
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                    value={contentForm.type}
                    disabled={!selectedTopic}
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
                    disabled={!selectedTopic}
                    onChange={(event) =>
                      setContentForm((current) => ({ ...current, link: event.target.value }))
                    }
                  />
                  <Input
                    placeholder="URL do PDF"
                    value={contentForm.pdfUrl}
                    disabled={!selectedTopic || contentForm.type !== 'PDF'}
                    onChange={(event) =>
                      setContentForm((current) => ({ ...current, pdfUrl: event.target.value }))
                    }
                  />
                  <Button
                    variant="outline"
                    disabled={
                      createContent.isPending ||
                      !contentForm.title.trim() ||
                      !selectedTopic ||
                      (contentForm.type === 'ARTICLE' && !contentForm.link.trim()) ||
                      (contentForm.type === 'VIDEO' && !contentForm.link.trim()) ||
                      (contentForm.type === 'PDF' &&
                        !contentForm.pdfUrl.trim() &&
                        !contentForm.link.trim())
                    }
                    onClick={() =>
                      createContent.mutate({
                        vestibularId: selectedVestibular.id,
                        vestibularTopicId: selectedTopic?.id ?? 0,
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
                    <p className="text-sm text-muted-foreground">
                      O conteúdo será vinculado ao tópico ativo.
                    </p>
                    <select
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={shareForm.contentId}
                      disabled={!selectedTopic}
                      onChange={(event) =>
                        setShareForm((current) => ({ ...current, contentId: event.target.value }))
                      }
                    >
                      <option value="">Selecionar conteúdo global</option>
                      {shareableContents.map((content) => (
                        <option key={content.id} value={String(content.id)}>
                          {content.title}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline"
                      disabled={
                        shareContent.isPending || !shareForm.contentId || !selectedTopic
                      }
                      onClick={() =>
                        shareContent.mutate({
                          vestibularId: selectedVestibular.id,
                          contentId: Number(shareForm.contentId),
                          vestibularTopicId: selectedTopic?.id ?? 0,
                        })
                      }
                    >
                      Compartilhar conteúdo existente
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {contentsFromSelectedTopic.length ? (
                      contentsFromSelectedTopic.map((content) => (
                        <div
                          key={content.id}
                          className="flex items-center justify-between gap-3 rounded-md border border-border p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{content.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {content.type || 'Material'}
                              {content.isShared ? ' • compartilhado' : ' • exclusivo'}
                              {content.vestibularTopicId
                                ? ` • ${topicNameById.get(content.vestibularTopicId) ?? 'tópico vinculado'}`
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
                        {selectedTopic
                          ? 'Nenhum conteúdo cadastrado neste tópico.'
                          : 'Abra um tópico para listar conteúdos.'}
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
