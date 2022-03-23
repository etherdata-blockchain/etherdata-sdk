"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[689],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_label:"sign",title:"etherdata_sdk.account.sign"},s=void 0,u={unversionedId:"python/api/etherdata_sdk/account/sign",id:"python/api/etherdata_sdk/account/sign",title:"etherdata_sdk.account.sign",description:"SignAPI Objects",source:"@site/docs/python/api/etherdata_sdk/account/sign.md",sourceDirName:"python/api/etherdata_sdk/account",slug:"/python/api/etherdata_sdk/account/sign",permalink:"/docs/python/api/etherdata_sdk/account/sign",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/docs/docs/python/api/etherdata_sdk/account/sign.md",tags:[],version:"current",frontMatter:{sidebar_label:"sign",title:"etherdata_sdk.account.sign"},sidebar:"tutorialSidebar",previous:{title:"save",permalink:"/docs/python/api/etherdata_sdk/account/save"},next:{title:"file",permalink:"/docs/python/api/etherdata_sdk/file/"}},l=[{value:"SignAPI Objects",id:"signapi-objects",children:[{value:"sign_transaction",id:"sign_transaction",children:[],level:4},{value:"Arguments",id:"arguments",children:[],level:4}],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"signapi-objects"},"SignAPI Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class SignAPI(AccountAPI)\n")),(0,o.kt)("h4",{id:"sign_transaction"},"sign","_","transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def sign_transaction(transaction: DataClassJsonMixin) -> SignedTransaction\n")),(0,o.kt)("p",null,"Sign transaction using private key"),(0,o.kt)("h4",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"transaction: ",(0,o.kt)("inlineCode",{parentName:"p"},"Transaction")," object"))}d.isMDXComponent=!0}}]);