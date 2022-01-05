//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[sendRawTransaction](send-raw-transaction.md)

# sendRawTransaction

[jvm]\
suspend fun [sendRawTransaction](send-raw-transaction.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

Creates new message call transaction or a contract creation for signed transactions

#### Return

data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use etd_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.

## Parameters

jvm

| | |
|---|---|
| data | The signed transaction data. |
