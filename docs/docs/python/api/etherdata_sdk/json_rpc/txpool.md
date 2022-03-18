---
sidebar_label: txpool
title: etherdata_sdk.json_rpc.txpool
---

## Transaction Objects

```python
@dataclass_json

@dataclass
class Transaction()
```

#### blockHash

The block hash of the transaction

#### blockNumber

The block number of the transaction

#### from\_field

The from value of the transaction

#### gas

The gas value of the transaction

#### gasPrice

The gas price of the transaction

#### hash

The hash of the transaction

#### input

The input of the transaction

#### nonce

The nonce of the transaction

#### to

The to of the transaction

#### transactionIndex

The transaction index

#### value

The value of the transaction

## PendingTransactions Objects

```python
@dataclass_json

@dataclass
class PendingTransactions()
```

#### transaction

The object containing different fields

## QueuedTransactions Objects

```python
@dataclass_json

@dataclass
class QueuedTransactions()
```

#### transaction

The object containing different fields

## ContentResponseTransactionObject Objects

```python
@dataclass_json

@dataclass
class ContentResponseTransactionObject()
```

#### pendingTransactions

The array of pending transactions

#### queuedTransactions

The array of queued transactions

## TransactionArray Objects

```python
@dataclass_json

@dataclass
class TransactionArray()
```

#### transaction

Each entry maps an origin-address to a batch of scheduled transactions.

## InspectResponseTransactionObject Objects

```python
@dataclass_json

@dataclass
class InspectResponseTransactionObject()
```

#### pendingTransactions

The array of pending transactions

#### queuedTransactions

The array of queued transactions

## StatusResponseStatusObject Objects

```python
@dataclass_json

@dataclass
class StatusResponseStatusObject()
```

#### pending

The number of transactions currently pending for inclusion in the next block(s)

#### queued

The transaction that is being scheduled for future execution

## Txpool Objects

```python
class Txpool()
```

The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing

#### content

```python
def content() -> ContentResponseTransactionObject
```

The content inspection property can be queried to list the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only

The result is an object with two fields pending and queued
 Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
 These batches themselves are maps associating nonces with actual transactions

Please note, there may be multiple transactions associated with the same account and nonce
 This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
#### Returns [`ContentResponseTransactionObject`](#contentresponsetransactionobject-objects)

transactionObject: The return transaction object

#### inspect

```python
def inspect() -> InspectResponseTransactionObject
```

The inspect inspection property can be queried to list a textual summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
 This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues

The result is an object with two fields pending and queued
 Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
 These batches themselves are maps associating nonces with transactions summary strings

Please note, there may be multiple transactions associated with the same account and nonce
 This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
#### Returns [`InspectResponseTransactionObject`](#inspectresponsetransactionobject-objects)

transactionObject: the return transcation object

#### status

```python
def status() -> StatusResponseStatusObject
```

The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only

The result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state
#### Returns [`StatusResponseStatusObject`](#statusresponsestatusobject-objects)

statusObject: An object containing transaction status

