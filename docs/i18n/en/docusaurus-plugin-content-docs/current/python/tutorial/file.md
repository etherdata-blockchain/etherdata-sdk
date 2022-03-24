---
title: File API
---

In this tutorial, we will explain how to use File API to upload and download file!

## API Example

### Import dependencies
```python
from etherdata_sdk.file import File, FileObject
```

Note，We have imported two Python classes here. One is [File](/docs/python/api/etherdata_sdk/file/upload_create)，and another one is [FileObject](/docs/python/api/etherdata_sdk/file/upload_create#fileobject-objects). File class is the API client to upload and download the file. And FileObject class is a dataclass which is used to represent the upload file.

### Create a API object
Before using the file api, we need to initialize it. `os.getenv` is used to read 
URL from our system environment.

```python
file = File(url=os.getenv("url"))
```

### Create a FileObject object

Following code creates a file object which will keep the file for 2 days since this is a test net which can only keep the file for 365 days at the most. However, there is no limit on Mainnet.

```python
file_object = FileObject(file_path="readme.md", days=2)
```


### Upload a file
After the file api has been initialized, we can use the upload method to upload the file object to our chain. Keep in mind that `error_on_exists` is set to `True` by default. Which means if you have already uploaded this file before, a `FileExists` error will be thrown. However, you can set this field to `False` to avoid this kind of error.

```python
file_id = file.upload_file(file_object, error_on_exists=False)
```

This method will return a `file_id` and you can use this `file_id` for downloading.

### Download a file

We can download the uploaded file by using the `file_id`.

```python
file.download_file(file_id, download_path="test.md")
```

This method will download the uploaded file and save it as `test.md` to our local directory.

## Future development

### Not implemented methods
Since our SDK is under an active development. Some methods are only implemented in Java SDk not in python SDK. Please watch this Repo for any future update!

### API Stability
Since this SDK is under an active development, we cannot guarantee there is not breaking change in the future. However, this documentation will be up-to-date for any change in the API itself!
