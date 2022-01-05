# Class: Etd

Getd provides several extensions to the standard etd JSON-RPC namespace

## Constructors

### constructor

• **new Etd**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[etd.ts:11](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/etd.ts#L11)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[etd.ts:7](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/etd.ts#L7)

___

### port

• `Optional` **port**: `number`

#### Defined in

[etd.ts:8](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/etd.ts#L8)

___

### url

• **url**: `string`

#### Defined in

[etd.ts:9](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/etd.ts#L9)

## Methods

### subscribe

▸ **subscribe**(): `Promise`<`void`\>

This method is used for real-time events through subscriptions
 See the subscription documentation for more information

#### Returns

`Promise`<`void`\>

#### Defined in

[etd.ts:20](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/etd.ts#L20)

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

This method is used for real-time events through subscriptions
 See the subscription documentation for more information

#### Returns

`Promise`<`void`\>

#### Defined in

[etd.ts:35](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/etd.ts#L35)
