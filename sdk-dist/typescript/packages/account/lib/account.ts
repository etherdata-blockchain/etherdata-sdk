import {
  ChainId,
  SignedTransaction,
  Transaction,
} from "@etherdata-blockchain/etherdata-sdk-common";
import utils from "web3-utils";
import { TransactionFactory } from "@ethereumjs/tx";
import { Wallet } from "@ethersproject/wallet";
import { getAddress, getIcapAddress } from "@ethersproject/address";
import Common from "@ethereumjs/common";

/**
 * Create an account object which can be used for signing
 */
export class Account {
  privateKey: string;
  address: string;

  constructor(privateKey: string) {
    const wallet = new Wallet(privateKey);
    this.address = wallet.address;
    this.privateKey = privateKey;
  }

  static fromMnemonic(mnemonic: string): Account {
    const privateKey = Wallet.fromMnemonic(mnemonic).privateKey;
    return new Account(privateKey);
  }

  static randomCreate() {
    const privateKey = Wallet.createRandom().privateKey;
    return new Account(privateKey);
  }

  /**
   * Sign transaction. Will automatically use current wallet address to as the from field.
   * @param tx
   */
  signTransaction(tx: Transaction): SignedTransaction {
    if (tx.chainId === undefined) {
      tx.chainId = ChainId.MainNet;
    }
    let privateKey = this.privateKey;
    this.validateTransactionForSigning(tx);

    tx.from = this.address;
    tx.data = tx.data || "0x";
    tx.value = this.toHex(tx.value);
    tx.gasLimit = this.toHex(tx.gasLimit || tx.gas);
    tx.gas = this.toHex(tx.gas);
    tx.type = this.toHex(tx.type ?? 0);
    tx.nonce = this.toHex(tx.nonce);
    tx.gasPrice = this.toHex(tx.gasPrice || tx.gas);

    if (tx.type === "0x1" && tx.accessList === undefined) tx.accessList = [];

    if (privateKey.startsWith("0x")) {
      privateKey = privateKey.substring(2);
    }
    let newTx = TransactionFactory.fromTxData(tx, {
      common: Common.custom({ chainId: tx.chainId as number }),
    });
    let signedTx = newTx.sign(Buffer.from(privateKey, "hex"));
    let validationErrors = signedTx.validate(true);
    if (validationErrors.length > 0) {
      let errorString = "Signer Error: ";
      for (const validationError of validationErrors) {
        errorString += `${errorString} ${validationError}.`;
      }
      throw new Error(errorString);
    }
    let rlpEncoded = signedTx.serialize().toString("hex");
    let rawTransaction = "0x" + rlpEncoded;
    let transactionHash = utils.keccak256(rawTransaction);
    return {
      messageHash:
        "0x" + Buffer.from(signedTx.getMessageToSign(true)).toString("hex"),
      v: "0x" + signedTx.v!.toString(16),
      r: "0x" + signedTx.r!.toString(16),
      s: "0x" + signedTx.s!.toString(16),
      rawTransaction: rawTransaction,
      transactionHash: transactionHash,
    };
  }

  private toChecksum(address: string) {
    return getAddress(address);
  }

  private toHex(value: string | number) {
    let newValue = value;
    // handle base16 value or base10's value in string format
    if (typeof newValue === "string") {
      if (!newValue.startsWith("0x")) {
        newValue = parseInt(newValue).toString(16);
      }
    }

    // handle base 10's value
    if (typeof newValue === "number") {
      newValue = newValue.toString(16);
    }

    if (newValue === undefined) {
      newValue = "0x0";
    }

    if (!newValue.startsWith("0x")) {
      newValue = `0x${newValue}`;
    }

    return newValue;
  }

  private addressFormatter(address: string) {
    return getIcapAddress(address);
  }

  private validateTransactionForSigning(tx: Transaction) {
    if (
      !tx.gas &&
      !tx.gasLimit &&
      !tx.maxPriorityFeePerGas &&
      !tx.maxFeePerGas
    ) {
      throw new Error('"gas" is missing');
    }

    if (tx.chainId === undefined) {
      throw new Error('"chainId" is missing');
    }

    if (tx.gas && tx.gasPrice) {
      if (tx.gas < 0 || tx.gasPrice < 0) {
        throw new Error("Gas or gasPrice is lower than 0");
      }
    } else {
      if ((tx.maxPriorityFeePerGas ?? 0) < 0 || (tx.maxFeePerGas ?? 0) < 0) {
        throw new Error("maxPriorityFeePerGas or maxFeePerGas is lower than 0");
      }
    }
    if (tx.nonce < 0 || tx.chainId < 0) {
      throw new Error("Nonce or chainId is lower than 0");
    }
    return;
  }
}
