import requests
from typing import List, Optional, Any
from dataclasses import dataclass



class Etd:
    """
    Getd provides several extensions to the standard etd JSON-RPC namespace
    """

    def __init__(self, url: str):
        self.url = url


    
    def subscribe(self, )-> None:
        """
        This method is used for real-time events through subscriptions
         See the subscription documentation for more information
        """
        response = requests.post(self.url, data={
          "method": "eth_subscribe",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def unsubscribe(self, )-> None:
        """
        This method is used for real-time events through subscriptions
         See the subscription documentation for more information
        """
        response = requests.post(self.url, data={
          "method": "eth_unsubscribe",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        

