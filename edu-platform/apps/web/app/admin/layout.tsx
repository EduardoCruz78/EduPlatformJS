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
      <div className="mx-auto flex max-w-7xl gap-6 p-6">
        <SidebarAdmin />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
