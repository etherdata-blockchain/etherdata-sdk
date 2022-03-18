from copy import deepcopy
from typing import Dict, Any, Union, List
from dataclasses import is_dataclass
from dataclasses_json import DataClassJsonMixin


def to_dict(data: Dict) -> Dict[str, Any]:
    """
    Given a dictionary with python data class as its value,
    convert it to json format
    """
    copied = deepcopy(data)
    convert_dataclass(copied)
    return copied


def convert_dataclass(value) -> Union[Dict, int, float, bool, str, List]:
    """
    Helper class. Recursively convert value into json format
    #### Arguments
    value: Any value

    #### Returns

    value: Converted value
    """
    if is_dataclass(value):
        value: DataClassJsonMixin
        return value.to_dict()

    if type(value) == dict:
        value: Dict
        for key, val in value.items():
            converted_value = convert_dataclass(val)
            value[key] = converted_value

    return value
