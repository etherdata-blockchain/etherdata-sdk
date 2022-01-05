# Introduction

> 本SDK的API文档和SDK绝大部分都属于自动生成，如有疑问，请直接在Github上提交PR。

本SDK已经发布在[npm](https://www.npmjs.com/package/etherdata-typescript)上

## 安装
```shell
npm i etherdata-typescript
```

## 引入

SDK已经默认把里面的API采用ES6的方式导出

```typescript
export { Admin,Clique,Debug,Etd,Personal,Real_time,Txpool,Json_rpc,Json_rpc_methods,Miner, }
```

所以在Typescript, ES6中，可以采用以下方式引入
```typescript
import { Json_rpc_methods } from "etherdata-typescript";
```

也可以在 common JS中用以下方式引入
```js
const { Json_rpc_methods } = require("etherdata-typescript")
```

## 使用

在使用的时候可以直接采用创建新的对象的方式实例化API，之后调用对应的方法。在调用前需要提供对应的URL来创建实例。所有的接口都已经定义了返回和输入的
参数的类型，IDE会提供自动补全以及自动纠错功能（如果在Typescript下）。所有的方法也能够给予足够丰富的自动补全信息。
譬如下面这个例子就是调用了Json_rpc_methods来获取当前区块的信息。

```typescript
const rpc = new Json_rpc_methods(url);
const block = await rpc.getBlockByHash(id, false);
```

之后返回的block是以下的类型

```typescript
export interface GetBlockByHashResponseObj {
  number: string;
  hash: string;
  parnetHash: string;
  nonce: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transaction: string[];
  uncles: string[];
}
```

更多的例子请参阅[api文档](./api)