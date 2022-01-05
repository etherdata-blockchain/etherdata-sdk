//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[uninstallFilter](uninstall-filter.md)

# uninstallFilter

[jvm]\
suspend fun [uninstallFilter](uninstall-filter.md)(quantity: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Uninstalls a filter with given id Should always be called when watch is no longer needed Additonally Filters timeout when they aren’t requested with etd_getFilterChanges for a period of time

#### Return

bool true if the filter was successfully uninstalled, otherwise false.

## Parameters

jvm

| | |
|---|---|
| quantity | The filter id. |
