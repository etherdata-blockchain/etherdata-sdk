[etherdata-typescript](../README.md) / [Exports](../modules.md) / Real\_time

# Class: Real\_time

Getd v1
4 and later support publish / subscribe using JSON-RPC notifications
  This allows clients to wait for events instead of polling for them

It works by subscribing to particular events
 The node will return a subscription id
  For each event that matches the subscription a notification with relevant data is send toGetder  with the subscription id

Considerations 1
 Notifications are sent for current events and not for past events
 If your use case requires  you not to miss any notifications than subscriptions are probably not the best option
 2
 Subscriptions require a full duplex connection
 Getd offers such connections in the form of  WebSocket and IPC (enabled by default)
 3
 Subscriptions are coupled to a connection
 If the connection is closed all subscriptions that  are created over this connection are removed
 4
 Notifications are stored in an internal buffer and sent from this buffer to the client
 If the  client is unable to keep up and the number of buffered notifications reaches a  limit (currently 10k) the connection is closed
 Keep in mind that subscribing to some events  can cause a flood of notifications, e
g
 listening for all logs/blocks when the node starts to  synchronize

## Table of contents

### Constructors

- [constructor](Real_time.md#constructor)

### Properties

- [baseURL](Real_time.md#baseurl)
- [port](Real_time.md#port)
- [url](Real_time.md#url)

### Methods

- [cancelSubscription](Real_time.md#cancelsubscription)
- [createSubscription](Real_time.md#createsubscription)
- [newPendingTransactions](Real_time.md#newpendingtransactions)
- [supportedSubscriptions](Real_time.md#supportedsubscriptions)
- [syncing](Real_time.md#syncing)

## Constructors

### constructor

• **new Real_time**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[real_time.ts:77](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L77)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[real_time.ts:73](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L73)

___

### port

• `Optional` **port**: `number`

#### Defined in

[real_time.ts:74](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L74)

___

### url

• **url**: `string`

#### Defined in

[real_time.ts:75](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L75)

## Methods

### cancelSubscription

▸ **cancelSubscription**(`subscriptionID`): `Promise`<`boolean`\>

Subscriptions are cancelled with a regular RPC call with etd_unsubscribe as method and the subscription id as first parameter
 It returns a bool indicating if the subscription was cancelled successful

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionID` | `string` | The subscription ID |

#### Returns

`Promise`<`boolean`\>

cancelled Indicating if the subscription was cancelled successful.

#### Defined in

[real_time.ts:109](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L109)

___

### createSubscription

▸ **createSubscription**(`subscriptionName`, `aaaaa`): `Promise`<`string`\>

Subscriptions are created with a regular RPC call with etd_subscribe as method and the subscription name as first parameter
 If successful it returns the subscription id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionName` | `string` | The subscription name |
| `aaaaa` | `any` |  |

#### Returns

`Promise`<`string`\>

subscriptionID The subscription ID

#### Defined in

[real_time.ts:89](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L89)

___

### newPendingTransactions

▸ **newPendingTransactions**(): `Promise`<`NewPendingTransactionsResponse`\>

Returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node
 Tansaction that was previously part of the canonical chain isn’t part of the new canonical chain after a reogranization its again emitted

#### Returns

`Promise`<`NewPendingTransactionsResponse`\>

hash The hash for all transactions

#### Defined in

[real_time.ts:152](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L152)

___

### supportedSubscriptions

▸ **supportedSubscriptions**(`subscriptionObject`): `Promise`<`SupportedSubscriptionsResponseOutputObject`\>

newHeads -Fires a notification each time a new header is appended to the chain, including chain reorganizations
 Users can use the bloom filter to determine if the block contains logs that are interested to them
 -In case of a chain reorganization the subscription will emit all new headers for the new chain
 Therefore the subscription can emit multiple headers on the same height

logs -Returns logs that are included in new imported blocks and match the given filter criteria
 -In case of a chain reorganization previous sent logs that are on the old chain will be resend with the removed property set to true
 Logs from transactions that ended up in the new chain are emitted
 Therefore a subscription can emit logs for the same transaction multiple times

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionObject` | `SubscriptionObject` | The object containing different opotional transcation fields |

#### Returns

`Promise`<`SupportedSubscriptionsResponseOutputObject`\>

outputObject The return Object of the function

#### Defined in

[real_time.ts:133](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L133)

___

### syncing

▸ **syncing**(): `Promise`<`SyncingResponse`\>

Indicates when the node starts or stops synchronizing
 The result can either be a boolean indicating that the synchronization has started (true), finished (false) or an object with various progress indicators

#### Returns

`Promise`<`SyncingResponse`\>

synchronized Indicating that the synchronization has started (true) or finished (false)

#### Defined in

[real_time.ts:169](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/real_time.ts#L169)
