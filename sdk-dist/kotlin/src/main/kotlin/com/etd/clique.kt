package com.etd

import io.ktor.client.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * The clique API provides access to the state of the clique consensus engine
 *  You can use this API to manage signer votes and to check the health of a private network
 */
class Clique(val url: String) {
    data class GetSnapshotResponseRecents(val number: List<String>)

    data class GetSnapshotResponseSigners(val signer: List<String>)

    data class GetSnapshotResponseSnapshot(
        val hash: String,
        val number: Long,
        val recents: GetSnapshotResponseRecents,
        val signers: GetSnapshotResponseSigners
    )

    data class StatusResponseSealerActivity(val signerAddresses: String, val numBlocksSigned: Long)

    data class StatusResponse(
        val inturnPercent: Long,
        val sealerActivity: StatusResponseSealerActivity,
        val numBlocks: Long,
    )


    private val client = HttpClient {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
    }

    /**
     * Retrieves a snapshot of all clique state at a given block
     * @param number The number of the block
     * @return snapshot Snapshot of all clique state at the given block
     */
    suspend fun getSnapshot(number: Long): GetSnapshotResponseSnapshot {

        val response: JsonRpcResponse<GetSnapshotResponseSnapshot> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "clique.getSnapshot", params = listOf(number), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Retrieves the state snapshot at a given block
     * @return ststeSnapshot The tate snapshot at the block.
     */
    suspend fun getSnapshotAtHash(): Any {

        val response: JsonRpcResponse<Any> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "clique_getSnapshotAtHash", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Retrieves the list of authorized signers at the specified block
     * @return signerArray The list of authorized signers
     */
    suspend fun getSigners(): List<String> {

        val response: JsonRpcResponse<List<String>> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "clique_getSigners", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Returns the current proposals the node is voting on
     * @return proposal The current proposals
     */
    suspend fun proposals(): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "clique_proposals", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Adds a new authorization proposal that the signer will attempt to push through
     *  If the auth parameter is true, the local signer votes for the given address to be included in the set of authorized signers
     *  With auth set to false, the vote is against the address
     */
    suspend fun propose(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "clique_propose", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * This method drops a currently running proposal
     *  The signer will not cast further votes (either for or against) the address
     */
    suspend fun discard(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "clique_discard", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * This is a debugging method which returns statistics about signer activity for the last 64 blocks
     * @return inturnPercent Percentage of blocks signed in-turn
     * @return sealerActivity A object containing signer addresses and the number of blocks signed by them
     * @return numBlocks The number of blocks analyzed
     */
    suspend fun status(): StatusResponse {

        val response: JsonRpcResponse<StatusResponse> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "clique_status", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

}