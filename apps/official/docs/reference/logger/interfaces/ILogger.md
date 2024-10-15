[**@hikestack/logger**](/official/reference/logger/index.md) • **Docs**

***

[@hikestack/logger](/official/reference/logger/globals.md) / ILogger

# Interface: ILogger

## Extends

- `LoggerService`

## Methods

### debug()?

> `optional` **debug**(`message`, ...`optionalParams`): `any`

Write a 'debug' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`any`

#### Inherited from

`LoggerService.debug`

#### Defined in

node\_modules/@nestjs/common/services/logger.service.d.ts:24

***

### error()

> **error**(`message`, ...`optionalParams`): `any`

Write an 'error' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`any`

#### Inherited from

`LoggerService.error`

#### Defined in

node\_modules/@nestjs/common/services/logger.service.d.ts:16

***

### fatal()?

> `optional` **fatal**(`message`, ...`optionalParams`): `any`

Write a 'fatal' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`any`

#### Inherited from

`LoggerService.fatal`

#### Defined in

node\_modules/@nestjs/common/services/logger.service.d.ts:32

***

### log()

> **log**(`message`, ...`optionalParams`): `any`

Write a 'log' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`any`

#### Inherited from

`LoggerService.log`

#### Defined in

node\_modules/@nestjs/common/services/logger.service.d.ts:12

***

### setLogLevels()?

> `optional` **setLogLevels**(`levels`): `any`

Set log levels.

#### Parameters

• **levels**: `LogLevel`[]

log levels

#### Returns

`any`

#### Inherited from

`LoggerService.setLogLevels`

#### Defined in

node\_modules/@nestjs/common/services/logger.service.d.ts:37

***

### verbose()?

> `optional` **verbose**(`message`, ...`optionalParams`): `any`

Write a 'verbose' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`any`

#### Inherited from

`LoggerService.verbose`

#### Defined in

node\_modules/@nestjs/common/services/logger.service.d.ts:28

***

### warn()

> **warn**(`message`, ...`optionalParams`): `any`

Write a 'warn' level log.

#### Parameters

• **message**: `any`

• ...**optionalParams**: `any`[]

#### Returns

`any`

#### Inherited from

`LoggerService.warn`

#### Defined in

node\_modules/@nestjs/common/services/logger.service.d.ts:20
