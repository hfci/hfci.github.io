(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(237));const i={id:"jsObjectCompare",title:"js-\u5bf9\u8c61\u6bd4\u8f83",hide_title:!0,sidebar_label:"\u5bf9\u8c61\u6bd4\u8f83"},a={unversionedId:"js/goods/jsObjectCompare",id:"js/goods/jsObjectCompare",isDocsHomePage:!1,title:"js-\u5bf9\u8c61\u6bd4\u8f83",description:"\u5bf9\u8c61\u8f6c\u5b57\u7b26\u4e32",source:"@site/docs/js/goods/\u5bf9\u8c61\u8f6c\u5b57\u7b26\u4e32.md",slug:"/js/goods/jsObjectCompare",permalink:"/docs/js/goods/jsObjectCompare",version:"current",sidebar_label:"\u5bf9\u8c61\u6bd4\u8f83",sidebar:"jsdoc",previous:{title:"export\u5bfc\u51fa\u5f15\u7528\u95ee\u9898",permalink:"/docs/js/goods/jsExportReference"},next:{title:"\u88c5\u9970\u5668",permalink:"/docs/js/goods/jsDecorator"}},c=[{value:"\u5bf9\u8c61\u8f6c\u5b57\u7b26\u4e32",id:"\u5bf9\u8c61\u8f6c\u5b57\u7b26\u4e32",children:[{value:"\u4f7f\u7528 JSON.stringify",id:"\u4f7f\u7528-jsonstringify",children:[]},{value:"\u4f7f\u7528 JSON.stringify + sort",id:"\u4f7f\u7528-jsonstringify--sort",children:[]}]}],s={rightToc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u5bf9\u8c61\u8f6c\u5b57\u7b26\u4e32"},"\u5bf9\u8c61\u8f6c\u5b57\u7b26\u4e32"),Object(o.b)("h3",{id:"\u4f7f\u7528-jsonstringify"},"\u4f7f\u7528 JSON.stringify"),Object(o.b)("p",null,"\u56e0\u4e3a\u5bf9\u8c61\u662f\u65e0\u5e8f\u7684\uff0c\u4f46\u662f\u5b57\u7b26\u4e32\u662f\u6709\u5e8f\u7684\uff0c\u6240\u4ee5\u76f4\u63a5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"JSON.stringify")," \u4f1a\u6709\u95ee\u9898\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"object-compare",src:n(510).default})),Object(o.b)("h3",{id:"\u4f7f\u7528-jsonstringify--sort"},"\u4f7f\u7528 JSON.stringify + sort"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:"{8}","{8}":!0}),"function objectToString(obj: { [k: string]: unknown }): string {\n  const { hasOwnProperty } = Object.prototype\n  let result = ''\n  const keys = []\n  for (const k in obj) {\n    if (hasOwnProperty.bind(obj, k)) keys.push(k)\n  }\n  keys.sort()\n  for (let i = 0; i < keys.length; i++) {\n    result = `${result + keys[i]}=${obj[keys[i]]}`\n  }\n  return result\n}\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u80fd\u591f\u9884\u77e5\u5bf9\u8c61\u7684\u987a\u5e8f\u4e0d\u4f1a\u53d8\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b80\u5355\u7c97\u66b4\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"JSON.stringify")," \u6765\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u76f8\u7b49\uff0c\u5728\u590d\u6742\u7684\u73af\u5883\u5c31\u9700\u8981\u904d\u5386\u6210\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u6309\u7167\u540c\u6837\u7684\u6392\u5e8f\u89c4\u5219\u6765\u6392\u5e8f\u5224\u65ad\u3002"))))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,j=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(j,c(c({ref:t},p),{},{components:n})):o.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},510:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1_kghNXLTy3u3EES850x7U2A-104a110a424a997889df7ead271ee517.png"}}]);