---
sidebar_position: 1
---

# EtherData SDK 使用说明

[![Build And Publish SDK](https://github.com/etherdata-blockchain/etherdata-sdk/actions/workflows/build-sdk.yml/badge.svg)](https://github.com/etherdata-blockchain/etherdata-sdk/actions/workflows/build-sdk.yml)

EtherData SDK的JSON RPC部分 是一个完全自动生成的SDK。
所有的JSON RPC 定义的YAML文件都可以在[这里获取。](https://github.com/etherdata-blockchain/etherdata-sdk/tree/main/sdk)

目前支持自动生成的SDK语言有以下几个

- Typescript (Javascript 同样支持)
- React Components
- Kotlin (Java同样支持)
- Python

未来还会继续添加更多的语言支持版本。若要有任何的Feature request或者 Issues， 请在Github上进行提交。

## 文件结构

```
package/
├─ node_modules/
├─ etd-sdk-generator/
├─ schemas/
├─ sdk/
│  ├─ json_rpc.yml
├─ sdk-dist/
│  ├─ kotlin/
│  ├─ react/
│  ├─ typescript/
│  │─ python/
├─ new_file
├─ readme.md
```

具体的实现代码会在专门的文档目录下进行详细介绍。


## Demos

为了展示现有的ETD功能，我们特别的制作了几个可以直接用的[demo](https://github.com/etherdata-blockchain/demos)。

- Faucet (https://faucet.debugchain.net/)
- Transaction (https://demos.transaction.debugchain.net/)
- File Upload (Hosting platform doesn't support file upload yet, only local version available)
