// apps/web/app/contents/page.tsx

'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc";
import type { Content } from "@edu-platform/core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

function ContentsPageContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const topicIdParam = searchParams.get("topicId");
  const topicId = Number(topicIdParam || 0);

  const {
    data: contents = [],
    isLoading,
    error,
  } = trpc.content.findByTopic.useQuery(
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
              <Link href="/topics">
                Voltar
              </Link>
            </CardContent>
          </Card>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                Conteúdos ({contents.length})
              </CardTitle>
            </CardHeader>

            <CardContent>
              {contents.map((content: Content) => (
                  <div key={content.id}>
                    {content.title}
                  </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
  );
}

export default function ContentsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background p-8" />}>
      <ContentsPageContent />
    </Suspense>
  );
}
