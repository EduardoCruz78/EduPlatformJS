import Link from 'next/link';
import { LockKeyhole } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { COMING_SOON_LABEL } from '@/lib/content-locks';

type ComingSoonPanelProps = {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
};

export function ComingSoonPanel({
  title,
  description,
  backHref,
  backLabel,
}: ComingSoonPanelProps) {
  return (
    <Card className="mx-auto max-w-3xl border-[rgba(168,124,29,0.38)] bg-[#0b0b0b]">
      <CardContent className="space-y-6 p-8 text-center sm:p-10">
        <div className="flex justify-center">
          <Badge variant="secondary" className="gap-2">
            <LockKeyhole className="h-3.5 w-3.5" />
            {COMING_SOON_LABEL}
          </Badge>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-black text-white sm:text-4xl">{title}</h1>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
        </div>

        {backHref && backLabel ? (
          <div className="flex justify-center">
            <Link href={backHref} className="edu-nav-link">
              {backLabel}
            </Link>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
