// apps/web/app/checklist/page.tsx
'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { trpc } from "@/server/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

// ✅ CORRIGIDO: Tipo correto do Checklist retornado pela API
type ChecklistItem = {
  id: number;
  userId: string;
  createdAt: string; // ← Vem como string do banco
  contentId: number;
};

export default function ChecklistPage() {
  const { status } = useSession();
  const router = useRouter();

  const { data: checklist = [], isLoading, error } = trpc.checklist.getByUser.useQuery();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading" || isLoading) {
    return <div className="p-8">Carregando...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-600">{error.message}</div>;
  }

  return (
    <div className="p-8">
      <Link href="/dashboard">Voltar</Link>

      {checklist.map((item: ChecklistItem) => (
        <div key={item.id}>
          {new Date(item.createdAt).toLocaleDateString("pt-BR")}
        </div>
      ))}

      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sair
      </button>
    </div>
  );
}