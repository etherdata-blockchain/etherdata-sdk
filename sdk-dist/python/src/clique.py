import requests
from typing import List, Optional, Any
from dataclasses import dataclass


@dataclass
class GetSnapshotResponseRecents:
    
    number : List[str]
    """
    The addresses of prevoious blocks
    """

@dataclass
class GetSnapshotResponseSigners:
    
    signer : List[str]
    """
    The signer
    """

@dataclass
class GetSnapshotResponseSnapshot:
    
    hash : str
    """
    The hash of the block
    """

    number : float
    """
    The number of the block
    """

    recents : GetSnapshotResponseRecents
    """
    The details of previous blocks
    """

    signers : GetSnapshotResponseSigners
    """
    An object containing an arrry of signers
    """

@dataclass
class StatusResponseSealerActivity:
    
    signerAddresses : str
    """
    The signer addresses
    """

    numBlocksSigned : float
    """
    The number of blocks signed by signers
    """

@dataclass
class StatusResponse:
    
    inturnPercent:float    
    """
    Percentage of blocks signed in-turn
    """
    
    sealerActivity:StatusResponseSealerActivity    
    """
    A object containing signer addresses and the number of blocks signed by them
    """
    
    numBlocks:float    
    """
    The number of blocks analyzed
    """
    



class Clique:
    """
    The clique API provides access to the state of the clique consensus engine
     You can use this API to manage signer votes and to check the health of a private network
    """

    def __init__(self, url: str):
        self.url = url


    
    def getSnapshot(self, number:float)-> GetSnapshotResponseSnapshot:
        """
        Retrieves a snapshot of all clique state at a given block
        :param number: The number of the block
        :return snapshot: Snapshot of all clique state at the given block
        """
        response = requests.post(self.url, data={
          "method": "clique.getSnapshot",
          "params": [number],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getSnapshotAtHash(self, )-> Any:
        """
        Retrieves the state snapshot at a given block
        :return ststeSnapshot: The tate snapshot at the block.
        """
        response = requests.post(self.url, data={
          "method": "clique_getSnapshotAtHash",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getSigners(self, )-> List[str]:
        """
        Retrieves the list of authorized signers at the specified block
        :return signerArray: The list of authorized signers
        """
        response = requests.post(self.url, data={
          "method": "clique_getSigners",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def proposals(self, )-> str:
        """
        Returns the current proposals the node is voting on
        :return proposal: The current proposals
        """
        response = requests.post(self.url, data={
          "method": "clique_proposals",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def propose(self, )-> None:
        """
        Adds a new authorization proposal that the signer will attempt to push through
         If the auth parameter is true, the local signer votes for the given address to be included in the set of authorized signers
         With auth set to false, the vote is against the address
        """
        response = requests.post(self.url, data={
          "method": "clique_propose",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def discard(self, )-> None:
        """
        This method drops a currently running proposal
         The signer will not cast further votes (either for or against) the address
        """
        response = requests.post(self.url, data={
          "method": "clique_discard",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def status(self, )-> StatusResponse:
        """
        This is a debugging method which returns statistics about signer activity for the last 64 blocks
        :return inturnPercent: Percentage of blocks signed in-turn
        :return sealerActivity: A object containing signer addresses and the number of blocks signed by them
        :return numBlocks: The number of blocks analyzed
        """
        response = requests.post(self.url, data={
          "method": "clique_status",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
