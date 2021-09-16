import { RequestManager, HTTPTransport, Client } from "@open-rpc/client-js";

/**
 * The clique API provides access to the state of the clique consensus engine
 *  You can use this API to manage signer votes and to check the health of a private network
 */
export class Clique {
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
   * Retrieves a snapshot of all clique state at a given block
   * @param number The number of the block
   * @return snapshot Snapshot of all clique state at the given block
   */
  async getSnapshot(
    number: number
  ): Promise<{
    hash: string;
    number: number;
    recents: { number: string[] };
    signers: { signer: string[] };
  }> {
    return await this.client.request({
      method: "clique.getSnapshot",
      params: [number],
    });
  }

  /**
   * Retrieves the state snapshot at a given block
   * @return ststeSnapshot The tate snapshot at the block.
   */
  async getSnapshotAtHash(): Promise<any> {
    return await this.client.request({
      method: "clique_getSnapshotAtHash",
      params: undefined,
    });
  }

  /**
   * Retrieves the list of authorized signers at the specified block
   * @return signerArray The list of authorized signers
   */
  async getSigners(): Promise<string[]> {
    return await this.client.request({
      method: "clique_getSigners",
      params: undefined,
    });
  }

  /**
   * Returns the current proposals the node is voting on
   * @return proposal The current proposals
   */
  async proposals(): Promise<string> {
    return await this.client.request({
      method: "clique_proposals",
      params: undefined,
    });
  }

  /**
   * Adds a new authorization proposal that the signer will attempt to push through
   *  If the auth parameter is true, the local signer votes for the given address to be included in the set of authorized signers
   *  With auth set to false, the vote is against the address
   */
  async propose(): Promise<void> {
    return await this.client.request({
      method: "clique_propose",
      params: undefined,
    });
  }

  /**
   * This method drops a currently running proposal
   *  The signer will not cast further votes (either for or against) the address
   */
  async discard(): Promise<void> {
    return await this.client.request({
      method: "clique_discard",
      params: undefined,
    });
  }

  /**
   * This is a debugging method which returns statistics about signer activity for the last 64 blocks
   * @return inturnPercent Percentage of blocks signed in-turn
   * @return sealerActivity A object containing signer addresses and the number of blocks signed by them
   * @return numBlocks The number of blocks analyzed
   */
  async status(): Promise<
    [number, { signerAddresses: string; numBlocksSigned: number }, number]
  > {
    return await this.client.request({
      method: "clique_status",
      params: undefined,
    });
  }
}
