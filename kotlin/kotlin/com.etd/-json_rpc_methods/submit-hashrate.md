//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[submitHashrate](submit-hashrate.md)

# submitHashrate

[jvm]\
suspend fun [submitHashrate](submit-hashrate.md)(hashrate: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Used for submitting mining hashrate

#### Return

bool Returns true if submitting went through succesfully and false otherwise.

## Parameters

jvm

| | |
|---|---|
| hashrate | A hexadecimal string representation (32 bytes) of the hash rate |
| id | String - A random hexadecimal(32 bytes) ID identifying the client |
