from dataclasses import dataclass
from typing import Optional

from dataclasses_json import dataclass_json, DataClassJsonMixin, LetterCase
from eth_account import Account
from hexbytes import HexBytes

from .api import AccountAPI


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class Transaction:
    gas: float
    to: str
    value: float
    gas_price: float
    nonce: float


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class SignedTransaction:
    raw_transaction: HexBytes
    hash: HexBytes
    r: float
    s: float
    v: float


class SignAPI(AccountAPI):
    def sign_transaction(self, transaction: DataClassJsonMixin) -> SignedTransaction:
        """
        Sign transaction using private key

        #### Arguments

        transaction: #Transaction object
        """
        transaction_dict = transaction.to_dict()
        signed = Account().sign_transaction(transaction_dict=transaction_dict, private_key=self.private_key)
        return SignedTransaction(raw_transaction=signed.rawTransaction, r=signed.r, s=signed.s, v=signed.v,
                                 hash=signed.hash)
