import { LockKeyhole } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { COMING_SOON_LABEL } from '@/lib/content-locks';

export function LockedModuleSection({
  id,
  icon,
  title,
  description,
}: {
  id: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <section className="edu-panel overflow-hidden" aria-labelledby={id}>
      <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-7">
        <div className="flex items-start gap-4">
          <div className="edu-home-icon h-14 w-14 text-2xl" aria-hidden="true">
            {icon}
          </div>
          <div>
            <h2 id={id} className="text-2xl font-black text-gradient-primary">
              {title}
            </h2>
            <Badge variant="secondary" className="mt-3 gap-2">
              <LockKeyhole className="h-3.5 w-3.5" />
              {COMING_SOON_LABEL}
            </Badge>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{description}</p>
          </div>
        </div>

        <span className="edu-action pointer-events-none uppercase tracking-[0.12em] opacity-70">
          <LockKeyhole className="h-4 w-4" aria-hidden="true" />
          {COMING_SOON_LABEL}
        </span>
      </div>
    </section>
  );
}
