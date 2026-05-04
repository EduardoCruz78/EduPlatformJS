import Link from 'next/link';
import { ChevronRight, LockKeyhole } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { COMING_SOON_LABEL } from '@/lib/content-locks';

export function SeriesCard({
  name,
  href,
  icon,
  label,
  description,
  locked,
}: {
  name: string;
  href: string;
  icon: string;
  label: string;
  description: string;
  locked: boolean;
}) {
  const content = (
    <div className="relative flex h-full flex-col justify-between gap-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {label}
          </p>
          <h4 className="mt-3 text-2xl font-black leading-tight text-white">{name}</h4>
          {locked ? (
            <Badge variant="secondary" className="mt-3 gap-2">
              <LockKeyhole className="h-3.5 w-3.5" />
              {COMING_SOON_LABEL}
            </Badge>
          ) : null}
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>

        <div className="edu-home-icon" aria-hidden="true">
          {icon}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
        <span className="edu-chip">{locked ? COMING_SOON_LABEL : `Abrir ${label.toLowerCase()}`}</span>
        {locked ? (
          <LockKeyhole className="h-4 w-4 text-primary" aria-hidden="true" />
        ) : (
          <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
        )}
      </div>
    </div>
  );

  if (locked) {
    return (
      <div className="edu-home-card cursor-not-allowed opacity-80" aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link href={href} className="edu-home-card">
      {content}
    </Link>
  );
}
