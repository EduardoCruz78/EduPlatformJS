// apps/web/app/subjects/page.tsx
'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { trpc } from "@/server/trpc/react";
import type { Subject } from "@edu-platform/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function SubjectsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const seriesIdParam = searchParams.get("seriesId");
  const seriesId = Number(seriesIdParam || 0);

  // ✅ CORRIGIDO: Passar objeto com seriesId
  const { data: subjects = [], isLoading, error } = trpc.subject.getBySeries.useQuery(
    { seriesId },
    { enabled: seriesId > 0 }
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto animate-pulse">
          <div className="h-10 w-80 bg-muted rounded-2xl mb-8" />
          <Card>
            <CardContent className="p-8">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-full mb-4" />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (error || seriesId === 0) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <p className="text-destructive text-xl">Selecione uma série primeiro</p>
            <Link
              href="/dashboard"
              className="mt-6 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition"
            >
              ← Voltar ao Dashboard
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
            <h1 className="text-4xl font-bold text-foreground">Matérias Disponíveis</h1>
            <p className="text-muted-foreground mt-1">Escolha uma matéria para ver os temas</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-primary hover:text-primary/80 font-medium">
              ← Voltar ao Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-destructive hover:text-destructive/80 font-medium"
            >
              Sair
            </button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              Todas as Matérias
              <Badge variant="secondary">{subjects.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject: Subject) => (
                <Link
                  key={subject.id}
                  href={`/topics?subjectId=${subject.id}`}
                  className="group bg-card hover:bg-accent border border-border hover:border-primary/30 transition-all rounded-3xl p-6 flex justify-between items-center cursor-pointer"
                >
                  <div>
                    <span className="text-xl font-semibold">{subject.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-emerald-600">→</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">entrar</div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}