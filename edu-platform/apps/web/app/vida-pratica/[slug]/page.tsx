'use client';

import { ComingSoonPanel } from '@/components/coming-soon-panel';

export default function PracticalCategoryPage() {
  return (
    <div className="edu-shell">
      <ComingSoonPanel
        title="Categoria trancada"
        description="As categorias de vida pratica continuam bloqueadas ate a base ser preenchida com os guias completos."
        backHref="/"
        backLabel="Voltar ao inicio"
      />
    </div>
  );
}
