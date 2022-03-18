---
sidebar_label: clique
title: etherdata_sdk.json_rpc.clique
---

## GetSnapshotResponseRecents Objects

```python
@dataclass_json

@dataclass
class GetSnapshotResponseRecents()
```

#### number

The addresses of prevoious blocks

## GetSnapshotResponseSigners Objects

```python
@dataclass_json

@dataclass
class GetSnapshotResponseSigners()
```

#### signer

The signer

## GetSnapshotResponseSnapshot Objects

```python
@dataclass_json

@dataclass
class GetSnapshotResponseSnapshot()
```

#### hash

The hash of the block

#### number

The number of the block

#### recents

The details of previous blocks

#### signers

An object containing an arrry of signers

## StatusResponseSealerActivity Objects

```python
@dataclass_json

@dataclass
class StatusResponseSealerActivity()
```

#### signerAddresses

The signer addresses

#### numBlocksSigned

The number of blocks signed by signers

## StatusResponse Objects

```python
@dataclass_json

@dataclass
class StatusResponse()
```

#### inturnPercent

Percentage of blocks signed in-turn

#### sealerActivity

A object containing signer addresses and the number of blocks signed by them

#### numBlocks

The number of blocks analyzed

## Clique Objects

```python
class Clique()
```

The clique API provides access to the state of the clique consensus engine
 You can use this API to manage signer votes and to check the health of a private network

#### get\_snapshot

```python
def get_snapshot(number: float) -> GetSnapshotResponseSnapshot
```

Retrieves a snapshot of all clique state at a given block
#### Arguments

number: The number of the block
#### Returns [`GetSnapshotResponseSnapshot`](#getsnapshotresponsesnapshot-objects)

snapshot: Snapshot of all clique state at the given block

#### get\_snapshot\_at\_hash

```python
def get_snapshot_at_hash() -> Any
```

Retrieves the state snapshot at a given block
#### Returns

ststeSnapshot: The tate snapshot at the block.

#### get\_signers

```python
def get_signers() -> List[str]
```

Retrieves the list of authorized signers at the specified block
#### Returns

signerArray: The list of authorized signers

#### proposals

```python
def proposals() -> str
```

Returns the current proposals the node is voting on
#### Returns

proposal: The current proposals

#### propose

```python
def propose() -> None
```

Adds a new authorization proposal that the signer will attempt to push through
 If the auth parameter is true, the local signer votes for the given address to be included in the set of authorized signers
 With auth set to false, the vote is against the address

#### discard

```python
def discard() -> None
```

This method drops a currently running proposal
 The signer will not cast further votes (either for or against) the address

#### status

```python
def status() -> StatusResponse
```

This is a debugging method which returns statistics about signer activity for the last 64 blocks
#### Returns [`StatusResponse`](#statusresponse-objects)

inturnPercent: Percentage of blocks signed in-turn
sealerActivity: A object containing signer addresses and the number of blocks signed by them
numBlocks: The number of blocks analyzed

