import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const sections = [
  {
    href: '/admin/users',
    title: 'Usuários',
    description: 'Gerencie papéis, governança e proteções da equipe administrativa.',
  },
  {
    href: '/admin/users/audit',
    title: 'Auditoria',
    description: 'Consulte o histórico administrativo de mudanças de papel.',
  },
  {
    href: '/admin/subjects',
    title: 'Matérias',
    description: 'Gerencie matérias e vinculação com series.',
  },
  {
    href: '/admin/series',
    title: 'Séries',
    description: 'Cadastre, edite e remova séries do sistema.',
  },
  {
    href: '/admin/topics',
    title: 'Tópicos',
    description: 'Controle tópicos e as matérias associadas.',
  },
  {
    href: '/admin/contents',
    title: 'Conteúdos',
    description: 'Administre conteúdos por tópico e tipo.',
  },
  {
    href: '/admin/accessibility',
    title: 'Acessibilidade',
    description: 'Organize categorias, temas e vínculos com tópicos.',
  },
  {
    href: '/admin/vestibulares',
    title: 'Vestibulares',
    description: 'Estruture trilhas especiais com matérias, tópicos e conteúdos.',
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="edu-hero">
        <span className="edu-kicker">Administrativo</span>
        <h1 className="edu-section-title">
          Painel administrativo com leitura forte e navegação clara.
        </h1>
        <p className="edu-lead">
          Use este painel para manter o produto consistente, com governança de acesso
          e operação editorial no mesmo sistema visual da plataforma.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="card-interactive h-full">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                <span>Abrir área</span>
                <ArrowRight className="h-4 w-4" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
