from unittest import TestCase
from dataclasses_json import dataclass_json
from dataclasses import dataclass
from src.etherdata_sdk import to_dict


@dataclass_json
@dataclass
class Person:
    name: str


class TestUtils(TestCase):
    def test_convert_data_class(self):
        person = Person(name="Hello world")
        converted = to_dict({"a": person})
        self.assertDictEqual(converted, {"a": {"name": "Hello world"}})
