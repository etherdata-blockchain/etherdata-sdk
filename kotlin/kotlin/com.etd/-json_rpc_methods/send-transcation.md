//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[sendTranscation](send-transcation.md)

# sendTranscation

[jvm]\
suspend fun [sendTranscation](send-transcation.md)(obj: [Json_rpc_methods.Obj](-obj/index.md)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

Creates new message call transaction or a contract creation, if the data field contains code

#### Return

data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use etd_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

## Parameters

jvm

| | |
|---|---|
| obj | The transaction object |
