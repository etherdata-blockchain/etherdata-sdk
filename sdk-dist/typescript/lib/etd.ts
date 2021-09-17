import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

/**
 * Getd provides several extensions to the standard etd JSON-RPC namespace
 */
export class Etd {
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
   * This method is used for real-time events through subscriptions
   *  See the subscription documentation for more information
   */
  async subscribe(): Promise<void> {
    return await this.client.request({
      method: "eth_subscribe",
      params: undefined,
    });
  }

  /**
   * This method is used for real-time events through subscriptions
   *  See the subscription documentation for more information
   */
  async unsubscribe(): Promise<void> {
    return await this.client.request({
      method: "eth_unsubscribe",
      params: undefined,
    });
  }
}
