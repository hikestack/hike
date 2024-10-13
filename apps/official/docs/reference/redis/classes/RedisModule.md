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

node\_modules/.pnpm/@nestjs+common@10.4.1\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

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

[packages/redis/src/redis.module.ts:14](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/redis/src/redis.module.ts#L14)

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

[packages/redis/src/redis.module.ts:20](https://github.com/hikestack/hike/blob/25d344bbdfe0453d4900cd57dd6b39277250a015/packages/redis/src/redis.module.ts#L20)
