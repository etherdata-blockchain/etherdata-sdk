//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[estimateGas](estimate-gas.md)

# estimateGas

[jvm]\
suspend fun [estimateGas](estimate-gas.md)(obj: [Json_rpc_methods.Obj](-obj/index.md), qUANTITY_TAG: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete The transaction will not be added to the blockchain Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance

#### Return

quantity The amount of gas used.

## Parameters

jvm

| | |
|---|---|
| obj | The transaction object |
| qUANTITY_TAG | The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter. |
