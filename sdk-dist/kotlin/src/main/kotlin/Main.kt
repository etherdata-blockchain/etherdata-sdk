import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

data class Post(val title: String)

suspend fun main() {
    val url = "https://debug.etdchain.net/hdkEtd@Themoon"
    val json_rpc = Json_rpc_methods(url=url)
    val number = json_rpc.syncing()
    println(number)
}