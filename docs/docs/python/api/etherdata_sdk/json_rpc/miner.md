## Miner Objects

```python
class Miner()
```

The miner API allows you to remote control the node’s mining operation and set various mining specific settings

#### \_\_init\_\_

```python
def __init__(url: str)
```

#### getdashrate

```python
def getdashrate() -> str
```

Get your hashrate in H/s (Hash operations per second)
#### Returns

dashRate: The hashrate in Hs (Hash operations per second)

#### set\_extra

```python
def set_extra() -> None
```

Sets the extra data a miner can include when miner blocks
 This is capped at 32 bytes

#### set\_gas\_price

```python
def set_gas_price(price_float) -> None
```

Sets the minimal accepted gas price when mining transactions
 Any transactions that are below this limit are excluded from the mining process
#### Arguments

price: The new minimal accepted gas price when mining transactions.

#### start

```python
def start() -> None
```

Start the CPU mining process with the given number of threads and generate a new DAG if need be

#### stop

```python
def stop() -> None
```

Stop the CPU mining operation

#### set\_etherbase

```python
def set_etherbase(etherbase_str) -> None
```

Sets the etherbase, where mining rewards will go
#### Arguments

etherbase: The new etherbase.

