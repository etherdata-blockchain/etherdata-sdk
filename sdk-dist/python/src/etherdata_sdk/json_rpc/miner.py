import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict
from ..exception import RPCException


class Miner:
    """
    The miner API allows you to remote control the node’s mining operation and set various mining specific settings
    """

    def __init__(self, url: str):
        self.url = url

    def getdashrate(self, ) -> str:
        """
        Get your hashrate in H/s (Hash operations per second)
        #### Returns

        dashRate: The hashrate in Hs (Hash operations per second)
        """
        json_data = {
            "method": "miner_Getdashrate",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def set_extra(self, ) -> None:
        """
        Sets the extra data a miner can include when miner blocks
         This is capped at 32 bytes
        """
        json_data = {
            "method": "miner_setExtra",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def set_gas_price(self, price: float) -> None:
        """
        Sets the minimal accepted gas price when mining transactions
         Any transactions that are below this limit are excluded from the mining process
        #### Arguments

        price: The new minimal accepted gas price when mining transactions.
        """
        json_data = {
            "method": "miner_setGasPrice",
            "params": [price],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def start(self, ) -> None:
        """
        Start the CPU mining process with the given number of threads and generate a new DAG if need be
        """
        json_data = {
            "method": "miner_start",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def stop(self, ) -> None:
        """
        Stop the CPU mining operation
        """
        json_data = {
            "method": "miner_stop",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def set_etherbase(self, etherbase: str) -> None:
        """
        Sets the etherbase, where mining rewards will go
        #### Arguments

        etherbase: The new etherbase.
        """
        json_data = {
            "method": "miner_setEtherbase",
            "params": [etherbase],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]
