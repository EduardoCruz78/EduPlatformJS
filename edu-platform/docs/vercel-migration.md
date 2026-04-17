# Migracao para Vercel

Este projeto esta pronto para subir na Vercel com foco em `apps/web`.
O `apps/native` continua fora do escopo de deploy da plataforma.

## Resumo da estrategia

- criar um projeto Vercel apontando para este repositorio
- configurar o `Root Directory` como `apps/web`
- manter o framework como `Next.js`
- configurar variaveis de ambiente do app e do banco
- aplicar migrations do Prisma fora do build da Vercel

## O que foi validado no repositorio

- o app principal e `apps/web`
- o build local de producao com `npm run build --workspace web` passou
- o monorepo usa `npm workspaces`, suportado pela Vercel
- o app depende de `@edu-platform/core` e `@edu-platform/infrastructure`, ja declarados como dependencias internas
- `next.config.ts` ja usa `transpilePackages`, o que ajuda o build do monorepo
- rotas de API criticas foram fixadas em runtime `nodejs`, compativel com Prisma

## Configuracao recomendada na Vercel

Crie um projeto novo na Vercel para o diretorio `apps/web`.

Configuracoes principais:

- Framework Preset: `Next.js`
- Root Directory: `apps/web`
- Build Command: manter o padrao detectado pela Vercel
- Install Command: manter o padrao detectado pela Vercel

Observacao importante:
o `Root Directory` e uma configuracao do projeto na Vercel, nao algo que este repositorio consegue impor sozinho.

## Variaveis de ambiente

Cadastre no projeto da Vercel:

| Variavel | Obrigatoria | Observacao |
| --- | --- | --- |
| `AUTH_SECRET` | sim | minimo de 32 caracteres |
| `GOOGLE_CLIENT_ID` | sim | OAuth Google |
| `GOOGLE_CLIENT_SECRET` | sim | OAuth Google |
| `DATABASE_URL` | sim* | conexao principal usada pela app |
| `DIRECT_URL` | recomendada | conexao direta para operacoes Prisma |
| `ADMIN_EMAILS` | nao | bootstrap inicial de admins |

\* O codigo aceita `DATABASE_URL` ou `DIRECT_URL`, mas para operacao em producao o ideal e definir ambas.

## Google OAuth

Depois de conhecer o dominio final do projeto, adicione no Console do Google:

- Authorized JavaScript origins:
  - `https://SEU-DOMINIO`
- Authorized redirect URIs:
  - `https://SEU-DOMINIO/api/auth/callback/google`

Se for usar autenticacao em preview deployments, considere criar credenciais separadas ou incluir os dominios de preview previstos na sua estrategia.

## Prisma e banco

Nao use `prisma migrate dev` na Vercel.

Fluxo recomendado para producao:

```bash
npx prisma generate
npx prisma migrate deploy
```

Se o banco de producao ja existir e estiver alinhado com o schema, revise primeiro:

```bash
npx prisma migrate status
```

Depois siga o fluxo documentado em [prisma/README.md](../prisma/README.md).

## Passo a passo de deploy

1. Suba o repositorio para GitHub, GitLab ou Bitbucket.
2. Importe o repositorio na Vercel.
3. Na tela de importacao, ajuste o `Root Directory` para `apps/web`.
4. Confirme o framework `Next.js`.
5. Cadastre as variaveis de ambiente.
6. Faca o primeiro deploy.
7. Aplique as migrations do Prisma no banco alvo.
8. Configure o callback do Google com o dominio final publicado.
9. Faca um novo deploy se tiver alterado variaveis ou OAuth.

## Checklist de verificacao depois do deploy

- a home abre sem erro
- `GET /api/auth/*` responde normalmente
- login com Google funciona
- `GET /api/trpc/*` responde sem erro de banco
- rotas administrativas exigem autenticacao
- registros de leitura/escrita no banco funcionam

## Riscos e cuidados

- sem `Root Directory = apps/web`, a Vercel pode tentar interpretar o repositorio inteiro como um unico app e o deploy fica inconsistente
- sem variaveis de ambiente completas, o app pode falhar no startup por causa das validacoes com `zod`
- sem aplicar migrations corretamente, autenticacao e modulos administrativos podem falhar em runtime
- `apps/native` nao deve ser tratado como app Vercel neste momento

## Fontes consultadas

- [Using Monorepos - Vercel Docs](https://vercel.com/docs/monorepos)
- [Project Configuration - Vercel Docs](https://vercel.com/docs/project-configuration)
- [Next.js on Vercel - Vercel Docs](https://vercel.com/docs/frameworks/full-stack/nextjs)
