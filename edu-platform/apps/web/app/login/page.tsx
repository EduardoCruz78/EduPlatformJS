// apps/web/app/login/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { loginWithGoogle } from "../actions/auth";

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">EduPlatform</h1>
        <button
          onClick={loginWithGoogle}
          className="bg-[#4285F4] hover:bg-[#3367d6] text-white px-8 py-4 rounded-2xl text-lg font-medium flex items-center gap-3 mx-auto"
        >
          Entrar com Google
        </button>
      </div>
    </div>
  );
}