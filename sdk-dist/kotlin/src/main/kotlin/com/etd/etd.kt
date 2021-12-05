import com.etd.JsonRpcRequest
import com.etd.JsonRpcResponse
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * Getd provides several extensions to the standard etd JSON-RPC namespace
 */
class Etd(val url: String) {

    private val client = HttpClient {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
    }

    /**
     * This method is used for real-time events through subscriptions
     *  See the subscription documentation for more information
     */
    suspend fun subscribe(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "eth_subscribe", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * This method is used for real-time events through subscriptions
     *  See the subscription documentation for more information
     */
    suspend fun unsubscribe(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "eth_unsubscribe", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

}