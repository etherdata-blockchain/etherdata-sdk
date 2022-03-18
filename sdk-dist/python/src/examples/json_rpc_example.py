from etherdata_sdk.json_rpc import Json_rpc_methods

client = Json_rpc_methods("https://rpc.etdchain.net")
print(client.blockNumber())
