//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getBalance](get-balance.md)

# getBalance

[jvm]\
suspend fun [getBalance](get-balance.md)(address: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), tag: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)

Returns the balance of the account of given address

#### Return

balance QUANTITY - integer of the current balance in wei.

## Parameters

jvm

| | |
|---|---|
| address | DATA, 20 Bytes - address to check for balance |
| tag | QUANTITY_TAG - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter |
