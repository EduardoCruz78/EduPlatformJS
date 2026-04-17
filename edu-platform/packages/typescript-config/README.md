# @edu-platform/typescript-config

Este pacote centraliza configuracoes compartilhadas de TypeScript para o monorepo.

## Arquivos disponiveis

- `base.json`
- `nextjs.json`
- `react-native-library.json`

## Objetivo

- reduzir duplicacao de configuracao
- manter coerencia entre workspaces
- facilitar evolucao coordenada do setup de TypeScript

## Uso esperado

Cada workspace estende apenas o preset que faz sentido para sua stack.

## Observacao

Este pacote e de suporte interno do monorepo. Ele nao carrega regra de negocio nem logica de produto.
