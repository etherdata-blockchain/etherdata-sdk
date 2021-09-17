import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

/**
 * The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing
 */
export class Txpool {
  client: Client;
  baseURL: string;
  port?: number;

  constructor(baseURL: string, port?: number) {
    this.baseURL = baseURL;
    this.port = port;

    let url = port ? `${baseURL}:${port}` : baseURL;
    const transport = new HTTPTransport(url);
    this.client = new Client(new RequestManager([transport]));
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
  async content(): Promise<{
    pendingTransactions: {
      transaction: {
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
      }[];
    }[];
    queuedTransactions: {
      transaction: {
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
      }[];
    }[];
  }> {
    return await this.client.request({
      method: "txpool_content",
      params: undefined,
    });
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
  async inspect(): Promise<{
    pendingTransactions: { transactionArray: { transaction: string }[] }[];
    queuedTransactions: { transactionArray: { transaction: string }[] }[];
  }> {
    return await this.client.request({
      method: "txpool_inspect",
      params: undefined,
    });
  }

  /**
* The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
* 
The result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state
* @return statusObject An object containing transaction status
*/
  async status(): Promise<{ pending: number; queued: number }> {
    return await this.client.request({
      method: "txpool_status",
      params: undefined,
    });
  }
}
