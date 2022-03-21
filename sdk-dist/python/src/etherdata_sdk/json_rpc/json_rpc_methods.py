import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict


@dataclass_json
@dataclass
class SyncingResponseSyncObject:

    startingBlock: float
    """
    The block at which the import started (will only be reset, after the sync reached his head)
    """

    currentBlock: float
    """
    The current block, same as eth_blockNumber
    """

    highestBlock: float
    """
    The estimated highest block
    """


@dataclass_json
@dataclass
class SyncingResponse:

    syncObject: SyncingResponseSyncObject
    """
    return this ONLY when syncing
    """

    syncStatus: bool
    """
    return this ONLY when not syncing
    """


@dataclass_json
@dataclass
class Obj:

    from_field: str = field(metadata=config(field_name="from"))
    """
    data, 20 Bytes - The address the transaction is sent from.
    """

    to: Optional[str]
    """
    data, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.
    """

    gas: Optional[str]
    """
    quantity - (optional, default "90000") Integer of the gas provided for the transaction execution. It will return unused gas.
    """

    gasPrice: Optional[str]
    """
    quantity - (optional, default "To-Be-Determined") Integer of the gasPrice used for each paid gas, in Wei.
    """

    value: Optional[str]
    """
    quantity - (optional) Integer of the value sent with this transaction, in Wei.
    """

    data: str
    """
    data - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see etherdata Contract ABI.
    """

    nonce: Optional[str]
    """
    quantity - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.
    """


@dataclass_json
@dataclass
class GetBlockByHashResponseObj:

    number: str
    """
    quantity - The block number. null when its pending block.
    """

    hash: str
    """
    data, 32 Bytes - hash of the block. null when its pending block.
    """

    parnetHash: str
    """
    data, 32 Bytes - hash of the parent block.
    """

    nonce: str
    """
    data, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    """

    sha3Uncles: str
    """
    data, 32 Bytes - SHA3 of the uncles data in the block.
    """

    logsBloom: str
    """
    data, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    """

    transactionsRoot: str
    """
    data, 32 Bytes - the root of the transaction trie of the block.
    """

    miner: str
    """
    data, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    """

    difficulty: str
    """
    quantity - integer of the difficulty for this block.
    """

    totalDifficulty: str
    """
    quantity - integer of the total difficulty of the chain until this block.
    """

    extradata: str
    """
    data - the “extra data” field of this block.
    """

    size: str
    """
    quantity - integer the size of this block in bytes.
    """

    gasLimit: str
    """
    quantity - the maximum gas allowed in this block.
    """

    gasUsed: str
    """
    quantity - the total used gas by all transactions in this block.
    """

    timestamp: str
    """
    quantity - the unix timestamp for when the block was collated.
    """

    transaction: List[str]
    """
    Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    """

    uncles: List[str]
    """
    Array - Array of uncle hashes.
    """


@dataclass_json
@dataclass
class GetBlockByNumberResponseObj:

    number: str
    """
    quantity - The block number. null when its pending block.
    """

    hash: str
    """
    data, 32 Bytes - hash of the block. null when its pending block.
    """

    parnetHash: str
    """
    data, 32 Bytes - hash of the parent block.
    """

    nonce: str
    """
    data, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    """

    sha3Uncles: str
    """
    data, 32 Bytes - SHA3 of the uncles data in the block.
    """

    logsBloom: str
    """
    data, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    """

    transactionsRoot: str
    """
    data, 32 Bytes - the root of the transaction trie of the block.
    """

    miner: str
    """
    data, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    """

    difficulty: str
    """
    quantity - integer of the difficulty for this block.
    """

    totalDifficulty: str
    """
    quantity - integer of the total difficulty of the chain until this block.
    """

    extradata: str
    """
    data - the “extra data” field of this block.
    """

    size: str
    """
    quantity - integer the size of this block in bytes.
    """

    gasLimit: str
    """
    quantity - the maximum gas allowed in this block.
    """

    gasUsed: str
    """
    quantity - the total used gas by all transactions in this block.
    """

    timestamp: str
    """
    quantity - the unix timestamp for when the block was collated.
    """

    transaction: List[str]
    """
    Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    """

    uncles: List[str]
    """
    Array - Array of uncle hashes.
    """


@dataclass_json
@dataclass
class GetTransactionByHashResponseObj:

    blockHash: str
    """
    data, 32 Bytes - hash of the block where this transaction was in. null when its pending.
    """

    blockNumber: str
    """
    quantity - block number where this transaction was in. null when its pending.
    """

    from_field: str = field(metadata=config(field_name="from"))
    """
    data, 20 Bytes - address of the sender.
    """

    gas: str
    """
    quantity - gas provided by the sender.
    """

    gasParice: str
    """
    quantity - gas price provided by the sender in Wei.
    """

    hash: str
    """
    data, 32 Bytes - hash of the transaction.
    """

    input: str
    """
    data - the data send along with the transaction.
    """

    nonce: str
    """
    quantity - the number of transactions made by the sender prior to this one.
    """

    to: str
    """
    data, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    """

    transactionIndex: str
    """
    quantity - integer of the transactions index position in the block. null when its pending.
    """

    value: str
    """
    quantity - value transferred in Wei.
    """

    v: str
    """
    quantity - ECDSA recovery id
    """

    r: str
    """
    data, 32 Bytes - ECDSA signature r
    """

    s: str
    """
    data, 32 Bytes - ECDSA signature s
    """


@dataclass_json
@dataclass
class GetTransactionByHashAndIndexResponseObj:

    data: Any
    """

    """


@dataclass_json
@dataclass
class GetTransactionByBlockNumberAndIndexResponseObj:

    data: Any
    """

    """


@dataclass_json
@dataclass
class GetTransactionReceiptResponseObj:

    transactionHash: str
    """
    data, 32 Bytes - hash of the transaction.
    """

    transactionIndex: str
    """
    quantity - integer of the transactions index position in the block.
    """

    blockHash: str
    """
    data, 32 Bytes - hash of the block where this transaction was in.
    """

    blockNumber: str
    """
    quantity - block number where this transaction was in.
    """

    from_field: str = field(metadata=config(field_name="from"))
    """
    data, 20 Bytes - address of the sender.
    """

    to: str
    """
    data, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    """

    cumulativeGasUsed: str
    """
    quantity - The total amount of gas used when this transaction was executed in the block.
    """

    gasUsed: str
    """
    quantity - The amount of gas used by this specific transaction alone.
    """

    contractAddress: str
    """
    data, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.
    """

    logs: List[str]
    """
    Array - Array of log objects, which this transaction generated.
    """

    logsBloom: str
    """
    data, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.
    """

    root: str
    """
    Either this or "status" is returned data 32 bytes of post-transaction stateroot (pre Byzantium)
    """

    status: str
    """
    Either this or "root" is returned quantity either 1 (success) or 0 (failure)
    """


@dataclass_json
@dataclass
class GetUncleByBlockHashAndIndexResponseObj:

    data: Any
    """

    """


@dataclass_json
@dataclass
class GetUncleByBlockNumberAndIndexResponseObj:

    data: Any
    """

    """


@dataclass_json
@dataclass
class Array:

    removed: bool
    """
    TAG - true when the log was removed, due to a chain reorganization. false if its a valid log.
    """

    logIndex: str
    """
    quantity - integer of the log index position in the block. null when its pending log.
    """

    transactionIndex: str
    """
    quantity - integer of the transactions index position log was created from. null when its pending log.
    """

    transactionHash: str
    """
    data, 32 Bytes - hash of the transactions this log was created from. null when its pending log.
    """

    blockHash: str
    """
    data, 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log.
    """

    blockNumber: str
    """
    quantity - the block number where this log was in. null when its pending. null when its pending log.
    """

    address: str
    """
    data, 20 Bytes - address from which this log originated.
    """

    data: str
    """
    data - contains one or more 32 Bytes non-indexed arguments of the log.
    """

    topics: List[str]
    """
    Array of data - Array of 0 to 4 32 Bytes data of indexed log arguments. (In solidity - The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous specifier.)
    """


class JsonRpcMethods:
    """
    different methods to perform etd control
    """

    def __init__(self, url: str):
        self.url = url

    def protocal_version(self, ) -> str:
        """
        Returns the current etherdata protocol version
        #### Returns

        version: The current etherdata protocol version
        """
        json_data = {
            "method": "eth_protocalVersion",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def block_number(self, ) -> str:
        """
        Returns the current block number
        #### Returns

        blockNumber: The current blockNumber
        """
        json_data = {
            "method": "eth_blockNumber",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def syncing(self, ) -> SyncingResponse:
        """
        Returns an object with data about the sync status or false
        #### Returns #SyncingResponse

        syncObject: return this ONLY when syncing
        syncStatus: return this ONLY when not syncing
        """
        json_data = {
            "method": "eth_syncing",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return SyncingResponse.from_dict(response.json()["result"])

    def coinbase(self, ) -> Any:
        """
        Returns the client coinbase address
        #### Returns

        coinbase: The client coinbase address
        """
        json_data = {
            "method": "eth_coinbase",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def mining(self, ) -> bool:
        """
        Returns true if client is actively mining new blocks
        #### Returns

        isMining: True if client is actively mining new blocks.
        """
        json_data = {
            "method": "eth_mining",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def hashrate(self, ) -> Any:
        """
        Returns the number of hashes per second that the node is mining with
        #### Returns

        hashrate: The number of hashes per second that the node is mining with
        """
        json_data = {
            "method": "eth_hashrate",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def gas_price(self, ) -> Any:
        """
        Returns the current price per gas in wei
        #### Returns

        gasPrice: The current price per gas in wei (8049999872 Wei in the example)
        """
        json_data = {
            "method": "eth_gasPrice",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def accounts(self, ) -> List[Any]:
        """
        Returns a list of addresses owned by client
        #### Returns

        addressAccount: The array of accouts
        """
        json_data = {
            "method": "eth_accounts",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_balance(self, address: str, tag: str) -> float:
        """
        Returns the balance of the account of given address
        #### Arguments

        address: data, 20 Bytes - address to check for balance
        tag: quantity_tag - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        #### Returns

        balance: quantity - integer of the current balance in wei.
        """
        json_data = {
            "method": "eth_getBalance",
            "params": [address, tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_storage_at(self, address: Any, position: Any, tag: str) -> Any:
        """
        Returns the value from a storage position at a given address
        #### Arguments

        address: data, 20 Bytes - address of the storage.
        position: The integer of the position in the storage.
        tag: quantity_tag - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        #### Returns

        valur: The value at this storage position.
        """
        json_data = {
            "method": "eth_getStorageAt",
            "params": [address, position, tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_transaction_count(self, address: Any, state: str) -> float:
        """
        Returns the number of transactions sent from an address
        #### Arguments

        address: The address.
        state: quantity_tag - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        #### Returns

        number: The number of transactions send from this address.
        """
        json_data = {
            "method": "eth_getTransactionCount",
            "params": [address, state],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_transaction_count_by_hash(
            self, data: str, quantity_tag: str) -> str:
        """
        Returns the number of transactions in a block from a block matching the given block hash
        #### Arguments

        data: 20 Bytes - The address
        quantity_tag: integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        #### Returns

        quantity: The integer of the number of transactions send from this address.
        """
        json_data = {
            "method": "eth_getTransactionCountByHash",
            "params": [data, quantity_tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_block_transaction_count_by_hash(self, data: str) -> str:
        """
        Returns the number of transactions in a block from a block matching the given block hash
        #### Arguments

        data: 32 Bytes - The hash of a block
        #### Returns

        quantity: The integer of the number of transactions in this block.
        """
        json_data = {
            "method": "eth_getBlockTransactionCountByHash",
            "params": [data],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_block_transaction_count_by_number(self, quantity_tag: str) -> str:
        """
        Returns the number of transactions in a block matching the given block number
        #### Arguments

        quantity_tag: The integer of a block number, or the string "earliest", "latest" or "pending", see the default block parameter
        #### Returns

        quantity: The integer of the number of transactions in this block.
        """
        json_data = {
            "method": "eth_getBlockTransactionCountByNumber",
            "params": [quantity_tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_uncle_count_by_block_hash(self, data: str) -> str:
        """
        Returns the number of uncles in a block from a block matching the given block hash
        #### Arguments

        data: 32 Bytes - The hash of a block
        #### Returns

        quantity_tag: The integer of the number of uncles in this block.
        """
        json_data = {
            "method": "eth_getUncleCountByBlockHash",
            "params": [data],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_uncle_count_by_block_number(self, quantity_tag: str) -> str:
        """
        Returns the number of uncles in a block from a block matching the given block number
        #### Arguments

        quantity_tag: The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter
        #### Returns

        quantity: The integer of the number of uncles in this block.
        """
        json_data = {
            "method": "eth_getUncleCountByBlockNumber",
            "params": [quantity_tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_code(self, data: str, quantity_tag: str) -> str:
        """
        Returns code at a given address
        #### Arguments

        data: 20 Byter - The address
        quantity_tag: The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        #### Returns

        data: The code from the given address.
        """
        json_data = {
            "method": "eth_code",
            "params": [data, quantity_tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def sign(self, a: str, b: str) -> str:
        """
        The sign method calculates an etherdata specific signature with sign(keccak256("\x19etherdata Signed Message:\n" + len(message) + message)))

        By adding a prefix to the message makes the calculated signature recognisable as an etherdata specific signature
         This prevents misuse where a malicious DApp can sign arbitrary data (e
        g
         transaction) and use the signature to impersonate the victim

        Note the address to sign with must be unlocked
        #### Arguments

        a: 20 Bytes - The address
        b: N Bytes - The message to sign
        #### Returns

        value: The signature
        """
        json_data = {
            "method": "eth_sign",
            "params": [a, b],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def sign_transaction(self, obj: Obj) -> str:
        """
        Signs a transaction that can be submitted to the network at a later time using with eth_sendRawTransaction
        #### Arguments

        obj: The transaction object
        #### Returns

        data: The signed transaction object.
        """
        json_data = {
            "method": "eth_signTransaction",
            "params": [obj],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def send_transcation(self, obj: Obj) -> str:
        """
        Creates new message call transaction or a contract creation, if the data field contains code
        #### Arguments

        obj: The transaction object
        #### Returns

        data: 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
        """
        json_data = {
            "method": "eth_sendTranscation",
            "params": [obj],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def send_raw_transaction(self, data: str) -> str:
        """
        Creates new message call transaction or a contract creation for signed transactions
        #### Arguments

        data: The signed transaction data.
        #### Returns

        data: 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
        """
        json_data = {
            "method": "eth_sendRawTransaction",
            "params": [data],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def call(self, obj: Obj, quantity_tag: str) -> str:
        """
        Executes a new message call immediately without creating a transaction on the block chain
        #### Arguments

        obj: The transaction object
        quantity_tag: The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter.
        #### Returns

        data: The return value of executed contract.
        """
        json_data = {
            "method": "eth_call",
            "params": [obj, quantity_tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def estimate_gas(self, obj: Obj, quantity_tag: str) -> str:
        """
        Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
         The transaction will not be added to the blockchain
         Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance
        #### Arguments

        obj: The transaction object
        quantity_tag: The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter.
        #### Returns

        quantity: The amount of gas used.
        """
        json_data = {
            "method": "eth_estimateGas",
            "params": [obj, quantity_tag],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_block_by_hash(
            self,
            data: str,
            bool_field: bool) -> GetBlockByHashResponseObj:
        """
        Returns information about a block by hash
        #### Arguments

        data: 32 Bytes - Hash of a block.
        bool: If true it returns the full transaction objects, if false only the hashes of the transactions.
        #### Returns #GetBlockByHashResponseObj

        obj: A block object, or null when no block was found
        """
        json_data = {
            "method": "eth_getBlockByHash",
            "params": [data, bool_field],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetBlockByHashResponseObj.from_dict(response.json()["result"])

    def get_block_by_number(
            self,
            quantity_tag: str,
            bool_field: bool) -> GetBlockByNumberResponseObj:
        """
        Returns information about a block by block number
        #### Arguments

        quantity_tag: The integer of a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
        bool: If true it returns the full transaction objects, if false only the hashes of the transactions.
        #### Returns #GetBlockByNumberResponseObj

        obj: A block object, or null when no block was found
        """
        json_data = {
            "method": "eth_getBlockByNumber",
            "params": [quantity_tag, bool_field],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetBlockByNumberResponseObj.from_dict(response.json()["result"])

    def get_transaction_by_hash(
            self, data: str) -> GetTransactionByHashResponseObj:
        """
        Returns the information about a transaction requested by transaction hash
        #### Arguments

        data: 32 Bytes - hash of a transaction
        #### Returns #GetTransactionByHashResponseObj

        obj: A transaction object, or null when no transaction was found
        """
        json_data = {
            "method": "eth_getTransactionByHash",
            "params": [data],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetTransactionByHashResponseObj.from_dict(
            response.json()["result"])

    def get_transaction_by_hash_and_index(
            self,
            data: str,
            quantity: str) -> GetTransactionByHashAndIndexResponseObj:
        """
        Returns information about a transaction by block hash and transaction index position
        #### Arguments

        data: 32 Bytes - hash of a block.
        quantity: The integer of the transaction index position.
        #### Returns #GetTransactionByHashAndIndexResponseObj

        obj: See eth_getTransactionByHash
        """
        json_data = {
            "method": "eth_getTransactionByHashAndIndex",
            "params": [data, quantity],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetTransactionByHashAndIndexResponseObj.from_dict(
            response.json()["result"])

    def get_transaction_by_block_number_and_index(
            self,
            quantity_tag: str,
            quantity: str) -> GetTransactionByBlockNumberAndIndexResponseObj:
        """
        Returns information about a transaction by block number and transaction index position
        #### Arguments

        quantity_tag: a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
        quantity: The transaction index position.
        #### Returns #GetTransactionByBlockNumberAndIndexResponseObj

        obj: See eth_getTransactionByHash
        """
        json_data = {
            "method": "eth_getTransactionByBlockNumberAndIndex",
            "params": [quantity_tag, quantity],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetTransactionByBlockNumberAndIndexResponseObj.from_dict(response.json()[
                                                                        "result"])

    def get_transaction_receipt(
            self, data: str) -> GetTransactionReceiptResponseObj:
        """
        Returns the receipt of a transaction by transaction hash
         Note That the receipt is not available for pending transactions
        #### Arguments

        data: 32 Bytes - hash of a transaction
        #### Returns #GetTransactionReceiptResponseObj

        obj: A transaction receipt object, or null when no receipt was found
        """
        json_data = {
            "method": "eth_getTransactionReceipt",
            "params": [data],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetTransactionReceiptResponseObj.from_dict(
            response.json()["result"])

    def get_uncle_by_block_hash_and_index(
            self,
            data: str,
            quantity: str) -> GetUncleByBlockHashAndIndexResponseObj:
        """
        eturns information about a uncle of a block by hash and uncle index position
        #### Arguments

        data: 32 Bytes - The hash of a block.
        quantity: The uncle’s index position.
        #### Returns #GetUncleByBlockHashAndIndexResponseObj

        obj: See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
        """
        json_data = {
            "method": "eth_getUncleByBlockHashAndIndex",
            "params": [data, quantity],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetUncleByBlockHashAndIndexResponseObj.from_dict(
            response.json()["result"])

    def get_uncle_by_block_number_and_index(
            self,
            quantity_tag: str,
            quantity: str) -> GetUncleByBlockNumberAndIndexResponseObj:
        """
        Returns information about a uncle of a block by number and uncle index position
        #### Arguments

        quantity_tag: a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
        quantity: the uncle’s index position.
        #### Returns #GetUncleByBlockNumberAndIndexResponseObj

        obj: See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
        """
        json_data = {
            "method": "eth_getUncleByBlockNumberAndIndex",
            "params": [quantity_tag, quantity],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return GetUncleByBlockNumberAndIndexResponseObj.from_dict(response.json()[
                                                                  "result"])

    def get_compliers(self, ) -> List[str]:
        """
        Returns a list of available compilers in the client
        #### Returns

        array: Array of available compilers.
        """
        json_data = {
            "method": "eth_getCompliers",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def compile_solidity(self, string: str) -> str:
        """
        Returns compiled solidity code
        #### Arguments

        string: The source code.
        #### Returns

        data: The compiled source code.
        """
        json_data = {
            "method": "eth_compileSolidity",
            "params": [string],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def complpie_l_l_l(self, string: str) -> str:
        """
        Returns compiled LLL code
        #### Arguments

        string: The source code.
        #### Returns

        data: The compiled source code.
        """
        json_data = {
            "method": "eth_complpieLLL",
            "params": [string],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def complie_serpent(self, string: str) -> str:
        """
        Returns compiled serpent code
        #### Arguments

        string: The source code.
        #### Returns

        data: The compiled source code.
        """
        json_data = {
            "method": "eth_complieSerpent",
            "params": [string],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def new_filter(self, obj: Obj) -> str:
        """
        Creates a filter object, based on filter options, to notify when the state changes (logs)
         To check if the state has changed, call eth_getFilterChanges

        A note on specifying topic filters Topics are order-dependent
         A transaction with a log with topics [A, B] will be matched by the following topic filters
        -[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”
        #### Arguments

        obj: The filter options
        #### Returns

        quantity: A filter id.
        """
        json_data = {
            "method": "eth_newFilter",
            "params": [obj],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def new_block_filter(self, ) -> str:
        """
        Creates a filter in the node, to notify when a new block arrives
         To check if the state has changed, call eth_getFilterChanges
        #### Returns

        quantity: A filter id.
        """
        json_data = {
            "method": "eth_newBlockFilter",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def new_pending_transaction_filter(self, ) -> str:
        """
        Creates a filter in the node, to notify when new pending transactions arrive
         To check if the state has changed, call eth_getFilterChanges
        #### Returns

        quantity: A filter id.
        """
        json_data = {
            "method": "eth_newPendingTransactionFilter",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def uninstall_filter(self, quantity: str) -> bool:
        """
        Uninstalls a filter with given id
         Should always be called when watch is no longer needed
         Additonally Filters timeout when they aren’t requested with eth_getFilterChanges
         for a period of time
        #### Arguments

        quantity: The filter id.
        #### Returns

        bool: true if the filter was successfully uninstalled, otherwise false.
        """
        json_data = {
            "method": "eth_uninstallFilter",
            "params": [quantity],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_filter_changes(self, quantity: str) -> List[Array]:
        """
        Polling method for a filter, which returns an array of logs which occurred since last poll
        #### Arguments

        quantity: The filter id.
        #### Returns #List[Array]

        array: Array of log objects, or an empty array if nothing has changed since last poll. For filters created with eth_newBlockFilter the return are block hashes (data, 32 Bytes), e.g. ["0x3454645634534..."]. For filters created with eth_newPendingTransactionFilter the return are transaction hashes (data, 32 Bytes), e.g. ["0x6345343454645..."].
        """
        json_data = {
            "method": "eth_getFilterChanges",
            "params": [quantity],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return Array.schema().load(response.json()["result"], many=True)

    def get_filter_logs(self, quantity: str) -> List[Any]:
        """
        Returns an array of all logs matching filter with given id
        #### Arguments

        quantity: The filter id.
        #### Returns

        array: See eth_getFilterChanges.
        """
        json_data = {
            "method": "eth_getFilterLogs",
            "params": [quantity],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_logs(self, obj: Obj) -> List[Any]:
        """
        Returns an array of all logs matching a given filter object
        #### Arguments

        obj: The filter options
        #### Returns

        array: See eth_getFilterChanges.
        """
        json_data = {
            "method": "eth_getLogs",
            "params": [obj],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_work(self, ) -> List[str]:
        """
        Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)
        #### Returns

        array: Array with the following properties -data, 32 Bytes - current block header pow-hash -data, 32 Bytes - the seed hash used for the DAG. -data, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.
        """
        json_data = {
            "method": "eth_getWork",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def submit_work(self, a: str, b: str, c: str) -> bool:
        """
        Used for submitting a proof-of-work solution
        #### Arguments

        a: 8 Bytes - The nonce found (64 bits)
        b: 32 Bytes - The header’s pow-hash (256 bits)
        c: 32 Bytes - The mix digest (256 bits)
        #### Returns

        bool: returns true if the provided solution is valid, otherwise false.
        """
        json_data = {
            "method": "eth_submitWork",
            "params": [a, b, c],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def submit_hashrate(self, hashrate: str, i_d: str) -> bool:
        """
        Used for submitting mining hashrate
        #### Arguments

        hashrate: A hexadecimal string representation (32 bytes) of the hash rate
        id: String - A random hexadecimal(32 bytes) ID identifying the client
        #### Returns

        bool: Returns `true` if submitting went through succesfully and `false` otherwise.
        """
        json_data = {
            "method": "eth_submitHashrate",
            "params": [hashrate, id],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]
