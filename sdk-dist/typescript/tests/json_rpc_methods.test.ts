import { Json_rpc_methods } from "../lib"


describe("", () => {
    let rpc = new Json_rpc_methods(process.env.httpUrl!)
    let httpsRpc = new Json_rpc_methods(process.env.httpsUrl!)

    // test("block Number", async () => {
    //     let number = await rpc.blockNumber()
    //     expect(number).toBeDefined()
    // })

    test("block Number2", async () => {
        let number = await httpsRpc.blockNumber()
        expect(number).toBeDefined()
    })
})