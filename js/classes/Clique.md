[etherdata-typescript](../README.md) / [Exports](../modules.md) / Clique

# Class: Clique

The clique API provides access to the state of the clique consensus engine
 You can use this API to manage signer votes and to check the health of a private network

## Table of contents

### Constructors

- [constructor](Clique.md#constructor)

### Properties

- [baseURL](Clique.md#baseurl)
- [port](Clique.md#port)
- [url](Clique.md#url)

### Methods

- [discard](Clique.md#discard)
- [getSigners](Clique.md#getsigners)
- [getSnapshot](Clique.md#getsnapshot)
- [getSnapshotAtHash](Clique.md#getsnapshotathash)
- [proposals](Clique.md#proposals)
- [propose](Clique.md#propose)
- [status](Clique.md#status)

## Constructors

### constructor

• **new Clique**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[clique.ts:37](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L37)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[clique.ts:33](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L33)

___

### port

• `Optional` **port**: `number`

#### Defined in

[clique.ts:34](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L34)

___

### url

• **url**: `string`

#### Defined in

[clique.ts:35](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L35)

## Methods

### discard

▸ **discard**(): `Promise`<`void`\>

This method drops a currently running proposal
 The signer will not cast further votes (either for or against) the address

#### Returns

`Promise`<`void`\>

#### Defined in

[clique.ts:123](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L123)

___

### getSigners

▸ **getSigners**(): `Promise`<`string`[]\>

Retrieves the list of authorized signers at the specified block

#### Returns

`Promise`<`string`[]\>

signerArray The list of authorized signers

#### Defined in

[clique.ts:77](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L77)

___

### getSnapshot

▸ **getSnapshot**(`number`): `Promise`<`GetSnapshotResponseSnapshot`\>

Retrieves a snapshot of all clique state at a given block

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number of the block |

#### Returns

`Promise`<`GetSnapshotResponseSnapshot`\>

snapshot Snapshot of all clique state at the given block

#### Defined in

[clique.ts:47](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L47)

___

### getSnapshotAtHash

▸ **getSnapshotAtHash**(): `Promise`<`any`\>

Retrieves the state snapshot at a given block

#### Returns

`Promise`<`any`\>

ststeSnapshot The tate snapshot at the block.

#### Defined in

[clique.ts:62](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L62)

___

### proposals

▸ **proposals**(): `Promise`<`string`\>

Returns the current proposals the node is voting on

#### Returns

`Promise`<`string`\>

proposal The current proposals

#### Defined in

[clique.ts:92](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L92)

___

### propose

▸ **propose**(): `Promise`<`void`\>

Adds a new authorization proposal that the signer will attempt to push through
 If the auth parameter is true, the local signer votes for the given address to be included in the set of authorized signers
 With auth set to false, the vote is against the address

#### Returns

`Promise`<`void`\>

#### Defined in

[clique.ts:108](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L108)

___

### status

▸ **status**(): `Promise`<`StatusResponse`\>

This is a debugging method which returns statistics about signer activity for the last 64 blocks

#### Returns

`Promise`<`StatusResponse`\>

inturnPercent Percentage of blocks signed in-turn

#### Defined in

[clique.ts:140](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/clique.ts#L140)
