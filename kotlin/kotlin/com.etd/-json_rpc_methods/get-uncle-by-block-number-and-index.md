//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getUncleByBlockNumberAndIndex](get-uncle-by-block-number-and-index.md)

# getUncleByBlockNumberAndIndex

[jvm]\
suspend fun [getUncleByBlockNumberAndIndex](get-uncle-by-block-number-and-index.md)(qUANTITY_TAG: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), quantity: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Json_rpc_methods.GetUncleByBlockNumberAndIndexResponseObj](-get-uncle-by-block-number-and-index-response-obj/index.md)

Returns information about a uncle of a block by number and uncle index position

#### Return

obj See etd_getTransactionByHash Note - An uncle doesn’t contain individual transactions.

## Parameters

jvm

| | |
|---|---|
| qUANTITY_TAG | a block number, or the string "earliest", "latest" or "pending", as in the default block parameter. |
| quantity | the uncle’s index position. |
