import os
from src.etherdata_sdk.file import File, FileObject

file = File(url=os.getenv("url"))

file_id = "1e000000000467d5d61db366e019da2e680b632c62a1fec85f159b3e91bd496ddcbbbb32ed31990caa23c5dd53f42ba10ef7b1946d11d705a96a444c1ae978b3"
file.download_file(file_id, download_path="./test.png")
print(file_id)
