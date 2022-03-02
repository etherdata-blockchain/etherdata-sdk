package com.etd

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * The personal API manages private keys in the key store
 */
class Personal(val url: String) {
    data class Tx(val from: String, val to: String, val value: Any)


    private val client = HttpClient() {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
    }

    /**
     * Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase
     *  Returns the address of the new account
     * @param priveteKey An unencrypted private key (hex string)
     * @return accountAddress The address of the new account.
     */
    suspend fun importRawKey(priveteKey: String): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body =
                JsonRpcRequest(method = "personal_importRawKey", params = listOf(priveteKey), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Returns all the Ethereum account addresses of all keys in the key store
     * @return accountAddress The list of ethereum account addresses
     */
    suspend fun listAccounts(): List<String> {

        val response: JsonRpcResponse<List<String>> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "personal_listAccounts", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Removes the private key with given address from memory
     *  The account can no longer be used to send transactions
     */
    suspend fun lockAccount(): Void {

        val response: JsonRpcResponse<Void> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "personal_lockAccount", params = listOf(), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Generates a new private key and stores it in the key store directory
     *  The key file is encrypted with the given passphrase
     *  Returns the address of the new account
     *
    At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument
     * @param passphrase The passphrase used to generate a new private key
     * @return priveteKey The generated priveteKey
     */
    suspend fun newAccount(passphrase: String): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "personal_newAccount", params = listOf(passphrase), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * Decrypts the key with the given address from the key store
     *
    Both passphrase and unlock duration are optional when using the JavaScript console
     *  If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively
     *
    The unencrypted key will be held in memory until the unlock duration expires
     *  If the unlock duration defaults to 300 seconds
     *  An explicit duration of zero seconds unlocks the key until Getd exits
     *
    The account can be used with etd_sign and etd_sendTransaction while it is unlocked
     * @param accountAddress The account address
     * @param passphrase The passphrase If you want to type in the passphrase and stil override the default unlock duration, pass null as the passphrase.
     * @param unlockDuration The unlock duration
     * @return unlockState Indicating whether is the account unlocked successfully
     */
    suspend fun unlockAccount(accountAddress: String, passphrase: String, unlockDuration: Long): Boolean {

        val response: JsonRpcResponse<Boolean> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(
                method = "personal_unlockAccount",
                params = listOf(accountAddress, passphrase, unlockDuration),
                jsonrpc = "2.0",
                id = 1
            )
        }
        return response.result

    }

    /**
     * Validate the given passphrase and submit transaction
     *
    The transaction is the same argument as for etd_sendTransaction and contains the from address
     *  If the passphrase can be used to decrypt the private key belogging to tx
     * from the transaction is verified, signed and send onto the network
     *  The account is not unlocked globally in the node and cannot be used in other RPC calls
     *
    Note, prior to Getd 1
     * 5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version
     *
    Example &#39;&gt; var tx = {from&#39;:&#39; &quot;0x391694e7e0b0cce554cb130d723a9d27458f9298&quot;, to&#39;:&#39; &quot;0xafa3f8684e54059998bc3a7b0d2b0da075154d66&quot;, value&#39;:&#39; web3
     * toWei(1
     * 23, &quot;ether&quot;)} undefined &quot;&gt; personal
     * sendTransaction(tx, &quot;passphrase&quot;)&quot; 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f&#39;
     * @param tx The transaction
     * @return address The address
     */
    suspend fun sendTransaction(tx: Tx): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "personal_sendTransaction", params = listOf(tx), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * The sign method calculates an Ethereum specific signature with &#39; sign(keccack256(&quot;\x19Ethereum Signed Message:\n&quot; + len(message) + message)))
     *  &#39;
    By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature
     *  This prevents misuse where a malicious DApp can sign arbitrary data (e
     * g
     *  transaction) and use the signature to impersonate the victim
     *
    See ecRecover to verify the signature
     * @param a abcde
     * @param b abcde
     * @param c abcde
     * @return value abcde
     */
    suspend fun sign(a: String, b: String, c: String): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "personal_sign", params = listOf(a, b, c), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

    /**
     * ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign
     * @param a abcde
     * @param b abcde
     * @return address The address associated with the private key
     */
    suspend fun ecRecover(a: String, b: String): String {

        val response: JsonRpcResponse<String> = client.post(url) {
            contentType(ContentType.Application.Json)
            body = JsonRpcRequest(method = "personal_ecRecover", params = listOf(a, b), jsonrpc = "2.0", id = 1)
        }
        return response.result

    }

}