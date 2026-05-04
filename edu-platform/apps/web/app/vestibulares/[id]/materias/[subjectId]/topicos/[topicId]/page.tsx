'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, FileText, Video } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { trpc } from '@/lib/trpc';

function getContentIcon(type?: string | null) {
  return type === 'VIDEO' ? Video : FileText;
}

function getContentLabel(type?: string | null) {
  if (type === 'VIDEO') return 'Vídeo';
  if (type === 'PDF') return 'PDF';
  return 'Artigo';
}

export default function VestibularTopicPage() {
  const params = useParams<{ id: string; subjectId: string; topicId: string }>();
  const vestibularId = Number(params.id);
  const subjectId = Number(params.subjectId);
  const topicId = Number(params.topicId);

  const { data: vestibular, isLoading: isLoadingVestibular } =
    trpc.vestibular.findById.useQuery(vestibularId, { enabled: vestibularId > 0 });
  const { data: subjects = [], isLoading: isLoadingSubjects } =
    trpc.vestibular.findSubjects.useQuery({ vestibularId }, { enabled: vestibularId > 0 });
  const { data: topics = [], isLoading: isLoadingTopics } =
    trpc.vestibular.findTopics.useQuery(
      { vestibularId, subjectId },
      { enabled: vestibularId > 0 && subjectId > 0 }
    );
  const { data: contents = [], isLoading: isLoadingContents } =
    trpc.vestibular.findContents.useQuery(
      { vestibularId, vestibularTopicId: topicId },
      { enabled: vestibularId > 0 && topicId > 0 }
    );

  const subject = subjects.find((item) => item.id === subjectId);
  const topic = topics.find((item) => item.id === topicId);

  if (isLoadingVestibular || isLoadingSubjects || isLoadingTopics || isLoadingContents) {
    return (
      <div className="edu-shell space-y-6">
        <Skeleton className="h-16 rounded-[2rem]" />
        <Skeleton className="h-80 rounded-[2.5rem]" />
      </div>
    );
  }

  if (!vestibular || !subject || !topic) {
    return (
      <div className="edu-shell">
        <div className="edu-panel p-8 text-center">
          <p className="text-lg text-destructive">Tópico não encontrado.</p>
          <Link
            href={`/vestibulares/${vestibularId}/materias/${subjectId}`}
            className="mt-6 inline-flex edu-nav-link"
          >
            Voltar para a matéria
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edu-shell">
      <div className="edu-topbar">
        <Link href={`/vestibulares/${vestibular.id}/materias/${subject.id}`} className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          {subject.name}
        </Link>
        <Badge variant="outline">{vestibular.name}</Badge>
      </div>

      <section className="edu-hero space-y-4">
        <span className="edu-kicker">Aplicação em vestibular</span>
        <h1 className="edu-section-title">{topic.name}</h1>
        <p className="edu-lead">
          {topic.notes ||
            `Materiais gerais e conteúdo aplicado ao ${vestibular.name} para este tópico.`}
        </p>
        {topic.tags ? (
          <div className="flex flex-wrap gap-2">
            {topic.tags.split(',').map((tag) => (
              <Badge key={tag.trim()} variant="secondary">
                {tag.trim()}
              </Badge>
            ))}
          </div>
        ) : null}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        {contents.length ? (
          contents.map((content) => {
            const Icon = getContentIcon(content.type);
            const href = content.link ?? content.pdfUrl ?? '#';

            return (
              <a
                key={content.id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="edu-home-card group flex min-h-56 flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Badge variant={content.isShared ? 'secondary' : 'outline'}>
                      {content.isShared ? 'Conteúdo geral' : 'Aplicado ao vestibular'}
                    </Badge>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="mt-4 text-xl font-black text-white sm:text-2xl">{content.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {getContentLabel(content.type)} com apoio de transcrição, Libras e descrição
                    quando disponível.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Abrir material
                  <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            );
          })
        ) : (
          <div className="edu-panel p-6 text-sm text-muted-foreground">
            Nenhum conteúdo cadastrado para este tópico ainda.
          </div>
        )}
      </section>
    </div>
  );
}
