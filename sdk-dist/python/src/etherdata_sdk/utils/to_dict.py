from copy import deepcopy
from typing import Dict, Any
from dataclasses import is_dataclass
from dataclasses_json import DataClassJsonMixin


def to_dict(data: Dict) -> Dict[str, Any]:
    copied = deepcopy(data)
    convert_dataclass(copied)
    return copied


def convert_dataclass(value):
    if is_dataclass(value):
        value: DataClassJsonMixin
        return value.to_dict()

    if type(value) == dict:
        value: Dict
        for key, val in value.items():
            converted_value = convert_dataclass(val)
            value[key] = converted_value

    return value
