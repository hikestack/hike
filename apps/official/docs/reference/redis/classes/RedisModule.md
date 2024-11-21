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

node\_modules/.pnpm/@nestjs+common@10.4.8\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

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

[packages/redis/src/redis.module.ts:14](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/redis/src/redis.module.ts#L14)

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

[packages/redis/src/redis.module.ts:20](https://github.com/hikestack/hike/blob/c92ba77258ca8fade42047e4fbc66f1760864ed9/packages/redis/src/redis.module.ts#L20)
