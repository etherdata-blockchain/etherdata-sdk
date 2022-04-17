import { json_rpc_methods } from "../lib";
// @ts-ignore
import nock from "nock";
import { StatusCodes } from "http-status-codes";

function generateRPCResult(result: any) {
  return {
    jsonrpc: "2.0",
    id: "abcde",
    result: result,
  };
}

describe("Given a json rpc methods", () => {
  let jsonRPCMethod: json_rpc_methods.JsonRpcMethods;
  const url = "http://localhost";

  beforeEach(() => {
    jsonRPCMethod = new json_rpc_methods.JsonRpcMethods(url);
  });

  test("When calling get block number", async () => {
    nock(url).post("/").reply(StatusCodes.OK, generateRPCResult("0x100"));
    const result = await jsonRPCMethod.blockNumber();
    expect(result).toBe("0x100");
  });

  test("When calling get block by number", async () => {
    const blockResult: json_rpc_methods.GetBlockByNumberResponseObj = {
      number: "100",
      hash: "0x000",
      parnetHash: "",
      nonce: "",
      sha3Uncles: "",
      logsBloom: "",
      transactionsRoot: "",
      miner: "",
      difficulty: "",
      totalDifficulty: "",
      extradata: "",
      size: "",
      gasLimit: "",
      gasUsed: "",
      timestamp: "",
      transaction: [],
      uncles: [],
    };

    nock(url).post("/").reply(StatusCodes.OK, generateRPCResult(blockResult));
    const result = await jsonRPCMethod.getBlockByNumber("0x0", true);
    expect(result).toStrictEqual(blockResult);
  });
});
