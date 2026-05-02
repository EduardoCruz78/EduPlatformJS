'use client';

import { ComingSoonPanel } from '@/components/coming-soon-panel';

export default function VestibularDetailPage() {
  return (
    <div className="edu-shell">
      <ComingSoonPanel
        title="Vestibular trancado"
        description="Os detalhes de vestibulares continuam bloqueados ate a carga completa e revisada dessa area ficar pronta."
        backHref="/"
        backLabel="Voltar ao inicio"
      />
    </div>
  );
}
