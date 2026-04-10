// apps/web/app/subjects/page.tsx
'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { trpc } from "@/trpc/react";
import type { Subject } from "@edu-platform/core";

export default function SubjectsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // ✅ Correção: seriesId agora é number (0 = todas as matérias por enquanto)
  const { data: subjects = [], isLoading, error } = trpc.subject.getBySeries.useQuery({
    seriesId: 0, // TODO: depois vamos deixar dinâmico com parâmetro de URL
  });

  // Redireciona se não estiver autenticado
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
            <div className="bg-white rounded-3xl p-6">
              <div className="h-6 w-52 bg-gray-200 rounded-xl mb-6" />
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-14 bg-gray-100 rounded-2xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl">Erro ao carregar as matérias</p>
          <p className="text-gray-500 mt-2">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Matérias Disponíveis
            </h1>
            <p className="text-gray-600 mt-1">Escolha uma matéria para ver os temas</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition"
            >
              ← Voltar ao Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 transition"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Card das matérias */}
        <div className="bg-white shadow-xl rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            Todas as Matérias
            <span className="text-sm font-normal text-gray-500">
              ({subjects.length})
            </span>
          </h2>

          {subjects.length === 0 ? (
            <p className="text-gray-500 py-12 text-center">
              Nenhuma matéria encontrada.
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject: Subject) => (
                <li
                  key={subject.id}
                  className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all rounded-3xl p-6 flex justify-between items-center cursor-pointer"
                >
                  <div>
                    <span className="text-xl font-semibold text-gray-900">
                      {subject.name}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-4xl font-bold text-emerald-600">
                      ?
                    </div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">
                      temas
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          Próximas telas: Topics → Contents → Checklist
        </p>
      </div>
    </div>
  );
}