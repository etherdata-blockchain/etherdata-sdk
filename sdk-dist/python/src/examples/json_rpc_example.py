from src.etherdata_sdk.json_rpc import JsonRpcMethods
from src.etherdata_sdk.account import Account, Transaction

client = JsonRpcMethods("https://rpc.etdchain.net")
print(client.block_number())
