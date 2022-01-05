//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[call](call.md)

# call

[jvm]\
suspend fun [call](call.md)(obj: [Json_rpc_methods.Obj](-obj/index.md), qUANTITY_TAG: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

Executes a new message call immediately without creating a transaction on the block chain

#### Return

data The return value of executed contract.

## Parameters

jvm

| | |
|---|---|
| obj | The transaction object |
| qUANTITY_TAG | The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter. |
