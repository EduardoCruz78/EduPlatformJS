// apps/web/app/layout.tsx
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'EduPlatform',
  description: 'Plataforma educacional com foco em vestibulares, acessibilidade e progresso real de estudo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn("font-sans", inter.variable, poppins.variable)}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
