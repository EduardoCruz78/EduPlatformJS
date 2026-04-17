# Documentacao complementar

Esta pasta reune documentos que complementam os READMEs principais do monorepo.

## Indice

- [docs/dependency-audit.md](./dependency-audit.md)
  Estado atual do `npm audit`, separando risco de producao e risco de toolchain.

- [docs/github-root-readme.md](./github-root-readme.md)
  README pronto para adaptar ao diretorio geral ou perfil do GitHub.

- [../prisma/README.md](../prisma/README.md)
  Guia operacional de schema, baseline, drift e migrations.

## Quando usar esta pasta

Use `docs/` para materiais que:

- nao pertencem a um workspace especifico
- ajudam onboarding, operacao ou governanca
- precisam de mais detalhe do que o `README.md` raiz deve carregar

## Quando nao usar esta pasta

Nao use `docs/` para:

- esconder informacao essencial que deveria estar no README principal
- documentar detalhes exclusivos de um pacote quando um README local resolve melhor
- criar duplicacao sem necessidade
