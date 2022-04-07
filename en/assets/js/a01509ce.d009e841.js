"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[553],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,h=s["".concat(d,".").concat(f)]||s[f]||u[f]||o;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],r={title:"File API"},d=void 0,p={unversionedId:"python/tutorial/file",id:"python/tutorial/file",title:"File API",description:"In this tutorial, we will explain how to use File API to upload and download file!",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/python/tutorial/file.md",sourceDirName:"python/tutorial",slug:"/python/tutorial/file",permalink:"/en/docs/python/tutorial/file",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/tree/main/docs/docs/python/tutorial/file.md",tags:[],version:"current",frontMatter:{title:"File API"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/en/docs/python/intro"},next:{title:"Signing and Sending Transaction",permalink:"/en/docs/python/tutorial/sign"}},c=[{value:"API Example",id:"api-example",children:[{value:"Import dependencies",id:"import-dependencies",children:[],level:3},{value:"Create a API object",id:"create-a-api-object",children:[],level:3},{value:"Create a FileObject object",id:"create-a-fileobject-object",children:[],level:3},{value:"Upload a file",id:"upload-a-file",children:[],level:3},{value:"Download a file",id:"download-a-file",children:[],level:3}],level:2},{value:"Future development",id:"future-development",children:[{value:"Not implemented methods",id:"not-implemented-methods",children:[],level:3},{value:"API Stability",id:"api-stability",children:[],level:3}],level:2}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will explain how to use File API to upload and download file!"),(0,o.kt)("h2",{id:"api-example"},"API Example"),(0,o.kt)("h3",{id:"import-dependencies"},"Import dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from etherdata_sdk.file import File, FileObject\n")),(0,o.kt)("p",null,"Note\uff0cWe have imported two Python classes here. One is ",(0,o.kt)("a",{parentName:"p",href:"/docs/python/api/etherdata_sdk/file/upload_create"},"File"),"\uff0cand another one is ",(0,o.kt)("a",{parentName:"p",href:"/docs/python/api/etherdata_sdk/file/upload_create#fileobject-objects"},"FileObject"),". File class is the API client to upload and download the file. And FileObject class is a dataclass which is used to represent the upload file."),(0,o.kt)("h3",{id:"create-a-api-object"},"Create a API object"),(0,o.kt)("p",null,"Before using the file api, we need to initialize it. ",(0,o.kt)("inlineCode",{parentName:"p"},"os.getenv")," is used to read\nURL from our system environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'file = File(url=os.getenv("url"))\n')),(0,o.kt)("h3",{id:"create-a-fileobject-object"},"Create a FileObject object"),(0,o.kt)("p",null,"Following code creates a file object which will keep the file for 2 days since this is a test net which can only keep the file for 365 days at the most. However, there is no limit on Mainnet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'file_object = FileObject(file_path="readme.md", days=2)\n')),(0,o.kt)("h3",{id:"upload-a-file"},"Upload a file"),(0,o.kt)("p",null,"After the file api has been initialized, we can use the upload method to upload the file object to our chain. Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"error_on_exists")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," by default. Which means if you have already uploaded this file before, a ",(0,o.kt)("inlineCode",{parentName:"p"},"FileExists")," error will be thrown. However, you can set this field to ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," to avoid this kind of error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"file_id = file.upload_file(file_object, error_on_exists=False)\n")),(0,o.kt)("p",null,"This method will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"file_id")," and you can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"file_id")," for downloading."),(0,o.kt)("h3",{id:"download-a-file"},"Download a file"),(0,o.kt)("p",null,"We can download the uploaded file by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"file_id"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'file.download_file(file_id, download_path="test.md")\n')),(0,o.kt)("p",null,"This method will download the uploaded file and save it as ",(0,o.kt)("inlineCode",{parentName:"p"},"test.md")," to our local directory."),(0,o.kt)("h2",{id:"future-development"},"Future development"),(0,o.kt)("h3",{id:"not-implemented-methods"},"Not implemented methods"),(0,o.kt)("p",null,"Since our SDK is under an active development. Some methods are only implemented in Java SDk not in python SDK. Please watch this Repo for any future update!"),(0,o.kt)("h3",{id:"api-stability"},"API Stability"),(0,o.kt)("p",null,"Since this SDK is under an active development, we cannot guarantee there is not breaking change in the future. However, this documentation will be up-to-date for any change in the API itself!"))}s.isMDXComponent=!0}}]);