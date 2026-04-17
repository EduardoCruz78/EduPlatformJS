# @edu-platform/core

`@edu-platform/core` e a camada de dominio do EduPlatformJS. Este pacote define o contrato intelectual do sistema: entidades, DTOs, erros de negocio, interfaces de repository e use cases.

## Responsabilidades

- modelar entidades de dominio
- definir DTOs de entrada e saida
- expor contratos de repository
- centralizar `AppError`
- implementar regras de negocio em use cases

## O que nao pertence aqui

- Prisma
- Next.js
- Auth.js
- `ctx`, `session` ou detalhes HTTP
- acesso direto a banco
- componentes React

## Estrutura

```text
packages/core/src
|- dtos/              DTOs usados por routers, use cases e fronteiras
|- entities/          Tipos de dominio principais
|- errors/            `AppError` e contratos de erro
|- repositories/      Interfaces implementadas pela infrastructure
|- use-cases/         Regras de negocio por modulo
`- utils/             Utilitarios puros compartilhados
```

## Modulos de use case

Hoje o pacote cobre:

- `accessibility`
- `checklist`
- `content`
- `series`
- `subject`
- `topic`
- `user`
- `vestibular`

## Convencoes de design

- um use case recebe dependencias por contrato
- erros de negocio devem preferir `AppError`
- IDs de entidades relacionais do dominio continuam `number`
- `userId` continua `string`
- o dominio vence conflitos entre camadas

## Exemplo conceitual

Fluxo esperado:

1. router valida payload
2. router instancia ou chama um use case
3. use case conversa apenas com interfaces de repository
4. a infrastructure cumpre o contrato

## Export surface

O pacote reexporta:

- entidades
- DTOs
- `AppError`
- repositories
- use cases

Entrada principal: [packages/core/src/index.ts](./src/index.ts)

## Testes

Os testes de maior valor continuam centrados em comportamento de use case.

Comando principal:

```bash
npm run test:core
```

## Quando adicionar algo aqui

Adicione no `core` quando a mudanca envolver:

- regra de negocio
- contrato entre camadas
- nova entidade ou DTO
- erro de dominio
- caso de uso reutilizavel

## Quando nao adicionar algo aqui

Nao coloque no `core`:

- detalhes de Prisma
- formatacao de resposta HTTP
- hooks React
- acesso a ambiente
- logging de framework

## Principio final

Se uma regra precisa existir mesmo que o frontend, o banco ou o framework mudem, ela provavelmente pertence em `@edu-platform/core`.
