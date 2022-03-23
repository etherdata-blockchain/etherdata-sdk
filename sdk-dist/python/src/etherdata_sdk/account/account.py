from .create import CreateAPI
from .save import SaveAPI
from .sign import SignAPI


class Account(CreateAPI, SignAPI, SaveAPI):
    pass
