'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { trpc } from "@/server/trpc/react";
import type { Series } from "@edu-platform/core";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: series = [], isLoading, error } = trpc.series.getAll.useQuery();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // 🔄 Loading
  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto animate-pulse space-y-8">
          <div className="h-10 w-80 bg-muted rounded-2xl" />
          <Card>
            <CardContent className="p-8 space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-full rounded-3xl" />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <p className="text-destructive text-xl">Erro ao carregar séries</p>
            <p className="text-muted-foreground mt-2">{error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-destructive text-destructive-foreground rounded-2xl hover:bg-destructive/90 transition"
            >
              Tentar novamente
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ✅ UI
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Bem-vindo, {session?.user?.name}
            </h1>
            <p className="text-muted-foreground mt-1">
              Selecione uma série para começar
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/subjects"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Ver Matérias
            </Link>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-destructive hover:text-destructive/80 font-medium"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              Séries Disponíveis
              <Badge variant="secondary">{series.length}</Badge>
            </CardTitle>
          </CardHeader>

          <CardContent>
            {series.length === 0 ? (
              <p className="text-muted-foreground py-12 text-center">
                Nenhuma série encontrada.<br />
                Rode o seed do Prisma.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {series.map((s: Series) => (
                  <Link
                    key={s.id}
                    href={`/subjects?seriesId=${s.id}`}
                    className="group bg-card hover:bg-accent border border-border hover:border-primary/30 transition-all rounded-3xl p-6 flex justify-between items-center"
                  >
                    <div>
                      <span className="text-xl font-semibold text-foreground">
                        {s.name}
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">
                        →
                      </div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        entrar
                      </div>
                    </div>
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