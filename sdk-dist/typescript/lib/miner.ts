import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

/**
 * The miner API allows you to remote control the node’s mining operation and set various mining specific settings
 */
export class Miner {
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
   * Get your hashrate in H/s (Hash operations per second)
   * @return dashRate The hashrate in Hs (Hash operations per second)
   */
  async Getdashrate(): Promise<string> {
    return await this.client.request({
      method: "miner_Getdashrate",
      params: undefined,
    });
  }

  /**
   * Sets the extra data a miner can include when miner blocks
   *  This is capped at 32 bytes
   */
  async setExtra(): Promise<void> {
    return await this.client.request({
      method: "miner_setExtra",
      params: undefined,
    });
  }

  /**
   * Sets the minimal accepted gas price when mining transactions
   *  Any transactions that are below this limit are excluded from the mining process
   * @param price The new minimal accepted gas price when mining transactions.
   */
  async setGasPrice(price: number): Promise<void> {
    return await this.client.request({
      method: "miner_setGasPrice",
      params: [price],
    });
  }

  /**
   * Start the CPU mining process with the given number of threads and generate a new DAG if need be
   */
  async start(): Promise<void> {
    return await this.client.request({
      method: "miner_start",
      params: undefined,
    });
  }

  /**
   * Stop the CPU mining operation
   */
  async stop(): Promise<void> {
    return await this.client.request({
      method: "miner_stop",
      params: undefined,
    });
  }

  /**
   * Sets the etherbase, where mining rewards will go
   * @param etherbase The new etherbase.
   */
  async setEtherbase(etherbase: string): Promise<void> {
    return await this.client.request({
      method: "miner_setEtherbase",
      params: [etherbase],
    });
  }
}
