'use client';

import { ComingSoonPanel } from '@/components/coming-soon-panel';

export default function AccessibilityPage() {
  return (
    <div className="edu-shell">
      <ComingSoonPanel
        title="Accessibility em breve"
        description="Esse modulo esta trancado enquanto categorias, temas e topicos passam por preenchimento e revisao."
        backHref="/"
        backLabel="Voltar ao inicio"
      />
    </div>
  );
}
