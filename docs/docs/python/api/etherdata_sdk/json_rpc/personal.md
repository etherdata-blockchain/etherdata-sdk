---
sidebar_label: personal
title: etherdata_sdk.json_rpc.personal
---

## Tx Objects

```python
@dataclass_json

@dataclass
class Tx()
```

#### from\_field

The from value

#### to

The to value

#### value

The value to be transcated

## Personal Objects

```python
class Personal()
```

The personal API manages private keys in the key store

#### import\_raw\_key

```python
def import_raw_key(privete_key: str) -> str
```

Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase
 Returns the address of the new account
#### Arguments

priveteKey: An unencrypted private key (hex string)
#### Returns

accountAddress: The address of the new account.

#### list\_accounts

```python
def list_accounts() -> List[str]
```

Returns all the Ethereum account addresses of all keys in the key store
#### Returns

accountAddress: The list of ethereum account addresses

#### lock\_account

```python
def lock_account() -> None
```

Removes the private key with given address from memory
 The account can no longer be used to send transactions

#### new\_account

```python
def new_account(passphrase: optional[str]) -> str
```

Generates a new private key and stores it in the key store directory
 The key file is encrypted with the given passphrase
 Returns the address of the new account

At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument
#### Arguments

passphrase: The passphrase used to generate a new private key
#### Returns

priveteKey: The generated priveteKey

#### unlock\_account

```python
def unlock_account(account_address: str, passphrase: optional[str],
                   unlock_duration: optional[float]) -> bool
```

Decrypts the key with the given address from the key store

Both passphrase and unlock duration are optional when using the JavaScript console
 If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively

The unencrypted key will be held in memory until the unlock duration expires
 If the unlock duration defaults to 300 seconds
 An explicit duration of zero seconds unlocks the key until Getd exits

The account can be used with etd_sign and etd_sendTransaction while it is unlocked
#### Arguments

accountAddress: The account address
passphrase: The passphrase If you want to type in the passphrase and stil override the default unlock duration, pass null as the passphrase.
unlockDuration: The unlock duration
#### Returns

unlockState: Indicating whether is the account unlocked successfully

#### send\_transaction

```python
def send_transaction(tx: tx) -> str
```

Validate the given passphrase and submit transaction

The transaction is the same argument as for etd_sendTransaction and contains the from address
 If the passphrase can be used to decrypt the private key belogging to tx
from the transaction is verified, signed and send onto the network
 The account is not unlocked globally in the node and cannot be used in other RPC calls

Note, prior to Getd 1
5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version

Example &#x27;&gt; var tx = {from&#x27;:&#x27; &quot;0x391694e7e0b0cce554cb130d723a9d27458f9298&quot;, to&#x27;:&#x27; &quot;0xafa3f8684e54059998bc3a7b0d2b0da075154d66&quot;, value&#x27;:&#x27; web3
toWei(1
23, &quot;ether&quot;)} undefined &quot;&gt; personal
sendTransaction(tx, &quot;passphrase&quot;)&quot; 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f&#x27;
#### Arguments

tx: The transaction
#### Returns

address: The address

#### sign

```python
def sign(a: str, b: str, c: str) -> str
```

The sign method calculates an Ethereum specific signature with &#x27; sign(keccack256(&quot;\x19Ethereum Signed Message:\n&quot; + len(message) + message)))
 &#x27;
By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature
 This prevents misuse where a malicious DApp can sign arbitrary data (e
g
 transaction) and use the signature to impersonate the victim

See ecRecover to verify the signature
#### Arguments

a: abcde
b: abcde
c: abcde
#### Returns

value: abcde

#### ec\_recover

```python
def ec_recover(a: str, b: str) -> str
```

ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign
#### Arguments

a: abcde
b: abcde
#### Returns

address: The address associated with the private key

