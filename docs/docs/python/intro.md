# Introduction

## Getting start

如要下载python SDK， 可以运行以下指令
```
pip install etherdata-sdk-python
```

## Simple example
下面的这个例子讲述了如何活得最新的区块高度。注意⚠️：`https://rpc.etdchain.net`是主链的rpc地址。

```python
from etherdata_sdk.json_rpc import JsonRpcMethods

client = JsonRpcMethods("https://rpc.etdchain.net")
print(client.block_number())
```
