"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[121],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,h=s["".concat(c,".").concat(f)]||s[f]||u[f]||l;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7119:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={sidebar_label:"upload_create",title:"etherdata_sdk.file.upload_create"},c=void 0,p={unversionedId:"python/api/etherdata_sdk/file/upload_create",id:"python/api/etherdata_sdk/file/upload_create",title:"etherdata_sdk.file.upload_create",description:"FileObject Objects",source:"@site/docs/python/api/etherdata_sdk/file/upload_create.md",sourceDirName:"python/api/etherdata_sdk/file",slug:"/python/api/etherdata_sdk/file/upload_create",permalink:"/docs/python/api/etherdata_sdk/file/upload_create",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/tree/main/docs/docs/python/api/etherdata_sdk/file/upload_create.md",tags:[],version:"current",frontMatter:{sidebar_label:"upload_create",title:"etherdata_sdk.file.upload_create"},sidebar:"tutorialSidebar",previous:{title:"download",permalink:"/docs/python/api/etherdata_sdk/file/download"},next:{title:"json_rpc",permalink:"/docs/python/api/etherdata_sdk/json_rpc/"}},d=[{value:"FileObject Objects",id:"fileobject-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"Arguments",id:"arguments",children:[],level:3}],level:2},{value:"UploadAPI Objects",id:"uploadapi-objects",children:[{value:"upload_file",id:"upload_file",children:[],level:4},{value:"Arguments",id:"arguments-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4}],level:2}],u={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fileobject-objects"},"FileObject Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class FileObject()\n")),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(file_path: Optional[str] = None,\n             file_object: Optional[IO] = None,\n             days=2)\n")),(0,l.kt)("p",null,"Create a file object either by providing a file_path or a file IO object.\nNote: Only one of these two parameters should be provided"),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"file_path: File path for the file\nfile_object: File IO\ndays: How long should the node keep the file"),(0,l.kt)("h2",{id:"uploadapi-objects"},"UploadAPI Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class UploadAPI(API)\n")),(0,l.kt)("h4",{id:"upload_file"},"upload","_","file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def upload_file(file: FileObject, error_on_exists=True) -> Optional[str]\n")),(0,l.kt)("p",null,"Upload file to the blockchain"),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("p",null,"file: ",(0,l.kt)("a",{parentName:"p",href:"#fileobject-objects"},(0,l.kt)("inlineCode",{parentName:"a"},"FileObject"))," File object"),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,"file_id: Uploaded file id\nerror_on_exist: Will throw an exception if file already exists"))}s.isMDXComponent=!0}}]);