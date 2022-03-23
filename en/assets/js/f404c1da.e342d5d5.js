"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[985],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={sidebar_label:"miner",title:"etherdata_sdk.json_rpc.miner"},l=void 0,c={unversionedId:"python/api/etherdata_sdk/json_rpc/miner",id:"python/api/etherdata_sdk/json_rpc/miner",title:"etherdata_sdk.json_rpc.miner",description:"Miner Objects",source:"@site/docs/python/api/etherdata_sdk/json_rpc/miner.md",sourceDirName:"python/api/etherdata_sdk/json_rpc",slug:"/python/api/etherdata_sdk/json_rpc/miner",permalink:"/en/docs/python/api/etherdata_sdk/json_rpc/miner",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/tree/main/docs/docs/python/api/etherdata_sdk/json_rpc/miner.md",tags:[],version:"current",frontMatter:{sidebar_label:"miner",title:"etherdata_sdk.json_rpc.miner"},sidebar:"tutorialSidebar",previous:{title:"json_rpc_methods",permalink:"/en/docs/python/api/etherdata_sdk/json_rpc/json_rpc_methods"},next:{title:"personal",permalink:"/en/docs/python/api/etherdata_sdk/json_rpc/personal"}},p=[{value:"Miner Objects",id:"miner-objects",children:[{value:"getdashrate",id:"getdashrate",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"set_extra",id:"set_extra",children:[],level:4},{value:"set_gas_price",id:"set_gas_price",children:[],level:4},{value:"Arguments",id:"arguments",children:[],level:4},{value:"start",id:"start",children:[],level:4},{value:"stop",id:"stop",children:[],level:4},{value:"set_etherbase",id:"set_etherbase",children:[],level:4},{value:"Arguments",id:"arguments-1",children:[],level:4}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"miner-objects"},"Miner Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Miner()\n")),(0,s.kt)("p",null,"The miner API allows you to remote control the node\u2019s mining operation and set various mining specific settings"),(0,s.kt)("h4",{id:"getdashrate"},"getdashrate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def getdashrate() -> str\n")),(0,s.kt)("p",null,"Get your hashrate in H/s (Hash operations per second)"),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,"dashRate: The hashrate in Hs (Hash operations per second)"),(0,s.kt)("h4",{id:"set_extra"},"set","_","extra"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def set_extra() -> None\n")),(0,s.kt)("p",null,"Sets the extra data a miner can include when miner blocks\nThis is capped at 32 bytes"),(0,s.kt)("h4",{id:"set_gas_price"},"set","_","gas","_","price"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def set_gas_price(price: float) -> None\n")),(0,s.kt)("p",null,"Sets the minimal accepted gas price when mining transactions\nAny transactions that are below this limit are excluded from the mining process"),(0,s.kt)("h4",{id:"arguments"},"Arguments"),(0,s.kt)("p",null,"price: The new minimal accepted gas price when mining transactions."),(0,s.kt)("h4",{id:"start"},"start"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def start() -> None\n")),(0,s.kt)("p",null,"Start the CPU mining process with the given number of threads and generate a new DAG if need be"),(0,s.kt)("h4",{id:"stop"},"stop"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def stop() -> None\n")),(0,s.kt)("p",null,"Stop the CPU mining operation"),(0,s.kt)("h4",{id:"set_etherbase"},"set","_","etherbase"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def set_etherbase(etherbase: str) -> None\n")),(0,s.kt)("p",null,"Sets the etherbase, where mining rewards will go"),(0,s.kt)("h4",{id:"arguments-1"},"Arguments"),(0,s.kt)("p",null,"etherbase: The new etherbase."))}u.isMDXComponent=!0}}]);