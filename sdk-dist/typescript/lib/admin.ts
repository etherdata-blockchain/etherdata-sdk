import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

/**
 * The admin API gives you access to several non-standard RPC methods,  which will allow you to have a fine grained control over your Getd instance,  including but not limited to network peer and RPC endpoint management
 */
export class Admin {
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
   * The addPeer administrative method requests adding a new remote node to the list of tracked static nodes
   *  The node will try to maintain connectivity to these nodes at all times, reconnecting every once in a while if the remote connection goes down
   *  The method accepts a single argument, the enode URL of the remote peer to start tracking and returns a BOOL indicating whether the peer was accepted for tracking or some error occurred
   * @param enode The enode URL of the remote peer to start tracking
   * @return accepted Indicating whether the peer was accepted for tracking or some error occurred.
   */
  async addPeer(enode: string): Promise<boolean> {
    return await this.client.request({
      method: "admin_addPeer",
      params: [enode],
    });
  }

  /**
   * The datadir administrative property can be queried for the absolute path the running Getd node currently uses to store all its databases
   * @return absPath The absolute path that the running Getd node is currently using to store all its databases
   */
  async datadir(): Promise<string> {
    return await this.client.request({
      method: "admin_datadir",
      params: undefined,
    });
  }

  /**
   * The nodeInfo administrative property can be queried for all the information known about the running Getd node at the networking granularity
   *  These include general information about the node itself as a participant of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
   * g
   *  etd, les, shh, bzz)
   * @return nodeInfo Get all the information known about the running Getd node at the networking granularity
   */
  async nodeInfo(): Promise<{
    enode: string;
    id: string;
    ip: string;
    listenAddr: string;
    ports: { discovery: number; listener: number };
  }> {
    return await this.client.request({
      method: "admin_nodeInfo",
      params: undefined,
    });
  }

  /**
   * The peers administrative property can be queried for all the information known about the connected remote nodes at the networking granularity
   *  These include general information about the nodes themselves as participants of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
   * g
   *  etd, les, shh, bzz)
   * @return peersArray All the information known about the connected remote nodes
   */
  async peers(): Promise<
    {
      caps: string[];
      id: string;
      name: string;
      network: { localAddress: string; remoteAddress: string };
      protocols: {
        etd: { difficulty: number; head: string; version: number };
      }[];
    }[]
  > {
    return await this.client.request({
      method: "admin_peers",
      params: undefined,
    });
  }

  /**
   * The startRPC administrative method starts an HTTP based JSON RPC API webserver to handle client requests
   *  All the parameters are optional
   * @param host Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
   * @param port Network port to open the listener socket on (defaults to 8545)
   * @param cors cross-origin resource sharing header to use (defaults to &quot;&quot;)
   * @param apis API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
   * @return HTTPlistenerOpen A boolean flag specifying whether the HTTP RPC listener was opened or not. Please note, only one HTTP endpoint is allowed to be active at any time.
   */
  async startRPC(
    host: string | undefined,
    port: number | undefined,
    cors: string | undefined,
    apis: string | undefined
  ): Promise<boolean> {
    return await this.client.request({
      method: "admin_startRPC",
      params: [host, port, cors, apis],
    });
  }

  /**
   * The startWS administrative method starts an WebSocket based JSON RPC API webserver to handle client requests
   *  All the parameters are optional
   * @param host Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
   * @param port Network port to open the listener socket on (defaults to 8546)
   * @param cors cross-origin resource sharing header to use (defaults to &quot;&quot;)
   * @param apis API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
   * @return WEBlistenerOpen A boolean flag specifying whether the WebSocket RPC listener was opened or not. Please note, only one WebSocket endpoint is allowed to be active at any time.
   */
  async startWS(
    host: string | undefined,
    port: number | undefined,
    cors: string | undefined,
    apis: string | undefined
  ): Promise<boolean> {
    return await this.client.request({
      method: "admin_startRPC",
      params: [host, port, cors, apis],
    });
  }

  /**
   * The stopRPC administrative method closes the currently open HTTP RPC endpoint
   *  As the node can only have a single HTTP endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
   * @return HTTPendpointClosed A boolean indicating whether the endpoint was closed or not.
   */
  async stopRPC(): Promise<boolean> {
    return await this.client.request({
      method: "admin_stopRPC",
      params: undefined,
    });
  }

  /**
   * The stopWS administrative method closes the currently open WebSocket RPC endpoint
   *  As the node can only have a single WebSocket endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
   * @return WEBendpointClosed A boolean indicating whether the endpoint was closed or not.
   */
  async stopWS(): Promise<boolean> {
    return await this.client.request({
      method: "admin_stopWS",
      params: undefined,
    });
  }
}
