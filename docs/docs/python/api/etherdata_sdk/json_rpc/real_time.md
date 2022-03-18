## SubscriptionObject Objects

```python
@dataclass_json

@dataclass
class SubscriptionObject()
```

#### address

Either an address or an array of addresses. Only logs that are created from these addresses are returned (optional)

#### topics

Only logs which match the specified topics

## SupportedSubscriptionsResponseOutputObject Objects

```python
@dataclass_json

@dataclass
class SupportedSubscriptionsResponseOutputObject()
```

#### address

The transaction address

#### blockHash

The transaction block hash

#### blockNumber

The transaction block number

#### data

The transaction data

#### logIndex

The transaction log index

#### topics

The transaction topic(s)

#### transactionHash

The transaction hash

#### transactionIndex

The transaction index

## NewPendingTransactionsResponseParams Objects

```python
@dataclass_json

@dataclass
class NewPendingTransactionsResponseParams()
```

#### subscription

The subscription ID

#### result

The result address

## NewPendingTransactionsResponseTranscation Objects

```python
@dataclass_json

@dataclass
class NewPendingTransactionsResponseTranscation()
```

#### jsonrpc

The jsonrpc version

#### method

The subscription method

#### params

The parameters regarding the subscription

## NewPendingTransactionsResponse Objects

```python
@dataclass_json

@dataclass
class NewPendingTransactionsResponse()
```

#### hash

The hash for all transactions

#### transcation

The transaction

## SyncingResponseStatus Objects

```python
@dataclass_json

@dataclass
class SyncingResponseStatus()
```

#### startingBlock

The starting block number

#### currentBlock

The current block number

#### highestBlock

The highest block number

#### pulledStates

The pulled states

#### knownStates

The known states

## SyncingResponse Objects

```python
@dataclass_json

@dataclass
class SyncingResponse()
```

#### synchronized

Indicating that the synchronization has started (true) or finished (false)

#### status

An object with various progress indicators regarding the synchronization

## RealTime Objects

```python
class RealTime()
```

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

#### \_\_init\_\_

```python
def __init__(url: str)
```

#### create\_subscription

```python
def create_subscription(subscription_name_str_aaaaa_optional_any_) -> str
```

Subscriptions are created with a regular RPC call with etd_subscribe as method and the subscription name as first parameter
 If successful it returns the subscription id
#### Arguments

subscriptionName: The subscription name
aaaaa:
#### Returns

subscriptionID: The subscription ID

#### cancel\_subscription

```python
def cancel_subscription(subscription_i_d_str) -> bool
```

Subscriptions are cancelled with a regular RPC call with etd_unsubscribe as method and the subscription id as first parameter
 It returns a bool indicating if the subscription was cancelled successful
#### Arguments

subscriptionID: The subscription ID
#### Returns

cancelled: Indicating if the subscription was cancelled successful.

#### supported\_subscriptions

```python
def supported_subscriptions(
    subscription_object_subscription_object
) -> SupportedSubscriptionsResponseOutputObject
```

newHeads -Fires a notification each time a new header is appended to the chain, including chain reorganizations
 Users can use the bloom filter to determine if the block contains logs that are interested to them
 -In case of a chain reorganization the subscription will emit all new headers for the new chain
 Therefore the subscription can emit multiple headers on the same height

logs -Returns logs that are included in new imported blocks and match the given filter criteria
 -In case of a chain reorganization previous sent logs that are on the old chain will be resend with the removed property set to true
 Logs from transactions that ended up in the new chain are emitted
 Therefore a subscription can emit logs for the same transaction multiple times
#### Arguments

subscriptionObject: The object containing different opotional transcation fields
#### Returns

outputObject: The return Object of the function

#### new\_pending\_transactions

```python
def new_pending_transactions() -> NewPendingTransactionsResponse
```

Returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node
 Tansaction that was previously part of the canonical chain isn’t part of the new canonical chain after a reogranization its again emitted
#### Returns

hash: The hash for all transactions
transcation: The transaction

#### syncing

```python
def syncing() -> SyncingResponse
```

Indicates when the node starts or stops synchronizing
 The result can either be a boolean indicating that the synchronization has started (true), finished (false) or an object with various progress indicators
#### Returns

synchronized: Indicating that the synchronization has started (true) or finished (false)
status: An object with various progress indicators regarding the synchronization

