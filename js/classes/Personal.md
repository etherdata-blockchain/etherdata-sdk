[etherdata-typescript](../README.md) / [Exports](../modules.md) / Personal

# Class: Personal

The personal API manages private keys in the key store

## Table of contents

### Constructors

- [constructor](Personal.md#constructor)

### Properties

- [baseURL](Personal.md#baseurl)
- [port](Personal.md#port)
- [url](Personal.md#url)

### Methods

- [ecRecover](Personal.md#ecrecover)
- [importRawKey](Personal.md#importrawkey)
- [listAccounts](Personal.md#listaccounts)
- [lockAccount](Personal.md#lockaccount)
- [newAccount](Personal.md#newaccount)
- [sendTransaction](Personal.md#sendtransaction)
- [sign](Personal.md#sign)
- [unlockAccount](Personal.md#unlockaccount)

## Constructors

### constructor

• **new Personal**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[personal.ts:16](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L16)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[personal.ts:12](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L12)

___

### port

• `Optional` **port**: `number`

#### Defined in

[personal.ts:13](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L13)

___

### url

• **url**: `string`

#### Defined in

[personal.ts:14](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L14)

## Methods

### ecRecover

▸ **ecRecover**(`a`, `b`): `Promise`<`string`\>

ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | abcde |
| `b` | `string` | abcde |

#### Returns

`Promise`<`string`\>

address The address associated with the private key

#### Defined in

[personal.ts:179](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L179)

___

### importRawKey

▸ **importRawKey**(`priveteKey`): `Promise`<`string`\>

Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase
 Returns the address of the new account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priveteKey` | `string` | An unencrypted private key (hex string) |

#### Returns

`Promise`<`string`\>

accountAddress The address of the new account.

#### Defined in

[personal.ts:27](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L27)

___

### listAccounts

▸ **listAccounts**(): `Promise`<`string`[]\>

Returns all the Ethereum account addresses of all keys in the key store

#### Returns

`Promise`<`string`[]\>

accountAddress The list of ethereum account addresses

#### Defined in

[personal.ts:42](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L42)

___

### lockAccount

▸ **lockAccount**(): `Promise`<`void`\>

Removes the private key with given address from memory
 The account can no longer be used to send transactions

#### Returns

`Promise`<`void`\>

#### Defined in

[personal.ts:57](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L57)

___

### newAccount

▸ **newAccount**(`passphrase`): `Promise`<`string`\>

Generates a new private key and stores it in the key store directory
 The key file is encrypted with the given passphrase
 Returns the address of the new account

At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `passphrase` | `undefined` \| `string` | The passphrase used to generate a new private key |

#### Returns

`Promise`<`string`\>

priveteKey The generated priveteKey

#### Defined in

[personal.ts:77](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L77)

___

### sendTransaction

▸ **sendTransaction**(`tx`): `Promise`<`string`\>

Validate the given passphrase and submit transaction

The transaction is the same argument as for etd_sendTransaction and contains the from address
 If the passphrase can be used to decrypt the private key belogging to tx
from the transaction is verified, signed and send onto the network
 The account is not unlocked globally in the node and cannot be used in other RPC calls

Note, prior to Getd 1
5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version

Example &#39;&gt; var tx = {from&#39;:&#39; &quot;0x391694e7e0b0cce554cb130d723a9d27458f9298&quot;, to&#39;:&#39; &quot;0xafa3f8684e54059998bc3a7b0d2b0da075154d66&quot;, value&#39;:&#39; web3
toWei(1
23, &quot;ether&quot;)} undefined &quot;&gt; personal
sendTransaction(tx, &quot;passphrase&quot;)&quot; 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f&#39;

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tx` | `Tx` | The transaction |

#### Returns

`Promise`<`string`\>

address The address

#### Defined in

[personal.ts:137](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L137)

___

### sign

▸ **sign**(`a`, `b`, `c`): `Promise`<`string`\>

The sign method calculates an Ethereum specific signature with &#39; sign(keccack256(&quot;\x19Ethereum Signed Message:\n&quot; + len(message) + message)))
 &#39;
By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature
 This prevents misuse where a malicious DApp can sign arbitrary data (e
g
 transaction) and use the signature to impersonate the victim

See ecRecover to verify the signature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | abcde |
| `b` | `string` | abcde |
| `c` | `string` | abcde |

#### Returns

`Promise`<`string`\>

value abcde

#### Defined in

[personal.ts:162](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L162)

___

### unlockAccount

▸ **unlockAccount**(`accountAddress`, `passphrase`, `unlockDuration`): `Promise`<`boolean`\>

Decrypts the key with the given address from the key store

Both passphrase and unlock duration are optional when using the JavaScript console
 If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively

The unencrypted key will be held in memory until the unlock duration expires
 If the unlock duration defaults to 300 seconds
 An explicit duration of zero seconds unlocks the key until Getd exits

The account can be used with etd_sign and etd_sendTransaction while it is unlocked

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountAddress` | `string` | The account address |
| `passphrase` | `undefined` \| `string` | The passphrase If you want to type in the passphrase and stil override the default unlock duration, pass null as the passphrase. |
| `unlockDuration` | `undefined` \| `number` | The unlock duration |

#### Returns

`Promise`<`boolean`\>

unlockState Indicating whether is the account unlocked successfully

#### Defined in

[personal.ts:104](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/personal.ts#L104)
