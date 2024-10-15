[**@hikestack/logger**](/official/reference/logger/index.md) • **Docs**

***

[@hikestack/logger](/official/reference/logger/globals.md) / LoggerService

# Class: LoggerService

## Implements

- [`ILogger`](/official/reference/logger/interfaces/ILogger.md)

## Constructors

### new LoggerService()

> **new LoggerService**(`options`): [`LoggerService`](/official/reference/logger/classes/LoggerService.md)

#### Parameters

• **options**: [`LoggerModuleOptions`](/official/reference/logger/interfaces/LoggerModuleOptions.md)

#### Returns

[`LoggerService`](/official/reference/logger/classes/LoggerService.md)

#### Defined in

[packages/logger/src/logger.service.ts:8](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/logger/src/logger.service.ts#L8)

## Properties

### adapter

> `protected` `readonly` **adapter**: [`ILogger`](/official/reference/logger/interfaces/ILogger.md)

#### Defined in

[packages/logger/src/logger.service.ts:7](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/logger/src/logger.service.ts#L7)

## Methods

### error()

> **error**(`message`, ...`optionalParams`): `void`

Write an 'error' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](/official/reference/logger/interfaces/ILogger.md).[`error`](/official/reference/logger/interfaces/ILogger.md#error)

#### Defined in

[packages/logger/src/logger.service.ts:22](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/logger/src/logger.service.ts#L22)

***

### log()

> **log**(`message`, ...`optionalParams`): `void`

Write a 'log' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](/official/reference/logger/interfaces/ILogger.md).[`log`](/official/reference/logger/interfaces/ILogger.md#log)

#### Defined in

[packages/logger/src/logger.service.ts:18](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/logger/src/logger.service.ts#L18)

***

### warn()

> **warn**(`message`, ...`optionalParams`): `void`

Write a 'warn' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`void`

#### Implementation of

[`ILogger`](/official/reference/logger/interfaces/ILogger.md).[`warn`](/official/reference/logger/interfaces/ILogger.md#warn)

#### Defined in

[packages/logger/src/logger.service.ts:26](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/logger/src/logger.service.ts#L26)
