import requests

from .api import API


class DownloadAPI(API):
    def download_file(self, file_id: str, download_path: str):
        """
        Download file from ETD chain to the local file path

        ### Arguments

        file_id: Unique file id
        download_path: The download destination for file
        """
        if not file_id:
            raise RuntimeError("File_id is not provided")

        if not download_path:
            raise RuntimeError("Download_path is not provided")

        with requests.get(self.get_url(f"/dn/file/{file_id}")) as request:
            request.raise_for_status()
            with open(download_path, 'wb') as f:
                for chunk in request.iter_content(chunk_size=8192):
                    f.write(chunk)
