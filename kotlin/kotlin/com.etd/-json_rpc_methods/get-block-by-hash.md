//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getBlockByHash](get-block-by-hash.md)

# getBlockByHash

[jvm]\
suspend fun [getBlockByHash](get-block-by-hash.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), bool: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Json_rpc_methods.GetBlockByHashResponseObj](-get-block-by-hash-response-obj/index.md)

Returns information about a block by hash

#### Return

obj A block object, or null when no block was found

## Parameters

jvm

| | |
|---|---|
| data | 32 Bytes - Hash of a block. |
| bool | If true it returns the full transaction objects, if false only the hashes of the transactions. |
