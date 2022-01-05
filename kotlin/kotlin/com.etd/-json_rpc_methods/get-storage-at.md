//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getStorageAt](get-storage-at.md)

# getStorageAt

[jvm]\
suspend fun [getStorageAt](get-storage-at.md)(address: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), position: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), tag: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)

Returns the value from a storage position at a given address

#### Return

valur The value at this storage position.

## Parameters

jvm

| | |
|---|---|
| address | DATA, 20 Bytes - address of the storage. |
| position | The integer of the position in the storage. |
| tag | QUANTITY_TAG - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter |
