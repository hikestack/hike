[**@hikestack/kysely**](/official/reference/kysely/index.md) • **Docs**

***

[@hikestack/kysely](/official/reference/kysely/globals.md) / KyselyService

# Class: KyselyService\<T\>

## Extends

- `Kysely`\<`T`\>

## Type Parameters

• **T**

## Constructors

### new KyselyService()

> **new KyselyService**\<`T`\>(`options`): [`KyselyService`](/official/reference/kysely/classes/KyselyService.md)\<`T`\>

#### Parameters

• **options**: [`KyselyModuleOptions`](/official/reference/kysely/interfaces/KyselyModuleOptions.md)

#### Returns

[`KyselyService`](/official/reference/kysely/classes/KyselyService.md)\<`T`\>

#### Overrides

`Kysely<T>.constructor`

#### Defined in

[packages/kysely/src/kysely.service.ts:8](https://github.com/hikestack/hike/blob/928de04fa91eff5cc11ce6874f171775c7eb9f5a/packages/kysely/src/kysely.service.ts#L8)

## Accessors

### dynamic

> `get` **dynamic**(): `DynamicModule`

Returns a the DynamicModule module.

The DynamicModule module can be used to bypass strict typing and
passing in dynamic values for the queries.

#### Returns

`DynamicModule`

#### Inherited from

`Kysely.dynamic`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:76

***

### fn

> `get` **fn**(): `FunctionModule`\<`DB`, keyof `DB`\>

Returns a FunctionModule that can be used to write type safe function
calls.

```ts
await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) => [
    'person.id',
    eb.fn.count('pet.id').as('pet_count')
  ])
  .groupBy('person.id')
  .having((eb) => eb.fn.count('pet.id'), '>', 10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", count("pet"."id") as "pet_count"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
group by "person"."id"
having count("pet"."id") > $1
```

#### Returns

`FunctionModule`\<`DB`, keyof `DB`\>

#### Inherited from

`Kysely.fn`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:114

***

### introspection

> `get` **introspection**(): `DatabaseIntrospector`

Returns a DatabaseIntrospector | database introspector.

#### Returns

`DatabaseIntrospector`

#### Inherited from

`Kysely.introspection`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:80

***

### isTransaction

> `get` **isTransaction**(): `boolean`

Returns true if this `Kysely` instance is a transaction.

You can also use `db instanceof Transaction`.

#### Returns

`boolean`

#### Inherited from

`Kysely.isTransaction`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:244

***

### schema

> `get` **schema**(): `SchemaModule`

Returns the SchemaModule module for building database schema.

#### Returns

`SchemaModule`

#### Inherited from

`Kysely.schema`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:69

## Methods

### case()

#### case()

> **case**(): `CaseBuilder`\<`T`, keyof `T`, `unknown`, `never`\>

Creates a `case` statement/operator.

See ExpressionBuilder.case for more information.

##### Returns

`CaseBuilder`\<`T`, keyof `T`, `unknown`, `never`\>

##### Inherited from

`Kysely.case`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:86

#### case(value)

> **case**\<`V`\>(`value`): `CaseBuilder`\<`T`, keyof `T`, `V`, `never`\>

##### Type Parameters

• **V**

##### Parameters

• **value**: `Expression`\<`V`\>

##### Returns

`CaseBuilder`\<`T`, keyof `T`, `V`, `never`\>

##### Inherited from

`Kysely.case`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:87

***

### connection()

> **connection**(): `ConnectionBuilder`\<`T`\>

Provides a kysely instance bound to a single database connection.

### Examples

```ts
await db
  .connection()
  .execute(async (db) => {
    // `db` is an instance of `Kysely` that's bound to a single
    // database connection. All queries executed through `db` use
    // the same connection.
    await doStuff(db)
  })
```

#### Returns

`ConnectionBuilder`\<`T`\>

#### Inherited from

`Kysely.connection`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:188

***

### deleteFrom()

#### deleteFrom(from)

> **deleteFrom**\<`TR`\>(`from`): `DeleteQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TR`\>, `DeleteResult`\>

Creates a delete query.

See the DeleteQueryBuilder.where method for examples on how to specify
a where clause for the delete operation.

The return value of the query is an instance of DeleteResult.

### Examples

<!-- siteExample("delete", "Single row", 10) -->

Delete a single row:

```ts
const result = await db
  .deleteFrom('person')
  .where('person.id', '=', '1')
  .executeTakeFirst()

console.log(result.numDeletedRows)
```

The generated SQL (PostgreSQL):

```sql
delete from "person" where "person"."id" = $1
```

Some databases such as MySQL support deleting from multiple tables:

```ts
const result = await db
  .deleteFrom(['person', 'pet'])
  .using('person')
  .innerJoin('pet', 'pet.owner_id', '=', 'person.id')
  .where('person.id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (MySQL):

```sql
delete from `person`, `pet`
using `person`
inner join `pet` on `pet`.`owner_id` = `person`.`id`
where `person`.`id` = ?
```

##### Type Parameters

• **TR** *extends* `string`

##### Parameters

• **from**: `TR`[]

##### Returns

`DeleteQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TR`\>, `DeleteResult`\>

##### Inherited from

`Kysely.deleteFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:297

#### deleteFrom(tables)

> **deleteFrom**\<`TR`\>(`tables`): `DeleteQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TR> ? ExtractRowTypeFromTableExpression<T, TR, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `DeleteResult`\>

##### Type Parameters

• **TR** *extends* `string` \| `AliasedExpression`\<`any`, `any`\>

##### Parameters

• **tables**: `TR`[]

##### Returns

`DeleteQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TR> ? ExtractRowTypeFromTableExpression<T, TR, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `DeleteResult`\>

##### Inherited from

`Kysely.deleteFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:298

#### deleteFrom(from)

> **deleteFrom**\<`TR`\>(`from`): `DeleteQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TR`\>, `DeleteResult`\>

##### Type Parameters

• **TR** *extends* `string`

##### Parameters

• **from**: `TR`

##### Returns

`DeleteQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TR`\>, `DeleteResult`\>

##### Inherited from

`Kysely.deleteFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:299

#### deleteFrom(table)

> **deleteFrom**\<`TR`\>(`table`): `DeleteQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TR> ? ExtractRowTypeFromTableExpression<T, TR, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `DeleteResult`\>

##### Type Parameters

• **TR** *extends* `string` \| `AliasedExpression`\<`any`, `any`\>

##### Parameters

• **table**: `TR`

##### Returns

`DeleteQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TR> ? ExtractRowTypeFromTableExpression<T, TR, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `DeleteResult`\>

##### Inherited from

`Kysely.deleteFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:300

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Releases all resources and disconnects from the database.

You need to call this when you are done using the `Kysely` instance.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Kysely.destroy`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:238

***

### executeQuery()

> **executeQuery**\<`R`\>(`query`, `queryId`?): `Promise`\<`QueryResult`\<`R`\>\>

Executes a given compiled query or query builder.

See [splitting build, compile and execute code recipe](https://github.com/koskimas/kysely/blob/master/site/docs/recipes/splitting-build-compile-and-execute-code.md#execute-compiled-queries) for more information.

#### Type Parameters

• **R**

#### Parameters

• **query**: `CompiledQuery`\<`R`\> \| `Compilable`\<`R`\>

• **queryId?**: `QueryId`

#### Returns

`Promise`\<`QueryResult`\<`R`\>\>

#### Inherited from

`Kysely.executeQuery`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:255

***

### insertInto()

> **insertInto**\<`T`\>(`table`): `InsertQueryBuilder`\<`T`, `T`, `InsertResult`\>

Creates an insert query.

The return value of this query is an instance of InsertResult. InsertResult
has the InsertResult.insertId | insertId field that holds the auto incremented id of
the inserted row if the db returned one.

See the InsertQueryBuilder.values | values method for more info and examples. Also see
the ReturningInterface.returning | returning method for a way to return columns
on supported databases like PostgreSQL.

### Examples

```ts
const result = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .executeTakeFirst()

console.log(result.insertId)
```

Some databases like PostgreSQL support the `returning` method:

```ts
const { id } = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .returning('id')
  .executeTakeFirst()
```

#### Type Parameters

• **T** *extends* `string`

#### Parameters

• **table**: `T`

#### Returns

`InsertQueryBuilder`\<`T`, `T`, `InsertResult`\>

#### Inherited from

`Kysely.insertInto`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:220

***

### mergeInto()

#### mergeInto(targetTable)

> **mergeInto**\<`TR`\>(`targetTable`): `MergeQueryBuilder`\<`T`, `TR`, `MergeResult`\>

Creates a merge query.

The return value of the query is a MergeResult.

See the MergeQueryBuilder.using method for examples on how to specify
the other table.

### Examples

```ts
const result = await db
  .mergeInto('person')
  .using('pet', 'pet.owner_id', 'person.id')
  .whenMatched((and) => and('has_pets', '!=', 'Y'))
  .thenUpdateSet({ has_pets: 'Y' })
  .whenNotMatched()
  .thenDoNothing()
  .executeTakeFirstOrThrow()

console.log(result.numChangedRows)
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "pet"."owner_id" = "person"."id"
when matched and "has_pets" != $1 then
  update set "has_pets" = $2
when not matched then
  do nothing
```

##### Type Parameters

• **TR** *extends* `string`

##### Parameters

• **targetTable**: `TR`

##### Returns

`MergeQueryBuilder`\<`T`, `TR`, `MergeResult`\>

##### Inherited from

`Kysely.mergeInto`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:361

#### mergeInto(targetTable)

> **mergeInto**\<`TR`\>(`targetTable`): `MergeQueryBuilder`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `TR`\>, `MergeResult`\>

##### Type Parameters

• **TR** *extends* \`$\{string\} as $\{string\}\`

##### Parameters

• **targetTable**: `TR`

##### Returns

`MergeQueryBuilder`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `TR`\>, `MergeResult`\>

##### Inherited from

`Kysely.mergeInto`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:362

***

### replaceInto()

> **replaceInto**\<`T`\>(`table`): `InsertQueryBuilder`\<`T`, `T`, `InsertResult`\>

Creates a replace query.

A MySQL-only statement similar to InsertQueryBuilder.onDuplicateKeyUpdate
that deletes and inserts values on collision instead of updating existing rows.

The return value of this query is an instance of InsertResult. InsertResult
has the InsertResult.insertId | insertId field that holds the auto incremented id of
the inserted row if the db returned one.

See the InsertQueryBuilder.values | values method for more info and examples.

### Examples

```ts
const result = await db
  .replaceInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .executeTakeFirst()

console.log(result.insertId)
```

#### Type Parameters

• **T** *extends* `string`

#### Parameters

• **table**: `T`

#### Returns

`InsertQueryBuilder`\<`T`, `T`, `InsertResult`\>

#### Inherited from

`Kysely.replaceInto`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:247

***

### selectFrom()

#### selectFrom(from)

> **selectFrom**\<`TE`\>(`from`): `SelectQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TE`\>, `object`\>

Creates a `select` query builder for the given table or tables.

The tables passed to this method are built as the query's `from` clause.

### Examples

Create a select query for one table:

```ts
db.selectFrom('person').selectAll()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
```

Create a select query for one table with an alias:

```ts
const persons = await db.selectFrom('person as p')
  .select(['p.id', 'first_name'])
  .execute()

console.log(persons[0].id)
```

The generated SQL (PostgreSQL):

```sql
select "p"."id", "first_name" from "person" as "p"
```

Create a select query from a subquery:

```ts
const persons = await db.selectFrom(
    (eb) => eb.selectFrom('person').select('person.id as identifier').as('p')
  )
  .select('p.identifier')
  .execute()

console.log(persons[0].identifier)
```

The generated SQL (PostgreSQL):

```sql
select "p"."identifier",
from (
  select "person"."id" as "identifier" from "person"
) as p
```

Create a select query from raw sql:

```ts
import { sql } from 'kysely'

const items = await db
  .selectFrom(sql<{ one: number }>`(select 1 as one)`.as('q'))
  .select('q.one')
  .execute()

console.log(items[0].one)
```

The generated SQL (PostgreSQL):

```sql
select "q"."one",
from (
  select 1 as one
) as q
```

When you use the `sql` tag you need to also provide the result type of the
raw snippet / query so that Kysely can figure out what columns are
available for the rest of the query.

The `selectFrom` method also accepts an array for multiple tables. All
the above examples can also be used in an array.

```ts
import { sql } from 'kysely'

const items = await db.selectFrom([
    'person as p',
    db.selectFrom('pet').select('pet.species').as('a'),
    sql<{ one: number }>`(select 1 as one)`.as('q')
  ])
  .select(['p.id', 'a.species', 'q.one'])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "p".id, "a"."species", "q"."one"
from
  "person" as "p",
  (select "pet"."species" from "pet") as a,
  (select 1 as one) as "q"
```

##### Type Parameters

• **TE** *extends* `string`

##### Parameters

• **from**: `TE`[]

##### Returns

`SelectQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TE`\>, `object`\>

##### Inherited from

`Kysely.selectFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:127

#### selectFrom(from)

> **selectFrom**\<`TE`\>(`from`): `SelectQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TE> ? ExtractRowTypeFromTableExpression<T, TE, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TE`\>\>, `object`\>

##### Type Parameters

• **TE** *extends* `string` \| `AliasedExpression`\<`any`, `any`\> \| `AliasedExpressionFactory`\<`T`, `never`\>

##### Parameters

• **from**: `TE`[]

##### Returns

`SelectQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TE> ? ExtractRowTypeFromTableExpression<T, TE, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TE`\>\>, `object`\>

##### Inherited from

`Kysely.selectFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:128

#### selectFrom(from)

> **selectFrom**\<`TE`\>(`from`): `SelectQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TE`\>, `object`\>

##### Type Parameters

• **TE** *extends* `string`

##### Parameters

• **from**: `TE`

##### Returns

`SelectQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TE`\>, `object`\>

##### Inherited from

`Kysely.selectFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:129

#### selectFrom(from)

> **selectFrom**\<`TE`\>(`from`): `SelectQueryBuilder`\<`T` & `PickTableWithAlias`\<`T`, `TE`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TE`\>, `TE`\>, `object`\>

##### Type Parameters

• **TE** *extends* \`$\{string\} as $\{string\}\`

##### Parameters

• **from**: `TE`

##### Returns

`SelectQueryBuilder`\<`T` & `PickTableWithAlias`\<`T`, `TE`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TE`\>, `TE`\>, `object`\>

##### Inherited from

`Kysely.selectFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:130

#### selectFrom(from)

> **selectFrom**\<`TE`\>(`from`): `SelectQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TE> ? ExtractRowTypeFromTableExpression<T, TE, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TE`\>\>, `object`\>

##### Type Parameters

• **TE** *extends* `string` \| `AliasedExpression`\<`any`, `any`\> \| `AliasedExpressionFactory`\<`T`, `never`\>

##### Parameters

• **from**: `TE`

##### Returns

`SelectQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TE> ? ExtractRowTypeFromTableExpression<T, TE, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TE`\>\>, `object`\>

##### Inherited from

`Kysely.selectFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:131

***

### selectNoFrom()

#### selectNoFrom(selections)

> **selectNoFrom**\<`SE`\>(`selections`): `SelectQueryBuilder`\<`T`, `never`, `Selection`\<`T`, `never`, `SE`\>\>

Creates a `select` query builder without a `from` clause.

If you want to create a `select from` query, use the `selectFrom` method instead.
This one can be used to create a plain `select` statement without a `from` clause.

This method accepts the same inputs as SelectQueryBuilder.select. See its
documentation for more examples.

### Examples

```ts
const result = db.selectNoFrom((eb) => [
  eb.selectFrom('person')
    .select('id')
    .where('first_name', '=', 'Jennifer')
    .limit(1)
    .as('jennifer_id'),

  eb.selectFrom('pet')
    .select('id')
    .where('name', '=', 'Doggo')
    .limit(1)
    .as('doggo_id')
  ])
  .executeTakeFirstOrThrow()

console.log(result.jennifer_id)
console.log(result.doggo_id)
```

The generated SQL (PostgreSQL):

```sql
select (
  select "id"
  from "person"
  where "first_name" = $1
  limit $2
) as "jennifer_id", (
  select "id"
  from "pet"
  where "name" = $3
  limit $4
) as "doggo_id"
```

##### Type Parameters

• **SE** *extends* `SelectExpression`\<`T`, `never`\>

##### Parameters

• **selections**: readonly `SE`[]

##### Returns

`SelectQueryBuilder`\<`T`, `never`, `Selection`\<`T`, `never`, `SE`\>\>

##### Inherited from

`Kysely.selectNoFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:179

#### selectNoFrom(callback)

> **selectNoFrom**\<`CB`\>(`callback`): `SelectQueryBuilder`\<`T`, `never`, `CallbackSelection`\<`T`, `never`, `CB`\>\>

##### Type Parameters

• **CB** *extends* `SelectCallback`\<`T`, `never`\>

##### Parameters

• **callback**: `CB`

##### Returns

`SelectQueryBuilder`\<`T`, `never`, `CallbackSelection`\<`T`, `never`, `CB`\>\>

##### Inherited from

`Kysely.selectNoFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:180

#### selectNoFrom(selection)

> **selectNoFrom**\<`SE`\>(`selection`): `SelectQueryBuilder`\<`T`, `never`, `Selection`\<`T`, `never`, `SE`\>\>

##### Type Parameters

• **SE** *extends* `SelectExpression`\<`T`, `never`\>

##### Parameters

• **selection**: `SE`

##### Returns

`SelectQueryBuilder`\<`T`, `never`, `Selection`\<`T`, `never`, `SE`\>\>

##### Inherited from

`Kysely.selectNoFrom`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:181

***

### transaction()

> **transaction**(): `TransactionBuilder`\<`T`\>

Creates a TransactionBuilder that can be used to run queries inside a transaction.

The returned TransactionBuilder can be used to configure the transaction. The
TransactionBuilder.execute method can then be called to run the transaction.
TransactionBuilder.execute takes a function that is run inside the
transaction. If the function throws, the transaction is rolled back. Otherwise
the transaction is committed.

The callback function passed to the TransactionBuilder.execute | execute
method gets the transaction object as its only argument. The transaction is
of type Transaction which inherits Kysely. Any query
started through the transaction object is executed inside the transaction.

### Examples

<!-- siteExample("transactions", "Simple transaction", 10) -->

This example inserts two rows in a transaction. If an error is thrown inside
the callback passed to the `execute` method, the transaction is rolled back.
Otherwise it's committed.

```ts
const catto = await db.transaction().execute(async (trx) => {
  const jennifer = await trx.insertInto('person')
    .values({
      first_name: 'Jennifer',
      last_name: 'Aniston',
      age: 40,
    })
    .returning('id')
    .executeTakeFirstOrThrow()

  return await trx.insertInto('pet')
    .values({
      owner_id: jennifer.id,
      name: 'Catto',
      species: 'cat',
      is_favorite: false,
    })
    .returningAll()
    .executeTakeFirst()
})
```

Setting the isolation level:

```ts
await db
  .transaction()
  .setIsolationLevel('serializable')
  .execute(async (trx) => {
    await doStuff(trx)
  })
```

#### Returns

`TransactionBuilder`\<`T`\>

#### Inherited from

`Kysely.transaction`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:171

***

### updateTable()

#### updateTable(table)

> **updateTable**\<`TR`\>(`table`): `UpdateQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TR`\>, `ExtractTableAlias`\<`T`, `TR`\>, `UpdateResult`\>

Creates an update query.

See the UpdateQueryBuilder.where method for examples on how to specify
a where clause for the update operation.

See the UpdateQueryBuilder.set method for examples on how to
specify the updates.

The return value of the query is an UpdateResult.

### Examples

```ts
const result = await db
  .updateTable('person')
  .set({ first_name: 'Jennifer' })
  .where('person.id', '=', 1)
  .executeTakeFirst()

console.log(result.numUpdatedRows)
```

##### Type Parameters

• **TR** *extends* `string`

##### Parameters

• **table**: `TR`

##### Returns

`UpdateQueryBuilder`\<`T`, `ExtractTableAlias`\<`T`, `TR`\>, `ExtractTableAlias`\<`T`, `TR`\>, `UpdateResult`\>

##### Inherited from

`Kysely.updateTable`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:324

#### updateTable(table)

> **updateTable**\<`TR`\>(`table`): `UpdateQueryBuilder`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `TR`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `TR`\>, `UpdateResult`\>

##### Type Parameters

• **TR** *extends* \`$\{string\} as $\{string\}\`

##### Parameters

• **table**: `TR`

##### Returns

`UpdateQueryBuilder`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `TR`\>, `ExtractTableAlias`\<`T` & `PickTableWithAlias`\<`T`, `TR`\>, `TR`\>, `UpdateResult`\>

##### Inherited from

`Kysely.updateTable`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:325

#### updateTable(table)

> **updateTable**\<`TR`\>(`table`): `UpdateQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TR> ? ExtractRowTypeFromTableExpression<T, TR, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `UpdateResult`\>

##### Type Parameters

• **TR** *extends* `string` \| `AliasedExpression`\<`any`, `any`\>

##### Parameters

• **table**: `TR`

##### Returns

`UpdateQueryBuilder`\<`DrainOuterGeneric`\<`{ [C in any]: C extends ExtractAliasFromTableExpression<T, TR> ? ExtractRowTypeFromTableExpression<T, TR, C<C>> : C extends keyof T ? T[C<C>] : never }`\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `DrainOuterGeneric`\<`ExtractAliasFromTableExpression`\<`T`, `TR`\>\>, `UpdateResult`\>

##### Inherited from

`Kysely.updateTable`

##### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:326

***

### with()

> **with**\<`N`, `E`\>(`nameOrBuilder`, `expression`): `QueryCreatorWithCommonTableExpression`\<`T`, `N`, `E`\>

Creates a `with` query (Common Table Expression).

### Examples

<!-- siteExample("cte", "Simple selects", 10) -->

Common table expressions (CTE) are a great way to modularize complex queries.
Essentially they allow you to run multiple separate queries within a
single roundtrip to the DB.

Since CTEs are a part of the main query, query optimizers inside DB
engines are able to optimize the overall query. For example, postgres
is able to inline the CTEs inside the using queries if it decides it's
faster.

```ts
const result = await db
  // Create a CTE called `jennifers` that selects all
  // persons named 'Jennifer'.
  .with('jennifers', (db) => db
    .selectFrom('person')
    .where('first_name', '=', 'Jennifer')
    .select(['id', 'age'])
  )
  // Select all rows from the `jennifers` CTE and
  // further filter it.
  .with('adult_jennifers', (db) => db
    .selectFrom('jennifers')
    .where('age', '>', 18)
    .select(['id', 'age'])
  )
  // Finally select all adult jennifers that are
  // also younger than 60.
  .selectFrom('adult_jennifers')
  .where('age', '<', 60)
  .selectAll()
  .execute()
```

<!-- siteExample("cte", "Inserts, updates and deletions", 20) -->

Some databases like postgres also allow you to run other queries than selects
in CTEs. On these databases CTEs are extremely powerful:

```ts
const result = await db
  .with('new_person', (db) => db
    .insertInto('person')
    .values({
      first_name: 'Jennifer',
      age: 35,
    })
    .returning('id')
  )
  .with('new_pet', (db) => db
    .insertInto('pet')
    .values({
      name: 'Doggo',
      species: 'dog',
      is_favorite: true,
      // Use the id of the person we just inserted.
      owner_id: db
        .selectFrom('new_person')
        .select('id')
    })
    .returning('id')
  )
  .selectFrom(['new_person', 'new_pet'])
  .select([
    'new_person.id as person_id',
    'new_pet.id as pet_id'
  ])
  .execute()
```

The CTE name can optionally specify column names in addition to
a name. In that case Kysely requires the expression to retun
rows with the same columns.

```ts
await db
  .with('jennifers(id, age)', (db) => db
    .selectFrom('person')
    .where('first_name', '=', 'Jennifer')
    // This is ok since we return columns with the same
    // names as specified by `jennifers(id, age)`.
    .select(['id', 'age'])
  )
  .selectFrom('jennifers')
  .selectAll()
  .execute()
```

The first argument can also be a callback. The callback is passed
a `CTEBuilder` instance that can be used to configure the CTE:

```ts
await db
  .with(
    (cte) => cte('jennifers').materialized(),
    (db) => db
      .selectFrom('person')
      .where('first_name', '=', 'Jennifer')
      .select(['id', 'age'])
  )
  .selectFrom('jennifers')
  .selectAll()
  .execute()
```

#### Type Parameters

• **N** *extends* `string`

• **E** *extends* `CommonTableExpression`\<`T`, `N`\>

#### Parameters

• **nameOrBuilder**: `N` \| `CTEBuilderCallback`\<`N`\>

• **expression**: `E`

#### Returns

`QueryCreatorWithCommonTableExpression`\<`T`, `N`, `E`\>

#### Inherited from

`Kysely.with`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:474

***

### withoutPlugins()

> **withoutPlugins**(): `Kysely`\<`T`\>

Returns a copy of this Kysely instance without any plugins.

#### Returns

`Kysely`\<`T`\>

#### Inherited from

`Kysely.withoutPlugins`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:196

***

### withPlugin()

> **withPlugin**(`plugin`): `Kysely`\<`T`\>

Returns a copy of this Kysely instance with the given plugin installed.

#### Parameters

• **plugin**: `KyselyPlugin`

#### Returns

`Kysely`\<`T`\>

#### Inherited from

`Kysely.withPlugin`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:192

***

### withRecursive()

> **withRecursive**\<`N`, `E`\>(`nameOrBuilder`, `expression`): `QueryCreatorWithCommonTableExpression`\<`T`, `N`, `E`\>

Creates a recursive `with` query (Common Table Expression).

Note that recursiveness is a property of the whole `with` statement.
You cannot have recursive and non-recursive CTEs in a same `with` statement.
Therefore the recursiveness is determined by the **first** `with` or
`withRecusive` call you make.

See the [with](/official/reference/kysely/classes/KyselyService.md#with) method for examples and more documentation.

#### Type Parameters

• **N** *extends* `string`

• **E** *extends* `RecursiveCommonTableExpression`\<`T`, `N`\>

#### Parameters

• **nameOrBuilder**: `N` \| `CTEBuilderCallback`\<`N`\>

• **expression**: `E`

#### Returns

`QueryCreatorWithCommonTableExpression`\<`T`, `N`, `E`\>

#### Inherited from

`Kysely.withRecursive`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/query-creator.d.ts:485

***

### withSchema()

> **withSchema**(`schema`): `Kysely`\<`T`\>

#### Parameters

• **schema**: `string`

#### Returns

`Kysely`\<`T`\>

#### Inherited from

`Kysely.withSchema`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:200

***

### withTables()

> **withTables**\<`T`\>(): `Kysely`\<`DrainOuterGeneric`\<`T` & `T`\>\>

Returns a copy of this Kysely instance with tables added to its
database type.

This method only modifies the types and doesn't affect any of the
executed queries in any way.

### Examples

The following example adds and uses a temporary table:

#### Type Parameters

• **T** *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`Kysely`\<`DrainOuterGeneric`\<`T` & `T`\>\>

#### Example

```ts
await db.schema
  .createTable('temp_table')
  .temporary()
  .addColumn('some_column', 'integer')
  .execute()

const tempDb = db.withTables<{
  temp_table: {
    some_column: number
  }
}>()

await tempDb
  .insertInto('temp_table')
  .values({ some_column: 100 })
  .execute()
```

#### Inherited from

`Kysely.withTables`

#### Defined in

node\_modules/.pnpm/kysely@0.27.4/node\_modules/kysely/dist/cjs/kysely.d.ts:232
