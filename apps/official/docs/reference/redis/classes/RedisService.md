[**@hikestack/redis**](/official/reference/redis/index.md) • **Docs**

***

[@hikestack/redis](/official/reference/redis/globals.md) / RedisService

# Class: RedisService

## Extends

- `Redis`

## Constructors

### new RedisService()

> **new RedisService**(`options`): [`RedisService`](/official/reference/redis/classes/RedisService.md)

#### Parameters

• **options**: [`RedisModuleOptions`](/official/reference/redis/interfaces/RedisModuleOptions.md)

#### Returns

[`RedisService`](/official/reference/redis/classes/RedisService.md)

#### Overrides

`Redis.constructor`

#### Defined in

[packages/redis/src/redis.service.ts:8](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/redis/src/redis.service.ts#L8)

## Properties

### options

> `readonly` **options**: [`RedisModuleOptions`](/official/reference/redis/interfaces/RedisModuleOptions.md)

#### Inherited from

`Redis.options`

#### Defined in

[packages/redis/src/redis.service.ts:10](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/redis/src/redis.service.ts#L10)

***

### status

> **status**: `RedisStatus`

#### Inherited from

`Redis.status`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:43

***

### Cluster

> `static` **Cluster**: *typeof* `Cluster`

#### Inherited from

`Redis.Cluster`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:31

***

### Command

> `static` **Command**: *typeof* `default`

#### Inherited from

`Redis.Command`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:32

## Accessors

### autoPipelineQueueSize

> `get` **autoPipelineQueueSize**(): `number`

#### Returns

`number`

#### Inherited from

`Redis.autoPipelineQueueSize`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:77

***

### mode

> `get` **mode**(): `"normal"` \| `"subscriber"` \| `"monitor"`

Mode of the connection.

One of `"normal"`, `"subscriber"`, or `"monitor"`. When the connection is
not in `"normal"` mode, certain commands are not allowed.

#### Returns

`"normal"` \| `"subscriber"` \| `"monitor"`

#### Inherited from

`Redis.mode`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:117

## Methods

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

#### Type Parameters

• **K**

#### Parameters

• **error**: `Error`

• **event**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`void`

#### Inherited from

`Redis.[captureRejectionSymbol]`

#### Defined in

node\_modules/@types/node/events.d.ts:136

***

### acl()

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

List the ACL categories or the commands inside a category
- _group_: server
- _complexity_: O(1) since the categories and commands are a fixed set.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"CAT"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:62

#### acl(subcommand, categoryname, callback)

> **acl**(`subcommand`, `categoryname`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CAT"`

• **categoryname**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:63

#### acl(args)

> **acl**(...`args`): `Promise`\<`number`\>

Remove the specified ACL users and the associated rules
- _group_: server
- _complexity_: O(1) amortized time considering the typical user.
- _since_: 6.0.0

##### Parameters

• ...**args**: [`"DELUSER"`, ...usernames: (string \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:70

#### acl(args)

> **acl**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`"DELUSER"`, ...usernames: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:75

#### acl(subcommand, username, command, callback)

> **acl**(`subcommand`, `username`, `command`, `callback`?): `Promise`\<`string`\>

Returns whether the user can execute the given command without executing the command.
- _group_: server
- _complexity_: O(1).
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"DRYRUN"`

• **username**: `string` \| `Buffer`

• **command**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:82

#### acl(args)

> **acl**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`"DRYRUN"`, `string` \| `Buffer`, `string` \| `Buffer`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:84

#### acl(args)

> **acl**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`"DRYRUN"`, `string` \| `Buffer`, `string` \| `Buffer`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:98

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`string`\>

Generate a pseudorandom secure password to use for ACL users
- _group_: server
- _complexity_: O(1)
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"GENPASS"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:116

#### acl(subcommand, bits, callback)

> **acl**(`subcommand`, `bits`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **subcommand**: `"GENPASS"`

• **bits**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:118

#### acl(subcommand, username, callback)

> **acl**(`subcommand`, `username`, `callback`?): `Promise`\<`string`[]\>

Get the rules for a specific ACL user
- _group_: server
- _complexity_: O(N). Where N is the number of password, command and pattern rules that the user has.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"GETUSER"`

• **username**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:126

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: server
- _complexity_: O(1)
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:134

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`string`[]\>

List the current ACL rules in ACL config file format
- _group_: server
- _complexity_: O(N). Where N is the number of configured users.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"LIST"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:141

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`"OK"`\>

Reload the ACLs from the configured ACL file
- _group_: server
- _complexity_: O(N). Where N is the number of configured users.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"LOAD"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:149

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

List latest events denied because of ACLs in place
- _group_: server
- _complexity_: O(N) with N being the number of entries shown.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"LOG"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:156

#### acl(subcommand, count, callback)

> **acl**(`subcommand`, `count`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"LOG"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:157

#### acl(subcommand, reset, callback)

> **acl**(`subcommand`, `reset`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"LOG"`

• **reset**: `"RESET"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:158

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`"OK"`\>

Save the current ACL rules in the configured ACL file
- _group_: server
- _complexity_: O(N). Where N is the number of configured users.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"SAVE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:165

#### acl(subcommand, username, callback)

> **acl**(`subcommand`, `username`, `callback`?): `Promise`\<`"OK"`\>

Modify or create the rules for a specific ACL user
- _group_: server
- _complexity_: O(N). Where N is the number of rules provided.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"SETUSER"`

• **username**: `string` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:172

#### acl(args)

> **acl**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`"SETUSER"`, `string` \| `Buffer`, ...rules: (string \| Buffer)\[\], `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:173

#### acl(args)

> **acl**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`"SETUSER"`, `string` \| `Buffer`, ...rules: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:179

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`string`[]\>

List the username of all the configured ACL rules
- _group_: server
- _complexity_: O(N). Where N is the number of configured users.
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"USERS"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:190

#### acl(subcommand, callback)

> **acl**(`subcommand`, `callback`?): `Promise`\<`string`\>

Return the name of the user associated to the current connection
- _group_: server
- _complexity_: O(1)
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"WHOAMI"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.acl`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:198

***

### aclBuffer()

#### aclBuffer(subcommand, username, command, callback)

> **aclBuffer**(`subcommand`, `username`, `command`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"DRYRUN"`

• **username**: `string` \| `Buffer`

• **command**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:83

#### aclBuffer(args)

> **aclBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`"DRYRUN"`, `string` \| `Buffer`, `string` \| `Buffer`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:91

#### aclBuffer(args)

> **aclBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`"DRYRUN"`, `string` \| `Buffer`, `string` \| `Buffer`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:104

#### aclBuffer(subcommand, callback)

> **aclBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"GENPASS"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:117

#### aclBuffer(subcommand, bits, callback)

> **aclBuffer**(`subcommand`, `bits`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"GENPASS"`

• **bits**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:119

#### aclBuffer(subcommand, username, callback)

> **aclBuffer**(`subcommand`, `username`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **subcommand**: `"GETUSER"`

• **username**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:127

#### aclBuffer(subcommand, callback)

> **aclBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **subcommand**: `"LIST"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:142

#### aclBuffer(subcommand, callback)

> **aclBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **subcommand**: `"USERS"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:191

#### aclBuffer(subcommand, callback)

> **aclBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"WHOAMI"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.aclBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:199

***

### addBuiltinCommand()

> **addBuiltinCommand**(`commandName`): `void`

Create add builtin command

#### Parameters

• **commandName**: `string`

#### Returns

`void`

#### Inherited from

`Redis.addBuiltinCommand`

#### Defined in

node\_modules/ioredis/built/utils/Commander.d.ts:34

***

### addListener()

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`Redis.addListener`

#### Defined in

node\_modules/@types/node/events.d.ts:597

***

### append()

> **append**(`key`, `value`, `callback`?): `Promise`\<`number`\>

Append a value to a key
- _group_: string
- _complexity_: O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.append`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:206

***

### asking()

> **asking**(`callback`?): `Promise`\<`"OK"`\>

Sent by cluster clients after an -ASK redirect
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.asking`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:213

***

### auth()

#### auth(password, callback)

> **auth**(`password`, `callback`?): `Promise`\<`"OK"`\>

Authenticate to the server
- _group_: connection
- _complexity_: O(N) where N is the number of passwords defined for the user
- _since_: 1.0.0

##### Parameters

• **password**: `string` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.auth`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:220

#### auth(username, password, callback)

> **auth**(`username`, `password`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **username**: `string` \| `Buffer`

• **password**: `string` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.auth`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:221

***

### bgrewriteaof()

> **bgrewriteaof**(`callback`?): `Promise`\<`string`\>

Asynchronously rewrite the append-only file
- _group_: server
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.bgrewriteaof`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:228

***

### bgrewriteaofBuffer()

> **bgrewriteaofBuffer**(`callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.bgrewriteaofBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:229

***

### bgsave()

#### bgsave(callback)

> **bgsave**(`callback`?): `Promise`\<`"OK"`\>

Asynchronously save the dataset to disk
- _group_: server
- _complexity_: O(1)
- _since_: 1.0.0

##### Parameters

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.bgsave`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:236

#### bgsave(schedule, callback)

> **bgsave**(`schedule`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **schedule**: `"SCHEDULE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.bgsave`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:237

***

### bitcount()

#### bitcount(key, callback)

> **bitcount**(`key`, `callback`?): `Promise`\<`number`\>

Count set bits in a string
- _group_: bitmap
- _complexity_: O(N)
- _since_: 2.6.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:244

#### bitcount(key, start, end, callback)

> **bitcount**(`key`, `start`, `end`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:245

#### bitcount(key, start, end, byte, callback)

> **bitcount**(`key`, `start`, `end`, `byte`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **byte**: `"BYTE"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:246

#### bitcount(key, start, end, bit, callback)

> **bitcount**(`key`, `start`, `end`, `bit`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **bit**: `"BIT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:247

***

### bitfield()

#### bitfield(key, encodingOffsetToken, encoding, offset, callback)

> **bitfield**(`key`, `encodingOffsetToken`, `encoding`, `offset`, `callback`?): `Promise`\<`unknown`\>

Perform arbitrary bitfield integer operations on strings
- _group_: bitmap
- _complexity_: O(1) for each subcommand specified
- _since_: 3.2.0

##### Parameters

• **key**: `RedisKey`

• **encodingOffsetToken**: `"GET"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:254

#### bitfield(key, encodingOffsetValueToken, encoding, offset, value, callback)

> **bitfield**(`key`, `encodingOffsetValueToken`, `encoding`, `offset`, `value`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **encodingOffsetValueToken**: `"SET"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **value**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:255

#### bitfield(key, encodingOffsetIncrementToken, encoding, offset, increment, callback)

> **bitfield**(`key`, `encodingOffsetIncrementToken`, `encoding`, `offset`, `increment`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **encodingOffsetIncrementToken**: `"INCRBY"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:256

#### bitfield(key, overflow, wrap, encodingOffsetValueToken, encoding, offset, value, callback)

> **bitfield**(`key`, `overflow`, `wrap`, `encodingOffsetValueToken`, `encoding`, `offset`, `value`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **overflow**: `"OVERFLOW"`

• **wrap**: `"WRAP"`

• **encodingOffsetValueToken**: `"SET"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **value**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:257

#### bitfield(key, overflow, wrap, encodingOffsetIncrementToken, encoding, offset, increment, callback)

> **bitfield**(`key`, `overflow`, `wrap`, `encodingOffsetIncrementToken`, `encoding`, `offset`, `increment`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **overflow**: `"OVERFLOW"`

• **wrap**: `"WRAP"`

• **encodingOffsetIncrementToken**: `"INCRBY"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:258

#### bitfield(key, overflow, sat, encodingOffsetValueToken, encoding, offset, value, callback)

> **bitfield**(`key`, `overflow`, `sat`, `encodingOffsetValueToken`, `encoding`, `offset`, `value`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **overflow**: `"OVERFLOW"`

• **sat**: `"SAT"`

• **encodingOffsetValueToken**: `"SET"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **value**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:259

#### bitfield(key, overflow, sat, encodingOffsetIncrementToken, encoding, offset, increment, callback)

> **bitfield**(`key`, `overflow`, `sat`, `encodingOffsetIncrementToken`, `encoding`, `offset`, `increment`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **overflow**: `"OVERFLOW"`

• **sat**: `"SAT"`

• **encodingOffsetIncrementToken**: `"INCRBY"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:260

#### bitfield(key, overflow, fail, encodingOffsetValueToken, encoding, offset, value, callback)

> **bitfield**(`key`, `overflow`, `fail`, `encodingOffsetValueToken`, `encoding`, `offset`, `value`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **overflow**: `"OVERFLOW"`

• **fail**: `"FAIL"`

• **encodingOffsetValueToken**: `"SET"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **value**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:261

#### bitfield(key, overflow, fail, encodingOffsetIncrementToken, encoding, offset, increment, callback)

> **bitfield**(`key`, `overflow`, `fail`, `encodingOffsetIncrementToken`, `encoding`, `offset`, `increment`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **overflow**: `"OVERFLOW"`

• **fail**: `"FAIL"`

• **encodingOffsetIncrementToken**: `"INCRBY"`

• **encoding**: `string` \| `Buffer`

• **offset**: `string` \| `number`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bitfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:262

***

### bitfield\_ro()

#### bitfield\_ro(args)

> **bitfield\_ro**(...`args`): `Promise`\<`unknown`[]\>

Perform arbitrary bitfield integer operations on strings. Read-only variant of BITFIELD
- _group_: bitmap
- _complexity_: O(1) for each subcommand specified
- _since_: 6.0.0

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, ...encodingOffsets: (string \| number \| Buffer)\[\], `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.bitfield_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:269

#### bitfield\_ro(args)

> **bitfield\_ro**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, ...encodingOffsets: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.bitfield_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:275

***

### bitop()

#### bitop(args)

> **bitop**(...`args`): `Promise`\<`number`\>

Perform bitwise operations between strings
- _group_: bitmap
- _complexity_: O(N)
- _since_: 2.6.0

##### Parameters

• ...**args**: [`string` \| `Buffer`, `RedisKey`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:286

#### bitop(args)

> **bitop**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `RedisKey`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:292

#### bitop(args)

> **bitop**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `RedisKey`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:298

#### bitop(args)

> **bitop**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `RedisKey`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:303

***

### bitpos()

#### bitpos(key, bit, callback)

> **bitpos**(`key`, `bit`, `callback`?): `Promise`\<`number`\>

Find first bit set or clear in a string
- _group_: bitmap
- _complexity_: O(N)
- _since_: 2.8.7

##### Parameters

• **key**: `RedisKey`

• **bit**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:310

#### bitpos(key, bit, start, callback)

> **bitpos**(`key`, `bit`, `start`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **bit**: `string` \| `number`

• **start**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:311

#### bitpos(key, bit, start, end, callback)

> **bitpos**(`key`, `bit`, `start`, `end`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **bit**: `string` \| `number`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:312

#### bitpos(key, bit, start, end, byte, callback)

> **bitpos**(`key`, `bit`, `start`, `end`, `byte`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **bit**: `string` \| `number`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **byte**: `"BYTE"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:313

#### bitpos(key, bit, start, end, bit1, callback)

> **bitpos**(`key`, `bit`, `start`, `end`, `bit1`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **bit**: `string` \| `number`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **bit1**: `"BIT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.bitpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:314

***

### blmove()

#### blmove(source, destination, left, left1, timeout, callback)

> **blmove**(`source`, `destination`, `left`, `left1`, `timeout`, `callback`?): `Promise`\<`string`\>

Pop an element from a list, push it to another list and return it; or block until one is available
- _group_: list
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **left1**: `"LEFT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.blmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:321

#### blmove(source, destination, left, right, timeout, callback)

> **blmove**(`source`, `destination`, `left`, `right`, `timeout`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **right**: `"RIGHT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.blmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:323

#### blmove(source, destination, right, left, timeout, callback)

> **blmove**(`source`, `destination`, `right`, `left`, `timeout`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **left**: `"LEFT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.blmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:325

#### blmove(source, destination, right, right1, timeout, callback)

> **blmove**(`source`, `destination`, `right`, `right1`, `timeout`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **right1**: `"RIGHT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.blmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:327

***

### blmoveBuffer()

#### blmoveBuffer(source, destination, left, left1, timeout, callback)

> **blmoveBuffer**(`source`, `destination`, `left`, `left1`, `timeout`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **left1**: `"LEFT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.blmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:322

#### blmoveBuffer(source, destination, left, right, timeout, callback)

> **blmoveBuffer**(`source`, `destination`, `left`, `right`, `timeout`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **right**: `"RIGHT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.blmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:324

#### blmoveBuffer(source, destination, right, left, timeout, callback)

> **blmoveBuffer**(`source`, `destination`, `right`, `left`, `timeout`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **left**: `"LEFT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.blmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:326

#### blmoveBuffer(source, destination, right, right1, timeout, callback)

> **blmoveBuffer**(`source`, `destination`, `right`, `right1`, `timeout`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **right1**: `"RIGHT"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.blmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:328

***

### blmpop()

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

Pop elements from a list, or block until one is available
- _group_: list
- _complexity_: O(N+M) where N is the number of provided keys and M is the number of elements returned.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:335

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:349

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:363

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:375

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:387

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:405

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:423

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:439

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:455

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:469

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:483

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:495

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:507

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:525

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:543

#### blmpop(args)

> **blmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.blmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:559

***

### blmpopBuffer()

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:342

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:356

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:369

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:381

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:396

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:414

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:431

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:447

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:462

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:476

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:489

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:501

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:516

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:534

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:551

#### blmpopBuffer(args)

> **blmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.blmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:567

***

### blpop()

#### blpop(args)

> **blpop**(...`args`): `Promise`\<[`string`, `string`]\>

Remove and get the first element in a list, or block until one is available
- _group_: list
- _complexity_: O(N) where N is the number of provided keys.
- _since_: 2.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.blpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:581

#### blpop(args)

> **blpop**(...`args`): `Promise`\<[`string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.blpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:591

#### blpop(args)

> **blpop**(...`args`): `Promise`\<[`string`, `string`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.blpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:601

#### blpop(args)

> **blpop**(...`args`): `Promise`\<[`string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.blpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:603

***

### blpopBuffer()

#### blpopBuffer(args)

> **blpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.blpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:586

#### blpopBuffer(args)

> **blpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.blpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:596

#### blpopBuffer(args)

> **blpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.blpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:602

#### blpopBuffer(args)

> **blpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.blpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:604

***

### brpop()

#### brpop(args)

> **brpop**(...`args`): `Promise`\<[`string`, `string`]\>

Remove and get the last element in a list, or block until one is available
- _group_: list
- _complexity_: O(N) where N is the number of provided keys.
- _since_: 2.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.brpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:611

#### brpop(args)

> **brpop**(...`args`): `Promise`\<[`string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.brpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:621

#### brpop(args)

> **brpop**(...`args`): `Promise`\<[`string`, `string`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.brpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:631

#### brpop(args)

> **brpop**(...`args`): `Promise`\<[`string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`]\>

##### Inherited from

`Redis.brpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:633

***

### brpopBuffer()

#### brpopBuffer(args)

> **brpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.brpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:616

#### brpopBuffer(args)

> **brpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.brpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:626

#### brpopBuffer(args)

> **brpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.brpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:632

#### brpopBuffer(args)

> **brpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`]\>

##### Inherited from

`Redis.brpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:634

***

### brpoplpush()

> **brpoplpush**(`source`, `destination`, `timeout`, `callback`?): `Promise`\<`string`\>

Pop an element from a list, push it to another list and return it; or block until one is available
- _group_: list
- _complexity_: O(1)
- _since_: 2.2.0

#### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.brpoplpush`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:641

***

### brpoplpushBuffer()

> **brpoplpushBuffer**(`source`, `destination`, `timeout`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.brpoplpushBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:642

***

### bzmpop()

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

Remove and return members with scores in a sorted set or block until one is available
- _group_: sorted-set
- _complexity_: O(K) + O(N*log(M)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MIN"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:649

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MIN"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:656

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MIN"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:663

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MIN"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:669

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MIN"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:675

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MIN"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:684

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MIN"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:693

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MIN"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:701

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MAX"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:709

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MAX"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:716

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MAX"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:723

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MAX"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:729

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MAX"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:735

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MAX"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:744

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `...keys: RedisKey[]`, `"MAX"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:753

#### bzmpop(args)

> **bzmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `string` \| `number`, `RedisKey`[], `"MAX"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.bzmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:761

***

### bzpopmax()

#### bzpopmax(args)

> **bzpopmax**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

Remove and return the member with the highest score from one or more sorted sets, or block until one is available
- _group_: sorted-set
- _complexity_: O(log(N)) with N being the number of elements in the sorted set.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`string`, `string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmax`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:775

#### bzpopmax(args)

> **bzpopmax**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`string`, `string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmax`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:785

#### bzpopmax(args)

> **bzpopmax**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmax`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:795

#### bzpopmax(args)

> **bzpopmax**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmax`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:797

***

### bzpopmaxBuffer()

#### bzpopmaxBuffer(args)

> **bzpopmaxBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopmaxBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:780

#### bzpopmaxBuffer(args)

> **bzpopmaxBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopmaxBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:790

#### bzpopmaxBuffer(args)

> **bzpopmaxBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopmaxBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:796

#### bzpopmaxBuffer(args)

> **bzpopmaxBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopmaxBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:798

***

### bzpopmin()

#### bzpopmin(args)

> **bzpopmin**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

Remove and return the member with the lowest score from one or more sorted sets, or block until one is available
- _group_: sorted-set
- _complexity_: O(log(N)) with N being the number of elements in the sorted set.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`string`, `string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmin`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:805

#### bzpopmin(args)

> **bzpopmin**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`string`, `string`, `string`]\>]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmin`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:815

#### bzpopmin(args)

> **bzpopmin**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmin`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:825

#### bzpopmin(args)

> **bzpopmin**(...`args`): `Promise`\<[`string`, `string`, `string`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`, `string`]\>

##### Inherited from

`Redis.bzpopmin`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:827

***

### bzpopminBuffer()

#### bzpopminBuffer(args)

> **bzpopminBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopminBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:810

#### bzpopminBuffer(args)

> **bzpopminBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`, `Buffer`]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopminBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:820

#### bzpopminBuffer(args)

> **bzpopminBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopminBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:826

#### bzpopminBuffer(args)

> **bzpopminBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Parameters

• ...**args**: [`RedisKey`[], `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`, `Buffer`]\>

##### Inherited from

`Redis.bzpopminBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:828

***

### call()

#### call(command, callback)

> **call**(`command`, `callback`?): `Promise`\<`unknown`\>

Call arbitrary commands.

`redis.call('set', 'foo', 'bar')` is the same as `redis.set('foo', 'bar')`,
so the only case you need to use this method is when the command is not
supported by ioredis.

```ts
redis.call('set', 'foo', 'bar');
redis.call('get', 'foo', (err, value) => {
  // value === 'bar'
});
```

##### Parameters

• **command**: `string`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.call`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:40

#### call(command, args, callback)

> **call**(`command`, `args`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **command**: `string`

• **args**: (`string` \| `number` \| `Buffer`)[]

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.call`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:41

#### call(args)

> **call**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.call`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:42

#### call(args)

> **call**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.call`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:47

***

### callBuffer()

#### callBuffer(command, callback)

> **callBuffer**(`command`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **command**: `string`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.callBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:48

#### callBuffer(command, args, callback)

> **callBuffer**(`command`, `args`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **command**: `string`

• **args**: (`string` \| `number` \| `Buffer`)[]

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.callBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:49

#### callBuffer(args)

> **callBuffer**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.callBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:50

#### callBuffer(args)

> **callBuffer**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.callBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:55

***

### client()

#### client(subcommand, yes, callback)

> **client**(`subcommand`, `yes`, `callback`?): `Promise`\<`"OK"`\>

Instruct the server about tracking or not keys in the next request
- _group_: connection
- _complexity_: O(1)
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"CACHING"`

• **yes**: `"YES"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:835

#### client(subcommand, no, callback)

> **client**(`subcommand`, `no`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"CACHING"`

• **no**: `"NO"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:836

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`string`\>

Get the current connection name
- _group_: connection
- _complexity_: O(1)
- _since_: 2.6.9

##### Parameters

• **subcommand**: `"GETNAME"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:843

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`number`\>

Get tracking notifications redirection client ID if any
- _group_: connection
- _complexity_: O(1)
- _since_: 6.0.0

##### Parameters

• **subcommand**: `"GETREDIR"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:851

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: connection
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:858

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`number`\>

Returns the client ID for the current connection
- _group_: connection
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"ID"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:865

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`string`\>

Returns information about the current client connection.
- _group_: connection
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **subcommand**: `"INFO"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:872

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

Kill the connection of a client
- _group_: connection
- _complexity_: O(N) where N is the number of client connections
- _since_: 2.4.0

##### Parameters

• ...**args**: [`"KILL"`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:880

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"KILL"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:885

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Get the list of client connections
- _group_: connection
- _complexity_: O(N) where N is the number of client connections
- _since_: 2.4.0

##### Parameters

• **subcommand**: `"LIST"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:892

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"ID"`, ...clientIds: (string \| number)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:893

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"ID"`, ...clientIds: (string \| number)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:899

#### client(subcommand, type, normal, callback)

> **client**(`subcommand`, `type`, `normal`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"LIST"`

• **type**: `"TYPE"`

• **normal**: `"NORMAL"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:904

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"NORMAL"`, `"ID"`, ...clientIds: (string \| number)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:905

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"NORMAL"`, `"ID"`, ...clientIds: (string \| number)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:913

#### client(subcommand, type, master, callback)

> **client**(`subcommand`, `type`, `master`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"LIST"`

• **type**: `"TYPE"`

• **master**: `"MASTER"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:920

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"MASTER"`, `"ID"`, ...clientIds: (string \| number)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:921

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"MASTER"`, `"ID"`, ...clientIds: (string \| number)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:929

#### client(subcommand, type, replica, callback)

> **client**(`subcommand`, `type`, `replica`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"LIST"`

• **type**: `"TYPE"`

• **replica**: `"REPLICA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:936

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"REPLICA"`, `"ID"`, ...clientIds: (string \| number)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:937

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"REPLICA"`, `"ID"`, ...clientIds: (string \| number)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:945

#### client(subcommand, type, pubsub, callback)

> **client**(`subcommand`, `type`, `pubsub`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"LIST"`

• **type**: `"TYPE"`

• **pubsub**: `"PUBSUB"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:952

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"PUBSUB"`, `"ID"`, ...clientIds: (string \| number)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:953

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LIST"`, `"TYPE"`, `"PUBSUB"`, `"ID"`, ...clientIds: (string \| number)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:961

#### client(subcommand, on, callback)

> **client**(`subcommand`, `on`, `callback`?): `Promise`\<`unknown`\>

Set client eviction mode for the current connection
- _group_: connection
- _complexity_: O(1)
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"NO-EVICT"`

• **on**: `"ON"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:974

#### client(subcommand, off, callback)

> **client**(`subcommand`, `off`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"NO-EVICT"`

• **off**: `"OFF"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:975

#### client(subcommand, timeout, callback)

> **client**(`subcommand`, `timeout`, `callback`?): `Promise`\<`"OK"`\>

Stop processing commands from clients for some time
- _group_: connection
- _complexity_: O(1)
- _since_: 2.9.50

##### Parameters

• **subcommand**: `"PAUSE"`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:982

#### client(subcommand, timeout, write, callback)

> **client**(`subcommand`, `timeout`, `write`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"PAUSE"`

• **timeout**: `string` \| `number`

• **write**: `"WRITE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:983

#### client(subcommand, timeout, all, callback)

> **client**(`subcommand`, `timeout`, `all`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"PAUSE"`

• **timeout**: `string` \| `number`

• **all**: `"ALL"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:984

#### client(subcommand, on, callback)

> **client**(`subcommand`, `on`, `callback`?): `Promise`\<`unknown`\>

Instruct the server whether to reply to commands
- _group_: connection
- _complexity_: O(1)
- _since_: 3.2.0

##### Parameters

• **subcommand**: `"REPLY"`

• **on**: `"ON"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:991

#### client(subcommand, off, callback)

> **client**(`subcommand`, `off`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"REPLY"`

• **off**: `"OFF"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:992

#### client(subcommand, skip, callback)

> **client**(`subcommand`, `skip`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"REPLY"`

• **skip**: `"SKIP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:993

#### client(subcommand, connectionName, callback)

> **client**(`subcommand`, `connectionName`, `callback`?): `Promise`\<`"OK"`\>

Set the current connection name
- _group_: connection
- _complexity_: O(1)
- _since_: 2.6.9

##### Parameters

• **subcommand**: `"SETNAME"`

• **connectionName**: `string` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1000

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

Enable or disable server assisted client side caching support
- _group_: connection
- _complexity_: O(1). Some options may introduce additional complexity.
- _since_: 6.0.0

##### Parameters

• ...**args**: [`"TRACKING"`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1007

#### client(args)

> **client**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"TRACKING"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1012

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`string`\>

Return information about server assisted client side caching for the current connection
- _group_: connection
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **subcommand**: `"TRACKINGINFO"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1019

#### client(subcommand, clientId, callback)

> **client**(`subcommand`, `clientId`, `callback`?): `Promise`\<`unknown`\>

Unblock a client blocked in a blocking command from a different connection
- _group_: connection
- _complexity_: O(log N) where N is the number of client connections
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"UNBLOCK"`

• **clientId**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1027

#### client(subcommand, clientId, timeout, callback)

> **client**(`subcommand`, `clientId`, `timeout`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"UNBLOCK"`

• **clientId**: `string` \| `number`

• **timeout**: `"TIMEOUT"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1028

#### client(subcommand, clientId, error, callback)

> **client**(`subcommand`, `clientId`, `error`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"UNBLOCK"`

• **clientId**: `string` \| `number`

• **error**: `"ERROR"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1029

#### client(subcommand, callback)

> **client**(`subcommand`, `callback`?): `Promise`\<`"OK"`\>

Resume processing of clients that were paused
- _group_: connection
- _complexity_: O(N) Where N is the number of paused clients
- _since_: 6.2.0

##### Parameters

• **subcommand**: `"UNPAUSE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.client`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1036

***

### clientBuffer()

#### clientBuffer(subcommand, callback)

> **clientBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"GETNAME"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.clientBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:844

#### clientBuffer(subcommand, callback)

> **clientBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"INFO"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.clientBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:873

#### clientBuffer(subcommand, callback)

> **clientBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"TRACKINGINFO"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.clientBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1020

***

### cluster()

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

Assign new hash slots to receiving node
- _group_: cluster
- _complexity_: O(N) where N is the total number of hash slot arguments
- _since_: 3.0.0

##### Parameters

• ...**args**: [`"ADDSLOTS"`, ...slots: (string \| number)\[\], `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1043

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"ADDSLOTS"`, (`string` \| `number`)[], `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1061

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"ADDSLOTS"`, ...slots: (string \| number)\[\]]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1079

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"ADDSLOTS"`, (`string` \| `number`)[]]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1084

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

Assign new hash slots to receiving node
- _group_: cluster
- _complexity_: O(N) where N is the total number of the slots between the start slot and end slot arguments.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`"ADDSLOTSRANGE"`, ...startSlotEndSlots: (string \| number)\[\], `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1095

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"ADDSLOTSRANGE"`, ...startSlotEndSlots: (string \| number)\[\]]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1113

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`"BUMPED"` \| `"STILL"`\>

Advance the cluster config epoch
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"BUMPEPOCH"`

• **callback?**: `Callback`\<`"BUMPED"` \| `"STILL"`\>

##### Returns

`Promise`\<`"BUMPED"` \| `"STILL"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1127

#### cluster(subcommand, nodeId, callback)

> **cluster**(`subcommand`, `nodeId`, `callback`?): `Promise`\<`number`\>

Return the number of failure reports active for a given node
- _group_: cluster
- _complexity_: O(N) where N is the number of failure reports
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"COUNT-FAILURE-REPORTS"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1134

#### cluster(subcommand, slot, callback)

> **cluster**(`subcommand`, `slot`, `callback`?): `Promise`\<`number`\>

Return the number of local keys in the specified hash slot
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"COUNTKEYSINSLOT"`

• **slot**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1141

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

Set hash slots as unbound in receiving node
- _group_: cluster
- _complexity_: O(N) where N is the total number of hash slot arguments
- _since_: 3.0.0

##### Parameters

• ...**args**: [`"DELSLOTS"`, ...slots: (string \| number)\[\], `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1148

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"DELSLOTS"`, (`string` \| `number`)[], `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1166

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"DELSLOTS"`, ...slots: (string \| number)\[\]]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1184

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"DELSLOTS"`, (`string` \| `number`)[]]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1189

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

Set hash slots as unbound in receiving node
- _group_: cluster
- _complexity_: O(N) where N is the total number of the slots between the start slot and end slot arguments.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`"DELSLOTSRANGE"`, ...startSlotEndSlots: (string \| number)\[\], `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1200

#### cluster(args)

> **cluster**(...`args`): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Parameters

• ...**args**: [`"DELSLOTSRANGE"`, ...startSlotEndSlots: (string \| number)\[\]]

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1218

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`"OK"`\>

Forces a replica to perform a manual failover of its master.
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"FAILOVER"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1232

#### cluster(subcommand, force, callback)

> **cluster**(`subcommand`, `force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"FAILOVER"`

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1233

#### cluster(subcommand, takeover, callback)

> **cluster**(`subcommand`, `takeover`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"FAILOVER"`

• **takeover**: `"TAKEOVER"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1234

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

Delete a node's own slots information
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"FLUSHSLOTS"`

• **callback?**: `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1241

#### cluster(subcommand, nodeId, callback)

> **cluster**(`subcommand`, `nodeId`, `callback`?): `Promise`\<`"OK"`\>

Remove a node from the nodes table
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"FORGET"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1261

#### cluster(subcommand, slot, count, callback)

> **cluster**(`subcommand`, `slot`, `count`, `callback`?): `Promise`\<`string`[]\>

Return local key names in the specified hash slot
- _group_: cluster
- _complexity_: O(log(N)) where N is the number of requested keys
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"GETKEYSINSLOT"`

• **slot**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1268

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: cluster
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1275

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`string`\>

Provides info about Redis Cluster node state
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"INFO"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1282

#### cluster(subcommand, key, callback)

> **cluster**(`subcommand`, `key`, `callback`?): `Promise`\<`number`\>

Returns the hash slot of the specified key
- _group_: cluster
- _complexity_: O(N) where N is the number of bytes in the key
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"KEYSLOT"`

• **key**: `string` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1289

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Returns a list of all TCP links to and from peer nodes in cluster
- _group_: cluster
- _complexity_: O(N) where N is the total number of Cluster nodes
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"LINKS"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1296

#### cluster(subcommand, ip, port, callback)

> **cluster**(`subcommand`, `ip`, `port`, `callback`?): `Promise`\<`"OK"`\>

Force a node cluster to handshake with another node
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"MEET"`

• **ip**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1303

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`string`\>

Return the node id
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"MYID"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1310

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Get Cluster config for the node
- _group_: cluster
- _complexity_: O(N) where N is the total number of Cluster nodes
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"NODES"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1317

#### cluster(subcommand, nodeId, callback)

> **cluster**(`subcommand`, `nodeId`, `callback`?): `Promise`\<`unknown`\>

List replica nodes of the specified master node
- _group_: cluster
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"REPLICAS"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1324

#### cluster(subcommand, nodeId, callback)

> **cluster**(`subcommand`, `nodeId`, `callback`?): `Promise`\<`"OK"`\>

Reconfigure a node as a replica of the specified master node
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"REPLICATE"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1331

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`"OK"`\>

Reset a Redis Cluster node
- _group_: cluster
- _complexity_: O(N) where N is the number of known nodes. The command may execute a FLUSHALL as a side effect.
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"RESET"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1338

#### cluster(subcommand, hard, callback)

> **cluster**(`subcommand`, `hard`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"RESET"`

• **hard**: `"HARD"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1339

#### cluster(subcommand, soft, callback)

> **cluster**(`subcommand`, `soft`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"RESET"`

• **soft**: `"SOFT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1340

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`"OK"`\>

Forces the node to save cluster state on disk
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"SAVECONFIG"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1347

#### cluster(subcommand, configEpoch, callback)

> **cluster**(`subcommand`, `configEpoch`, `callback`?): `Promise`\<`"OK"`\>

Set the configuration epoch in a new node
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"SET-CONFIG-EPOCH"`

• **configEpoch**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1354

#### cluster(subcommand, slot, nodeIdToken, nodeId, callback)

> **cluster**(`subcommand`, `slot`, `nodeIdToken`, `nodeId`, `callback`?): `Promise`\<`"OK"`\>

Bind a hash slot to a specific node
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"SETSLOT"`

• **slot**: `string` \| `number`

• **nodeIdToken**: `"IMPORTING"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1361

#### cluster(subcommand, slot, nodeIdToken, nodeId, callback)

> **cluster**(`subcommand`, `slot`, `nodeIdToken`, `nodeId`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"SETSLOT"`

• **slot**: `string` \| `number`

• **nodeIdToken**: `"MIGRATING"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1362

#### cluster(subcommand, slot, nodeIdToken, nodeId, callback)

> **cluster**(`subcommand`, `slot`, `nodeIdToken`, `nodeId`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"SETSLOT"`

• **slot**: `string` \| `number`

• **nodeIdToken**: `"NODE"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1363

#### cluster(subcommand, slot, stable, callback)

> **cluster**(`subcommand`, `slot`, `stable`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **subcommand**: `"SETSLOT"`

• **slot**: `string` \| `number`

• **stable**: `"STABLE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1364

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Get array of cluster slots to node mappings
- _group_: cluster
- _complexity_: O(N) where N is the total number of cluster nodes
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"SHARDS"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1371

#### cluster(subcommand, nodeId, callback)

> **cluster**(`subcommand`, `nodeId`, `callback`?): `Promise`\<`unknown`\>

List replica nodes of the specified master node
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"SLAVES"`

• **nodeId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1378

#### cluster(subcommand, callback)

> **cluster**(`subcommand`, `callback`?): `Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

Get array of Cluster slot to node mappings
- _group_: cluster
- _complexity_: O(N) where N is the total number of Cluster nodes
- _since_: 3.0.0

##### Parameters

• **subcommand**: `"SLOTS"`

• **callback?**: `Callback`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Returns

`Promise`\<[`number`, `number`, `...nodes: [host: string, port: number, nodeId: string, info: unknown[]][]`][]\>

##### Inherited from

`Redis.cluster`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1385

***

### command()

#### command(subcommand, callback)

> **command**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Get total number of Redis commands
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"COUNT"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1405

#### command(subcommand, callback)

> **command**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Get array of specific Redis command documentation
- _group_: server
- _complexity_: O(N) where N is the number of commands to look up
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"DOCS"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1412

#### command(args)

> **command**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"DOCS"`, ...commandNames: (string \| Buffer)\[\], `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1413

#### command(args)

> **command**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"DOCS"`, ...commandNames: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1418

#### command(subcommand, callback)

> **command**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Extract keys given a full Redis command
- _group_: server
- _complexity_: O(N) where N is the number of arguments to the command
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"GETKEYS"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1425

#### command(subcommand, callback)

> **command**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Extract keys and access flags given a full Redis command
- _group_: server
- _complexity_: O(N) where N is the number of arguments to the command
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"GETKEYSANDFLAGS"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1432

#### command(subcommand, callback)

> **command**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Show helpful text about the different subcommands
- _group_: server
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1439

#### command(subcommand, callback)

> **command**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Get array of specific Redis command details, or all when no argument is given.
- _group_: server
- _complexity_: O(N) where N is the number of commands to look up
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"INFO"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1446

#### command(args)

> **command**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"INFO"`, ...commandNames: (string \| Buffer)\[\], `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1447

#### command(args)

> **command**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"INFO"`, ...commandNames: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1452

#### command(subcommand, callback)

> **command**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Get an array of Redis command names
- _group_: server
- _complexity_: O(N) where N is the total number of Redis commands
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"LIST"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1459

#### command(subcommand, filterby, moduleNameToken, moduleName, callback)

> **command**(`subcommand`, `filterby`, `moduleNameToken`, `moduleName`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"LIST"`

• **filterby**: `"FILTERBY"`

• **moduleNameToken**: `"MODULE"`

• **moduleName**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1460

#### command(subcommand, filterby, categoryToken, category, callback)

> **command**(`subcommand`, `filterby`, `categoryToken`, `category`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"LIST"`

• **filterby**: `"FILTERBY"`

• **categoryToken**: `"ACLCAT"`

• **category**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1461

#### command(subcommand, filterby, patternToken, pattern, callback)

> **command**(`subcommand`, `filterby`, `patternToken`, `pattern`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"LIST"`

• **filterby**: `"FILTERBY"`

• **patternToken**: `"PATTERN"`

• **pattern**: `string`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.command`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1462

***

### config()

#### config(args)

> **config**(...`args`): `Promise`\<`unknown`\>

Get the values of configuration parameters
- _group_: server
- _complexity_: O(N) when N is the number of configuration parameters provided
- _since_: 2.0.0

##### Parameters

• ...**args**: [`"GET"`, ...parameters: (string \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.config`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1469

#### config(args)

> **config**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"GET"`, ...parameters: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.config`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1474

#### config(subcommand, callback)

> **config**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: server
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.config`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1481

#### config(subcommand, callback)

> **config**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Reset the stats returned by INFO
- _group_: server
- _complexity_: O(1)
- _since_: 2.0.0

##### Parameters

• **subcommand**: `"RESETSTAT"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.config`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1488

#### config(subcommand, callback)

> **config**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Rewrite the configuration file with the in memory configuration
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.0

##### Parameters

• **subcommand**: `"REWRITE"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.config`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1495

#### config(args)

> **config**(...`args`): `Promise`\<`unknown`\>

Set configuration parameters to the given values
- _group_: server
- _complexity_: O(N) when N is the number of configuration parameters provided
- _since_: 2.0.0

##### Parameters

• ...**args**: [`"SET"`, ...parameterValues: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.config`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1502

#### config(args)

> **config**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"SET"`, ...parameterValues: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.config`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1507

***

### connect()

> **connect**(`callback`?): `Promise`\<`void`\>

Create a connection to Redis.
This method will be invoked automatically when creating a new Redis instance
unless `lazyConnect: true` is passed.

When calling this method manually, a Promise is returned, which will
be resolved when the connection status is ready.

#### Parameters

• **callback?**: `Callback`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Redis.connect`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:86

***

### copy()

#### copy(source, destination, callback)

> **copy**(`source`, `destination`, `callback`?): `Promise`\<`number`\>

Copy a key
- _group_: generic
- _complexity_: O(N) worst case for collections, where N is the number of nested items. O(1) for string values.
- _since_: 6.2.0

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.copy`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1517

#### copy(source, destination, replace, callback)

> **copy**(`source`, `destination`, `replace`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **replace**: `"REPLACE"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.copy`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1518

#### copy(source, destination, destinationDbToken, destinationDb, callback)

> **copy**(`source`, `destination`, `destinationDbToken`, `destinationDb`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **destinationDbToken**: `"DB"`

• **destinationDb**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.copy`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1519

#### copy(source, destination, destinationDbToken, destinationDb, replace, callback)

> **copy**(`source`, `destination`, `destinationDbToken`, `destinationDb`, `replace`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **destinationDbToken**: `"DB"`

• **destinationDb**: `string` \| `number`

• **replace**: `"REPLACE"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.copy`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1520

***

### createBuiltinCommand()

> **createBuiltinCommand**(`commandName`): `object`

Create a builtin command

#### Parameters

• **commandName**: `string`

#### Returns

`object`

##### buffer

> **buffer**: `any`

##### string

> **string**: `any`

#### Inherited from

`Redis.createBuiltinCommand`

#### Defined in

node\_modules/ioredis/built/utils/Commander.d.ts:27

***

### dbsize()

> **dbsize**(`callback`?): `Promise`\<`number`\>

Return the number of keys in the selected database
- _group_: server
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.dbsize`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1527

***

### debug()

#### debug(subcommand, callback)

> **debug**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

A container for debugging commands
- _group_: server
- _complexity_: Depends on subcommand.
- _since_: 1.0.0

##### Parameters

• **subcommand**: `string`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.debug`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1534

#### debug(args)

> **debug**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.debug`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1535

#### debug(args)

> **debug**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.debug`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1540

***

### decr()

> **decr**(`key`, `callback`?): `Promise`\<`number`\>

Decrement the integer value of a key by one
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.decr`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1547

***

### decrby()

> **decrby**(`key`, `decrement`, `callback`?): `Promise`\<`number`\>

Decrement the integer value of a key by the given number
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **decrement**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.decrby`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1554

***

### defineCommand()

> **defineCommand**(`name`, `definition`): `void`

Define a custom command using lua script

#### Parameters

• **name**: `string`

• **definition**

• **definition.lua**: `string`

• **definition.numberOfKeys?**: `number`

• **definition.readOnly?**: `boolean`

#### Returns

`void`

#### Inherited from

`Redis.defineCommand`

#### Defined in

node\_modules/ioredis/built/utils/Commander.d.ts:38

***

### del()

#### del(args)

> **del**(...`args`): `Promise`\<`number`\>

Delete a key
- _group_: generic
- _complexity_: O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).
- _since_: 1.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.del`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1561

#### del(args)

> **del**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.del`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1562

#### del(args)

> **del**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.del`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1563

#### del(args)

> **del**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.del`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1564

***

### discard()

> **discard**(`callback`?): `Promise`\<`"OK"`\>

Discard all commands issued after MULTI
- _group_: transactions
- _complexity_: O(N), when N is the number of queued commands
- _since_: 2.0.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.discard`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1571

***

### disconnect()

> **disconnect**(`reconnect`?): `void`

Disconnect from Redis.

This method closes the connection immediately,
and may lose some pending replies that haven't written to client.
If you want to wait for the pending replies, use Redis#quit instead.

#### Parameters

• **reconnect?**: `boolean`

#### Returns

`void`

#### Inherited from

`Redis.disconnect`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:94

***

### dump()

> **dump**(`key`, `callback`?): `Promise`\<`string`\>

Return a serialized version of the value stored at the specified key.
- _group_: generic
- _complexity_: O(1) to access the key and additional O(N*M) to serialize it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).
- _since_: 2.6.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.dump`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1578

***

### dumpBuffer()

> **dumpBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.dumpBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1579

***

### duplicate()

> **duplicate**(`override`?): `Redis`

Create a new instance with the same options as the current one.

#### Parameters

• **override?**: `Partial`\<`RedisOptions`\>

#### Returns

`Redis`

#### Example

```js
var redis = new Redis(6380);
var anotherRedis = redis.duplicate();
```

#### Inherited from

`Redis.duplicate`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:110

***

### echo()

> **echo**(`message`, `callback`?): `Promise`\<`string`\>

Echo the given string
- _group_: connection
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **message**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.echo`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1586

***

### echoBuffer()

> **echoBuffer**(`message`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **message**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.echoBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1587

***

### emit()

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`boolean`

#### Since

v0.1.26

#### Inherited from

`Redis.emit`

#### Defined in

node\_modules/@types/node/events.d.ts:859

***

### ~~end()~~

> **end**(): `void`

Disconnect from Redis.

#### Returns

`void`

#### Deprecated

#### Inherited from

`Redis.end`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:100

***

### eval()

#### eval(script, numkeys, callback)

> **eval**(`script`, `numkeys`, `callback`?): `Promise`\<`unknown`\>

Execute a Lua script server side
- _group_: scripting
- _complexity_: Depends on the script that is executed.
- _since_: 2.6.0

##### Parameters

• **script**: `string` \| `Buffer`

• **numkeys**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1594

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1595

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1601

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1606

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `RedisKey`[], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1612

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1618

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1623

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1628

#### eval(args)

> **eval**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1634

***

### eval\_ro()

#### eval\_ro(args)

> **eval\_ro**(...`args`): `Promise`\<`unknown`\>

Execute a read-only Lua script server side
- _group_: scripting
- _complexity_: Depends on the script that is executed.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1645

#### eval\_ro(args)

> **eval\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.eval_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1651

***

### evalsha()

#### evalsha(sha1, numkeys, callback)

> **evalsha**(`sha1`, `numkeys`, `callback`?): `Promise`\<`unknown`\>

Execute a Lua script server side
- _group_: scripting
- _complexity_: Depends on the script that is executed.
- _since_: 2.6.0

##### Parameters

• **sha1**: `string` \| `Buffer`

• **numkeys**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1662

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1663

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1669

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1674

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `RedisKey`[], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1680

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1686

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1691

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1692

#### evalsha(args)

> **evalsha**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1698

***

### evalsha\_ro()

#### evalsha\_ro(args)

> **evalsha\_ro**(...`args`): `Promise`\<`unknown`\>

Execute a read-only Lua script server side
- _group_: scripting
- _complexity_: Depends on the script that is executed.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1709

#### evalsha\_ro(args)

> **evalsha\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.evalsha_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1715

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

`Redis.eventNames`

#### Defined in

node\_modules/@types/node/events.d.ts:922

***

### exec()

> **exec**(`callback`?): `Promise`\<[`Error`, `unknown`][]\>

Execute all commands issued after MULTI
- _group_: transactions
- _complexity_: Depends on commands in the transaction
- _since_: 1.2.0

#### Parameters

• **callback?**: `Callback`\<[`Error`, `unknown`][]\>

#### Returns

`Promise`\<[`Error`, `unknown`][]\>

#### Inherited from

`Redis.exec`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1726

***

### exists()

#### exists(args)

> **exists**(...`args`): `Promise`\<`number`\>

Determine if a key exists
- _group_: generic
- _complexity_: O(N) where N is the number of keys to check.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.exists`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1733

#### exists(args)

> **exists**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.exists`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1734

#### exists(args)

> **exists**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.exists`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1735

#### exists(args)

> **exists**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.exists`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1736

***

### expire()

#### expire(key, seconds, callback)

> **expire**(`key`, `seconds`, `callback`?): `Promise`\<`number`\>

Set a key's time to live in seconds
- _group_: generic
- _complexity_: O(1)
- _since_: 1.0.0

##### Parameters

• **key**: `RedisKey`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1743

#### expire(key, seconds, nx, callback)

> **expire**(`key`, `seconds`, `nx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **seconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1744

#### expire(key, seconds, xx, callback)

> **expire**(`key`, `seconds`, `xx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **seconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1745

#### expire(key, seconds, gt, callback)

> **expire**(`key`, `seconds`, `gt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **seconds**: `string` \| `number`

• **gt**: `"GT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1746

#### expire(key, seconds, lt, callback)

> **expire**(`key`, `seconds`, `lt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **seconds**: `string` \| `number`

• **lt**: `"LT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1747

***

### expireat()

#### expireat(key, unixTimeSeconds, callback)

> **expireat**(`key`, `unixTimeSeconds`, `callback`?): `Promise`\<`number`\>

Set the expiration for a key as a UNIX timestamp
- _group_: generic
- _complexity_: O(1)
- _since_: 1.2.0

##### Parameters

• **key**: `RedisKey`

• **unixTimeSeconds**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1754

#### expireat(key, unixTimeSeconds, nx, callback)

> **expireat**(`key`, `unixTimeSeconds`, `nx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeSeconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1755

#### expireat(key, unixTimeSeconds, xx, callback)

> **expireat**(`key`, `unixTimeSeconds`, `xx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeSeconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1756

#### expireat(key, unixTimeSeconds, gt, callback)

> **expireat**(`key`, `unixTimeSeconds`, `gt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeSeconds**: `string` \| `number`

• **gt**: `"GT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1757

#### expireat(key, unixTimeSeconds, lt, callback)

> **expireat**(`key`, `unixTimeSeconds`, `lt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeSeconds**: `string` \| `number`

• **lt**: `"LT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.expireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1758

***

### expiretime()

> **expiretime**(`key`, `callback`?): `Promise`\<`number`\>

Get the expiration Unix timestamp for a key
- _group_: generic
- _complexity_: O(1)
- _since_: 7.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.expiretime`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1765

***

### failover()

#### failover(callback)

> **failover**(`callback`?): `Promise`\<`"OK"`\>

Start a coordinated failover between this server and one of its replicas.
- _group_: server
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1772

#### failover(millisecondsToken, milliseconds, callback)

> **failover**(`millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **millisecondsToken**: `"TIMEOUT"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1773

#### failover(abort, callback)

> **failover**(`abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1774

#### failover(abort, millisecondsToken, milliseconds, callback)

> **failover**(`abort`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **abort**: `"ABORT"`

• **millisecondsToken**: `"TIMEOUT"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1775

#### failover(targetToken, host, port, callback)

> **failover**(`targetToken`, `host`, `port`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1776

#### failover(targetToken, host, port, millisecondsToken, milliseconds, callback)

> **failover**(`targetToken`, `host`, `port`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **millisecondsToken**: `"TIMEOUT"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1777

#### failover(targetToken, host, port, abort, callback)

> **failover**(`targetToken`, `host`, `port`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1778

#### failover(targetToken, host, port, abort, millisecondsToken, milliseconds, callback)

> **failover**(`targetToken`, `host`, `port`, `abort`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **abort**: `"ABORT"`

• **millisecondsToken**: `"TIMEOUT"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1779

#### failover(targetToken, host, port, force, callback)

> **failover**(`targetToken`, `host`, `port`, `force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1780

#### failover(targetToken, host, port, force, millisecondsToken, milliseconds, callback)

> **failover**(`targetToken`, `host`, `port`, `force`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **force**: `"FORCE"`

• **millisecondsToken**: `"TIMEOUT"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1781

#### failover(targetToken, host, port, force, abort, callback)

> **failover**(`targetToken`, `host`, `port`, `force`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1782

#### failover(targetToken, host, port, force, abort, millisecondsToken, milliseconds, callback)

> **failover**(`targetToken`, `host`, `port`, `force`, `abort`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **targetToken**: `"TO"`

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **millisecondsToken**: `"TIMEOUT"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.failover`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1783

***

### fcall()

#### fcall(args)

> **fcall**(...`args`): `Promise`\<`unknown`\>

Invoke a function
- _group_: scripting
- _complexity_: Depends on the function that is executed.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.fcall`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1790

#### fcall(args)

> **fcall**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.fcall`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1796

***

### fcall\_ro()

#### fcall\_ro(args)

> **fcall\_ro**(...`args`): `Promise`\<`unknown`\>

Invoke a read-only function
- _group_: scripting
- _complexity_: Depends on the function that is executed.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.fcall_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1807

#### fcall\_ro(args)

> **fcall\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.fcall_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1813

***

### flushall()

#### flushall(callback)

> **flushall**(`callback`?): `Promise`\<`"OK"`\>

Remove all keys from all databases
- _group_: server
- _complexity_: O(N) where N is the total number of keys in all databases
- _since_: 1.0.0

##### Parameters

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.flushall`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1824

#### flushall(async, callback)

> **flushall**(`async`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **async**: `"ASYNC"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.flushall`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1825

#### flushall(sync, callback)

> **flushall**(`sync`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **sync**: `"SYNC"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.flushall`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1826

***

### flushdb()

#### flushdb(callback)

> **flushdb**(`callback`?): `Promise`\<`"OK"`\>

Remove all keys from the current database
- _group_: server
- _complexity_: O(N) where N is the number of keys in the selected database
- _since_: 1.0.0

##### Parameters

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.flushdb`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1833

#### flushdb(async, callback)

> **flushdb**(`async`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **async**: `"ASYNC"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.flushdb`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1834

#### flushdb(sync, callback)

> **flushdb**(`sync`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **sync**: `"SYNC"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.flushdb`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1835

***

### fork()

> **fork**(`options`?): [`RedisService`](/official/reference/redis/classes/RedisService.md)

#### Parameters

• **options?**: [`RedisModuleOptions`](/official/reference/redis/interfaces/RedisModuleOptions.md)

#### Returns

[`RedisService`](/official/reference/redis/classes/RedisService.md)

#### Defined in

[packages/redis/src/redis.service.ts:15](https://github.com/hikestack/hike/blob/5cb68b36190947734eac00838244c1c69929cecf/packages/redis/src/redis.service.ts#L15)

***

### function()

#### function(subcommand, libraryName, callback)

> **function**(`subcommand`, `libraryName`, `callback`?): `Promise`\<`string`\>

Delete a function by name
- _group_: scripting
- _complexity_: O(1)
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"DELETE"`

• **libraryName**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1842

#### function(subcommand, callback)

> **function**(`subcommand`, `callback`?): `Promise`\<`string`\>

Dump all functions into a serialized binary payload
- _group_: scripting
- _complexity_: O(N) where N is the number of functions
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"DUMP"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1850

#### function(subcommand, callback)

> **function**(`subcommand`, `callback`?): `Promise`\<`string`\>

Deleting all functions
- _group_: scripting
- _complexity_: O(N) where N is the number of functions deleted
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"FLUSH"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1858

#### function(subcommand, async, callback)

> **function**(`subcommand`, `async`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **subcommand**: `"FLUSH"`

• **async**: `"ASYNC"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1860

#### function(subcommand, sync, callback)

> **function**(`subcommand`, `sync`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **subcommand**: `"FLUSH"`

• **sync**: `"SYNC"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1862

#### function(subcommand, callback)

> **function**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: scripting
- _complexity_: O(1)
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1870

#### function(subcommand, callback)

> **function**(`subcommand`, `callback`?): `Promise`\<`string`\>

Kill the function currently in execution.
- _group_: scripting
- _complexity_: O(1)
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"KILL"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1877

#### function(subcommand, callback)

> **function**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

List information about all the functions
- _group_: scripting
- _complexity_: O(N) where N is the number of functions
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"LIST"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1885

#### function(subcommand, withcode, callback)

> **function**(`subcommand`, `withcode`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"LIST"`

• **withcode**: `"WITHCODE"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1886

#### function(subcommand, libraryNamePatternToken, libraryNamePattern, callback)

> **function**(`subcommand`, `libraryNamePatternToken`, `libraryNamePattern`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"LIST"`

• **libraryNamePatternToken**: `"LIBRARYNAME"`

• **libraryNamePattern**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1887

#### function(subcommand, libraryNamePatternToken, libraryNamePattern, withcode, callback)

> **function**(`subcommand`, `libraryNamePatternToken`, `libraryNamePattern`, `withcode`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"LIST"`

• **libraryNamePatternToken**: `"LIBRARYNAME"`

• **libraryNamePattern**: `string` \| `Buffer`

• **withcode**: `"WITHCODE"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1888

#### function(subcommand, functionCode, callback)

> **function**(`subcommand`, `functionCode`, `callback`?): `Promise`\<`string`\>

Create a function with the given arguments (name, code, description)
- _group_: scripting
- _complexity_: O(1) (considering compilation time is redundant)
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"LOAD"`

• **functionCode**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1895

#### function(subcommand, replace, functionCode, callback)

> **function**(`subcommand`, `replace`, `functionCode`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **subcommand**: `"LOAD"`

• **replace**: `"REPLACE"`

• **functionCode**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1897

#### function(subcommand, serializedValue, callback)

> **function**(`subcommand`, `serializedValue`, `callback`?): `Promise`\<`string`\>

Restore all the functions on the given payload
- _group_: scripting
- _complexity_: O(N) where N is the number of functions on the payload
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1905

#### function(subcommand, serializedValue, flush, callback)

> **function**(`subcommand`, `serializedValue`, `flush`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **flush**: `"FLUSH"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1907

#### function(subcommand, serializedValue, append, callback)

> **function**(`subcommand`, `serializedValue`, `append`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **append**: `"APPEND"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1909

#### function(subcommand, serializedValue, replace, callback)

> **function**(`subcommand`, `serializedValue`, `replace`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1911

#### function(subcommand, callback)

> **function**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Return information about the function currently running (name, description, duration)
- _group_: scripting
- _complexity_: O(1)
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"STATS"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.function`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1919

***

### functionBuffer()

#### functionBuffer(subcommand, libraryName, callback)

> **functionBuffer**(`subcommand`, `libraryName`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"DELETE"`

• **libraryName**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1843

#### functionBuffer(subcommand, callback)

> **functionBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"DUMP"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1851

#### functionBuffer(subcommand, callback)

> **functionBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"FLUSH"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1859

#### functionBuffer(subcommand, async, callback)

> **functionBuffer**(`subcommand`, `async`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"FLUSH"`

• **async**: `"ASYNC"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1861

#### functionBuffer(subcommand, sync, callback)

> **functionBuffer**(`subcommand`, `sync`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"FLUSH"`

• **sync**: `"SYNC"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1863

#### functionBuffer(subcommand, callback)

> **functionBuffer**(`subcommand`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"KILL"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1878

#### functionBuffer(subcommand, functionCode, callback)

> **functionBuffer**(`subcommand`, `functionCode`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"LOAD"`

• **functionCode**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1896

#### functionBuffer(subcommand, replace, functionCode, callback)

> **functionBuffer**(`subcommand`, `replace`, `functionCode`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"LOAD"`

• **replace**: `"REPLACE"`

• **functionCode**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1898

#### functionBuffer(subcommand, serializedValue, callback)

> **functionBuffer**(`subcommand`, `serializedValue`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1906

#### functionBuffer(subcommand, serializedValue, flush, callback)

> **functionBuffer**(`subcommand`, `serializedValue`, `flush`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **flush**: `"FLUSH"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1908

#### functionBuffer(subcommand, serializedValue, append, callback)

> **functionBuffer**(`subcommand`, `serializedValue`, `append`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **append**: `"APPEND"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1910

#### functionBuffer(subcommand, serializedValue, replace, callback)

> **functionBuffer**(`subcommand`, `serializedValue`, `replace`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **subcommand**: `"RESTORE"`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.functionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1912

***

### geoadd()

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

Add one or more geospatial items in the geospatial index represented using a sorted set
- _group_: geo
- _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
- _since_: 3.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1926

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1931

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1935

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1941

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1946

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1952

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1957

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1964

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1970

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1976

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1981

#### geoadd(args)

> **geoadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, ...longitudeLatitudeMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geoadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:1988

***

### geodist()

#### geodist(key, member1, member2, callback)

> **geodist**(`key`, `member1`, `member2`, `callback`?): `Promise`\<`string`\>

Returns the distance between two members of a geospatial index
- _group_: geo
- _complexity_: O(log(N))
- _since_: 3.2.0

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.geodist`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2000

#### geodist(key, member1, member2, m, callback)

> **geodist**(`key`, `member1`, `member2`, `m`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **m**: `"M"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.geodist`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2002

#### geodist(key, member1, member2, km, callback)

> **geodist**(`key`, `member1`, `member2`, `km`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **km**: `"KM"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.geodist`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2004

#### geodist(key, member1, member2, ft, callback)

> **geodist**(`key`, `member1`, `member2`, `ft`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **ft**: `"FT"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.geodist`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2006

#### geodist(key, member1, member2, mi, callback)

> **geodist**(`key`, `member1`, `member2`, `mi`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **mi**: `"MI"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.geodist`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2008

***

### geodistBuffer()

#### geodistBuffer(key, member1, member2, callback)

> **geodistBuffer**(`key`, `member1`, `member2`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.geodistBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2001

#### geodistBuffer(key, member1, member2, m, callback)

> **geodistBuffer**(`key`, `member1`, `member2`, `m`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **m**: `"M"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.geodistBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2003

#### geodistBuffer(key, member1, member2, km, callback)

> **geodistBuffer**(`key`, `member1`, `member2`, `km`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **km**: `"KM"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.geodistBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2005

#### geodistBuffer(key, member1, member2, ft, callback)

> **geodistBuffer**(`key`, `member1`, `member2`, `ft`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **ft**: `"FT"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.geodistBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2007

#### geodistBuffer(key, member1, member2, mi, callback)

> **geodistBuffer**(`key`, `member1`, `member2`, `mi`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **member1**: `string` \| `number` \| `Buffer`

• **member2**: `string` \| `number` \| `Buffer`

• **mi**: `"MI"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.geodistBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2009

***

### geohash()

#### geohash(args)

> **geohash**(...`args`): `Promise`\<`string`[]\>

Returns members of a geospatial index as standard geohash strings
- _group_: geo
- _complexity_: O(log(N)) for each member requested, where N is the number of elements in the sorted set.
- _since_: 3.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.geohash`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2016

#### geohash(args)

> **geohash**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.geohash`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2026

#### geohash(args)

> **geohash**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.geohash`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2036

#### geohash(args)

> **geohash**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.geohash`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2038

***

### geohashBuffer()

#### geohashBuffer(args)

> **geohashBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.geohashBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2021

#### geohashBuffer(args)

> **geohashBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.geohashBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2031

#### geohashBuffer(args)

> **geohashBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.geohashBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2037

#### geohashBuffer(args)

> **geohashBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.geohashBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2039

***

### geopos()

#### geopos(args)

> **geopos**(...`args`): `Promise`\<[`string`, `string`][]\>

Returns longitude and latitude of members of a geospatial index
- _group_: geo
- _complexity_: O(N) where N is the number of members requested.
- _since_: 3.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<[`string`, `string`][]\>]

##### Returns

`Promise`\<[`string`, `string`][]\>

##### Inherited from

`Redis.geopos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2046

#### geopos(args)

> **geopos**(...`args`): `Promise`\<[`string`, `string`][]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<[`string`, `string`][]\>]

##### Returns

`Promise`\<[`string`, `string`][]\>

##### Inherited from

`Redis.geopos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2051

#### geopos(args)

> **geopos**(...`args`): `Promise`\<[`string`, `string`][]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<[`string`, `string`][]\>

##### Inherited from

`Redis.geopos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2056

#### geopos(args)

> **geopos**(...`args`): `Promise`\<[`string`, `string`][]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<[`string`, `string`][]\>

##### Inherited from

`Redis.geopos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2057

***

### georadius()

#### georadius(args)

> **georadius**(...`args`): `Promise`\<`unknown`[]\>

Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
- _group_: geo
- _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
- _since_: 3.2.0

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `string` \| `number`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.georadius`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2064

#### georadius(args)

> **georadius**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `string` \| `number`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.georadius`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2072

***

### georadius\_ro()

#### georadius\_ro(args)

> **georadius\_ro**(...`args`): `Promise`\<`unknown`\>

A read-only variant for GEORADIUS
- _group_: geo
- _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
- _since_: 3.2.10

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `string` \| `number`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.georadius_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2085

#### georadius\_ro(args)

> **georadius\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `string` \| `number`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.georadius_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2093

***

### georadiusbymember()

#### georadiusbymember(args)

> **georadiusbymember**(...`args`): `Promise`\<`unknown`\>

Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
- _group_: geo
- _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
- _since_: 3.2.0

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.georadiusbymember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2106

#### georadiusbymember(args)

> **georadiusbymember**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.georadiusbymember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2113

***

### georadiusbymember\_ro()

#### georadiusbymember\_ro(args)

> **georadiusbymember\_ro**(...`args`): `Promise`\<`unknown`\>

A read-only variant for GEORADIUSBYMEMBER
- _group_: geo
- _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
- _since_: 3.2.10

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.georadiusbymember_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2125

#### georadiusbymember\_ro(args)

> **georadiusbymember\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.georadiusbymember_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2132

***

### geosearch()

#### geosearch(args)

> **geosearch**(...`args`): `Promise`\<`unknown`[]\>

Query a sorted set representing a geospatial index to fetch members inside an area of a box or a circle.
- _group_: geo
- _complexity_: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
- _since_: 6.2.0

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.geosearch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2144

#### geosearch(args)

> **geosearch**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.geosearch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2149

***

### geosearchstore()

#### geosearchstore(args)

> **geosearchstore**(...`args`): `Promise`\<`number`\>

Query a sorted set representing a geospatial index to fetch members inside an area of a box or a circle, and store the result in another key.
- _group_: geo
- _complexity_: O(N+log(M)) where N is the number of elements in the grid-aligned bounding box area around the shape provided as the filter and M is the number of items inside the shape
- _since_: 6.2.0

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`, `...args: RedisValue[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geosearchstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2156

#### geosearchstore(args)

> **geosearchstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.geosearchstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2162

***

### get()

> **get**(`key`, `callback`?): `Promise`\<`string`\>

Get the value of a key
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.get`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2169

***

### getbit()

> **getbit**(`key`, `offset`, `callback`?): `Promise`\<`number`\>

Returns the bit value at offset in the string value stored at key
- _group_: bitmap
- _complexity_: O(1)
- _since_: 2.2.0

#### Parameters

• **key**: `RedisKey`

• **offset**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.getbit`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2177

***

### getBuffer()

> **getBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.getBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2170

***

### getBuiltinCommands()

> **getBuiltinCommands**(): `string`[]

Return supported builtin commands

#### Returns

`string`[]

#### Inherited from

`Redis.getBuiltinCommands`

#### Defined in

node\_modules/ioredis/built/utils/Commander.d.ts:23

***

### getdel()

> **getdel**(`key`, `callback`?): `Promise`\<`string`\>

Get the value of a key and delete the key
- _group_: string
- _complexity_: O(1)
- _since_: 6.2.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.getdel`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2184

***

### getdelBuffer()

> **getdelBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.getdelBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2185

***

### getex()

#### getex(key, callback)

> **getex**(`key`, `callback`?): `Promise`\<`string`\>

Get the value of a key and optionally set its expiration
- _group_: string
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.getex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2192

#### getex(key, secondsToken, seconds, callback)

> **getex**(`key`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.getex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2194

#### getex(key, millisecondsToken, milliseconds, callback)

> **getex**(`key`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.getex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2196

#### getex(key, unixTimeSecondsToken, unixTimeSeconds, callback)

> **getex**(`key`, `unixTimeSecondsToken`, `unixTimeSeconds`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.getex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2198

#### getex(key, unixTimeMillisecondsToken, unixTimeMilliseconds, callback)

> **getex**(`key`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.getex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2200

#### getex(key, persist, callback)

> **getex**(`key`, `persist`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **persist**: `"PERSIST"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.getex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2202

***

### getexBuffer()

#### getexBuffer(key, callback)

> **getexBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.getexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2193

#### getexBuffer(key, secondsToken, seconds, callback)

> **getexBuffer**(`key`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.getexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2195

#### getexBuffer(key, millisecondsToken, milliseconds, callback)

> **getexBuffer**(`key`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.getexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2197

#### getexBuffer(key, unixTimeSecondsToken, unixTimeSeconds, callback)

> **getexBuffer**(`key`, `unixTimeSecondsToken`, `unixTimeSeconds`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.getexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2199

#### getexBuffer(key, unixTimeMillisecondsToken, unixTimeMilliseconds, callback)

> **getexBuffer**(`key`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.getexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2201

#### getexBuffer(key, persist, callback)

> **getexBuffer**(`key`, `persist`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **persist**: `"PERSIST"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.getexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2203

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

`Redis.getMaxListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:774

***

### getrange()

> **getrange**(`key`, `start`, `end`, `callback`?): `Promise`\<`string`\>

Get a substring of the string stored at a key
- _group_: string
- _complexity_: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
- _since_: 2.4.0

#### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.getrange`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2210

***

### getrangeBuffer()

> **getrangeBuffer**(`key`, `start`, `end`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.getrangeBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2211

***

### getset()

> **getset**(`key`, `value`, `callback`?): `Promise`\<`string`\>

Set the string value of a key and return its old value
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.getset`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2218

***

### getsetBuffer()

> **getsetBuffer**(`key`, `value`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.getsetBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2219

***

### hdel()

#### hdel(args)

> **hdel**(...`args`): `Promise`\<`number`\>

Delete one or more hash fields
- _group_: hash
- _complexity_: O(N) where N is the number of fields to be removed.
- _since_: 2.0.0

##### Parameters

• ...**args**: [`RedisKey`, ...fields: (string \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.hdel`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2226

#### hdel(args)

> **hdel**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...fields: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.hdel`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2231

***

### hello()

#### hello(callback)

> **hello**(`callback`?): `Promise`\<`unknown`[]\>

Handshake with Redis
- _group_: connection
- _complexity_: O(1)
- _since_: 6.0.0

##### Parameters

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.hello`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2238

#### hello(protover, callback)

> **hello**(`protover`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **protover**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.hello`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2239

#### hello(protover, clientnameToken, clientname, callback)

> **hello**(`protover`, `clientnameToken`, `clientname`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **protover**: `string` \| `number`

• **clientnameToken**: `"SETNAME"`

• **clientname**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.hello`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2240

#### hello(protover, usernamePasswordToken, username, password, callback)

> **hello**(`protover`, `usernamePasswordToken`, `username`, `password`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **protover**: `string` \| `number`

• **usernamePasswordToken**: `"AUTH"`

• **username**: `string` \| `Buffer`

• **password**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.hello`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2241

#### hello(protover, usernamePasswordToken, username, password, clientnameToken, clientname, callback)

> **hello**(`protover`, `usernamePasswordToken`, `username`, `password`, `clientnameToken`, `clientname`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **protover**: `string` \| `number`

• **usernamePasswordToken**: `"AUTH"`

• **username**: `string` \| `Buffer`

• **password**: `string` \| `Buffer`

• **clientnameToken**: `"SETNAME"`

• **clientname**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.hello`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2242

***

### hexists()

> **hexists**(`key`, `field`, `callback`?): `Promise`\<`number`\>

Determine if a hash field exists
- _group_: hash
- _complexity_: O(1)
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.hexists`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2249

***

### hget()

> **hget**(`key`, `field`, `callback`?): `Promise`\<`string`\>

Get the value of a hash field
- _group_: hash
- _complexity_: O(1)
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.hget`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2256

***

### hgetall()

> **hgetall**(`key`, `callback`?): `Promise`\<`Record`\<`string`, `string`\>\>

Get all the fields and values in a hash
- _group_: hash
- _complexity_: O(N) where N is the size of the hash.
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Record`\<`string`, `string`\>\>

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

#### Inherited from

`Redis.hgetall`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2264

***

### hgetallBuffer()

> **hgetallBuffer**(`key`, `callback`?): `Promise`\<`Record`\<`string`, `Buffer`\>\>

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Record`\<`string`, `Buffer`\>\>

#### Returns

`Promise`\<`Record`\<`string`, `Buffer`\>\>

#### Inherited from

`Redis.hgetallBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2265

***

### hgetBuffer()

> **hgetBuffer**(`key`, `field`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.hgetBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2257

***

### hincrby()

> **hincrby**(`key`, `field`, `increment`, `callback`?): `Promise`\<`number`\>

Increment the integer value of a hash field by the given number
- _group_: hash
- _complexity_: O(1)
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.hincrby`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2272

***

### hincrbyfloat()

> **hincrbyfloat**(`key`, `field`, `increment`, `callback`?): `Promise`\<`string`\>

Increment the float value of a hash field by the given amount
- _group_: hash
- _complexity_: O(1)
- _since_: 2.6.0

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.hincrbyfloat`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2279

***

### hincrbyfloatBuffer()

> **hincrbyfloatBuffer**(`key`, `field`, `increment`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.hincrbyfloatBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2280

***

### hkeys()

> **hkeys**(`key`, `callback`?): `Promise`\<`string`[]\>

Get all the fields in a hash
- _group_: hash
- _complexity_: O(N) where N is the size of the hash.
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`Redis.hkeys`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2287

***

### hkeysBuffer()

> **hkeysBuffer**(`key`, `callback`?): `Promise`\<`Buffer`[]\>

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`[]\>

#### Returns

`Promise`\<`Buffer`[]\>

#### Inherited from

`Redis.hkeysBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2288

***

### hlen()

> **hlen**(`key`, `callback`?): `Promise`\<`number`\>

Get the number of fields in a hash
- _group_: hash
- _complexity_: O(1)
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.hlen`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2295

***

### hmget()

#### hmget(args)

> **hmget**(...`args`): `Promise`\<`string`[]\>

Get the values of all the given hash fields
- _group_: hash
- _complexity_: O(N) where N is the number of fields being requested.
- _since_: 2.0.0

##### Parameters

• ...**args**: [`RedisKey`, ...fields: (string \| Buffer)\[\], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.hmget`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2302

#### hmget(args)

> **hmget**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...fields: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.hmget`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2312

***

### hmgetBuffer()

#### hmgetBuffer(args)

> **hmgetBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...fields: (string \| Buffer)\[\], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.hmgetBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2307

#### hmgetBuffer(args)

> **hmgetBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...fields: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.hmgetBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2313

***

### hmset()

#### hmset(key, object, callback)

> **hmset**(`key`, `object`, `callback`?): `Promise`\<`"OK"`\>

Set multiple hash fields to multiple values
- _group_: hash
- _complexity_: O(N) where N is the number of fields being set.
- _since_: 2.0.0

##### Parameters

• **key**: `RedisKey`

• **object**: `object`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.hmset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2320

#### hmset(key, map, callback)

> **hmset**(`key`, `map`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **map**: `Map`\<`string` \| `number` \| `Buffer`, `string` \| `number` \| `Buffer`\>

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.hmset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2321

#### hmset(args)

> **hmset**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`RedisKey`, ...fieldValues: (string \| number \| Buffer)\[\], `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.hmset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2322

#### hmset(args)

> **hmset**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`RedisKey`, ...fieldValues: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.hmset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2327

***

### hrandfield()

#### hrandfield(key, callback)

> **hrandfield**(`key`, `callback`?): `Promise`\<`string` \| `unknown`[]\>

Get one or multiple random fields from a hash
- _group_: hash
- _complexity_: O(N) where N is the number of fields returned
- _since_: 6.2.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string` \| `unknown`[]\>

##### Returns

`Promise`\<`string` \| `unknown`[]\>

##### Inherited from

`Redis.hrandfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2334

#### hrandfield(key, count, callback)

> **hrandfield**(`key`, `count`, `callback`?): `Promise`\<`string` \| `unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string` \| `unknown`[]\>

##### Returns

`Promise`\<`string` \| `unknown`[]\>

##### Inherited from

`Redis.hrandfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2336

#### hrandfield(key, count, withvalues, callback)

> **hrandfield**(`key`, `count`, `withvalues`, `callback`?): `Promise`\<`string` \| `unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **withvalues**: `"WITHVALUES"`

• **callback?**: `Callback`\<`string` \| `unknown`[]\>

##### Returns

`Promise`\<`string` \| `unknown`[]\>

##### Inherited from

`Redis.hrandfield`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2338

***

### hrandfieldBuffer()

#### hrandfieldBuffer(key, callback)

> **hrandfieldBuffer**(`key`, `callback`?): `Promise`\<`unknown`[] \| `Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`[] \| `Buffer`\>

##### Returns

`Promise`\<`unknown`[] \| `Buffer`\>

##### Inherited from

`Redis.hrandfieldBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2335

#### hrandfieldBuffer(key, count, callback)

> **hrandfieldBuffer**(`key`, `count`, `callback`?): `Promise`\<`unknown`[] \| `Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`[] \| `Buffer`\>

##### Returns

`Promise`\<`unknown`[] \| `Buffer`\>

##### Inherited from

`Redis.hrandfieldBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2337

#### hrandfieldBuffer(key, count, withvalues, callback)

> **hrandfieldBuffer**(`key`, `count`, `withvalues`, `callback`?): `Promise`\<`unknown`[] \| `Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **withvalues**: `"WITHVALUES"`

• **callback?**: `Callback`\<`unknown`[] \| `Buffer`\>

##### Returns

`Promise`\<`unknown`[] \| `Buffer`\>

##### Inherited from

`Redis.hrandfieldBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2339

***

### hscan()

#### hscan(key, cursor, callback)

> **hscan**(`key`, `cursor`, `callback`?): `Promise`\<[`string`, `string`[]]\>

Incrementally iterate hash fields and associated values
- _group_: hash
- _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
- _since_: 2.8.0

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.hscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2346

#### hscan(key, cursor, countToken, count, callback)

> **hscan**(`key`, `cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.hscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2348

#### hscan(key, cursor, patternToken, pattern, callback)

> **hscan**(`key`, `cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.hscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2350

#### hscan(key, cursor, patternToken, pattern, countToken, count, callback)

> **hscan**(`key`, `cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.hscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2352

***

### hscanBuffer()

#### hscanBuffer(key, cursor, callback)

> **hscanBuffer**(`key`, `cursor`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.hscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2347

#### hscanBuffer(key, cursor, countToken, count, callback)

> **hscanBuffer**(`key`, `cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.hscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2349

#### hscanBuffer(key, cursor, patternToken, pattern, callback)

> **hscanBuffer**(`key`, `cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.hscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2351

#### hscanBuffer(key, cursor, patternToken, pattern, countToken, count, callback)

> **hscanBuffer**(`key`, `cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.hscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2353

***

### hscanBufferStream()

> **hscanBufferStream**(`key`, `options`?): `ScanStream`

#### Parameters

• **key**: `string`

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.hscanBufferStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:169

***

### hscanStream()

> **hscanStream**(`key`, `options`?): `ScanStream`

#### Parameters

• **key**: `string`

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.hscanStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:168

***

### hset()

#### hset(key, object, callback)

> **hset**(`key`, `object`, `callback`?): `Promise`\<`number`\>

Set the string value of a hash field
- _group_: hash
- _complexity_: O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.
- _since_: 2.0.0

##### Parameters

• **key**: `RedisKey`

• **object**: `object`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.hset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2360

#### hset(key, map, callback)

> **hset**(`key`, `map`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **map**: `Map`\<`string` \| `number` \| `Buffer`, `string` \| `number` \| `Buffer`\>

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.hset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2361

#### hset(args)

> **hset**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...fieldValues: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.hset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2362

#### hset(args)

> **hset**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...fieldValues: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.hset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2367

***

### hsetnx()

> **hsetnx**(`key`, `field`, `value`, `callback`?): `Promise`\<`number`\>

Set the value of a hash field, only if the field does not exist
- _group_: hash
- _complexity_: O(1)
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.hsetnx`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2374

***

### hstrlen()

> **hstrlen**(`key`, `field`, `callback`?): `Promise`\<`number`\>

Get the length of the value of a hash field
- _group_: hash
- _complexity_: O(1)
- _since_: 3.2.0

#### Parameters

• **key**: `RedisKey`

• **field**: `string` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.hstrlen`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2381

***

### hvals()

> **hvals**(`key`, `callback`?): `Promise`\<`string`[]\>

Get all the values in a hash
- _group_: hash
- _complexity_: O(N) where N is the size of the hash.
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`Redis.hvals`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2388

***

### hvalsBuffer()

> **hvalsBuffer**(`key`, `callback`?): `Promise`\<`Buffer`[]\>

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`[]\>

#### Returns

`Promise`\<`Buffer`[]\>

#### Inherited from

`Redis.hvalsBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2389

***

### incr()

> **incr**(`key`, `callback`?): `Promise`\<`number`\>

Increment the integer value of a key by one
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.incr`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2396

***

### incrby()

> **incrby**(`key`, `increment`, `callback`?): `Promise`\<`number`\>

Increment the integer value of a key by the given amount
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.incrby`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2403

***

### incrbyfloat()

> **incrbyfloat**(`key`, `increment`, `callback`?): `Promise`\<`string`\>

Increment the float value of a key by the given amount
- _group_: string
- _complexity_: O(1)
- _since_: 2.6.0

#### Parameters

• **key**: `RedisKey`

• **increment**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.incrbyfloat`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2410

***

### info()

#### info(callback)

> **info**(`callback`?): `Promise`\<`string`\>

Get information and statistics about the server
- _group_: server
- _complexity_: O(1)
- _since_: 1.0.0

##### Parameters

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.info`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2417

#### info(args)

> **info**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [...sections: (string \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.info`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2418

#### info(args)

> **info**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: (`string` \| `Buffer`)[]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.info`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2419

***

### keys()

> **keys**(`pattern`, `callback`?): `Promise`\<`string`[]\>

Find all keys matching the given pattern
- _group_: generic
- _complexity_: O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.
- _since_: 1.0.0

#### Parameters

• **pattern**: `string`

• **callback?**: `Callback`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`Redis.keys`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2426

***

### keysBuffer()

> **keysBuffer**(`pattern`, `callback`?): `Promise`\<`Buffer`[]\>

#### Parameters

• **pattern**: `string`

• **callback?**: `Callback`\<`Buffer`[]\>

#### Returns

`Promise`\<`Buffer`[]\>

#### Inherited from

`Redis.keysBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2427

***

### lastsave()

> **lastsave**(`callback`?): `Promise`\<`number`\>

Get the UNIX time stamp of the last successful save to disk
- _group_: server
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.lastsave`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2434

***

### latency()

#### latency(subcommand, callback)

> **latency**(`subcommand`, `callback`?): `Promise`\<`string`\>

Return a human readable latency analysis report.
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"DOCTOR"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2441

#### latency(subcommand, event, callback)

> **latency**(`subcommand`, `event`, `callback`?): `Promise`\<`string`\>

Return a latency graph for the event.
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"GRAPH"`

• **event**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2448

#### latency(subcommand, callback)

> **latency**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Show helpful text about the different subcommands.
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2455

#### latency(subcommand, callback)

> **latency**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Return the cumulative distribution of latencies of a subset of commands or all.
- _group_: server
- _complexity_: O(N) where N is the number of commands with latency information being retrieved.
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"HISTOGRAM"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2462

#### latency(args)

> **latency**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"HISTOGRAM"`, ...commands: (string \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2463

#### latency(args)

> **latency**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"HISTOGRAM"`, ...commands: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2468

#### latency(subcommand, event, callback)

> **latency**(`subcommand`, `event`, `callback`?): `Promise`\<`unknown`[]\>

Return timestamp-latency samples for the event.
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"HISTORY"`

• **event**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2475

#### latency(subcommand, callback)

> **latency**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Return the latest latency samples for all events.
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"LATEST"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2482

#### latency(subcommand, callback)

> **latency**(`subcommand`, `callback`?): `Promise`\<`number`\>

Reset latency data for one or more events.
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.13

##### Parameters

• **subcommand**: `"RESET"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2489

#### latency(args)

> **latency**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`"RESET"`, ...events: (string \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2490

#### latency(args)

> **latency**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`"RESET"`, ...events: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.latency`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2495

***

### lcs()

#### lcs(key1, key2, callback)

> **lcs**(`key1`, `key2`, `callback`?): `Promise`\<`unknown`\>

Find longest common substring
- _group_: string
- _complexity_: O(N*M) where N and M are the lengths of s1 and s2, respectively
- _since_: 7.0.0

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2502

#### lcs(key1, key2, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2503

#### lcs(key1, key2, lenToken, len, callback)

> **lcs**(`key1`, `key2`, `lenToken`, `len`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **lenToken**: `"MINMATCHLEN"`

• **len**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2504

#### lcs(key1, key2, lenToken, len, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `lenToken`, `len`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **lenToken**: `"MINMATCHLEN"`

• **len**: `string` \| `number`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2505

#### lcs(key1, key2, idx, callback)

> **lcs**(`key1`, `key2`, `idx`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **idx**: `"IDX"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2506

#### lcs(key1, key2, idx, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `idx`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **idx**: `"IDX"`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2507

#### lcs(key1, key2, idx, lenToken, len, callback)

> **lcs**(`key1`, `key2`, `idx`, `lenToken`, `len`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **idx**: `"IDX"`

• **lenToken**: `"MINMATCHLEN"`

• **len**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2508

#### lcs(key1, key2, idx, lenToken, len, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `idx`, `lenToken`, `len`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **idx**: `"IDX"`

• **lenToken**: `"MINMATCHLEN"`

• **len**: `string` \| `number`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2509

#### lcs(key1, key2, len, callback)

> **lcs**(`key1`, `key2`, `len`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2510

#### lcs(key1, key2, len, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `len`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2511

#### lcs(key1, key2, len, lenToken, len1, callback)

> **lcs**(`key1`, `key2`, `len`, `lenToken`, `len1`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **lenToken**: `"MINMATCHLEN"`

• **len1**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2512

#### lcs(key1, key2, len, lenToken, len1, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `len`, `lenToken`, `len1`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **lenToken**: `"MINMATCHLEN"`

• **len1**: `string` \| `number`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2513

#### lcs(key1, key2, len, idx, callback)

> **lcs**(`key1`, `key2`, `len`, `idx`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **idx**: `"IDX"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2514

#### lcs(key1, key2, len, idx, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `len`, `idx`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **idx**: `"IDX"`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2515

#### lcs(key1, key2, len, idx, lenToken, len1, callback)

> **lcs**(`key1`, `key2`, `len`, `idx`, `lenToken`, `len1`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **idx**: `"IDX"`

• **lenToken**: `"MINMATCHLEN"`

• **len1**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2516

#### lcs(key1, key2, len, idx, lenToken, len1, withmatchlen, callback)

> **lcs**(`key1`, `key2`, `len`, `idx`, `lenToken`, `len1`, `withmatchlen`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key1**: `RedisKey`

• **key2**: `RedisKey`

• **len**: `"LEN"`

• **idx**: `"IDX"`

• **lenToken**: `"MINMATCHLEN"`

• **len1**: `string` \| `number`

• **withmatchlen**: `"WITHMATCHLEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.lcs`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2517

***

### lindex()

> **lindex**(`key`, `index`, `callback`?): `Promise`\<`string`\>

Get an element from a list by its index
- _group_: list
- _complexity_: O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **index**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.lindex`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2524

***

### lindexBuffer()

> **lindexBuffer**(`key`, `index`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **index**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.lindexBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2525

***

### linsert()

#### linsert(key, before, pivot, element, callback)

> **linsert**(`key`, `before`, `pivot`, `element`, `callback`?): `Promise`\<`number`\>

Insert an element before or after another element in a list
- _group_: list
- _complexity_: O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).
- _since_: 2.2.0

##### Parameters

• **key**: `RedisKey`

• **before**: `"BEFORE"`

• **pivot**: `string` \| `number` \| `Buffer`

• **element**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.linsert`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2532

#### linsert(key, after, pivot, element, callback)

> **linsert**(`key`, `after`, `pivot`, `element`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **after**: `"AFTER"`

• **pivot**: `string` \| `number` \| `Buffer`

• **element**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.linsert`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2533

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event being listened for

• **listener?**: `Function`

The event handler function

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

`Redis.listenerCount`

#### Defined in

node\_modules/@types/node/events.d.ts:868

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

`Redis.listeners`

#### Defined in

node\_modules/@types/node/events.d.ts:787

***

### llen()

> **llen**(`key`, `callback`?): `Promise`\<`number`\>

Get the length of a list
- _group_: list
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.llen`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2540

***

### lmove()

#### lmove(source, destination, left, left1, callback)

> **lmove**(`source`, `destination`, `left`, `left1`, `callback`?): `Promise`\<`string`\>

Pop an element from a list, push it to another list and return it
- _group_: list
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **left1**: `"LEFT"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.lmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2547

#### lmove(source, destination, left, right, callback)

> **lmove**(`source`, `destination`, `left`, `right`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **right**: `"RIGHT"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.lmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2549

#### lmove(source, destination, right, left, callback)

> **lmove**(`source`, `destination`, `right`, `left`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **left**: `"LEFT"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.lmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2551

#### lmove(source, destination, right, right1, callback)

> **lmove**(`source`, `destination`, `right`, `right1`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **right1**: `"RIGHT"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.lmove`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2553

***

### lmoveBuffer()

#### lmoveBuffer(source, destination, left, left1, callback)

> **lmoveBuffer**(`source`, `destination`, `left`, `left1`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **left1**: `"LEFT"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.lmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2548

#### lmoveBuffer(source, destination, left, right, callback)

> **lmoveBuffer**(`source`, `destination`, `left`, `right`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **left**: `"LEFT"`

• **right**: `"RIGHT"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.lmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2550

#### lmoveBuffer(source, destination, right, left, callback)

> **lmoveBuffer**(`source`, `destination`, `right`, `left`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **left**: `"LEFT"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.lmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2552

#### lmoveBuffer(source, destination, right, right1, callback)

> **lmoveBuffer**(`source`, `destination`, `right`, `right1`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **right**: `"RIGHT"`

• **right1**: `"RIGHT"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.lmoveBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2554

***

### lmpop()

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

Pop elements from a list
- _group_: list
- _complexity_: O(N+M) where N is the number of provided keys and M is the number of elements returned.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2561

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2573

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2585

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2587

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2589

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2605

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2621

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2635

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2649

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2661

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2673

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2675

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2677

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`string`, `string`[]]\>]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2693

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2709

#### lmpop(args)

> **lmpop**(...`args`): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.lmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2723

***

### lmpopBuffer()

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2567

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2579

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2586

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2588

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2597

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2613

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2628

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LEFT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2642

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2655

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2667

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2674

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2676

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2685

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`, `Callback`\<[`Buffer`, `Buffer`[]]\>]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2701

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2716

#### lmpopBuffer(args)

> **lmpopBuffer**(...`args`): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"RIGHT"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.lmpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2730

***

### lolwut()

#### lolwut(callback)

> **lolwut**(`callback`?): `Promise`\<`string`\>

Display some computer art and the Redis version
- _group_: server
- _complexity_: undefined
- _since_: 5.0.0

##### Parameters

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.lolwut`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2743

#### lolwut(versionToken, version, callback)

> **lolwut**(`versionToken`, `version`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **versionToken**: `"VERSION"`

• **version**: `string` \| `number`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.lolwut`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2744

***

### lpop()

#### lpop(key, callback)

> **lpop**(`key`, `callback`?): `Promise`\<`string`\>

Remove and get the first elements in a list
- _group_: list
- _complexity_: O(N) where N is the number of elements returned
- _since_: 1.0.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.lpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2751

#### lpop(key, count, callback)

> **lpop**(`key`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.lpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2753

***

### lpopBuffer()

#### lpopBuffer(key, callback)

> **lpopBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.lpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2752

#### lpopBuffer(key, count, callback)

> **lpopBuffer**(`key`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.lpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2754

***

### lpos()

#### lpos(key, element, callback)

> **lpos**(`key`, `element`, `callback`?): `Promise`\<`number`\>

Return the index of matching elements on a list
- _group_: list
- _complexity_: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
- _since_: 6.0.6

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2761

#### lpos(key, element, lenToken, len, callback)

> **lpos**(`key`, `element`, `lenToken`, `len`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **lenToken**: `"MAXLEN"`

• **len**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2762

#### lpos(key, element, numMatchesToken, numMatches, callback)

> **lpos**(`key`, `element`, `numMatchesToken`, `numMatches`, `callback`?): `Promise`\<`number`[]\>

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **numMatchesToken**: `"COUNT"`

• **numMatches**: `string` \| `number`

• **callback?**: `Callback`\<`number`[]\>

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2763

#### lpos(key, element, numMatchesToken, numMatches, lenToken, len, callback)

> **lpos**(`key`, `element`, `numMatchesToken`, `numMatches`, `lenToken`, `len`, `callback`?): `Promise`\<`number`[]\>

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **numMatchesToken**: `"COUNT"`

• **numMatches**: `string` \| `number`

• **lenToken**: `"MAXLEN"`

• **len**: `string` \| `number`

• **callback?**: `Callback`\<`number`[]\>

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2764

#### lpos(key, element, rankToken, rank, callback)

> **lpos**(`key`, `element`, `rankToken`, `rank`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **rankToken**: `"RANK"`

• **rank**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2765

#### lpos(key, element, rankToken, rank, lenToken, len, callback)

> **lpos**(`key`, `element`, `rankToken`, `rank`, `lenToken`, `len`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **rankToken**: `"RANK"`

• **rank**: `string` \| `number`

• **lenToken**: `"MAXLEN"`

• **len**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2766

#### lpos(key, element, rankToken, rank, numMatchesToken, numMatches, callback)

> **lpos**(`key`, `element`, `rankToken`, `rank`, `numMatchesToken`, `numMatches`, `callback`?): `Promise`\<`number`[]\>

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **rankToken**: `"RANK"`

• **rank**: `string` \| `number`

• **numMatchesToken**: `"COUNT"`

• **numMatches**: `string` \| `number`

• **callback?**: `Callback`\<`number`[]\>

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2767

#### lpos(key, element, rankToken, rank, numMatchesToken, numMatches, lenToken, len, callback)

> **lpos**(`key`, `element`, `rankToken`, `rank`, `numMatchesToken`, `numMatches`, `lenToken`, `len`, `callback`?): `Promise`\<`number`[]\>

##### Parameters

• **key**: `RedisKey`

• **element**: `string` \| `number` \| `Buffer`

• **rankToken**: `"RANK"`

• **rank**: `string` \| `number`

• **numMatchesToken**: `"COUNT"`

• **numMatches**: `string` \| `number`

• **lenToken**: `"MAXLEN"`

• **len**: `string` \| `number`

• **callback?**: `Callback`\<`number`[]\>

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.lpos`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2768

***

### lpush()

#### lpush(args)

> **lpush**(...`args`): `Promise`\<`number`\>

Prepend one or multiple elements to a list
- _group_: list
- _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpush`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2775

#### lpush(args)

> **lpush**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpush`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2780

***

### lpushx()

#### lpushx(args)

> **lpushx**(...`args`): `Promise`\<`number`\>

Prepend an element to a list, only if the list exists
- _group_: list
- _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
- _since_: 2.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpushx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2787

#### lpushx(args)

> **lpushx**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.lpushx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2792

***

### lrange()

> **lrange**(`key`, `start`, `stop`, `callback`?): `Promise`\<`string`[]\>

Get a range of elements from a list
- _group_: list
- _complexity_: O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`Redis.lrange`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2799

***

### lrangeBuffer()

> **lrangeBuffer**(`key`, `start`, `stop`, `callback`?): `Promise`\<`Buffer`[]\>

#### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

#### Returns

`Promise`\<`Buffer`[]\>

#### Inherited from

`Redis.lrangeBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2800

***

### lrem()

> **lrem**(`key`, `count`, `element`, `callback`?): `Promise`\<`number`\>

Remove elements from a list
- _group_: list
- _complexity_: O(N+M) where N is the length of the list and M is the number of elements removed.
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **element**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.lrem`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2807

***

### lset()

> **lset**(`key`, `index`, `element`, `callback`?): `Promise`\<`"OK"`\>

Set the value of an element in a list by its index
- _group_: list
- _complexity_: O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **index**: `string` \| `number`

• **element**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.lset`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2814

***

### ltrim()

> **ltrim**(`key`, `start`, `stop`, `callback`?): `Promise`\<`"OK"`\>

Trim a list to the specified range
- _group_: list
- _complexity_: O(N) where N is the number of elements to be removed by the operation.
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.ltrim`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2821

***

### memory()

#### memory(subcommand, callback)

> **memory**(`subcommand`, `callback`?): `Promise`\<`string`\>

Outputs memory problems report
- _group_: server
- _complexity_: O(1)
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"DOCTOR"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.memory`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2828

#### memory(subcommand, callback)

> **memory**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Show helpful text about the different subcommands
- _group_: server
- _complexity_: O(1)
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.memory`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2835

#### memory(subcommand, callback)

> **memory**(`subcommand`, `callback`?): `Promise`\<`string`\>

Show allocator internal stats
- _group_: server
- _complexity_: Depends on how much memory is allocated, could be slow
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"MALLOC-STATS"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.memory`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2842

#### memory(subcommand, callback)

> **memory**(`subcommand`, `callback`?): `Promise`\<`"OK"`\>

Ask the allocator to release memory
- _group_: server
- _complexity_: Depends on how much memory is allocated, could be slow
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"PURGE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.memory`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2849

#### memory(subcommand, callback)

> **memory**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Show memory usage details
- _group_: server
- _complexity_: O(1)
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"STATS"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.memory`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2856

#### memory(subcommand, key, callback)

> **memory**(`subcommand`, `key`, `callback`?): `Promise`\<`number`\>

Estimate the memory usage of a key
- _group_: server
- _complexity_: O(N) where N is the number of samples.
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"USAGE"`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.memory`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2863

#### memory(subcommand, key, countToken, count, callback)

> **memory**(`subcommand`, `key`, `countToken`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **subcommand**: `"USAGE"`

• **key**: `RedisKey`

• **countToken**: `"SAMPLES"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.memory`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2864

***

### mget()

#### mget(args)

> **mget**(...`args`): `Promise`\<`string`[]\>

Get the values of all the given keys
- _group_: string
- _complexity_: O(N) where N is the number of keys to retrieve.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.mget`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2871

#### mget(args)

> **mget**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.mget`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2873

#### mget(args)

> **mget**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.mget`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2875

#### mget(args)

> **mget**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.mget`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2877

***

### mgetBuffer()

#### mgetBuffer(args)

> **mgetBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.mgetBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2872

#### mgetBuffer(args)

> **mgetBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.mgetBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2874

#### mgetBuffer(args)

> **mgetBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.mgetBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2876

#### mgetBuffer(args)

> **mgetBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.mgetBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2878

***

### migrate()

#### migrate(args)

> **migrate**(...`args`): `Promise`\<`"OK"`\>

Atomically transfer a key from a Redis instance to another one.
- _group_: generic
- _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
- _since_: 2.6.0

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.migrate`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2885

#### migrate(args)

> **migrate**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`string` \| `Buffer`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.migrate`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2891

***

### module()

#### module(subcommand, callback)

> **module**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: server
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2902

#### module(subcommand, callback)

> **module**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

List all modules loaded by the server
- _group_: server
- _complexity_: O(N) where N is the number of loaded modules.
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"LIST"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2909

#### module(subcommand, path, callback)

> **module**(`subcommand`, `path`, `callback`?): `Promise`\<`unknown`\>

Load a module
- _group_: server
- _complexity_: O(1)
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"LOAD"`

• **path**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2916

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOAD"`, `string` \| `Buffer`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2917

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOAD"`, `string` \| `Buffer`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2923

#### module(subcommand, path, callback)

> **module**(`subcommand`, `path`, `callback`?): `Promise`\<`unknown`\>

Load a module with extended parameters
- _group_: server
- _complexity_: O(1)
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"LOADEX"`

• **path**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2934

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOADEX"`, `string` \| `Buffer`, `"ARGS"`, ...args: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2935

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOADEX"`, `string` \| `Buffer`, `"ARGS"`, ...args: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2942

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOADEX"`, `string` \| `Buffer`, `"CONFIG"`, ...configs: (string \| number \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2948

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOADEX"`, `string` \| `Buffer`, `"CONFIG"`, ...configs: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2955

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOADEX"`, `string` \| `Buffer`, `"CONFIG"`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2961

#### module(args)

> **module**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"LOADEX"`, `string` \| `Buffer`, `"CONFIG"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2968

#### module(subcommand, name, callback)

> **module**(`subcommand`, `name`, `callback`?): `Promise`\<`unknown`\>

Unload a module
- _group_: server
- _complexity_: O(1)
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"UNLOAD"`

• **name**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.module`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2980

***

### monitor()

> **monitor**(`callback`?): `Promise`\<`Redis`\>

Listen for all requests received by the server in real time.

This command will create a new connection to Redis and send a
MONITOR command via the new connection in order to avoid disturbing
the current connection.

#### Parameters

• **callback?**: `Callback`\<`Redis`\>

The callback function. If omit, a promise will be returned.

#### Returns

`Promise`\<`Redis`\>

#### Example

```js
var redis = new Redis();
redis.monitor(function (err, monitor) {
  // Entering monitoring mode.
  monitor.on('monitor', function (time, args, source, database) {
    console.log(time + ": " + util.inspect(args));
  });
});

// supports promise as well as other commands
redis.monitor().then(function (monitor) {
  monitor.on('monitor', function (time, args, source, database) {
    console.log(time + ": " + util.inspect(args));
  });
});
```

#### Inherited from

`Redis.monitor`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:144

***

### move()

> **move**(`key`, `db`, `callback`?): `Promise`\<`number`\>

Move a key to another database
- _group_: generic
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **db**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.move`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2987

***

### mset()

#### mset(object, callback)

> **mset**(`object`, `callback`?): `Promise`\<`"OK"`\>

Set multiple keys to multiple values
- _group_: string
- _complexity_: O(N) where N is the number of keys to set.
- _since_: 1.0.1

##### Parameters

• **object**: `object`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.mset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2994

#### mset(map, callback)

> **mset**(`map`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **map**: `Map`\<`string` \| `number` \| `Buffer`, `string` \| `number` \| `Buffer`\>

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.mset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2995

#### mset(args)

> **mset**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [...keyValues: (number \| RedisKey)\[\], `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.mset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:2996

#### mset(args)

> **mset**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: (`number` \| `RedisKey`)[]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.mset`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3000

***

### msetnx()

#### msetnx(object, callback)

> **msetnx**(`object`, `callback`?): `Promise`\<`"OK"`\>

Set multiple keys to multiple values, only if none of the keys exist
- _group_: string
- _complexity_: O(N) where N is the number of keys to set.
- _since_: 1.0.1

##### Parameters

• **object**: `object`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.msetnx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3007

#### msetnx(map, callback)

> **msetnx**(`map`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **map**: `Map`\<`string` \| `number` \| `Buffer`, `string` \| `number` \| `Buffer`\>

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.msetnx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3008

#### msetnx(args)

> **msetnx**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [...keyValues: (number \| RedisKey)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.msetnx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3009

#### msetnx(args)

> **msetnx**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: (`number` \| `RedisKey`)[]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.msetnx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3013

***

### multi()

#### multi(options)

> **multi**(`options`): `Promise`\<`"OK"`\>

##### Parameters

• **options**

• **options.pipeline**: `false`

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.multi`

##### Defined in

node\_modules/ioredis/built/transaction.d.ts:4

#### multi()

> **multi**(): `ChainableCommander`

##### Returns

`ChainableCommander`

##### Inherited from

`Redis.multi`

##### Defined in

node\_modules/ioredis/built/transaction.d.ts:7

#### multi(options)

> **multi**(`options`): `ChainableCommander`

##### Parameters

• **options**

• **options.pipeline**: `true`

##### Returns

`ChainableCommander`

##### Inherited from

`Redis.multi`

##### Defined in

node\_modules/ioredis/built/transaction.d.ts:8

#### multi(commands)

> **multi**(`commands`?): `ChainableCommander`

##### Parameters

• **commands?**: `unknown`[][]

##### Returns

`ChainableCommander`

##### Inherited from

`Redis.multi`

##### Defined in

node\_modules/ioredis/built/transaction.d.ts:11

***

### object()

#### object(subcommand, key, callback)

> **object**(`subcommand`, `key`, `callback`?): `Promise`\<`unknown`\>

Inspect the internal encoding of a Redis object
- _group_: generic
- _complexity_: O(1)
- _since_: 2.2.3

##### Parameters

• **subcommand**: `"ENCODING"`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.object`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3020

#### object(subcommand, key, callback)

> **object**(`subcommand`, `key`, `callback`?): `Promise`\<`unknown`\>

Get the logarithmic access frequency counter of a Redis object
- _group_: generic
- _complexity_: O(1)
- _since_: 4.0.0

##### Parameters

• **subcommand**: `"FREQ"`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.object`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3027

#### object(subcommand, callback)

> **object**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: generic
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.object`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3034

#### object(subcommand, key, callback)

> **object**(`subcommand`, `key`, `callback`?): `Promise`\<`unknown`\>

Get the time since a Redis object was last accessed
- _group_: generic
- _complexity_: O(1)
- _since_: 2.2.3

##### Parameters

• **subcommand**: `"IDLETIME"`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.object`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3041

#### object(subcommand, key, callback)

> **object**(`subcommand`, `key`, `callback`?): `Promise`\<`unknown`\>

Get the number of references to the value of the key
- _group_: generic
- _complexity_: O(1)
- _since_: 2.2.3

##### Parameters

• **subcommand**: `"REFCOUNT"`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.object`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3048

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

`Redis.off`

#### Defined in

node\_modules/@types/node/events.d.ts:747

***

### on()

#### on(event, cb)

> **on**(`event`, `cb`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"message"`

• **cb**

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Redis.on`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:212

#### on(event, cb)

> **on**(`event`, `cb`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"messageBuffer"`

• **cb**

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Redis.on`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:214

#### on(event, cb)

> **on**(`event`, `cb`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"pmessage"`

• **cb**

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Redis.on`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:216

#### on(event, cb)

> **on**(`event`, `cb`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"pmessageBuffer"`

• **cb**

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Redis.on`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:218

#### on(event, cb)

> **on**(`event`, `cb`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"error"`

• **cb**

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Redis.on`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:220

#### on(event, cb)

> **on**(`event`, `cb`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `RedisStatus`

• **cb**

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Redis.on`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:222

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Redis.on`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:224

***

### once()

#### once(event, cb)

> **once**(`event`, `cb`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"message"`

• **cb**

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Redis.once`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:213

#### once(event, cb)

> **once**(`event`, `cb`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"messageBuffer"`

• **cb**

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Redis.once`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:215

#### once(event, cb)

> **once**(`event`, `cb`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"pmessage"`

• **cb**

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Redis.once`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:217

#### once(event, cb)

> **once**(`event`, `cb`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"pmessageBuffer"`

• **cb**

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Redis.once`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:219

#### once(event, cb)

> **once**(`event`, `cb`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `"error"`

• **cb**

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Redis.once`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:221

#### once(event, cb)

> **once**(`event`, `cb`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `RedisStatus`

• **cb**

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Redis.once`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:223

#### once(event, listener)

> **once**(`event`, `listener`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Redis.once`

##### Defined in

node\_modules/ioredis/built/Redis.d.ts:225

***

### persist()

> **persist**(`key`, `callback`?): `Promise`\<`number`\>

Remove the expiration from a key
- _group_: generic
- _complexity_: O(1)
- _since_: 2.2.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.persist`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3055

***

### pexpire()

#### pexpire(key, milliseconds, callback)

> **pexpire**(`key`, `milliseconds`, `callback`?): `Promise`\<`number`\>

Set a key's time to live in milliseconds
- _group_: generic
- _complexity_: O(1)
- _since_: 2.6.0

##### Parameters

• **key**: `RedisKey`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3062

#### pexpire(key, milliseconds, nx, callback)

> **pexpire**(`key`, `milliseconds`, `nx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **milliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3063

#### pexpire(key, milliseconds, xx, callback)

> **pexpire**(`key`, `milliseconds`, `xx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **milliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3064

#### pexpire(key, milliseconds, gt, callback)

> **pexpire**(`key`, `milliseconds`, `gt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **milliseconds**: `string` \| `number`

• **gt**: `"GT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3065

#### pexpire(key, milliseconds, lt, callback)

> **pexpire**(`key`, `milliseconds`, `lt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **milliseconds**: `string` \| `number`

• **lt**: `"LT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpire`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3066

***

### pexpireat()

#### pexpireat(key, unixTimeMilliseconds, callback)

> **pexpireat**(`key`, `unixTimeMilliseconds`, `callback`?): `Promise`\<`number`\>

Set the expiration for a key as a UNIX timestamp specified in milliseconds
- _group_: generic
- _complexity_: O(1)
- _since_: 2.6.0

##### Parameters

• **key**: `RedisKey`

• **unixTimeMilliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3073

#### pexpireat(key, unixTimeMilliseconds, nx, callback)

> **pexpireat**(`key`, `unixTimeMilliseconds`, `nx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeMilliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3074

#### pexpireat(key, unixTimeMilliseconds, xx, callback)

> **pexpireat**(`key`, `unixTimeMilliseconds`, `xx`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeMilliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3075

#### pexpireat(key, unixTimeMilliseconds, gt, callback)

> **pexpireat**(`key`, `unixTimeMilliseconds`, `gt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeMilliseconds**: `string` \| `number`

• **gt**: `"GT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3076

#### pexpireat(key, unixTimeMilliseconds, lt, callback)

> **pexpireat**(`key`, `unixTimeMilliseconds`, `lt`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **unixTimeMilliseconds**: `string` \| `number`

• **lt**: `"LT"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pexpireat`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3077

***

### pexpiretime()

> **pexpiretime**(`key`, `callback`?): `Promise`\<`number`\>

Get the expiration Unix timestamp for a key in milliseconds
- _group_: generic
- _complexity_: O(1)
- _since_: 7.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.pexpiretime`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3084

***

### pfadd()

#### pfadd(key, callback)

> **pfadd**(`key`, `callback`?): `Promise`\<`number`\>

Adds the specified elements to the specified HyperLogLog.
- _group_: hyperloglog
- _complexity_: O(1) to add every element.
- _since_: 2.8.9

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pfadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3091

#### pfadd(args)

> **pfadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pfadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3092

#### pfadd(args)

> **pfadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pfadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3097

***

### pfcount()

#### pfcount(args)

> **pfcount**(...`args`): `Promise`\<`number`\>

Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
- _group_: hyperloglog
- _complexity_: O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.
- _since_: 2.8.9

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pfcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3104

#### pfcount(args)

> **pfcount**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pfcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3105

#### pfcount(args)

> **pfcount**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pfcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3106

#### pfcount(args)

> **pfcount**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.pfcount`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3107

***

### pfdebug()

> **pfdebug**(`subcommand`, `key`, `callback`?): `Promise`\<`unknown`\>

Internal commands for debugging HyperLogLog values
- _group_: hyperloglog
- _complexity_: N/A
- _since_: 2.8.9

#### Parameters

• **subcommand**: `string` \| `Buffer`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.pfdebug`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3114

***

### pfmerge()

#### pfmerge(args)

> **pfmerge**(...`args`): `Promise`\<`"OK"`\>

Merge N different HyperLogLogs into a single one.
- _group_: hyperloglog
- _complexity_: O(N) to merge N HyperLogLogs, but with high constant times.
- _since_: 2.8.9

##### Parameters

• ...**args**: [`RedisKey`, `...sourcekeys: RedisKey[]`, `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.pfmerge`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3121

#### pfmerge(args)

> **pfmerge**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[], `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.pfmerge`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3126

#### pfmerge(args)

> **pfmerge**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`RedisKey`, `...sourcekeys: RedisKey[]`]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.pfmerge`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3131

#### pfmerge(args)

> **pfmerge**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[]]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.pfmerge`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3132

***

### pfselftest()

> **pfselftest**(`callback`?): `Promise`\<`unknown`\>

An internal command for testing HyperLogLog values
- _group_: hyperloglog
- _complexity_: N/A
- _since_: 2.8.9

#### Parameters

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.pfselftest`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3139

***

### ping()

#### ping(callback)

> **ping**(`callback`?): `Promise`\<`"PONG"`\>

Ping the server
- _group_: connection
- _complexity_: O(1)
- _since_: 1.0.0

##### Parameters

• **callback?**: `Callback`\<`"PONG"`\>

##### Returns

`Promise`\<`"PONG"`\>

##### Inherited from

`Redis.ping`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3146

#### ping(message, callback)

> **ping**(`message`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **message**: `string` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.ping`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3147

***

### pingBuffer()

> **pingBuffer**(`message`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **message**: `string` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.pingBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3148

***

### pipeline()

> **pipeline**(`commands`?): `ChainableCommander`

#### Parameters

• **commands?**: `unknown`[][]

#### Returns

`ChainableCommander`

#### Inherited from

`Redis.pipeline`

#### Defined in

node\_modules/ioredis/built/transaction.d.ts:3

***

### prependListener()

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v6.0.0

#### Inherited from

`Redis.prependListener`

#### Defined in

node\_modules/@types/node/events.d.ts:886

***

### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Since

v6.0.0

#### Inherited from

`Redis.prependOnceListener`

#### Defined in

node\_modules/@types/node/events.d.ts:902

***

### psetex()

> **psetex**(`key`, `milliseconds`, `value`, `callback`?): `Promise`\<`unknown`\>

Set the value and expiration in milliseconds of a key
- _group_: string
- _complexity_: O(1)
- _since_: 2.6.0

#### Parameters

• **key**: `RedisKey`

• **milliseconds**: `string` \| `number`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.psetex`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3155

***

### psubscribe()

#### psubscribe(args)

> **psubscribe**(...`args`): `Promise`\<`unknown`\>

Listen for messages published to channels matching the given patterns
- _group_: pubsub
- _complexity_: O(N) where N is the number of patterns the client is already subscribed to.
- _since_: 2.0.0

##### Parameters

• ...**args**: [`...patterns: string[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.psubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3162

#### psubscribe(args)

> **psubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: `string`[]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.psubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3163

***

### psync()

> **psync**(`replicationid`, `offset`, `callback`?): `Promise`\<`unknown`\>

Internal command used for replication
- _group_: server
- _complexity_: undefined
- _since_: 2.8.0

#### Parameters

• **replicationid**: `string` \| `number` \| `Buffer`

• **offset**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.psync`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3170

***

### pttl()

> **pttl**(`key`, `callback`?): `Promise`\<`number`\>

Get the time to live for a key in milliseconds
- _group_: generic
- _complexity_: O(1)
- _since_: 2.6.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.pttl`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3177

***

### publish()

> **publish**(`channel`, `message`, `callback`?): `Promise`\<`number`\>

Post a message to a channel
- _group_: pubsub
- _complexity_: O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).
- _since_: 2.0.0

#### Parameters

• **channel**: `string` \| `Buffer`

• **message**: `string` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.publish`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3184

***

### pubsub()

#### pubsub(subcommand, callback)

> **pubsub**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

List active channels
- _group_: pubsub
- _complexity_: O(N) where N is the number of active channels, and assuming constant time pattern matching (relatively short channels and patterns)
- _since_: 2.8.0

##### Parameters

• **subcommand**: `"CHANNELS"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3191

#### pubsub(subcommand, pattern, callback)

> **pubsub**(`subcommand`, `pattern`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"CHANNELS"`

• **pattern**: `string`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3192

#### pubsub(subcommand, callback)

> **pubsub**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Show helpful text about the different subcommands
- _group_: pubsub
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3199

#### pubsub(subcommand, callback)

> **pubsub**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Get the count of unique patterns pattern subscriptions
- _group_: pubsub
- _complexity_: O(1)
- _since_: 2.8.0

##### Parameters

• **subcommand**: `"NUMPAT"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3206

#### pubsub(subcommand, callback)

> **pubsub**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Get the count of subscribers for channels
- _group_: pubsub
- _complexity_: O(N) for the NUMSUB subcommand, where N is the number of requested channels
- _since_: 2.8.0

##### Parameters

• **subcommand**: `"NUMSUB"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3213

#### pubsub(args)

> **pubsub**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"NUMSUB"`, ...channels: (string \| Buffer)\[\], `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3214

#### pubsub(args)

> **pubsub**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"NUMSUB"`, ...channels: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3219

#### pubsub(subcommand, callback)

> **pubsub**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

List active shard channels
- _group_: pubsub
- _complexity_: O(N) where N is the number of active shard channels, and assuming constant time pattern matching (relatively short shard channels).
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"SHARDCHANNELS"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3226

#### pubsub(subcommand, pattern, callback)

> **pubsub**(`subcommand`, `pattern`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **subcommand**: `"SHARDCHANNELS"`

• **pattern**: `string`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3227

#### pubsub(subcommand, callback)

> **pubsub**(`subcommand`, `callback`?): `Promise`\<`unknown`[]\>

Get the count of subscribers for shard channels
- _group_: pubsub
- _complexity_: O(N) for the SHARDNUMSUB subcommand, where N is the number of requested shard channels
- _since_: 7.0.0

##### Parameters

• **subcommand**: `"SHARDNUMSUB"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3234

#### pubsub(args)

> **pubsub**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"SHARDNUMSUB"`, ...shardchannels: (string \| Buffer)\[\], `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3235

#### pubsub(args)

> **pubsub**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"SHARDNUMSUB"`, ...shardchannels: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.pubsub`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3240

***

### punsubscribe()

#### punsubscribe(callback)

> **punsubscribe**(`callback`?): `Promise`\<`unknown`\>

Stop listening for messages posted to channels matching the given patterns
- _group_: pubsub
- _complexity_: O(N+M) where N is the number of patterns the client is already subscribed and M is the number of total patterns subscribed in the system (by any client).
- _since_: 2.0.0

##### Parameters

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.punsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3247

#### punsubscribe(args)

> **punsubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`...patterns: string[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.punsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3248

#### punsubscribe(args)

> **punsubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: `string`[]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.punsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3249

***

### quit()

> **quit**(`callback`?): `Promise`\<`"OK"`\>

Close the connection
- _group_: connection
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.quit`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3256

***

### randomkey()

> **randomkey**(`callback`?): `Promise`\<`string`\>

Return a random key from the keyspace
- _group_: generic
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.randomkey`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3263

***

### randomkeyBuffer()

> **randomkeyBuffer**(`callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.randomkeyBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3264

***

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

`Redis.rawListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:818

***

### readonly()

> **readonly**(`callback`?): `Promise`\<`"OK"`\>

Enables read queries for a connection to a cluster replica node
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.readonly`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3271

***

### readwrite()

> **readwrite**(`callback`?): `Promise`\<`"OK"`\>

Disables read queries for a connection to a cluster replica node
- _group_: cluster
- _complexity_: O(1)
- _since_: 3.0.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.readwrite`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3278

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **eventName?**: `string` \| `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`Redis.removeAllListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:758

***

### removeListener()

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`Redis.removeListener`

#### Defined in

node\_modules/@types/node/events.d.ts:742

***

### rename()

> **rename**(`key`, `newkey`, `callback`?): `Promise`\<`"OK"`\>

Rename a key
- _group_: generic
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **newkey**: `RedisKey`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.rename`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3285

***

### renamenx()

> **renamenx**(`key`, `newkey`, `callback`?): `Promise`\<`number`\>

Rename a key, only if the new key does not exist
- _group_: generic
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **newkey**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.renamenx`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3292

***

### replconf()

> **replconf**(`callback`?): `Promise`\<`unknown`\>

An internal command for configuring the replication stream
- _group_: server
- _complexity_: O(1)
- _since_: 3.0.0

#### Parameters

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.replconf`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3299

***

### replicaof()

> **replicaof**(`host`, `port`, `callback`?): `Promise`\<`"OK"`\>

Make the server a replica of another instance, or promote it as master.
- _group_: server
- _complexity_: O(1)
- _since_: 5.0.0

#### Parameters

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.replicaof`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3306

***

### reset()

> **reset**(`callback`?): `Promise`\<`"OK"`\>

Reset the connection
- _group_: connection
- _complexity_: O(1)
- _since_: 6.2.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.reset`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3313

***

### restore()

#### restore(key, ttl, serializedValue, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `callback`?): `Promise`\<`"OK"`\>

Create a key using the provided serialized value, previously obtained using DUMP.
- _group_: generic
- _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
- _since_: 2.6.0

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3320

#### restore(key, ttl, serializedValue, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3321

#### restore(key, ttl, serializedValue, secondsToken, seconds, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3322

#### restore(key, ttl, serializedValue, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3323

#### restore(key, ttl, serializedValue, absttl, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `absttl`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3324

#### restore(key, ttl, serializedValue, absttl, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `absttl`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3325

#### restore(key, ttl, serializedValue, absttl, secondsToken, seconds, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `absttl`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3326

#### restore(key, ttl, serializedValue, absttl, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `absttl`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3327

#### restore(key, ttl, serializedValue, replace, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3328

#### restore(key, ttl, serializedValue, replace, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3329

#### restore(key, ttl, serializedValue, replace, secondsToken, seconds, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3330

#### restore(key, ttl, serializedValue, replace, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3331

#### restore(key, ttl, serializedValue, replace, absttl, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3332

#### restore(key, ttl, serializedValue, replace, absttl, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3333

#### restore(key, ttl, serializedValue, replace, absttl, secondsToken, seconds, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3334

#### restore(key, ttl, serializedValue, replace, absttl, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.restore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3335

***

### restore-asking()

#### restore-asking(key, ttl, serializedValue, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `callback`?): `Promise`\<`unknown`\>

An internal command for migrating keys in a cluster
- _group_: server
- _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
- _since_: 3.0.0

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3342

#### restore-asking(key, ttl, serializedValue, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3343

#### restore-asking(key, ttl, serializedValue, secondsToken, seconds, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3344

#### restore-asking(key, ttl, serializedValue, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3345

#### restore-asking(key, ttl, serializedValue, absttl, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `absttl`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3346

#### restore-asking(key, ttl, serializedValue, absttl, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `absttl`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3347

#### restore-asking(key, ttl, serializedValue, absttl, secondsToken, seconds, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `absttl`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3348

#### restore-asking(key, ttl, serializedValue, absttl, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `absttl`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3349

#### restore-asking(key, ttl, serializedValue, replace, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3350

#### restore-asking(key, ttl, serializedValue, replace, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3351

#### restore-asking(key, ttl, serializedValue, replace, secondsToken, seconds, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3352

#### restore-asking(key, ttl, serializedValue, replace, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3353

#### restore-asking(key, ttl, serializedValue, replace, absttl, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3354

#### restore-asking(key, ttl, serializedValue, replace, absttl, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3355

#### restore-asking(key, ttl, serializedValue, replace, absttl, secondsToken, seconds, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3356

#### restore-asking(key, ttl, serializedValue, replace, absttl, secondsToken, seconds, frequencyToken, frequency, callback)

> **restore-asking**(`key`, `ttl`, `serializedValue`, `replace`, `absttl`, `secondsToken`, `seconds`, `frequencyToken`, `frequency`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **ttl**: `string` \| `number`

• **serializedValue**: `string` \| `number` \| `Buffer`

• **replace**: `"REPLACE"`

• **absttl**: `"ABSTTL"`

• **secondsToken**: `"IDLETIME"`

• **seconds**: `string` \| `number`

• **frequencyToken**: `"FREQ"`

• **frequency**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.restore-asking`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3357

***

### role()

> **role**(`callback`?): `Promise`\<`unknown`[]\>

Return the role of the instance in the context of replication
- _group_: server
- _complexity_: O(1)
- _since_: 2.8.12

#### Parameters

• **callback?**: `Callback`\<`unknown`[]\>

#### Returns

`Promise`\<`unknown`[]\>

#### Inherited from

`Redis.role`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3364

***

### rpop()

#### rpop(key, callback)

> **rpop**(`key`, `callback`?): `Promise`\<`string`\>

Remove and get the last elements in a list
- _group_: list
- _complexity_: O(N) where N is the number of elements returned
- _since_: 1.0.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.rpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3371

#### rpop(key, count, callback)

> **rpop**(`key`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.rpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3373

***

### rpopBuffer()

#### rpopBuffer(key, callback)

> **rpopBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.rpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3372

#### rpopBuffer(key, count, callback)

> **rpopBuffer**(`key`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.rpopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3374

***

### rpoplpush()

> **rpoplpush**(`source`, `destination`, `callback`?): `Promise`\<`string`\>

Remove the last element in a list, prepend it to another list and return it
- _group_: list
- _complexity_: O(1)
- _since_: 1.2.0

#### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.rpoplpush`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3381

***

### rpoplpushBuffer()

> **rpoplpushBuffer**(`source`, `destination`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.rpoplpushBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3382

***

### rpush()

#### rpush(args)

> **rpush**(...`args`): `Promise`\<`number`\>

Append one or multiple elements to a list
- _group_: list
- _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.rpush`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3389

#### rpush(args)

> **rpush**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.rpush`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3394

***

### rpushx()

#### rpushx(args)

> **rpushx**(...`args`): `Promise`\<`number`\>

Append an element to a list, only if the list exists
- _group_: list
- _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
- _since_: 2.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.rpushx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3401

#### rpushx(args)

> **rpushx**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...elements: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.rpushx`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3406

***

### sadd()

#### sadd(args)

> **sadd**(...`args`): `Promise`\<`number`\>

Add one or more members to a set
- _group_: set
- _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3413

#### sadd(args)

> **sadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3418

#### sadd(args)

> **sadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3423

#### sadd(args)

> **sadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3424

***

### save()

> **save**(`callback`?): `Promise`\<`"OK"`\>

Synchronously save the dataset to disk
- _group_: server
- _complexity_: O(N) where N is the total number of keys in all databases
- _since_: 1.0.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.save`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3431

***

### scan()

#### scan(cursor, callback)

> **scan**(`cursor`, `callback`?): `Promise`\<[`string`, `string`[]]\>

Incrementally iterate the keys space
- _group_: generic
- _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
- _since_: 2.8.0

##### Parameters

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3438

#### scan(cursor, typeToken, type, callback)

> **scan**(`cursor`, `typeToken`, `type`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3440

#### scan(cursor, countToken, count, callback)

> **scan**(`cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3442

#### scan(cursor, countToken, count, typeToken, type, callback)

> **scan**(`cursor`, `countToken`, `count`, `typeToken`, `type`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3444

#### scan(cursor, patternToken, pattern, callback)

> **scan**(`cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3446

#### scan(cursor, patternToken, pattern, typeToken, type, callback)

> **scan**(`cursor`, `patternToken`, `pattern`, `typeToken`, `type`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3448

#### scan(cursor, patternToken, pattern, countToken, count, callback)

> **scan**(`cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3450

#### scan(cursor, patternToken, pattern, countToken, count, typeToken, type, callback)

> **scan**(`cursor`, `patternToken`, `pattern`, `countToken`, `count`, `typeToken`, `type`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.scan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3452

***

### scanBuffer()

#### scanBuffer(cursor, callback)

> **scanBuffer**(`cursor`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3439

#### scanBuffer(cursor, typeToken, type, callback)

> **scanBuffer**(`cursor`, `typeToken`, `type`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3441

#### scanBuffer(cursor, countToken, count, callback)

> **scanBuffer**(`cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3443

#### scanBuffer(cursor, countToken, count, typeToken, type, callback)

> **scanBuffer**(`cursor`, `countToken`, `count`, `typeToken`, `type`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3445

#### scanBuffer(cursor, patternToken, pattern, callback)

> **scanBuffer**(`cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3447

#### scanBuffer(cursor, patternToken, pattern, typeToken, type, callback)

> **scanBuffer**(`cursor`, `patternToken`, `pattern`, `typeToken`, `type`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3449

#### scanBuffer(cursor, patternToken, pattern, countToken, count, callback)

> **scanBuffer**(`cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3451

#### scanBuffer(cursor, patternToken, pattern, countToken, count, typeToken, type, callback)

> **scanBuffer**(`cursor`, `patternToken`, `pattern`, `countToken`, `count`, `typeToken`, `type`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **typeToken**: `"TYPE"`

• **type**: `string` \| `Buffer`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.scanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3453

***

### scanBufferStream()

> **scanBufferStream**(`options`?): `ScanStream`

#### Parameters

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.scanBufferStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:165

***

### scanStream()

> **scanStream**(`options`?): `ScanStream`

#### Parameters

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.scanStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:164

***

### scard()

> **scard**(`key`, `callback`?): `Promise`\<`number`\>

Get the number of members in a set
- _group_: set
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.scard`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3460

***

### script()

#### script(subcommand, yes, callback)

> **script**(`subcommand`, `yes`, `callback`?): `Promise`\<`unknown`\>

Set the debug mode for executed scripts.
- _group_: scripting
- _complexity_: O(1)
- _since_: 3.2.0

##### Parameters

• **subcommand**: `"DEBUG"`

• **yes**: `"YES"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3467

#### script(subcommand, sync, callback)

> **script**(`subcommand`, `sync`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"DEBUG"`

• **sync**: `"SYNC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3468

#### script(subcommand, no, callback)

> **script**(`subcommand`, `no`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"DEBUG"`

• **no**: `"NO"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3469

#### script(args)

> **script**(...`args`): `Promise`\<`unknown`\>

Check existence of scripts in the script cache.
- _group_: scripting
- _complexity_: O(N) with N being the number of scripts to check (so checking a single script is an O(1) operation).
- _since_: 2.6.0

##### Parameters

• ...**args**: [`"EXISTS"`, ...sha1s: (string \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3476

#### script(args)

> **script**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`"EXISTS"`, ...sha1s: (string \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3481

#### script(subcommand, callback)

> **script**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Remove all the scripts from the script cache.
- _group_: scripting
- _complexity_: O(N) with N being the number of scripts in cache
- _since_: 2.6.0

##### Parameters

• **subcommand**: `"FLUSH"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3488

#### script(subcommand, async, callback)

> **script**(`subcommand`, `async`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"FLUSH"`

• **async**: `"ASYNC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3489

#### script(subcommand, sync, callback)

> **script**(`subcommand`, `sync`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"FLUSH"`

• **sync**: `"SYNC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3490

#### script(subcommand, callback)

> **script**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: scripting
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3497

#### script(subcommand, callback)

> **script**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Kill the script currently in execution.
- _group_: scripting
- _complexity_: O(1)
- _since_: 2.6.0

##### Parameters

• **subcommand**: `"KILL"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3504

#### script(subcommand, script, callback)

> **script**(`subcommand`, `script`, `callback`?): `Promise`\<`unknown`\>

Load the specified Lua script into the script cache.
- _group_: scripting
- _complexity_: O(N) with N being the length in bytes of the script body.
- _since_: 2.6.0

##### Parameters

• **subcommand**: `"LOAD"`

• **script**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.script`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3511

***

### sdiff()

#### sdiff(args)

> **sdiff**(...`args`): `Promise`\<`string`[]\>

Subtract multiple sets
- _group_: set
- _complexity_: O(N) where N is the total number of elements in all given sets.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3518

#### sdiff(args)

> **sdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3520

#### sdiff(args)

> **sdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3522

#### sdiff(args)

> **sdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3524

***

### sdiffBuffer()

#### sdiffBuffer(args)

> **sdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3519

#### sdiffBuffer(args)

> **sdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3521

#### sdiffBuffer(args)

> **sdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3523

#### sdiffBuffer(args)

> **sdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3525

***

### sdiffstore()

#### sdiffstore(args)

> **sdiffstore**(...`args`): `Promise`\<`number`\>

Subtract multiple sets and store the resulting set in a key
- _group_: set
- _complexity_: O(N) where N is the total number of elements in all given sets.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3532

#### sdiffstore(args)

> **sdiffstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3537

#### sdiffstore(args)

> **sdiffstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3542

#### sdiffstore(args)

> **sdiffstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3543

***

### select()

> **select**(`index`, `callback`?): `Promise`\<`"OK"`\>

Change the selected database for the current connection
- _group_: connection
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **index**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.select`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3550

***

### set()

#### set(key, value, callback)

> **set**(`key`, `value`, `callback`?): `Promise`\<`"OK"`\>

Set the string value of a key
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3557

#### set(key, value, get, callback)

> **set**(`key`, `value`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3558

#### set(key, value, nx, callback)

> **set**(`key`, `value`, `nx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3560

#### set(key, value, nx, get, callback)

> **set**(`key`, `value`, `nx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3561

#### set(key, value, xx, callback)

> **set**(`key`, `value`, `xx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3563

#### set(key, value, xx, get, callback)

> **set**(`key`, `value`, `xx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3564

#### set(key, value, secondsToken, seconds, callback)

> **set**(`key`, `value`, `secondsToken`, `seconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3566

#### set(key, value, secondsToken, seconds, get, callback)

> **set**(`key`, `value`, `secondsToken`, `seconds`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3567

#### set(key, value, secondsToken, seconds, nx, callback)

> **set**(`key`, `value`, `secondsToken`, `seconds`, `nx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3569

#### set(key, value, secondsToken, seconds, nx, get, callback)

> **set**(`key`, `value`, `secondsToken`, `seconds`, `nx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3570

#### set(key, value, secondsToken, seconds, xx, callback)

> **set**(`key`, `value`, `secondsToken`, `seconds`, `xx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3572

#### set(key, value, secondsToken, seconds, xx, get, callback)

> **set**(`key`, `value`, `secondsToken`, `seconds`, `xx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3573

#### set(key, value, millisecondsToken, milliseconds, callback)

> **set**(`key`, `value`, `millisecondsToken`, `milliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3575

#### set(key, value, millisecondsToken, milliseconds, get, callback)

> **set**(`key`, `value`, `millisecondsToken`, `milliseconds`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3576

#### set(key, value, millisecondsToken, milliseconds, nx, callback)

> **set**(`key`, `value`, `millisecondsToken`, `milliseconds`, `nx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3578

#### set(key, value, millisecondsToken, milliseconds, nx, get, callback)

> **set**(`key`, `value`, `millisecondsToken`, `milliseconds`, `nx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3579

#### set(key, value, millisecondsToken, milliseconds, xx, callback)

> **set**(`key`, `value`, `millisecondsToken`, `milliseconds`, `xx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3581

#### set(key, value, millisecondsToken, milliseconds, xx, get, callback)

> **set**(`key`, `value`, `millisecondsToken`, `milliseconds`, `xx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3582

#### set(key, value, unixTimeSecondsToken, unixTimeSeconds, callback)

> **set**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3584

#### set(key, value, unixTimeSecondsToken, unixTimeSeconds, get, callback)

> **set**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3585

#### set(key, value, unixTimeSecondsToken, unixTimeSeconds, nx, callback)

> **set**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `nx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3587

#### set(key, value, unixTimeSecondsToken, unixTimeSeconds, nx, get, callback)

> **set**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `nx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3588

#### set(key, value, unixTimeSecondsToken, unixTimeSeconds, xx, callback)

> **set**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `xx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3590

#### set(key, value, unixTimeSecondsToken, unixTimeSeconds, xx, get, callback)

> **set**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `xx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3591

#### set(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, callback)

> **set**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3593

#### set(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, get, callback)

> **set**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3594

#### set(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, nx, callback)

> **set**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `nx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3596

#### set(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, nx, get, callback)

> **set**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `nx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3597

#### set(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, xx, callback)

> **set**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `xx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3599

#### set(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, xx, get, callback)

> **set**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `xx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3600

#### set(key, value, keepttl, callback)

> **set**(`key`, `value`, `keepttl`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3602

#### set(key, value, keepttl, get, callback)

> **set**(`key`, `value`, `keepttl`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3603

#### set(key, value, keepttl, nx, callback)

> **set**(`key`, `value`, `keepttl`, `nx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **nx**: `"NX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3605

#### set(key, value, keepttl, nx, get, callback)

> **set**(`key`, `value`, `keepttl`, `nx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3606

#### set(key, value, keepttl, xx, callback)

> **set**(`key`, `value`, `keepttl`, `xx`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **xx**: `"XX"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3608

#### set(key, value, keepttl, xx, get, callback)

> **set**(`key`, `value`, `keepttl`, `xx`, `get`, `callback`?): `Promise`\<`string`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.set`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3609

***

### setbit()

> **setbit**(`key`, `offset`, `value`, `callback`?): `Promise`\<`number`\>

Sets or clears the bit at offset in the string value stored at key
- _group_: bitmap
- _complexity_: O(1)
- _since_: 2.2.0

#### Parameters

• **key**: `RedisKey`

• **offset**: `string` \| `number`

• **value**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.setbit`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3617

***

### setBuffer()

#### setBuffer(key, value, get, callback)

> **setBuffer**(`key`, `value`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3559

#### setBuffer(key, value, nx, get, callback)

> **setBuffer**(`key`, `value`, `nx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3562

#### setBuffer(key, value, xx, get, callback)

> **setBuffer**(`key`, `value`, `xx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3565

#### setBuffer(key, value, secondsToken, seconds, get, callback)

> **setBuffer**(`key`, `value`, `secondsToken`, `seconds`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3568

#### setBuffer(key, value, secondsToken, seconds, nx, get, callback)

> **setBuffer**(`key`, `value`, `secondsToken`, `seconds`, `nx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3571

#### setBuffer(key, value, secondsToken, seconds, xx, get, callback)

> **setBuffer**(`key`, `value`, `secondsToken`, `seconds`, `xx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **secondsToken**: `"EX"`

• **seconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3574

#### setBuffer(key, value, millisecondsToken, milliseconds, get, callback)

> **setBuffer**(`key`, `value`, `millisecondsToken`, `milliseconds`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3577

#### setBuffer(key, value, millisecondsToken, milliseconds, nx, get, callback)

> **setBuffer**(`key`, `value`, `millisecondsToken`, `milliseconds`, `nx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3580

#### setBuffer(key, value, millisecondsToken, milliseconds, xx, get, callback)

> **setBuffer**(`key`, `value`, `millisecondsToken`, `milliseconds`, `xx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **millisecondsToken**: `"PX"`

• **milliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3583

#### setBuffer(key, value, unixTimeSecondsToken, unixTimeSeconds, get, callback)

> **setBuffer**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3586

#### setBuffer(key, value, unixTimeSecondsToken, unixTimeSeconds, nx, get, callback)

> **setBuffer**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `nx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3589

#### setBuffer(key, value, unixTimeSecondsToken, unixTimeSeconds, xx, get, callback)

> **setBuffer**(`key`, `value`, `unixTimeSecondsToken`, `unixTimeSeconds`, `xx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeSecondsToken**: `"EXAT"`

• **unixTimeSeconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3592

#### setBuffer(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, get, callback)

> **setBuffer**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3595

#### setBuffer(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, nx, get, callback)

> **setBuffer**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `nx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3598

#### setBuffer(key, value, unixTimeMillisecondsToken, unixTimeMilliseconds, xx, get, callback)

> **setBuffer**(`key`, `value`, `unixTimeMillisecondsToken`, `unixTimeMilliseconds`, `xx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **unixTimeMillisecondsToken**: `"PXAT"`

• **unixTimeMilliseconds**: `string` \| `number`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3601

#### setBuffer(key, value, keepttl, get, callback)

> **setBuffer**(`key`, `value`, `keepttl`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3604

#### setBuffer(key, value, keepttl, nx, get, callback)

> **setBuffer**(`key`, `value`, `keepttl`, `nx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **nx**: `"NX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3607

#### setBuffer(key, value, keepttl, xx, get, callback)

> **setBuffer**(`key`, `value`, `keepttl`, `xx`, `get`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **keepttl**: `"KEEPTTL"`

• **xx**: `"XX"`

• **get**: `"GET"`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.setBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3610

***

### setex()

> **setex**(`key`, `seconds`, `value`, `callback`?): `Promise`\<`"OK"`\>

Set the value and expiration of a key
- _group_: string
- _complexity_: O(1)
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **seconds**: `string` \| `number`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.setex`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3624

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

`Redis.setMaxListeners`

#### Defined in

node\_modules/@types/node/events.d.ts:768

***

### setnx()

> **setnx**(`key`, `value`, `callback`?): `Promise`\<`number`\>

Set the value of a key, only if the key does not exist
- _group_: string
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.setnx`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3631

***

### setrange()

> **setrange**(`key`, `offset`, `value`, `callback`?): `Promise`\<`number`\>

Overwrite part of a string at key starting at the specified offset
- _group_: string
- _complexity_: O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.
- _since_: 2.2.0

#### Parameters

• **key**: `RedisKey`

• **offset**: `string` \| `number`

• **value**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.setrange`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3638

***

### shutdown()

#### shutdown(callback)

> **shutdown**(`callback`?): `Promise`\<`"OK"`\>

Synchronously save the dataset to disk and then shut down the server
- _group_: server
- _complexity_: O(N) when saving, where N is the total number of keys in all databases when saving data, otherwise O(1)
- _since_: 1.0.0

##### Parameters

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3645

#### shutdown(abort, callback)

> **shutdown**(`abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3646

#### shutdown(force, callback)

> **shutdown**(`force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3647

#### shutdown(force, abort, callback)

> **shutdown**(`force`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3648

#### shutdown(now, callback)

> **shutdown**(`now`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **now**: `"NOW"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3649

#### shutdown(now, abort, callback)

> **shutdown**(`now`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **now**: `"NOW"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3650

#### shutdown(now, force, callback)

> **shutdown**(`now`, `force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **now**: `"NOW"`

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3651

#### shutdown(now, force, abort, callback)

> **shutdown**(`now`, `force`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **now**: `"NOW"`

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3652

#### shutdown(nosave, callback)

> **shutdown**(`nosave`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3653

#### shutdown(nosave, abort, callback)

> **shutdown**(`nosave`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3654

#### shutdown(nosave, force, callback)

> **shutdown**(`nosave`, `force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3655

#### shutdown(nosave, force, abort, callback)

> **shutdown**(`nosave`, `force`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3656

#### shutdown(nosave, now, callback)

> **shutdown**(`nosave`, `now`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **now**: `"NOW"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3657

#### shutdown(nosave, now, abort, callback)

> **shutdown**(`nosave`, `now`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **now**: `"NOW"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3658

#### shutdown(nosave, now, force, callback)

> **shutdown**(`nosave`, `now`, `force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **now**: `"NOW"`

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3659

#### shutdown(nosave, now, force, abort, callback)

> **shutdown**(`nosave`, `now`, `force`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **nosave**: `"NOSAVE"`

• **now**: `"NOW"`

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3660

#### shutdown(save, callback)

> **shutdown**(`save`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3661

#### shutdown(save, abort, callback)

> **shutdown**(`save`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3662

#### shutdown(save, force, callback)

> **shutdown**(`save`, `force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3663

#### shutdown(save, force, abort, callback)

> **shutdown**(`save`, `force`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3664

#### shutdown(save, now, callback)

> **shutdown**(`save`, `now`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **now**: `"NOW"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3665

#### shutdown(save, now, abort, callback)

> **shutdown**(`save`, `now`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **now**: `"NOW"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3666

#### shutdown(save, now, force, callback)

> **shutdown**(`save`, `now`, `force`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **now**: `"NOW"`

• **force**: `"FORCE"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3667

#### shutdown(save, now, force, abort, callback)

> **shutdown**(`save`, `now`, `force`, `abort`, `callback`?): `Promise`\<`"OK"`\>

##### Parameters

• **save**: `"SAVE"`

• **now**: `"NOW"`

• **force**: `"FORCE"`

• **abort**: `"ABORT"`

• **callback?**: `Callback`\<`"OK"`\>

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.shutdown`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3668

***

### sinter()

#### sinter(args)

> **sinter**(...`args`): `Promise`\<`string`[]\>

Intersect multiple sets
- _group_: set
- _complexity_: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3675

#### sinter(args)

> **sinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3677

#### sinter(args)

> **sinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3679

#### sinter(args)

> **sinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3681

***

### sinterBuffer()

#### sinterBuffer(args)

> **sinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3676

#### sinterBuffer(args)

> **sinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3678

#### sinterBuffer(args)

> **sinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3680

#### sinterBuffer(args)

> **sinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3682

***

### sintercard()

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

Intersect multiple sets and return the cardinality of the result
- _group_: set
- _complexity_: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3689

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3694

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3699

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3700

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LIMIT"`, `string` \| `number`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3701

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LIMIT"`, `string` \| `number`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3708

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LIMIT"`, `string` \| `number`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3715

#### sintercard(args)

> **sintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LIMIT"`, `string` \| `number`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3721

***

### sinterstore()

#### sinterstore(args)

> **sinterstore**(...`args`): `Promise`\<`number`\>

Intersect multiple sets and store the resulting set in a key
- _group_: set
- _complexity_: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3733

#### sinterstore(args)

> **sinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3738

#### sinterstore(args)

> **sinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3743

#### sinterstore(args)

> **sinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3744

***

### sismember()

> **sismember**(`key`, `member`, `callback`?): `Promise`\<`number`\>

Determine if a given value is a member of a set
- _group_: set
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.sismember`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3751

***

### slaveof()

> **slaveof**(`host`, `port`, `callback`?): `Promise`\<`"OK"`\>

Make the server a replica of another instance, or promote it as master.
- _group_: server
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **host**: `string` \| `Buffer`

• **port**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.slaveof`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3758

***

### slowlog()

#### slowlog(subcommand, callback)

> **slowlog**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Get the slow log's entries
- _group_: server
- _complexity_: O(N) where N is the number of entries returned
- _since_: 2.2.12

##### Parameters

• **subcommand**: `"GET"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.slowlog`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3765

#### slowlog(subcommand, count, callback)

> **slowlog**(`subcommand`, `count`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"GET"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.slowlog`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3766

#### slowlog(subcommand, callback)

> **slowlog**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: server
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.slowlog`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3773

#### slowlog(subcommand, callback)

> **slowlog**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Get the slow log's length
- _group_: server
- _complexity_: O(1)
- _since_: 2.2.12

##### Parameters

• **subcommand**: `"LEN"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.slowlog`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3780

#### slowlog(subcommand, callback)

> **slowlog**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Clear all entries from the slow log
- _group_: server
- _complexity_: O(N) where N is the number of entries in the slowlog
- _since_: 2.2.12

##### Parameters

• **subcommand**: `"RESET"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.slowlog`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3787

***

### smembers()

> **smembers**(`key`, `callback`?): `Promise`\<`string`[]\>

Get all the members in a set
- _group_: set
- _complexity_: O(N) where N is the set cardinality.
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

`Redis.smembers`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3794

***

### smembersBuffer()

> **smembersBuffer**(`key`, `callback`?): `Promise`\<`Buffer`[]\>

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`[]\>

#### Returns

`Promise`\<`Buffer`[]\>

#### Inherited from

`Redis.smembersBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3795

***

### smismember()

#### smismember(args)

> **smismember**(...`args`): `Promise`\<`number`[]\>

Returns the membership associated with the given elements for a set
- _group_: set
- _complexity_: O(N) where N is the number of elements being checked for membership
- _since_: 6.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`number`[]\>]

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.smismember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3802

#### smismember(args)

> **smismember**(...`args`): `Promise`\<`number`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`number`[]\>]

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.smismember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3807

#### smismember(args)

> **smismember**(...`args`): `Promise`\<`number`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.smismember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3812

#### smismember(args)

> **smismember**(...`args`): `Promise`\<`number`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`number`[]\>

##### Inherited from

`Redis.smismember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3813

***

### smove()

> **smove**(`source`, `destination`, `member`, `callback`?): `Promise`\<`number`\>

Move a member from one set to another
- _group_: set
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **source**: `RedisKey`

• **destination**: `RedisKey`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.smove`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3820

***

### sort()

#### sort(args)

> **sort**(...`args`): `Promise`\<`unknown`\>

Sort the elements in a list, set or sorted set
- _group_: generic
- _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3827

#### sort(args)

> **sort**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3828

***

### sort\_ro()

#### sort\_ro(key, callback)

> **sort\_ro**(`key`, `callback`?): `Promise`\<`unknown`\>

Sort the elements in a list, set or sorted set. Read-only variant of SORT.
- _group_: generic
- _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).
- _since_: 7.0.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3835

#### sort\_ro(key, alpha, callback)

> **sort\_ro**(`key`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3836

#### sort\_ro(key, asc, callback)

> **sort\_ro**(`key`, `asc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **asc**: `"ASC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3837

#### sort\_ro(key, asc, alpha, callback)

> **sort\_ro**(`key`, `asc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **asc**: `"ASC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3838

#### sort\_ro(key, desc, callback)

> **sort\_ro**(`key`, `desc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **desc**: `"DESC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3839

#### sort\_ro(key, desc, alpha, callback)

> **sort\_ro**(`key`, `desc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **desc**: `"DESC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3840

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3841

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3847

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3848

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3855

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"ASC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3861

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"ASC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3868

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"ASC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3874

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"ASC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3882

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"DESC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3889

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"DESC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3896

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"DESC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3902

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GET"`, `...patterns: string[]`, `"DESC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3910

#### sort\_ro(key, offsetCountToken, offset, count, callback)

> **sort\_ro**(`key`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3917

#### sort\_ro(key, offsetCountToken, offset, count, alpha, callback)

> **sort\_ro**(`key`, `offsetCountToken`, `offset`, `count`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3918

#### sort\_ro(key, offsetCountToken, offset, count, asc, callback)

> **sort\_ro**(`key`, `offsetCountToken`, `offset`, `count`, `asc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **asc**: `"ASC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3919

#### sort\_ro(key, offsetCountToken, offset, count, asc, alpha, callback)

> **sort\_ro**(`key`, `offsetCountToken`, `offset`, `count`, `asc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **asc**: `"ASC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3920

#### sort\_ro(key, offsetCountToken, offset, count, desc, callback)

> **sort\_ro**(`key`, `offsetCountToken`, `offset`, `count`, `desc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **desc**: `"DESC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3921

#### sort\_ro(key, offsetCountToken, offset, count, desc, alpha, callback)

> **sort\_ro**(`key`, `offsetCountToken`, `offset`, `count`, `desc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **desc**: `"DESC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3922

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3923

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3932

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3940

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3950

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"ASC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3959

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"ASC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3969

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"ASC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3978

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"ASC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3989

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"DESC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:3999

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"DESC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4009

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"DESC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4018

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...patterns: string[]`, `"DESC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4029

#### sort\_ro(key, patternToken, pattern, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4039

#### sort\_ro(key, patternToken, pattern, alpha, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4040

#### sort\_ro(key, patternToken, pattern, asc, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `asc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **asc**: `"ASC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4041

#### sort\_ro(key, patternToken, pattern, asc, alpha, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `asc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **asc**: `"ASC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4042

#### sort\_ro(key, patternToken, pattern, desc, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `desc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **desc**: `"DESC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4043

#### sort\_ro(key, patternToken, pattern, desc, alpha, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `desc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **desc**: `"DESC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4044

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4045

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4053

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4060

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4069

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"ASC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4077

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"ASC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4086

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"ASC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4094

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"ASC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4104

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"DESC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4113

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"DESC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4122

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"DESC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4130

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"GET"`, `...pattern1s: string[]`, `"DESC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4140

#### sort\_ro(key, patternToken, pattern, offsetCountToken, offset, count, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4149

#### sort\_ro(key, patternToken, pattern, offsetCountToken, offset, count, alpha, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `offsetCountToken`, `offset`, `count`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4150

#### sort\_ro(key, patternToken, pattern, offsetCountToken, offset, count, asc, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `offsetCountToken`, `offset`, `count`, `asc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **asc**: `"ASC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4151

#### sort\_ro(key, patternToken, pattern, offsetCountToken, offset, count, asc, alpha, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `offsetCountToken`, `offset`, `count`, `asc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **asc**: `"ASC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4152

#### sort\_ro(key, patternToken, pattern, offsetCountToken, offset, count, desc, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `offsetCountToken`, `offset`, `count`, `desc`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **desc**: `"DESC"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4153

#### sort\_ro(key, patternToken, pattern, offsetCountToken, offset, count, desc, alpha, callback)

> **sort\_ro**(`key`, `patternToken`, `pattern`, `offsetCountToken`, `offset`, `count`, `desc`, `alpha`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **patternToken**: `"BY"`

• **pattern**: `string`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **desc**: `"DESC"`

• **alpha**: `"ALPHA"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4154

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4155

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4166

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4176

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4188

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"ASC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4199

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"ASC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4211

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"ASC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4222

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"ASC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4235

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"DESC"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4247

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"DESC"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4259

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"DESC"`, `"ALPHA"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4270

#### sort\_ro(args)

> **sort\_ro**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`RedisKey`, `"BY"`, `string`, `"LIMIT"`, `string` \| `number`, `string` \| `number`, `"GET"`, `...pattern1s: string[]`, `"DESC"`, `"ALPHA"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sort_ro`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4283

***

### spop()

#### spop(key, callback)

> **spop**(`key`, `callback`?): `Promise`\<`string`\>

Remove and return one or multiple random members from a set
- _group_: set
- _complexity_: Without the count argument O(1), otherwise O(N) where N is the value of the passed count.
- _since_: 1.0.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.spop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4301

#### spop(key, count, callback)

> **spop**(`key`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.spop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4303

***

### spopBuffer()

#### spopBuffer(key, callback)

> **spopBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.spopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4302

#### spopBuffer(key, count, callback)

> **spopBuffer**(`key`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.spopBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4304

***

### spublish()

> **spublish**(`shardchannel`, `message`, `callback`?): `Promise`\<`unknown`\>

Post a message to a shard channel
- _group_: pubsub
- _complexity_: O(N) where N is the number of clients subscribed to the receiving shard channel.
- _since_: 7.0.0

#### Parameters

• **shardchannel**: `string` \| `Buffer`

• **message**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.spublish`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4311

***

### srandmember()

#### srandmember(key, callback)

> **srandmember**(`key`, `callback`?): `Promise`\<`string`\>

Get one or multiple random members from a set
- _group_: set
- _complexity_: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
- _since_: 1.0.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.srandmember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4318

#### srandmember(key, count, callback)

> **srandmember**(`key`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.srandmember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4320

***

### srandmemberBuffer()

#### srandmemberBuffer(key, callback)

> **srandmemberBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.srandmemberBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4319

#### srandmemberBuffer(key, count, callback)

> **srandmemberBuffer**(`key`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.srandmemberBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4321

***

### srem()

#### srem(args)

> **srem**(...`args`): `Promise`\<`number`\>

Remove one or more members from a set
- _group_: set
- _complexity_: O(N) where N is the number of members to be removed.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.srem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4328

#### srem(args)

> **srem**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.srem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4333

#### srem(args)

> **srem**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.srem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4338

#### srem(args)

> **srem**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.srem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4339

***

### sscan()

#### sscan(key, cursor, callback)

> **sscan**(`key`, `cursor`, `callback`?): `Promise`\<[`string`, `string`[]]\>

Incrementally iterate Set elements
- _group_: set
- _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
- _since_: 2.8.0

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.sscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4346

#### sscan(key, cursor, countToken, count, callback)

> **sscan**(`key`, `cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.sscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4348

#### sscan(key, cursor, patternToken, pattern, callback)

> **sscan**(`key`, `cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.sscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4350

#### sscan(key, cursor, patternToken, pattern, countToken, count, callback)

> **sscan**(`key`, `cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.sscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4352

***

### sscanBuffer()

#### sscanBuffer(key, cursor, callback)

> **sscanBuffer**(`key`, `cursor`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.sscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4347

#### sscanBuffer(key, cursor, countToken, count, callback)

> **sscanBuffer**(`key`, `cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.sscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4349

#### sscanBuffer(key, cursor, patternToken, pattern, callback)

> **sscanBuffer**(`key`, `cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.sscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4351

#### sscanBuffer(key, cursor, patternToken, pattern, countToken, count, callback)

> **sscanBuffer**(`key`, `cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.sscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4353

***

### sscanBufferStream()

> **sscanBufferStream**(`key`, `options`?): `ScanStream`

#### Parameters

• **key**: `string`

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.sscanBufferStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:167

***

### sscanStream()

> **sscanStream**(`key`, `options`?): `ScanStream`

#### Parameters

• **key**: `string`

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.sscanStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:166

***

### ssubscribe()

#### ssubscribe(args)

> **ssubscribe**(...`args`): `Promise`\<`unknown`\>

Listen for messages published to the given shard channels
- _group_: pubsub
- _complexity_: O(N) where N is the number of shard channels to subscribe to.
- _since_: 7.0.0

##### Parameters

• ...**args**: [...shardchannels: (string \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.ssubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4360

#### ssubscribe(args)

> **ssubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: (`string` \| `Buffer`)[]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.ssubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4364

***

### strlen()

> **strlen**(`key`, `callback`?): `Promise`\<`number`\>

Get the length of the value stored in a key
- _group_: string
- _complexity_: O(1)
- _since_: 2.2.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.strlen`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4371

***

### subscribe()

#### subscribe(args)

> **subscribe**(...`args`): `Promise`\<`unknown`\>

Listen for messages published to the given channels
- _group_: pubsub
- _complexity_: O(N) where N is the number of channels to subscribe to.
- _since_: 2.0.0

##### Parameters

• ...**args**: [...channels: (string \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.subscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4378

#### subscribe(args)

> **subscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: (`string` \| `Buffer`)[]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.subscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4379

***

### substr()

> **substr**(`key`, `start`, `end`, `callback`?): `Promise`\<`unknown`\>

Get a substring of the string stored at a key
- _group_: string
- _complexity_: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **end**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.substr`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4386

***

### sunion()

#### sunion(args)

> **sunion**(...`args`): `Promise`\<`string`[]\>

Add multiple sets
- _group_: set
- _complexity_: O(N) where N is the total number of elements in all given sets.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4393

#### sunion(args)

> **sunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4395

#### sunion(args)

> **sunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4397

#### sunion(args)

> **sunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.sunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4399

***

### sunionBuffer()

#### sunionBuffer(args)

> **sunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4394

#### sunionBuffer(args)

> **sunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4396

#### sunionBuffer(args)

> **sunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4398

#### sunionBuffer(args)

> **sunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.sunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4400

***

### sunionstore()

#### sunionstore(args)

> **sunionstore**(...`args`): `Promise`\<`number`\>

Add multiple sets and store the resulting set in a key
- _group_: set
- _complexity_: O(N) where N is the total number of elements in all given sets.
- _since_: 1.0.0

##### Parameters

• ...**args**: [`RedisKey`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4407

#### sunionstore(args)

> **sunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4412

#### sunionstore(args)

> **sunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4417

#### sunionstore(args)

> **sunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.sunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4418

***

### sunsubscribe()

#### sunsubscribe(callback)

> **sunsubscribe**(`callback`?): `Promise`\<`unknown`\>

Stop listening for messages posted to the given shard channels
- _group_: pubsub
- _complexity_: O(N) where N is the number of clients already subscribed to a shard channel.
- _since_: 7.0.0

##### Parameters

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sunsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4425

#### sunsubscribe(args)

> **sunsubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [...shardchannels: (string \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sunsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4426

#### sunsubscribe(args)

> **sunsubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: (`string` \| `Buffer`)[]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.sunsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4430

***

### swapdb()

> **swapdb**(`index1`, `index2`, `callback`?): `Promise`\<`"OK"`\>

Swaps two Redis databases
- _group_: server
- _complexity_: O(N) where N is the count of clients watching or blocking on keys from both databases.
- _since_: 4.0.0

#### Parameters

• **index1**: `string` \| `number`

• **index2**: `string` \| `number`

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.swapdb`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4437

***

### sync()

> **sync**(`callback`?): `Promise`\<`unknown`\>

Internal command used for replication
- _group_: server
- _complexity_: undefined
- _since_: 1.0.0

#### Parameters

• **callback?**: `Callback`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Redis.sync`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4444

***

### time()

> **time**(`callback`?): `Promise`\<`number`[]\>

Return the current server time
- _group_: server
- _complexity_: O(1)
- _since_: 2.6.0

#### Parameters

• **callback?**: `Callback`\<`number`[]\>

#### Returns

`Promise`\<`number`[]\>

#### Inherited from

`Redis.time`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4451

***

### touch()

#### touch(args)

> **touch**(...`args`): `Promise`\<`number`\>

Alters the last access time of a key(s). Returns the number of existing keys specified.
- _group_: generic
- _complexity_: O(N) where N is the number of keys that will be touched.
- _since_: 3.2.1

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.touch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4458

#### touch(args)

> **touch**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.touch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4459

#### touch(args)

> **touch**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.touch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4460

#### touch(args)

> **touch**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.touch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4461

***

### ttl()

> **ttl**(`key`, `callback`?): `Promise`\<`number`\>

Get the time to live for a key in seconds
- _group_: generic
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.ttl`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4468

***

### type()

> **type**(`key`, `callback`?): `Promise`\<`string`\>

Determine the type stored at key
- _group_: generic
- _complexity_: O(1)
- _since_: 1.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.type`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4475

***

### unlink()

#### unlink(args)

> **unlink**(...`args`): `Promise`\<`number`\>

Delete a key asynchronously in another thread. Otherwise it is just as DEL, but non blocking.
- _group_: generic
- _complexity_: O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.
- _since_: 4.0.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.unlink`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4482

#### unlink(args)

> **unlink**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.unlink`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4483

#### unlink(args)

> **unlink**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.unlink`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4484

#### unlink(args)

> **unlink**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.unlink`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4485

***

### unsubscribe()

#### unsubscribe(callback)

> **unsubscribe**(`callback`?): `Promise`\<`unknown`\>

Stop listening for messages posted to the given channels
- _group_: pubsub
- _complexity_: O(N) where N is the number of clients already subscribed to a channel.
- _since_: 2.0.0

##### Parameters

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.unsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4492

#### unsubscribe(args)

> **unsubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [...channels: (string \| Buffer)\[\], `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.unsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4493

#### unsubscribe(args)

> **unsubscribe**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: (`string` \| `Buffer`)[]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.unsubscribe`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4494

***

### unwatch()

> **unwatch**(`callback`?): `Promise`\<`"OK"`\>

Forget about all watched keys
- _group_: transactions
- _complexity_: O(1)
- _since_: 2.2.0

#### Parameters

• **callback?**: `Callback`\<`"OK"`\>

#### Returns

`Promise`\<`"OK"`\>

#### Inherited from

`Redis.unwatch`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4501

***

### wait()

> **wait**(`numreplicas`, `timeout`, `callback`?): `Promise`\<`number`\>

Wait for the synchronous replication of all the write commands sent in the context of the current connection
- _group_: generic
- _complexity_: O(1)
- _since_: 3.0.0

#### Parameters

• **numreplicas**: `string` \| `number`

• **timeout**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.wait`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4508

***

### watch()

#### watch(args)

> **watch**(...`args`): `Promise`\<`"OK"`\>

Watch the given keys to determine execution of the MULTI/EXEC block
- _group_: transactions
- _complexity_: O(1) for every key.
- _since_: 2.2.0

##### Parameters

• ...**args**: [`...keys: RedisKey[]`, `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.watch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4515

#### watch(args)

> **watch**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`RedisKey`[], `Callback`\<`"OK"`\>]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.watch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4516

#### watch(args)

> **watch**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: `RedisKey`[]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.watch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4517

#### watch(args)

> **watch**(...`args`): `Promise`\<`"OK"`\>

##### Parameters

• ...**args**: [`RedisKey`[]]

##### Returns

`Promise`\<`"OK"`\>

##### Inherited from

`Redis.watch`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4518

***

### xack()

#### xack(args)

> **xack**(...`args`): `Promise`\<`number`\>

Marks a pending message as correctly processed, effectively removing it from the pending entries list of the consumer group. Return value of the command is the number of messages successfully acknowledged, that is, the IDs we were actually able to resolve in the PEL.
- _group_: stream
- _complexity_: O(1) for each message ID processed.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xack`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4525

#### xack(args)

> **xack**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xack`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4531

***

### xadd()

#### xadd(args)

> **xadd**(...`args`): `Promise`\<`string`\>

Appends a new entry to a stream
- _group_: stream
- _complexity_: O(1) when adding a new entry, O(N) when trimming where N being the number of entries evicted.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`, `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.xadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4542

#### xadd(args)

> **xadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.xadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4552

***

### xaddBuffer()

#### xaddBuffer(args)

> **xaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`, `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.xaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4547

#### xaddBuffer(args)

> **xaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.xaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4553

***

### xautoclaim()

#### xautoclaim(key, group, consumer, minIdleTime, start, callback)

> **xautoclaim**(`key`, `group`, `consumer`, `minIdleTime`, `start`, `callback`?): `Promise`\<`unknown`[]\>

Changes (or acquires) ownership of messages in a consumer group, as if the messages were delivered to the specified consumer.
- _group_: stream
- _complexity_: O(1) if COUNT is small.
- _since_: 6.2.0

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **consumer**: `string` \| `Buffer`

• **minIdleTime**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xautoclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4560

#### xautoclaim(key, group, consumer, minIdleTime, start, justid, callback)

> **xautoclaim**(`key`, `group`, `consumer`, `minIdleTime`, `start`, `justid`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **consumer**: `string` \| `Buffer`

• **minIdleTime**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **justid**: `"JUSTID"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xautoclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4561

#### xautoclaim(key, group, consumer, minIdleTime, start, countToken, count, callback)

> **xautoclaim**(`key`, `group`, `consumer`, `minIdleTime`, `start`, `countToken`, `count`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **consumer**: `string` \| `Buffer`

• **minIdleTime**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xautoclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4562

#### xautoclaim(key, group, consumer, minIdleTime, start, countToken, count, justid, callback)

> **xautoclaim**(`key`, `group`, `consumer`, `minIdleTime`, `start`, `countToken`, `count`, `justid`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **consumer**: `string` \| `Buffer`

• **minIdleTime**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **justid**: `"JUSTID"`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xautoclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4563

***

### xclaim()

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
- _group_: stream
- _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4570

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4578

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4585

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4594

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"FORCE"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4602

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"FORCE"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4611

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"FORCE"`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4619

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"FORCE"`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4629

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4638

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4648

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4657

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4668

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4678

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4689

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4699

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4711

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4722

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4732

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4741

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4752

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"FORCE"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4762

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"FORCE"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4773

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4783

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4795

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4806

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4818

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4829

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4842

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4854

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4867

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4879

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4893

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4906

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4916

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4925

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4936

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"FORCE"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4946

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"FORCE"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4957

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4967

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4979

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:4990

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5002

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5013

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5026

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5038

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5051

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5063

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5077

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5090

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5102

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`, `"JUSTID"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5113

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5126

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`, `"FORCE"`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5138

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`, `"FORCE"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5151

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5163

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`, `"FORCE"`, `"JUSTID"`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5177

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5190

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`, `"RETRYCOUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5204

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5217

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5232

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5246

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5261

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5275

#### xclaim(args)

> **xclaim**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `Buffer`, `string` \| `Buffer`, `string` \| `number` \| `Buffer`, ...ids: (string \| number \| Buffer)\[\], `"IDLE"`, `string` \| `number`, `"TIME"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xclaim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5291

***

### xdel()

#### xdel(args)

> **xdel**(...`args`): `Promise`\<`number`\>

Removes the specified entries from the stream. Returns the number of items actually deleted, that may be different from the number of IDs passed in case certain IDs do not exist.
- _group_: stream
- _complexity_: O(1) for each single item to delete in the stream, regardless of the stream size.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`RedisKey`, ...ids: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xdel`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5312

#### xdel(args)

> **xdel**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...ids: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xdel`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5317

***

### xgroup()

#### xgroup(subcommand, key, groupname, id, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `id`, `callback`?): `Promise`\<`unknown`\>

Create a consumer group.
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **id**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5324

#### xgroup(subcommand, key, groupname, id, entriesReadToken, entriesRead, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `id`, `entriesReadToken`, `entriesRead`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **id**: `string` \| `number` \| `Buffer`

• **entriesReadToken**: `"ENTRIESREAD"`

• **entriesRead**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5325

#### xgroup(subcommand, key, groupname, id, mkstream, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `id`, `mkstream`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **id**: `string` \| `number` \| `Buffer`

• **mkstream**: `"MKSTREAM"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5326

#### xgroup(subcommand, key, groupname, id, mkstream, entriesReadToken, entriesRead, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `id`, `mkstream`, `entriesReadToken`, `entriesRead`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **id**: `string` \| `number` \| `Buffer`

• **mkstream**: `"MKSTREAM"`

• **entriesReadToken**: `"ENTRIESREAD"`

• **entriesRead**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5327

#### xgroup(subcommand, key, groupname, newId, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `newId`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **newId**: `"$"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5328

#### xgroup(subcommand, key, groupname, newId, entriesReadToken, entriesRead, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `newId`, `entriesReadToken`, `entriesRead`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **newId**: `"$"`

• **entriesReadToken**: `"ENTRIESREAD"`

• **entriesRead**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5329

#### xgroup(subcommand, key, groupname, newId, mkstream, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `newId`, `mkstream`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **newId**: `"$"`

• **mkstream**: `"MKSTREAM"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5330

#### xgroup(subcommand, key, groupname, newId, mkstream, entriesReadToken, entriesRead, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `newId`, `mkstream`, `entriesReadToken`, `entriesRead`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"CREATE"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **newId**: `"$"`

• **mkstream**: `"MKSTREAM"`

• **entriesReadToken**: `"ENTRIESREAD"`

• **entriesRead**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5331

#### xgroup(subcommand, key, groupname, consumername, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `consumername`, `callback`?): `Promise`\<`unknown`\>

Create a consumer in a consumer group.
- _group_: stream
- _complexity_: O(1)
- _since_: 6.2.0

##### Parameters

• **subcommand**: `"CREATECONSUMER"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **consumername**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5338

#### xgroup(subcommand, key, groupname, consumername, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `consumername`, `callback`?): `Promise`\<`unknown`\>

Delete a consumer from a consumer group.
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"DELCONSUMER"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **consumername**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5345

#### xgroup(subcommand, key, groupname, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `callback`?): `Promise`\<`unknown`\>

Destroy a consumer group.
- _group_: stream
- _complexity_: O(N) where N is the number of entries in the group's pending entries list (PEL).
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"DESTROY"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5352

#### xgroup(subcommand, callback)

> **xgroup**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5359

#### xgroup(subcommand, key, groupname, id, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `id`, `callback`?): `Promise`\<`unknown`\>

Set a consumer group to an arbitrary last delivered ID value.
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"SETID"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **id**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5366

#### xgroup(subcommand, key, groupname, id, entriesReadToken, entriesRead, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `id`, `entriesReadToken`, `entriesRead`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"SETID"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **id**: `string` \| `number` \| `Buffer`

• **entriesReadToken**: `"ENTRIESREAD"`

• **entriesRead**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5367

#### xgroup(subcommand, key, groupname, newId, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `newId`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"SETID"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **newId**: `"$"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5368

#### xgroup(subcommand, key, groupname, newId, entriesReadToken, entriesRead, callback)

> **xgroup**(`subcommand`, `key`, `groupname`, `newId`, `entriesReadToken`, `entriesRead`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"SETID"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **newId**: `"$"`

• **entriesReadToken**: `"ENTRIESREAD"`

• **entriesRead**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5369

***

### xinfo()

#### xinfo(subcommand, key, groupname, callback)

> **xinfo**(`subcommand`, `key`, `groupname`, `callback`?): `Promise`\<`unknown`\>

List the consumers in a consumer group
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"CONSUMERS"`

• **key**: `RedisKey`

• **groupname**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xinfo`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5376

#### xinfo(subcommand, key, callback)

> **xinfo**(`subcommand`, `key`, `callback`?): `Promise`\<`unknown`\>

List the consumer groups of a stream
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"GROUPS"`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xinfo`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5383

#### xinfo(subcommand, callback)

> **xinfo**(`subcommand`, `callback`?): `Promise`\<`unknown`\>

Show helpful text about the different subcommands
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"HELP"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xinfo`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5390

#### xinfo(subcommand, key, callback)

> **xinfo**(`subcommand`, `key`, `callback`?): `Promise`\<`unknown`\>

Get information about a stream
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **subcommand**: `"STREAM"`

• **key**: `RedisKey`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xinfo`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5397

#### xinfo(subcommand, key, fullToken, callback)

> **xinfo**(`subcommand`, `key`, `fullToken`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"STREAM"`

• **key**: `RedisKey`

• **fullToken**: `"FULL"`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xinfo`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5398

#### xinfo(subcommand, key, fullToken, countToken, count, callback)

> **xinfo**(`subcommand`, `key`, `fullToken`, `countToken`, `count`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **subcommand**: `"STREAM"`

• **key**: `RedisKey`

• **fullToken**: `"FULL"`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xinfo`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5399

***

### xlen()

> **xlen**(`key`, `callback`?): `Promise`\<`number`\>

Return the number of entries in a stream
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.xlen`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5406

***

### xpending()

#### xpending(key, group, callback)

> **xpending**(`key`, `group`, `callback`?): `Promise`\<`unknown`[]\>

Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.
- _group_: stream
- _complexity_: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). O(M), where M is the total number of entries scanned when used with the IDLE filter. When the command returns just the summary and the list of consumers is small, it runs in O(1) time; otherwise, an additional O(N) time for iterating every consumer.
- _since_: 5.0.0

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xpending`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5413

#### xpending(key, group, start, end, count, callback)

> **xpending**(`key`, `group`, `start`, `end`, `count`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xpending`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5414

#### xpending(key, group, start, end, count, consumer, callback)

> **xpending**(`key`, `group`, `start`, `end`, `count`, `consumer`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **count**: `string` \| `number`

• **consumer**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xpending`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5415

#### xpending(key, group, minIdleTimeToken, minIdleTime, start, end, count, callback)

> **xpending**(`key`, `group`, `minIdleTimeToken`, `minIdleTime`, `start`, `end`, `count`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **minIdleTimeToken**: `"IDLE"`

• **minIdleTime**: `string` \| `number`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xpending`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5416

#### xpending(key, group, minIdleTimeToken, minIdleTime, start, end, count, consumer, callback)

> **xpending**(`key`, `group`, `minIdleTimeToken`, `minIdleTime`, `start`, `end`, `count`, `consumer`, `callback`?): `Promise`\<`unknown`[]\>

##### Parameters

• **key**: `RedisKey`

• **group**: `string` \| `Buffer`

• **minIdleTimeToken**: `"IDLE"`

• **minIdleTime**: `string` \| `number`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **count**: `string` \| `number`

• **consumer**: `string` \| `Buffer`

• **callback?**: `Callback`\<`unknown`[]\>

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xpending`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5417

***

### xrange()

#### xrange(key, start, end, callback)

> **xrange**(`key`, `start`, `end`, `callback`?): `Promise`\<[`string`, `string`[]][]\>

Return a range of elements in a stream, with IDs matching the specified IDs interval
- _group_: stream
- _complexity_: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
- _since_: 5.0.0

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<[`string`, `string`[]][]\>

##### Returns

`Promise`\<[`string`, `string`[]][]\>

##### Inherited from

`Redis.xrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5424

#### xrange(key, start, end, countToken, count, callback)

> **xrange**(`key`, `start`, `end`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]][]\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]][]\>

##### Returns

`Promise`\<[`string`, `string`[]][]\>

##### Inherited from

`Redis.xrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5426

***

### xrangeBuffer()

#### xrangeBuffer(key, start, end, callback)

> **xrangeBuffer**(`key`, `start`, `end`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]][]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Inherited from

`Redis.xrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5425

#### xrangeBuffer(key, start, end, countToken, count, callback)

> **xrangeBuffer**(`key`, `start`, `end`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number` \| `Buffer`

• **end**: `string` \| `number` \| `Buffer`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]][]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Inherited from

`Redis.xrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5427

***

### xread()

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
- _group_: stream
- _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`string`, [`string`, `string`[]][]][]\>]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5434

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Parameters

• ...**args**: [`"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5456

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Parameters

• ...**args**: [`"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`string`, [`string`, `string`[]][]][]\>]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5464

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Parameters

• ...**args**: [`"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5490

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`string`, [`string`, `string`[]][]][]\>]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5508

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5534

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`string`, [`string`, `string`[]][]][]\>]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5552

#### xread(args)

> **xread**(...`args`): `Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`string`, [`string`, `string`[]][]][]\>

##### Inherited from

`Redis.xread`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5582

***

### xreadBuffer()

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5445

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5460

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5477

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5499

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5521

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5543

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5567

#### xreadBuffer(args)

> **xreadBuffer**(...`args`): `Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Parameters

• ...**args**: [`"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<[`Buffer`, [`Buffer`, `Buffer`[]][]][]\>

##### Inherited from

`Redis.xreadBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5593

***

### xreadgroup()

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
- _group_: stream
- _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
- _since_: 5.0.0

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5610

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5618

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5625

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5634

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5642

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5652

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"BLOCK"`, `string` \| `number`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5661

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"BLOCK"`, `string` \| `number`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5672

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5682

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5692

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5701

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5712

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5722

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5734

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`, `Callback`\<`unknown`[]\>]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5745

#### xreadgroup(args)

> **xreadgroup**(...`args`): `Promise`\<`unknown`[]\>

##### Parameters

• ...**args**: [`"GROUP"`, `string` \| `Buffer`, `string` \| `Buffer`, `"COUNT"`, `string` \| `number`, `"BLOCK"`, `string` \| `number`, `"NOACK"`, `"STREAMS"`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`unknown`[]\>

##### Inherited from

`Redis.xreadgroup`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5758

***

### xrevrange()

#### xrevrange(key, end, start, callback)

> **xrevrange**(`key`, `end`, `start`, `callback`?): `Promise`\<[`string`, `string`[]][]\>

Return a range of elements in a stream, with IDs matching the specified IDs interval, in reverse order (from greater to smaller IDs) compared to XRANGE
- _group_: stream
- _complexity_: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
- _since_: 5.0.0

##### Parameters

• **key**: `RedisKey`

• **end**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<[`string`, `string`[]][]\>

##### Returns

`Promise`\<[`string`, `string`[]][]\>

##### Inherited from

`Redis.xrevrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5776

#### xrevrange(key, end, start, countToken, count, callback)

> **xrevrange**(`key`, `end`, `start`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]][]\>

##### Parameters

• **key**: `RedisKey`

• **end**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]][]\>

##### Returns

`Promise`\<[`string`, `string`[]][]\>

##### Inherited from

`Redis.xrevrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5778

***

### xrevrangeBuffer()

#### xrevrangeBuffer(key, end, start, callback)

> **xrevrangeBuffer**(`key`, `end`, `start`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Parameters

• **key**: `RedisKey`

• **end**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]][]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Inherited from

`Redis.xrevrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5777

#### xrevrangeBuffer(key, end, start, countToken, count, callback)

> **xrevrangeBuffer**(`key`, `end`, `start`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Parameters

• **key**: `RedisKey`

• **end**: `string` \| `number` \| `Buffer`

• **start**: `string` \| `number` \| `Buffer`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]][]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]][]\>

##### Inherited from

`Redis.xrevrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5779

***

### xsetid()

#### xsetid(key, lastId, callback)

> **xsetid**(`key`, `lastId`, `callback`?): `Promise`\<`unknown`\>

An internal command for replicating stream values
- _group_: stream
- _complexity_: O(1)
- _since_: 5.0.0

##### Parameters

• **key**: `RedisKey`

• **lastId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xsetid`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5786

#### xsetid(key, lastId, maxDeletedEntryIdToken, maxDeletedEntryId, callback)

> **xsetid**(`key`, `lastId`, `maxDeletedEntryIdToken`, `maxDeletedEntryId`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **lastId**: `string` \| `number` \| `Buffer`

• **maxDeletedEntryIdToken**: `"MAXDELETEDID"`

• **maxDeletedEntryId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xsetid`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5787

#### xsetid(key, lastId, entriesAddedToken, entriesAdded, callback)

> **xsetid**(`key`, `lastId`, `entriesAddedToken`, `entriesAdded`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **lastId**: `string` \| `number` \| `Buffer`

• **entriesAddedToken**: `"ENTRIESADDED"`

• **entriesAdded**: `string` \| `number`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xsetid`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5788

#### xsetid(key, lastId, entriesAddedToken, entriesAdded, maxDeletedEntryIdToken, maxDeletedEntryId, callback)

> **xsetid**(`key`, `lastId`, `entriesAddedToken`, `entriesAdded`, `maxDeletedEntryIdToken`, `maxDeletedEntryId`, `callback`?): `Promise`\<`unknown`\>

##### Parameters

• **key**: `RedisKey`

• **lastId**: `string` \| `number` \| `Buffer`

• **entriesAddedToken**: `"ENTRIESADDED"`

• **entriesAdded**: `string` \| `number`

• **maxDeletedEntryIdToken**: `"MAXDELETEDID"`

• **maxDeletedEntryId**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`unknown`\>

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.xsetid`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5789

***

### xtrim()

#### xtrim(key, maxlen, threshold, callback)

> **xtrim**(`key`, `maxlen`, `threshold`, `callback`?): `Promise`\<`number`\>

Trims the stream to (approximately if '~' is passed) a certain size
- _group_: stream
- _complexity_: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
- _since_: 5.0.0

##### Parameters

• **key**: `RedisKey`

• **maxlen**: `"MAXLEN"`

• **threshold**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5796

#### xtrim(key, maxlen, threshold, countToken, count, callback)

> **xtrim**(`key`, `maxlen`, `threshold`, `countToken`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **maxlen**: `"MAXLEN"`

• **threshold**: `string` \| `number` \| `Buffer`

• **countToken**: `"LIMIT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5797

#### xtrim(key, maxlen, equal, threshold, callback)

> **xtrim**(`key`, `maxlen`, `equal`, `threshold`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **maxlen**: `"MAXLEN"`

• **equal**: `"="`

• **threshold**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5798

#### xtrim(key, maxlen, equal, threshold, countToken, count, callback)

> **xtrim**(`key`, `maxlen`, `equal`, `threshold`, `countToken`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **maxlen**: `"MAXLEN"`

• **equal**: `"="`

• **threshold**: `string` \| `number` \| `Buffer`

• **countToken**: `"LIMIT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5799

#### xtrim(key, maxlen, approximately, threshold, callback)

> **xtrim**(`key`, `maxlen`, `approximately`, `threshold`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **maxlen**: `"MAXLEN"`

• **approximately**: `"~"`

• **threshold**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5800

#### xtrim(key, maxlen, approximately, threshold, countToken, count, callback)

> **xtrim**(`key`, `maxlen`, `approximately`, `threshold`, `countToken`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **maxlen**: `"MAXLEN"`

• **approximately**: `"~"`

• **threshold**: `string` \| `number` \| `Buffer`

• **countToken**: `"LIMIT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5801

#### xtrim(key, minid, threshold, callback)

> **xtrim**(`key`, `minid`, `threshold`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **minid**: `"MINID"`

• **threshold**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5802

#### xtrim(key, minid, threshold, countToken, count, callback)

> **xtrim**(`key`, `minid`, `threshold`, `countToken`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **minid**: `"MINID"`

• **threshold**: `string` \| `number` \| `Buffer`

• **countToken**: `"LIMIT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5803

#### xtrim(key, minid, equal, threshold, callback)

> **xtrim**(`key`, `minid`, `equal`, `threshold`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **minid**: `"MINID"`

• **equal**: `"="`

• **threshold**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5804

#### xtrim(key, minid, equal, threshold, countToken, count, callback)

> **xtrim**(`key`, `minid`, `equal`, `threshold`, `countToken`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **minid**: `"MINID"`

• **equal**: `"="`

• **threshold**: `string` \| `number` \| `Buffer`

• **countToken**: `"LIMIT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5805

#### xtrim(key, minid, approximately, threshold, callback)

> **xtrim**(`key`, `minid`, `approximately`, `threshold`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **minid**: `"MINID"`

• **approximately**: `"~"`

• **threshold**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5806

#### xtrim(key, minid, approximately, threshold, countToken, count, callback)

> **xtrim**(`key`, `minid`, `approximately`, `threshold`, `countToken`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **key**: `RedisKey`

• **minid**: `"MINID"`

• **approximately**: `"~"`

• **threshold**: `string` \| `number` \| `Buffer`

• **countToken**: `"LIMIT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.xtrim`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5807

***

### zadd()

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

Add one or more members to a sorted set, or update its score if it already exists
- _group_: sorted-set
- _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
- _since_: 1.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5814

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5819

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5820

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5832

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5842

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5848

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5853

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5867

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5879

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5885

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5890

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5904

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5916

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5923

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5929

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5945

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5959

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5965

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5970

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5984

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5996

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6003

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6009

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6025

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6039

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6045

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6050

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6064

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6076

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6083

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6089

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6105

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6119

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6126

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6132

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6148

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6162

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6170

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6177

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6195

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6211

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6218

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6224

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6240

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6254

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6262

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6269

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6287

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6303

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6309

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6314

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6328

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6340

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6347

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6353

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6369

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6383

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6390

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6396

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6412

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6426

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6434

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6441

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6459

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6475

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6482

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6488

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6504

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6518

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"CH"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6526

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`string`\>]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6533

#### zadd(args)

> **zadd**(...`args`): `Promise`\<`string`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zadd`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6551

***

### zaddBuffer()

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5826

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5837

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5860

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5873

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5897

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5910

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5937

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5952

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5977

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:5990

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6017

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6032

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6057

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6070

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6097

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6112

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6140

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6155

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6186

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6203

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6232

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6247

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6278

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"NX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6295

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6321

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6334

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6361

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6376

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6404

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6419

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6450

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"GT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6467

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6496

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6511

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`\>]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6542

#### zaddBuffer(args)

> **zaddBuffer**(...`args`): `Promise`\<`Buffer`\>

##### Parameters

• ...**args**: [`RedisKey`, `"XX"`, `"LT"`, `"CH"`, `"INCR"`, ...scoreMembers: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zaddBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6559

***

### zcard()

> **zcard**(`key`, `callback`?): `Promise`\<`number`\>

Get the number of members in a sorted set
- _group_: sorted-set
- _complexity_: O(1)
- _since_: 1.2.0

#### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zcard`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6573

***

### zcount()

> **zcount**(`key`, `min`, `max`, `callback`?): `Promise`\<`number`\>

Count the members in a sorted set with scores within the given values
- _group_: sorted-set
- _complexity_: O(log(N)) with N being the number of elements in the sorted set.
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zcount`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6580

***

### zdiff()

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

Subtract multiple sorted sets
- _group_: sorted-set
- _complexity_: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
- _since_: 6.2.0

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6587

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6597

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6607

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6609

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6611

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6623

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6635

#### zdiff(args)

> **zdiff**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zdiff`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6645

***

### zdiffBuffer()

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6592

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6602

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6608

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6610

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6617

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6629

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6640

#### zdiffBuffer(args)

> **zdiffBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zdiffBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6650

***

### zdiffstore()

#### zdiffstore(args)

> **zdiffstore**(...`args`): `Promise`\<`number`\>

Subtract multiple sorted sets and store the resulting sorted set in a new key
- _group_: sorted-set
- _complexity_: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
- _since_: 6.2.0

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6661

#### zdiffstore(args)

> **zdiffstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6667

#### zdiffstore(args)

> **zdiffstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6673

#### zdiffstore(args)

> **zdiffstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zdiffstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6678

***

### zincrby()

> **zincrby**(`key`, `increment`, `member`, `callback`?): `Promise`\<`string`\>

Increment the score of a member in a sorted set
- _group_: sorted-set
- _complexity_: O(log(N)) where N is the number of elements in the sorted set.
- _since_: 1.2.0

#### Parameters

• **key**: `RedisKey`

• **increment**: `string` \| `number`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.zincrby`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6685

***

### zincrbyBuffer()

> **zincrbyBuffer**(`key`, `increment`, `member`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **increment**: `string` \| `number`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.zincrbyBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6686

***

### zinter()

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

Intersect multiple sorted sets
- _group_: sorted-set
- _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
- _since_: 6.2.0

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6693

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6703

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6713

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6715

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6717

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6729

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6741

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6751

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6761

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6775

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6789

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6801

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6813

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6829

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6845

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6859

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6873

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6887

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6901

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6913

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6925

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6941

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6957

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6971

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6985

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6999

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7013

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7025

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7037

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7053

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7069

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7083

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7097

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7107

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7109

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7121

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7131

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7145

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7157

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7173

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7187

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7201

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7213

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7229

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7243

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7257

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7269

#### zinter(args)

> **zinter**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zinter`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7285

***

### zinterBuffer()

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6698

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6708

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6714

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6716

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6723

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6735

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6746

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6756

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6768

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6782

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6795

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6807

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6821

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6837

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6852

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6866

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6880

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6894

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6907

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6919

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6933

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6949

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6964

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6978

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:6992

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7006

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7019

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7031

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7045

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7061

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7076

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7090

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7102

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7108

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7115

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7126

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7138

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7151

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7165

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7180

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7194

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7207

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7221

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7236

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7250

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7263

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7277

#### zinterBuffer(args)

> **zinterBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zinterBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7292

***

### zintercard()

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

Intersect multiple sorted sets and return the cardinality of the result
- _group_: sorted-set
- _complexity_: O(N*K) worst case with N being the smallest input sorted set, K being the number of input sorted sets.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7305

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7310

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7315

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7316

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LIMIT"`, `string` \| `number`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7317

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LIMIT"`, `string` \| `number`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7324

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"LIMIT"`, `string` \| `number`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7331

#### zintercard(args)

> **zintercard**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"LIMIT"`, `string` \| `number`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zintercard`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7337

***

### zinterstore()

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

Intersect multiple sorted sets and store the resulting sorted set in a new key
- _group_: sorted-set
- _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
- _since_: 2.0.0

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7349

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7355

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7361

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7366

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7367

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7375

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7383

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7390

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7397

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7405

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7413

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7420

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7427

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7435

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7443

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7450

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7457

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7463

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7468

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7476

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7483

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7491

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7498

#### zinterstore(args)

> **zinterstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zinterstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7506

***

### zlexcount()

> **zlexcount**(`key`, `min`, `max`, `callback`?): `Promise`\<`number`\>

Count the number of members in a sorted set between a given lexicographical range
- _group_: sorted-set
- _complexity_: O(log(N)) with N being the number of elements in the sorted set.
- _since_: 2.8.9

#### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zlexcount`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7519

***

### zmpop()

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

Remove and return members with scores in a sorted set
- _group_: sorted-set
- _complexity_: O(K) + O(N*log(M)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.
- _since_: 7.0.0

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MIN"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7526

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MIN"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7532

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MIN"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7538

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MIN"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7539

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MIN"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7540

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MIN"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7548

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MIN"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7556

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MIN"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7563

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MAX"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7570

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MAX"`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7576

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MAX"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7582

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MAX"`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7583

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MAX"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7584

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MAX"`, `"COUNT"`, `string` \| `number`, `Callback`\<`unknown`\>]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7592

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"MAX"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7600

#### zmpop(args)

> **zmpop**(...`args`): `Promise`\<`unknown`\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"MAX"`, `"COUNT"`, `string` \| `number`]

##### Returns

`Promise`\<`unknown`\>

##### Inherited from

`Redis.zmpop`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7607

***

### zmscore()

#### zmscore(args)

> **zmscore**(...`args`): `Promise`\<`string`[]\>

Get the score associated with the given members in a sorted set
- _group_: sorted-set
- _complexity_: O(N) where N is the number of members being requested.
- _since_: 6.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zmscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7620

#### zmscore(args)

> **zmscore**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zmscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7630

#### zmscore(args)

> **zmscore**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zmscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7640

#### zmscore(args)

> **zmscore**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zmscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7642

***

### zmscoreBuffer()

#### zmscoreBuffer(args)

> **zmscoreBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zmscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7625

#### zmscoreBuffer(args)

> **zmscoreBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zmscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7635

#### zmscoreBuffer(args)

> **zmscoreBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zmscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7641

#### zmscoreBuffer(args)

> **zmscoreBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zmscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7643

***

### zpopmax()

#### zpopmax(key, callback)

> **zpopmax**(`key`, `callback`?): `Promise`\<`string`[]\>

Remove and return members with the highest scores in a sorted set
- _group_: sorted-set
- _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
- _since_: 5.0.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zpopmax`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7650

#### zpopmax(key, count, callback)

> **zpopmax**(`key`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zpopmax`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7652

***

### zpopmaxBuffer()

#### zpopmaxBuffer(key, callback)

> **zpopmaxBuffer**(`key`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zpopmaxBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7651

#### zpopmaxBuffer(key, count, callback)

> **zpopmaxBuffer**(`key`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zpopmaxBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7653

***

### zpopmin()

#### zpopmin(key, callback)

> **zpopmin**(`key`, `callback`?): `Promise`\<`string`[]\>

Remove and return members with the lowest scores in a sorted set
- _group_: sorted-set
- _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
- _since_: 5.0.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zpopmin`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7660

#### zpopmin(key, count, callback)

> **zpopmin**(`key`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zpopmin`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7662

***

### zpopminBuffer()

#### zpopminBuffer(key, callback)

> **zpopminBuffer**(`key`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zpopminBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7661

#### zpopminBuffer(key, count, callback)

> **zpopminBuffer**(`key`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zpopminBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7663

***

### zrandmember()

#### zrandmember(key, callback)

> **zrandmember**(`key`, `callback`?): `Promise`\<`string`\>

Get one or multiple random elements from a sorted set
- _group_: sorted-set
- _complexity_: O(N) where N is the number of elements returned
- _since_: 6.2.0

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`string`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

`Redis.zrandmember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7670

#### zrandmember(key, count, callback)

> **zrandmember**(`key`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrandmember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7672

#### zrandmember(key, count, withscores, callback)

> **zrandmember**(`key`, `count`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrandmember`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7674

***

### zrandmemberBuffer()

#### zrandmemberBuffer(key, callback)

> **zrandmemberBuffer**(`key`, `callback`?): `Promise`\<`Buffer`\>

##### Parameters

• **key**: `RedisKey`

• **callback?**: `Callback`\<`Buffer`\>

##### Returns

`Promise`\<`Buffer`\>

##### Inherited from

`Redis.zrandmemberBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7671

#### zrandmemberBuffer(key, count, callback)

> **zrandmemberBuffer**(`key`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrandmemberBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7673

#### zrandmemberBuffer(key, count, withscores, callback)

> **zrandmemberBuffer**(`key`, `count`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrandmemberBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7675

***

### zrange()

#### zrange(key, min, max, callback)

> **zrange**(`key`, `min`, `max`, `callback`?): `Promise`\<`string`[]\>

Return a range of members in a sorted set
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
- _since_: 1.2.0

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7682

#### zrange(key, min, max, withscores, callback)

> **zrange**(`key`, `min`, `max`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7684

#### zrange(key, min, max, offsetCountToken, offset, count, callback)

> **zrange**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7686

#### zrange(key, min, max, offsetCountToken, offset, count, withscores, callback)

> **zrange**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7688

#### zrange(key, min, max, rev, callback)

> **zrange**(`key`, `min`, `max`, `rev`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7690

#### zrange(key, min, max, rev, withscores, callback)

> **zrange**(`key`, `min`, `max`, `rev`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7692

#### zrange(key, min, max, rev, offsetCountToken, offset, count, callback)

> **zrange**(`key`, `min`, `max`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7694

#### zrange(key, min, max, rev, offsetCountToken, offset, count, withscores, callback)

> **zrange**(`key`, `min`, `max`, `rev`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7696

#### zrange(key, min, max, byscore, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7698

#### zrange(key, min, max, byscore, withscores, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7700

#### zrange(key, min, max, byscore, offsetCountToken, offset, count, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7702

#### zrange(key, min, max, byscore, offsetCountToken, offset, count, withscores, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7704

#### zrange(key, min, max, byscore, rev, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `rev`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7706

#### zrange(key, min, max, byscore, rev, withscores, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `rev`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7708

#### zrange(key, min, max, byscore, rev, offsetCountToken, offset, count, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7710

#### zrange(key, min, max, byscore, rev, offsetCountToken, offset, count, withscores, callback)

> **zrange**(`key`, `min`, `max`, `byscore`, `rev`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7712

#### zrange(key, min, max, bylex, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7714

#### zrange(key, min, max, bylex, withscores, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7716

#### zrange(key, min, max, bylex, offsetCountToken, offset, count, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7718

#### zrange(key, min, max, bylex, offsetCountToken, offset, count, withscores, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7720

#### zrange(key, min, max, bylex, rev, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `rev`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7722

#### zrange(key, min, max, bylex, rev, withscores, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `rev`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7724

#### zrange(key, min, max, bylex, rev, offsetCountToken, offset, count, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7726

#### zrange(key, min, max, bylex, rev, offsetCountToken, offset, count, withscores, callback)

> **zrange**(`key`, `min`, `max`, `bylex`, `rev`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7728

***

### zrangeBuffer()

#### zrangeBuffer(key, min, max, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7683

#### zrangeBuffer(key, min, max, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7685

#### zrangeBuffer(key, min, max, offsetCountToken, offset, count, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7687

#### zrangeBuffer(key, min, max, offsetCountToken, offset, count, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7689

#### zrangeBuffer(key, min, max, rev, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `rev`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7691

#### zrangeBuffer(key, min, max, rev, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `rev`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7693

#### zrangeBuffer(key, min, max, rev, offsetCountToken, offset, count, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7695

#### zrangeBuffer(key, min, max, rev, offsetCountToken, offset, count, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `rev`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7697

#### zrangeBuffer(key, min, max, byscore, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7699

#### zrangeBuffer(key, min, max, byscore, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7701

#### zrangeBuffer(key, min, max, byscore, offsetCountToken, offset, count, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7703

#### zrangeBuffer(key, min, max, byscore, offsetCountToken, offset, count, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7705

#### zrangeBuffer(key, min, max, byscore, rev, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `rev`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7707

#### zrangeBuffer(key, min, max, byscore, rev, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `rev`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7709

#### zrangeBuffer(key, min, max, byscore, rev, offsetCountToken, offset, count, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7711

#### zrangeBuffer(key, min, max, byscore, rev, offsetCountToken, offset, count, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `byscore`, `rev`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7713

#### zrangeBuffer(key, min, max, bylex, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7715

#### zrangeBuffer(key, min, max, bylex, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7717

#### zrangeBuffer(key, min, max, bylex, offsetCountToken, offset, count, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7719

#### zrangeBuffer(key, min, max, bylex, offsetCountToken, offset, count, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7721

#### zrangeBuffer(key, min, max, bylex, rev, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `rev`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7723

#### zrangeBuffer(key, min, max, bylex, rev, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `rev`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7725

#### zrangeBuffer(key, min, max, bylex, rev, offsetCountToken, offset, count, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7727

#### zrangeBuffer(key, min, max, bylex, rev, offsetCountToken, offset, count, withscores, callback)

> **zrangeBuffer**(`key`, `min`, `max`, `bylex`, `rev`, `offsetCountToken`, `offset`, `count`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7729

***

### zrangebylex()

#### zrangebylex(key, min, max, callback)

> **zrangebylex**(`key`, `min`, `max`, `callback`?): `Promise`\<`string`[]\>

Return a range of members in a sorted set, by lexicographical range
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
- _since_: 2.8.9

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrangebylex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7736

#### zrangebylex(key, min, max, offsetCountToken, offset, count, callback)

> **zrangebylex**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrangebylex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7738

***

### zrangebylexBuffer()

#### zrangebylexBuffer(key, min, max, callback)

> **zrangebylexBuffer**(`key`, `min`, `max`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangebylexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7737

#### zrangebylexBuffer(key, min, max, offsetCountToken, offset, count, callback)

> **zrangebylexBuffer**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangebylexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7739

***

### zrangebyscore()

#### zrangebyscore(key, min, max, callback)

> **zrangebyscore**(`key`, `min`, `max`, `callback`?): `Promise`\<`string`[]\>

Return a range of members in a sorted set, by score
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
- _since_: 1.0.5

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7746

#### zrangebyscore(key, min, max, offsetCountToken, offset, count, callback)

> **zrangebyscore**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7748

#### zrangebyscore(key, min, max, withscores, callback)

> **zrangebyscore**(`key`, `min`, `max`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7750

#### zrangebyscore(key, min, max, withscores, offsetCountToken, offset, count, callback)

> **zrangebyscore**(`key`, `min`, `max`, `withscores`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7752

***

### zrangebyscoreBuffer()

#### zrangebyscoreBuffer(key, min, max, callback)

> **zrangebyscoreBuffer**(`key`, `min`, `max`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7747

#### zrangebyscoreBuffer(key, min, max, offsetCountToken, offset, count, callback)

> **zrangebyscoreBuffer**(`key`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7749

#### zrangebyscoreBuffer(key, min, max, withscores, callback)

> **zrangebyscoreBuffer**(`key`, `min`, `max`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7751

#### zrangebyscoreBuffer(key, min, max, withscores, offsetCountToken, offset, count, callback)

> **zrangebyscoreBuffer**(`key`, `min`, `max`, `withscores`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7753

***

### zrangestore()

#### zrangestore(dst, src, min, max, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `callback`?): `Promise`\<`number`\>

Store a range of members from sorted set into another key
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements stored into the destination key.
- _since_: 6.2.0

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7760

#### zrangestore(dst, src, min, max, offsetCountToken, offset, count, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7761

#### zrangestore(dst, src, min, max, rev, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `rev`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7762

#### zrangestore(dst, src, min, max, rev, offsetCountToken, offset, count, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7763

#### zrangestore(dst, src, min, max, byscore, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `byscore`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7764

#### zrangestore(dst, src, min, max, byscore, offsetCountToken, offset, count, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `byscore`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7765

#### zrangestore(dst, src, min, max, byscore, rev, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `byscore`, `rev`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7766

#### zrangestore(dst, src, min, max, byscore, rev, offsetCountToken, offset, count, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `byscore`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **byscore**: `"BYSCORE"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7767

#### zrangestore(dst, src, min, max, bylex, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `bylex`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7768

#### zrangestore(dst, src, min, max, bylex, offsetCountToken, offset, count, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `bylex`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7769

#### zrangestore(dst, src, min, max, bylex, rev, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `bylex`, `rev`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7770

#### zrangestore(dst, src, min, max, bylex, rev, offsetCountToken, offset, count, callback)

> **zrangestore**(`dst`, `src`, `min`, `max`, `bylex`, `rev`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`number`\>

##### Parameters

• **dst**: `RedisKey`

• **src**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **bylex**: `"BYLEX"`

• **rev**: `"REV"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrangestore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7771

***

### zrank()

> **zrank**(`key`, `member`, `callback`?): `Promise`\<`number`\>

Determine the index of a member in a sorted set
- _group_: sorted-set
- _complexity_: O(log(N))
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zrank`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7778

***

### zrem()

#### zrem(args)

> **zrem**(...`args`): `Promise`\<`number`\>

Remove one or more members from a sorted set
- _group_: sorted-set
- _complexity_: O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.
- _since_: 1.2.0

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7785

#### zrem(args)

> **zrem**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7790

#### zrem(args)

> **zrem**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, ...members: (string \| number \| Buffer)\[\]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7795

#### zrem(args)

> **zrem**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, (`string` \| `number` \| `Buffer`)[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zrem`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7796

***

### zremrangebylex()

> **zremrangebylex**(`key`, `min`, `max`, `callback`?): `Promise`\<`number`\>

Remove all members in a sorted set between the given lexicographical range
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
- _since_: 2.8.9

#### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number` \| `Buffer`

• **max**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zremrangebylex`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7803

***

### zremrangebyrank()

> **zremrangebyrank**(`key`, `start`, `stop`, `callback`?): `Promise`\<`number`\>

Remove all members in a sorted set within the given indexes
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zremrangebyrank`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7810

***

### zremrangebyscore()

> **zremrangebyscore**(`key`, `min`, `max`, `callback`?): `Promise`\<`number`\>

Remove all members in a sorted set within the given scores
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
- _since_: 1.2.0

#### Parameters

• **key**: `RedisKey`

• **min**: `string` \| `number`

• **max**: `string` \| `number`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zremrangebyscore`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7817

***

### zrevrange()

#### zrevrange(key, start, stop, callback)

> **zrevrange**(`key`, `start`, `stop`, `callback`?): `Promise`\<`string`[]\>

Return a range of members in a sorted set, by index, with scores ordered from high to low
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
- _since_: 1.2.0

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7824

#### zrevrange(key, start, stop, withscores, callback)

> **zrevrange**(`key`, `start`, `stop`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrange`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7826

***

### zrevrangeBuffer()

#### zrevrangeBuffer(key, start, stop, callback)

> **zrevrangeBuffer**(`key`, `start`, `stop`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7825

#### zrevrangeBuffer(key, start, stop, withscores, callback)

> **zrevrangeBuffer**(`key`, `start`, `stop`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **start**: `string` \| `number`

• **stop**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangeBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7827

***

### zrevrangebylex()

#### zrevrangebylex(key, max, min, callback)

> **zrevrangebylex**(`key`, `max`, `min`, `callback`?): `Promise`\<`string`[]\>

Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
- _since_: 2.8.9

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number` \| `Buffer`

• **min**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrangebylex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7834

#### zrevrangebylex(key, max, min, offsetCountToken, offset, count, callback)

> **zrevrangebylex**(`key`, `max`, `min`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number` \| `Buffer`

• **min**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrangebylex`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7836

***

### zrevrangebylexBuffer()

#### zrevrangebylexBuffer(key, max, min, callback)

> **zrevrangebylexBuffer**(`key`, `max`, `min`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number` \| `Buffer`

• **min**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangebylexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7835

#### zrevrangebylexBuffer(key, max, min, offsetCountToken, offset, count, callback)

> **zrevrangebylexBuffer**(`key`, `max`, `min`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number` \| `Buffer`

• **min**: `string` \| `number` \| `Buffer`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangebylexBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7837

***

### zrevrangebyscore()

#### zrevrangebyscore(key, max, min, callback)

> **zrevrangebyscore**(`key`, `max`, `min`, `callback`?): `Promise`\<`string`[]\>

Return a range of members in a sorted set, by score, with scores ordered from high to low
- _group_: sorted-set
- _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
- _since_: 2.2.0

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7844

#### zrevrangebyscore(key, max, min, offsetCountToken, offset, count, callback)

> **zrevrangebyscore**(`key`, `max`, `min`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7846

#### zrevrangebyscore(key, max, min, withscores, callback)

> **zrevrangebyscore**(`key`, `max`, `min`, `withscores`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7848

#### zrevrangebyscore(key, max, min, withscores, offsetCountToken, offset, count, callback)

> **zrevrangebyscore**(`key`, `max`, `min`, `withscores`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`string`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`string`[]\>

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zrevrangebyscore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7850

***

### zrevrangebyscoreBuffer()

#### zrevrangebyscoreBuffer(key, max, min, callback)

> **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7845

#### zrevrangebyscoreBuffer(key, max, min, offsetCountToken, offset, count, callback)

> **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7847

#### zrevrangebyscoreBuffer(key, max, min, withscores, callback)

> **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `withscores`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7849

#### zrevrangebyscoreBuffer(key, max, min, withscores, offsetCountToken, offset, count, callback)

> **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `withscores`, `offsetCountToken`, `offset`, `count`, `callback`?): `Promise`\<`Buffer`[]\>

##### Parameters

• **key**: `RedisKey`

• **max**: `string` \| `number`

• **min**: `string` \| `number`

• **withscores**: `"WITHSCORES"`

• **offsetCountToken**: `"LIMIT"`

• **offset**: `string` \| `number`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<`Buffer`[]\>

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zrevrangebyscoreBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7851

***

### zrevrank()

> **zrevrank**(`key`, `member`, `callback`?): `Promise`\<`number`\>

Determine the index of a member in a sorted set, with scores ordered from high to low
- _group_: sorted-set
- _complexity_: O(log(N))
- _since_: 2.0.0

#### Parameters

• **key**: `RedisKey`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

`Redis.zrevrank`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7858

***

### zscan()

#### zscan(key, cursor, callback)

> **zscan**(`key`, `cursor`, `callback`?): `Promise`\<[`string`, `string`[]]\>

Incrementally iterate sorted sets elements and associated scores
- _group_: sorted-set
- _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
- _since_: 2.8.0

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.zscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7865

#### zscan(key, cursor, countToken, count, callback)

> **zscan**(`key`, `cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.zscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7867

#### zscan(key, cursor, patternToken, pattern, callback)

> **zscan**(`key`, `cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.zscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7869

#### zscan(key, cursor, patternToken, pattern, countToken, count, callback)

> **zscan**(`key`, `cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`string`, `string`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`string`, `string`[]]\>

##### Returns

`Promise`\<[`string`, `string`[]]\>

##### Inherited from

`Redis.zscan`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7871

***

### zscanBuffer()

#### zscanBuffer(key, cursor, callback)

> **zscanBuffer**(`key`, `cursor`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.zscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7866

#### zscanBuffer(key, cursor, countToken, count, callback)

> **zscanBuffer**(`key`, `cursor`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.zscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7868

#### zscanBuffer(key, cursor, patternToken, pattern, callback)

> **zscanBuffer**(`key`, `cursor`, `patternToken`, `pattern`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.zscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7870

#### zscanBuffer(key, cursor, patternToken, pattern, countToken, count, callback)

> **zscanBuffer**(`key`, `cursor`, `patternToken`, `pattern`, `countToken`, `count`, `callback`?): `Promise`\<[`Buffer`, `Buffer`[]]\>

##### Parameters

• **key**: `RedisKey`

• **cursor**: `string` \| `number`

• **patternToken**: `"MATCH"`

• **pattern**: `string`

• **countToken**: `"COUNT"`

• **count**: `string` \| `number`

• **callback?**: `Callback`\<[`Buffer`, `Buffer`[]]\>

##### Returns

`Promise`\<[`Buffer`, `Buffer`[]]\>

##### Inherited from

`Redis.zscanBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7872

***

### zscanBufferStream()

> **zscanBufferStream**(`key`, `options`?): `ScanStream`

#### Parameters

• **key**: `string`

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.zscanBufferStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:171

***

### zscanStream()

> **zscanStream**(`key`, `options`?): `ScanStream`

#### Parameters

• **key**: `string`

• **options?**: `ScanStreamOptions`

#### Returns

`ScanStream`

#### Inherited from

`Redis.zscanStream`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:170

***

### zscore()

> **zscore**(`key`, `member`, `callback`?): `Promise`\<`string`\>

Get the score associated with the given member in a sorted set
- _group_: sorted-set
- _complexity_: O(1)
- _since_: 1.2.0

#### Parameters

• **key**: `RedisKey`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`Redis.zscore`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7879

***

### zscoreBuffer()

> **zscoreBuffer**(`key`, `member`, `callback`?): `Promise`\<`Buffer`\>

#### Parameters

• **key**: `RedisKey`

• **member**: `string` \| `number` \| `Buffer`

• **callback?**: `Callback`\<`Buffer`\>

#### Returns

`Promise`\<`Buffer`\>

#### Inherited from

`Redis.zscoreBuffer`

#### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7880

***

### zunion()

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

Add multiple sorted sets
- _group_: sorted-set
- _complexity_: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
- _since_: 6.2.0

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7887

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7897

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7907

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7909

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7911

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7923

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7935

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7945

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7955

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7969

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7983

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7995

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8007

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8023

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8039

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8053

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8067

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8081

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8095

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8107

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8119

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8135

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8151

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8165

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8179

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8193

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8207

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8219

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8231

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8247

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8263

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8277

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8291

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8301

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8303

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8315

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8325

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8339

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8351

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8367

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8381

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8395

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8407

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8423

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8437

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8451

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`string`[]\>]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8463

#### zunion(args)

> **zunion**(...`args`): `Promise`\<`string`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`string`[]\>

##### Inherited from

`Redis.zunion`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8479

***

### zunionBuffer()

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7892

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7902

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7908

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7910

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7917

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7929

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7940

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7950

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7962

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7976

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:7989

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8001

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8015

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8031

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8046

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8060

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8074

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8088

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8101

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8113

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8127

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8143

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8158

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8172

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8186

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8200

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8213

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8225

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8239

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8255

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8270

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8284

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8296

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8302

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8309

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8320

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8332

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8345

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8359

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8374

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8388

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8401

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8415

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8430

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8444

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8457

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`, `Callback`\<`Buffer`[]\>]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8471

#### zunionBuffer(args)

> **zunionBuffer**(...`args`): `Promise`\<`Buffer`[]\>

##### Parameters

• ...**args**: [`string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `"WITHSCORES"`]

##### Returns

`Promise`\<`Buffer`[]\>

##### Inherited from

`Redis.zunionBuffer`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8486

***

### zunionstore()

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

Add multiple sorted sets and store the resulting sorted set in a new key
- _group_: sorted-set
- _complexity_: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
- _since_: 2.0.0

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8499

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8505

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8511

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[]]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8516

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8517

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8525

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8533

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8540

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8547

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8555

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8563

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8570

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8577

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8585

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...keys: RedisKey[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8593

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `RedisKey`[], `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8600

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8607

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8613

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8618

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"SUM"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8626

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8633

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MIN"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8641

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`, `Callback`\<`number`\>]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8648

#### zunionstore(args)

> **zunionstore**(...`args`): `Promise`\<`number`\>

##### Parameters

• ...**args**: [`RedisKey`, `string` \| `number`, `...args: RedisValue[]`, `"AGGREGATE"`, `"MAX"`]

##### Returns

`Promise`\<`number`\>

##### Inherited from

`Redis.zunionstore`

##### Defined in

node\_modules/ioredis/built/utils/RedisCommander.d.ts:8656

***

### createClient()

> `static` **createClient**(...`args`): `Redis`

Create a Redis instance.
This is the same as `new Redis()` but is included for compatibility with node-redis.

#### Parameters

• ...**args**: []

#### Returns

`Redis`

#### Inherited from

`Redis.createClient`

#### Defined in

node\_modules/ioredis/built/Redis.d.ts:41
