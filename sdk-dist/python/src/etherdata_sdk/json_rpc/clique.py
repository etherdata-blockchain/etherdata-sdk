import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict


@dataclass_json
@dataclass
class GetSnapshotResponseRecents:

    number: List[str]
    """
    The addresses of prevoious blocks
    """


@dataclass_json
@dataclass
class GetSnapshotResponseSigners:

    signer: List[str]
    """
    The signer
    """


@dataclass_json
@dataclass
class GetSnapshotResponseSnapshot:

    hash: str
    """
    The hash of the block
    """

    number: float
    """
    The number of the block
    """

    recents: GetSnapshotResponseRecents
    """
    The details of previous blocks
    """

    signers: GetSnapshotResponseSigners
    """
    An object containing an arrry of signers
    """


@dataclass_json
@dataclass
class StatusResponseSealerActivity:

    signerAddresses: str
    """
    The signer addresses
    """

    numBlocksSigned: float
    """
    The number of blocks signed by signers
    """


@dataclass_json
@dataclass
class StatusResponse:

    inturnPercent: float
    """
    Percentage of blocks signed in-turn
    """

    sealerActivity: StatusResponseSealerActivity
    """
    A object containing signer addresses and the number of blocks signed by them
    """

    numBlocks: float
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

    def get_snapshot(self, number: float) -> GetSnapshotResponseSnapshot:
        """
        Retrieves a snapshot of all clique state at a given block
        #### Arguments

        number: The number of the block
        #### Returns #GetSnapshotResponseSnapshot

        snapshot: Snapshot of all clique state at the given block
        """
        json_data = {
            "method": "clique.getSnapshot",
            "params": [number],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetSnapshotResponseSnapshot.from_dict(response.json()["result"])

    def get_snapshot_at_hash(self, ) -> Any:
        """
        Retrieves the state snapshot at a given block
        #### Returns

        ststeSnapshot: The tate snapshot at the block.
        """
        json_data = {
            "method": "clique_getSnapshotAtHash",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_signers(self, ) -> List[str]:
        """
        Retrieves the list of authorized signers at the specified block
        #### Returns

        signerArray: The list of authorized signers
        """
        json_data = {
            "method": "clique_getSigners",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def proposals(self, ) -> str:
        """
        Returns the current proposals the node is voting on
        #### Returns

        proposal: The current proposals
        """
        json_data = {
            "method": "clique_proposals",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def propose(self, ) -> None:
        """
        Adds a new authorization proposal that the signer will attempt to push through
         If the auth parameter is true, the local signer votes for the given address to be included in the set of authorized signers
         With auth set to false, the vote is against the address
        """
        json_data = {
            "method": "clique_propose",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def discard(self, ) -> None:
        """
        This method drops a currently running proposal
         The signer will not cast further votes (either for or against) the address
        """
        json_data = {
            "method": "clique_discard",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def status(self, ) -> StatusResponse:
        """
        This is a debugging method which returns statistics about signer activity for the last 64 blocks
        #### Returns #StatusResponse

        inturnPercent: Percentage of blocks signed in-turn
        sealerActivity: A object containing signer addresses and the number of blocks signed by them
        numBlocks: The number of blocks analyzed
        """
        json_data = {
            "method": "clique_status",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return StatusResponse.from_dict(response.json()["result"])
