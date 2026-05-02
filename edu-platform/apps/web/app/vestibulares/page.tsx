'use client';

import { ComingSoonPanel } from '@/components/coming-soon-panel';

export default function VestibularesPage() {
  return (
    <div className="edu-shell">
      <ComingSoonPanel
        title="Vestibulares em breve"
        description="Esse modulo foi trancado por enquanto. Vamos liberar quando as trilhas, materias e conteudos especificos estiverem completos no banco."
        backHref="/"
        backLabel="Voltar ao inicio"
      />
    </div>
  );
}
