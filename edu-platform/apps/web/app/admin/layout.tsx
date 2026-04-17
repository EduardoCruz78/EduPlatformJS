import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import SidebarAdmin from './sidebar-admin';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="edu-shell">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <SidebarAdmin />
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
