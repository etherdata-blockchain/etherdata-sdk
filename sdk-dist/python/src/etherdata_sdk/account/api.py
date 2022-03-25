from typing import Optional

from hexbytes import HexBytes


class AccountAPI:
    private_key: Optional[HexBytes]
    address: Optional[str]
