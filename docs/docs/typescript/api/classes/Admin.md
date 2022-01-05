# Class: Admin

The admin API gives you access to several non-standard RPC methods,  which will allow you to have a fine grained control over your Getd instance,  including but not limited to network peer and RPC endpoint management

## Constructors

### constructor

• **new Admin**(`baseURL`, `port?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `port?` | `number` |

#### Defined in

[admin.ts:46](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L46)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[admin.ts:42](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L42)

___

### port

• `Optional` **port**: `number`

#### Defined in

[admin.ts:43](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L43)

___

### url

• **url**: `string`

#### Defined in

[admin.ts:44](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L44)

## Methods

### addPeer

▸ **addPeer**(`enode`): `Promise`<`boolean`\>

The addPeer administrative method requests adding a new remote node to the list of tracked static nodes
 The node will try to maintain connectivity to these nodes at all times, reconnecting every once in a while if the remote connection goes down
 The method accepts a single argument, the enode URL of the remote peer to start tracking and returns a BOOL indicating whether the peer was accepted for tracking or some error occurred

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enode` | `string` | The enode URL of the remote peer to start tracking |

#### Returns

`Promise`<`boolean`\>

accepted Indicating whether the peer was accepted for tracking or some error occurred.

#### Defined in

[admin.ts:58](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L58)

___

### datadir

▸ **datadir**(): `Promise`<`string`\>

The datadir administrative property can be queried for the absolute path the running Getd node currently uses to store all its databases

#### Returns

`Promise`<`string`\>

absPath The absolute path that the running Getd node is currently using to store all its databases

#### Defined in

[admin.ts:73](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L73)

___

### nodeInfo

▸ **nodeInfo**(): `Promise`<`NodeInfoResponseNodeInfo`\>

The nodeInfo administrative property can be queried for all the information known about the running Getd node at the networking granularity
 These include general information about the node itself as a participant of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
g
 etd, les, shh, bzz)

#### Returns

`Promise`<`NodeInfoResponseNodeInfo`\>

nodeInfo Get all the information known about the running Getd node at the networking granularity

#### Defined in

[admin.ts:91](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L91)

___

### peers

▸ **peers**(): `Promise`<`PeersArray`[]\>

The peers administrative property can be queried for all the information known about the connected remote nodes at the networking granularity
 These include general information about the nodes themselves as participants of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
g
 etd, les, shh, bzz)

#### Returns

`Promise`<`PeersArray`[]\>

peersArray All the information known about the connected remote nodes

#### Defined in

[admin.ts:109](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L109)

___

### startRPC

▸ **startRPC**(`host`, `port`, `cors`, `apis`): `Promise`<`boolean`\>

The startRPC administrative method starts an HTTP based JSON RPC API webserver to handle client requests
 All the parameters are optional

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `host` | `undefined` \| `string` | Network interface to open the listener socket on (defaults to &quot;localhost&quot;) |
| `port` | `undefined` \| `number` | Network port to open the listener socket on (defaults to 8545) |
| `cors` | `undefined` \| `string` | cross-origin resource sharing header to use (defaults to &quot;&quot;) |
| `apis` | `undefined` \| `string` | API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;) |

#### Returns

`Promise`<`boolean`\>

hTTPlistenerOpen A boolean flag specifying whether the HTTP RPC listener was opened or not. Please note, only one HTTP endpoint is allowed to be active at any time.

#### Defined in

[admin.ts:129](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L129)

___

### startWS

▸ **startWS**(`host`, `port`, `cors`, `apis`): `Promise`<`boolean`\>

The startWS administrative method starts an WebSocket based JSON RPC API webserver to handle client requests
 All the parameters are optional

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `host` | `undefined` \| `string` | Network interface to open the listener socket on (defaults to &quot;localhost&quot;) |
| `port` | `undefined` \| `number` | Network port to open the listener socket on (defaults to 8546) |
| `cors` | `undefined` \| `string` | cross-origin resource sharing header to use (defaults to &quot;&quot;) |
| `apis` | `undefined` \| `string` | API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;) |

#### Returns

`Promise`<`boolean`\>

wEBlistenerOpen A boolean flag specifying whether the WebSocket RPC listener was opened or not. Please note, only one WebSocket endpoint is allowed to be active at any time.

#### Defined in

[admin.ts:154](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L154)

___

### stopRPC

▸ **stopRPC**(): `Promise`<`boolean`\>

The stopRPC administrative method closes the currently open HTTP RPC endpoint
 As the node can only have a single HTTP endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not

#### Returns

`Promise`<`boolean`\>

hTTPendpointClosed A boolean indicating whether the endpoint was closed or not.

#### Defined in

[admin.ts:175](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L175)

___

### stopWS

▸ **stopWS**(): `Promise`<`boolean`\>

The stopWS administrative method closes the currently open WebSocket RPC endpoint
 As the node can only have a single WebSocket endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not

#### Returns

`Promise`<`boolean`\>

wEBendpointClosed A boolean indicating whether the endpoint was closed or not.

#### Defined in

[admin.ts:191](https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/admin.ts#L191)
