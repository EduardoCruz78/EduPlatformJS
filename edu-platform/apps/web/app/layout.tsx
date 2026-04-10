import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Toaster />   {/* ← Toasts bonitos */}
      </body>
    </html>
  );
}