[**@hikestack/prisma**](/official/reference/prisma/index.md) • **Docs**

***

[@hikestack/prisma](/official/reference/prisma/globals.md) / PrismaModule

# Class: PrismaModule

## Extends

- `ConfigurableModuleClass`

## Constructors

### new PrismaModule()

> **new PrismaModule**(): [`PrismaModule`](/official/reference/prisma/classes/PrismaModule.md)

#### Returns

[`PrismaModule`](/official/reference/prisma/classes/PrismaModule.md)

#### Inherited from

`ConfigurableModuleClass.constructor`

#### Defined in

node\_modules/.pnpm/@nestjs+common@10.4.4\_class-transformer@0.5.1\_class-validator@0.14.1\_reflect-metadata@0.2.2\_rxjs@7.8.1/node\_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12

## Methods

### register()

> `static` **register**(`options`): `DynamicModule`

#### Parameters

• **options**: `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.register`

#### Defined in

[packages/prisma/src/prisma.module.ts:14](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/prisma/src/prisma.module.ts#L14)

***

### registerAsync()

> `static` **registerAsync**(`options`): `DynamicModule`

#### Parameters

• **options**: `ConfigurableModuleAsyncOptions`\<[`PrismaModuleOptions`](/official/reference/prisma/type-aliases/PrismaModuleOptions.md), `"create"`\> & `Partial`\<`object`\>

#### Returns

`DynamicModule`

#### Overrides

`ConfigurableModuleClass.registerAsync`

#### Defined in

[packages/prisma/src/prisma.module.ts:20](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/prisma/src/prisma.module.ts#L20)
