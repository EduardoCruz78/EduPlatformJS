# Dependency Audit Notes

## Objetivo

Registrar de forma objetiva o estado atual do `npm audit` no monorepo e a decisao tecnica adotada para o risco residual de dependencias de desenvolvimento.

## Ultima revisao

- data: `2026-04-17`
- comando de producao: `npm audit --omit=dev`
- comando completo: `npm audit`

## Resumo executivo

| Escopo | Estado atual | Interpretacao |
| --- | --- | --- |
| Producao (`--omit=dev`) | limpo | nao ha vulnerabilidades abertas no recorte de runtime principal |
| Toolchain completo | 4 moderadas | risco concentrado em dependencias de desenvolvimento ligadas a Prisma/Hono |

## Dependencias apontadas

O `npm audit` completo ainda reporta vulnerabilidades moderadas envolvendo:

- `@hono/node-server < 1.19.13`
- `hono < 4.12.14`
- dependencias transitivas via `@prisma/dev`

## Decisao atual

Nao aplicar `npm audit fix --force` automaticamente.

## Justificativa

- o caminho sugerido localmente tenta forcar uma troca relevante no ecossistema do Prisma
- nao existe evidencia suficiente no codigo atual de que essa trilha e segura sem regressao
- o recorte de producao ja esta limpo, entao a urgencia e menor do que o risco de quebrar o setup

## Impacto real hoje

- nao bloqueia build
- nao bloqueia lint
- nao bloqueia testes
- nao bloqueia typecheck
- nao bloqueia execucao do produto principal
- nao caracteriza vulnerabilidade aberta no recorte de runtime de producao validado por `npm audit --omit=dev`

## O que faria sentido antes de atualizar

1. validar changelogs e compatibilidade das versoes atuais de Prisma 7
2. confirmar se existe patch seguro sem downgrade ou ruptura de toolchain
3. rodar `npx prisma generate`, `npm test`, typecheck, lint e build apos qualquer tentativa
4. somente aplicar upgrade quando a trilha estiver comprovadamente segura

## Conclusao operacional

A pendencia existe e e valida, mas hoje esta encapsulada como risco de desenvolvimento, nao de producao.
No estado atual do repositorio, a decisao tecnica correta continua sendo:

- manter documentado
- nao forcar atualizacao arriscada
- revisar novamente quando houver trilha segura e testavel
