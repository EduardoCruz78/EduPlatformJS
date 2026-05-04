# Dependency Audit Notes

## Objetivo

Registrar o estado atual do `npm audit` no monorepo e as decisoes adotadas para manter a arvore de dependencias apresentavel para producao e portfolio tecnico.

## Ultima revisao

- data: `2026-05-04`
- comando de producao: `npm audit --omit=dev`
- comando completo: `npm audit`

## Resumo executivo

| Escopo | Estado atual | Interpretacao |
| --- | --- | --- |
| Producao (`--omit=dev`) | limpo | nao ha vulnerabilidades abertas no recorte de runtime principal |
| Toolchain completo | limpo | nao ha vulnerabilidades abertas no audit completo do monorepo |

## Correcoes aplicadas

- `npm audit fix` atualizou dependencias transitivas seguras, incluindo o patch de `@xmldom/xmldom`.
- `overrides` foram adicionados no `package.json` raiz para dependencias transitivas sem atualizacao direta segura nos pacotes consumidores atuais.
- O lockfile foi regenerado e validado com `npm ci`.

## Overrides documentados

| Dependencia | Versao forçada | Origem do risco |
| --- | --- | --- |
| `@hono/node-server` | `1.19.14` | dependencia transitiva do toolchain Prisma |
| `postcss` | `8.5.13` | dependencia transitiva de `next` e `@expo/metro-config` |
| `uuid` | `14.0.0` | dependencia transitiva de `xcode` via Expo |

## Decisao atual

Manter overrides explicitos enquanto os pacotes consumidores nao publicarem uma trilha direta que resolva os mesmos avisos sem downgrade ou ruptura.

## Validacao esperada

```bash
npm ci
npm audit
npm audit --omit=dev
npm test
npm run typecheck
npm run lint
npm run build --workspace web
```

## Conclusao operacional

O monorepo esta com audit limpo no recorte completo e de producao. Os overrides sao intencionais, pequenos e documentados para evitar downgrades inseguros sugeridos automaticamente pelo `npm audit fix --force`.
