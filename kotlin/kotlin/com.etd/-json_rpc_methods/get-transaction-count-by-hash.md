//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getTransactionCountByHash](get-transaction-count-by-hash.md)

# getTransactionCountByHash

[jvm]\
suspend fun [getTransactionCountByHash](get-transaction-count-by-hash.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), qUANTITY_TAG: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

Returns the number of transactions in a block from a block matching the given block hash

#### Return

quantity The integer of the number of transactions send from this address.

## Parameters

jvm

| | |
|---|---|
| data | 20 Bytes - The address |
| qUANTITY_TAG | integer block number, or the string "latest", "earliest" or "pending", see the default block parameter |
