// apps/web/app/login/page.tsx
import { loginWithGoogle } from '../actions/auth';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="edu-shell flex min-h-screen items-center">
      <div className="grid w-full gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="edu-hero space-y-6">
          <span className="edu-kicker">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Acesso seguro
          </span>
          <div className="space-y-4">
            <h1 className="edu-section-title max-w-3xl">
              Entre apenas se quiser salvar progresso e checklist.
            </h1>
            <p className="edu-lead">
              O acesso com Google agora e opcional. Voce pode explorar series,
              materias, topicos, conteudos, vestibulares e accessibility sem
              conta, e entrar depois para sincronizar seu progresso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="edu-nav-link">
              Voltar ao inicio
            </Link>
            <Link href="/vestibulares" className="edu-nav-link">
              Ver vestibulares
            </Link>
          </div>
        </section>

        <section className="edu-panel flex items-center">
          <div className="w-full space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Login opcional
              </p>
              <h2 className="mt-3 text-4xl text-foreground">Entrar com Google</h2>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              Use sua conta somente quando quiser guardar seu progresso,
              continuar do mesmo ponto e montar um checklist pessoal.
            </p>

            <form action={loginWithGoogle}>
              <button
                type="submit"
                className="edu-action w-full rounded-xl py-4 uppercase tracking-[0.14em]"
              >
                Entrar com Google
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <Link href="/" className="inline-flex w-full items-center justify-center edu-nav-link">
              Continuar sem login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
