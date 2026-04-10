'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trpc } from "@/trpc/react";
import type { Content } from "@edu-platform/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function ContentsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const topicIdParam = searchParams.get("topicId");
  const topicId = topicIdParam ? Number(topicIdParam) : 0;

  const { data: contents = [], isLoading, error } = trpc.content.getByTopic.useQuery(
    { topicId },
    { enabled: topicId > 0 }
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
              <CardContent className="p-8 space-y-6">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-36 w-full rounded-3xl" />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || topicId === 0) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <p className="text-destructive text-xl">Selecione um tópico primeiro</p>
            <Link
              href="/topics"
              className="mt-6 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition"
            >
              ← Voltar aos Tópicos
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
            <h1 className="text-4xl font-bold text-foreground">Conteúdos</h1>
            <p className="text-muted-foreground mt-1">Conteúdos do tópico selecionado</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/topics"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition"
            >
              ← Voltar aos Tópicos
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
              Conteúdos
              <Badge variant="secondary">{contents.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {contents.length === 0 ? (
              <p className="text-muted-foreground py-12 text-center">
                Nenhum conteúdo neste tópico ainda.
              </p>
            ) : (
              <div className="space-y-6">
                {contents.map((content: Content) => (
                  <div
                    key={content.id}
                    className="bg-card border border-border hover:border-primary/30 transition-all rounded-3xl p-6 flex gap-6 items-center"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {content.title}
                      </h3>
                      <Badge variant="outline" className="capitalize">
                        {content.type}
                      </Badge>
                    </div>
                    <div className="w-40 flex flex-col justify-between items-end">
                      <button className="px-6 py-3 bg-primary text-primary-foreground rounded-2xl text-sm font-medium hover:bg-primary/90 transition">
                        Acessar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}