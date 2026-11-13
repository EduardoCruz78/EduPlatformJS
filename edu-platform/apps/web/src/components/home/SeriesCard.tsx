import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function SeriesCard({
  name,
  href,
  icon,
  label,
  description,
}: {
  name: string;
  href: string;
  icon: string;
  label: string;
  description: string;
}) {
  const content = (
    <div className="relative flex h-full flex-col justify-between gap-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h4 className="text-2xl font-bold leading-tight text-white">{name}</h4>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>

        <div className="edu-home-icon" aria-hidden="true">
          {icon}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[rgba(168,124,29,0.22)] pt-4">
        <span className="edu-chip">{`Abrir ${label.toLowerCase()}`}</span>
        <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>
    </div>
  );

  return (
    <Link href={href} className="edu-home-card">
      {content}
    </Link>
  );
}
