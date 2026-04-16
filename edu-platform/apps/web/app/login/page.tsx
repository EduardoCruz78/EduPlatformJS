// apps/web/app/login/page.tsx
import { loginWithGoogle } from '../actions/auth';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">EduPlatform</h1>
        <p className="mb-8 text-gray-600">Entre para continuar seus estudos</p>

        <form action={loginWithGoogle}>
          <button
            type="submit"
            className="flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-medium shadow-sm transition-all hover:border-gray-400"
          >
            Entrar com Google
          </button>
        </form>
      </div>
    </div>
  );
}
