#### to\_dict

```python
def to_dict(data: Dict) -> Dict[str, Any]
```

Given a dictionary with python data class as its value,
convert it to json format

#### convert\_dataclass

```python
def convert_dataclass(value) -> Union[Dict, int, float, bool, str, List]
```

Helper class. Recursively convert value into json format
#### Arguments
value: Any value

#### Returns

value: Converted value

