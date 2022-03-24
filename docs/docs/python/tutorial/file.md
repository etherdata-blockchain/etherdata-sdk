---
title: File API
---

在本章节，我们将会介绍如何使用File API进行文件的上传和下载功能。

## API使用例子

### 引入依赖项
```python
from etherdata_sdk.file import File, FileObject
```

注意，在这里我们引入了两个Python class，一个是[File](/docs/python/api/etherdata_sdk/file/upload_create)，一个是[FileObject](/docs/python/api/etherdata_sdk/file/upload_create#fileobject-objects)。File是我们用的API，FileObject是我们创建上传文件用的dataclass。

### 创建API 对象
在使用具体的API前，我们需要初始化API。注意在这里的`os.getenv`是从环境变量里读取API的具体endpoint。

```python
file = File(url=os.getenv("url"))
```

### 创建一个可供上传的文件实例

在这里我们创建了一个FileObject，之后这个文件将会被保留两天在链上。因为这个是测试链，所以有保存期限的限制。最长为365天。在正式链上，这个值可以设置为无限。
```python
file_object = FileObject(file_path="readme.md", days=2)
```


### 文件上传
使用之前创建好的文件API实例，调用上传的method后，输入创建好的上传文件实例后就可以进行文件上传了。注意，`error_on_exists`的参数默认是`True`，意思是如果文件之前已经上传了，之后就会报`FileExists`的错误，如果不想要这个错误，就可以将这个值设为`False`。

```python
file_id = file.upload_file(file_object, error_on_exists=False)
```

在调用完这个接口后，我们会返回这个文件的`id`，这个id之后可以用来作下载用。

### 文件下载

使用文件上传时返回的`id`，我们之后就可以下载这个文件了。
```python
file.download_file(file_id, download_path="test.md")
```
这个指令就会将刚刚上传的文件下载回本地。

## 未来发展

### 尚未实现的方法
因为我们的SDK还在积极的开发中，目前ETD链已经实现了加密上传和下载的功能，目前仅支持java SDK，python SDK仍然在开发中。未来会逐步加上这些功能。所以请持续关注SDK的发布，并在GitHub上点击关注本项目来追踪更新吧！

### SDK API稳定性
因为项目仍在积极的开发阶段，目前不保证API的稳定性。未来极有可能出现Breaking Change的情况。请及时关注本文档来应对可能的Breaking Change！