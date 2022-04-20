# File API

In this document, we will describe how to upload files using JS SDK.

> Note that the following part is a NodeJS-specific API, Browser is not applicable.

## Step 1 import APIs

```typescript
import { NodeFile, NodeFileObject } from "@etherdata-blockchain/etherdata-sdk-file-node";
````

1. `NodeFileObject` is the Object used to create the uploaded file
2. `NodeFile` is the API for uploading files

## Step 2 Upload file using API

> Note that the `process.env.URL` below is to read the corresponding URL endpoint from the environment variable, please replace it with the corresponding URL, do not copy and paste directly!

```typescript
const fileAPI = new NodeFile(process.env.URL!);
const file = new NodeFileObject({ filePath: "readme.md", days: 3 });
const id = await fileAPI.uploadFile(file);
````

To upload a file, you need to create a `NodeFile` API object first. After that we create the object of the required file and after that we upload the file. After uploading, an `id` of the file is generated.
We need to use this `id` later to download the uploaded file.


## Step 3 Download the file

```typescript
const fileAPI = new NodeFile(process.env.URL!);
await fileAPI.downloadFile({ fileId: id, downloadPath: "./test.md" });
````

When downloading, we need to provide `fileId` and the download address, and then the file will be downloaded to the specified location by itself.
