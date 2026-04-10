'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { trpc } from "@/trpc/react";
import type { Checklist } from "@edu-platform/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function ChecklistPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: checklist = [], isLoading, error } = trpc.checklist.getByUser.useQuery();

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
              <CardContent className="p-8 space-y-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full rounded-3xl" />
                ))}
              </CardContent>
            </Card>
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
            <p className="text-destructive text-xl">Erro ao carregar o checklist</p>
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
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Checklist de Estudos</h1>
            <p className="text-muted-foreground mt-1">Seu progresso diário</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition"
            >
              ← Voltar ao Dashboard
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
              Seu Checklist
              <Badge variant="secondary">{checklist.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {checklist.length === 0 ? (
              <p className="text-muted-foreground py-12 text-center">
                Checklist vazio.<br />
                Rode o seed do Prisma para ter itens de exemplo!
              </p>
            ) : (
              <div className="space-y-4">
                {checklist.map((item: Checklist) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-card border border-border hover:border-primary/30 transition-all rounded-3xl p-6"
                  >
                    <input
                      type="checkbox"
                      checked={false}
                      readOnly
                      className="w-6 h-6 accent-primary cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Item #{item.id}</p>
                      <p className="text-sm text-muted-foreground">
                        Content ID: {item.contentId}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Criado em: {item.createdAt.toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <Badge variant="outline">Checklist</Badge>
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