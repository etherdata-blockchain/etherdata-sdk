data class Post(val title: String)

suspend fun main() {
    val url = "https://debug.etdchain.net/hdkEtd@Themoon"
    val json_rpc = Json_rpc_methods(url = url)
    val number = json_rpc.syncing()
    println(number)
}