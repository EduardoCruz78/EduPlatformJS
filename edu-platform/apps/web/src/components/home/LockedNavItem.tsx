import { LockKeyhole } from 'lucide-react';
import { COMING_SOON_LABEL } from '@/lib/content-locks';

export function LockedNavItem({ label }: { label: string }) {
  return (
    <span className="edu-nav-link cursor-not-allowed opacity-70">
      <LockKeyhole className="h-4 w-4" aria-hidden="true" />
      {label}
      <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {COMING_SOON_LABEL}
      </span>
    </span>
  );
}
