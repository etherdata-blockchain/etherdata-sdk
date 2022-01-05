//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[sign](sign.md)

# sign

[jvm]\
suspend fun [sign](sign.md)(a: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), b: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

The sign method calculates an etdereum specific signature with sign(keccak256("\x19etdereum Signed Message:\n" + len(message) + message)))

By adding a prefix to the message makes the calculated signature recognisable as an etdereum specific signature This prevents misuse where a malicious DApp can sign arbitrary data (e g transaction) and use the signature to impersonate the victim

Note the address to sign with must be unlocked

#### Return

value The signature

## Parameters

jvm

| | |
|---|---|
| a | 20 Bytes - The address |
| b | N Bytes - The message to sign |
