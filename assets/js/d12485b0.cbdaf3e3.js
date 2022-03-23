"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[448],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2126:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},p="Introduction",s={unversionedId:"typescript/intro",id:"typescript/intro",title:"Introduction",description:"\u672cSDK\u7684API\u6587\u6863\u548cSDK\u7edd\u5927\u90e8\u5206\u90fd\u5c5e\u4e8e\u81ea\u52a8\u751f\u6210\uff0c\u5982\u6709\u7591\u95ee\uff0c\u8bf7\u76f4\u63a5\u5728Github\u4e0a\u63d0\u4ea4PR\u3002",source:"@site/docs/typescript/intro.md",sourceDirName:"typescript",slug:"/typescript/intro",permalink:"/docs/typescript/intro",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/tree/main/docs/docs/typescript/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"to_dict",permalink:"/docs/python/api/etherdata_sdk/utils/to_dict"},next:{title:"JS SDK",permalink:"/docs/typescript/api/"}},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u5f15\u5165",id:"\u5f15\u5165",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2}],u={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672cSDK\u7684API\u6587\u6863\u548cSDK\u7edd\u5927\u90e8\u5206\u90fd\u5c5e\u4e8e\u81ea\u52a8\u751f\u6210\uff0c\u5982\u6709\u7591\u95ee\uff0c\u8bf7\u76f4\u63a5\u5728Github\u4e0a\u63d0\u4ea4PR\u3002")),(0,a.kt)("p",null,"\u672cSDK\u5df2\u7ecf\u53d1\u5e03\u5728",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/etherdata-typescript"},"npm"),"\u4e0a"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i etherdata-typescript\n")),(0,a.kt)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165"),(0,a.kt)("p",null,"SDK\u5df2\u7ecf\u9ed8\u8ba4\u628a\u91cc\u9762\u7684API\u91c7\u7528ES6\u7684\u65b9\u5f0f\u5bfc\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export { Admin,Clique,Debug,Etd,Personal,Real_time,Txpool,Json_rpc,Json_rpc_methods,Miner, }\n")),(0,a.kt)("p",null,"\u6240\u4ee5\u5728Typescript, ES6\u4e2d\uff0c\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0b\u65b9\u5f0f\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Json_rpc_methods } from "etherdata-typescript";\n')),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728 common JS\u4e2d\u7528\u4ee5\u4e0b\u65b9\u5f0f\u5f15\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { Json_rpc_methods } = require("etherdata-typescript")\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u7684\u65f6\u5019\u53ef\u4ee5\u76f4\u63a5\u91c7\u7528\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u7684\u65b9\u5f0f\u5b9e\u4f8b\u5316API\uff0c\u4e4b\u540e\u8c03\u7528\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002\u5728\u8c03\u7528\u524d\u9700\u8981\u63d0\u4f9b\u5bf9\u5e94\u7684URL\u6765\u521b\u5efa\u5b9e\u4f8b\u3002\u6240\u6709\u7684\u63a5\u53e3\u90fd\u5df2\u7ecf\u5b9a\u4e49\u4e86\u8fd4\u56de\u548c\u8f93\u5165\u7684\n\u53c2\u6570\u7684\u7c7b\u578b\uff0cIDE\u4f1a\u63d0\u4f9b\u81ea\u52a8\u8865\u5168\u4ee5\u53ca\u81ea\u52a8\u7ea0\u9519\u529f\u80fd\uff08\u5982\u679c\u5728Typescript\u4e0b\uff09\u3002\u6240\u6709\u7684\u65b9\u6cd5\u4e5f\u80fd\u591f\u7ed9\u4e88\u8db3\u591f\u4e30\u5bcc\u7684\u81ea\u52a8\u8865\u5168\u4fe1\u606f\u3002\n\u8b6c\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u662f\u8c03\u7528\u4e86Json_rpc_methods\u6765\u83b7\u53d6\u5f53\u524d\u533a\u5757\u7684\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const rpc = new Json_rpc_methods(url);\nconst block = await rpc.getBlockByHash(id, false);\n")),(0,a.kt)("p",null,"\u4e4b\u540e\u8fd4\u56de\u7684block\u662f\u4ee5\u4e0b\u7684\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface GetBlockByHashResponseObj {\n  number: string;\n  hash: string;\n  parnetHash: string;\n  nonce: string;\n  sha3Uncles: string;\n  logsBloom: string;\n  transactionsRoot: string;\n  miner: string;\n  difficulty: string;\n  totalDifficulty: string;\n  extraData: string;\n  size: string;\n  gasLimit: string;\n  gasUsed: string;\n  timestamp: string;\n  transaction: string[];\n  uncles: string[];\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u7684\u4f8b\u5b50\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"./api"},"api\u6587\u6863")))}d.isMDXComponent=!0}}]);