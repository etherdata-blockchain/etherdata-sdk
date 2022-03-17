import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config


@dataclass_json
@dataclass
class SyncingResponseSyncObject:
    
    startingBlock:float 
    """
    The block at which the import started (will only be reset, after the sync reached his head)
    """

    currentBlock:float 
    """
    The current block, same as eth_blockNumber
    """

    highestBlock:float 
    """
    The estimated highest block
    """

@dataclass_json
@dataclass
class SyncingResponse:
    
    syncObject:SyncingResponseSyncObject    
    """
    return this ONLY when syncing
    """
    
    syncStatus:bool    
    """
    return this ONLY when not syncing
    """
    


@dataclass_json
@dataclass
class Obj:
    
    from_field:str = field(metadata=config(field_name="from"))
    """
    DATA, 20 Bytes - The address the transaction is sent from.
    """

    to:Optional[str] 
    """
    DATA, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.
    """

    gas:Optional[str] 
    """
    QUANTITY - (optional, default "90000") Integer of the gas provided for the transaction execution. It will return unused gas.
    """

    gasPrice:Optional[str] 
    """
    QUANTITY - (optional, default "To-Be-Determined") Integer of the gasPrice used for each paid gas, in Wei.
    """

    value:Optional[str] 
    """
    QUANTITY - (optional) Integer of the value sent with this transaction, in Wei.
    """

    data:str 
    """
    DATA - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see etdereum Contract ABI.
    """

    nonce:Optional[str] 
    """
    QUANTITY - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.
    """

@dataclass_json
@dataclass
class GetBlockByHashResponseObj:
    
    number:str 
    """
    QUANTITY - The block number. null when its pending block.
    """

    hash:str 
    """
    DATA, 32 Bytes - hash of the block. null when its pending block.
    """

    parnetHash:str 
    """
    DATA, 32 Bytes - hash of the parent block.
    """

    nonce:str 
    """
    DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    """

    sha3Uncles:str 
    """
    DATA, 32 Bytes - SHA3 of the uncles data in the block.
    """

    logsBloom:str 
    """
    DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    """

    transactionsRoot:str 
    """
    DATA, 32 Bytes - the root of the transaction trie of the block.
    """

    miner:str 
    """
    DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    """

    difficulty:str 
    """
    QUANTITY - integer of the difficulty for this block.
    """

    totalDifficulty:str 
    """
    QUANTITY - integer of the total difficulty of the chain until this block.
    """

    extraData:str 
    """
    DATA - the “extra data” field of this block.
    """

    size:str 
    """
    QUANTITY - integer the size of this block in bytes.
    """

    gasLimit:str 
    """
    QUANTITY - the maximum gas allowed in this block.
    """

    gasUsed:str 
    """
    QUANTITY - the total used gas by all transactions in this block.
    """

    timestamp:str 
    """
    QUANTITY - the unix timestamp for when the block was collated.
    """

    transaction:List[str] 
    """
    Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    """

    uncles:List[str] 
    """
    Array - Array of uncle hashes.
    """

@dataclass_json
@dataclass
class GetBlockByNumberResponseObj:
    
    number:str 
    """
    QUANTITY - The block number. null when its pending block.
    """

    hash:str 
    """
    DATA, 32 Bytes - hash of the block. null when its pending block.
    """

    parnetHash:str 
    """
    DATA, 32 Bytes - hash of the parent block.
    """

    nonce:str 
    """
    DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
    """

    sha3Uncles:str 
    """
    DATA, 32 Bytes - SHA3 of the uncles data in the block.
    """

    logsBloom:str 
    """
    DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
    """

    transactionsRoot:str 
    """
    DATA, 32 Bytes - the root of the transaction trie of the block.
    """

    miner:str 
    """
    DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
    """

    difficulty:str 
    """
    QUANTITY - integer of the difficulty for this block.
    """

    totalDifficulty:str 
    """
    QUANTITY - integer of the total difficulty of the chain until this block.
    """

    extraData:str 
    """
    DATA - the “extra data” field of this block.
    """

    size:str 
    """
    QUANTITY - integer the size of this block in bytes.
    """

    gasLimit:str 
    """
    QUANTITY - the maximum gas allowed in this block.
    """

    gasUsed:str 
    """
    QUANTITY - the total used gas by all transactions in this block.
    """

    timestamp:str 
    """
    QUANTITY - the unix timestamp for when the block was collated.
    """

    transaction:List[str] 
    """
    Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
    """

    uncles:List[str] 
    """
    Array - Array of uncle hashes.
    """

@dataclass_json
@dataclass
class GetTransactionByHashResponseObj:
    
    blockHash:str 
    """
    DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
    """

    blockNumber:str 
    """
    QUANTITY - block number where this transaction was in. null when its pending.
    """

    from_field:str = field(metadata=config(field_name="from"))
    """
    DATA, 20 Bytes - address of the sender.
    """

    gas:str 
    """
    QUANTITY - gas provided by the sender.
    """

    gasParice:str 
    """
    QUANTITY - gas price provided by the sender in Wei.
    """

    hash:str 
    """
    DATA, 32 Bytes - hash of the transaction.
    """

    input:str 
    """
    DATA - the data send along with the transaction.
    """

    nonce:str 
    """
    QUANTITY - the number of transactions made by the sender prior to this one.
    """

    to:str 
    """
    DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    """

    transactionIndex:str 
    """
    QUANTITY - integer of the transactions index position in the block. null when its pending.
    """

    value:str 
    """
    QUANTITY - value transferred in Wei.
    """

    v:str 
    """
    QUANTITY - ECDSA recovery id
    """

    r:str 
    """
    DATA, 32 Bytes - ECDSA signature r
    """

    s:str 
    """
    DATA, 32 Bytes - ECDSA signature s
    """

@dataclass_json
@dataclass
class GetTransactionByHashAndIndexResponseObj:
    
    data:Any 
    """
    
    """

@dataclass_json
@dataclass
class GetTransactionByBlockNumberAndIndexResponseObj:
    
    data:Any 
    """
    
    """

@dataclass_json
@dataclass
class GetTransactionReceiptResponseObj:
    
    transactionHash:str 
    """
    DATA, 32 Bytes - hash of the transaction.
    """

    transactionIndex:str 
    """
    QUANTITY - integer of the transactions index position in the block.
    """

    blockHash:str 
    """
    DATA, 32 Bytes - hash of the block where this transaction was in.
    """

    blockNumber:str 
    """
    QUANTITY - block number where this transaction was in.
    """

    from_field:str = field(metadata=config(field_name="from"))
    """
    DATA, 20 Bytes - address of the sender.
    """

    to:str 
    """
    DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    """

    cumulativeGasUsed:str 
    """
    QUANTITY - The total amount of gas used when this transaction was executed in the block.
    """

    gasUsed:str 
    """
    QUANTITY - The amount of gas used by this specific transaction alone.
    """

    contractAddress:str 
    """
    DATA, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.
    """

    logs:List[str] 
    """
    Array - Array of log objects, which this transaction generated.
    """

    logsBloom:str 
    """
    DATA, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.
    """

    root:str 
    """
    Either this or "status" is returned DATA 32 bytes of post-transaction stateroot (pre Byzantium)
    """

    status:str 
    """
    Either this or "root" is returned QUANTITY either 1 (success) or 0 (failure)
    """

@dataclass_json
@dataclass
class GetUncleByBlockHashAndIndexResponseObj:
    
    data:Any 
    """
    
    """

@dataclass_json
@dataclass
class GetUncleByBlockNumberAndIndexResponseObj:
    
    data:Any 
    """
    
    """

@dataclass_json
@dataclass
class Array:
    
    removed:bool 
    """
    TAG - true when the log was removed, due to a chain reorganization. false if its a valid log.
    """

    logIndex:str 
    """
    QUANTITY - integer of the log index position in the block. null when its pending log.
    """

    transactionIndex:str 
    """
    QUANTITY - integer of the transactions index position log was created from. null when its pending log.
    """

    transactionHash:str 
    """
    DATA, 32 Bytes - hash of the transactions this log was created from. null when its pending log.
    """

    blockHash:str 
    """
    DATA, 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log.
    """

    blockNumber:str 
    """
    QUANTITY - the block number where this log was in. null when its pending. null when its pending log.
    """

    address:str 
    """
    DATA, 20 Bytes - address from which this log originated.
    """

    data:str 
    """
    DATA - contains one or more 32 Bytes non-indexed arguments of the log.
    """

    topics:List[str] 
    """
    Array of DATA - Array of 0 to 4 32 Bytes DATA of indexed log arguments. (In solidity - The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous specifier.)
    """


class Json_rpc_methods:
    """
    different methods to perform etd control
    """

    def __init__(self, url: str):
        self.url = url


    
    def protocalVersion(self, )-> str:
        """
        Returns the current etdereum protocol version
        :return version: The current etdereum protocol version
        """
        response = requests.post(self.url, data={
          "method": "eth_protocalVersion",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def blockNumber(self, )-> str:
        """
        Returns the current block number
        :return blockNumber: The current blockNumber
        """
        response = requests.post(self.url, data={
          "method": "eth_blockNumber",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def syncing(self, )-> SyncingResponse:
        """
        Returns an object with data about the sync status or false
        :return syncObject: return this ONLY when syncing
        :return syncStatus: return this ONLY when not syncing
        """
        response = requests.post(self.url, data={
          "method": "eth_syncing",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return SyncingResponse.from_dict(response.json())
        
    def coinbase(self, )-> Any:
        """
        Returns the client coinbase address
        :return coinbase: The client coinbase address
        """
        response = requests.post(self.url, data={
          "method": "eth_coinbase",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def mining(self, )-> bool:
        """
        Returns true if client is actively mining new blocks
        :return isMining: True if client is actively mining new blocks.
        """
        response = requests.post(self.url, data={
          "method": "eth_mining",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def hashrate(self, )-> Any:
        """
        Returns the number of hashes per second that the node is mining with
        :return hashrate: The number of hashes per second that the node is mining with
        """
        response = requests.post(self.url, data={
          "method": "eth_hashrate",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def gasPrice(self, )-> Any:
        """
        Returns the current price per gas in wei
        :return gasPrice: The current price per gas in wei (8049999872 Wei in the example)
        """
        response = requests.post(self.url, data={
          "method": "eth_gasPrice",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def accounts(self, )-> List[Any]:
        """
        Returns a list of addresses owned by client
        :return addressAccount: The array of accouts
        """
        response = requests.post(self.url, data={
          "method": "eth_accounts",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getBalance(self, address:str, tag:str)-> float:
        """
        Returns the balance of the account of given address
        :param address: DATA, 20 Bytes - address to check for balance
        :param tag: QUANTITY_TAG - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        :return balance: QUANTITY - integer of the current balance in wei.
        """
        response = requests.post(self.url, data={
          "method": "eth_getBalance",
          "params": [address, tag],
          "jsonrpc": "2.0",
          "id": 1
        })
        return float.from_dict(response.json())
        
    def getStorageAt(self, address:Any, position:Any, tag:str)-> Any:
        """
        Returns the value from a storage position at a given address
        :param address: DATA, 20 Bytes - address of the storage.
        :param position: The integer of the position in the storage.
        :param tag: QUANTITY_TAG - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        :return valur: The value at this storage position.
        """
        response = requests.post(self.url, data={
          "method": "eth_getStorageAt",
          "params": [address, position, tag],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getTransactionCount(self, address:Any, state:str)-> float:
        """
        Returns the number of transactions sent from an address
        :param address: The address.
        :param state: QUANTITY_TAG - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        :return number: The number of transactions send from this address.
        """
        response = requests.post(self.url, data={
          "method": "eth_getTransactionCount",
          "params": [address, state],
          "jsonrpc": "2.0",
          "id": 1
        })
        return float.from_dict(response.json())
        
    def getTransactionCountByHash(self, data:str, qUANTITY_TAG:str)-> str:
        """
        Returns the number of transactions in a block from a block matching the given block hash
        :param data: 20 Bytes - The address
        :param qUANTITY_TAG: integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        :return quantity: The integer of the number of transactions send from this address.
        """
        response = requests.post(self.url, data={
          "method": "eth_getTransactionCountByHash",
          "params": [data, qUANTITY_TAG],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getBlockTransactionCountByHash(self, data:str)-> str:
        """
        Returns the number of transactions in a block from a block matching the given block hash
        :param data: 32 Bytes - The hash of a block
        :return quantity: The integer of the number of transactions in this block.
        """
        response = requests.post(self.url, data={
          "method": "eth_getBlockTransactionCountByHash",
          "params": [data],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getBlockTransactionCountByNumber(self, qUANTITY_TAG:str)-> str:
        """
        Returns the number of transactions in a block matching the given block number
        :param qUANTITY_TAG: The integer of a block number, or the string "earliest", "latest" or "pending", see the default block parameter
        :return quantity: The integer of the number of transactions in this block.
        """
        response = requests.post(self.url, data={
          "method": "eth_getBlockTransactionCountByNumber",
          "params": [qUANTITY_TAG],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getUncleCountByBlockHash(self, data:str)-> str:
        """
        Returns the number of uncles in a block from a block matching the given block hash
        :param data: 32 Bytes - The hash of a block
        :return qUANTITY_TAG: The integer of the number of uncles in this block.
        """
        response = requests.post(self.url, data={
          "method": "eth_getUncleCountByBlockHash",
          "params": [data],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getUncleCountByBlockNumber(self, qUANTITY_TAG:str)-> str:
        """
        Returns the number of uncles in a block from a block matching the given block number
        :param qUANTITY_TAG: The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter
        :return quantity: The integer of the number of uncles in this block.
        """
        response = requests.post(self.url, data={
          "method": "eth_getUncleCountByBlockNumber",
          "params": [qUANTITY_TAG],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getCode(self, data:str, qUANTITY_TAG:str)-> str:
        """
        Returns code at a given address
        :param data: 20 Byter - The address
        :param qUANTITY_TAG: The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
        :return data: The code from the given address.
        """
        response = requests.post(self.url, data={
          "method": "eth_code",
          "params": [data, qUANTITY_TAG],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def sign(self, a:str, b:str)-> str:
        """
        The sign method calculates an etdereum specific signature with sign(keccak256("\x19etdereum Signed Message:\n" + len(message) + message)))
        
        By adding a prefix to the message makes the calculated signature recognisable as an etdereum specific signature
         This prevents misuse where a malicious DApp can sign arbitrary data (e
        g
         transaction) and use the signature to impersonate the victim
        
        Note the address to sign with must be unlocked
        :param a: 20 Bytes - The address
        :param b: N Bytes - The message to sign
        :return value: The signature
        """
        response = requests.post(self.url, data={
          "method": "eth_sign",
          "params": [a, b],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def signTransaction(self, obj:Obj)-> str:
        """
        Signs a transaction that can be submitted to the network at a later time using with eth_sendRawTransaction
        :param obj: The transaction object
        :return data: The signed transaction object.
        """
        response = requests.post(self.url, data={
          "method": "eth_signTransaction",
          "params": [obj],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def sendTranscation(self, obj:Obj)-> str:
        """
        Creates new message call transaction or a contract creation, if the data field contains code
        :param obj: The transaction object
        :return data: 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
        """
        response = requests.post(self.url, data={
          "method": "eth_sendTranscation",
          "params": [obj],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def sendRawTransaction(self, data:str)-> str:
        """
        Creates new message call transaction or a contract creation for signed transactions
        :param data: The signed transaction data.
        :return data: 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
        """
        response = requests.post(self.url, data={
          "method": "eth_sendRawTransaction",
          "params": [data],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def call(self, obj:Obj, qUANTITY_TAG:str)-> str:
        """
        Executes a new message call immediately without creating a transaction on the block chain
        :param obj: The transaction object
        :param qUANTITY_TAG: The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter.
        :return data: The return value of executed contract.
        """
        response = requests.post(self.url, data={
          "method": "eth_call",
          "params": [obj, qUANTITY_TAG],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def estimateGas(self, obj:Obj, qUANTITY_TAG:str)-> str:
        """
        Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
         The transaction will not be added to the blockchain
         Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance
        :param obj: The transaction object
        :param qUANTITY_TAG: The integer block number, or the string "latest", "earliest" or "pending", see the default block parameter.
        :return quantity: The amount of gas used.
        """
        response = requests.post(self.url, data={
          "method": "eth_estimateGas",
          "params": [obj, qUANTITY_TAG],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getBlockByHash(self, data:str, bool_field:bool)-> GetBlockByHashResponseObj:
        """
        Returns information about a block by hash
        :param data: 32 Bytes - Hash of a block.
        :param bool: If true it returns the full transaction objects, if false only the hashes of the transactions.
        :return obj: A block object, or null when no block was found
        """
        response = requests.post(self.url, data={
          "method": "eth_getBlockByHash",
          "params": [data, bool_field],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetBlockByHashResponseObj.from_dict(response.json())
        
    def getBlockByNumber(self, qUANTITY_TAG:str, bool_field:bool)-> GetBlockByNumberResponseObj:
        """
        Returns information about a block by block number
        :param qUANTITY_TAG: The integer of a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
        :param bool: If true it returns the full transaction objects, if false only the hashes of the transactions.
        :return obj: A block object, or null when no block was found
        """
        response = requests.post(self.url, data={
          "method": "eth_getBlockByNumber",
          "params": [qUANTITY_TAG, bool_field],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetBlockByNumberResponseObj.from_dict(response.json())
        
    def getTransactionByHash(self, data:str)-> GetTransactionByHashResponseObj:
        """
        Returns the information about a transaction requested by transaction hash
        :param data: 32 Bytes - hash of a transaction
        :return obj: A transaction object, or null when no transaction was found
        """
        response = requests.post(self.url, data={
          "method": "eth_getTransactionByHash",
          "params": [data],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetTransactionByHashResponseObj.from_dict(response.json())
        
    def getTransactionByHashAndIndex(self, data:str, quantity:str)-> GetTransactionByHashAndIndexResponseObj:
        """
        Returns information about a transaction by block hash and transaction index position
        :param data: 32 Bytes - hash of a block.
        :param quantity: The integer of the transaction index position.
        :return obj: See eth_getTransactionByHash
        """
        response = requests.post(self.url, data={
          "method": "eth_getTransactionByHashAndIndex",
          "params": [data, quantity],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetTransactionByHashAndIndexResponseObj.from_dict(response.json())
        
    def getTransactionByBlockNumberAndIndex(self, qUANTITY_TAG:str, quantity:str)-> GetTransactionByBlockNumberAndIndexResponseObj:
        """
        Returns information about a transaction by block number and transaction index position
        :param qUANTITY_TAG: a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
        :param quantity: The transaction index position.
        :return obj: See eth_getTransactionByHash
        """
        response = requests.post(self.url, data={
          "method": "eth_getTransactionByBlockNumberAndIndex",
          "params": [qUANTITY_TAG, quantity],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetTransactionByBlockNumberAndIndexResponseObj.from_dict(response.json())
        
    def getTransactionReceipt(self, data:str)-> GetTransactionReceiptResponseObj:
        """
        Returns the receipt of a transaction by transaction hash
         Note That the receipt is not available for pending transactions
        :param data: 32 Bytes - hash of a transaction
        :return obj: A transaction receipt object, or null when no receipt was found
        """
        response = requests.post(self.url, data={
          "method": "eth_getTransactionReceipt",
          "params": [data],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetTransactionReceiptResponseObj.from_dict(response.json())
        
    def getUncleByBlockHashAndIndex(self, data:str, quantity:str)-> GetUncleByBlockHashAndIndexResponseObj:
        """
        eturns information about a uncle of a block by hash and uncle index position
        :param data: 32 Bytes - The hash of a block.
        :param quantity: The uncle’s index position.
        :return obj: See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
        """
        response = requests.post(self.url, data={
          "method": "eth_getUncleByBlockHashAndIndex",
          "params": [data, quantity],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetUncleByBlockHashAndIndexResponseObj.from_dict(response.json())
        
    def getUncleByBlockNumberAndIndex(self, qUANTITY_TAG:str, quantity:str)-> GetUncleByBlockNumberAndIndexResponseObj:
        """
        Returns information about a uncle of a block by number and uncle index position
        :param qUANTITY_TAG: a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
        :param quantity: the uncle’s index position.
        :return obj: See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
        """
        response = requests.post(self.url, data={
          "method": "eth_getUncleByBlockNumberAndIndex",
          "params": [qUANTITY_TAG, quantity],
          "jsonrpc": "2.0",
          "id": 1
        })
        return GetUncleByBlockNumberAndIndexResponseObj.from_dict(response.json())
        
    def getCompliers(self, )-> List[str]:
        """
        Returns a list of available compilers in the client
        :return array: Array of available compilers.
        """
        response = requests.post(self.url, data={
          "method": "eth_getCompliers",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def compileSolidity(self, string:str)-> str:
        """
        Returns compiled solidity code
        :param string: The source code.
        :return data: The compiled source code.
        """
        response = requests.post(self.url, data={
          "method": "eth_compileSolidity",
          "params": [string],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def complpieLLL(self, string:str)-> str:
        """
        Returns compiled LLL code
        :param string: The source code.
        :return data: The compiled source code.
        """
        response = requests.post(self.url, data={
          "method": "eth_complpieLLL",
          "params": [string],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def complieSerpent(self, string:str)-> str:
        """
        Returns compiled serpent code
        :param string: The source code.
        :return data: The compiled source code.
        """
        response = requests.post(self.url, data={
          "method": "eth_complieSerpent",
          "params": [string],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def newFilter(self, obj:Obj)-> str:
        """
        Creates a filter object, based on filter options, to notify when the state changes (logs)
         To check if the state has changed, call eth_getFilterChanges
        
        A note on specifying topic filters Topics are order-dependent
         A transaction with a log with topics [A, B] will be matched by the following topic filters
        -[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”
        :param obj: The filter options
        :return quantity: A filter id.
        """
        response = requests.post(self.url, data={
          "method": "eth_newFilter",
          "params": [obj],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def newBlockFilter(self, )-> str:
        """
        Creates a filter in the node, to notify when a new block arrives
         To check if the state has changed, call eth_getFilterChanges
        :return quantity: A filter id.
        """
        response = requests.post(self.url, data={
          "method": "eth_newBlockFilter",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def newPendingTransactionFilter(self, )-> str:
        """
        Creates a filter in the node, to notify when new pending transactions arrive
         To check if the state has changed, call eth_getFilterChanges
        :return quantity: A filter id.
        """
        response = requests.post(self.url, data={
          "method": "eth_newPendingTransactionFilter",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def uninstallFilter(self, quantity:str)-> bool:
        """
        Uninstalls a filter with given id
         Should always be called when watch is no longer needed
         Additonally Filters timeout when they aren’t requested with eth_getFilterChanges
         for a period of time
        :param quantity: The filter id.
        :return bool: true if the filter was successfully uninstalled, otherwise false.
        """
        response = requests.post(self.url, data={
          "method": "eth_uninstallFilter",
          "params": [quantity],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getFilterChanges(self, quantity:str)-> List[Array]:
        """
        Polling method for a filter, which returns an array of logs which occurred since last poll
        :param quantity: The filter id.
        :return array: Array of log objects, or an empty array if nothing has changed since last poll. For filters created with eth_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. ["0x3454645634534..."]. For filters created with eth_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. ["0x6345343454645..."].
        """
        response = requests.post(self.url, data={
          "method": "eth_getFilterChanges",
          "params": [quantity],
          "jsonrpc": "2.0",
          "id": 1
        })
        return Array.schema().load(response.json(), many=True)
        
    def getFilterLogs(self, quantity:str)-> List[Any]:
        """
        Returns an array of all logs matching filter with given id
        :param quantity: The filter id.
        :return array: See eth_getFilterChanges.
        """
        response = requests.post(self.url, data={
          "method": "eth_getFilterLogs",
          "params": [quantity],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getLogs(self, obj:Obj)-> List[Any]:
        """
        Returns an array of all logs matching a given filter object
        :param obj: The filter options
        :return array: See eth_getFilterChanges.
        """
        response = requests.post(self.url, data={
          "method": "eth_getLogs",
          "params": [obj],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def getWork(self, )-> List[str]:
        """
        Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)
        :return array: Array with the following properties -DATA, 32 Bytes - current block header pow-hash -DATA, 32 Bytes - the seed hash used for the DAG. -DATA, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.
        """
        response = requests.post(self.url, data={
          "method": "eth_getWork",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def submitWork(self, a:str, b:str, c:str)-> bool:
        """
        Used for submitting a proof-of-work solution
        :param a: 8 Bytes - The nonce found (64 bits)
        :param b: 32 Bytes - The header’s pow-hash (256 bits)
        :param c: 32 Bytes - The mix digest (256 bits)
        :return bool: returns true if the provided solution is valid, otherwise false.
        """
        response = requests.post(self.url, data={
          "method": "eth_submitWork",
          "params": [a, b, c],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def submitHashrate(self, hashrate:str, id:str)-> bool:
        """
        Used for submitting mining hashrate
        :param hashrate: A hexadecimal string representation (32 bytes) of the hash rate
        :param id: String - A random hexadecimal(32 bytes) ID identifying the client
        :return bool: Returns `true` if submitting went through succesfully and `false` otherwise.
        """
        response = requests.post(self.url, data={
          "method": "eth_submitHashrate",
          "params": [hashrate, id],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        

