import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Painel administrativo</h1>
        <p className="mt-2 text-muted-foreground">
          Use este painel para navegar pelas areas administrativas ativas.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.href} className="rounded-3xl">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={section.href}>
                <Button variant="outline">Abrir</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
