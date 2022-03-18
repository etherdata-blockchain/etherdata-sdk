import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict


class Etd:
    """
    Getd provides several extensions to the standard etd JSON-RPC namespace
    """

    def __init__(self, url: str):
        self.url = url

    def subscribe(self, ) -> None:
        """
        This method is used for real-time events through subscriptions
         See the subscription documentation for more information
        """
        json_data = {
            "method": "eth_subscribe",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def unsubscribe(self, ) -> None:
        """
        This method is used for real-time events through subscriptions
         See the subscription documentation for more information
        """
        json_data = {
            "method": "eth_unsubscribe",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]
