package com.etd

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * The miner API allows you to remote control the node’s mining operation and set various mining
 * specific settings
 */
class Miner(val url: String) {

  private val client = HttpClient() { install(JsonFeature) { serializer = GsonSerializer() } }
  /**
   * Get your hashrate in H/s (Hash operations per second)
   * @return dashRate The hashrate in Hs (Hash operations per second)
   */
  suspend fun Getdashrate(): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "miner_Getdashrate", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /** Sets the extra data a miner can include when miner blocks This is capped at 32 bytes */
  suspend fun setExtra(): Void {

    val response: JsonRpcResponse<Void> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(method = "miner_setExtra", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Sets the minimal accepted gas price when mining transactions Any transactions that are below
   * this limit are excluded from the mining process
   * @param price The new minimal accepted gas price when mining transactions.
   */
  suspend fun setGasPrice(price: Long): Void {

    val response: JsonRpcResponse<Void> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "miner_setGasPrice", params = listOf(price), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Start the CPU mining process with the given number of threads and generate a new DAG if need be
   */
  suspend fun start(): Void {

    val response: JsonRpcResponse<Void> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "miner_start", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /** Stop the CPU mining operation */
  suspend fun stop(): Void {

    val response: JsonRpcResponse<Void> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "miner_stop", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Sets the etherbase, where mining rewards will go
   * @param etherbase The new etherbase.
   */
  suspend fun setEtherbase(etherbase: String): Void {

    val response: JsonRpcResponse<Void> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "miner_setEtherbase",
                  params = listOf(etherbase),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }
}
