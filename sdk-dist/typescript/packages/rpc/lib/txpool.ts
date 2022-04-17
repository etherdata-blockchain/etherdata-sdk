import axios from "axios";
export interface Transaction {
  blockHash: string;
  blockNumber: number;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: number;
  value: string;
}

export interface PendingTransactions {
  transaction: Transaction[];
}

export interface QueuedTransactions {
  transaction: Transaction[];
}

export interface ContentResponseTransactionObject {
  pendingTransactions: PendingTransactions[];
  queuedTransactions: QueuedTransactions[];
}

export interface TransactionArray {
  transaction: string;
}

export interface InspectResponseTransactionObject {
  pendingTransactions: PendingTransactions[];
  queuedTransactions: QueuedTransactions[];
}

export interface StatusResponseStatusObject {
  pending: number;
  queued: number;
}

/**
 * The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing
 */
export class Txpool {
  baseURL: string;
  port?: number;
  url: string;

  constructor(baseURL: string, port?: number) {
    this.baseURL = baseURL;
    this.port = port;
    this.url = port ? `${baseURL}:${port}` : baseURL;
  }
  /**
* The content inspection property can be queried to list the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
* 
The result is an object with two fields pending and queued
*  Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
*  These batches themselves are maps associating nonces with actual transactions
* 
Please note, there may be multiple transactions associated with the same account and nonce
*  This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
* @return transactionObject The return transaction object
*/
  async content(): Promise<ContentResponseTransactionObject> {
    let response = await axios.post(this.url, {
      method: "txpool_content",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
* The inspect inspection property can be queried to list a textual summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
*  This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues
* 
The result is an object with two fields pending and queued
*  Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
*  These batches themselves are maps associating nonces with transactions summary strings
* 
Please note, there may be multiple transactions associated with the same account and nonce
*  This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
* @return transactionObject the return transcation object
*/
  async inspect(): Promise<InspectResponseTransactionObject> {
    let response = await axios.post(this.url, {
      method: "txpool_inspect",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
* The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
* 
The result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state
* @return statusObject An object containing transaction status
*/
  async status(): Promise<StatusResponseStatusObject> {
    let response = await axios.post(this.url, {
      method: "txpool_status",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }
}
