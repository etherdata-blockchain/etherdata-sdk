---
sidebar_label: upload_create
title: etherdata_sdk.file.upload_create
---

## FileObject Objects

```python
class FileObject()
```

#### \_\_init\_\_

```python
def __init__(file_path: Optional[str] = None,
             file_object: Optional[IO] = None,
             days=2)
```

Create a file object either by providing a file_path or a file IO object.
Note: Only one of these two parameters should be provided

### Arguments

file_path: File path for the file
file_object: File IO
days: How long should the node keep the file

## UploadAPI Objects

```python
class UploadAPI(API)
```

#### upload\_file

```python
def upload_file(file: FileObject) -> Optional[str]
```

Upload file to the blockchain
#### Arguments

file: [`FileObject`](#fileobject-objects) File object

 #### Returns

file_id: Uploaded file id

