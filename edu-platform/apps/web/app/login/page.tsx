// apps/web/app/login/page.tsx
import { loginWithGoogle } from "../actions/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">EduPlatform</h1>
        <p className="text-gray-600 mb-8">Entre para continuar seus estudos</p>
        
        <form action={loginWithGoogle}>
          <button
            type="submit"
            className="flex items-center gap-3 bg-white border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-2xl text-lg font-medium shadow-sm transition-all"
          >
            <span className="text-2xl">🔑</span>
            Entrar com Google
          </button>
        </form>
      </div>
    </div>
  );
}