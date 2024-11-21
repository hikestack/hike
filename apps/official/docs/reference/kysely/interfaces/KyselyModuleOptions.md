[**@hikestack/kysely**](/official/reference/kysely/index.md) • **Docs**

***

[@hikestack/kysely](/official/reference/kysely/globals.md) / KyselyModuleOptions

# Interface: KyselyModuleOptions

## Extends

- `KyselyConfig`

## Properties

### dialect

> `readonly` **dialect**: `Dialect`

#### Inherited from

`KyselyConfig.dialect`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:399

***

### log?

> `readonly` `optional` **log**: `LogConfig`

A list of log levels to log or a custom logger function.

Currently there's only two levels: `query` and `error`.
This will be expanded based on user feedback later.

### Examples

```ts
const db = new Kysely<Database>({
  dialect: new PostgresDialect(postgresConfig),
  log: ['query', 'error']
})
```

```ts
const db = new Kysely<Database>({
  dialect: new PostgresDialect(postgresConfig),
  log(event): void {
    if (event.level === 'query') {
      console.log(event.query.sql)
      console.log(event.query.parameters)
    }
  }
})
```

#### Inherited from

`KyselyConfig.log`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:428

***

### plugins?

> `readonly` `optional` **plugins**: `KyselyPlugin`[]

#### Inherited from

`KyselyConfig.plugins`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:400
