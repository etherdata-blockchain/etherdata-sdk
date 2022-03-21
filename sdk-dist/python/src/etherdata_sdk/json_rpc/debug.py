import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict


@dataclass_json
@dataclass
class Accounts:

    balance: str
    """
    The balance of the account
    """

    code: str
    """
    The code of the account
    """

    codeHash: str
    """
    The code hash of the account
    """

    nonce: float
    """
    The nonce of the account
    """

    root: str
    """
    The root of the account
    """

    storage: List[Any]
    """
    The storage of the account
    """


@dataclass_json
@dataclass
class DumpBlockResponseBlockDetails:

    accounts: List[Accounts]
    """
    The list accounts
    """

    root: str
    """
    The root of the block
    """


@dataclass_json
@dataclass
class Storage:

    storageName: str
    """
    The storage address
    """


@dataclass_json
@dataclass
class StrucrtLogs:

    depth: float
    """
    The depth of transcation
    """

    error: str
    """
    Shows error message(s) (if any)
    """

    gas: float
    """
    The gas of the transaction
    """

    gasCost: float
    """
    The gas cost
    """

    memory: List[str]
    """
    Memory list of the transaction
    """

    op: str
    """
    The op command
    """

    pc: float
    """
    The pc
    """

    stackArray: List[str]
    """
    The stack array
    """

    storage: Storage
    """
    The storage of the block
    """


@dataclass_json
@dataclass
class TraceBlockResponseBlcok:

    gas: float
    """
    The gas value
    """

    returnValue: str
    """
    The return value
    """

    strucrtLogs: List[StrucrtLogs]
    """
    The transaction logs
    """


@dataclass_json
@dataclass
class TraceTransactionResponseTransaction:

    gas: float
    """
    The gas value
    """

    returnValue: str
    """
    The return value
    """

    strucrtLogs: List[StrucrtLogs]
    """
    The transaction logs
    """


class Debug:
    """
    The debug API gives you access to several non-standard RPC methods, which will allow you to inspect, debug and set certain debugging flags during runtime
    """

    def __init__(self, url: str):
        self.url = url

    def backtrace_at(self, location_javascript_based: Any) -> None:
        """
        Sets the logging backtrace location
         When a backtrace location is set and a log message is emitted at that location, the stack of the goroutine executing the log statement will be printed to stderr
         The location is specified as <filename>:<line>
        #### Arguments

        locationJavascript_based: The logging backtrace location, which is specified as <filename>:<line>.
        """
        json_data = {
            "method": "debug_backtraceAt",
            "params": [location_javascript_based],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def block_profile(self, ) -> None:
        """
        Turns on block profiling for the given duration and writes profile data to disk
         It uses a profile rate of 1 for most accurate information
         If a different rate is desired, set the rate and write the profile manually using debug_writeBlockProfile
        """
        json_data = {
            "method": "debug_blockProfile",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def cpu_profile(self, ) -> None:
        """
        Turns on CPU profiling for the given duration and writes profile data to disk
        """
        json_data = {
            "method": "debug_cpuProfile",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def dump_block(self, block_num: float) -> DumpBlockResponseBlockDetails:
        """
        Retrieves the state that corresponds to the block number and returns a list of accounts (including storage and code)
        #### Arguments

        blockNum: The block number
        #### Returns #DumpBlockResponseBlockDetails

        blockDetails: The block number and list of accounts
        """
        json_data = {
            "method": "debug_dumpBlock",
            "params": [block_num],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return DumpBlockResponseBlockDetails.from_dict(
            response.json()["result"])

    def gc_stats(self, ) -> None:
        """
        Returns GC statistics
         See https://golang
        org/pkg/runtime/debug/#GCStats for information about the fields of the returned object
        """
        json_data = {
            "method": "debug_gcStats",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def get_block_rlp(self, ) -> None:
        """
        Retrieves and returns the RLP encoded block by number
         References -> RLP
        """
        json_data = {
            "method": "debug_getBlockRlp",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def go_trace(self, ) -> None:
        """
        Turns on Go runtime tracing for the given duration and writes trace data to disk
        """
        json_data = {
            "method": "debug_goTrace",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def mem_stats(self, ) -> None:
        """
        Returns detailed runtime memory statistics
         See https://golang
        org/pkg/runtime/#MemStats for information about the fields of the returned object
        """
        json_data = {
            "method": "debug_memStats",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def seed_hash(self, ) -> None:
        """
        Fetches and retrieves the seed hash of the block by number
        """
        json_data = {
            "method": "dubug_seedHash",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def set_head(self, ) -> None:
        """
        Sets the current head of the local chain by block number
         Note, this is a destructive action and may severely damage your chain
         Use with extreme caution
         References -> Ethash
        """
        json_data = {
            "method": "debug_setHead",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def set_block_profile_rate(self, rate: float) -> None:
        """
        Sets the rate (in samples/sec) of goroutine block profile data collection
         A non-zero rate enables block profiling, setting it to zero stops the profile
         Collected profile data can be written using debug_writeBlockProfile
        #### Arguments

        rate: The rate (in samplessec) of goroutine block profile data collection
        """
        json_data = {
            "method": "debug_setBlockProfileRate",
            "params": [rate],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def stacks(self, ) -> Any:
        """
        Returns a printed representation of the stacks of all goroutines
         Note that the web3 wrapper for this method takes care of the printing and does not return the string
        #### Returns

        printedStacks: A printed representation of the stacks of all goroutines
        """
        json_data = {
            "method": "debug_stacks",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def start_c_p_u_profile(self, ) -> None:
        """
        Turns on CPU profiling indefinitely, writing to the given file
        """
        json_data = {
            "method": "debug_startCPUProfile",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def start_go_trace(self, ) -> None:
        """
        Starts writing a Go runtime trace to the given file
        """
        json_data = {
            "method": "debug_startGoTrace",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def stop_c_p_u_profile(self, ) -> None:
        """
        Stops an ongoing CPU profile
        """
        json_data = {
            "method": "debug_stopCPUProfile",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def stop_go_trace(self, ) -> None:
        """
        Stops writing the Go runtime trace
        """
        json_data = {
            "method": "debug_stopGoTrace",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def trace_block(self, block_name: str) -> TraceBlockResponseBlcok:
        """
        The traceBlock method will return a full stack trace of all invoked opcodes of all transaction that were included in this block
         Note, the parent of this block must be present or it will fail
         References -> RLP
        #### Arguments

        blockName: The name of the traced block
        #### Returns #TraceBlockResponseBlcok

        blcok: The stack trace of transcation of the block
        """
        json_data = {
            "method": "debug_traceBlock",
            "params": [block_name],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return TraceBlockResponseBlcok.from_dict(response.json()["result"])

    def trace_block_by_number(self, block_num: str) -> Any:
        """
        Similar to debug_traceBlock,traceBlockByNumber accepts a block number and will replay the block that is already present in the database
         References -> RLP
        #### Arguments

        blockNum: A block number of a traced block
        #### Returns

        block: Replaying the block that is already present in the database
        """
        json_data = {
            "method": "debug_traceBlockByNumber",
            "params": [block_num],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def trace_block_by_hash(self, block_hash: str) -> Any:
        """
        Similar to debug_traceBlock,traceBlockByHash accepts a block hash and will replay the block that is already present in the database
         References -> RLP
        #### Arguments

        blockHash: A block hash of a traced block
        #### Returns

        block: Replaying the block that is already present in the database
        """
        json_data = {
            "method": "debug_traceBlockByHash",
            "params": [block_hash],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def trace_block_from_file(self, file: Any) -> Any:
        """
        Similar to debug_traceBlock,traceBlockFromFile accepts a file containing the RLP of the block
         References -> RLP
        #### Arguments

        file: A file containing the RLP of the block
        #### Returns

        block: Replaying the block that is already present in the database
        """
        json_data = {
            "method": "debug_traceBlockByHash",
            "params": [file],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def standard_trace_block_to_file(
            self,
            block: str,
            tx_hash: Optional[str],
            disable_memory: Optional[bool]) -> List[str]:
        """
        When JS-based tracing (see below) was first implemented, the intended usecase was to enable long-running tracers that could stream results back via a subscription channel
         This method works a bit differently
         (For full details, see PR)
        -It streams output to disk during the execution, to not blow up the memory usage on the node -It uses jsonl as output format (to allow streaming) -Uses a cross-client standardized output, so called ‘standard json' ~Uses op for string-representation of opcode, instead of op/opName for numeric/string, and other simlar small differences
         ~has refund ~Represents memory as a contiguous chunk of data, as opposed to a list of 32 byte segments like debug_traceTransaction
        This means that this method is only ‘useful’ for callers who control the node – at least sufficiently to be able to read the artefacts from the filesystem after the fact
        #### Arguments

        block: The block
        txHash: txHash
        disableMemory: disableMemory
        #### Returns

        output: output
        'The method can be used to dump a certain transaction out of a given block > debug.standardTraceBlockToFile("0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63", {txHash:"0x4049f61ffbb0747bb88dc1c85dd6686ebf225a3c10c282c45a8e0c644739f7e9", disableMemory:true}) ["tmp/block_0x0bbe9f14-14-0x4049f61f-099048234"]
        Or all txs from a block > debug.standardTraceBlockToFile("0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63", {disableMemory:true}) ["/tmp/block_0x0bbe9f14-0-0xb4502ea7-409046657", "/tmp/block_0x0bbe9f14-1-0xe839be8f-954614764",...]
        Files are created in a temp-location, with the naming standard block_<blockhash:4>-<txindex>-<txhash:4>-<random suffix>. Each opcode immediately streams to file, with no in-Getd buffering aside from whatever buffering the os normally does.
        On the server side, it also adds some more info when regenerating historical state, namely, the reexec-number if required historical state is not avaiable is encountered, so a user can experiment with increasing that setting. It also prints out the remaining block until it reaches target
        The options is as follows type StdTraceConfig struct { *vm.LogConfig Reexec *uint64 TxHash *common.Hash } '
        """
        json_data = {
            "method": "debug_standardTraceBlockToFile",
            "params": [block, tx_hash, disable_memory],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def standard_trace_bad_block_to_file(self, ) -> None:
        """
        This method is similar to debug_standardTraceBlockToFile, but can be used to obtain info about a block which has been rejected as invalid (for some reason)
        """
        json_data = {
            "method": "debug_standardTraceBadBlockToFile",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def trace_transaction(
            self,
            hash: str,
            disable_storage: Optional[bool],
            disable_memory: Optional[bool],
            disable_stack: Optional[bool],
            tracer: Optional[str],
            timeout: Optional[str]) -> TraceTransactionResponseTransaction:
        """
        OBS In most scenarios, debug
        standardTraceBlockToFile is better suited for tracing! The traceTransaction debugging method will attempt to run the transaction in the exact same manner as it was executed on the network
         It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash

        In addition to the hash of the transaction you may give it a secondary optional argument, which specifies the options for this specific call
         The possible options are
        disableStorage: BOOL
           Setting this to true will disable storage capture (default = false)
         disableMemory:  BOOL
           Setting this to true will disable memory capture (default = false)
         disableStack:   BOOL
           Setting this to true will disable stack capture (default = false)
         tracer:         STRING
         Setting this will enable JavaScript-based transaction tracing, described below
         If set, the previous four arguments will be ignored
         timeout:        STRING
         Overrides the default timeout of 5 seconds for JavaScript-based tracing calls
         Valid values are described here
        #### Arguments

        hash: The hash of the transaction
        disableStorage: Setting this to true will disable storage capture (default = false).
        disableMemory: Setting this to true will disable memory capture (default = false).
        disableStack: Setting this to true will disable stack capture (default = false).
        tracer: Setting this will enable JavaScript-based transaction tracing, described below. If set, the previous four arguments will be ignored.
        timeout: Overrides the default timeout of 5 seconds for JavaScript-based tracing calls. Valid values are described here.
        #### Returns #TraceTransactionResponseTransaction

        transaction: The stack trace of transcation of the block
        """
        json_data = {
            "method": "debug_traceTransaction",
            "params": [
                hash,
                disable_storage,
                disable_memory,
                disable_stack,
                tracer,
                timeout],
            "jsonrpc": "2.0",
            "id": 1}
        response = requests.post(self.url, json=to_dict(json_data))
        return TraceTransactionResponseTransaction.from_dict(
            response.json()["result"])

    def java_script_based_tracing(self, ) -> None:
        """
        Javascript
        """
        json_data = {
            "method": "JavaScript-based tracing",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def trace_call(
            self,
            to: str,
            from_field: Optional[str],
            gas: Optional[str],
            gas_price: Optional[float],
            value: Optional[float],
            data: Optional[str]) -> Any:
        """
        The debug_traceCall method lets you run an eth_call on top of a given block
         The block can be specified either by hash or by number
         It takes the same input object as a eth_call
         It returns the same output as debug_traceTransaction
         A tracer can be specified as a third argument, similar to debug_traceTransaction

        Object - The transaction call object
        from:     DATA, 20 Bytes - (optional) The address the transaction is sent from
         to:       DATA, 20 Bytes -            The address the transaction is directed to
         gas:      QUANTITY       - (optional) Integer of the gas provided for the transaction execution
         eth_call consumes zero gas, but this parameter may be needed by some executions
         gasPrice: QUANTITY       - (optional) Integer of the gasPrice used for each paid gas value:    QUANTITY       - (optional) Integer of the value sent with this transaction data:     DATA           - (optional) Hash of the method signature and encoded parameters
         For details see Ethereum Contract ABI in the Solidity documentation
        #### Arguments

        to: The address the transaction is directed to.
        from: The address the transaction is sent from.
        gas: Integer of the gasPrice used for each paid gas
        gasPrice: Integer of the gasPrice used for each paid gas
        value: Integer of the value sent with this transaction
        data: Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI in the Solidity documentation
        #### Returns

        transaction: Same output as debug_traceTransaction
        """
        json_data = {
            "method": "debug_traceCall",
            "params": [to, from_field, gas, gas_price, value, data],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def verbosity(self, ) -> Any:
        """
        Sets the logging verbosity ceiling
         Log messages with level up to and including the given level will be printed
         The verbosity of individual packages and source files can be raised using debug_vmodule
        #### Returns

        message: Log messages with level up to and including the given level will be printed.
        """
        json_data = {
            "method": "debug_verbosity",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def vmodule(self, message_restrictions: str) -> str:
        """
        Sets the logging verbosity pattern
        #### Arguments

        messageRestrictions: If you want to see messages from a particular Go package (directory) and all subdirectories, use:    "etd*=6" If you want to restrict messages to a particular package (e.g. p2p) but exclude subdirectories, use: "p2p=6" If you want to see log messages from a particular source file, use:                                  "server.go=6" You can compose these basic patterns. If you want to see all output from peer.go in a package below etd (etd/peer.go, etd/downloader/peer.go) as well as output from package p2p at level < = 5, use:    "etd peer.go=6,p2p=5"
        #### Returns

        message:
        """
        json_data = {
            "method": "debug_vmodule",
            "params": [message_restrictions],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def write_block_profile(self, ) -> None:
        """
        Writes a goroutine blocking profile to the given file
        """
        json_data = {
            "method": "debug_writeBlockProfile",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]

    def write_mem_profile(self, ) -> None:
        """
        Writes an allocation profile to the given file
         Note that the profiling rate cannot be set through the API, it must be set on the command line using the --pprof
        memprofilerate flag
        """
        json_data = {
            "method": "debug_writeMenProfile",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        return response.json()["result"]
