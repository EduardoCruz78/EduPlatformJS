// apps/web/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">EduPlatform</h1>
        <p className="text-xl text-gray-600 mb-8">Plataforma de estudos para vestibulares</p>
        
        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-medium inline-block"
        >
          Entrar com Google
        </Link>
      </div>
    </div>
  );
}