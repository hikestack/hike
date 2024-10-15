[**@hikestack/redis**](/official/reference/redis/index.md) • **Docs**

***

[@hikestack/redis](/official/reference/redis/globals.md) / RedisModule

# Class: RedisModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new RedisModule()

> **new RedisModule**(): [`RedisModule`](/official/reference/redis/classes/RedisModule.md)

#### Returns

[`RedisModule`](/official/reference/redis/classes/RedisModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: [`RedisModuleOptions`](/official/reference/redis/interfaces/RedisModuleOptions.md) & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/redis/src/redis.module.ts:14](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/redis/src/redis.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`RedisModuleOptions`](/official/reference/redis/interfaces/RedisModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/redis/src/redis.module.ts:20](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/redis/src/redis.module.ts#L20)
