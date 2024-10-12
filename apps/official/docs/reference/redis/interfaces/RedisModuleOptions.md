[**@hikestack/redis**](/official/reference/redis/index.md) • **Docs**

***

[@hikestack/redis](/official/reference/redis/globals.md) / RedisModuleOptions

# Interface: RedisModuleOptions

## Extends

- `RedisOptions`

## Properties

### autoPipeliningIgnoredCommands?

> `optional` **autoPipeliningIgnoredCommands**: `string`[]

#### Default

```ts
[]
```

#### Inherited from

`RedisOptions.autoPipeliningIgnoredCommands`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:132

***

### autoResendUnfulfilledCommands?

> `optional` **autoResendUnfulfilledCommands**: `boolean`

Whether or not to resend unfulfilled commands on reconnect.
Unfulfilled commands are most likely to be blocking commands such as `brpop` or `blpop`.

#### Default

```ts
true
```

#### Inherited from

`RedisOptions.autoResendUnfulfilledCommands`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:65

***

### autoResubscribe?

> `optional` **autoResubscribe**: `boolean`

When the client reconnects, channels subscribed in the previous connection will be
resubscribed automatically if `autoResubscribe` is `true`.

#### Default

```ts
true
```

#### Inherited from

`RedisOptions.autoResubscribe`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:59

***

### commandQueue?

> `optional` **commandQueue**: `boolean`

#### Inherited from

`RedisOptions.commandQueue`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:134

***

### commandTimeout?

> `optional` **commandTimeout**: `number`

If a command does not return a reply within a set number of milliseconds,
a "Command timed out" error will be thrown.

#### Inherited from

`RedisOptions.commandTimeout`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:13

***

### connectionName?

> `optional` **connectionName**: `string`

Set the name of the connection to make it easier to identity the connection
in client list.

#### Link

https://redis.io/commands/client-setname

#### Inherited from

`RedisOptions.connectionName`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:38

***

### Connector?

> `optional` **Connector**: `ConnectorConstructor`

#### Inherited from

`RedisOptions.Connector`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:7

***

### connectTimeout?

> `optional` **connectTimeout**: `number`

How long the client will wait before killing a socket due to inactivity during initial connection.

#### Default

```ts
10000
```

#### Inherited from

`RedisOptions.connectTimeout`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:102

***

### db?

> `optional` **db**: `number`

Database index to use.

#### Default

```ts
0
```

#### Inherited from

`RedisOptions.db`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:53

***

### disconnectTimeout?

> `optional` **disconnectTimeout**: `number`

#### Inherited from

`RedisOptions.disconnectTimeout`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:41

***

### enableAutoPipelining?

> `optional` **enableAutoPipelining**: `boolean`

#### Default

```ts
false
```

#### Inherited from

`RedisOptions.enableAutoPipelining`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:128

***

### enableOfflineQueue?

> `optional` **enableOfflineQueue**: `boolean`

By default, if the connection to Redis server has not been established, commands are added to a queue
and are executed once the connection is "ready" (when `enableReadyCheck` is true, "ready" means
the Redis server has loaded the database from disk, otherwise means the connection to the Redis
server has been established). If this option is false, when execute the command when the connection
isn't ready, an error will be returned.

#### Default

```ts
true
```

#### Inherited from

`RedisOptions.enableOfflineQueue`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:145

***

### enableReadyCheck?

> `optional` **enableReadyCheck**: `boolean`

The client will sent an INFO command to check whether the server is still loading data from the disk (
which happens when the server is just launched) when the connection is established, and only wait until
the loading process is finished before emitting the `ready` event.

#### Default

```ts
true
```

#### Inherited from

`RedisOptions.enableReadyCheck`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:153

***

### enableTLSForSentinelMode?

> `optional` **enableTLSForSentinelMode**: `boolean`

#### Inherited from

`RedisOptions.enableTLSForSentinelMode`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:43

***

### failoverDetector?

> `optional` **failoverDetector**: `boolean`

#### Inherited from

`RedisOptions.failoverDetector`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:51

***

### family?

> `optional` **family**: `number`

#### Inherited from

`RedisOptions.family`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/net.d.ts:50

***

### host?

> `optional` **host**: `string`

#### Inherited from

`RedisOptions.host`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/net.d.ts:46

***

### keepAlive?

> `optional` **keepAlive**: `number`

Enable/disable keep-alive functionality.

#### Link

https://nodejs.org/api/net.html#socketsetkeepaliveenable-initialdelay

#### Default

```ts
0
```

#### Inherited from

`RedisOptions.keepAlive`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:26

***

### keyPrefix?

> `optional` **keyPrefix**: `string`

#### Inherited from

`RedisOptions.keyPrefix`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/utils/Commander.d.ts:5

***

### lazyConnect?

> `optional` **lazyConnect**: `boolean`

When a Redis instance is initialized, a connection to the server is immediately established. Set this to
true will delay the connection to the server until the first command is sent or `redis.connect()` is called
explicitly.

#### Default

```ts
false
```

#### Inherited from

`RedisOptions.lazyConnect`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:161

***

### maxLoadingRetryTime?

> `optional` **maxLoadingRetryTime**: `number`

#### Default

```ts
10000
```

#### Inherited from

`RedisOptions.maxLoadingRetryTime`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:124

***

### maxRetriesPerRequest?

> `optional` **maxRetriesPerRequest**: `number`

The commands that don't get a reply due to the connection to the server is lost are
put into a queue and will be resent on reconnect (if allowed by the `retryStrategy` option).
This option is used to configure how many reconnection attempts should be allowed before
the queue is flushed with a `MaxRetriesPerRequestError` error.
Set this options to `null` instead of a number to let commands wait forever
until the connection is alive again.

#### Default

```ts
20
```

#### Inherited from

`RedisOptions.maxRetriesPerRequest`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:120

***

### monitor?

> `optional` **monitor**: `boolean`

This option is used internally when you call `redis.monitor()` to tell Redis
to enter the monitor mode when the connection is established.

#### Default

```ts
false
```

#### Inherited from

`RedisOptions.monitor`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:109

***

### name?

> `optional` **name**: `string`

Master group name of the Sentinel

#### Inherited from

`RedisOptions.name`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:28

***

### natMap?

> `optional` **natMap**: `NatMap`

#### Inherited from

`RedisOptions.natMap`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:45

***

### noDelay?

> `optional` **noDelay**: `boolean`

Enable/disable the use of Nagle's algorithm.

#### Link

https://nodejs.org/api/net.html#socketsetnodelaynodelay

#### Default

```ts
true
```

#### Inherited from

`RedisOptions.noDelay`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:32

***

### offlineQueue?

> `optional` **offlineQueue**: `boolean`

#### Inherited from

`RedisOptions.offlineQueue`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:133

***

### password?

> `optional` **password**: `string`

If set, client will send AUTH command with the value of this option when connected.

#### Inherited from

`RedisOptions.password`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:47

***

### path?

> `optional` **path**: `string`

#### Inherited from

`RedisOptions.path`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/net.d.ts:55

***

### port?

> `optional` **port**: `number`

#### Inherited from

`RedisOptions.port`

#### Defined in

node\_modules/.pnpm/@types+node@12.20.55/node\_modules/@types/node/net.d.ts:45

***

### preferredSlaves?

> `optional` **preferredSlaves**: `PreferredSlaves`

#### Inherited from

`RedisOptions.preferredSlaves`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:39

***

### readOnly?

> `optional` **readOnly**: `boolean`

#### Default

```ts
false
```

#### Inherited from

`RedisOptions.readOnly`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:91

***

### reconnectOnError?

> `optional` **reconnectOnError**: `ReconnectOnError`

Whether or not to reconnect on certain Redis errors.
This options by default is `null`, which means it should never reconnect on Redis errors.
You can pass a function that accepts an Redis error, and returns:
- `true` or `1` to trigger a reconnection.
- `false` or `0` to not reconnect.
- `2` to reconnect and resend the failed command (who triggered the error) after reconnection.

#### Example

```js
const redis = new Redis({
  reconnectOnError(err) {
    const targetError = "READONLY";
    if (err.message.includes(targetError)) {
      // Only reconnect when the error contains "READONLY"
      return true; // or `return 1;`
    }
  },
});
```

#### Default

```ts
null
```

#### Inherited from

`RedisOptions.reconnectOnError`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:87

***

### retryStrategy()?

> `optional` **retryStrategy**: (`times`) => `number` \| `void`

#### Parameters

• **times**: `number`

#### Returns

`number` \| `void`

#### Inherited from

`RedisOptions.retryStrategy`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:8

***

### role?

> `optional` **role**: `"master"` \| `"slave"`

#### Default

```ts
"master"
```

#### Inherited from

`RedisOptions.role`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:32

***

### scripts?

> `optional` **scripts**: `Record`\<`string`, `object`\>

#### Default

```ts
undefined
```

#### Inherited from

`RedisOptions.scripts`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:165

***

### sentinelCommandTimeout?

> `optional` **sentinelCommandTimeout**: `number`

#### Inherited from

`RedisOptions.sentinelCommandTimeout`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:42

***

### sentinelMaxConnections?

> `optional` **sentinelMaxConnections**: `number`

#### Default

```ts
10
```

#### Inherited from

`RedisOptions.sentinelMaxConnections`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:50

***

### sentinelPassword?

> `optional` **sentinelPassword**: `string`

#### Inherited from

`RedisOptions.sentinelPassword`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:35

***

### sentinelReconnectStrategy()?

> `optional` **sentinelReconnectStrategy**: (`retryAttempts`) => `number` \| `void`

#### Parameters

• **retryAttempts**: `number`

#### Returns

`number` \| `void`

#### Inherited from

`RedisOptions.sentinelReconnectStrategy`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:38

***

### sentinelRetryStrategy()?

> `optional` **sentinelRetryStrategy**: (`retryAttempts`) => `number` \| `void`

#### Parameters

• **retryAttempts**: `number`

#### Returns

`number` \| `void`

#### Inherited from

`RedisOptions.sentinelRetryStrategy`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:37

***

### sentinels?

> `optional` **sentinels**: `Partial`\<`SentinelAddress`\>[]

#### Inherited from

`RedisOptions.sentinels`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:36

***

### sentinelTLS?

> `optional` **sentinelTLS**: `ConnectionOptions`

#### Inherited from

`RedisOptions.sentinelTLS`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:44

***

### sentinelUsername?

> `optional` **sentinelUsername**: `string`

#### Inherited from

`RedisOptions.sentinelUsername`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:34

***

### showFriendlyErrorStack?

> `optional` **showFriendlyErrorStack**: `boolean`

#### Inherited from

`RedisOptions.showFriendlyErrorStack`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/utils/Commander.d.ts:6

***

### socketTimeout?

> `optional` **socketTimeout**: `number`

If the socket does not receive data within a set number of milliseconds:
1. the socket is considered "dead" and will be destroyed
2. the client will reject any running commands (altought they might have been processed by the server)
3. the reconnect strategy will kick in (depending on the configuration)

#### Inherited from

`RedisOptions.socketTimeout`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:20

***

### stringNumbers?

> `optional` **stringNumbers**: `boolean`

When enabled, numbers returned by Redis will be converted to JavaScript strings instead of numbers.
This is necessary if you want to handle big numbers (above `Number.MAX_SAFE_INTEGER` === 2^53).

#### Default

```ts
false
```

#### Inherited from

`RedisOptions.stringNumbers`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:97

***

### tls?

> `optional` **tls**: `ConnectionOptions`

#### Inherited from

`RedisOptions.tls`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:33

***

### updateSentinels?

> `optional` **updateSentinels**: `boolean`

#### Inherited from

`RedisOptions.updateSentinels`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:46

***

### username?

> `optional` **username**: `string`

If set, client will send AUTH command with the value of this option as the first argument when connected.
This is supported since Redis 6.

#### Inherited from

`RedisOptions.username`

#### Defined in

node\_modules/.pnpm/ioredis@5.4.1/node\_modules/ioredis/built/redis/RedisOptions.d.ts:43
