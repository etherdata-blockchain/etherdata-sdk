import json
import unittest
from unittest import TestCase
import tempfile
from unittest.mock import patch

import httpretty
import pytest

from src.etherdata_sdk import File, FileObject


class TestFileUpload(TestCase):
    def setUp(self) -> None:
        self.url = "http://localhost"

    @httpretty.activate(allow_net_connect=False)
    def test_simple_upload(self):
        response = {
            "code": 0,
            "msg": "",
            "data": {
                "afid": "abc",
                "isExist": False
            }
        }
        httpretty.register_uri(httpretty.POST, self.url + "/un/file", body=json.dumps(response))
        file = File(url=self.url)
        file_obj = FileObject(file_object=tempfile.TemporaryFile(mode="rb"))
        file_response = file.upload_file(file=file_obj)
        self.assertEqual(file_response, "abc")

    @httpretty.activate(allow_net_connect=False)
    def test_simple_upload_failed(self):
        response = {
            "code": 0,
            "msg": "",
            "data": {
                "afid": "abc",
                "isExist": True
            }
        }
        httpretty.register_uri(httpretty.POST, self.url + "/un/file", body=json.dumps(response))
        file = File(url=self.url)
        file_obj = FileObject(file_object=tempfile.TemporaryFile(mode="rb"))

        with pytest.raises(FileExistsError):
            file.upload_file(file=file_obj)


class TestFileDownload(TestCase):
    def setUp(self) -> None:
        self.url = "http://localhost"

    @httpretty.activate(allow_net_connect=False)
    def test_simple_upload(self):
        httpretty.register_uri(httpretty.GET, self.url + "/dn/file/abc")
        file = File(url=self.url)
        with patch('builtins.open', unittest.mock.mock_open()) as m:
            file.download_file(download_path="test", file_id="abc")
            m.assert_called_once_with("test", "wb")

