# Class: Json\_rpc

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

## Constructors

### constructor

• **new Json_rpc**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[json_rpc.ts:24](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc.ts#L24)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[json_rpc.ts:20](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc.ts#L20)

___

### port

• `Optional` **port**: `number`

#### Defined in

[json_rpc.ts:21](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc.ts#L21)

___

### url

• **url**: `string`

#### Defined in

[json_rpc.ts:22](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc.ts#L22)

## Methods

### HTTPServer

▸ **HTTPServer**(): `Promise`<`void`\>

To enable the HTTP server, use the --http flag
 &#39;Getd --http&#39;
By default, Getd accepts connections from the loopback interface (127
0
0
1)
 The default  listening port is 8545
 You can customize address and port using  the --http
port and --http
addr flags
 &#39;Getd --http --http
port 3334&#39;
JSON-RPC method namespaces must be whitelisted in order to be available through the HTTP server
  An RPC error with error code -32602 is generated if you call a namespace that isn’t whitelisted
  The default whitelist allows access to the “etd” and “shh” namespaces
 To enable access to  other APIs like account management (“personal”) and debugging (“debug”), they must be  configured via the --http
api flag
 We do not recommend enabling such APIs over HTTP,  however, since access to these methods increases the attack surface
 &#39;Getd --http --http
api personal,etd,net,web3&#39;
Since the HTTP server is reachable from any local application, additional protection is built  into the server to prevent misuse of the API from web pages
 If you want enable access to the  API from a web page, you must configure the server to accept Cross-Origin requests with  the --http
corsdomain flag

Example: if you want to use Remix with Getd, allow requests from the remix domain
 &#39;Getd --http --http
corsdomain https://remix
ethereum
org&#39; Use --http
corsdomain &#39;*&#39; to enable access from any origin

#### Returns

`Promise`<`void`\>

#### Defined in

[json_rpc.ts:61](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc.ts#L61)

___

### IPCServer

▸ **IPCServer**(): `Promise`<`void`\>

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

#### Returns

`Promise`<`void`\>

#### Defined in

[json_rpc.ts:119](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc.ts#L119)

___

### WebSocketServer

▸ **WebSocketServer**(): `Promise`<`void`\>

Configuration of the WebSocket endpoint is similar to the HTTP transport
 To enable WebSocket  access, use --ws flag
 The default WebSocket port is 8546
  The --ws
addr, --ws
port and --ws
api flags can be used to customize settings for the  WebSocket server
 &#39;Getd --ws --ws
port 3334 --ws
api etd,net,web3&#39;
Cross-Origin request protection also applies to the WebSocket server
  Use the --ws
origins flag to allow access to the server from web pages: &#39;Getd --ws --ws
origins http://myapp
example
com&#39;
As with --http
corsdomain, using --ws
origins &#39;*&#39; allows access from any origin

#### Returns

`Promise`<`void`\>

#### Defined in

[json_rpc.ts:93](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/json_rpc.ts#L93)
