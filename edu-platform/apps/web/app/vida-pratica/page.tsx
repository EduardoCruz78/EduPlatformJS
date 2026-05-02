'use client';

import { ComingSoonPanel } from '@/components/coming-soon-panel';

export default function PracticalLifePage() {
  return (
    <div className="edu-shell">
      <ComingSoonPanel
        title="Vida pratica em breve"
        description="Os guias de vida pratica foram trancados por enquanto e vao abrir quando o conteudo definitivo estiver completo no banco."
        backHref="/"
        backLabel="Voltar ao inicio"
      />
    </div>
  );
}
