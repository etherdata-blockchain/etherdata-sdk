//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getTransactionCount](get-transaction-count.md)

# getTransactionCount

[jvm]\
suspend fun [getTransactionCount](get-transaction-count.md)(address: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), state: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)

Returns the number of transactions sent from an address

#### Return

number The number of transactions send from this address.

## Parameters

jvm

| | |
|---|---|
| address | The address. |
| state | QUANTITY_TAG - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter |
