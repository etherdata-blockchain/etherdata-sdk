[etherdata-typescript](../README.md) / [Exports](../modules.md) / Txpool

# Class: Txpool

The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing

## Table of contents

### Constructors

- [constructor](Txpool.md#constructor)

### Properties

- [baseURL](Txpool.md#baseurl)
- [port](Txpool.md#port)
- [url](Txpool.md#url)

### Methods

- [content](Txpool.md#content)
- [inspect](Txpool.md#inspect)
- [status](Txpool.md#status)

## Constructors

### constructor

• **new Txpool**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[txpool.ts:51](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L51)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[txpool.ts:47](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L47)

___

### port

• `Optional` **port**: `number`

#### Defined in

[txpool.ts:48](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L48)

___

### url

• **url**: `string`

#### Defined in

[txpool.ts:49](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L49)

## Methods

### content

▸ **content**(): `Promise`<`ContentResponseTransactionObject`\>

The content inspection property can be queried to list the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only

The result is an object with two fields pending and queued
 Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
 These batches themselves are maps associating nonces with actual transactions

Please note, there may be multiple transactions associated with the same account and nonce
 This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)

#### Returns

`Promise`<`ContentResponseTransactionObject`\>

transactionObject The return transaction object

#### Defined in

[txpool.ts:67](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L67)

___

### inspect

▸ **inspect**(): `Promise`<`InspectResponseTransactionObject`\>

The inspect inspection property can be queried to list a textual summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
 This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues

The result is an object with two fields pending and queued
 Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
 These batches themselves are maps associating nonces with transactions summary strings

Please note, there may be multiple transactions associated with the same account and nonce
 This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)

#### Returns

`Promise`<`InspectResponseTransactionObject`\>

transactionObject the return transcation object

#### Defined in

[txpool.ts:90](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L90)

___

### status

▸ **status**(): `Promise`<`StatusResponseStatusObject`\>

The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only

The result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state

#### Returns

`Promise`<`StatusResponseStatusObject`\>

statusObject An object containing transaction status

#### Defined in

[txpool.ts:107](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L107)
