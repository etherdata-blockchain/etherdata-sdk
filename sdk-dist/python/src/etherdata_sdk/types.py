from dataclasses import dataclass
from typing import Optional

from dataclasses_json import dataclass_json, LetterCase
from hexbytes import HexBytes


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class _FileUploadResponseData:
    afid: str
    is_exist: bool


@dataclass_json
@dataclass
class FileUploadResponse:
    code: int
    msg: str
    data: _FileUploadResponseData


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class Transaction:
    gas: float
    to: str
    value: float
    gas_price: float
    nonce: float
    chain_id: Optional[int] = None


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class SignedTransaction:
    raw_transaction: str
    hash: HexBytes
    r: float
    s: float
    v: float
