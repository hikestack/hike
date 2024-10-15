[**@hikestack/drizzle**](/official/reference/drizzle/index.md) • **Docs**

***

[@hikestack/drizzle](/official/reference/drizzle/globals.md) / DrizzleService

# Class: DrizzleService\<TClient, TSchema\>

## Type Parameters

• **TClient** *extends* [`DatabaseClient`](/official/reference/drizzle/type-aliases/DatabaseClient.md) = `"mysql2"`

• **TSchema** *extends* [`DatabaseConnectionOptions`](/official/reference/drizzle/type-aliases/DatabaseConnectionOptions.md) = `any`

## Implements

- `OnModuleInit`

## Constructors

### new DrizzleService()

> **new DrizzleService**\<`TClient`, `TSchema`\>(`options`): [`DrizzleService`](/official/reference/drizzle/classes/DrizzleService.md)\<`TClient`, `TSchema`\>

#### Parameters

• **options**: [`DrizzleModuleOptions`](/official/reference/drizzle/interfaces/DrizzleModuleOptions.md)

#### Returns

[`DrizzleService`](/official/reference/drizzle/classes/DrizzleService.md)\<`TClient`, `TSchema`\>

#### Defined in

[packages/drizzle/src/drizzle.service.ts:18](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/drizzle/src/drizzle.service.ts#L18)

## Accessors

### db

> `get` **db**(): `any`

#### Returns

`any`

#### Defined in

[packages/drizzle/src/drizzle.service.ts:31](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/drizzle/src/drizzle.service.ts#L31)

## Methods

### onModuleInit()

> **onModuleInit**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OnModuleInit.onModuleInit`

#### Defined in

[packages/drizzle/src/drizzle.service.ts:23](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/drizzle/src/drizzle.service.ts#L23)
