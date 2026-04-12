// apps/web/app/topics/page.tsx
'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { trpc } from "@/server/trpc/react";
import type { Topic } from "@edu-platform/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function TopicsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjectIdParam = searchParams.get("subjectId");
  const subjectId = Number(subjectIdParam || 0);

  // ✅ CORRIGIDO: Passar objeto com subjectId
  const { data: topics = [], isLoading, error } = trpc.topic.getBySubject.useQuery(
    { subjectId },
    { enabled: subjectId > 0 }
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-10 w-80 bg-muted rounded-2xl" />
            <Card>
              <CardContent className="p-8">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full mb-4 rounded-3xl" />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || subjectId === 0) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <p className="text-destructive text-xl">Selecione uma matéria primeiro</p>
            <Link
              href="/subjects"
              className="mt-6 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition"
            >
              ← Voltar às Matérias
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Tópicos</h1>
            <p className="text-muted-foreground mt-1">Escolha um tópico para ver os conteúdos</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/subjects"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition"
            >
              ← Voltar às Matérias
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-destructive hover:text-destructive/80 font-medium flex items-center gap-2 transition"
            >
              Sair
            </button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              Todos os Tópicos
              <Badge variant="secondary">{topics.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topics.length === 0 ? (
              <p className="text-muted-foreground py-12 text-center">
                Nenhum tópico encontrado. Rode o seed do Prisma!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic: Topic) => (
                  <Link
                    key={topic.id}
                    href={`/contents?topicId=${topic.id}`}
                    className="group bg-card hover:bg-accent border border-border hover:border-primary/30 transition-all rounded-3xl p-6 flex flex-col"
                  >
                    <span className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {topic.name}
                    </span>
                    <p className="text-sm text-muted-foreground">Clique para ver os conteúdos</p>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}