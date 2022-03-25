import os
from http import HTTPStatus
from typing import Optional, IO

import requests

from .api import API
from ..types import FileUploadResponse


class FileObject:
    def __init__(self, file_path: Optional[str] = None, file_object: Optional[IO] = None, days=2):
        """
        Create a file object either by providing a file_path or a file IO object.
        Note: Only one of these two parameters should be provided

        ### Arguments

        file_path: File path for the file
        file_object: File IO
        days: How long should the node keep the file
        """

        if file_object and file_path:
            raise RuntimeError("You cannot provide both file_path and file_obj")

        if not file_object and not file_path:
            raise RuntimeError("Neither a file_path nor file IO object is provided.")

        if file_path and not os.path.exists(file_path):
            raise FileNotFoundError(f"Cannot found the file {file_path}")

        self.file = open(file_path, "rb") if file_path else file_object
        self.days = days

    def to_upload_dict(self):

        files = {
            "file": self.file,
            "days": self.days,
        }

        return files


class UploadAPI(API):

    def upload_file(self, file: FileObject, error_on_exists=True) -> Optional[str]:
        """
        Upload file to the blockchain
        #### Arguments

        file: #FileObject File object

         #### Returns

        file_id: Uploaded file id
        error_on_exist: Will throw an exception if file already exists
        """
        if not isinstance(file, FileObject):
            raise RuntimeError("File is not the type of FileObject")

        request = requests.post(self.get_url(f"un/file"), files=file.to_upload_dict())
        if request.status_code == HTTPStatus.OK:
            request_data: FileUploadResponse = FileUploadResponse.from_dict(request.json())
            if request_data.data.is_exist and error_on_exists:
                raise FileExistsError("This file has been uploaded already")
            return request_data.data.afid
