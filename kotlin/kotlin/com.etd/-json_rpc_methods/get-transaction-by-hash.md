//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getTransactionByHash](get-transaction-by-hash.md)

# getTransactionByHash

[jvm]\
suspend fun [getTransactionByHash](get-transaction-by-hash.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Json_rpc_methods.GetTransactionByHashResponseObj](-get-transaction-by-hash-response-obj/index.md)

Returns the information about a transaction requested by transaction hash

#### Return

obj A transaction object, or null when no transaction was found

## Parameters

jvm

| | |
|---|---|
| data | 32 Bytes - hash of a transaction |
