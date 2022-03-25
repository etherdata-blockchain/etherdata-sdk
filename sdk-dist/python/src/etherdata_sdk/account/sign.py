from dataclasses_json import DataClassJsonMixin
from eth_account import Account

from .api import AccountAPI
from ..types import SignedTransaction


class SignAPI(AccountAPI):
    def sign_transaction(self, transaction: DataClassJsonMixin) -> SignedTransaction:
        """
        Sign transaction using private key

        #### Arguments

        transaction: #Transaction object
        """
        transaction_dict = transaction.to_dict()
        signed = Account().sign_transaction(transaction_dict=transaction_dict, private_key=self.private_key)
        return SignedTransaction(raw_transaction=signed.rawTransaction.hex(), r=signed.r, s=signed.s, v=signed.v,
                                 hash=signed.hash)
