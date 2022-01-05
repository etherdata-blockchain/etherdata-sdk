[etherdata-typescript](../README.md) / [Exports](../modules.md) / Json\_rpc\_methods

# Class: Json\_rpc\_methods

different methods to perform etd control

## Table of contents

### Constructors

- [constructor](Json_rpc_methods.md#constructor)

### Properties

- [baseURL](Json_rpc_methods.md#baseurl)
- [port](Json_rpc_methods.md#port)
- [url](Json_rpc_methods.md#url)

### Methods

- [accounts](Json_rpc_methods.md#accounts)
- [blockNumber](Json_rpc_methods.md#blocknumber)
- [call](Json_rpc_methods.md#call)
- [coinbase](Json_rpc_methods.md#coinbase)
- [compileSolidity](Json_rpc_methods.md#compilesolidity)
- [complieSerpent](Json_rpc_methods.md#complieserpent)
- [complpieLLL](Json_rpc_methods.md#complpielll)
- [estimateGas](Json_rpc_methods.md#estimategas)
- [gasPrice](Json_rpc_methods.md#gasprice)
- [getBalance](Json_rpc_methods.md#getbalance)
- [getBlockByHash](Json_rpc_methods.md#getblockbyhash)
- [getBlockByNumber](Json_rpc_methods.md#getblockbynumber)
- [getBlockTransactionCountByHash](Json_rpc_methods.md#getblocktransactioncountbyhash)
- [getBlockTransactionCountByNumber](Json_rpc_methods.md#getblocktransactioncountbynumber)
- [getCode](Json_rpc_methods.md#getcode)
- [getCompliers](Json_rpc_methods.md#getcompliers)
- [getFilterChanges](Json_rpc_methods.md#getfilterchanges)
- [getFilterLogs](Json_rpc_methods.md#getfilterlogs)
- [getLogs](Json_rpc_methods.md#getlogs)
- [getStorageAt](Json_rpc_methods.md#getstorageat)
- [getTransactionByBlockNumberAndIndex](Json_rpc_methods.md#gettransactionbyblocknumberandindex)
- [getTransactionByHash](Json_rpc_methods.md#gettransactionbyhash)
- [getTransactionByHashAndIndex](Json_rpc_methods.md#gettransactionbyhashandindex)
- [getTransactionCount](Json_rpc_methods.md#gettransactioncount)
- [getTransactionCountByHash](Json_rpc_methods.md#gettransactioncountbyhash)
- [getTransactionReceipt](Json_rpc_methods.md#gettransactionreceipt)
- [getUncleByBlockHashAndIndex](Json_rpc_methods.md#getunclebyblockhashandindex)
- [getUncleByBlockNumberAndIndex](Json_rpc_methods.md#getunclebyblocknumberandindex)
- [getUncleCountByBlockHash](Json_rpc_methods.md#getunclecountbyblockhash)
- [getUncleCountByBlockNumber](Json_rpc_methods.md#getunclecountbyblocknumber)
- [getWork](Json_rpc_methods.md#getwork)
- [hashrate](Json_rpc_methods.md#hashrate)
- [mining](Json_rpc_methods.md#mining)
- [newBlockFilter](Json_rpc_methods.md#newblockfilter)
- [newFilter](Json_rpc_methods.md#newfilter)
- [newPendingTransactionFilter](Json_rpc_methods.md#newpendingtransactionfilter)
- [protocalVersion](Json_rpc_methods.md#protocalversion)
- [sendRawTransaction](Json_rpc_methods.md#sendrawtransaction)
- [sendTranscation](Json_rpc_methods.md#sendtranscation)
- [sign](Json_rpc_methods.md#sign)
- [signTransaction](Json_rpc_methods.md#signtransaction)
- [submitHashrate](Json_rpc_methods.md#submithashrate)
- [submitWork](Json_rpc_methods.md#submitwork)
- [syncing](Json_rpc_methods.md#syncing)
- [uninstallFilter](Json_rpc_methods.md#uninstallfilter)

## Constructors

### constructor

• **new Json_rpc_methods**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[json_rpc_methods.ts:132](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L132)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[json_rpc_methods.ts:128](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L128)

___

### port

• `Optional` **port**: `number`

#### Defined in

[json_rpc_methods.ts:129](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L129)

___

### url

• **url**: `string`

#### Defined in

[json_rpc_methods.ts:130](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L130)

## Methods

### accounts

▸ **accounts**(): `Promise`<`any`[]\>

Returns a list of addresses owned by client

#### Returns

`Promise`<`any`[]\>

addressAccount The array of accouts

#### Defined in

[json_rpc_methods.ts:247](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L247)

___

### blockNumber

▸ **blockNumber**(): `Promise`<`string`\>

Returns the current block number

#### Returns

`Promise`<`string`\>

blockNumber The current blockNumber

#### Defined in

[json_rpc_methods.ts:156](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L156)

___

### call

▸ **call**(`obj`, `qUANTITY_TAG`): `Promise`<`string`\>

Executes a new message call immediately without creating a transaction on the block chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Obj` | The transaction object |
| `qUANTITY_TAG` | `string` | The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter. |

#### Returns

`Promise`<`string`\>

data The return value of executed contract.

#### Defined in

[json_rpc_methods.ts:491](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L491)

___

### coinbase

▸ **coinbase**(): `Promise`<`any`\>

Returns the client coinbase address

#### Returns

`Promise`<`any`\>

coinbase The client coinbase address

#### Defined in

[json_rpc_methods.ts:187](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L187)

___

### compileSolidity

▸ **compileSolidity**(`string`): `Promise`<`string`\>

Returns compiled solidity code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The source code. |

#### Returns

`Promise`<`string`\>

data The compiled source code.

#### Defined in

[json_rpc_methods.ts:698](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L698)

___

### complieSerpent

▸ **complieSerpent**(`string`): `Promise`<`string`\>

Returns compiled serpent code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The source code. |

#### Returns

`Promise`<`string`\>

data The compiled source code.

#### Defined in

[json_rpc_methods.ts:730](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L730)

___

### complpieLLL

▸ **complpieLLL**(`string`): `Promise`<`string`\>

Returns compiled LLL code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The source code. |

#### Returns

`Promise`<`string`\>

data The compiled source code.

#### Defined in

[json_rpc_methods.ts:714](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L714)

___

### estimateGas

▸ **estimateGas**(`obj`, `qUANTITY_TAG`): `Promise`<`string`\>

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
 The transaction will not be added to the blockchain
 Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Obj` | The transaction object |
| `qUANTITY_TAG` | `string` | The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter. |

#### Returns

`Promise`<`string`\>

quantity The amount of gas used.

#### Defined in

[json_rpc_methods.ts:510](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L510)

___

### gasPrice

▸ **gasPrice**(): `Promise`<`any`\>

Returns the current price per gas in wei

#### Returns

`Promise`<`any`\>

gasPrice The current price per gas in wei (8049999872 Wei in the example)

#### Defined in

[json_rpc_methods.ts:232](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L232)

___

### getBalance

▸ **getBalance**(`address`, `tag`): `Promise`<`number`\>

Returns the balance of the account of given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | DATA, 20 Bytes - address to check for balance |
| `tag` | `string` | QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter |

#### Returns

`Promise`<`number`\>

balance QUANTITY - integer of the current balance in wei.

#### Defined in

[json_rpc_methods.ts:264](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L264)

___

### getBlockByHash

▸ **getBlockByHash**(`data`, `bool`): `Promise`<`GetBlockByHashResponseObj`\>

Returns information about a block by hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 32 Bytes - Hash of a block. |
| `bool` | `boolean` | If true it returns the full transaction objects, if false only the hashes of the transactions. |

#### Returns

`Promise`<`GetBlockByHashResponseObj`\>

obj A block object, or null when no block was found

#### Defined in

[json_rpc_methods.ts:527](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L527)

___

### getBlockByNumber

▸ **getBlockByNumber**(`qUANTITY_TAG`, `bool`): `Promise`<`GetBlockByNumberResponseObj`\>

Returns information about a block by block number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qUANTITY_TAG` | `string` | The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter. |
| `bool` | `boolean` | If true it returns the full transaction objects, if false only the hashes of the transactions. |

#### Returns

`Promise`<`GetBlockByNumberResponseObj`\>

obj A block object, or null when no block was found

#### Defined in

[json_rpc_methods.ts:547](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L547)

___

### getBlockTransactionCountByHash

▸ **getBlockTransactionCountByHash**(`data`): `Promise`<`string`\>

Returns the number of transactions in a block from a block matching the given block hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 32 Bytes - The hash of a block |

#### Returns

`Promise`<`string`\>

quantity The integer of the number of transactions in this block.

#### Defined in

[json_rpc_methods.ts:335](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L335)

___

### getBlockTransactionCountByNumber

▸ **getBlockTransactionCountByNumber**(`qUANTITY_TAG`): `Promise`<`string`\>

Returns the number of transactions in a block matching the given block number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qUANTITY_TAG` | `string` | The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, see the default block parameter |

#### Returns

`Promise`<`string`\>

quantity The integer of the number of transactions in this block.

#### Defined in

[json_rpc_methods.ts:351](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L351)

___

### getCode

▸ **getCode**(`data`, `qUANTITY_TAG`): `Promise`<`string`\>

Returns code at a given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 20 Byter - The address |
| `qUANTITY_TAG` | `string` | The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter |

#### Returns

`Promise`<`string`\>

data The code from the given address.

#### Defined in

[json_rpc_methods.ts:402](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L402)

___

### getCompliers

▸ **getCompliers**(): `Promise`<`string`[]\>

Returns a list of available compilers in the client

#### Returns

`Promise`<`string`[]\>

array Array of available compilers.

#### Defined in

[json_rpc_methods.ts:682](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L682)

___

### getFilterChanges

▸ **getFilterChanges**(`quantity`): `Promise`<`Array`[]\>

Polling method for a filter, which returns an array of logs which occurred since last poll

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `string` | The filter id. |

#### Returns

`Promise`<`Array`[]\>

array Array of log objects, or an empty array if nothing has changed since last poll. For filters created with etd_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. [&quot;0x3454645634534...&quot;]. For filters created with etd_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. [&quot;0x6345343454645...&quot;].

#### Defined in

[json_rpc_methods.ts:818](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L818)

___

### getFilterLogs

▸ **getFilterLogs**(`quantity`): `Promise`<`any`[]\>

Returns an array of all logs matching filter with given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `string` | The filter id. |

#### Returns

`Promise`<`any`[]\>

array See etd_getFilterChanges.

#### Defined in

[json_rpc_methods.ts:834](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L834)

___

### getLogs

▸ **getLogs**(`obj`): `Promise`<`any`[]\>

Returns an array of all logs matching a given filter object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Obj` | The filter options |

#### Returns

`Promise`<`any`[]\>

array See etd_getFilterChanges.

#### Defined in

[json_rpc_methods.ts:850](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L850)

___

### getStorageAt

▸ **getStorageAt**(`address`, `position`, `tag`): `Promise`<`any`\>

Returns the value from a storage position at a given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `any` | DATA, 20 Bytes - address of the storage. |
| `position` | `any` | The integer of the position in the storage. |
| `tag` | `string` | QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter |

#### Returns

`Promise`<`any`\>

valur The value at this storage position.

#### Defined in

[json_rpc_methods.ts:282](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L282)

___

### getTransactionByBlockNumberAndIndex

▸ **getTransactionByBlockNumberAndIndex**(`qUANTITY_TAG`, `quantity`): `Promise`<`GetTransactionByBlockNumberAndIndexResponseObj`\>

Returns information about a transaction by block number and transaction index position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qUANTITY_TAG` | `string` | a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter. |
| `quantity` | `string` | The transaction index position. |

#### Returns

`Promise`<`GetTransactionByBlockNumberAndIndexResponseObj`\>

obj See etd_getTransactionByHash

#### Defined in

[json_rpc_methods.ts:605](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L605)

___

### getTransactionByHash

▸ **getTransactionByHash**(`data`): `Promise`<`GetTransactionByHashResponseObj`\>

Returns the information about a transaction requested by transaction hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 32 Bytes - hash of a transaction |

#### Returns

`Promise`<`GetTransactionByHashResponseObj`\>

obj A transaction object, or null when no transaction was found

#### Defined in

[json_rpc_methods.ts:566](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L566)

___

### getTransactionByHashAndIndex

▸ **getTransactionByHashAndIndex**(`data`, `quantity`): `Promise`<`GetTransactionByHashAndIndexResponseObj`\>

Returns information about a transaction by block hash and transaction index position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 32 Bytes - hash of a block. |
| `quantity` | `string` | The integer of the transaction index position. |

#### Returns

`Promise`<`GetTransactionByHashAndIndexResponseObj`\>

obj See etd_getTransactionByHash

#### Defined in

[json_rpc_methods.ts:585](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L585)

___

### getTransactionCount

▸ **getTransactionCount**(`address`, `state`): `Promise`<`number`\>

Returns the number of transactions sent from an address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `any` | The address. |
| `state` | `string` | QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter |

#### Returns

`Promise`<`number`\>

number The number of transactions send from this address.

#### Defined in

[json_rpc_methods.ts:299](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L299)

___

### getTransactionCountByHash

▸ **getTransactionCountByHash**(`data`, `qUANTITY_TAG`): `Promise`<`string`\>

Returns the number of transactions in a block from a block matching the given block hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 20 Bytes - The address |
| `qUANTITY_TAG` | `string` | integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter |

#### Returns

`Promise`<`string`\>

quantity The integer of the number of transactions send from this address.

#### Defined in

[json_rpc_methods.ts:316](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L316)

___

### getTransactionReceipt

▸ **getTransactionReceipt**(`data`): `Promise`<`GetTransactionReceiptResponseObj`\>

Returns the receipt of a transaction by transaction hash
 Note That the receipt is not available for pending transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 32 Bytes - hash of a transaction |

#### Returns

`Promise`<`GetTransactionReceiptResponseObj`\>

obj A transaction receipt object, or null when no receipt was found

#### Defined in

[json_rpc_methods.ts:625](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L625)

___

### getUncleByBlockHashAndIndex

▸ **getUncleByBlockHashAndIndex**(`data`, `quantity`): `Promise`<`GetUncleByBlockHashAndIndexResponseObj`\>

eturns information about a uncle of a block by hash and uncle index position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 32 Bytes - The hash of a block. |
| `quantity` | `string` | The uncle’s index position. |

#### Returns

`Promise`<`GetUncleByBlockHashAndIndexResponseObj`\>

obj See etd_getTransactionByHash Note - An uncle doesn’t contain individual transactions.

#### Defined in

[json_rpc_methods.ts:644](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L644)

___

### getUncleByBlockNumberAndIndex

▸ **getUncleByBlockNumberAndIndex**(`qUANTITY_TAG`, `quantity`): `Promise`<`GetUncleByBlockNumberAndIndexResponseObj`\>

Returns information about a uncle of a block by number and uncle index position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qUANTITY_TAG` | `string` | a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter. |
| `quantity` | `string` | the uncle’s index position. |

#### Returns

`Promise`<`GetUncleByBlockNumberAndIndexResponseObj`\>

obj See etd_getTransactionByHash Note - An uncle doesn’t contain individual transactions.

#### Defined in

[json_rpc_methods.ts:664](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L664)

___

### getUncleCountByBlockHash

▸ **getUncleCountByBlockHash**(`data`): `Promise`<`string`\>

Returns the number of uncles in a block from a block matching the given block hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 32 Bytes - The hash of a block |

#### Returns

`Promise`<`string`\>

qUANTITY_TAG The integer of the number of uncles in this block.

#### Defined in

[json_rpc_methods.ts:369](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L369)

___

### getUncleCountByBlockNumber

▸ **getUncleCountByBlockNumber**(`qUANTITY_TAG`): `Promise`<`string`\>

Returns the number of uncles in a block from a block matching the given block number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qUANTITY_TAG` | `string` | The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter |

#### Returns

`Promise`<`string`\>

quantity The integer of the number of uncles in this block.

#### Defined in

[json_rpc_methods.ts:385](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L385)

___

### getWork

▸ **getWork**(): `Promise`<`string`[]\>

Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)

#### Returns

`Promise`<`string`[]\>

array Array with the following properties -DATA, 32 Bytes - current block header pow-hash -DATA, 32 Bytes - the seed hash used for the DAG. -DATA, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.

#### Defined in

[json_rpc_methods.ts:865](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L865)

___

### hashrate

▸ **hashrate**(): `Promise`<`any`\>

Returns the number of hashes per second that the node is mining with

#### Returns

`Promise`<`any`\>

hashrate The number of hashes per second that the node is mining with

#### Defined in

[json_rpc_methods.ts:217](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L217)

___

### mining

▸ **mining**(): `Promise`<`boolean`\>

Returns true if client is actively mining new blocks

#### Returns

`Promise`<`boolean`\>

isMining True if client is actively mining new blocks.

#### Defined in

[json_rpc_methods.ts:202](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L202)

___

### newBlockFilter

▸ **newBlockFilter**(): `Promise`<`string`\>

Creates a filter in the node, to notify when a new block arrives
 To check if the state has changed, call etd_getFilterChanges

#### Returns

`Promise`<`string`\>

quantity A filter id.

#### Defined in

[json_rpc_methods.ts:767](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L767)

___

### newFilter

▸ **newFilter**(`obj`): `Promise`<`string`\>

Creates a filter object, based on filter options, to notify when the state changes (logs)
 To check if the state has changed, call etd_getFilterChanges

A note on specifying topic filters Topics are order-dependent
 A transaction with a log with topics [A, B] will be matched by the following topic filters
-[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Obj` | The filter options |

#### Returns

`Promise`<`string`\>

quantity A filter id.

#### Defined in

[json_rpc_methods.ts:751](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L751)

___

### newPendingTransactionFilter

▸ **newPendingTransactionFilter**(): `Promise`<`string`\>

Creates a filter in the node, to notify when new pending transactions arrive
 To check if the state has changed, call etd_getFilterChanges

#### Returns

`Promise`<`string`\>

quantity A filter id.

#### Defined in

[json_rpc_methods.ts:783](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L783)

___

### protocalVersion

▸ **protocalVersion**(): `Promise`<`string`\>

Returns the current etdereum protocol version

#### Returns

`Promise`<`string`\>

version The current etdereum protocol version

#### Defined in

[json_rpc_methods.ts:141](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L141)

___

### sendRawTransaction

▸ **sendRawTransaction**(`data`): `Promise`<`string`\>

Creates new message call transaction or a contract creation for signed transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | The signed transaction data. |

#### Returns

`Promise`<`string`\>

data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use etd_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

#### Defined in

[json_rpc_methods.ts:474](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L474)

___

### sendTranscation

▸ **sendTranscation**(`obj`): `Promise`<`string`\>

Creates new message call transaction or a contract creation, if the data field contains code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Obj` | The transaction object |

#### Returns

`Promise`<`string`\>

data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use etd_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

#### Defined in

[json_rpc_methods.ts:458](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L458)

___

### sign

▸ **sign**(`a`, `b`): `Promise`<`string`\>

The sign method calculates an etdereum specific signature with sign(keccak256(&quot;\x19etdereum Signed Message:\n&quot; + len(message) + message)))

By adding a prefix to the message makes the calculated signature recognisable as an etdereum specific signature
 This prevents misuse where a malicious DApp can sign arbitrary data (e
g
 transaction) and use the signature to impersonate the victim

Note the address to sign with must be unlocked

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | 20 Bytes - The address |
| `b` | `string` | N Bytes - The message to sign |

#### Returns

`Promise`<`string`\>

value The signature

#### Defined in

[json_rpc_methods.ts:426](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L426)

___

### signTransaction

▸ **signTransaction**(`obj`): `Promise`<`string`\>

Signs a transaction that can be submitted to the network at a later time using with etd_sendRawTransaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Obj` | The transaction object |

#### Returns

`Promise`<`string`\>

data The signed transaction object.

#### Defined in

[json_rpc_methods.ts:442](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L442)

___

### submitHashrate

▸ **submitHashrate**(`hashrate`, `id`): `Promise`<`boolean`\>

Used for submitting mining hashrate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashrate` | `string` | A hexadecimal string representation (32 bytes) of the hash rate |
| `id` | `string` | String - A random hexadecimal(32 bytes) ID identifying the client |

#### Returns

`Promise`<`boolean`\>

bool Returns `true` if submitting went through succesfully and `false` otherwise.

#### Defined in

[json_rpc_methods.ts:900](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L900)

___

### submitWork

▸ **submitWork**(`a`, `b`, `c`): `Promise`<`boolean`\>

Used for submitting a proof-of-work solution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | 8 Bytes - The nonce found (64 bits) |
| `b` | `string` | 32 Bytes - The header’s pow-hash (256 bits) |
| `c` | `string` | 32 Bytes - The mix digest (256 bits) |

#### Returns

`Promise`<`boolean`\>

bool returns true if the provided solution is valid, otherwise false.

#### Defined in

[json_rpc_methods.ts:883](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L883)

___

### syncing

▸ **syncing**(): `Promise`<`SyncingResponse`\>

Returns an object with data about the sync status or false

#### Returns

`Promise`<`SyncingResponse`\>

syncObject return this ONLY when syncing

#### Defined in

[json_rpc_methods.ts:172](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L172)

___

### uninstallFilter

▸ **uninstallFilter**(`quantity`): `Promise`<`boolean`\>

Uninstalls a filter with given id
 Should always be called when watch is no longer needed
 Additonally Filters timeout when they aren’t requested with etd_getFilterChanges
 for a period of time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quantity` | `string` | The filter id. |

#### Returns

`Promise`<`boolean`\>

bool true if the filter was successfully uninstalled, otherwise false.

#### Defined in

[json_rpc_methods.ts:802](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc_methods.ts#L802)
