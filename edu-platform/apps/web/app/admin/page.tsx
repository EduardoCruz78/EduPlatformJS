import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const sections = [
  {
    href: '/admin/subjects',
    title: 'Materias',
    description: 'Gerencie materias e vinculacao com series.',
  },
  {
    href: '/admin/series',
    title: 'Series',
    description: 'Cadastre, edite e remova series do sistema.',
  },
  {
    href: '/admin/topics',
    title: 'Topicos',
    description: 'Controle topicos e as materias associadas.',
  },
  {
    href: '/admin/contents',
    title: 'Conteudos',
    description: 'Administre conteudos por topico e tipo.',
  },
  {
    href: '/admin/accessibility',
    title: 'Accessibility',
    description: 'Organize categorias, temas e vinculos com topicos.',
  },
  {
    href: '/admin/vestibulares',
    title: 'Vestibulares',
    description: 'Estruture trilhas especiais com materias, topicos e conteudos.',
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="edu-hero">
        <span className="edu-kicker">Backoffice</span>
        <h1 className="edu-section-title">Painel administrativo com leitura forte e navegação clara.</h1>
        <p className="edu-lead">
          Use este painel para manter o conteudo do produto consistente sem cair
          em telas administrativas frias ou sem hierarquia visual.
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
                <span>Abrir area</span>
                <ArrowRight className="h-4 w-4" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
