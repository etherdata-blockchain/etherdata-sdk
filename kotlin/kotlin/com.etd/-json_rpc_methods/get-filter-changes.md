//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getFilterChanges](get-filter-changes.md)

# getFilterChanges

[jvm]\
suspend fun [getFilterChanges](get-filter-changes.md)(quantity: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[Json_rpc_methods.Array](-array/index.md)&gt;

Polling method for a filter, which returns an array of logs which occurred since last poll

#### Return

array Array of log objects, or an empty array if nothing has changed since last poll. For filters created with etd_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. "0x3454645634534...". For filters created with etd_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. "0x6345343454645...".

## Parameters

jvm

| | |
|---|---|
| quantity | The filter id. |
