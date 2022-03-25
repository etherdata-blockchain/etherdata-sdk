import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config
from ..utils import to_dict
from ..exception import RPCException


@dataclass_json
@dataclass
class Tx:

    from_field: str = field(metadata=config(field_name="from"))
    """
    The from value
    """

    to: str
    """
    The to value
    """

    value: Any
    """
    The value to be transcated
    """


class Personal:
    """
    The personal API manages private keys in the key store
    """

    def __init__(self, url: str):
        self.url = url

    def import_raw_key(self, privete_key: str) -> str:
        """
        Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase
         Returns the address of the new account
        #### Arguments

        priveteKey: An unencrypted private key (hex string)
        #### Returns

        accountAddress: The address of the new account.
        """
        json_data = {
            "method": "personal_importRawKey",
            "params": [privete_key],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def list_accounts(self, ) -> List[str]:
        """
        Returns all the Ethereum account addresses of all keys in the key store
        #### Returns

        accountAddress: The list of ethereum account addresses
        """
        json_data = {
            "method": "personal_listAccounts",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def lock_account(self, ) -> None:
        """
        Removes the private key with given address from memory
         The account can no longer be used to send transactions
        """
        json_data = {
            "method": "personal_lockAccount",
            "params": None,
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def new_account(self, passphrase: Optional[str]) -> str:
        """
        Generates a new private key and stores it in the key store directory
         The key file is encrypted with the given passphrase
         Returns the address of the new account

        At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument
        #### Arguments

        passphrase: The passphrase used to generate a new private key
        #### Returns

        priveteKey: The generated priveteKey
        """
        json_data = {
            "method": "personal_newAccount",
            "params": [passphrase],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def unlock_account(
            self,
            account_address: str,
            passphrase: Optional[str],
            unlock_duration: Optional[float]) -> bool:
        """
        Decrypts the key with the given address from the key store

        Both passphrase and unlock duration are optional when using the JavaScript console
         If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively

        The unencrypted key will be held in memory until the unlock duration expires
         If the unlock duration defaults to 300 seconds
         An explicit duration of zero seconds unlocks the key until Getd exits

        The account can be used with etd_sign and etd_sendTransaction while it is unlocked
        #### Arguments

        accountAddress: The account address
        passphrase: The passphrase If you want to type in the passphrase and stil override the default unlock duration, pass null as the passphrase.
        unlockDuration: The unlock duration
        #### Returns

        unlockState: Indicating whether is the account unlocked successfully
        """
        json_data = {
            "method": "personal_unlockAccount",
            "params": [account_address, passphrase, unlock_duration],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def send_transaction(self, tx: Tx) -> str:
        """
        Validate the given passphrase and submit transaction

        The transaction is the same argument as for etd_sendTransaction and contains the from address
         If the passphrase can be used to decrypt the private key belogging to tx
        from the transaction is verified, signed and send onto the network
         The account is not unlocked globally in the node and cannot be used in other RPC calls

        Note, prior to Getd 1
        5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version

        Example '> var tx = {from':' "0x391694e7e0b0cce554cb130d723a9d27458f9298", to':' "0xafa3f8684e54059998bc3a7b0d2b0da075154d66", value':' web3
        toWei(1
        23, "ether")} undefined "> personal
        sendTransaction(tx, "passphrase")" 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f'
        #### Arguments

        tx: The transaction
        #### Returns

        address: The address
        """
        json_data = {
            "method": "personal_sendTransaction",
            "params": [tx],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def sign(self, a: str, b: str, c: str) -> str:
        """
        The sign method calculates an Ethereum specific signature with ' sign(keccack256("\x19Ethereum Signed Message:\n" + len(message) + message)))
         '
        By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature
         This prevents misuse where a malicious DApp can sign arbitrary data (e
        g
         transaction) and use the signature to impersonate the victim

        See ecRecover to verify the signature
        #### Arguments

        a: abcde
        b: abcde
        c: abcde
        #### Returns

        value: abcde
        """
        json_data = {
            "method": "personal_sign",
            "params": [a, b, c],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]

    def ec_recover(self, a: str, b: str) -> str:
        """
        ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign
        #### Arguments

        a: abcde
        b: abcde
        #### Returns

        address: The address associated with the private key
        """
        json_data = {
            "method": "personal_ecRecover",
            "params": [a, b],
            "jsonrpc": "2.0",
            "id": 1
        }
        response = requests.post(self.url, json=to_dict(json_data))
        error = response.json().get("error")
        if error:
            raise RPCException(error["message"])
        return response.json()["result"]
