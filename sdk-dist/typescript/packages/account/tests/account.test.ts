import { Account } from "../lib";
import { Wallet } from "@ethersproject/wallet";
import { Transaction } from "@etherdata-blockchain/etherdata-sdk-common";

describe("Given a account object", () => {
  let account: Account;

  test("When calling create a account", () => {
    account = Account.randomCreate();
    expect(account.privateKey).toBeDefined();
    expect(account.address).toBeDefined();
  });

  test("When calling create a account", () => {
    const mnemonic =
      "throw suit pave exchange axis priority tattoo step field badge ordinary hammer alley mixed random";
    const wallet = Wallet.fromMnemonic(mnemonic);
    account = Account.fromMnemonic(mnemonic);
    expect(account.privateKey).toBe(wallet.privateKey);
    expect(account.address).toBe(wallet.address);
  });

  test("When calling sign", () => {
    account = Account.randomCreate();
    const toAccount = Account.randomCreate();

    const tx: Transaction = {
      accessList: [],
      gas: 230000,
      to: toAccount.address,
      value: 100000,
      nonce: 0,
    };

    const signed = account.signTransaction(tx);
    expect(signed.rawTransaction).toBeDefined();
    expect(signed.r).toBeDefined();
    expect(signed.s).toBeDefined();
    expect(signed.v).toBeDefined();
    expect(signed.rawTransaction).toBeDefined();
    expect(signed.transactionHash).toBeDefined();
  });

  test("When calling sign", () => {
    account = Account.randomCreate();
    const toAccount = Account.randomCreate();

    const tx: Transaction = {
      accessList: [],
      gas: 230000,
      to: toAccount.address,
      value: "0x10000",
      nonce: 0,
    };

    const signed = account.signTransaction(tx);
    expect(signed.rawTransaction).toBeDefined();
    expect(signed.r).toBeDefined();
    expect(signed.s).toBeDefined();
    expect(signed.v).toBeDefined();
    expect(signed.rawTransaction).toBeDefined();
    expect(signed.transactionHash).toBeDefined();
  });

  test("When calling sign with error", () => {
    account = Account.randomCreate();
    const toAccount = Account.randomCreate();

    const tx: Transaction = {
      accessList: [],
      gas: 230000,
      to: toAccount.address,
      value: "0x10000",
      nonce: 0,
      chainId: -1,
    };

    expect(() => account.signTransaction(tx)).toThrow();
  });

  test("When calling sign with error", () => {
    account = Account.randomCreate();
    const toAccount = Account.randomCreate();

    const tx: Transaction = {
      accessList: [],
      gas: 230000,
      to: toAccount.address,
      value: "0x10000",
      nonce: -1,
    };

    expect(() => account.signTransaction(tx)).toThrow();
  });

  test("When calling sign with error", () => {
    account = Account.randomCreate();
    const toAccount = Account.randomCreate();

    const tx: Transaction = {
      accessList: [],
      gas: 230000,
      to: toAccount.address,
      value: -1,
      nonce: 0,
    };

    expect(() => account.signTransaction(tx)).toThrow();
  });
});
