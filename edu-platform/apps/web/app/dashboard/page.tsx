// apps/web/app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { GetAllSeriesUseCase } from "@edu-platform/core";
import { SeriesRepository } from "@edu-platform/infrastructure";
import type { Series } from "@edu-platform/core";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const seriesRepository = new SeriesRepository();
  const getAllSeries = new GetAllSeriesUseCase(seriesRepository);
  const series: Series[] = await getAllSeries.execute();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Bem-vindo, {session.user.name} 👋
        </h1>
        <p className="text-gray-600 mb-8">Dashboard - EduPlatform</p>

        <div className="bg-white shadow rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-4">Séries Disponíveis</h2>
          <ul className="space-y-3">
            {series.map((s) => (
              <li
                key={s.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl"
              >
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-gray-500">
                  {s.subjects?.length || 0} matérias
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/api/auth/signout"
            className="text-red-600 hover:underline"
          >
            Sair
          </a>
        </div>
      </div>
    </div>
  );
}