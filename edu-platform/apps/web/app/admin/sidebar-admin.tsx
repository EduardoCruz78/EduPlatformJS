'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/admin', label: 'Painel' },
  { href: '/admin/users', label: 'Usuários' },
  { href: '/admin/users/audit', label: 'Auditoria' },
  { href: '/admin/accessibility', label: 'Acessibilidade' },
  { href: '/admin/subjects', label: 'Matérias' },
  { href: '/admin/series', label: 'Séries' },
  { href: '/admin/topics', label: 'Tópicos' },
  { href: '/admin/contents', label: 'Conteúdos' },
  { href: '/admin/vestibulares', label: 'Vestibulares' },
  { href: '/admin/vida-prática', label: 'Vida prática' },
];

export default function SidebarAdmin() {
  const pathname = usePathname();

  return (
    <aside className="h-fit rounded-[1.5rem] border border-[rgba(168,124,29,0.38)] bg-[#090909] p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.4)] lg:sticky lg:top-6 lg:rounded-[2rem] lg:p-5">
      <div className="mb-4 rounded-[1.25rem] border border-[rgba(168,124,29,0.22)] bg-[#111111] p-4 lg:mb-6 lg:rounded-[1.5rem]">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Administrativo
        </p>
        <h2 className="mt-3 text-2xl text-white lg:text-3xl">EduPlatform</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Navegação central do painel com governança, catálogo e fluxos do produto.
        </p>
      </div>

      <nav className="grid gap-2 sm:grid-cols-2 lg:block lg:space-y-2">
        {links.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block rounded-[1.25rem] border px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors',
                active
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-[rgba(168,124,29,0.22)] bg-[#111111] text-white/70 hover:border-primary/70 hover:bg-[#161616] hover:text-white'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
