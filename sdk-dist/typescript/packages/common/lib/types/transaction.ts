import { AddressLike, BNLike, BufferLike } from "ethereumjs-util";

export interface Transaction {
  from?: string;
  gas: number | string;
  to: string;
  /**
   * User can provider either a base16's value or a base10's value
   */
  value: number | string;
  gasPrice?: number | string;
  nonce: number | string;
  /**
   * Chain id for the transaction. Default to ChainId.mainNet.
   */
  chainId?: number | string;
  maxFeePerGas?: number | string;
  maxPriorityFeePerGas?: number | string;
  gasLimit?: string | number;
  data?: string;
  accessList?: JsonAccessListItem[];
  type?: string;
}

export interface SignedTransaction {
  rawTransaction: string;
  messageHash: string;
  transactionHash: string;
  r: string;
  s: string;
  v: string;
}

type JsonAccessListItem = { address: string; storageKeys: string[] };

/**
 * Legacy {@link Transaction} Data
 */
export type TxData = {
  /**
   * The transaction's nonce.
   */
  nonce?: BNLike;

  /**
   * The transaction's gas price.
   */
  gasPrice?: BNLike;

  /**
   * The transaction's gas limit.
   */
  gasLimit?: BNLike;

  /**
   * The transaction's the address is sent to.
   */
  to?: AddressLike;

  /**
   * The amount of Ether sent.
   */
  value?: BNLike;

  /**
   * This will contain the data of the message or the init of a contract.
   */
  data?: BufferLike;

  /**
   * EC recovery ID.
   */
  v?: BNLike;

  /**
   * EC signature parameter.
   */
  r?: BNLike;

  /**
   * EC signature parameter.
   */
  s?: BNLike;

  /**
   * The transaction type
   */

  type?: BNLike;
};
