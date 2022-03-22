import os
from src.etherdata_sdk.file import File, FileObject

file = File(url=os.getenv("url"))

file_object = FileObject(file_path="../../readme.md", days=2)
file_id = file.upload_file(file_object)
print(file_id)
