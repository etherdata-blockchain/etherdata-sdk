import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict


@dataclass_json
@dataclass
class Transaction:

    blockHash: str
    """
    The block hash of the transaction
    """

    blockNumber: float
    """
    The block number of the transaction
    """

    from_field: str = field(metadata=config(field_name="from"))
    """
    The from value of the transaction
    """

    gas: str
    """
    The gas value of the transaction
    """

    gasPrice: str
    """
    The gas price of the transaction
    """

    hash: str
    """
    The hash of the transaction
    """

    input: str
    """
    The input of the transaction
    """

    nonce: str
    """
    The nonce of the transaction
    """

    to: str
    """
    The to of the transaction
    """

    transactionIndex: float
    """
    The transaction index
    """

    value: str
    """
    The value of the transaction
    """


@dataclass_json
@dataclass
class PendingTransactions:

    transaction: List[Transaction]
    """
    The object containing different fields
    """


@dataclass_json
@dataclass
class QueuedTransactions:

    transaction: List[Transaction]
    """
    The object containing different fields
    """


@dataclass_json
@dataclass
class ContentResponseTransactionObject:

    pendingTransactions: List[PendingTransactions]
    """
    The array of pending transactions
    """

    queuedTransactions: List[QueuedTransactions]
    """
    The array of queued transactions
    """


@dataclass_json
@dataclass
class TransactionArray:

    transaction: str
    """
    Each entry maps an origin-address to a batch of scheduled transactions.
    """


@dataclass_json
@dataclass
class InspectResponseTransactionObject:

    pendingTransactions: List[PendingTransactions]
    """
    The array of pending transactions
    """

    queuedTransactions: List[QueuedTransactions]
    """
    The array of queued transactions
    """


@dataclass_json
@dataclass
class StatusResponseStatusObject:

    pending: float
    """
    The number of transactions currently pending for inclusion in the next block(s)
    """

    queued: float
    """
    The transaction that is being scheduled for future execution
    """


class Txpool:
    """
    The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing
    """

    def __init__(self, url: str):
        self.url = url

    def content(self, ) -> ContentResponseTransactionObject:
        """
        The content inspection property can be queried to list the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only

        The result is an object with two fields pending and queued
         Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
         These batches themselves are maps associating nonces with actual transactions

        Please note, there may be multiple transactions associated with the same account and nonce
         This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
        #### Returns #ContentResponseTransactionObject

        transactionObject: The return transaction object
        """
        json_data = {
            "method": "txpool_content",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return ContentResponseTransactionObject.from_dict(
            response.json()["result"])

    def inspect(self, ) -> InspectResponseTransactionObject:
        """
        The inspect inspection property can be queried to list a textual summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
         This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues

        The result is an object with two fields pending and queued
         Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
         These batches themselves are maps associating nonces with transactions summary strings

        Please note, there may be multiple transactions associated with the same account and nonce
         This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
        #### Returns #InspectResponseTransactionObject

        transactionObject: the return transcation object
        """
        json_data = {
            "method": "txpool_inspect",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return InspectResponseTransactionObject.from_dict(
            response.json()["result"])

    def status(self, ) -> StatusResponseStatusObject:
        """
        The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only

        The result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state
        #### Returns #StatusResponseStatusObject

        statusObject: An object containing transaction status
        """
        json_data = {
            "method": "txpool_status",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return StatusResponseStatusObject.from_dict(response.json()["result"])
