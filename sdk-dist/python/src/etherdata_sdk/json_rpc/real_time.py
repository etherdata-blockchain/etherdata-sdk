import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict
from ..exception import RPCException


@dataclass_json
@dataclass
class SubscriptionObject:

    address: Optional[List[Optional[str]]]
    """
    Either an address or an array of addresses. Only logs that are created from these addresses are returned (optional)
    """

    topics: Optional[List[Optional[str]]]
    """
    Only logs which match the specified topics
    """


@dataclass_json
@dataclass
class SupportedSubscriptionsResponseOutputObject:

    address: str
    """
    The transaction address
    """

    blockHash: str
    """
    The transaction block hash
    """

    blockNumber: str
    """
    The transaction block number
    """

    data: str
    """
    The transaction data
    """

    logIndex: str
    """
    The transaction log index
    """

    topics: List[str]
    """
    The transaction topic(s)
    """

    transactionHash: str
    """
    The transaction hash
    """

    transactionIndex: str
    """
    The transaction index
    """


@dataclass_json
@dataclass
class NewPendingTransactionsResponseParams:

    subscription: str
    """
    The subscription ID
    """

    result: str
    """
    The result address
    """


@dataclass_json
@dataclass
class NewPendingTransactionsResponseTranscation:

    jsonrpc: str
    """
    The jsonrpc version
    """

    method: str
    """
    The subscription method
    """

    params: NewPendingTransactionsResponseParams
    """
    The parameters regarding the subscription
    """


@dataclass_json
@dataclass
class NewPendingTransactionsResponse:

    hash: str
    """
    The hash for all transactions
    """

    transcation: NewPendingTransactionsResponseTranscation
    """
    The transaction
    """


@dataclass_json
@dataclass
class SyncingResponseStatus:

    startingBlock: float
    """
    The starting block number
    """

    currentBlock: float
    """
    The current block number
    """

    highestBlock: float
    """
    The highest block number
    """

    pulledStates: float
    """
    The pulled states
    """

    knownStates: float
    """
    The known states
    """


@dataclass_json
@dataclass
class SyncingResponse:

    synchronized: bool
    """
    Indicating that the synchronization has started (true) or finished (false)
    """

    status: SyncingResponseStatus
    """
    An object with various progress indicators regarding the synchronization
    """


class RealTime:
    """
    Getd v1
    4 and later support publish / subscribe using JSON-RPC notifications
      This allows clients to wait for events instead of polling for them

    It works by subscribing to particular events
     The node will return a subscription id
      For each event that matches the subscription a notification with relevant data is send toGetder  with the subscription id

    Considerations 1
     Notifications are sent for current events and not for past events
     If your use case requires  you not to miss any notifications than subscriptions are probably not the best option
     2
     Subscriptions require a full duplex connection
     Getd offers such connections in the form of  WebSocket and IPC (enabled by default)
     3
     Subscriptions are coupled to a connection
     If the connection is closed all subscriptions that  are created over this connection are removed
     4
     Notifications are stored in an internal buffer and sent from this buffer to the client
     If the  client is unable to keep up and the number of buffered notifications reaches a  limit (currently 10k) the connection is closed
     Keep in mind that subscribing to some events  can cause a flood of notifications, e
    g
     listening for all logs/blocks when the node starts to  synchronize
    """

    def __init__(self, url: str):
        self.url = url

    def create_subscription(
            self,
            subscription_name: str,
            aaaaa: Optional[Any]) -> str:
        """
        Subscriptions are created with a regular RPC call with etd_subscribe as method and the subscription name as first parameter
         If successful it returns the subscription id
        #### Arguments

        subscriptionName: The subscription name
        aaaaa:
        #### Returns

        subscriptionID: The subscription ID
        """
        json_data = {
            "method": "real-time_createSubscription",
            "params": [subscription_name, aaaaa],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def cancel_subscription(self, subscription_i_d: str) -> bool:
        """
        Subscriptions are cancelled with a regular RPC call with etd_unsubscribe as method and the subscription id as first parameter
         It returns a bool indicating if the subscription was cancelled successful
        #### Arguments

        subscriptionID: The subscription ID
        #### Returns

        cancelled: Indicating if the subscription was cancelled successful.
        """
        json_data = {
            "method": "real-time_cancelSubscription",
            "params": [subscription_i_d],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def supported_subscriptions(
            self,
            subscription_object: SubscriptionObject) -> SupportedSubscriptionsResponseOutputObject:
        """
        newHeads -Fires a notification each time a new header is appended to the chain, including chain reorganizations
         Users can use the bloom filter to determine if the block contains logs that are interested to them
         -In case of a chain reorganization the subscription will emit all new headers for the new chain
         Therefore the subscription can emit multiple headers on the same height

        logs -Returns logs that are included in new imported blocks and match the given filter criteria
         -In case of a chain reorganization previous sent logs that are on the old chain will be resend with the removed property set to true
         Logs from transactions that ended up in the new chain are emitted
         Therefore a subscription can emit logs for the same transaction multiple times
        #### Arguments

        subscriptionObject: The object containing different opotional transcation fields
        #### Returns #SupportedSubscriptionsResponseOutputObject

        outputObject: The return Object of the function
        """
        json_data = {
            "method": "real-time_supportedSubscriptions",
            "params": [subscription_object],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return SupportedSubscriptionsResponseOutputObject.from_dict(response.json()[
                                                                    "result"])

    def new_pending_transactions(self, ) -> NewPendingTransactionsResponse:
        """
        Returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node
         Tansaction that was previously part of the canonical chain isn’t part of the new canonical chain after a reogranization its again emitted
        #### Returns #NewPendingTransactionsResponse

        hash: The hash for all transactions
        transcation: The transaction
        """
        json_data = {
            "method": "real-time_newPendingTransactions",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return NewPendingTransactionsResponse.from_dict(
            response.json()["result"])

    def syncing(self, ) -> SyncingResponse:
        """
        Indicates when the node starts or stops synchronizing
         The result can either be a boolean indicating that the synchronization has started (true), finished (false) or an object with various progress indicators
        #### Returns #SyncingResponse

        synchronized: Indicating that the synchronization has started (true) or finished (false)
        status: An object with various progress indicators regarding the synchronization
        """
        json_data = {
            "method": "real-time_syncing",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return SyncingResponse.from_dict(response.json()["result"])
