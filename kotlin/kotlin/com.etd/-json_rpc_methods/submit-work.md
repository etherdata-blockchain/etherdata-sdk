//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[submitWork](submit-work.md)

# submitWork

[jvm]\
suspend fun [submitWork](submit-work.md)(a: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), b: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), c: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Used for submitting a proof-of-work solution

#### Return

bool returns true if the provided solution is valid, otherwise false.

## Parameters

jvm

| | |
|---|---|
| a | 8 Bytes - The nonce found (64 bits) |
| b | 32 Bytes - The header’s pow-hash (256 bits) |
| c | 32 Bytes - The mix digest (256 bits) |
