[**@hikestack/sandbox**](/official/reference/sandbox/index.md) • **Docs**

***

[@hikestack/sandbox](/official/reference/sandbox/globals.md) / Sandbox

# Class: Sandbox

## Extends

- `default`

## Constructors

### new Sandbox()

> **new Sandbox**(`options`?): [`Sandbox`](/official/reference/sandbox/classes/Sandbox.md)

#### Parameters

• **options?**: `IOptionParams`

#### Returns

[`Sandbox`](/official/reference/sandbox/classes/Sandbox.md)

#### Overrides

`SandboxExec.constructor`

#### Defined in

[sandbox.ts:13](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/sandbox.ts#L13)

## Properties

### changeSubscriptions

> **changeSubscriptions**: `WeakMap`\<`object`, `Set`\<(`modification`) => `void`\>\>

#### Inherited from

`SandboxExec.changeSubscriptions`

#### Defined in

[exec.ts:64](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L64)

***

### context

> **context**: `IContext`

#### Inherited from

`SandboxExec.context`

#### Defined in

[exec.ts:59](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L59)

***

### evalContext?

> `optional` **evalContext**: `IEvalContext`

#### Inherited from

`SandboxExec.evalContext`

#### Defined in

[exec.ts:72](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L72)

***

### sandboxFunctions

> **sandboxFunctions**: `WeakMap`\<(...`args`) => `any`, `IExecContext`\>

#### Inherited from

`SandboxExec.sandboxFunctions`

#### Defined in

[exec.ts:68](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L68)

***

### setSubscriptions

> **setSubscriptions**: `WeakMap`\<`object`, `Map`\<`string`, `Set`\<(`modification`) => `void`\>\>\>

#### Inherited from

`SandboxExec.setSubscriptions`

#### Defined in

[exec.ts:60](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L60)

## Accessors

### SAFE\_GLOBALS

> `get` `static` **SAFE\_GLOBALS**(): `ISandboxGlobal`

#### Returns

`ISandboxGlobal`

#### Inherited from

`SandboxExec.SAFE_GLOBALS`

#### Defined in

[exec.ts:88](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L88)

***

### SAFE\_PROTOTYPES

> `get` `static` **SAFE\_PROTOTYPES**(): `Map`\<`any`, `Set`\<`string`\>\>

#### Returns

`Map`\<`any`, `Set`\<`string`\>\>

#### Inherited from

`SandboxExec.SAFE_PROTOTYPES`

#### Defined in

[exec.ts:145](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L145)

## Methods

### compile()

> **compile**\<`T`\>(`code`, `optimize`): (...`scopes`) => `object`

#### Type Parameters

• **T**

#### Parameters

• **code**: `string`

• **optimize**: `boolean` = `false`

#### Returns

`Function`

##### Parameters

• ...**scopes**: `IScope`[]

##### Returns

`object`

###### context

> **context**: `IExecContext`

###### run()

> **run**: () => `T`

###### Returns

`T`

#### Defined in

[sandbox.ts:38](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/sandbox.ts#L38)

***

### compileAsync()

> **compileAsync**\<`T`\>(`code`, `optimize`): (...`scopes`) => `object`

#### Type Parameters

• **T**

#### Parameters

• **code**: `string`

• **optimize**: `boolean` = `false`

#### Returns

`Function`

##### Parameters

• ...**scopes**: `IScope`[]

##### Returns

`object`

###### context

> **context**: `IExecContext`

###### run()

> **run**: () => `Promise`\<`T`\>

###### Returns

`Promise`\<`T`\>

#### Defined in

[sandbox.ts:53](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/sandbox.ts#L53)

***

### compileExpression()

> **compileExpression**\<`T`\>(`code`, `optimize`): (...`scopes`) => `object`

#### Type Parameters

• **T**

#### Parameters

• **code**: `string`

• **optimize**: `boolean` = `false`

#### Returns

`Function`

##### Parameters

• ...**scopes**: `IScope`[]

##### Returns

`object`

###### context

> **context**: `IExecContext`

###### run()

> **run**: () => `T`

###### Returns

`T`

#### Defined in

[sandbox.ts:71](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/sandbox.ts#L71)

***

### compileExpressionAsync()

> **compileExpressionAsync**\<`T`\>(`code`, `optimize`): (...`scopes`) => `object`

#### Type Parameters

• **T**

#### Parameters

• **code**: `string`

• **optimize**: `boolean` = `false`

#### Returns

`Function`

##### Parameters

• ...**scopes**: `IScope`[]

##### Returns

`object`

###### context

> **context**: `IExecContext`

###### run()

> **run**: () => `Promise`\<`T`\>

###### Returns

`Promise`\<`T`\>

#### Defined in

[sandbox.ts:86](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/sandbox.ts#L86)

***

### executeTree()

> **executeTree**\<`T`\>(`context`, `scopes`): `ExecReturn`\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **context**: `IExecContext`

• **scopes**: `IScope`[] = `[]`

#### Returns

`ExecReturn`\<`T`\>

#### Inherited from

`SandboxExec.executeTree`

#### Defined in

[exec.ts:227](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L227)

***

### executeTreeAsync()

> **executeTreeAsync**\<`T`\>(`context`, `scopes`): `Promise`\<`ExecReturn`\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

• **context**: `IExecContext`

• **scopes**: `IScope`[] = `[]`

#### Returns

`Promise`\<`ExecReturn`\<`T`\>\>

#### Inherited from

`SandboxExec.executeTreeAsync`

#### Defined in

[exec.ts:238](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L238)

***

### getContext()

> **getContext**(`fn`): `undefined` \| `IExecContext`

#### Parameters

• **fn**

#### Returns

`undefined` \| `IExecContext`

#### Inherited from

`SandboxExec.getContext`

#### Defined in

[exec.ts:223](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L223)

***

### subscribeGet()

> **subscribeGet**(`callback`, `context`): `object`

#### Parameters

• **callback**

• **context**: `IExecContext`

#### Returns

`object`

##### unsubscribe()

> **unsubscribe**: () => `void`

###### Returns

`void`

#### Inherited from

`SandboxExec.subscribeGet`

#### Defined in

[exec.ts:198](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L198)

***

### subscribeSet()

> **subscribeSet**(`obj`, `name`, `callback`, `context`): `object`

#### Parameters

• **obj**: `object`

• **name**: `string`

• **callback**

• **context**: `SandboxExec` \| `IExecContext`

#### Returns

`object`

##### unsubscribe()

> **unsubscribe**: () => `void`

###### Returns

`void`

#### Inherited from

`SandboxExec.subscribeSet`

#### Defined in

[exec.ts:206](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L206)

***

### subscribeSetGlobal()

> **subscribeSetGlobal**(`obj`, `name`, `callback`): `object`

#### Parameters

• **obj**: `object`

• **name**: `string`

• **callback**

#### Returns

`object`

##### unsubscribe()

> **unsubscribe**: () => `void`

###### Returns

`void`

#### Inherited from

`SandboxExec.subscribeSetGlobal`

#### Defined in

[exec.ts:215](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/exec.ts#L215)

***

### audit()

> `static` **audit**\<`T`\>(`code`, `scopes`): `ExecReturn`\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **code**: `string`

• **scopes**: `IScope`[] = `[]`

#### Returns

`ExecReturn`\<`T`\>

#### Defined in

[sandbox.ts:17](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/sandbox.ts#L17)

***

### parse()

> `static` **parse**(`code`): `IExecutionTree`

#### Parameters

• **code**: `string`

#### Returns

`IExecutionTree`

#### Defined in

[sandbox.ts:34](https://github.com/hikestack/hike/blob/5b5a0ebd12d6185b553ab0b289e36e1190d78992/packages/sandbox/src/sandbox.ts#L34)
