# Arquivo criado para documentar o desafio encontrado sobre o Prisma 8 requerer o tipo `Temporal` para datas
> Achei interessante documentar pois passeis uns dias analisando o erro

## Problema com `Temporal` no Prisma 8 + PostgreSQL

Durante a configuração do banco PostgreSQL com **Prisma 8 RC** e `@prisma/orm-postgres/runtime`, surgiu um problema envolvendo o `Temporal` e os tipos de data.

A aplicação utilizava o codec:

`pg/timestamptz-temporal@1`

Esse codec faz com que valores PostgreSQL do tipo `timestamptz` sejam representados como objetos do **Temporal**, principalmente `Temporal.Instant`, em vez de `Date`.

### 1. Primeiro problema: o runtime não possuía `Temporal`

Ao executar o seed, apareceu:
```bash
Codec 'pg/timestamptz-temporal@1' cannot decode a value because this runtime has no global Temporal implementation.
```
Foi verificado o ambiente:

```bash
node -e "console.log(typeof Temporal); console.log(process.version)"
```

Resultado:

```bash
undefined
v25.2.1
```

> Ou seja, apesar de estar usando Node 25.2.1, o runtime utilizado pelo projeto não disponibilizava `Temporal` como variável global.

---

## 2. Tentativa de resolver com o polyfill

Foi instalado/utilizado:
```bash
npm install @js-temporal/polyfill
```
E inicialmente tentou-se:
```typescript
import { Temporal } from "@js-temporal/polyfill";
globalThis.Temporal = Temporal;
```

Isso resolveu a ausência do `Temporal` em runtime, mas criou outro problema.

O TypeScript acusou incompatibilidade entre `Temporal.Instant` do ambiente esperado pelo Prisma e `(@js-temporal/polyfill).Temporal.Instant` do polyfill.

O erro era essencialmente:
```bash
Type 'typeof import("@js-temporal/polyfill").Temporal'
is not assignable to type 'typeof Temporal'
```
> Isso acontece porque existem **duas definições de tipo diferentes** para `Temporal`. Apesar de terem o mesmo conceito e nome, o TypeScript não as considera necessariamente o mesmo tipo.

---

## 3. Segundo problema: o `seed.ts` não reconhecia `Temporal`

Depois de conseguir executar o seed com o polyfill, surgiu outro erro durante o build:
```bash
Type error: Cannot find name 'Temporal'.
```
Por exemplo:
```typescript
birthday: Temporal.Instant.from("2001-05-15T00:00:00Z"),
```
O problema aqui era diferente.

O runtime já tinha sido configurado:
```typescript
import { Temporal } from "@js-temporal/polyfill";

(globalThis as any).Temporal = Temporal;
```
mas isso **não informa ao TypeScript que existe uma variável global chamada `Temporal`**.

Portanto:

> Runtime:
  globalThis.Temporal → existe

> TypeScript:
  Temporal → desconhecido

---

# Solução encontrada

A solução foi separar o problema em duas partes:

### Runtime

No arquivo responsável pela inicialização do banco:
```typescript
import { Temporal } from "@js-temporal/polyfill";

(globalThis as any).Temporal = Temporal;
```
> Isso disponibiliza o polyfill globalmente para o codec `pg/timestamptz-temporal@1` que precisa encontrar `globalThis.Temporal` em tempo de execução.

---

### TypeScript

Foi adicionada uma declaração global para informar ao TypeScript que `Temporal` existe:
```typescript
// temporal.d.ts

declare global {
  const Temporal: typeof import("@js-temporal/polyfill").Temporal;
}

export {};
```
Assim, o TypeScript passa a entender:

- Temporal.Instant
- Temporal.PlainDate
- Temporal.PlainDateTime
- Temporal.Duration

etc.

O arquivo `.d.ts` também precisa estar incluído pelo `tsconfig.json`, por exemplo:
```typescript
{
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/*.d.ts" /* <--- */
  ]
}
```
---

# Fluxo final

A situação ficou assim:

```bash
PostgreSQL
    │
    │ timestamptz
    ▼
pg/timestamptz-temporal@1
    │
    │ precisa de Temporal global
    ▼
globalThis.Temporal
    │
    │ fornecido pelo
    ▼
@js-temporal/polyfill

Enquanto o TypeScript possui uma camada separada:

seed.ts
   │
   │ usa Temporal.Instant / Temporal.PlainDate
   ▼
temporal.d.ts
   │
   │ declara que Temporal existe
   ▼
TypeScript
```
Portanto, a solução final não foi simplesmente **"importar `Temporal`"**. Foi necessário resolver **dois problemas independentes**:

1. **Runtime:** disponibilizar `Temporal` globalmente através do `@js-temporal/polyfill`.
2. **TypeScript/build:** declarar `Temporal` como global através de um arquivo `.d.ts`.

E isso explica por que o seed conseguia funcionar em execução, mas o build continuava apresentando:
```bash
Cannot find name 'Temporal'
```
Mesmo que `Temporal` já existisse durante a execução.