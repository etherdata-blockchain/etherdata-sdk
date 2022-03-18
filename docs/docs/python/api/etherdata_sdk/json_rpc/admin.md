---
sidebar_label: admin
title: etherdata_sdk.json_rpc.admin
---

## NodeInfoResponsePorts Objects

```python
@dataclass_json

@dataclass
class NodeInfoResponsePorts()
```

#### discovery

The discovery of the port

#### listener

The listener of the port

## NodeInfoResponseNodeInfo Objects

```python
@dataclass_json

@dataclass
class NodeInfoResponseNodeInfo()
```

#### enode

The enode

#### id

The id of the node

#### ip

The ip of the node

#### listenAddr

The listen address of the node

#### ports

The Object if the port

## Network Objects

```python
@dataclass_json

@dataclass
class Network()
```

#### localAddress

The local address of each peer

#### remoteAddress

The remote address of each peer

## Etd Objects

```python
@dataclass_json

@dataclass
class Etd()
```

#### difficulty

The difficulty of the protocal

#### head

The head of the protocal

#### version

The version of the protocal

## Protocols Objects

```python
@dataclass_json

@dataclass
class Protocols()
```

#### etd

The details of ETD protocal

## PeersArray Objects

```python
@dataclass_json

@dataclass
class PeersArray()
```

#### caps

The caps of each peer

#### id

The id of each peer

#### name

The name of each peer

#### network

The network environment of each peer

#### protocols

The protocol(s) used by each peer

## Admin Objects

```python
class Admin()
```

The admin API gives you access to several non-standard RPC methods,  which will allow you to have a fine grained control over your Getd instance,  including but not limited to network peer and RPC endpoint management

#### add\_peer

```python
def add_peer(enode: str) -> bool
```

The addPeer administrative method requests adding a new remote node to the list of tracked static nodes
 The node will try to maintain connectivity to these nodes at all times, reconnecting every once in a while if the remote connection goes down
 The method accepts a single argument, the enode URL of the remote peer to start tracking and returns a BOOL indicating whether the peer was accepted for tracking or some error occurred
#### Arguments

enode: The enode URL of the remote peer to start tracking
#### Returns

accepted: Indicating whether the peer was accepted for tracking or some error occurred.

#### datadir

```python
def datadir() -> str
```

The datadir administrative property can be queried for the absolute path the running Getd node currently uses to store all its databases
#### Returns

absPath: The absolute path that the running Getd node is currently using to store all its databases

#### node\_info

```python
def node_info() -> NodeInfoResponseNodeInfo
```

The nodeInfo administrative property can be queried for all the information known about the running Getd node at the networking granularity
 These include general information about the node itself as a participant of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
g
 etd, les, shh, bzz)
#### Returns [`NodeInfoResponseNodeInfo`](#nodeinforesponsenodeinfo-objects)

nodeInfo: Get all the information known about the running Getd node at the networking granularity

#### peers

```python
def peers() -> List[PeersArray]
```

The peers administrative property can be queried for all the information known about the connected remote nodes at the networking granularity
 These include general information about the nodes themselves as participants of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
g
 etd, les, shh, bzz)
#### Returns `List`[PeersArray]

peersArray: All the information known about the connected remote nodes

#### start\_r\_p\_c

```python
def start_r_p_c(host: optional[str], port: optional[float],
                cors: optional[str], apis: optional[str]) -> bool
```

The startRPC administrative method starts an HTTP based JSON RPC API webserver to handle client requests
 All the parameters are optional
#### Arguments

host: Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
port: Network port to open the listener socket on (defaults to 8545)
cors: cross-origin resource sharing header to use (defaults to &quot;&quot;)
apis: API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
#### Returns

hTTPlistenerOpen: A boolean flag specifying whether the HTTP RPC listener was opened or not. Please note, only one HTTP endpoint is allowed to be active at any time.

#### start\_w\_s

```python
def start_w_s(host: optional[str], port: optional[float], cors: optional[str],
              apis: optional[str]) -> bool
```

The startWS administrative method starts an WebSocket based JSON RPC API webserver to handle client requests
 All the parameters are optional
#### Arguments

host: Network interface to open the listener socket on (defaults to &quot;localhost&quot;)
port: Network port to open the listener socket on (defaults to 8546)
cors: cross-origin resource sharing header to use (defaults to &quot;&quot;)
apis: API modules to offer over this interface (defaults to &quot;etd,net,web3&quot;)
#### Returns

wEBlistenerOpen: A boolean flag specifying whether the WebSocket RPC listener was opened or not. Please note, only one WebSocket endpoint is allowed to be active at any time.

#### stop\_r\_p\_c

```python
def stop_r_p_c() -> bool
```

The stopRPC administrative method closes the currently open HTTP RPC endpoint
 As the node can only have a single HTTP endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
#### Returns

hTTPendpointClosed: A boolean indicating whether the endpoint was closed or not.

#### stop\_w\_s

```python
def stop_w_s() -> bool
```

The stopWS administrative method closes the currently open WebSocket RPC endpoint
 As the node can only have a single WebSocket endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
#### Returns

wEBendpointClosed: A boolean indicating whether the endpoint was closed or not.

