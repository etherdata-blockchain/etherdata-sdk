"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[219],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8978:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={},p="File API",c={unversionedId:"typescript/tutorial/file",id:"typescript/tutorial/file",title:"File API",description:"In this document, we will describe how to upload files using JS SDK.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/typescript/tutorial/file.md",sourceDirName:"typescript/tutorial",slug:"/typescript/tutorial/file",permalink:"/en/docs/typescript/tutorial/file",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/tree/main/docs/docs/typescript/tutorial/file.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Class: Txpool",permalink:"/en/docs/typescript/api/classes/Txpool"}},d=[{value:"Step 1 import APIs",id:"step-1-import-apis",children:[],level:2},{value:"Step 2 Upload file using API",id:"step-2-upload-file-using-api",children:[],level:2},{value:"Step 3 Download the file",id:"step-3-download-the-file",children:[],level:2}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-api"},"File API"),(0,o.kt)("p",null,"In this document, we will describe how to upload files using JS SDK."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the following part is a NodeJS-specific API, Browser is not applicable.")),(0,o.kt)("h2",{id:"step-1-import-apis"},"Step 1 import APIs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { file } from "@etherdata-blockchain/etherdata-sdk";\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," here is used to import our ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," api. After that we can define the required API in the following way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { NodeFile, NodeFileObject } = file\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"NodeFileObject")," is the Object used to create the uploaded file"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"NodeFile")," is the API for uploading files")),(0,o.kt)("h2",{id:"step-2-upload-file-using-api"},"Step 2 Upload file using API"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.URL")," below is to read the corresponding URL endpoint from the environment variable, please replace it with the corresponding URL, do not copy and paste directly!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const fileAPI = new NodeFile(process.env.URL!);\nconst file = new NodeFileObject({ filePath: "readme.md", days: 3 });\nconst id = await fileAPI.uploadFile(file);\n')),(0,o.kt)("p",null,"To upload a file, you need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeFile")," API object first. After that we create the object of the required file and after that we upload the file. After uploading, an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the file is generated.\nWe need to use this ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," later to download the uploaded file."),(0,o.kt)("h2",{id:"step-3-download-the-file"},"Step 3 Download the file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const fileAPI = new NodeFile(process.env.URL!);\nawait fileAPI.downloadFile({ fileId: id, downloadPath: "./test.md" });\n')),(0,o.kt)("p",null,"When downloading, we need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"fileId")," and the download address, and then the file will be downloaded to the specified location by itself."))}u.isMDXComponent=!0}}]);