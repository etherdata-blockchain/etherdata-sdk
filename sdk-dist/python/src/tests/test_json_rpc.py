import json
import unittest

import httpretty
import pytest

from src.etherdata_sdk.exception import RPCException
from src.etherdata_sdk.json_rpc.json_rpc_methods import JsonRpcMethods


class TestJsonRPCMethods(unittest.TestCase):
    def setUp(self) -> None:
        self.url = "http://localhost:3000"

    @httpretty.activate(allow_net_connect=False)
    def test_rpc_call(self):
        response = {
            "result": "0"
        }
        httpretty.register_uri(httpretty.POST, self.url + "/", body=json.dumps(response))
        rpc = JsonRpcMethods(self.url)
        rpc.block_number()

    @httpretty.activate(allow_net_connect=False)
    def test_rpc_call_failed(self):
        response = {
            "error": {
                "message": "Wrong address"
            }
        }
        httpretty.register_uri(httpretty.POST, self.url + "/", body=json.dumps(response))
        rpc = JsonRpcMethods(self.url)
        with pytest.raises(RPCException):
            rpc.block_number()