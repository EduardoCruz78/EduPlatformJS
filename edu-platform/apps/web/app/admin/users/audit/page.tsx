'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, History } from 'lucide-react';

import { trpc } from '@/lib/trpc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminUserAuditPage() {
  const [actorUserId, setActorUserId] = useState('');
  const [targetUserId, setTargetUserId] = useState('');

  const { data: users = [] } = trpc.user.find.useQuery();
  const { data: roleAuditLogs = [], isLoading } = trpc.user.findRoleAuditLogs.useQuery({
    limit: 50,
    actorUserId: actorUserId || undefined,
    targetUserId: targetUserId || undefined,
  });

  const filteredCountLabel = useMemo(() => {
    if (actorUserId || targetUserId) {
      return `${roleAuditLogs.length} evento(s) filtrado(s)`;
    }

    return `${roleAuditLogs.length} evento(s) recente(s)`;
  }, [actorUserId, roleAuditLogs.length, targetUserId]);

  return (
    <div className="space-y-6">
      <section className="edu-hero">
        <span className="edu-kicker">Auditoria</span>
        <h1 className="edu-section-title">Historico administrativo de mudancas de papel.</h1>
        <p className="edu-lead">
          Consulte quem alterou acessos, qual usuario foi afetado e como o papel mudou ao
          longo do tempo.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <Link href="/admin/users" className="edu-nav-link">
          <ArrowLeft className="h-4 w-4" />
          Voltar para usuarios
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>
            Refine a leitura por administrador responsavel ou usuario afetado.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
          <select
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            value={actorUserId}
            onChange={(event) => setActorUserId(event.target.value)}
          >
            <option value="">Todos os administradores</option>
            {users.map((user) => (
              <option key={`actor-${user.id}`} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <select
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            value={targetUserId}
            onChange={(event) => setTargetUserId(event.target.value)}
          >
            <option value="">Todos os usuarios alvo</option>
            {users.map((user) => (
              <option key={`target-${user.id}`} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <Button
            variant="outline"
            onClick={() => {
              setActorUserId('');
              setTargetUserId('');
            }}
          >
            Limpar filtros
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <History className="h-5 w-5" />
            Historico de mudancas
          </CardTitle>
          <CardDescription>{filteredCountLabel}</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-24 w-full" />
              ))}
            </div>
          ) : roleAuditLogs.length > 0 ? (
            <div className="space-y-3">
              {roleAuditLogs.map((log) => (
                <div key={log.id} className="edu-subtle-card space-y-3">
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
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>Actor: {log.actor?.email || log.actorUserId}</span>
                    <span>Alvo: {log.target?.email || log.targetUserId}</span>
                    <span>{new Date(log.createdAt).toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
              Nenhum evento de auditoria encontrado com os filtros atuais.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
