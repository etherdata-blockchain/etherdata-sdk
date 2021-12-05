package com.etd

class JsonRpcResponse<T>(val result: T)

data class JSONString(val result: String)

data class JsonRpcRequest (
    val method: String,
    val params: List<Any>,
    val jsonrpc: String,
    val id: Long
)
