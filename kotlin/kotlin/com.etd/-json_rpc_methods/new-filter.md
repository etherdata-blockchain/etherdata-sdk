//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[newFilter](new-filter.md)

# newFilter

[jvm]\
suspend fun [newFilter](new-filter.md)(obj: [Json_rpc_methods.Obj](-obj/index.md)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

Creates a filter object, based on filter options, to notify when the state changes (logs) To check if the state has changed, call etd_getFilterChanges

A note on specifying topic filters Topics are order-dependent A transaction with a log with topics A, B will be matched by the following topic filters -[] “anything” -A “A in first position (and anything after)” -null, B “anything in first position AND B in second position (and anything after)” -A, B “A in first position AND B in second position (and anything after)” -[A, B, A, B] “(A OR B) in first position AND (A OR B) in second position (and anything after)”

#### Return

quantity A filter id.

## Parameters

jvm

| | |
|---|---|
| obj | The filter options |
