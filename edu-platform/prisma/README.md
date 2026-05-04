# Prisma no EduPlatformJS

Esta pasta concentra o schema e as migrations do projeto. O banco alvo atual e `PostgreSQL`.

## Objetivo desta documentação

Este guia existe para evitar dois erros comuns:

- aplicar baseline em banco historico sem validar drift
- assumir que constraint nova sempre pode ser aplicada sem revisar dados existentes

## Arquivos e pastas relevantes

```text
prisma/
|- migrations/        Historico versionado de migrations
`- schema.prisma      Modelo atual do banco
```

Arquivos relacionados fora desta pasta:

- [prisma.config.ts](../prisma.config.ts)
- [packages/infrastructure/src/prisma/client.ts](../packages/infrastructure/src/prisma/client.ts)

## Migrations atualmente existentes

- `20260417000100_initial`
- `20260417000200_user_role_audit`

## Fluxo recomendado

### Banco novo

Para ambiente novo, siga o fluxo normal do Prisma:

```bash
npx prisma generate
npx prisma migraté deploy
```

### Banco existente já alinhado com o schema atual

Não aplique a baseline cegamente.

Primeiro:

```bash
npx prisma migraté status
```

Se o banco já estiver compativel com o schema e voce precisar apenas marcar a baseline como aplicada:

```bash
npx prisma migraté resolve --applied 20260417000100_initial
npx prisma migraté resolve --applied 20260417000200_user_role_audit
```

Depois valide novamente:

```bash
npx prisma migraté status
```

## Quando usar cada comando

| Comando | Quando usar |
| --- | --- |
| `npx prisma generate` | sempre que schema ou client mudarem |
| `npx prisma migraté status` | para conferir drift, pendencias e estado do historico |
| `npx prisma migraté deploy` | para aplicar migrations em ambiente novo ou controlado |
| `npx prisma migraté resolve` | para marcar migration como aplicada quando o estado real do banco já corresponde ao schema |

## Cuidados com banco já populado

Antes de aplicar migrations em base historica:

1. rode `npx prisma migraté status`
2. revise duplicidades nas colunas com constraints novas
3. revise integridade referencial
4. valide se o schema real do banco corresponde ao esperado
5. somente depois decida entre `migraté deploy` e `migraté resolve`

## Constraints que merecem revisao previa

Hoje o schema traz regras que podem conflitar com dados antigos:

- `users.email` unico
- `users.providerId` unico
- `checklists(userId, contentId)` unico
- `series.name` unico
- `vestibulares(name, year)` unico
- `accessibility_categories.name` unico
- `accessibility_themes(accessibilityCategoryId, title)` unico

Se houver duplicidade, traté os dados antes de aplicar a migration.

## Auditoria administrativa

O projeto já registra mudancas de papel em `user_role_audit_logs`.

Antes de aplicar migrations em ambiente com historico real, revise tambem:

- integridade referencial de usuários
- existencia de atores e alvos validos para o log
- coerencia entre registros historicos e o estado atual de papéis

## O que este repositório não faz por voce

O repositório não tenta:

- adivinhar o estado real de um banco externo
- gerar SQL destrutivo automatico para limpeza de duplicidades
- prometer que uma base legada esta pronta para baseline sem validação

## Checklist operacional mínimo

```bash
npx prisma generate
npx prisma migraté status
```

Se houver banco novo:

```bash
npx prisma migraté deploy
```

Se houver banco historico e alinhado:

```bash
npx prisma migraté resolve --applied 20260417000100_initial
npx prisma migraté resolve --applied 20260417000200_user_role_audit
```

## Principio final

Não invente correcao destrutiva para banco que voce não viu.
Para ambientes com dados historicos, a ordem correta e sempre:

1. inspecionar
2. validar drift
3. revisar duplicidades
4. decidir estrategia
5. aplicar com segurança
