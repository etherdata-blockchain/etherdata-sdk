package com.etd

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*

/**
* Getd v1
* 4 and later support publish / subscribe using JSON-RPC notifications
*   This allows clients to wait for events instead of polling for them
* 
It works by subscribing to particular events
*  The node will return a subscription id
*   For each event that matches the subscription a notification with relevant data is send toGetder  with the subscription id
* 
Considerations 1
*  Notifications are sent for current events and not for past events
*  If your use case requires  you not to miss any notifications than subscriptions are probably not the best option
*  2
*  Subscriptions require a full duplex connection
*  Getd offers such connections in the form of  WebSocket and IPC (enabled by default)
*  3
*  Subscriptions are coupled to a connection
*  If the connection is closed all subscriptions that  are created over this connection are removed
*  4
*  Notifications are stored in an internal buffer and sent from this buffer to the client
*  If the  client is unable to keep up and the number of buffered notifications reaches a  limit (currently 10k) the connection is closed
*  Keep in mind that subscribing to some events  can cause a flood of notifications, e
* g
*  listening for all logs/blocks when the node starts to  synchronize
*/
class Real_time(val url: String){
data class SubscriptionObject (val address:List<String>,val topics:List<String>)

data class SupportedSubscriptionsResponseOutputObject (val address:String,val blockHash:String,val blockNumber:String,val data:String,val logIndex:String,val topics:List<String>,val transactionHash:String,val transactionIndex:String)

data class NewPendingTransactionsResponseParams (val subscription:String,val result:String)

data class NewPendingTransactionsResponseTranscation (val jsonrpc:String,val method:String,val params:NewPendingTransactionsResponseParams)

data class NewPendingTransactionsResponse (val hash:String, val transcation:NewPendingTransactionsResponseTranscation, )

data class SyncingResponseStatus (val startingBlock:Long,val currentBlock:Long,val highestBlock:Long,val pulledStates:Long,val knownStates:Long)

data class SyncingResponse (val synchronized:Boolean, val status:SyncingResponseStatus, )


private val client = HttpClient(){
    install(JsonFeature) {
        serializer = GsonSerializer()
    }
}
/**
* Subscriptions are created with a regular RPC call with etd_subscribe as method and the subscription name as first parameter
*  If successful it returns the subscription id
* @param subscriptionName The subscription name
* @param aaaaa 
* @return subscriptionID The subscription ID
*/
suspend fun createSubscription(subscriptionName:String, aaaaa:Any): String{
    
    val response: JsonRpcResponse<String> = client.post(url){
        contentType(ContentType.Application.Json)
        body = JsonRpcRequest(method =  "real-time_createSubscription", params = listOf(subscriptionName, aaaaa), jsonrpc = "2.0", id = 1 )
    }
    return response.result
        
}

/**
* Subscriptions are cancelled with a regular RPC call with etd_unsubscribe as method and the subscription id as first parameter
*  It returns a bool indicating if the subscription was cancelled successful
* @param subscriptionID The subscription ID
* @return cancelled Indicating if the subscription was cancelled successful.
*/
suspend fun cancelSubscription(subscriptionID:String): Boolean{
    
    val response: JsonRpcResponse<Boolean> = client.post(url){
        contentType(ContentType.Application.Json)
        body = JsonRpcRequest(method =  "real-time_cancelSubscription", params = listOf(subscriptionID), jsonrpc = "2.0", id = 1 )
    }
    return response.result
        
}

/**
* newHeads -Fires a notification each time a new header is appended to the chain, including chain reorganizations
*  Users can use the bloom filter to determine if the block contains logs that are interested to them
*  -In case of a chain reorganization the subscription will emit all new headers for the new chain
*  Therefore the subscription can emit multiple headers on the same height
* 
logs -Returns logs that are included in new imported blocks and match the given filter criteria
*  -In case of a chain reorganization previous sent logs that are on the old chain will be resend with the removed property set to true
*  Logs from transactions that ended up in the new chain are emitted
*  Therefore a subscription can emit logs for the same transaction multiple times
* @param subscriptionObject The object containing different opotional transcation fields
* @return outputObject The return Object of the function
*/
suspend fun supportedSubscriptions(subscriptionObject:SubscriptionObject): SupportedSubscriptionsResponseOutputObject{
    
    val response: JsonRpcResponse<SupportedSubscriptionsResponseOutputObject> = client.post(url){
        contentType(ContentType.Application.Json)
        body = JsonRpcRequest(method =  "real-time_supportedSubscriptions", params = listOf(subscriptionObject), jsonrpc = "2.0", id = 1 )
    }
    return response.result
        
}

/**
* Returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node
*  Tansaction that was previously part of the canonical chain isn’t part of the new canonical chain after a reogranization its again emitted
* @return hash The hash for all transactions
* @return transcation The transaction
*/
suspend fun newPendingTransactions(): NewPendingTransactionsResponse{
    
    val response: JsonRpcResponse<NewPendingTransactionsResponse> = client.post(url){
        contentType(ContentType.Application.Json)
        body = JsonRpcRequest(method =  "real-time_newPendingTransactions", params = listOf(), jsonrpc = "2.0", id = 1 )
    }
    return response.result
        
}

/**
* Indicates when the node starts or stops synchronizing
*  The result can either be a boolean indicating that the synchronization has started (true), finished (false) or an object with various progress indicators
* @return synchronized Indicating that the synchronization has started (true) or finished (false)
* @return status An object with various progress indicators regarding the synchronization
*/
suspend fun syncing(): SyncingResponse{
    
    val response: JsonRpcResponse<SyncingResponse> = client.post(url){
        contentType(ContentType.Application.Json)
        body = JsonRpcRequest(method =  "real-time_syncing", params = listOf(), jsonrpc = "2.0", id = 1 )
    }
    return response.result
        
}

}