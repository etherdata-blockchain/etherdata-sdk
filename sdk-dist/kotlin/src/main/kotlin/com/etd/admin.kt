package com.etd

import io.ktor.client.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * The admin API gives you access to several non-standard RPC methods,  which will allow you to have a fine grained control over your Getd instance,  including but not limited to network peer and RPC endpoint management
 */
class Admin(val url: String) {
    data class NodeInfoResponsePorts(val discovery: Long, val listener: Long)

    data class NodeInfoResponseNodeInfo(
        val enode: String,
        val id: String,
        val ip: String,
        val listenAddr: String,
        val ports: NodeInfoResponsePorts
    )

    data class Network(val localAddress: String, val remoteAddress: String)

    data class Etd(val difficulty: Long, val head: String, val version: Long)

    data class Protocols(val etd: Etd)

    data class PeersArray(
        val caps: List<String>,
        val id: String,
        val name: String,
        val network: Network,
        val protocols: List<Protocols>
    )


    private val client = HttpClient {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
    }

    /**
     * The addPeer administrative method requests adding a new remote node to the list of tracked static nodes
     *  The node will try to maintain connectivity to these nodes at all times, reconnecting every once in a while if the remote connection goes down
     *  The method accepts a single argument, the enode URL of the remote peer to start tracking and returns a BOOL indicating whether the peer was accepted for tracking or some error occurred
     * @param enode The enode URL of the remote peer to start tracking
     * @return accepted Indicating whether the peer was accepted for tracking or some error occurred.
     */
    suspend fun addPeer(enode: String): Boolean {

        val response: JsonRpcResponse<Boolean> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "admin_addPeer", params = listOf(enode), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The datadir administrative property can be queried for the absolute path the running Getd node currently uses to store all its databases
     * @return absPath The absolute path that the running Getd node is currently using to store all its databases
     */
    suspend fun datadir(): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "admin_datadir", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The nodeInfo administrative property can be queried for all the information known about the running Getd node at the networking granularity
     *  These include general information about the node itself as a participant of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
     * g
     *  etd, les, shh, bzz)
     * @return nodeInfo Get all the information known about the running Getd node at the networking granularity
     */
    suspend fun nodeInfo(): NodeInfoResponseNodeInfo {

        val response: JsonRpcResponse<NodeInfoResponseNodeInfo> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "admin_nodeInfo", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The peers administrative property can be queried for all the information known about the connected remote nodes at the networking granularity
     *  These include general information about the nodes themselves as participants of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
     * g
     *  etd, les, shh, bzz)
     * @return peersArray All the information known about the connected remote nodes
     */
    suspend fun peers(): List<PeersArray> {

        val response: JsonRpcResponse<List<PeersArray>> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "admin_peers", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The startRPC administrative method starts an HTTP based JSON RPC API webserver to handle client requests
     *  All the parameters are optional
     * @param host Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
     * @param port Network port to open the listener socket on (defaults to 8545)
     * @param cors cross-origin resource sharing header to use (defaults to &quot;&quot;)
     * @param apis API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
     * @return hTTPlistenerOpen A boolean flag specifying whether the HTTP RPC listener was opened or not. Please note, only one HTTP endpoint is allowed to be active at any time.
     */
    suspend fun startRPC(host: String, port: Long, cors: String, apis: String): Boolean {

        val response: JsonRpcResponse<Boolean> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(
                method = "admin_startRPC",
                params = listOf(host, port, cors, apis),
                jsonrpc = "2.0",
                id = 1
            )
        }
        return response.result

    }

    /**
     * The startWS administrative method starts an WebSocket based JSON RPC API webserver to handle client requests
     *  All the parameters are optional
     * @param host Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
     * @param port Network port to open the listener socket on (defaults to 8546)
     * @param cors cross-origin resource sharing header to use (defaults to &quot;&quot;)
     * @param apis API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
     * @return wEBlistenerOpen A boolean flag specifying whether the WebSocket RPC listener was opened or not. Please note, only one WebSocket endpoint is allowed to be active at any time.
     */
    suspend fun startWS(host: String, port: Long, cors: String, apis: String): Boolean {

        val response: JsonRpcResponse<Boolean> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(
                method = "admin_startRPC",
                params = listOf(host, port, cors, apis),
                jsonrpc = "2.0",
                id = 1
            )
        }
        return response.result

    }

    /**
     * The stopRPC administrative method closes the currently open HTTP RPC endpoint
     *  As the node can only have a single HTTP endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
     * @return hTTPendpointClosed A boolean indicating whether the endpoint was closed or not.
     */
    suspend fun stopRPC(): Boolean {

        val response: JsonRpcResponse<Boolean> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "admin_stopRPC", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The stopWS administrative method closes the currently open WebSocket RPC endpoint
     *  As the node can only have a single WebSocket endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
     * @return wEBendpointClosed A boolean indicating whether the endpoint was closed or not.
     */
    suspend fun stopWS(): Boolean {

        val response: JsonRpcResponse<Boolean> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "admin_stopWS", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

}