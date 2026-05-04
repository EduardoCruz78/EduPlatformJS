import { useDeferredValue, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { trpc } from '@/lib/trpc';

const searchTitleId = 'home-search-dialog-title';
const searchDescriptionId = 'home-search-dialog-description';

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const { data: searchResults = [] } = trpc.search.query.useQuery(
    { q: deferredSearchQuery },
    {
      enabled: open && deferredSearchQuery.trim().length > 0,
      staleTime: 60 * 1000,
    }
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/72 backdrop-blur-sm" />
        <Dialog.Content
          aria-labelledby={searchTitleId}
          aria-describedby={searchDescriptionId}
          className="fixed left-1/2 top-6 z-50 w-full max-w-4xl -translate-x-1/2 px-4 sm:px-6 outline-none"
        >
          <div className="edu-panel p-5 md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                  Busca inteligente
                </p>
                <Dialog.Title id={searchTitleId} className="mt-2 text-2xl font-black text-white">
                  Busque por série, matéria ou tópico
                </Dialog.Title>
                <Dialog.Description id={searchDescriptionId} className="mt-2 text-sm text-muted-foreground">
                  A busca mostra apenas o que já está liberado para estudo.
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="edu-nav-link h-11 w-11 justify-center p-0"
                  aria-label="Fechar busca"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </Dialog.Close>
            </div>

            <div className="space-y-4" aria-live="polite">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <Input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Ex.: algebra, matematica, 3 serie..."
                  className="h-14 pl-11 pr-12 text-base"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Limpar busca"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              {!searchQuery.trim() ? (
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="edu-subtle-card">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                      Tópicos
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Procure por nomes como Álgebra, Geometria ou Redação.
                    </p>
                  </div>
                  <div className="edu-subtle-card">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                      Matérias
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Também funciona para Matemática, História, Biologia e outras matérias.
                    </p>
                  </div>
                  <div className="edu-subtle-card">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-gradient-primary">
                      Séries
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      As trilhas em breve não aparecem aqui até serem liberadas.
                    </p>
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="edu-subtle-card text-sm text-muted-foreground">
                  Nenhum resultado encontrado para essa busca.
                </div>
              ) : (
                <div className="grid gap-3 max-h-[60vh] overflow-y-auto pr-2">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      href={result.href}
                      onClick={() => onOpenChange(false)}
                      className="edu-home-card p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <Badge variant="outline">{result.badge}</Badge>
                          </div>
                          <p className="text-xl font-black text-white">{result.title}</p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
