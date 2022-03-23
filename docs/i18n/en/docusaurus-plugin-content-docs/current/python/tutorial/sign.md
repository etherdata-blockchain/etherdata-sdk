---
title: Signing and Sending Transaction
---
    
In this tutorial, we will talk about how to use Etherdata-SDK to sign and send the transaction.

## Create an Account object

```python
from etherdata_sdk.account import Account, Transaction

account = Account()
```

## Initialize Account object to get Private Key and Address

> More [info](/docs/python/api/etherdata_sdk/account/create)

```python
# From mnemonic
account.create_private_key_from_mnemonic(mnemonic)

# From random private key generation
account.create_random_private_key()

# From local private key file
account.read_private_key_from_file("abc.key")
```

## Create a transaction object
We will talk about how to create a transaction object as well as sender and receiver account in the following section.
 
#### Create a sender and receiver account

```python
from_account = Account().create_random_private_key()
to_account = Account().create_random_private_key()
```

#### Create a transaction object

```python
transaction = Transaction(to=to_account.address, value=30000, gas=1000, gas_price=300, nonce=1)
```

#### Signed by sender

```python
signed = from_account.sign_transaction(transaction)
```


## Send transaction by json rpc method

```python
from etherdata_sdk.json_rpc import JsonRpcMethods

client = JsonRpcMethods("https://rpc.etdchain.net")
client.sendRawTransaction(signed.raw_transaction)
```
