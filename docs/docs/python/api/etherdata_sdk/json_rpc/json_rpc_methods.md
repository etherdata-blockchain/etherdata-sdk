---
sidebar_label: json_rpc_methods
title: etherdata_sdk.json_rpc.json_rpc_methods
---

## SyncingResponseSyncObject Objects

```python
@dataclass_json

@dataclass
class SyncingResponseSyncObject()
```

#### startingBlock

The block at which the import started (will only be reset, after the sync reached his head)

#### currentBlock

The current block, same as eth_blockNumber

#### highestBlock

The estimated highest block

## SyncingResponse Objects

```python
@dataclass_json

@dataclass
class SyncingResponse()
```

#### syncObject

return this ONLY when syncing

#### syncStatus

return this ONLY when not syncing

## Obj Objects

```python
@dataclass_json

@dataclass
class Obj()
```

#### from\_field

DATA, 20 Bytes - The address the transaction is sent from.

#### to

DATA, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.

#### gas

QUANTITY - (optional, default &quot;90000&quot;) Integer of the gas provided for the transaction execution. It will return unused gas.

#### gasPrice

QUANTITY - (optional, default &quot;To-Be-Determined&quot;) Integer of the gasPrice used for each paid gas, in Wei.

#### value

QUANTITY - (optional) Integer of the value sent with this transaction, in Wei.

#### data

DATA - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see etherdata Contract ABI.

#### nonce

QUANTITY - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.

## GetBlockByHashResponseObj Objects

```python
@dataclass_json

@dataclass
class GetBlockByHashResponseObj()
```

#### number

QUANTITY - The block number. null when its pending block.

#### hash

DATA, 32 Bytes - hash of the block. null when its pending block.

#### parnetHash

DATA, 32 Bytes - hash of the parent block.

#### nonce

DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.

#### sha3Uncles

DATA, 32 Bytes - SHA3 of the uncles data in the block.

#### logsBloom

DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.

#### transactionsRoot

DATA, 32 Bytes - the root of the transaction trie of the block.

#### miner

DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.

#### difficulty

QUANTITY - integer of the difficulty for this block.

#### totalDifficulty

QUANTITY - integer of the total difficulty of the chain until this block.

#### extraData

DATA - the “extra data” field of this block.

#### size

QUANTITY - integer the size of this block in bytes.

#### gasLimit

QUANTITY - the maximum gas allowed in this block.

#### gasUsed

QUANTITY - the total used gas by all transactions in this block.

#### timestamp

QUANTITY - the unix timestamp for when the block was collated.

#### transaction

Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.

#### uncles

Array - Array of uncle hashes.

## GetBlockByNumberResponseObj Objects

```python
@dataclass_json

@dataclass
class GetBlockByNumberResponseObj()
```

#### number

QUANTITY - The block number. null when its pending block.

#### hash

DATA, 32 Bytes - hash of the block. null when its pending block.

#### parnetHash

DATA, 32 Bytes - hash of the parent block.

#### nonce

DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.

#### sha3Uncles

DATA, 32 Bytes - SHA3 of the uncles data in the block.

#### logsBloom

DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.

#### transactionsRoot

DATA, 32 Bytes - the root of the transaction trie of the block.

#### miner

DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.

#### difficulty

QUANTITY - integer of the difficulty for this block.

#### totalDifficulty

QUANTITY - integer of the total difficulty of the chain until this block.

#### extraData

DATA - the “extra data” field of this block.

#### size

QUANTITY - integer the size of this block in bytes.

#### gasLimit

QUANTITY - the maximum gas allowed in this block.

#### gasUsed

QUANTITY - the total used gas by all transactions in this block.

#### timestamp

QUANTITY - the unix timestamp for when the block was collated.

#### transaction

Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.

#### uncles

Array - Array of uncle hashes.

## GetTransactionByHashResponseObj Objects

```python
@dataclass_json

@dataclass
class GetTransactionByHashResponseObj()
```

#### blockHash

DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.

#### blockNumber

QUANTITY - block number where this transaction was in. null when its pending.

#### from\_field

DATA, 20 Bytes - address of the sender.

#### gas

QUANTITY - gas provided by the sender.

#### gasParice

QUANTITY - gas price provided by the sender in Wei.

#### hash

DATA, 32 Bytes - hash of the transaction.

#### input

DATA - the data send along with the transaction.

#### nonce

QUANTITY - the number of transactions made by the sender prior to this one.

#### to

DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.

#### transactionIndex

QUANTITY - integer of the transactions index position in the block. null when its pending.

#### value

QUANTITY - value transferred in Wei.

#### v

QUANTITY - ECDSA recovery id

#### r

DATA, 32 Bytes - ECDSA signature r

#### s

DATA, 32 Bytes - ECDSA signature s

## GetTransactionByHashAndIndexResponseObj Objects

```python
@dataclass_json

@dataclass
class GetTransactionByHashAndIndexResponseObj()
```

#### data



## GetTransactionByBlockNumberAndIndexResponseObj Objects

```python
@dataclass_json

@dataclass
class GetTransactionByBlockNumberAndIndexResponseObj()
```

#### data



## GetTransactionReceiptResponseObj Objects

```python
@dataclass_json

@dataclass
class GetTransactionReceiptResponseObj()
```

#### transactionHash

DATA, 32 Bytes - hash of the transaction.

#### transactionIndex

QUANTITY - integer of the transactions index position in the block.

#### blockHash

DATA, 32 Bytes - hash of the block where this transaction was in.

#### blockNumber

QUANTITY - block number where this transaction was in.

#### from\_field

DATA, 20 Bytes - address of the sender.

#### to

DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.

#### cumulativeGasUsed

QUANTITY - The total amount of gas used when this transaction was executed in the block.

#### gasUsed

QUANTITY - The amount of gas used by this specific transaction alone.

#### contractAddress

DATA, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.

#### logs

Array - Array of log objects, which this transaction generated.

#### logsBloom

DATA, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

#### root

Either this or &quot;status&quot; is returned DATA 32 bytes of post-transaction stateroot (pre Byzantium)

#### status

Either this or &quot;root&quot; is returned QUANTITY either 1 (success) or 0 (failure)

## GetUncleByBlockHashAndIndexResponseObj Objects

```python
@dataclass_json

@dataclass
class GetUncleByBlockHashAndIndexResponseObj()
```

#### data



## GetUncleByBlockNumberAndIndexResponseObj Objects

```python
@dataclass_json

@dataclass
class GetUncleByBlockNumberAndIndexResponseObj()
```

#### data



## Array Objects

```python
@dataclass_json

@dataclass
class Array()
```

#### removed

TAG - true when the log was removed, due to a chain reorganization. false if its a valid log.

#### logIndex

QUANTITY - integer of the log index position in the block. null when its pending log.

#### transactionIndex

QUANTITY - integer of the transactions index position log was created from. null when its pending log.

#### transactionHash

DATA, 32 Bytes - hash of the transactions this log was created from. null when its pending log.

#### blockHash

DATA, 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log.

#### blockNumber

QUANTITY - the block number where this log was in. null when its pending. null when its pending log.

#### address

DATA, 20 Bytes - address from which this log originated.

#### data

DATA - contains one or more 32 Bytes non-indexed arguments of the log.

#### topics

Array of DATA - Array of 0 to 4 32 Bytes DATA of indexed log arguments. (In solidity - The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous specifier.)

## JsonRpcMethods Objects

```python
class JsonRpcMethods()
```

different methods to perform etd control

#### protocal\_version

```python
def protocal_version() -> str
```

Returns the current etherdata protocol version
#### Returns

version: The current etherdata protocol version

#### block\_number

```python
def block_number() -> str
```

Returns the current block number
#### Returns

blockNumber: The current blockNumber

#### syncing

```python
def syncing() -> SyncingResponse
```

Returns an object with data about the sync status or false
#### Returns [`SyncingResponse`](#syncingresponse-objects)

syncObject: return this ONLY when syncing
syncStatus: return this ONLY when not syncing

#### coinbase

```python
def coinbase() -> Any
```

Returns the client coinbase address
#### Returns

coinbase: The client coinbase address

#### mining

```python
def mining() -> bool
```

Returns true if client is actively mining new blocks
#### Returns

isMining: True if client is actively mining new blocks.

#### hashrate

```python
def hashrate() -> Any
```

Returns the number of hashes per second that the node is mining with
#### Returns

hashrate: The number of hashes per second that the node is mining with

#### gas\_price

```python
def gas_price() -> Any
```

Returns the current price per gas in wei
#### Returns

gasPrice: The current price per gas in wei (8049999872 Wei in the example)

#### accounts

```python
def accounts() -> List[Any]
```

Returns a list of addresses owned by client
#### Returns

addressAccount: The array of accouts

#### get\_balance

```python
def get_balance(address: str, tag: str) -> float
```

Returns the balance of the account of given address
#### Arguments

address: DATA, 20 Bytes - address to check for balance
tag: QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
#### Returns

balance: QUANTITY - integer of the current balance in wei.

#### get\_storage\_at

```python
def get_storage_at(address: any, position: any, tag: str) -> Any
```

Returns the value from a storage position at a given address
#### Arguments

address: DATA, 20 Bytes - address of the storage.
position: The integer of the position in the storage.
tag: QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
#### Returns

valur: The value at this storage position.

#### get\_transaction\_count

```python
def get_transaction_count(address: any, state: str) -> float
```

Returns the number of transactions sent from an address
#### Arguments

address: The address.
state: QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
#### Returns

number: The number of transactions send from this address.

#### get\_transaction\_count\_by\_hash

```python
def get_transaction_count_by_hash(data: str,
                                  q_u_a_n_t_i_t_y__t_a_g: str) -> str
```

Returns the number of transactions in a block from a block matching the given block hash
#### Arguments

data: 20 Bytes - The address
qUANTITY_TAG: integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
#### Returns

quantity: The integer of the number of transactions send from this address.

#### get\_block\_transaction\_count\_by\_hash

```python
def get_block_transaction_count_by_hash(d_a_t_a: str) -> str
```

Returns the number of transactions in a block from a block matching the given block hash
#### Arguments

data: 32 Bytes - The hash of a block
#### Returns

quantity: The integer of the number of transactions in this block.

#### get\_block\_transaction\_count\_by\_number

```python
def get_block_transaction_count_by_number(q_u_a_n_t_i_t_y__t_a_g: str) -> str
```

Returns the number of transactions in a block matching the given block number
#### Arguments

qUANTITY_TAG: The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, see the default block parameter
#### Returns

quantity: The integer of the number of transactions in this block.

#### get\_uncle\_count\_by\_block\_hash

```python
def get_uncle_count_by_block_hash(d_a_t_a: str) -> str
```

Returns the number of uncles in a block from a block matching the given block hash
#### Arguments

data: 32 Bytes - The hash of a block
#### Returns

qUANTITY_TAG: The integer of the number of uncles in this block.

#### get\_uncle\_count\_by\_block\_number

```python
def get_uncle_count_by_block_number(q_u_a_n_t_i_t_y__t_a_g: str) -> str
```

Returns the number of uncles in a block from a block matching the given block number
#### Arguments

qUANTITY_TAG: The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter
#### Returns

quantity: The integer of the number of uncles in this block.

#### get\_code

```python
def get_code(d_a_t_a: str, q_u_a_n_t_i_t_y__t_a_g: str) -> str
```

Returns code at a given address
#### Arguments

data: 20 Byter - The address
qUANTITY_TAG: The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
#### Returns

data: The code from the given address.

#### sign

```python
def sign(a: str, b: str) -> str
```

The sign method calculates an etherdata specific signature with sign(keccak256(&quot;\x19etherdata Signed Message:\n&quot; + len(message) + message)))

By adding a prefix to the message makes the calculated signature recognisable as an etherdata specific signature
 This prevents misuse where a malicious DApp can sign arbitrary data (e
g
 transaction) and use the signature to impersonate the victim

Note the address to sign with must be unlocked
#### Arguments

a: 20 Bytes - The address
b: N Bytes - The message to sign
#### Returns

value: The signature

#### sign\_transaction

```python
def sign_transaction(obj: obj) -> str
```

Signs a transaction that can be submitted to the network at a later time using with eth_sendRawTransaction
#### Arguments

obj: The transaction object
#### Returns

data: The signed transaction object.

#### send\_transcation

```python
def send_transcation(obj: obj) -> str
```

Creates new message call transaction or a contract creation, if the data field contains code
#### Arguments

obj: The transaction object
#### Returns

data: 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

#### send\_raw\_transaction

```python
def send_raw_transaction(d_a_t_a: str) -> str
```

Creates new message call transaction or a contract creation for signed transactions
#### Arguments

data: The signed transaction data.
#### Returns

data: 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

#### call

```python
def call(obj: obj, q_u_a_n_t_i_t_y__t_a_g: str) -> str
```

Executes a new message call immediately without creating a transaction on the block chain
#### Arguments

obj: The transaction object
qUANTITY_TAG: The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
#### Returns

data: The return value of executed contract.

#### estimate\_gas

```python
def estimate_gas(obj: obj, q_u_a_n_t_i_t_y__t_a_g: str) -> str
```

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
 The transaction will not be added to the blockchain
 Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance
#### Arguments

obj: The transaction object
qUANTITY_TAG: The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
#### Returns

quantity: The amount of gas used.

#### get\_block\_by\_hash

```python
def get_block_by_hash(d_a_t_a: str, bool: bool) -> GetBlockByHashResponseObj
```

Returns information about a block by hash
#### Arguments

data: 32 Bytes - Hash of a block.
bool: If true it returns the full transaction objects, if false only the hashes of the transactions.
#### Returns [`GetBlockByHashResponseObj`](#getblockbyhashresponseobj-objects)

obj: A block object, or null when no block was found

#### get\_block\_by\_number

```python
def get_block_by_number(q_u_a_n_t_i_t_y__t_a_g: str,
                        bool: bool) -> GetBlockByNumberResponseObj
```

Returns information about a block by block number
#### Arguments

qUANTITY_TAG: The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
bool: If true it returns the full transaction objects, if false only the hashes of the transactions.
#### Returns [`GetBlockByNumberResponseObj`](#getblockbynumberresponseobj-objects)

obj: A block object, or null when no block was found

#### get\_transaction\_by\_hash

```python
def get_transaction_by_hash(d_a_t_a: str) -> GetTransactionByHashResponseObj
```

Returns the information about a transaction requested by transaction hash
#### Arguments

data: 32 Bytes - hash of a transaction
#### Returns [`GetTransactionByHashResponseObj`](#gettransactionbyhashresponseobj-objects)

obj: A transaction object, or null when no transaction was found

#### get\_transaction\_by\_hash\_and\_index

```python
def get_transaction_by_hash_and_index(
        d_a_t_a: str,
        q_u_a_n_t_i_t_y: str) -> GetTransactionByHashAndIndexResponseObj
```

Returns information about a transaction by block hash and transaction index position
#### Arguments

data: 32 Bytes - hash of a block.
quantity: The integer of the transaction index position.
#### Returns [`GetTransactionByHashAndIndexResponseObj`](#gettransactionbyhashandindexresponseobj-objects)

obj: See eth_getTransactionByHash

#### get\_transaction\_by\_block\_number\_and\_index

```python
def get_transaction_by_block_number_and_index(
        q_u_a_n_t_i_t_y__t_a_g: str, q_u_a_n_t_i_t_y: str
) -> GetTransactionByBlockNumberAndIndexResponseObj
```

Returns information about a transaction by block number and transaction index position
#### Arguments

qUANTITY_TAG: a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
quantity: The transaction index position.
#### Returns [`GetTransactionByBlockNumberAndIndexResponseObj`](#gettransactionbyblocknumberandindexresponseobj-objects)

obj: See eth_getTransactionByHash

#### get\_transaction\_receipt

```python
def get_transaction_receipt(d_a_t_a: str) -> GetTransactionReceiptResponseObj
```

Returns the receipt of a transaction by transaction hash
 Note That the receipt is not available for pending transactions
#### Arguments

data: 32 Bytes - hash of a transaction
#### Returns [`GetTransactionReceiptResponseObj`](#gettransactionreceiptresponseobj-objects)

obj: A transaction receipt object, or null when no receipt was found

#### get\_uncle\_by\_block\_hash\_and\_index

```python
def get_uncle_by_block_hash_and_index(
        d_a_t_a: str,
        q_u_a_n_t_i_t_y: str) -> GetUncleByBlockHashAndIndexResponseObj
```

eturns information about a uncle of a block by hash and uncle index position
#### Arguments

data: 32 Bytes - The hash of a block.
quantity: The uncle’s index position.
#### Returns [`GetUncleByBlockHashAndIndexResponseObj`](#getunclebyblockhashandindexresponseobj-objects)

obj: See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.

#### get\_uncle\_by\_block\_number\_and\_index

```python
def get_uncle_by_block_number_and_index(
        q_u_a_n_t_i_t_y__t_a_g: str,
        q_u_a_n_t_i_t_y: str) -> GetUncleByBlockNumberAndIndexResponseObj
```

Returns information about a uncle of a block by number and uncle index position
#### Arguments

qUANTITY_TAG: a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
quantity: the uncle’s index position.
#### Returns [`GetUncleByBlockNumberAndIndexResponseObj`](#getunclebyblocknumberandindexresponseobj-objects)

obj: See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.

#### get\_compliers

```python
def get_compliers() -> List[str]
```

Returns a list of available compilers in the client
#### Returns

array: Array of available compilers.

#### compile\_solidity

```python
def compile_solidity(string: str) -> str
```

Returns compiled solidity code
#### Arguments

string: The source code.
#### Returns

data: The compiled source code.

#### complpie\_l\_l\_l

```python
def complpie_l_l_l(string: str) -> str
```

Returns compiled LLL code
#### Arguments

string: The source code.
#### Returns

data: The compiled source code.

#### complie\_serpent

```python
def complie_serpent(string: str) -> str
```

Returns compiled serpent code
#### Arguments

string: The source code.
#### Returns

data: The compiled source code.

#### new\_filter

```python
def new_filter(obj: obj) -> str
```

Creates a filter object, based on filter options, to notify when the state changes (logs)
 To check if the state has changed, call eth_getFilterChanges

A note on specifying topic filters Topics are order-dependent
 A transaction with a log with topics [A, B] will be matched by the following topic filters
-[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”
#### Arguments

obj: The filter options
#### Returns

quantity: A filter id.

#### new\_block\_filter

```python
def new_block_filter() -> str
```

Creates a filter in the node, to notify when a new block arrives
 To check if the state has changed, call eth_getFilterChanges
#### Returns

quantity: A filter id.

#### new\_pending\_transaction\_filter

```python
def new_pending_transaction_filter() -> str
```

Creates a filter in the node, to notify when new pending transactions arrive
 To check if the state has changed, call eth_getFilterChanges
#### Returns

quantity: A filter id.

#### uninstall\_filter

```python
def uninstall_filter(q_u_a_n_t_i_t_y: str) -> bool
```

Uninstalls a filter with given id
 Should always be called when watch is no longer needed
 Additonally Filters timeout when they aren’t requested with eth_getFilterChanges
 for a period of time
#### Arguments

quantity: The filter id.
#### Returns

bool: true if the filter was successfully uninstalled, otherwise false.

#### get\_filter\_changes

```python
def get_filter_changes(q_u_a_n_t_i_t_y: str) -> List[Array]
```

Polling method for a filter, which returns an array of logs which occurred since last poll
#### Arguments

quantity: The filter id.
#### Returns `List`[Array]

array: Array of log objects, or an empty array if nothing has changed since last poll. For filters created with eth_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. [&quot;0x3454645634534...&quot;]. For filters created with eth_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. [&quot;0x6345343454645...&quot;].

#### get\_filter\_logs

```python
def get_filter_logs(q_u_a_n_t_i_t_y: str) -> List[Any]
```

Returns an array of all logs matching filter with given id
#### Arguments

quantity: The filter id.
#### Returns

array: See eth_getFilterChanges.

#### get\_logs

```python
def get_logs(obj: obj) -> List[Any]
```

Returns an array of all logs matching a given filter object
#### Arguments

obj: The filter options
#### Returns

array: See eth_getFilterChanges.

#### get\_work

```python
def get_work() -> List[str]
```

Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)
#### Returns

array: Array with the following properties -DATA, 32 Bytes - current block header pow-hash -DATA, 32 Bytes - the seed hash used for the DAG. -DATA, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.

#### submit\_work

```python
def submit_work(a: str, b: str, c: str) -> bool
```

Used for submitting a proof-of-work solution
#### Arguments

a: 8 Bytes - The nonce found (64 bits)
b: 32 Bytes - The header’s pow-hash (256 bits)
c: 32 Bytes - The mix digest (256 bits)
#### Returns

bool: returns true if the provided solution is valid, otherwise false.

#### submit\_hashrate

```python
def submit_hashrate(hashrate: str, i_d: str) -> bool
```

Used for submitting mining hashrate
#### Arguments

hashrate: A hexadecimal string representation (32 bytes) of the hash rate
id: String - A random hexadecimal(32 bytes) ID identifying the client
#### Returns

bool: Returns `true` if submitting went through succesfully and `false` otherwise.

