import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

/**
 * different methods to perform etd control
 */
export class Json_rpc_methods {
  client: Client;
  baseURL: string;
  port: number;

  constructor(baseURL: string, port: number) {
    this.baseURL = baseURL;
    this.port = port;

    const transport = new HTTPTransport(`${baseURL}:${port}`);
    this.client = new Client(new RequestManager([transport]));
  }
  /**
   * Returns the current etdereum protocol version
   * @return version The current etdereum protocol version
   */
  async protocalVersion(): Promise<string> {
    return await this.client.request({
      method: "eth_protocalVersion",
      params: undefined,
    });
  }

  /**
   * Returns the current block number
   * @return blockNumber The current blockNumber
   */
  async blockNumber(): Promise<string> {
    return await this.client.request({
      method: "eth_blockNumber",
      params: undefined,
    });
  }

  /**
   * Returns an object with data about the sync status or false
   * @return syncObject return this ONLY when syncing
   * @return syncStatus return this ONLY when not syncing
   */
  async syncing(): Promise<
    [
      { startingBlock: number; currentBlock: number; highestBlock: number },
      boolean
    ]
  > {
    return await this.client.request({
      method: "eth_syncing",
      params: undefined,
    });
  }

  /**
   * Returns the client coinbase address
   * @return coinbase The client coinbase address
   */
  async coinbase(): Promise<any> {
    return await this.client.request({
      method: "eth_coinbase",
      params: undefined,
    });
  }

  /**
   * Returns true if client is actively mining new blocks
   * @return isMining True if client is actively mining new blocks.
   */
  async mining(): Promise<boolean> {
    return await this.client.request({
      method: "eth_mining",
      params: undefined,
    });
  }

  /**
   * Returns the number of hashes per second that the node is mining with
   * @return hashrate The number of hashes per second that the node is mining with
   */
  async hashrate(): Promise<any> {
    return await this.client.request({
      method: "eth_hashrate",
      params: undefined,
    });
  }

  /**
   * Returns the current price per gas in wei
   * @return gasPrice The current price per gas in wei (8049999872 Wei in the example)
   */
  async gasPrice(): Promise<any> {
    return await this.client.request({
      method: "eth_gasPrice",
      params: undefined,
    });
  }

  /**
   * Returns a list of addresses owned by client
   * @return addressAccount The array of accouts
   */
  async accounts(): Promise<any[]> {
    return await this.client.request({
      method: "eth_accounts",
      params: undefined,
    });
  }

  /**
   * Returns the balance of the account of given address
   * @param address DATA, 20 Bytes - address to check for balance
   * @param tag QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return balance QUANTITY - integer of the current balance in wei.
   */
  async getBalance(address: string, tag: string): Promise<number> {
    return await this.client.request({
      method: "eth_getBalance",
      params: [address, tag],
    });
  }

  /**
   * Returns the value from a storage position at a given address
   * @param address DATA, 20 Bytes - address of the storage.
   * @param position The integer of the position in the storage.
   * @param tag QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return valur The value at this storage position.
   */
  async getStorageAt(address: any, position: any, tag: string): Promise<any> {
    return await this.client.request({
      method: "eth_getStorageAt",
      params: [address, position, tag],
    });
  }

  /**
   * Returns the number of transactions sent from an address
   * @param address The address.
   * @param state QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return number The number of transactions send from this address.
   */
  async getTransactionCount(address: any, state: string): Promise<number> {
    return await this.client.request({
      method: "eth_getTransactionCount",
      params: [address, state],
    });
  }

  /**
   * Returns the number of transactions in a block from a block matching the given block hash
   * @param data 20 Bytes - The address
   * @param QUANTITY_TAG integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return QUANTITY The integer of the number of transactions send from this address.
   */
  async getTransactionCountByHash(
    data: string,
    QUANTITY_TAG: string
  ): Promise<string> {
    return await this.client.request({
      method: "eth_getTransactionCountByHash",
      params: [data, QUANTITY_TAG],
    });
  }

  /**
   * Returns the number of transactions in a block from a block matching the given block hash
   * @param DATA 32 Bytes - The hash of a block
   * @return QUANTITY The integer of the number of transactions in this block.
   */
  async getBlockTransactionCountByHash(DATA: string): Promise<string> {
    return await this.client.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [DATA],
    });
  }

  /**
   * Returns the number of transactions in a block matching the given block number
   * @param QUANTITY_TAG The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, see the default block parameter
   * @return QUANTITY The integer of the number of transactions in this block.
   */
  async getBlockTransactionCountByNumber(
    QUANTITY_TAG: string
  ): Promise<string> {
    return await this.client.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [QUANTITY_TAG],
    });
  }

  /**
   * Returns the number of uncles in a block from a block matching the given block hash
   * @param DATA 32 Bytes - The hash of a block
   * @return QUANTITY_TAG The integer of the number of uncles in this block.
   */
  async getUncleCountByBlockHash(DATA: string): Promise<string> {
    return await this.client.request({
      method: "eth_getUncleCountByBlockHash",
      params: [DATA],
    });
  }

  /**
   * Returns the number of uncles in a block from a block matching the given block number
   * @param QUANTITY_TAG The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter
   * @return QUANTITY The integer of the number of uncles in this block.
   */
  async getUncleCountByBlockNumber(QUANTITY_TAG: string): Promise<string> {
    return await this.client.request({
      method: "eth_getUncleCountByBlockNumber",
      params: [QUANTITY_TAG],
    });
  }

  /**
   * Returns code at a given address
   * @param DATA 20 Byter - The address
   * @param QUANTITY_TAG The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return DATA The code from the given address.
   */
  async getCode(DATA: string, QUANTITY_TAG: string): Promise<string> {
    return await this.client.request({
      method: "eth_code",
      params: [DATA, QUANTITY_TAG],
    });
  }

  /**
* The sign method calculates an etdereum specific signature with sign(keccak256(&quot;\x19etdereum Signed Message:\n&quot; + len(message) + message)))
* 
By adding a prefix to the message makes the calculated signature recognisable as an etdereum specific signature
*  This prevents misuse where a malicious DApp can sign arbitrary data (e
* g
*  transaction) and use the signature to impersonate the victim
* 
Note the address to sign with must be unlocked
* @param a 20 Bytes - The address
* @param b N Bytes - The message to sign
* @return value The signature
*/
  async sign(a: string, b: string): Promise<string> {
    return await this.client.request({ method: "eth_sign", params: [a, b] });
  }

  /**
   * Signs a transaction that can be submitted to the network at a later time using with eth_sendRawTransaction
   * @param Object The transaction object
   * @return DATA The signed transaction object.
   */
  async signTransaction(Object: {
    from: string;
    to: string | undefined;
    gas: string | undefined;
    gasPrice: string | undefined;
    value: string | undefined;
    data: string;
    nonce: string | undefined;
  }): Promise<string> {
    return await this.client.request({
      method: "eth_signTransaction",
      params: [Object],
    });
  }

  /**
   * Creates new message call transaction or a contract creation, if the data field contains code
   * @param Object The transaction object
   * @return DATA 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
   */
  async sendTranscation(Object: {
    from: string;
    to: string | undefined;
    gas: string | undefined;
    gasPrice: string | undefined;
    value: string | undefined;
    data: string;
    nonce: string | undefined;
  }): Promise<string> {
    return await this.client.request({
      method: "eth_sendTranscation",
      params: [Object],
    });
  }

  /**
   * Creates new message call transaction or a contract creation for signed transactions
   * @param DATA The signed transaction data.
   * @return DATA 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
   */
  async sendRawTransaction(DATA: string): Promise<string> {
    return await this.client.request({
      method: "eth_sendRawTransaction",
      params: [DATA],
    });
  }

  /**
   * Executes a new message call immediately without creating a transaction on the block chain
   * @param Object The transaction object
   * @param QUANTITY_TAG The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
   * @return DATA The return value of executed contract.
   */
  async call(
    Object: {
      from: string;
      to: string;
      gas: string | undefined;
      gasPrice: string | undefined;
      value: string | undefined;
      data: string | undefined;
    },
    QUANTITY_TAG: string
  ): Promise<string> {
    return await this.client.request({
      method: "eth_call",
      params: [Object, QUANTITY_TAG],
    });
  }

  /**
   * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
   *  The transaction will not be added to the blockchain
   *  Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance
   * @param Object The transaction object
   * @param QUANTITY_TAG The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
   * @return QUANTITY The amount of gas used.
   */
  async estimateGas(
    Object: {
      from: string;
      to: string;
      gas: string | undefined;
      gasPrice: string | undefined;
      value: string | undefined;
      data: string | undefined;
    },
    QUANTITY_TAG: string
  ): Promise<string> {
    return await this.client.request({
      method: "eth_estimateGas",
      params: [Object, QUANTITY_TAG],
    });
  }

  /**
   * Returns information about a block by hash
   * @param DATA 32 Bytes - Hash of a block.
   * @param Bool If true it returns the full transaction objects, if false only the hashes of the transactions.
   * @return Object A block object, or null when no block was found
   */
  async getBlockByHash(
    DATA: string,
    Bool: boolean
  ): Promise<{
    number: string;
    hash: string;
    parnetHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    extraData: string;
    size: string;
    gasLimit: string;
    gasUsed: string;
    timestamp: string;
    transaction: string[];
    uncles: string[];
  }> {
    return await this.client.request({
      method: "eth_getBlockByHash",
      params: [DATA, Bool],
    });
  }

  /**
   * Returns information about a block by block number
   * @param QUANTITY_TAG The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
   * @param Bool If true it returns the full transaction objects, if false only the hashes of the transactions.
   * @return Object A block object, or null when no block was found
   */
  async getBlockByNumber(
    QUANTITY_TAG: string,
    Bool: boolean
  ): Promise<{
    number: string;
    hash: string;
    parnetHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    extraData: string;
    size: string;
    gasLimit: string;
    gasUsed: string;
    timestamp: string;
    transaction: string[];
    uncles: string[];
  }> {
    return await this.client.request({
      method: "eth_getBlockByNumber",
      params: [QUANTITY_TAG, Bool],
    });
  }

  /**
   * Returns the information about a transaction requested by transaction hash
   * @param DATA 32 Bytes - hash of a transaction
   * @return Object A transaction object, or null when no transaction was found
   */
  async getTransactionByHash(
    DATA: string
  ): Promise<{
    blockHash: string;
    blockNumber: string;
    from: string;
    gas: string;
    gasParice: string;
    hash: string;
    input: string;
    nonce: string;
    to: string;
    transactionIndex: string;
    value: string;
    v: string;
    r: string;
    s: string;
  }> {
    return await this.client.request({
      method: "eth_getTransactionByHash",
      params: [DATA],
    });
  }

  /**
   * Returns information about a transaction by block hash and transaction index position
   * @param DATA 32 Bytes - hash of a block.
   * @param QUANTITY The integer of the transaction index position.
   * @return Object See eth_getTransactionByHash
   */
  async getTransactionByHashAndIndex(
    DATA: string,
    QUANTITY: string
  ): Promise<{ data: any }> {
    return await this.client.request({
      method: "eth_getTransactionByHashAndIndex",
      params: [DATA, QUANTITY],
    });
  }

  /**
   * Returns information about a transaction by block number and transaction index position
   * @param QUANTITY_TAG a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
   * @param QUANTITY The transaction index position.
   * @return Object See eth_getTransactionByHash
   */
  async getTransactionByBlockNumberAndIndex(
    QUANTITY_TAG: string,
    QUANTITY: string
  ): Promise<{ data: any }> {
    return await this.client.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [QUANTITY_TAG, QUANTITY],
    });
  }

  /**
   * Returns the receipt of a transaction by transaction hash
   *  Note That the receipt is not available for pending transactions
   * @param DATA 32 Bytes - hash of a transaction
   * @return Object A transaction receipt object, or null when no receipt was found
   */
  async getTransactionReceipt(
    DATA: string
  ): Promise<{
    transactionHash: string;
    transactionIndex: string;
    blockHash: string;
    blockNumber: string;
    from: string;
    to: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    contractAddress: string;
    logs: string[];
    logsBloom: string;
    root: string;
    status: string;
  }> {
    return await this.client.request({
      method: "eth_getTransactionReceipt",
      params: [DATA],
    });
  }

  /**
   * eturns information about a uncle of a block by hash and uncle index position
   * @param DATA 32 Bytes - The hash of a block.
   * @param QUANTITY The uncle’s index position.
   * @return Object See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
   */
  async getUncleByBlockHashAndIndex(
    DATA: string,
    QUANTITY: string
  ): Promise<{ data: any }> {
    return await this.client.request({
      method: "eth_getUncleByBlockHashAndIndex",
      params: [DATA, QUANTITY],
    });
  }

  /**
   * Returns information about a uncle of a block by number and uncle index position
   * @param QUANTITY_TAG a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
   * @param QUANTITY the uncle’s index position.
   * @return Object See eth_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
   */
  async getUncleByBlockNumberAndIndex(
    QUANTITY_TAG: string,
    QUANTITY: string
  ): Promise<{ data: any }> {
    return await this.client.request({
      method: "eth_getUncleByBlockNumberAndIndex",
      params: [QUANTITY_TAG, QUANTITY],
    });
  }

  /**
   * Returns a list of available compilers in the client
   * @return Array Array of available compilers.
   */
  async getCompliers(): Promise<string[]> {
    return await this.client.request({
      method: "eth_getCompliers",
      params: undefined,
    });
  }

  /**
   * Returns compiled solidity code
   * @param String The source code.
   * @return DATA The compiled source code.
   */
  async compileSolidity(String: string): Promise<string> {
    return await this.client.request({
      method: "eth_compileSolidity",
      params: [String],
    });
  }

  /**
   * Returns compiled LLL code
   * @param String The source code.
   * @return DATA The compiled source code.
   */
  async complpieLLL(String: string): Promise<string> {
    return await this.client.request({
      method: "eth_complpieLLL",
      params: [String],
    });
  }

  /**
   * Returns compiled serpent code
   * @param String The source code.
   * @return DATA The compiled source code.
   */
  async complieSerpent(String: string): Promise<string> {
    return await this.client.request({
      method: "eth_complieSerpent",
      params: [String],
    });
  }

  /**
* Creates a filter object, based on filter options, to notify when the state changes (logs)
*  To check if the state has changed, call eth_getFilterChanges
* 
A note on specifying topic filters Topics are order-dependent
*  A transaction with a log with topics [A, B] will be matched by the following topic filters
-[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”
* @param Object The filter options
* @return QUANTITY A filter id.
*/
  async newFilter(Object: {
    fromBlock: string | undefined;
    toBlock: string | undefined;
    address: string | undefined;
    topics: string | undefined[] | undefined;
  }): Promise<string> {
    return await this.client.request({
      method: "eth_newFilter",
      params: [Object],
    });
  }

  /**
   * Creates a filter in the node, to notify when a new block arrives
   *  To check if the state has changed, call eth_getFilterChanges
   * @return QUANTITY A filter id.
   */
  async newBlockFilter(): Promise<string> {
    return await this.client.request({
      method: "eth_newBlockFilter",
      params: undefined,
    });
  }

  /**
   * Creates a filter in the node, to notify when new pending transactions arrive
   *  To check if the state has changed, call eth_getFilterChanges
   * @return QUANTITY A filter id.
   */
  async newPendingTransactionFilter(): Promise<string> {
    return await this.client.request({
      method: "eth_newPendingTransactionFilter",
      params: undefined,
    });
  }

  /**
   * Uninstalls a filter with given id
   *  Should always be called when watch is no longer needed
   *  Additonally Filters timeout when they aren’t requested with eth_getFilterChanges
   *  for a period of time
   * @param QUANTITY The filter id.
   * @return Bool true if the filter was successfully uninstalled, otherwise false.
   */
  async uninstallFilter(QUANTITY: string): Promise<boolean> {
    return await this.client.request({
      method: "eth_uninstallFilter",
      params: [QUANTITY],
    });
  }

  /**
   * Polling method for a filter, which returns an array of logs which occurred since last poll
   * @param QUANTITY The filter id.
   * @return Array Array of log objects, or an empty array if nothing has changed since last poll. For filters created with eth_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. [&quot;0x3454645634534...&quot;]. For filters created with eth_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. [&quot;0x6345343454645...&quot;].
   */
  async getFilterChanges(
    QUANTITY: string
  ): Promise<
    {
      removed: boolean;
      logIndex: string;
      transactionIndex: string;
      transactionHash: string;
      blockHash: string;
      blockNumber: string;
      address: string;
      data: string;
      topics: string[];
    }[]
  > {
    return await this.client.request({
      method: "eth_getFilterChanges",
      params: [QUANTITY],
    });
  }

  /**
   * Returns an array of all logs matching filter with given id
   * @param QUANTITY The filter id.
   * @return Array See eth_getFilterChanges.
   */
  async getFilterLogs(QUANTITY: string): Promise<any[]> {
    return await this.client.request({
      method: "eth_getFilterLogs",
      params: [QUANTITY],
    });
  }

  /**
   * Returns an array of all logs matching a given filter object
   * @param Object The filter options
   * @return Array See eth_getFilterChanges.
   */
  async getLogs(Object: {
    fromBlock: string | undefined;
    toBlock: string | undefined;
    address: string | undefined;
    topics: string | undefined[] | undefined;
    blockhash: string | undefined;
  }): Promise<any[]> {
    return await this.client.request({
      method: "eth_getLogs",
      params: [Object],
    });
  }

  /**
   * Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)
   * @return Array Array with the following properties -DATA, 32 Bytes - current block header pow-hash -DATA, 32 Bytes - the seed hash used for the DAG. -DATA, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.
   */
  async getWork(): Promise<string[]> {
    return await this.client.request({
      method: "eth_getWork",
      params: undefined,
    });
  }

  /**
   * Used for submitting a proof-of-work solution
   * @param a 8 Bytes - The nonce found (64 bits)
   * @param b 32 Bytes - The header’s pow-hash (256 bits)
   * @param c 32 Bytes - The mix digest (256 bits)
   * @return Bool returns true if the provided solution is valid, otherwise false.
   */
  async submitWork(a: string, b: string, c: string): Promise<boolean> {
    return await this.client.request({
      method: "eth_submitWork",
      params: [a, b, c],
    });
  }

  /**
   * Used for submitting mining hashrate
   * @param Hashrate A hexadecimal string representation (32 bytes) of the hash rate
   * @param ID String - A random hexadecimal(32 bytes) ID identifying the client
   * @return Bool Returns `true` if submitting went through succesfully and `false` otherwise.
   */
  async submitHashrate(Hashrate: string, ID: string): Promise<boolean> {
    return await this.client.request({
      method: "eth_submitHashrate",
      params: [Hashrate, ID],
    });
  }
}
