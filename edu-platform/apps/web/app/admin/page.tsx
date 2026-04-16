import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const sections = [
  {
    href: '/admin/subjects',
    title: 'Materias',
    description: 'Area administrativa principal ja conectada ao router atual.',
  },
  {
    href: '/admin/series',
    title: 'Series',
    description: 'Estrutura reservada para a proxima etapa da migracao.',
  },
  {
    href: '/admin/topics',
    title: 'Topicos',
    description: 'Rotas preservadas e agora com modulo valido para o Next.',
  },
  {
    href: '/admin/contents',
    title: 'Conteudos',
    description: 'Espaco separado para estabilizar o CRUD administrativo depois.',
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Painel administrativo</h1>
        <p className="mt-2 text-muted-foreground">
          Use este painel para navegar pelas areas que ja foram migradas.
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
