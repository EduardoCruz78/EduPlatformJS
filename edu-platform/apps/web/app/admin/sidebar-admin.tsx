'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/admin', label: 'Painel' },
  { href: '/admin/users', label: 'Usuarios' },
  { href: '/admin/users/audit', label: 'Auditoria' },
  { href: '/admin/accessibility', label: 'Accessibility' },
  { href: '/admin/subjects', label: 'Materias' },
  { href: '/admin/series', label: 'Series' },
  { href: '/admin/topics', label: 'Topicos' },
  { href: '/admin/contents', label: 'Conteudos' },
  { href: '/admin/vestibulares', label: 'Vestibulares' },
];

export default function SidebarAdmin() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-6 h-fit rounded-[2rem] border border-[rgba(168,124,29,0.38)] bg-[#090909] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
      <div className="mb-6 rounded-[1.5rem] border border-[rgba(168,124,29,0.22)] bg-[#111111] p-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Admin
        </p>
        <h2 className="mt-3 text-3xl text-white">EduPlatform</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Navegacao central do backoffice com governanca, catalogo e fluxos do produto.
        </p>
      </div>

      <nav className="space-y-2">
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
