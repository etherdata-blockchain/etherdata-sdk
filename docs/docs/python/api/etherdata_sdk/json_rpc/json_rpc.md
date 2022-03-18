---
sidebar_label: json_rpc
title: etherdata_sdk.json_rpc.json_rpc
---

## JsonRpc Objects

```python
class JsonRpc()
```

Getd supports all standard web3 JSON-RPC APIs
 You can find documentation for these APIs on the  Ethereum Wiki JSON-RPC page

JSON-RPC is provided on multiple transports
 Getd supports JSON-RPC over HTTP, WebSocket and Unix  Domain Sockets
 Transports must be enabled through command-line flags

Ethereum JSON-RPC APIs use a name-space system
 RPC methods are grouped into several categories  depending on their purpose
 All method names are composed of the namespace, an underscore, and the  actual method name within the namespace
 For example, the eth_call method resides in the etd  namespace

Access to RPC methods can be enabled on a per-namespace basis
 Find documentation for individual  namespaces in the sidebar

#### h\_t\_t\_p\_server

```python
def h_t_t_p_server() -> None
```

To enable the HTTP server, use the --http flag
&#x27;Getd --http&#x27;
By default, Getd accepts connections from the loopback interface (127
0
0
1)
The default  listening port is 8545
You can customize address and port using  the --http
port and --http
addr flags
&#x27;Getd --http --http
port 3334&#x27;
JSON-RPC method namespaces must be whitelisted in order to be available through the HTTP server
An RPC error with error code -32602 is generated if you call a namespace that isn’t whitelisted
The default whitelist allows access to the “etd” and “shh” namespaces
To enable access to  other APIs like account management (“personal”) and debugging (“debug”), they must be  configured via the --http
api flag
We do not recommend enabling such APIs over HTTP,  however, since access to these methods increases the attack surface
&#x27;Getd --http --http
api personal,etd,net,web3&#x27;
Since the HTTP server is reachable from any local application, additional protection is built  into the server to prevent misuse of the API from web pages
If you want enable access to the  API from a web page, you must configure the server to accept Cross-Origin requests with  the --http
corsdomain flag

Example: if you want to use Remix with Getd, allow requests from the remix domain
&#x27;Getd --http --http
corsdomain https://remix
ethereum
org&#x27; Use --http
corsdomain &#x27;*&#x27; to enable access from any origin

#### web\_socket\_server

```python
def web_socket_server() -> None
```

Configuration of the WebSocket endpoint is similar to the HTTP transport
 To enable WebSocket  access, use --ws flag
 The default WebSocket port is 8546
  The --ws
addr, --ws
port and --ws
api flags can be used to customize settings for the  WebSocket server
 &#x27;Getd --ws --ws
port 3334 --ws
api etd,net,web3&#x27;
Cross-Origin request protection also applies to the WebSocket server
  Use the --ws
origins flag to allow access to the server from web pages: &#x27;Getd --ws --ws
origins http://myapp
example
com&#x27;
As with --http
corsdomain, using --ws
origins &#x27;*&#x27; allows access from any origin

#### i\_p\_c\_server

```python
def i_p_c_server() -> None
```

JSON-RPC APIs are also provided on a UNIX domain socket
 This server is enabled by default  and has access to all JSON-RPC namespaces

The listening socket is placed into the data directory by default
 On Linux and macOS, the  default location of the Getd socket is ~/
ethereum/Getd
ipc
On Windows, IPC is provided via named pipes
 The default location of the Getd pipe is: //
/pipe/Getd
ipc
You can configure the location of the socket using the --ipcpath flag
 IPC can be disabled  using the --ipcdisable flag

