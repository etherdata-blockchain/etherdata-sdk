import com.etd.JsonRpcRequest
import com.etd.JsonRpcResponse
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * The debug API gives you access to several non-standard RPC methods, which will allow you to inspect, debug and set certain debugging flags during runtime
 */
class Debug(val url: String) {
    data class Accounts(
        val balance: String,
        val code: String,
        val codeHash: String,
        val nonce: Long,
        val root: String,
        val storage: List<Any>
    )

    data class DumpBlockResponseBlockDetails(val accounts: List<Accounts>, val root: String)

    data class Storage(val storageName: String)

    data class StrucrtLogs(
        val depth: Long,
        val error: String,
        val gas: Long,
        val gasCost: Long,
        val memory: List<String>,
        val op: String,
        val pc: Long,
        val stackArray: List<String>,
        val storage: Storage
    )

    data class TraceBlockResponseBlcok(val gas: Long, val returnValue: String, val strucrtLogs: List<StrucrtLogs>)

    data class TraceTransactionResponseTransaction(
        val gas: Long,
        val returnValue: String,
        val strucrtLogs: List<StrucrtLogs>
    )


    private val client = HttpClient {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
    }

    /**
     * Sets the logging backtrace location
     *  When a backtrace location is set and a log message is emitted at that location, the stack of the goroutine executing the log statement will be printed to stderr
     *  The location is specified as &lt;filename&gt;:&lt;line&gt;
     * @param locationJavascript_based The logging backtrace location, which is specified as &lt;filename&gt;:&lt;line&gt;.
     */
    suspend fun backtraceAt(locationJavascript_based: Any): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(
                method = "debug_backtraceAt",
                params = listOf(locationJavascript_based),
                jsonrpc = "2.0",
                id = 1
            )
        }
        return response.result

    }

    /**
     * Turns on block profiling for the given duration and writes profile data to disk
     *  It uses a profile rate of 1 for most accurate information
     *  If a different rate is desired, set the rate and write the profile manually using debug_writeBlockProfile
     */
    suspend fun blockProfile(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_blockProfile", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Turns on CPU profiling for the given duration and writes profile data to disk
     */
    suspend fun cpuProfile(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_cpuProfile", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Retrieves the state that corresponds to the block number and returns a list of accounts (including storage and code)
     * @param blockNum The block number
     * @return blockDetails The block number and list of accounts
     */
    suspend fun dumpBlock(blockNum: Long): DumpBlockResponseBlockDetails {

        val response: JsonRpcResponse<DumpBlockResponseBlockDetails> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_dumpBlock", params = listOf(blockNum), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Returns GC statistics
     *  See https://golang
     * org/pkg/runtime/debug/#GCStats for information about the fields of the returned object
     */
    suspend fun gcStats(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_gcStats", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Retrieves and returns the RLP encoded block by number
     *  References -&gt; RLP
     */
    suspend fun getBlockRlp(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_getBlockRlp", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Turns on Go runtime tracing for the given duration and writes trace data to disk
     */
    suspend fun goTrace(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_goTrace", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Returns detailed runtime memory statistics
     *  See https://golang
     * org/pkg/runtime/#MemStats for information about the fields of the returned object
     */
    suspend fun memStats(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_memStats", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Fetches and retrieves the seed hash of the block by number
     */
    suspend fun seedHash(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "dubug_seedHash", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Sets the current head of the local chain by block number
     *  Note, this is a destructive action and may severely damage your chain
     *  Use with extreme caution
     *  References -&gt; Ethash
     */
    suspend fun setHead(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_setHead", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Sets the rate (in samples/sec) of goroutine block profile data collection
     *  A non-zero rate enables block profiling, setting it to zero stops the profile
     *  Collected profile data can be written using debug_writeBlockProfile
     * @param rate The rate (in samplessec) of goroutine block profile data collection
     */
    suspend fun setBlockProfileRate(rate: Long): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_setBlockProfileRate", params = listOf(rate), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Returns a printed representation of the stacks of all goroutines
     *  Note that the web3 wrapper for this method takes care of the printing and does not return the string
     * @return printedStacks A printed representation of the stacks of all goroutines
     */
    suspend fun stacks(): Any {

        val response: JsonRpcResponse<Any> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_stacks", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Turns on CPU profiling indefinitely, writing to the given file
     */
    suspend fun startCPUProfile(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_startCPUProfile", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Starts writing a Go runtime trace to the given file
     */
    suspend fun startGoTrace(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_startGoTrace", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Stops an ongoing CPU profile
     */
    suspend fun stopCPUProfile(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_stopCPUProfile", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Stops writing the Go runtime trace
     */
    suspend fun stopGoTrace(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_stopGoTrace", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The traceBlock method will return a full stack trace of all invoked opcodes of all transaction that were included in this block
     *  Note, the parent of this block must be present or it will fail
     *  References -&gt; RLP
     * @param blockName The name of the traced block
     * @return blcok The stack trace of transcation of the block
     */
    suspend fun traceBlock(blockName: String): TraceBlockResponseBlcok {

        val response: JsonRpcResponse<TraceBlockResponseBlcok> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_traceBlock", params = listOf(blockName), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Similar to debug_traceBlock,traceBlockByNumber accepts a block number and will replay the block that is already present in the database
     *  References -&gt; RLP
     * @param blockNum A block number of a traced block
     * @return block Replaying the block that is already present in the database
     */
    suspend fun traceBlockByNumber(blockNum: String): Any {

        val response: JsonRpcResponse<Any> = client.post(url) {
            contentType(ContentType.Application.Json)
            body =
                JsonRpcRequest(method = "debug_traceBlockByNumber", params = listOf(blockNum), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Similar to debug_traceBlock,traceBlockByHash accepts a block hash and will replay the block that is already present in the database
     *  References -&gt; RLP
     * @param blockHash A block hash of a traced block
     * @return block Replaying the block that is already present in the database
     */
    suspend fun traceBlockByHash(blockHash: String): Any {

        val response: JsonRpcResponse<Any> = client.post(url) {
            contentType(ContentType.Application.Json)
            body =
                JsonRpcRequest(method = "debug_traceBlockByHash", params = listOf(blockHash), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Similar to debug_traceBlock,traceBlockFromFile accepts a file containing the RLP of the block
     *  References -&gt; RLP
     * @param file A file containing the RLP of the block
     * @return block Replaying the block that is already present in the database
     */
    suspend fun traceBlockFromFile(file: Any): Any {

        val response: JsonRpcResponse<Any> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_traceBlockByHash", params = listOf(file), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * When JS-based tracing (see below) was first implemented, the intended usecase was to enable long-running tracers that could stream results back via a subscription channel
     *  This method works a bit differently
     *  (For full details, see PR)
    -It streams output to disk during the execution, to not blow up the memory usage on the node -It uses jsonl as output format (to allow streaming) -Uses a cross-client standardized output, so called ‘standard json&#39; ~Uses op for string-representation of opcode, instead of op/opName for numeric/string, and other simlar small differences
     *  ~has refund ~Represents memory as a contiguous chunk of data, as opposed to a list of 32 byte segments like debug_traceTransaction
    This means that this method is only ‘useful’ for callers who control the node – at least sufficiently to be able to read the artefacts from the filesystem after the fact
     * @param block The block
     * @param txHash txHash
     * @param disableMemory disableMemory
     * @return output output
    &#39;The method can be used to dump a certain transaction out of a given block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {txHash:&quot;0x4049f61ffbb0747bb88dc1c85dd6686ebf225a3c10c282c45a8e0c644739f7e9&quot;, disableMemory:true}) [&quot;tmp/block_0x0bbe9f14-14-0x4049f61f-099048234&quot;]
    Or all txs from a block &gt; debug.standardTraceBlockToFile(&quot;0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63&quot;, {disableMemory:true}) [&quot;/tmp/block_0x0bbe9f14-0-0xb4502ea7-409046657&quot;, &quot;/tmp/block_0x0bbe9f14-1-0xe839be8f-954614764&quot;,...]
    Files are created in a temp-location, with the naming standard block_&lt;blockhash:4&gt;-&lt;txindex&gt;-&lt;txhash:4&gt;-&lt;random suffix&gt;. Each opcode immediately streams to file, with no in-Getd buffering aside from whatever buffering the os normally does.
    On the server side, it also adds some more info when regenerating historical state, namely, the reexec-number if required historical state is not avaiable is encountered, so a user can experiment with increasing that setting. It also prints out the remaining block until it reaches target
    The options is as follows type StdTraceConfig struct { *vm.LogConfig Reexec *uint64 TxHash *common.Hash } &#39;
     */
    suspend fun standardTraceBlockToFile(block: String, txHash: String, disableMemory: Boolean): List<String> {

        val response: JsonRpcResponse<List<String>> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(
                method = "debug_standardTraceBlockToFile",
                params = listOf(block, txHash, disableMemory),
                jsonrpc = "2.0",
                id = 1
            )
        }
        return response.result

    }

    /**
     * This method is similar to debug_standardTraceBlockToFile, but can be used to obtain info about a block which has been rejected as invalid (for some reason)
     */
    suspend fun standardTraceBadBlockToFile(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body =
                JsonRpcRequest(method = "debug_standardTraceBadBlockToFile", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * OBS In most scenarios, debug
     * standardTraceBlockToFile is better suited for tracing! The traceTransaction debugging method will attempt to run the transaction in the exact same manner as it was executed on the network
     *  It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash
     *
    In addition to the hash of the transaction you may give it a secondary optional argument, which specifies the options for this specific call
     *  The possible options are
    disableStorage: BOOL
     *    Setting this to true will disable storage capture (default = false)
     *  disableMemory:  BOOL
     *    Setting this to true will disable memory capture (default = false)
     *  disableStack:   BOOL
     *    Setting this to true will disable stack capture (default = false)
     *  tracer:         STRING
     *  Setting this will enable JavaScript-based transaction tracing, described below
     *  If set, the previous four arguments will be ignored
     *  timeout:        STRING
     *  Overrides the default timeout of 5 seconds for JavaScript-based tracing calls
     *  Valid values are described here
     * @param hash The hash of the transaction
     * @param disableStorage Setting this to true will disable storage capture (default = false).
     * @param disableMemory Setting this to true will disable memory capture (default = false).
     * @param disableStack Setting this to true will disable stack capture (default = false).
     * @param tracer Setting this will enable JavaScript-based transaction tracing, described below. If set, the previous four arguments will be ignored.
     * @param timeout Overrides the default timeout of 5 seconds for JavaScript-based tracing calls. Valid values are described here.
     * @return transaction The stack trace of transcation of the block
     */
    suspend fun traceTransaction(
        hash: String,
        disableStorage: Boolean,
        disableMemory: Boolean,
        disableStack: Boolean,
        tracer: String,
        timeout: String
    ): TraceTransactionResponseTransaction {

        val response: JsonRpcResponse<TraceTransactionResponseTransaction> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(
                method = "debug_traceTransaction",
                params = listOf(hash, disableStorage, disableMemory, disableStack, tracer, timeout),
                jsonrpc = "2.0",
                id = 1
            )
        }
        return response.result

    }

    /**
     * Javascript
     */
    suspend fun JavaScriptBasedTracing(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "JavaScript-based tracing", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The debug_traceCall method lets you run an eth_call on top of a given block
     *  The block can be specified either by hash or by number
     *  It takes the same input object as a eth_call
     *  It returns the same output as debug_traceTransaction
     *  A tracer can be specified as a third argument, similar to debug_traceTransaction
     *
    Object - The transaction call object
    from:     DATA, 20 Bytes - (optional) The address the transaction is sent from
     *  to:       DATA, 20 Bytes -            The address the transaction is directed to
     *  gas:      QUANTITY       - (optional) Integer of the gas provided for the transaction execution
     *  eth_call consumes zero gas, but this parameter may be needed by some executions
     *  gasPrice: QUANTITY       - (optional) Integer of the gasPrice used for each paid gas value:    QUANTITY       - (optional) Integer of the value sent with this transaction data:     DATA           - (optional) Hash of the method signature and encoded parameters
     *  For details see Ethereum Contract ABI in the Solidity documentation
     * @param to The address the transaction is directed to.
     * @param from The address the transaction is sent from.
     * @param gas Integer of the gasPrice used for each paid gas
     * @param gasPrice Integer of the gasPrice used for each paid gas
     * @param value Integer of the value sent with this transaction
     * @param data Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI in the Solidity documentation
     * @return transaction Same output as debug_traceTransaction
     */
    suspend fun traceCall(to: String, from: String, gas: String, gasPrice: Long, value: Long, data: String): Any {

        val response: JsonRpcResponse<Any> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(
                method = "debug_traceCall",
                params = listOf(to, from, gas, gasPrice, value, data),
                jsonrpc = "2.0",
                id = 1
            )
        }
        return response.result

    }

    /**
     * Sets the logging verbosity ceiling
     *  Log messages with level up to and including the given level will be printed
     *  The verbosity of individual packages and source files can be raised using debug_vmodule
     * @return message Log messages with level up to and including the given level will be printed.
     */
    suspend fun verbosity(): Any {

        val response: JsonRpcResponse<Any> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_verbosity", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Sets the logging verbosity pattern
     * @param messageRestrictions If you want to see messages from a particular Go package (directory) and all subdirectories, use:    &quot;etd*=6&quot; If you want to restrict messages to a particular package (e.g. p2p) but exclude subdirectories, use: &quot;p2p=6&quot; If you want to see log messages from a particular source file, use:                                  &quot;server.go=6&quot; You can compose these basic patterns. If you want to see all output from peer.go in a package below etd (etd/peer.go, etd/downloader/peer.go) as well as output from package p2p at level &lt; = 5, use:    &quot;etd peer.go=6,p2p=5&quot;
     * @return message
     */
    suspend fun vmodule(messageRestrictions: String): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body =
                JsonRpcRequest(method = "debug_vmodule", params = listOf(messageRestrictions), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Writes a goroutine blocking profile to the given file
     */
    suspend fun writeBlockProfile(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_writeBlockProfile", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Writes an allocation profile to the given file
     *  Note that the profiling rate cannot be set through the API, it must be set on the command line using the --pprof
     * memprofilerate flag
     */
    suspend fun writeMemProfile(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "debug_writeMenProfile", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

}