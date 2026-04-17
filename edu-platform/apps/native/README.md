# EduPlatformJS Native

`apps/native` e um shell experimental em Expo/React Native mantido dentro do monorepo para futura retomada controlada. Ele nao deve ser tratado como cliente principal do produto no estado atual.

## Status atual

- experimental
- pausado no roadmap principal
- sem paridade funcional com `apps/web`
- util para exploracao tecnica futura, nao para entrega principal

## O que este app representa hoje

- um ponto de partida para retomada mobile
- um espaco isolado para validar stack Expo
- uma referencia de estrutura minima sem prometer suporte total de produto

## O que este app nao representa hoje

- cliente oficial pronto para producao
- espelho funcional do `web`
- fonte principal de evolucao do produto

## Stack atual

- `Expo`
- `React Native`
- `Expo Router`
- `React Native Web`

## Scripts disponiveis

```bash
npm run dev --workspace native
npm run android --workspace native
npm run ios --workspace native
npm run web --workspace native
```

## Diretriz operacional

Se a trilha mobile voltar a ser prioridade, o ideal e reabrir o trabalho com escopo explicito:

1. decidir quais fluxos do produto entram primeiro
2. validar auth, navegacao e consumo de API
3. definir padrao visual mobile proprio
4. medir o gap real entre `apps/native` e `apps/web`

## Decisao atual do repositorio

Manter `apps/native` no monorepo e aceitavel porque:

- o app ja foi saneado para nao depender de residuos quebrados do template
- ele nao interfere no fluxo principal do `web`
- a documentacao agora deixa claro que se trata de experimento pausado

Se o produto mobile voltar a ter prioridade, a recomendacao e tratar isso como uma trilha dedicada, nao como extensao informal do backlog do `web`.
