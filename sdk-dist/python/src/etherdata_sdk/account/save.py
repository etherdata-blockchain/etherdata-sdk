from .api import AccountAPI


class SaveAPI(AccountAPI):
    def save(self, output_file: str):
        """
        Save private key to external file

        #### Arguments

        output_file: Save location
        """
        if self.private_key is None or len(self.private_key) == 0:
            raise RuntimeError("Your private key is empty. Please create one")
        with open(output_file, "w") as f:
            f.write(self.private_key.hex())
