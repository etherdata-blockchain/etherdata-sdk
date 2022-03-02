package com.etd

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing
 */
class Txpool(val url: String) {
    data class Transaction(
        val blockHash: String,
        val blockNumber: Long,
        val from: String,
        val gas: String,
        val gasPrice: String,
        val hash: String,
        val input: String,
        val nonce: String,
        val to: String,
        val transactionIndex: Long,
        val value: String
    )

    data class PendingTransactions(val transaction: List<Transaction>)

    data class QueuedTransactions(val transaction: List<Transaction>)

    data class ContentResponseTransactionObject(
        val pendingTransactions: List<PendingTransactions>,
        val queuedTransactions: List<QueuedTransactions>
    )

    data class TransactionArray(val transaction: String)

    data class InspectResponseTransactionObject(
        val pendingTransactions: List<PendingTransactions>,
        val queuedTransactions: List<QueuedTransactions>
    )

    data class StatusResponseStatusObject(val pending: Long, val queued: Long)


    private val client = HttpClient() {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
    }

    /**
     * The content inspection property can be queried to list the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
     *
    The result is an object with two fields pending and queued
     *  Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
     *  These batches themselves are maps associating nonces with actual transactions
     *
    Please note, there may be multiple transactions associated with the same account and nonce
     *  This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
     * @return transactionObject The return transaction object
     */
    suspend fun content(): ContentResponseTransactionObject {

        val response: JsonRpcResponse<ContentResponseTransactionObject> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "txpool_content", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The inspect inspection property can be queried to list a textual summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
     *  This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues
     *
    The result is an object with two fields pending and queued
     *  Each of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions
     *  These batches themselves are maps associating nonces with transactions summary strings
     *
    Please note, there may be multiple transactions associated with the same account and nonce
     *  This can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)
     * @return transactionObject the return transcation object
     */
    suspend fun inspect(): InspectResponseTransactionObject {

        val response: JsonRpcResponse<InspectResponseTransactionObject> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "txpool_inspect", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only
     *
    The result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state
     * @return statusObject An object containing transaction status
     */
    suspend fun status(): StatusResponseStatusObject {

        val response: JsonRpcResponse<StatusResponseStatusObject> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "txpool_status", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

}