//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getTransactionReceipt](get-transaction-receipt.md)

# getTransactionReceipt

[jvm]\
suspend fun [getTransactionReceipt](get-transaction-receipt.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Json_rpc_methods.GetTransactionReceiptResponseObj](-get-transaction-receipt-response-obj/index.md)

Returns the receipt of a transaction by transaction hash Note That the receipt is not available for pending transactions

#### Return

obj A transaction receipt object, or null when no receipt was found

## Parameters

jvm

| | |
|---|---|
| data | 32 Bytes - hash of a transaction |
