'use client';

import { ComingSoonPanel } from '@/components/coming-soon-panel';

export default function PracticalGuidePage() {
  return (
    <div className="edu-shell">
      <ComingSoonPanel
        title="Guia trancado"
        description="Os guias de vida pratica ainda nao foram liberados porque essa area segue em preenchimento."
        backHref="/"
        backLabel="Voltar ao inicio"
      />
    </div>
  );
}
