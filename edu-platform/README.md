# EduPlatformJS

EduPlatformJS e um monorepo focado em plataforma educacional com arquitetura em camadas, regras de dominio isoladas do framework e operacao centrada em `Next.js`, `tRPC`, `Prisma` e `PostgreSQL`.

O repositorio foi estruturado para manter separacao clara entre:

- dominio e casos de uso em `packages/core`
- implementacoes concretas em `packages/infrastructure`
- experiencia web em `apps/web`
- experimento mobile isolado em `apps/native`

## Visao geral

O objetivo do projeto e entregar uma base profissional para:

- catalogo educacional por `series -> subjects -> topics -> contents`
- modulos publicos e administrativos para `accessibility` e `vestibular`
- autenticacao com papeis `USER` e `ADMIN`
- checklist por usuario autenticado
- governanca administrativa com auditoria de troca de papel

## Arquitetura

```mermaid
flowchart LR
    A["apps/web"] --> B["tRPC routers"]
    B --> C["use cases em packages/core"]
    C --> D["contratos de repository"]
    D --> E["packages/infrastructure"]
    E --> F["Prisma + PostgreSQL"]
```

Principios centrais:

- `core` nao depende de `infrastructure`
- `use cases` nao conhecem Prisma, Next.js, sessao ou contexto HTTP
- `routers` ficam finos: validacao + orquestracao
- `repositories` retornam dominio, nao objetos Prisma crus
- o frontend nao acessa repositories diretamente

## Estrutura do monorepo

```text
.
|- apps/
|  |- web/                     Aplicacao principal em Next.js App Router
|  `- native/                  Shell experimental em Expo
|- docs/                       Documentacao operacional e material auxiliar
|- packages/
|  |- core/                    Entidades, DTOs, contratos, erros e use cases
|  |- infrastructure/          Prisma, mappers, container e repositories
|  `- typescript-config/       Configs compartilhadas de TypeScript
`- prisma/                     Schema, migrations e guias de operacao
```

## Workspaces

### `apps/web`

Aplicacao principal do produto. Reune:

- paginas publicas
- painel administrativo
- autenticacao
- contexto tRPC
- integracao com os casos de uso

Documentacao: [apps/web/README.md](./apps/web/README.md)

### `apps/native`

Shell experimental em Expo/React Native. Nao acompanha a maturidade do `web` e deve ser tratado como trilha pausada ate nova priorizacao.

Documentacao: [apps/native/README.md](./apps/native/README.md)

### `packages/core`

Camada de dominio do projeto. Contem:

- entidades
- DTOs
- contratos de repository
- `AppError`
- use cases por modulo

Documentacao: [packages/core/README.md](./packages/core/README.md)

### `packages/infrastructure`

Camada de implementacao concreta. Contem:

- client Prisma
- mappers
- repositories
- container de composicao
- validacao de ambiente de banco

Documentacao: [packages/infrastructure/README.md](./packages/infrastructure/README.md)

### `packages/typescript-config`

Configs compartilhadas para padronizacao de TypeScript entre workspaces.

Documentacao: [packages/typescript-config/README.md](./packages/typescript-config/README.md)

## Modulos funcionais

O estado atual validado do produto inclui:

- `series`
- `subjects`
- `topics`
- `contents`
- `checklist`
- `accessibility`
- `vestibular`
- `auth`
- `admin users` com gestao de papel
- `user role audit log`

## Seguranca e governanca

O monorepo ja incorpora uma base importante de hardening:

- RBAC com `USER` e `ADMIN`
- `adminProcedure` para mutacoes administrativas
- validacao server-side do layout `/admin`
- ownership no checklist
- `AppError` com traducao consistente para tRPC
- validacao tipada de ambiente
- auditoria persistida para troca de papel
- headers basicos de seguranca no `web`
- CI, lint moderno e scripts de validacao consistentes

## Comeco rapido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar ambiente

As variaveis minimas esperadas hoje sao:

| Variavel | Obrigatoria | Finalidade |
| --- | --- | --- |
| `DATABASE_URL` | sim* | conexao principal com PostgreSQL |
| `DIRECT_URL` | sim* | conexao direta alternativa para Prisma |
| `AUTH_SECRET` | sim | segredo do Auth.js, minimo de 32 caracteres |
| `GOOGLE_CLIENT_ID` | sim | OAuth do Google |
| `GOOGLE_CLIENT_SECRET` | sim | OAuth do Google |
| `ADMIN_EMAILS` | nao | bootstrap e recuperacao inicial de administradores |

\* E necessario ter `DATABASE_URL` ou `DIRECT_URL`.

### 3. Gerar o client Prisma

```bash
npx prisma generate
```

### 4. Rodar a aplicacao web

```bash
npm run dev --workspace web
```

## Scripts principais

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | executa `turbo run dev` para workspaces com script `dev` |
| `npm run dev --workspace web` | sobe apenas a aplicacao principal |
| `npm run build` | build do monorepo via Turbo |
| `npm run build --workspace web` | build do app principal |
| `npm run lint` | lint oficial do projeto, hoje centralizado no `web` |
| `npm run typecheck` | typecheck de `core`, `infrastructure` e `web` |
| `npm test` | testes de `core` e `infrastructure` |
| `npm run audit:prod` | `npm audit --omit=dev` |
| `npm run audit:full` | `npm audit` completo |
| `npm run format` | formatacao com Prettier |

## Validacao recomendada antes de merge ou deploy

```bash
npm test
npx prisma generate
npx tsc -p packages/core/tsconfig.json --noEmit
npx tsc -p packages/infrastructure/tsconfig.json --noEmit
npx tsc -p apps/web/tsconfig.json --noEmit
npm run lint --workspace web
npm run build --workspace web
```

Se houver alteracao de dependencias:

```bash
npm audit
npm audit --omit=dev
```

## Banco e migrations

Leia [prisma/README.md](./prisma/README.md) antes de aplicar migrations em ambiente com dados historicos.

Pontos importantes:

- o repositorio ja possui baseline de migrations
- a estrategia para banco novo e diferente da estrategia para banco ja populado
- drift e duplicidade devem ser avaliados antes de aplicar constraints em base historica
- nao existe recomendacao de SQL destrutivo automatico no repositorio

## Documentacao adicional

- [docs/README.md](./docs/README.md)
- [docs/dependency-audit.md](./docs/dependency-audit.md)
- [docs/github-root-readme.md](./docs/github-root-readme.md)
- [docs/vercel-migration.md](./docs/vercel-migration.md)
- [prisma/README.md](./prisma/README.md)
- [apps/web/README.md](./apps/web/README.md)
- [apps/native/README.md](./apps/native/README.md)
- [packages/core/README.md](./packages/core/README.md)
- [packages/infrastructure/README.md](./packages/infrastructure/README.md)

## Estado atual e limitacoes honestas

- `apps/web` e a experiencia principal e mais madura do produto
- `apps/native` continua experimental e pausado
- `npm audit --omit=dev` esta limpo para producao
- `npm audit` completo ainda reporta vulnerabilidades moderadas em toolchain de desenvolvimento; a decisao atual esta documentada em `docs/dependency-audit.md`
- a validacao final de drift e duplicidades em banco ja populado depende do estado real do banco fora do repositorio

## Quando editar cada camada

| Caso | Camada principal |
| --- | --- |
| Nova regra de negocio | `packages/core` |
| Nova persistencia ou mapper | `packages/infrastructure` |
| Nova rota ou validacao de entrada | `apps/web/src/server` |
| Nova tela, fluxo ou UX | `apps/web/app` |
| Mudanca de schema e persistencia | `prisma/` + `packages/infrastructure` |
| Documentacao operacional | `README.md`, `docs/`, `prisma/README.md` |

## Status de maturidade

O projeto ja esta em um nivel avancado de estrutura tecnica. A prioridade atual nao e reconstruir base, e sim manter consistencia, documentacao honesta e refinamentos finais de produto e operacao.
