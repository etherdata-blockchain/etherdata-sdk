import axios from "axios";

/**
 * The miner API allows you to remote control the node’s mining operation and set various mining specific settings
 */
export class Miner {
  baseURL: string;
  port?: number;
  url: string;

  constructor(baseURL: string, port?: number) {
    this.baseURL = baseURL;
    this.port = port;
    this.url = port ? `${baseURL}:${port}` : baseURL;
  }
  /**
   * Get your hashrate in H/s (Hash operations per second)
   * @return dashRate The hashrate in Hs (Hash operations per second)
   */
  async getdashrate(): Promise<string> {
    let response = await axios.post(this.url, {
      method: "miner_Getdashrate",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Sets the extra data a miner can include when miner blocks
   *  This is capped at 32 bytes
   */
  async setExtra(): Promise<void> {
    let response = await axios.post(this.url, {
      method: "miner_setExtra",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Sets the minimal accepted gas price when mining transactions
   *  Any transactions that are below this limit are excluded from the mining process
   * @param price The new minimal accepted gas price when mining transactions.
   */
  async setGasPrice(price: number): Promise<void> {
    let response = await axios.post(this.url, {
      method: "miner_setGasPrice",
      params: [price],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Start the CPU mining process with the given number of threads and generate a new DAG if need be
   */
  async start(): Promise<void> {
    let response = await axios.post(this.url, {
      method: "miner_start",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Stop the CPU mining operation
   */
  async stop(): Promise<void> {
    let response = await axios.post(this.url, {
      method: "miner_stop",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Sets the etherbase, where mining rewards will go
   * @param etherbase The new etherbase.
   */
  async setEtherbase(etherbase: string): Promise<void> {
    let response = await axios.post(this.url, {
      method: "miner_setEtherbase",
      params: [etherbase],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }
}
