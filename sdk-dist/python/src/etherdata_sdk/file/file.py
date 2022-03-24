from .upload_create import UploadAPI
from .download import DownloadAPI


class File(UploadAPI, DownloadAPI):
    url: str

    def __init__(self, url: str):
        """
        Initialize a file api client

        #### Arguments

        url: URL endpoint for file
        """
        self.url = url
