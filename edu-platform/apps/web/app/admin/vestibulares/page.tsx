'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Loader2, Plus, Trash2 } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function AdminVestibularesPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const utils = trpc.useUtils();

  const { data: vestibulares = [], isLoading } = trpc.vestibular.find.useQuery();
  const { data: allContents = [] } = trpc.content.find.useQuery();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [createForm, setCreateForm] = useState({
    name: '',
    description: '',
    year: String(new Date().getFullYear()),
    imageUrl: '',
  });
  const [subjectName, setSubjectName] = useState('');
  const [topicForm, setTopicForm] = useState({ name: '', notes: '', tags: '' });
  const [contentForm, setContentForm] = useState({
    title: '',
    type: 'ARTICLE' as 'VIDEO' | 'PDF' | 'ARTICLE',
    link: '',
    pdfUrl: '',
  });
  const [shareContentId, setShareContentId] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (!selectedId && vestibulares.length > 0) {
      setSelectedId(vestibulares[0].id);
    }
  }, [selectedId, vestibulares]);

  const selectedVestibular = useMemo(
    () => vestibulares.find((item) => item.id === selectedId) ?? null,
    [selectedId, vestibulares]
  );

  const { data: subjects = [] } = trpc.vestibular.findSubjects.useQuery(
    { vestibularId: selectedId ?? 0 },
    { enabled: Boolean(selectedId) }
  );
  const { data: topics = [] } = trpc.vestibular.findTopics.useQuery(
    { vestibularId: selectedId ?? 0 },
    { enabled: Boolean(selectedId) }
  );
  const { data: contents = [] } = trpc.vestibular.findContents.useQuery(
    { vestibularId: selectedId ?? 0 },
    { enabled: Boolean(selectedId) }
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
    },
  });

  const deleteVestibular = trpc.vestibular.delete.useMutation({
    onSuccess: async () => {
      await invalidateVestibulares();
      setSelectedId(null);
    },
  });

  const createSubject = trpc.vestibular.createSubject.useMutation({
    onSuccess: async () => {
      setSubjectName('');
      await invalidateVestibulares();
    },
  });

  const deleteSubject = trpc.vestibular.deleteSubject.useMutation({
    onSuccess: invalidateVestibulares,
  });

  const createTopic = trpc.vestibular.createTopic.useMutation({
    onSuccess: async () => {
      setTopicForm({ name: '', notes: '', tags: '' });
      await invalidateVestibulares();
    },
  });

  const deleteTopic = trpc.vestibular.deleteTopic.useMutation({
    onSuccess: invalidateVestibulares,
  });

  const createContent = trpc.vestibular.createContent.useMutation({
    onSuccess: async () => {
      setContentForm({ title: '', type: 'ARTICLE', link: '', pdfUrl: '' });
      await invalidateVestibulares();
    },
  });

  const shareContent = trpc.vestibular.shareContent.useMutation({
    onSuccess: async () => {
      setShareContentId('');
      await invalidateVestibulares();
    },
  });

  const deleteContent = trpc.vestibular.deleteContent.useMutation({
    onSuccess: invalidateVestibulares,
  });

  if (status === 'loading') {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Vestibulares</h1>
        <p className="mt-2 text-muted-foreground">
          Gerencie vestibulares, matérias, tópicos e conteúdos exclusivos.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Novo Vestibular</CardTitle>
          <CardDescription>Crie um vestibular com os metadados principais.</CardDescription>
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
              disabled={createVestibular.isPending}
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
            {vestibulares.map((vestibular) => (
              <button
                key={vestibular.id}
                type="button"
                onClick={() => setSelectedId(vestibular.id)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  selectedId === vestibular.id
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
            ))}
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
                    {subjects.map((subject) => (
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
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tópicos</CardTitle>
                  <CardDescription>{topics.length} cadastrados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Nome do tópico"
                    value={topicForm.name}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, name: event.target.value }))
                    }
                  />
                  <Textarea
                    placeholder="Notas"
                    value={topicForm.notes}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, notes: event.target.value }))
                    }
                  />
                  <Input
                    placeholder="Tags"
                    value={topicForm.tags}
                    onChange={(event) =>
                      setTopicForm((current) => ({ ...current, tags: event.target.value }))
                    }
                  />
                  <Button
                    variant="outline"
                    onClick={() =>
                      createTopic.mutate({
                        vestibularId: selectedVestibular.id,
                        name: topicForm.name,
                        notes: topicForm.notes || undefined,
                        tags: topicForm.tags || undefined,
                      })
                    }
                  >
                    Adicionar tópico
                  </Button>
                  <div className="space-y-2">
                    {topics.map((topic) => (
                      <div
                        key={topic.id}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-border p-3"
                      >
                        <div>
                          <p className="font-medium text-foreground">{topic.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {topic.notes || 'Sem notas'}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
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
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conteúdos</CardTitle>
                  <CardDescription>{contents.length} disponíveis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        type: event.target.value as 'VIDEO' | 'PDF' | 'ARTICLE',
                      }))
                    }
                  >
                    <option value="ARTICLE">ARTICLE</option>
                    <option value="VIDEO">VIDEO</option>
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
                    placeholder="PDF URL"
                    value={contentForm.pdfUrl}
                    onChange={(event) =>
                      setContentForm((current) => ({ ...current, pdfUrl: event.target.value }))
                    }
                  />
                  <Button
                    variant="outline"
                    onClick={() =>
                      createContent.mutate({
                        vestibularId: selectedVestibular.id,
                        title: contentForm.title,
                        type: contentForm.type,
                        link: contentForm.link || undefined,
                        pdfUrl: contentForm.pdfUrl || undefined,
                      })
                    }
                  >
                    Adicionar conteúdo
                  </Button>

                  <div className="space-y-3">
                    <select
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={shareContentId}
                      onChange={(event) => setShareContentId(event.target.value)}
                    >
                      <option value="">Selecionar conteúdo global para compartilhar</option>
                      {allContents.map((content) => (
                        <option key={content.id} value={String(content.id)}>
                          {content.title}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline"
                      onClick={() => {
                        const contentId = Number(shareContentId);
                        if (!contentId) return;
                        shareContent.mutate({
                          vestibularId: selectedVestibular.id,
                          contentId,
                        });
                      }}
                    >
                      Compartilhar conteúdo existente
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {contents.map((content) => (
                      <div
                        key={content.id}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-border p-3"
                      >
                        <div>
                          <p className="font-medium text-foreground">{content.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {content.type || 'Material'}
                            {content.isShared ? ' • compartilhado' : ' • exclusivo'}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
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
                    ))}
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
