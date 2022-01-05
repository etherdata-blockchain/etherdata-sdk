//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getTransactionByBlockNumberAndIndex](get-transaction-by-block-number-and-index.md)

# getTransactionByBlockNumberAndIndex

[jvm]\
suspend fun [getTransactionByBlockNumberAndIndex](get-transaction-by-block-number-and-index.md)(qUANTITY_TAG: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), quantity: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Json_rpc_methods.GetTransactionByBlockNumberAndIndexResponseObj](-get-transaction-by-block-number-and-index-response-obj/index.md)

Returns information about a transaction by block number and transaction index position

#### Return

obj See etd_getTransactionByHash

## Parameters

jvm

| | |
|---|---|
| qUANTITY_TAG | a block number, or the string "earliest", "latest" or "pending", as in the default block parameter. |
| quantity | The transaction index position. |
