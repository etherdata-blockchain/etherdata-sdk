from unittest import TestCase
from src.etherdata_sdk.file.api import API


class TestAPI(TestCase):
    def test_join_url(self):
        api = API()
        api.url = "http://localhost"
        self.assertEqual(api.get_url("/file/upload"), "http://localhost/file/upload")

    def test_join_url_with_port(self):
        api = API()
        api.url = "http://localhost:3000"
        self.assertEqual(api.get_url("/file/upload"), "http://localhost:3000/file/upload")
