[**@hikestack/prisma**](/official/reference/prisma/index.md) • **Docs**

***

[@hikestack/prisma](/official/reference/prisma/globals.md) / PrismaModuleOptions

# Interface: PrismaModuleOptions

## Extends

- `Subset`\<`Prisma.PrismaClientOptions`, `Prisma.PrismaClientOptions`\>

## Properties

### datasources?

> `optional` **datasources**: `Datasources`

Overwrites the datasource url from your schema.prisma file

#### Inherited from

`Prisma.Subset.datasources`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:1120

***

### datasourceUrl?

> `optional` **datasourceUrl**: `string`

Overwrites the datasource url from your schema.prisma file

#### Inherited from

`Prisma.Subset.datasourceUrl`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:1124

***

### errorFormat?

> `optional` **errorFormat**: `ErrorFormat`

#### Default

```ts
"colorless"
```

#### Inherited from

`Prisma.Subset.errorFormat`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:1128

***

### log?

> `optional` **log**: (`LogLevel` \| `LogDefinition`)[]

#### Example

```
// Defaults to stdout
log: ['query', 'info', 'warn', 'error']

// Emit as events
log: [
  { emit: 'stdout', level: 'query' },
  { emit: 'stdout', level: 'info' },
  { emit: 'stdout', level: 'warn' }
  { emit: 'stdout', level: 'error' }
]
```
Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).

#### Inherited from

`Prisma.Subset.log`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:1145

***

### transactionOptions?

> `optional` **transactionOptions**: `object`

The default values for transactionOptions
maxWait ?= 2000
timeout ?= 5000

#### isolationLevel?

> `optional` **isolationLevel**: `TransactionIsolationLevel`

#### maxWait?

> `optional` **maxWait**: `number`

#### timeout?

> `optional` **timeout**: `number`

#### Inherited from

`Prisma.Subset.transactionOptions`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:1151
