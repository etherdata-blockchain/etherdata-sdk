import axios from "axios";
export interface GetSnapshotResponseRecents {
  number: string[];
}

export interface GetSnapshotResponseSigners {
  signer: string[];
}

export interface GetSnapshotResponseSnapshot {
  hash: string;
  number: number;
  recents: GetSnapshotResponseRecents;
  signers: GetSnapshotResponseSigners;
}

export interface StatusResponseSealerActivity {
  signerAddresses: string;
  numBlocksSigned: number;
}

export interface StatusResponse {
  inturnPercent: number;
  sealerActivity: StatusResponseSealerActivity;
  numBlocks: number;
}

/**
 * The clique API provides access to the state of the clique consensus engine
 *  You can use this API to manage signer votes and to check the health of a private network
 */
export class Clique {
  baseURL: string;
  port?: number;
  url: string;

  constructor(baseURL: string, port?: number) {
    this.baseURL = baseURL;
    this.port = port;
    this.url = port ? `${baseURL}:${port}` : baseURL;
  }
  /**
   * Retrieves a snapshot of all clique state at a given block
   * @param number The number of the block
   * @return snapshot Snapshot of all clique state at the given block
   */
  async getSnapshot(number: number): Promise<GetSnapshotResponseSnapshot> {
    let response = await axios.post(this.url, {
      method: "clique.getSnapshot",
      params: [number],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Retrieves the state snapshot at a given block
   * @return ststeSnapshot The tate snapshot at the block.
   */
  async getSnapshotAtHash(): Promise<any> {
    let response = await axios.post(this.url, {
      method: "clique_getSnapshotAtHash",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Retrieves the list of authorized signers at the specified block
   * @return signerArray The list of authorized signers
   */
  async getSigners(): Promise<string[]> {
    let response = await axios.post(this.url, {
      method: "clique_getSigners",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the current proposals the node is voting on
   * @return proposal The current proposals
   */
  async proposals(): Promise<string> {
    let response = await axios.post(this.url, {
      method: "clique_proposals",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Adds a new authorization proposal that the signer will attempt to push through
   *  If the auth parameter is true, the local signer votes for the given address to be included in the set of authorized signers
   *  With auth set to false, the vote is against the address
   */
  async propose(): Promise<void> {
    let response = await axios.post(this.url, {
      method: "clique_propose",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * This method drops a currently running proposal
   *  The signer will not cast further votes (either for or against) the address
   */
  async discard(): Promise<void> {
    let response = await axios.post(this.url, {
      method: "clique_discard",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * This is a debugging method which returns statistics about signer activity for the last 64 blocks
   * @return inturnPercent Percentage of blocks signed in-turn
   * @return sealerActivity A object containing signer addresses and the number of blocks signed by them
   * @return numBlocks The number of blocks analyzed
   */
  async status(): Promise<StatusResponse> {
    let response = await axios.post(this.url, {
      method: "clique_status",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }
}
