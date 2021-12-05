data class Post(val title: String)

suspend fun main() {
    val url = System.getenv("url")
    val json_rpc = Json_rpc_methods(url = url)
    val number = json_rpc.gasPrice()
    println(number)
}