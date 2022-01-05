//[kotlin](../../../index.md)/[com.etd](../index.md)/[Json_rpc_methods](index.md)/[getWork](get-work.md)

# getWork

[jvm]\
suspend fun [getWork](get-work.md)(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;

Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)

#### Return

array Array with the following properties -DATA, 32 Bytes - current block header pow-hash -DATA, 32 Bytes - the seed hash used for the DAG. -DATA, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.
