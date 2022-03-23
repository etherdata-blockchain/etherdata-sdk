from unittest import TestCase
import unittest.mock as um
from src.etherdata_sdk.account import Account, Transaction


class TestAccountAPI(TestCase):
    def setUp(self) -> None:
        self.account = Account()

    def test_create_account(self):
        self.account.create_random_private_key()
        self.assertGreater(len(self.account.private_key), 0)
        self.assertGreater(len(self.account.address), 0)

    def test_create_with_mnemonic(self):
        mnemonic = "entire tail someone assault turtle spin brick budget verb frequent raise lend pioneer gravity loan"
        self.account.create_private_key_from_mnemonic(mnemonic)
        self.assertGreater(len(self.account.private_key), 0)
        self.assertGreater(len(self.account.address), 0)

    def test_create_from_file(self):
        self.account.create_random_private_key()
        prev_address = self.account.address
        prev_key = self.account.private_key
        with um.patch('builtins.open', um.mock_open(read_data=self.account.private_key)):
            self.account.private_key = ""
            self.account.address = ""
            self.account.read_private_key_from_file("abc.key")
            self.assertEqual(self.account.private_key, prev_key)
            self.assertEqual(self.account.address, prev_address)


class TestSignAPI(TestCase):
    def setUp(self) -> None:
        self.from_account = Account().create_random_private_key()
        self.to_account = Account().create_random_private_key()

    def test_sign_transaction(self):
        transaction = Transaction(to=self.to_account.address, value=30000, gas=1000, gas_price=300, nonce=1)
        signed = self.from_account.sign_transaction(transaction)
        self.assertIsNotNone(signed)
        self.assertIsNotNone(signed.r)
        self.assertIsNotNone(signed.s)
        self.assertIsNotNone(signed.v)
        self.assertIsNotNone(signed.raw_transaction)
        self.assertIsNotNone(signed.hash)
