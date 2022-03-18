# Introduction

## Getting start

You can install the python sdk by simple run the following command.
```
pip install etherdata-sdk-python
```

## Simple example
The following example shows you how to get the latest block number from remote endpoint. 
Important⚠️：`https://rpc.etdchain.net` is the http address for main net。

```python
from etherdata_sdk.json_rpc import JsonRpcMethods

client = JsonRpcMethods("https://rpc.etdchain.net")
print(client.block_number())
```
