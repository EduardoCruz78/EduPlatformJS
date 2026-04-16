// apps/web/app/Page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-4xl text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">EduPlatform</h1>
        <p className="mb-8 text-xl text-gray-600">
          Plataforma de estudos para vestibulares, acessibilidade e acompanhamento de progresso.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/login"
            className="inline-block rounded-2xl bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
          >
            Entrar com Google
          </Link>
          <Link
            href="/vestibulares"
            className="inline-block rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-900 hover:bg-gray-100"
          >
            Ver vestibulares
          </Link>
          <Link
            href="/accessibility"
            className="inline-block rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-900 hover:bg-gray-100"
          >
            Accessibility
          </Link>
        </div>
      </div>
    </div>
  );
}
