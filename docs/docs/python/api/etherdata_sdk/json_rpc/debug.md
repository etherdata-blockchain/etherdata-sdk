---
sidebar_label: debug
title: etherdata_sdk.json_rpc.debug
---

## Accounts Objects

```python
@dataclass_json

@dataclass
class Accounts()
```

#### balance

The balance of the account

#### code

The code of the account

#### codeHash

The code hash of the account

#### nonce

The nonce of the account

#### root

The root of the account

#### storage

The storage of the account

## DumpBlockResponseBlockDetails Objects

```python
@dataclass_json

@dataclass
class DumpBlockResponseBlockDetails()
```

#### accounts

The list accounts

#### root

The root of the block

## Storage Objects

```python
@dataclass_json

@dataclass
class Storage()
```

#### storageName

The storage address

## StrucrtLogs Objects

```python
@dataclass_json

@dataclass
class StrucrtLogs()
```

#### depth

The depth of transcation

#### error

Shows error message(s) (if any)

#### gas

The gas of the transaction

#### gasCost

The gas cost

#### memory

Memory list of the transaction

#### op

The op command

#### pc

The pc

#### stackArray

The stack array

#### storage

The storage of the block

## TraceBlockResponseBlcok Objects

```python
@dataclass_json

@dataclass
class TraceBlockResponseBlcok()
```

#### gas

The gas value

#### returnValue

The return value

#### strucrtLogs

The transaction logs

## TraceTransactionResponseTransaction Objects

```python
@dataclass_json

@dataclass
class TraceTransactionResponseTransaction()
```

#### gas

The gas value

#### returnValue

The return value

#### strucrtLogs

The transaction logs

## Debug Objects

```python
class Debug()
```

The debug API gives you access to several non-standard RPC methods, which will allow you to inspect, debug and set certain debugging flags during runtime

#### backtrace\_at

```python
def backtrace_at(location_javascript_based: any) -> None
```

Sets the logging backtrace location
 When a backtrace location is set and a log message is emitted at that location, the stack of the goroutine executing the log statement will be printed to stderr
 The location is specified as &lt;filename&gt;:&lt;line&gt;
#### Arguments

locationJavascript_based: The logging backtrace location, which is specified as &lt;filename&gt;:&lt;line&gt;.

#### block\_profile

```python
def block_profile() -> None
```

Turns on block profiling for the given duration and writes profile data to disk
 It uses a profile rate of 1 for most accurate information
 If a different rate is desired, set the rate and write the profile manually using debug_writeBlockProfile

#### cpu\_profile

```python
def cpu_profile() -> None
```

Turns on CPU profiling for the given duration and writes profile data to disk

#### dump\_block

```python
def dump_block(block_num: float) -> DumpBlockResponseBlockDetails
```

Retrieves the state that corresponds to the block number and returns a list of accounts (including storage and code)
#### Arguments

blockNum: The block number
#### Returns [`DumpBlockResponseBlockDetails`](#dumpblockresponseblockdetails-objects)

blockDetails: The block number and list of accounts

#### gc\_stats

```python
def gc_stats() -> None
```

Returns GC statistics
 See https://golang
org/pkg/runtime/debug/`GCStats` for information about the fields of the returned object

#### get\_block\_rlp

```python
def get_block_rlp() -> None
```

Retrieves and returns the RLP encoded block by number
 References -&gt; RLP

#### go\_trace

```python
def go_trace() -> None
```

Turns on Go runtime tracing for the given duration and writes trace data to disk

#### mem\_stats

```python
def mem_stats() -> None
```

Returns detailed runtime memory statistics
 See https://golang
org/pkg/runtime/`MemStats` for information about the fields of the returned object

#### seed\_hash

```python
def seed_hash() -> None
```

Fetches and retrieves the seed hash of the block by number

#### set\_head

```python
def set_head() -> None
```

Sets the current head of the local chain by block number
 Note, this is a destructive action and may severely damage your chain
 Use with extreme caution
 References -&gt; Ethash

#### set\_block\_profile\_rate

```python
def set_block_profile_rate(rate: float) -> None
```

Sets the rate (in samples/sec) of goroutine block profile data collection
 A non-zero rate enables block profiling, setting it to zero stops the profile
 Collected profile data can be written using debug_writeBlockProfile
#### Arguments

rate: The rate (in samplessec) of goroutine block profile data collection

#### stacks

```python
def stacks() -> Any
```

Returns a printed representation of the stacks of all goroutines
 Note that the web3 wrapper for this method takes care of the printing and does not return the string
#### Returns

printedStacks: A printed representation of the stacks of all goroutines

#### start\_c\_p\_u\_profile

```python
def start_c_p_u_profile() -> None
```

Turns on CPU profiling indefinitely, writing to the given file

#### start\_go\_trace

```python
def start_go_trace() -> None
```

Starts writing a Go runtime trace to the given file

#### stop\_c\_p\_u\_profile

```python
def stop_c_p_u_profile() -> None
```

Stops an ongoing CPU profile

#### stop\_go\_trace

```python
def stop_go_trace() -> None
```

Stops writing the Go runtime trace

#### trace\_block

```python
def trace_block(block_name: str) -> TraceBlockResponseBlcok
```

The traceBlock method will return a full stack trace of all invoked opcodes of all transaction that were included in this block
 Note, the parent of this block must be present or it will fail
 References -&gt; RLP
#### Arguments

blockName: The name of the traced block
#### Returns [`TraceBlockResponseBlcok`](#traceblockresponseblcok-objects)

blcok: The stack trace of transcation of the block

#### trace\_block\_by\_number

```python
def trace_block_by_number(block_num: str) -> Any
```

Similar to debug_traceBlock,traceBlockByNumber accepts a block number and will replay the block that is already present in the database
 References -&gt; RLP
#### Arguments

blockNum: A block number of a traced block
#### Returns

block: Replaying the block that is already present in the database

#### trace\_block\_by\_hash

```python
def trace_block_by_hash(block_hash: str) -> Any
```

Similar to debug_traceBlock,traceBlockByHash accepts a block hash and will replay the block that is already present in the database
 References -&gt; RLP
#### Arguments

blockHash: A block hash of a traced block
#### Returns

block: Replaying the block that is already present in the database

#### trace\_block\_from\_file

```python
def trace_block_from_file(file: any) -> Any
```

Similar to debug_traceBlock,traceBlockFromFile accepts a file containing the RLP of the block
 References -&gt; RLP
#### Arguments

file: A file containing the RLP of the block
#### Returns

block: Replaying the block that is already present in the database

#### standard\_trace\_block\_to\_file

```python
def standard_trace_block_to_file(block: str, tx_hash: optional[str],
                                 disable_memory: optional[bool]) -> List[str]
```

When JS-based tracing (see below) was first implemented, the intended usecase was to enable long-running tracers that could stream results back via a subscription channel
 This method works a bit differently
 (For full details, see PR)
-It streams output to disk during the execution, to not blow up the memory usage on the node -It uses jsonl as output format (to allow streaming) -Uses a cross-client standardized output, so called ‘standard json&#x27; ~Uses op for string-representation of opcode, instead of op/opName for numeric/string, and other simlar small differences
 ~has refund ~Represents memory as a contiguous chunk of data, as opposed to a list of 32 byte segments like debug_traceTransaction
This means that this method is only ‘useful’ for callers who control the node – at least sufficiently to be able to read the artefacts from the filesystem after the fact
#### Arguments

block: The block
txHash: txHash
disableMemory: disableMemory
#### Returns

output: output
&#x27;The method can be used to dump a certain transaction out of a given block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {txHash:&quot;0x4049f61ffbb0747bb88dc1c85dd6686ebf225a3c10c282c45a8e0c644739f7e9&quot;, disableMemory:true}) [&quot;tmp/block_0x0bbe9f14-14-0x4049f61f-099048234&quot;]
Or all txs from a block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {disableMemory:true}) [&quot;/tmp/block_0x0bbe9f14-0-0xb4502ea7-409046657&quot;, &quot;/tmp/block_0x0bbe9f14-1-0xe839be8f-954614764&quot;,...]
Files are created in a temp-location, with the naming standard block_&lt;blockhash:4&gt;-&lt;txindex&gt;-&lt;txhash:4&gt;-&lt;random suffix&gt;. Each opcode immediately streams to file, with no in-Getd buffering aside from whatever buffering the os normally does.
On the server side, it also adds some more info when regenerating historical state, namely, the reexec-number if required historical state is not avaiable is encountered, so a user can experiment with increasing that setting. It also prints out the remaining block until it reaches target
The options is as follows type StdTraceConfig struct { *vm.LogConfig Reexec *uint64 TxHash *common.Hash } &#x27;

#### standard\_trace\_bad\_block\_to\_file

```python
def standard_trace_bad_block_to_file() -> None
```

This method is similar to debug_standardTraceBlockToFile, but can be used to obtain info about a block which has been rejected as invalid (for some reason)

#### trace\_transaction

```python
def trace_transaction(
        hash: str, disable_storage: optional[bool],
        disable_memory: optional[bool], disable_stack: optional[bool],
        tracer: optional[str],
        timeout: optional[str]) -> TraceTransactionResponseTransaction
```

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
#### Returns [`TraceTransactionResponseTransaction`](#tracetransactionresponsetransaction-objects)

transaction: The stack trace of transcation of the block

#### java\_script\_based\_tracing

```python
def java_script_based_tracing() -> None
```

Javascript

#### trace\_call

```python
def trace_call(to: str, from_field: optional[str], gas: optional[str],
               gas_price: optional[float], value: optional[float],
               data: optional[str]) -> Any
```

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

#### verbosity

```python
def verbosity() -> Any
```

Sets the logging verbosity ceiling
 Log messages with level up to and including the given level will be printed
 The verbosity of individual packages and source files can be raised using debug_vmodule
#### Returns

message: Log messages with level up to and including the given level will be printed.

#### vmodule

```python
def vmodule(message_restrictions: str) -> str
```

Sets the logging verbosity pattern
#### Arguments

messageRestrictions: If you want to see messages from a particular Go package (directory) and all subdirectories, use:    &quot;etd*=6&quot; If you want to restrict messages to a particular package (e.g. p2p) but exclude subdirectories, use: &quot;p2p=6&quot; If you want to see log messages from a particular source file, use:                                  &quot;server.go=6&quot; You can compose these basic patterns. If you want to see all output from peer.go in a package below etd (etd/peer.go, etd/downloader/peer.go) as well as output from package p2p at level &lt; = 5, use:    &quot;etd peer.go=6,p2p=5&quot;
#### Returns

message:

#### write\_block\_profile

```python
def write_block_profile() -> None
```

Writes a goroutine blocking profile to the given file

#### write\_mem\_profile

```python
def write_mem_profile() -> None
```

Writes an allocation profile to the given file
 Note that the profiling rate cannot be set through the API, it must be set on the command line using the --pprof
memprofilerate flag

