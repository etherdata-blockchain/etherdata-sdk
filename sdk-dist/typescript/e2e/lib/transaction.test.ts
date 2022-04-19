import { json_rpc_methods } from "@etherdata-blockchain/etherdata-sdk";
import { Account } from "@etherdata-blockchain/etherdata-sdk-account";
import {
  ChainId,
  Transaction,
} from "@etherdata-blockchain/etherdata-sdk-common";

jest.setTimeout(1000000);

describe("Given a json rpc and a account", () => {
  let method: json_rpc_methods.JsonRpcMethods;

  beforeEach(() => {
    method = new json_rpc_methods.JsonRpcMethods(process.env.url!);
  });

  test.skip("When sending a transaction", async () => {
    const account = new Account(process.env.pk!);
    const transactionCount = await method.getTransactionCount(
      account.address,
      "latest"
    );

    const gasPrice = await method.gasPrice();

    expect(transactionCount).toBeDefined();
    expect(gasPrice).toBeDefined();

    const tx: Transaction = {
      gas: 210000,
      to: process.env.to!,
      gasLimit: 2100000,
      value: 3 * 10 ** 18,
      nonce: transactionCount,
      chainId: ChainId.TestNet,
      gasPrice: gasPrice,
    };

    const signed = await account.signTransaction(tx);
    const txId = await method.sendRawTransaction(signed.rawTransaction);
    expect(txId).toBeDefined();
    console.log(txId);
  });
});
