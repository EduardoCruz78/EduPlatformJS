// apps/web/app/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { TRPCProvider } from '@/server/trpc/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TRPCProvider>
        {children}
      </TRPCProvider>
    </SessionProvider>
  );
}