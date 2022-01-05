# Class: Miner

The miner API allows you to remote control the node’s mining operation and set various mining specific settings

## Constructors

### constructor

• **new Miner**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[miner.ts:11](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L11)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[miner.ts:7](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L7)

___

### port

• `Optional` **port**: `number`

#### Defined in

[miner.ts:8](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L8)

___

### url

• **url**: `string`

#### Defined in

[miner.ts:9](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L9)

## Methods

### Getdashrate

▸ **Getdashrate**(): `Promise`<`string`\>

Get your hashrate in H/s (Hash operations per second)

#### Returns

`Promise`<`string`\>

dashRate The hashrate in Hs (Hash operations per second)

#### Defined in

[miner.ts:20](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L20)

___

### setEtherbase

▸ **setEtherbase**(`etherbase`): `Promise`<`void`\>

Sets the etherbase, where mining rewards will go

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `etherbase` | `string` | The new etherbase. |

#### Returns

`Promise`<`void`\>

#### Defined in

[miner.ts:94](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L94)

___

### setExtra

▸ **setExtra**(): `Promise`<`void`\>

Sets the extra data a miner can include when miner blocks
 This is capped at 32 bytes

#### Returns

`Promise`<`void`\>

#### Defined in

[miner.ts:35](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L35)

___

### setGasPrice

▸ **setGasPrice**(`price`): `Promise`<`void`\>

Sets the minimal accepted gas price when mining transactions
 Any transactions that are below this limit are excluded from the mining process

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `price` | `number` | The new minimal accepted gas price when mining transactions. |

#### Returns

`Promise`<`void`\>

#### Defined in

[miner.ts:51](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L51)

___

### start

▸ **start**(): `Promise`<`void`\>

Start the CPU mining process with the given number of threads and generate a new DAG if need be

#### Returns

`Promise`<`void`\>

#### Defined in

[miner.ts:65](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L65)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stop the CPU mining operation

#### Returns

`Promise`<`void`\>

#### Defined in

[miner.ts:79](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L79)
