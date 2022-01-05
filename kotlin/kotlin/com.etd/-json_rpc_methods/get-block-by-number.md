//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getBlockByNumber](get-block-by-number.md)

# getBlockByNumber

[jvm]\
suspend fun [getBlockByNumber](get-block-by-number.md)(qUANTITY_TAG: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), bool: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Json_rpc_methods.GetBlockByNumberResponseObj](-get-block-by-number-response-obj/index.md)

Returns information about a block by block number

#### Return

obj A block object, or null when no block was found

## Parameters

jvm

| | |
|---|---|
| qUANTITY_TAG | The integer of a block number, or the string "earliest", "latest" or "pending", as in the default block parameter. |
| bool | If true it returns the full transaction objects, if false only the hashes of the transactions. |
