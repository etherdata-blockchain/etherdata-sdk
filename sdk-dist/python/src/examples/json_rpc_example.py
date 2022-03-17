from src.etherdata_sdk.json_rpc import Json_rpc_methods
import src.etherdata_sdk.extensions

client = Json_rpc_methods("https://rpc.etdchain.net")
print(client.blockNumber().hex_to_int())
