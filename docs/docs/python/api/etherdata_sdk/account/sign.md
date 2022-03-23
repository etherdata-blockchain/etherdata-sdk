---
sidebar_label: sign
title: etherdata_sdk.account.sign
---

## SignAPI Objects

```python
class SignAPI(AccountAPI)
```

#### sign\_transaction

```python
def sign_transaction(transaction: DataClassJsonMixin) -> SignedTransaction
```

Sign transaction using private key

#### Arguments

transaction: `Transaction` object

