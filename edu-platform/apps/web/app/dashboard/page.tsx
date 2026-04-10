'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { trpc } from "@/trpc/react";
import type { Series } from "@edu-platform/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: series = [], isLoading, error } = trpc.series.getAll.useQuery();

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-28" />
                    <Skeleton className="h-14 w-20 mt-4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <p className="text-destructive text-xl">Erro ao carregar as séries</p>
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

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Bem-vindo, {session?.user?.name} 👋
            </h1>
            <p className="text-muted-foreground mt-1">Escolha uma série para começar</p>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-destructive hover:text-destructive/80 font-medium flex items-center gap-2 transition"
          >
            Sair
          </button>
        </div>

        {/* Cards de resumo + Séries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Séries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-primary">{series.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Matérias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-emerald-600">99</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Tópicos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-amber-600">321</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Conteúdos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-violet-600">321</div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Séries */}
        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="text-2xl">Séries Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {series.map((serie: Series) => (
                <div
                  key={serie.id}
                  className="group bg-card hover:bg-accent border border-border hover:border-primary/30 transition-all rounded-3xl p-6 flex justify-between items-center cursor-pointer"
                >
                  <div>
                    <span className="text-xl font-semibold">{serie.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-primary">
                      {serie.subjects?.length || 0}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      matérias
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}