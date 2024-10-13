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

[packages/logger/src/adapters/winston/winston.adapter.ts:8](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/logger/src/adapters/winston/winston.adapter.ts#L8)

## Properties

### logger

> `protected` `readonly` **logger**: `Logger`

#### Defined in

[packages/logger/src/adapters/winston/winston.adapter.ts:6](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/logger/src/adapters/winston/winston.adapter.ts#L6)

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

[packages/logger/src/adapters/winston/winston.adapter.ts:16](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/logger/src/adapters/winston/winston.adapter.ts#L16)

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

[packages/logger/src/adapters/winston/winston.adapter.ts:12](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/logger/src/adapters/winston/winston.adapter.ts#L12)

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

[packages/logger/src/adapters/winston/winston.adapter.ts:20](https://github.com/hikestack/hike/blob/93c768ff8bda0e1d030b69f51dc73398023ff386/packages/logger/src/adapters/winston/winston.adapter.ts#L20)
