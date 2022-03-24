import os
from src.etherdata_sdk.file import File, FileObject

file = File(url=os.getenv("url"))

file_object = FileObject(file_path="../../readme.md", days=2)
file_id = file.upload_file(file_object, error_on_exists=False)
file.download_file(file_id, download_path="./test")
print(file_id)
