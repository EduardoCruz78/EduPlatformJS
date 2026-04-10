// apps/web/app/layout.tsx
import type { Metadata } from 'next';
import { TRPCProvider } from '@/trpc/react';

export const metadata: Metadata = {
  title: 'EduPlatform',
  description: 'Plataforma educacional - clone em Next.js + tRPC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}