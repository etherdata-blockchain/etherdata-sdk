from eth_account.signers.local import LocalAccount

from .api import AccountAPI
from eth_account import Account


class CreateAPI(AccountAPI):
    def create_random_private_key(self):
        """
        Create a random private key
        """

        account: LocalAccount = Account().create()

        self.address = account.address
        self.private_key = account.key

        return self

    def create_private_key_from_mnemonic(self, mnemonic: str):
        """
        Create a private key from mnemonic

        #### Arguments

        mnemonic: Mnemonic by user
        """
        Account.enable_unaudited_hdwallet_features()
        account: LocalAccount = Account().create_with_mnemonic()[0]

        self.address = account.address
        self.private_key = account.key
        return self

    def read_private_key_from_file(self, file_path: str):
        """
        will read private key from file

        #### Arguments

        file_path: Private key's location
        """
        with open(file_path, "r") as f:
            private_key = f.read()
            account = Account().from_key(private_key)
            self.address = account.address
            self.private_key = account.key
        return self
