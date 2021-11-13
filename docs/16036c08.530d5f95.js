(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{302:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),m=a,O=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?r.a.createElement(O,o(o({ref:t},s),{},{components:n})):r.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),i=(n(0),n(302)),c={id:"tsConfig",title:"ts\u914d\u7f6e\u6280\u5de7",hide_title:!0,sidebar_label:"\u914d\u7f6e\u6280\u5de7"},o={unversionedId:"ts/goods/tsConfig",id:"ts/goods/tsConfig",isDocsHomePage:!1,title:"ts\u914d\u7f6e\u6280\u5de7",description:"1. \u51cf\u5c11\u9879\u76ee\u4f53\u79ef",source:"@site/docs/ts/goods/config.md",slug:"/ts/goods/tsConfig",permalink:"/docs/ts/goods/tsConfig",version:"current",sidebar_label:"\u914d\u7f6e\u6280\u5de7",sidebar:"tsdoc",previous:{title:"\u6280\u5de7",permalink:"/docs/ts/goods/tsGoods1"},next:{title:"ts\u9ad8\u7ea7\u7c7b\u578b",permalink:"/docs/ts/goods/tsAdvanceType"}},p=[{value:"1. \u51cf\u5c11\u9879\u76ee\u4f53\u79ef",id:"1-\u51cf\u5c11\u9879\u76ee\u4f53\u79ef",children:[]},{value:"\u6dfb\u52a0 bind call apply\u6821\u9a8c",id:"\u6dfb\u52a0-bind-call-apply\u6821\u9a8c",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"1-\u51cf\u5c11\u9879\u76ee\u4f53\u79ef"},"1. \u51cf\u5c11\u9879\u76ee\u4f53\u79ef"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/tslib"}),"microsoft/tslib \u5305\u542bts\u6240\u6709\u8fd0\u884c\u65f6\u7684helper")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Typescript"),"\u7f16\u8bd1\u7684\u65f6\u5019\uff0c\u548c ",Object(i.b)("inlineCode",{parentName:"p"},"Babel")," \u4e00\u6837\u7684\u95ee\u9898\uff1a\u5728\u628a ",Object(i.b)("inlineCode",{parentName:"p"},"ES6")," \u8bed\u6cd5\u8f6c\u6362\u6210 ",Object(i.b)("inlineCode",{parentName:"p"},"ES5")," \u8bed\u6cd5\u65f6\u9700\u8981\u6ce8\u5165\u8f85\u52a9\u51fd\u6570\uff0c \u4e3a\u4e86\u4e0d\u8ba9\u540c\u6837\u7684\u8f85\u52a9\u51fd\u6570\u91cd\u590d\u7684\u51fa\u73b0\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u5f00\u542f ",Object(i.b)("inlineCode",{parentName:"p"},"TypeScript")," \u7f16\u8bd1\u5668\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"importHelpers")," \u9009\u9879\uff0c\u4fee\u6539 ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json")," \u6587\u4ef6\u5982\u4e0b:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"compilerOptions": {\n  "importHelpers" : true\n}\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u539f\u7406\u548c",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime"),"\u975e\u5e38\u7c7b\u4f3c\uff1a"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"--importHelpers"),"\u7684\u60c5\u51b5\u4e0b:")),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"var __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nexports.x = {};\nexports.y = __assign({}, exports.x);\n")),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e86",Object(i.b)("inlineCode",{parentName:"li"},"--importHelpers"),"\u7684\u60c5\u51b5\u4e0b:")),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'var tslib_1 = require("tslib");\nexports.x = {};\nexports.y = tslib_1.__assign({}, exports.x);\n')))),Object(i.b)("h3",{id:"\u6dfb\u52a0-bind-call-apply\u6821\u9a8c"},"\u6dfb\u52a0 bind call apply\u6821\u9a8c"),Object(i.b)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u662f\u4e0d\u4f1a\u6821\u9a8c",Object(i.b)("inlineCode",{parentName:"p"},"apply"),",",Object(i.b)("inlineCode",{parentName:"p"},"call"),",",Object(i.b)("inlineCode",{parentName:"p"},"bind"),"\u7684\u53c2\u6570:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function test(a: number) {}\ntest.call(null, '1') // \u4f60\u4f20\u5165\u4e86\u4e00\u4e2a string\uff0c\u4f46\u5e76\u4e0d\u62a5\u9519\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"3.2")," \u7248\u672c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5f00\u542f",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#strictbindcallapply"}),"strictBindCallApply"),"\u6765\u4f7f",Object(i.b)("inlineCode",{parentName:"p"},"BindCallApply"),"\u201c\u66f4\u5b89\u5168\u201d\u3002\u8fd9\u662f\u5b83\u7684",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/pull/27028"}),"\u5b9e\u73b0")))))}b.isMDXComponent=!0}}]);