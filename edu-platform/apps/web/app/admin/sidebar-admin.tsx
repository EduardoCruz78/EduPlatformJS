'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/admin', label: 'Painel' },
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
    <aside className="sticky top-6 hidden h-fit w-64 shrink-0 rounded-3xl border border-border bg-card p-4 md:block">
      <div className="mb-4 px-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Admin
        </p>
        <h2 className="mt-2 text-lg font-semibold">EduPlatform</h2>
      </div>

      <nav className="space-y-1">
        {links.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block rounded-2xl px-3 py-2 text-sm transition-colors',
                active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
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
