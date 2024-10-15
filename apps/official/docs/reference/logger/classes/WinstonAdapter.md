[**@hikestack/logger**](/official/reference/logger/index.md) • **Docs**

***

[@hikestack/logger](/official/reference/logger/globals.md) / WinstonAdapter

# Class: WinstonAdapter

## Implements

- [`ILogger`](/official/reference/logger/interfaces/ILogger.md)

## Constructors

### new WinstonAdapter()

> **new WinstonAdapter**(`options`): [`WinstonAdapter`](/official/reference/logger/classes/WinstonAdapter.md)

#### Parameters

• **options**: `LoggerOptions`

#### Returns

[`WinstonAdapter`](/official/reference/logger/classes/WinstonAdapter.md)

#### Defined in

[packages/logger/src/adapters/winston/winston.adapter.ts:8](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/logger/src/adapters/winston/winston.adapter.ts#L8)

## Properties

### logger

> `protected` `readonly` **logger**: `Logger`

#### Defined in

[packages/logger/src/adapters/winston/winston.adapter.ts:6](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/logger/src/adapters/winston/winston.adapter.ts#L6)

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

[packages/logger/src/adapters/winston/winston.adapter.ts:16](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/logger/src/adapters/winston/winston.adapter.ts#L16)

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

[packages/logger/src/adapters/winston/winston.adapter.ts:12](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/logger/src/adapters/winston/winston.adapter.ts#L12)

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

[packages/logger/src/adapters/winston/winston.adapter.ts:20](https://github.com/hikestack/hike/blob/110006a71b16d35b8305bd3bea8f80d291c9c609/packages/logger/src/adapters/winston/winston.adapter.ts#L20)
