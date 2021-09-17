import axios from "axios";

/**
 * Getd provides several extensions to the standard etd JSON-RPC namespace
 */
export class Etd {
  baseURL: string;
  port?: number;
  url: string;

  constructor(baseURL: string, port?: number) {
    this.baseURL = baseURL;
    this.port = port;
    this.url = port ? `${baseURL}:${port}` : baseURL;
  }
  /**
   * This method is used for real-time events through subscriptions
   *  See the subscription documentation for more information
   */
  async subscribe(): Promise<void> {
    let response = await axios.post(this.url, {
      method: "eth_subscribe",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * This method is used for real-time events through subscriptions
   *  See the subscription documentation for more information
   */
  async unsubscribe(): Promise<void> {
    let response = await axios.post(this.url, {
      method: "eth_unsubscribe",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }
}
