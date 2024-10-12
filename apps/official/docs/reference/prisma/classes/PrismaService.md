[**@hikestack/prisma**](/official/reference/prisma/index.md) • **Docs**

***

[@hikestack/prisma](/official/reference/prisma/globals.md) / PrismaService

# Class: PrismaService

## Extends

- `PrismaClient`

## Implements

- `OnModuleInit`

## Constructors

### new PrismaService()

> **new PrismaService**(`options`): [`PrismaService`](/official/reference/prisma/classes/PrismaService.md)

#### Parameters

• **options**: [`PrismaModuleOptions`](/official/reference/prisma/interfaces/PrismaModuleOptions.md)

#### Returns

[`PrismaService`](/official/reference/prisma/classes/PrismaService.md)

#### Overrides

`PrismaClient.constructor`

#### Defined in

[packages/prisma/src/prisma.service.ts:8](https://github.com/hikestack/hike/blob/928de04fa91eff5cc11ce6874f171775c7eb9f5a/packages/prisma/src/prisma.service.ts#L8)

## Properties

### $extends

> **$extends**: `ExtendsHook`\<`"extends"`, `TypeMapCb`, `DefaultArgs`, `TypeMap`\<`InternalArgs` & `DefaultArgs`, `PrismaClientOptions`\>, `object`\>

#### Inherited from

`PrismaClient.$extends`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:168

## Accessors

### plan

> `get` **plan**(): `PlanDelegate`\<`ExtArgs`\>

`prisma.plan`: Exposes CRUD operations for the **Plan** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Plans
 * const plans = await prisma.plan.findMany()
 * ```

#### Returns

`PlanDelegate`\<`ExtArgs`\>

#### Inherited from

`PrismaClient.plan`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:228

***

### project

> `get` **project**(): `ProjectDelegate`\<`ExtArgs`\>

`prisma.project`: Exposes CRUD operations for the **Project** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```

#### Returns

`ProjectDelegate`\<`ExtArgs`\>

#### Inherited from

`PrismaClient.project`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:218

***

### role

> `get` **role**(): `RoleDelegate`\<`ExtArgs`\>

`prisma.role`: Exposes CRUD operations for the **Role** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```

#### Returns

`RoleDelegate`\<`ExtArgs`\>

#### Inherited from

`PrismaClient.role`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:188

***

### tenant

> `get` **tenant**(): `TenantDelegate`\<`ExtArgs`\>

`prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```

#### Returns

`TenantDelegate`\<`ExtArgs`\>

#### Inherited from

`PrismaClient.tenant`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:178

***

### user

> `get` **user**(): `UserDelegate`\<`ExtArgs`\>

`prisma.user`: Exposes CRUD operations for the **User** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```

#### Returns

`UserDelegate`\<`ExtArgs`\>

#### Inherited from

`PrismaClient.user`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:198

***

### userOAuthProfile

> `get` **userOAuthProfile**(): `UserOAuthProfileDelegate`\<`ExtArgs`\>

`prisma.userOAuthProfile`: Exposes CRUD operations for the **UserOAuthProfile** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more UserOAuthProfiles
 * const userOAuthProfiles = await prisma.userOAuthProfile.findMany()
 * ```

#### Returns

`UserOAuthProfileDelegate`\<`ExtArgs`\>

#### Inherited from

`PrismaClient.userOAuthProfile`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:208

## Methods

### $connect()

> **$connect**(): `Promise`\<`void`\>

Connect with the database

#### Returns

`Promise`\<`void`\>

#### Inherited from

`PrismaClient.$connect`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:89

***

### $disconnect()

> **$disconnect**(): `Promise`\<`void`\>

Disconnect from the database

#### Returns

`Promise`\<`void`\>

#### Inherited from

`PrismaClient.$disconnect`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:94

***

### $executeRaw()

> **$executeRaw**\<`T`\>(`query`, ...`values`): `PrismaPromise`\<`number`\>

Executes a prepared raw query and returns the number of affected rows.

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **query**: `TemplateStringsArray` \| `Sql`

• ...**values**: `any`[]

#### Returns

`PrismaPromise`\<`number`\>

#### Example

```
const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
```

Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).

#### Inherited from

`PrismaClient.$executeRaw`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:112

***

### $executeRawUnsafe()

> **$executeRawUnsafe**\<`T`\>(`query`, ...`values`): `PrismaPromise`\<`number`\>

Executes a raw query and returns the number of affected rows.
Susceptible to SQL injections, see documentation.

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **query**: `string`

• ...**values**: `any`[]

#### Returns

`PrismaPromise`\<`number`\>

#### Example

```
const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
```

Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).

#### Inherited from

`PrismaClient.$executeRawUnsafe`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:124

***

### $on()

> **$on**\<`V`\>(`eventType`, `callback`): `void`

#### Type Parameters

• **V** *extends* `never`

#### Parameters

• **eventType**: `V`

• **callback**

#### Returns

`void`

#### Inherited from

`PrismaClient.$on`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:84

***

### $queryRaw()

> **$queryRaw**\<`T`\>(`query`, ...`values`): `PrismaPromise`\<`T`\>

Performs a prepared raw query and returns the `SELECT` data.

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **query**: `TemplateStringsArray` \| `Sql`

• ...**values**: `any`[]

#### Returns

`PrismaPromise`\<`T`\>

#### Example

```
const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
```

Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).

#### Inherited from

`PrismaClient.$queryRaw`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:135

***

### $queryRawUnsafe()

> **$queryRawUnsafe**\<`T`\>(`query`, ...`values`): `PrismaPromise`\<`T`\>

Performs a raw query and returns the `SELECT` data.
Susceptible to SQL injections, see documentation.

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **query**: `string`

• ...**values**: `any`[]

#### Returns

`PrismaPromise`\<`T`\>

#### Example

```
const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
```

Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).

#### Inherited from

`PrismaClient.$queryRawUnsafe`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:147

***

### $transaction()

#### $transaction(arg, options)

> **$transaction**\<`P`\>(`arg`, `options`?): `Promise`\<`UnwrapTuple`\<`P`\>\>

Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.

##### Type Parameters

• **P** *extends* `PrismaPromise`\<`any`\>[]

##### Parameters

• **arg**: [`...P[]`]

• **options?**

• **options.isolationLevel?**: `TransactionIsolationLevel`

##### Returns

`Promise`\<`UnwrapTuple`\<`P`\>\>

##### Example

```
const [george, bob, alice] = await prisma.$transaction([
  prisma.user.create({ data: { name: 'George' } }),
  prisma.user.create({ data: { name: 'Bob' } }),
  prisma.user.create({ data: { name: 'Alice' } }),
])
```

Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).

##### Inherited from

`PrismaClient.$transaction`

##### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:163

#### $transaction(fn, options)

> **$transaction**\<`R`\>(`fn`, `options`?): `Promise`\<`R`\>

##### Type Parameters

• **R**

##### Parameters

• **fn**

• **options?**

• **options.isolationLevel?**: `TransactionIsolationLevel`

• **options.maxWait?**: `number`

• **options.timeout?**: `number`

##### Returns

`Promise`\<`R`\>

##### Inherited from

`PrismaClient.$transaction`

##### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:165

***

### ~~$use()~~

> **$use**(`cb`): `void`

Add a middleware

#### Parameters

• **cb**: `Middleware`\<`any`\>

#### Returns

`void`

#### Deprecated

since 4.16.0. For new code, prefer client extensions instead.

#### See

https://pris.ly/d/extensions

#### Inherited from

`PrismaClient.$use`

#### Defined in

node\_modules/.pnpm/@prisma+client@5.19.0\_prisma@5.19.0/node\_modules/.prisma/client/index.d.ts:101

***

### onModuleInit()

> **onModuleInit**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OnModuleInit.onModuleInit`

#### Defined in

[packages/prisma/src/prisma.service.ts:15](https://github.com/hikestack/hike/blob/928de04fa91eff5cc11ce6874f171775c7eb9f5a/packages/prisma/src/prisma.service.ts#L15)
