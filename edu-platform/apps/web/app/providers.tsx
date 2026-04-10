// apps/web/app/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { TRPCProvider } from '@/trpc/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCProvider>
      <SessionProvider>
        {children}
      </SessionProvider>
    </TRPCProvider>
  );
}