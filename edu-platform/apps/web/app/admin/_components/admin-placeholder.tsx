import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type AdminPlaceholderProps = {
  title: string;
  description: string;
};

export function AdminPlaceholder({
  title,
  description,
}: AdminPlaceholderProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Em andamento</CardTitle>
          <CardDescription>
            Esta area admin ainda esta sendo migrada para o novo padrao do projeto.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enquanto essa tela nao recebe a implementacao definitiva, a area de
            materias permanece como a parte administrativa principal disponivel.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/admin">
              <Button variant="outline">Voltar ao painel admin</Button>
            </Link>
            <Link href="/admin/subjects">
              <Button>Ir para materias</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
