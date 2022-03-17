import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config


@dataclass_json
@dataclass
class Tx:
    
    from_field:str = field(metadata=config(field_name="from"))
    """
    The from value
    """

    to:str 
    """
    The to value
    """

    value:Any 
    """
    The value to be transcated
    """


class Personal:
    """
    The personal API manages private keys in the key store
    """

    def __init__(self, url: str):
        self.url = url


    
    def importRawKey(self, priveteKey:str)-> str:
        """
        Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase
         Returns the address of the new account
        :param priveteKey: An unencrypted private key (hex string)
        :return accountAddress: The address of the new account.
        """
        response = requests.post(self.url, data={
          "method": "personal_importRawKey",
          "params": [priveteKey],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def listAccounts(self, )-> List[str]:
        """
        Returns all the Ethereum account addresses of all keys in the key store
        :return accountAddress: The list of ethereum account addresses
        """
        response = requests.post(self.url, data={
          "method": "personal_listAccounts",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def lockAccount(self, )-> None:
        """
        Removes the private key with given address from memory
         The account can no longer be used to send transactions
        """
        response = requests.post(self.url, data={
          "method": "personal_lockAccount",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def newAccount(self, passphrase:Optional[str])-> str:
        """
        Generates a new private key and stores it in the key store directory
         The key file is encrypted with the given passphrase
         Returns the address of the new account
        
        At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument
        :param passphrase: The passphrase used to generate a new private key
        :return priveteKey: The generated priveteKey
        """
        response = requests.post(self.url, data={
          "method": "personal_newAccount",
          "params": [passphrase],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def unlockAccount(self, accountAddress:str, passphrase:Optional[str], unlockDuration:Optional[float])-> bool:
        """
        Decrypts the key with the given address from the key store
        
        Both passphrase and unlock duration are optional when using the JavaScript console
         If the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively
        
        The unencrypted key will be held in memory until the unlock duration expires
         If the unlock duration defaults to 300 seconds
         An explicit duration of zero seconds unlocks the key until Getd exits
        
        The account can be used with etd_sign and etd_sendTransaction while it is unlocked
        :param accountAddress: The account address
        :param passphrase: The passphrase If you want to type in the passphrase and stil override the default unlock duration, pass null as the passphrase.
        :param unlockDuration: The unlock duration
        :return unlockState: Indicating whether is the account unlocked successfully
        """
        response = requests.post(self.url, data={
          "method": "personal_unlockAccount",
          "params": [accountAddress, passphrase, unlockDuration],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def sendTransaction(self, tx:Tx)-> str:
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
        :param tx: The transaction
        :return address: The address
        """
        response = requests.post(self.url, data={
          "method": "personal_sendTransaction",
          "params": [tx],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def sign(self, a:str, b:str, c:str)-> str:
        """
        The sign method calculates an Ethereum specific signature with ' sign(keccack256("\x19Ethereum Signed Message:\n" + len(message) + message)))
         '
        By adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature
         This prevents misuse where a malicious DApp can sign arbitrary data (e
        g
         transaction) and use the signature to impersonate the victim
        
        See ecRecover to verify the signature
        :param a: abcde
        :param b: abcde
        :param c: abcde
        :return value: abcde
        """
        response = requests.post(self.url, data={
          "method": "personal_sign",
          "params": [a, b, c],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def ecRecover(self, a:str, b:str)-> str:
        """
        ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign
        :param a: abcde
        :param b: abcde
        :return address: The address associated with the private key
        """
        response = requests.post(self.url, data={
          "method": "personal_ecRecover",
          "params": [a, b],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        

