# File API

在本文档中，我们会介绍如何使用JS 上传文件。

> 注意，下面部分是NodeJS专用API，Browser是不适用的。

## 第一步 引入依赖性

```typescript
import { file } from "@etherdata-blockchain/etherdata-sdk";
```

在这里的`file`是用来引入我们的`file` api的。之后我们可以定义所需要的API通过下面的方式。
```typescript
const { NodeFile, NodeFileObject } = file
```

1. `NodeFileObject` 为创建上传的文件用的Object
2. `NodeFile` 为上传文件的API

## 第二步 调用API上传

> 注意，下方的`process.env.URL`是从环境变量中读取对应的URL endpoint，请注意替换成对应的URL，不要直接复制粘贴！

```typescript
const fileAPI = new NodeFile(process.env.URL!);
const file = new NodeFileObject({ filePath: "readme.md", days: 3 });
const id = await fileAPI.uploadFile(file);
```

要上传文件，需要先创建一个`NodeFile`的API对象。之后我们创建需要的文件的对象，之后我们上传这个文件。上传后会生成一个文件的`id`。 
我们之后需要用这个`id` 来下载上传的文件。


## 第三步 下载文件

```typescript
const fileAPI = new NodeFile(process.env.URL!);
await fileAPI.downloadFile({ fileId: id, downloadPath: "./test.md" });
```

在下载的时候，我们需要提供`fileId`和下载地址，之后文件会自己下载到指定的位置了。
