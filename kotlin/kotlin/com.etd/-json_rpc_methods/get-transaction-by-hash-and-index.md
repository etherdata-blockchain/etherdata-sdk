//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getTransactionByHashAndIndex](get-transaction-by-hash-and-index.md)

# getTransactionByHashAndIndex

[jvm]\
suspend fun [getTransactionByHashAndIndex](get-transaction-by-hash-and-index.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), quantity: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Json_rpc_methods.GetTransactionByHashAndIndexResponseObj](-get-transaction-by-hash-and-index-response-obj/index.md)

Returns information about a transaction by block hash and transaction index position

#### Return

obj See etd_getTransactionByHash

## Parameters

jvm

| | |
|---|---|
| data | 32 Bytes - hash of a block. |
| quantity | The integer of the transaction index position. |
