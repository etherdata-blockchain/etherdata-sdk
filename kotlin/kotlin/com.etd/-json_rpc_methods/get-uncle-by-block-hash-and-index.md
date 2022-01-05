//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getUncleByBlockHashAndIndex](get-uncle-by-block-hash-and-index.md)

# getUncleByBlockHashAndIndex

[jvm]\
suspend fun [getUncleByBlockHashAndIndex](get-uncle-by-block-hash-and-index.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), quantity: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Json_rpc_methods.GetUncleByBlockHashAndIndexResponseObj](-get-uncle-by-block-hash-and-index-response-obj/index.md)

eturns information about a uncle of a block by hash and uncle index position

#### Return

obj See etd_getTransactionByHash Note - An uncle doesn’t contain individual transactions.

## Parameters

jvm

| | |
|---|---|
| data | 32 Bytes - The hash of a block. |
| quantity | The uncle’s index position. |
