# Class: Debug

The debug API gives you access to several non-standard RPC methods, which will allow you to inspect, debug and set certain debugging flags during runtime

## Constructors

### constructor

• **new Debug**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[debug.ts:52](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L52)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[debug.ts:48](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L48)

___

### port

• `Optional` **port**: `number`

#### Defined in

[debug.ts:49](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L49)

___

### url

• **url**: `string`

#### Defined in

[debug.ts:50](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L50)

## Methods

### JavaScriptBasedTracing

▸ **JavaScriptBasedTracing**(): `Promise`<`void`\>

Javascript

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:471](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L471)

___

### backtraceAt

▸ **backtraceAt**(`locationJavascript_based`): `Promise`<`void`\>

Sets the logging backtrace location
 When a backtrace location is set and a log message is emitted at that location, the stack of the goroutine executing the log statement will be printed to stderr
 The location is specified as &lt;filename&gt;:&lt;line&gt;

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locationJavascript_based` | `any` | The logging backtrace location, which is specified as &lt;filename&gt;:&lt;line&gt;. |

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:63](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L63)

___

### blockProfile

▸ **blockProfile**(): `Promise`<`void`\>

Turns on block profiling for the given duration and writes profile data to disk
 It uses a profile rate of 1 for most accurate information
 If a different rate is desired, set the rate and write the profile manually using debug_writeBlockProfile

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:79](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L79)

___

### cpuProfile

▸ **cpuProfile**(): `Promise`<`void`\>

Turns on CPU profiling for the given duration and writes profile data to disk

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:93](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L93)

___

### dumpBlock

▸ **dumpBlock**(`blockNum`): `Promise`<`DumpBlockResponseBlockDetails`\>

Retrieves the state that corresponds to the block number and returns a list of accounts (including storage and code)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockNum` | `number` | The block number |

#### Returns

`Promise`<`DumpBlockResponseBlockDetails`\>

blockDetails The block number and list of accounts

#### Defined in

[debug.ts:109](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L109)

___

### gcStats

▸ **gcStats**(): `Promise`<`void`\>

Returns GC statistics
 See https://golang
org/pkg/runtime/debug/#GCStats for information about the fields of the returned object

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:125](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L125)

___

### getBlockRlp

▸ **getBlockRlp**(): `Promise`<`void`\>

Retrieves and returns the RLP encoded block by number
 References -&gt; RLP

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:140](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L140)

___

### goTrace

▸ **goTrace**(): `Promise`<`void`\>

Turns on Go runtime tracing for the given duration and writes trace data to disk

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:154](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L154)

___

### memStats

▸ **memStats**(): `Promise`<`void`\>

Returns detailed runtime memory statistics
 See https://golang
org/pkg/runtime/#MemStats for information about the fields of the returned object

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:170](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L170)

___

### seedHash

▸ **seedHash**(): `Promise`<`void`\>

Fetches and retrieves the seed hash of the block by number

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:184](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L184)

___

### setBlockProfileRate

▸ **setBlockProfileRate**(`rate`): `Promise`<`void`\>

Sets the rate (in samples/sec) of goroutine block profile data collection
 A non-zero rate enables block profiling, setting it to zero stops the profile
 Collected profile data can be written using debug_writeBlockProfile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rate` | `number` | The rate (in samplessec) of goroutine block profile data collection |

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:218](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L218)

___

### setHead

▸ **setHead**(): `Promise`<`void`\>

Sets the current head of the local chain by block number
 Note, this is a destructive action and may severely damage your chain
 Use with extreme caution
 References -&gt; Ethash

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:201](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L201)

___

### stacks

▸ **stacks**(): `Promise`<`any`\>

Returns a printed representation of the stacks of all goroutines
 Note that the web3 wrapper for this method takes care of the printing and does not return the string

#### Returns

`Promise`<`any`\>

printedStacks A printed representation of the stacks of all goroutines

#### Defined in

[debug.ts:234](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L234)

___

### standardTraceBadBlockToFile

▸ **standardTraceBadBlockToFile**(): `Promise`<`void`\>

This method is similar to debug_standardTraceBlockToFile, but can be used to obtain info about a block which has been rejected as invalid (for some reason)

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:405](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L405)

___

### standardTraceBlockToFile

▸ **standardTraceBlockToFile**(`block`, `txHash`, `disableMemory`): `Promise`<`string`[]\>

When JS-based tracing (see below) was first implemented, the intended usecase was to enable long-running tracers that could stream results back via a subscription channel
 This method works a bit differently
 (For full details, see PR)
-It streams output to disk during the execution, to not blow up the memory usage on the node -It uses jsonl as output format (to allow streaming) -Uses a cross-client standardized output, so called ‘standard json&#39; ~Uses op for string-representation of opcode, instead of op/opName for numeric/string, and other simlar small differences
 ~has refund ~Represents memory as a contiguous chunk of data, as opposed to a list of 32 byte segments like debug_traceTransaction
This means that this method is only ‘useful’ for callers who control the node – at least sufficiently to be able to read the artefacts from the filesystem after the fact

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `string` | The block |
| `txHash` | `undefined` \| `string` | txHash |
| `disableMemory` | `undefined` \| `boolean` | disableMemory |

#### Returns

`Promise`<`string`[]\>

output output
&#39;The method can be used to dump a certain transaction out of a given block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {txHash:&quot;0x4049f61ffbb0747bb88dc1c85dd6686ebf225a3c10c282c45a8e0c644739f7e9&quot;, disableMemory:true}) [&quot;tmp/block_0x0bbe9f14-14-0x4049f61f-099048234&quot;]
Or all txs from a block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {disableMemory:true}) [&quot;/tmp/block_0x0bbe9f14-0-0xb4502ea7-409046657&quot;, &quot;/tmp/block_0x0bbe9f14-1-0xe839be8f-954614764&quot;,...]
Files are created in a temp-location, with the naming standard block_&lt;blockhash:4&gt;-&lt;txindex&gt;-&lt;txhash:4&gt;-&lt;random suffix&gt;. Each opcode immediately streams to file, with no in-Getd buffering aside from whatever buffering the os normally does.
On the server side, it also adds some more info when regenerating historical state, namely, the reexec-number if required historical state is not avaiable is encountered, so a user can experiment with increasing that setting. It also prints out the remaining block until it reaches target
The options is as follows type StdTraceConfig struct { *vm.LogConfig Reexec *uint64 TxHash *common.Hash } &#39;

#### Defined in

[debug.ts:387](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L387)

___

### startCPUProfile

▸ **startCPUProfile**(): `Promise`<`void`\>

Turns on CPU profiling indefinitely, writing to the given file

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:248](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L248)

___

### startGoTrace

▸ **startGoTrace**(): `Promise`<`void`\>

Starts writing a Go runtime trace to the given file

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:262](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L262)

___

### stopCPUProfile

▸ **stopCPUProfile**(): `Promise`<`void`\>

Stops an ongoing CPU profile

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:276](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L276)

___

### stopGoTrace

▸ **stopGoTrace**(): `Promise`<`void`\>

Stops writing the Go runtime trace

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:290](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L290)

___

### traceBlock

▸ **traceBlock**(`blockName`): `Promise`<`TraceBlockResponseBlcok`\>

The traceBlock method will return a full stack trace of all invoked opcodes of all transaction that were included in this block
 Note, the parent of this block must be present or it will fail
 References -&gt; RLP

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockName` | `string` | The name of the traced block |

#### Returns

`Promise`<`TraceBlockResponseBlcok`\>

blcok The stack trace of transcation of the block

#### Defined in

[debug.ts:308](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L308)

___

### traceBlockByHash

▸ **traceBlockByHash**(`blockHash`): `Promise`<`any`\>

Similar to debug_traceBlock,traceBlockByHash accepts a block hash and will replay the block that is already present in the database
 References -&gt; RLP

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockHash` | `string` | A block hash of a traced block |

#### Returns

`Promise`<`any`\>

block Replaying the block that is already present in the database

#### Defined in

[debug.ts:342](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L342)

___

### traceBlockByNumber

▸ **traceBlockByNumber**(`blockNum`): `Promise`<`any`\>

Similar to debug_traceBlock,traceBlockByNumber accepts a block number and will replay the block that is already present in the database
 References -&gt; RLP

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockNum` | `string` | A block number of a traced block |

#### Returns

`Promise`<`any`\>

block Replaying the block that is already present in the database

#### Defined in

[debug.ts:325](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L325)

___

### traceBlockFromFile

▸ **traceBlockFromFile**(`file`): `Promise`<`any`\>

Similar to debug_traceBlock,traceBlockFromFile accepts a file containing the RLP of the block
 References -&gt; RLP

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | A file containing the RLP of the block |

#### Returns

`Promise`<`any`\>

block Replaying the block that is already present in the database

#### Defined in

[debug.ts:359](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L359)

___

### traceCall

▸ **traceCall**(`to`, `from`, `gas`, `gasPrice`, `value`, `data`): `Promise`<`any`\>

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `string` | The address the transaction is directed to. |
| `from` | `undefined` \| `string` | The address the transaction is sent from. |
| `gas` | `undefined` \| `string` | Integer of the gasPrice used for each paid gas |
| `gasPrice` | `undefined` \| `number` | Integer of the gasPrice used for each paid gas |
| `value` | `undefined` \| `number` | Integer of the value sent with this transaction |
| `data` | `undefined` \| `string` | Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI in the Solidity documentation |

#### Returns

`Promise`<`any`\>

transaction Same output as debug_traceTransaction

#### Defined in

[debug.ts:504](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L504)

___

### traceTransaction

▸ **traceTransaction**(`hash`, `disableStorage`, `disableMemory`, `disableStack`, `tracer`, `timeout`): `Promise`<`TraceTransactionResponseTransaction`\>

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The hash of the transaction |
| `disableStorage` | `undefined` \| `boolean` | Setting this to true will disable storage capture (default = false). |
| `disableMemory` | `undefined` \| `boolean` | Setting this to true will disable memory capture (default = false). |
| `disableStack` | `undefined` \| `boolean` | Setting this to true will disable stack capture (default = false). |
| `tracer` | `undefined` \| `string` | Setting this will enable JavaScript-based transaction tracing, described below. If set, the previous four arguments will be ignored. |
| `timeout` | `undefined` \| `string` | Overrides the default timeout of 5 seconds for JavaScript-based tracing calls. Valid values are described here. |

#### Returns

`Promise`<`TraceTransactionResponseTransaction`\>

transaction The stack trace of transcation of the block

#### Defined in

[debug.ts:443](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L443)

___

### verbosity

▸ **verbosity**(): `Promise`<`any`\>

Sets the logging verbosity ceiling
 Log messages with level up to and including the given level will be printed
 The verbosity of individual packages and source files can be raised using debug_vmodule

#### Returns

`Promise`<`any`\>

message Log messages with level up to and including the given level will be printed.

#### Defined in

[debug.ts:528](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L528)

___

### vmodule

▸ **vmodule**(`messageRestrictions`): `Promise`<`string`\>

Sets the logging verbosity pattern

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageRestrictions` | `string` | If you want to see messages from a particular Go package (directory) and all subdirectories, use:    &quot;etd*=6&quot; If you want to restrict messages to a particular package (e.g. p2p) but exclude subdirectories, use: &quot;p2p=6&quot; If you want to see log messages from a particular source file, use:                                  &quot;server.go=6&quot; You can compose these basic patterns. If you want to see all output from peer.go in a package below etd (etd/peer.go, etd/downloader/peer.go) as well as output from package p2p at level &lt; = 5, use:    &quot;etd peer.go=6,p2p=5&quot; |

#### Returns

`Promise`<`string`\>

message

#### Defined in

[debug.ts:544](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L544)

___

### writeBlockProfile

▸ **writeBlockProfile**(): `Promise`<`void`\>

Writes a goroutine blocking profile to the given file

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:558](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L558)

___

### writeMemProfile

▸ **writeMemProfile**(): `Promise`<`void`\>

Writes an allocation profile to the given file
 Note that the profiling rate cannot be set through the API, it must be set on the command line using the --pprof
memprofilerate flag

#### Returns

`Promise`<`void`\>

#### Defined in

[debug.ts:574](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/debug.ts#L574)
