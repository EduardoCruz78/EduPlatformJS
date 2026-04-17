'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { History, Shield, ShieldOff, UserCog } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AdminUsersPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const utils = trpc.useUtils();

  const { data: users = [], isLoading } = trpc.user.find.useQuery();
  const { data: roleAuditLogs = [], isLoading: isLoadingAudit } =
    trpc.user.findRoleAuditLogs.useQuery({ limit: 8 });
  const updateRole = trpc.user.updateRole.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.user.find.invalidate(),
        utils.user.findRoleAuditLogs.invalidate(),
      ]);
    },
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [router, status]);

  const adminCount = useMemo(
    () => users.filter((user) => user.role === 'ADMIN').length,
    [users]
  );

  if (status === 'loading') {
    return <div className="p-8 text-center">Carregando...</div>;
  }

  if (!session) {
    return <div className="p-8 text-center">Redirecionando...</div>;
  }

  return (
    <div className="space-y-6">
      <section className="edu-hero">
        <span className="edu-kicker">Governanca</span>
        <h1 className="edu-section-title">Administradores com controle real e trilha auditavel.</h1>
        <p className="edu-lead">
          O bootstrap por <code>ADMIN_EMAILS</code> continua existindo como recuperacao inicial,
          mas a gestao do dia a dia agora acontece por papel persistido e historico auditavel.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <Link href="/admin/users/audit" className="edu-nav-link">
          <History className="h-4 w-4" />
          Abrir auditoria completa
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Usuarios totais</CardDescription>
            <CardTitle>{users.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Administradores ativos</CardDescription>
            <CardTitle>{adminCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Eventos auditados</CardDescription>
            <CardTitle>{roleAuditLogs.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="card-interactive">
          <CardHeader>
            <CardDescription>Regra de seguranca</CardDescription>
            <CardTitle>Nao existe auto-rebaixamento</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Usuarios</CardTitle>
            <CardDescription>
              Promova ou rebaixe papeis com seguranca. O ultimo admin nao pode ser removido.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-12 w-full" />
                ))}
              </div>
            ) : users.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Usuario</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Papel</TableHead>
                      <TableHead className="text-right">Acoes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => {
                      const isCurrentUser = session.user.id === user.id;
                      const isLastAdmin = user.role === 'ADMIN' && adminCount <= 1;
                      const nextRole = user.role === 'ADMIN' ? 'USER' : 'ADMIN';
                      const isPending =
                        updateRole.isPending && updateRole.variables?.userId === user.id;

                      return (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                                <UserCog className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{user.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {isCurrentUser ? 'Sessao atual' : 'Conta administravel'}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{user.email}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === 'ADMIN' ? 'default' : 'outline'}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant={user.role === 'ADMIN' ? 'outline' : 'default'}
                              className="gap-2"
                              disabled={isPending || isCurrentUser || isLastAdmin}
                              onClick={() =>
                                updateRole.mutate({
                                  userId: user.id,
                                  role: nextRole,
                                })
                              }
                            >
                              {user.role === 'ADMIN' ? (
                                <ShieldOff className="h-4 w-4" />
                              ) : (
                                <Shield className="h-4 w-4" />
                              )}
                              {isPending
                                ? 'Atualizando...'
                                : user.role === 'ADMIN'
                                  ? 'Rebaixar para USER'
                                  : 'Promover para ADMIN'}
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
                Nenhum usuario encontrado.
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <History className="h-5 w-5" />
              Historico de papeis
            </CardTitle>
            <CardDescription>
              Mudancas recentes de privilegio para auditoria administrativa.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingAudit ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-20 w-full" />
                ))}
              </div>
            ) : roleAuditLogs.length > 0 ? (
              <div className="space-y-3">
                {roleAuditLogs.map((log) => (
                  <div key={log.id} className="edu-subtle-card space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{log.previousRole}</Badge>
                      <span className="text-sm text-muted-foreground">para</span>
                      <Badge>{log.newRole}</Badge>
                    </div>
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{log.actor?.name || 'Administrador'}</span>{' '}
                      alterou o acesso de{' '}
                      <span className="font-semibold">{log.target?.name || 'Usuario'}</span>.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(log.createdAt).toLocaleString('pt-BR')}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
                Nenhuma mudanca de papel registrada ainda.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
