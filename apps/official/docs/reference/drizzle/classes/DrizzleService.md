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

[packages/drizzle/src/drizzle.service.ts:19](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/drizzle/src/drizzle.service.ts#L19)

## Accessors

### db

> `get` **db**(): `DetermineClient`\<`TClient`, `TSchema`\>

#### Returns

`DetermineClient`\<`TClient`, `TSchema`\>

#### Defined in

[packages/drizzle/src/drizzle.service.ts:33](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/drizzle/src/drizzle.service.ts#L33)

## Methods

### onModuleInit()

> **onModuleInit**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OnModuleInit.onModuleInit`

#### Defined in

[packages/drizzle/src/drizzle.service.ts:24](https://github.com/hikestack/hike/blob/2d4ca98e0cdf7a421674f597d4960cda8cd728c8/packages/drizzle/src/drizzle.service.ts#L24)
