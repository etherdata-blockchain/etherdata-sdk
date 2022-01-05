//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[newPendingTransactionFilter](new-pending-transaction-filter.md)

# newPendingTransactionFilter

[jvm]\
suspend fun [newPendingTransactionFilter](new-pending-transaction-filter.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

Creates a filter in the node, to notify when new pending transactions arrive To check if the state has changed, call etd_getFilterChanges

#### Return

quantity A filter id.
