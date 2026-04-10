'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trpc } from "@/trpc/react";
import type { Content } from "@edu-platform/core";

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
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 w-72 bg-gray-200 rounded-xl mb-2" />
            <div className="h-4 w-56 bg-gray-200 rounded-xl mb-8" />
            <div className="bg-white rounded-3xl p-6 space-y-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-36 bg-gray-100 rounded-3xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || topicId === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl">Selecione um tópico primeiro</p>
          <Link
            href="/topics"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
          >
            ← Voltar aos Tópicos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Conteúdos</h1>
            <p className="text-gray-600 mt-1">Conteúdos do tópico selecionado</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/topics"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition"
            >
              ← Voltar aos Tópicos
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 transition"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            Conteúdos
            <span className="text-sm font-normal text-gray-500">({contents.length})</span>
          </h2>

          {contents.length === 0 ? (
            <p className="text-gray-500 py-12 text-center">
              Nenhum conteúdo neste tópico ainda.
            </p>
          ) : (
            <div className="space-y-6">
              {contents.map((content: Content) => (
                <div
                  key={content.id}
                  className="bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all rounded-3xl p-6 flex gap-6"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
                  </div>
                  <div className="w-40 flex flex-col justify-between items-end">
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-widest text-gray-400">Tipo</div>
                      <div className="font-medium text-lg">{content.type}</div>
                    </div>
                    <button className="px-6 py-3 bg-black text-white rounded-2xl text-sm font-medium hover:bg-gray-800">
                      Acessar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          Próxima tela: Checklist
        </p>
      </div>
    </div>
  );
}