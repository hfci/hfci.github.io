(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{249:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),o=(r(0),r(302)),c={id:"nodePerformancePkg",title:"\u4f18\u5316\u6027\u80fd\u7684node\u8d44\u6e90\u5305",hide_title:!0,sidebar_label:"\u63d0\u9ad8\u6027\u80fd"},i={unversionedId:"package/node/nodePerformancePkg",id:"package/node/nodePerformancePkg",isDocsHomePage:!1,title:"\u4f18\u5316\u6027\u80fd\u7684node\u8d44\u6e90\u5305",description:"1. jest-worker",source:"@site/docs/package/node/\u4f18\u5316\u6027\u80fd\u7684\u5305.md",slug:"/package/node/nodePerformancePkg",permalink:"/docs/package/node/nodePerformancePkg",version:"current",sidebar_label:"\u63d0\u9ad8\u6027\u80fd",sidebar:"packagedoc",previous:{title:"\u8f85\u52a9\u5de5\u5177",permalink:"/docs/package/node/nodeToolUtils"},next:{title:"\u5e38\u7528\u7684node\u8d44\u6e90\u5305",permalink:"/docs/package/node/nodeToolPkg"}},l=[{value:"1. jest-worker",id:"1-jest-worker",children:[]},{value:"\u6587\u4ef6\u64cd\u4f5c",id:"\u6587\u4ef6\u64cd\u4f5c",children:[{value:"1. memfs - \u5185\u5b58\u6587\u4ef6\u7cfb\u7edf",id:"1-memfs---\u5185\u5b58\u6587\u4ef6\u7cfb\u7edf",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-jest-worker"},Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"https://github.com/facebook/jest/tree/master/packages/jest-worker"}),"1. jest-worker")),Object(o.b)("p",null,"\u4efb\u52a1\u5e76\u884c\u5316\uff0c\u63a5\u6536",Object(o.b)("inlineCode",{parentName:"p"},"Node.js"),"\u6a21\u5757\u8def\u5f84\u4f5c\u4e3a\u53c2\u6570\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u50cf\u8c03\u7528\u7c7b\u7684\u65b9\u6cd5\u90a3\u6837\u8c03\u7528\u6a21\u5757\u7684\u5bfc\u51fa\u65b9\u6cd5\u3002\u5f53\u6307\u5b9a\u65b9\u6cd5\u5728\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"fork"),"\u8fdb\u7a0b\u4e2d\u6267\u884c\u5b8c\u6bd5\u65f6\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"resolved"),"\u7684",Object(o.b)("inlineCode",{parentName:"p"},"Promise")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import Worker from 'jest-worker';\n\nasync function main() {\n  const worker = new Worker(require.resolve('./Worker.js'));\n  const result = await worker.hello('Alice'); // \"Hello, Alice\"\n}\n\n// Worker.js\nexport function hello(param) {\n  return 'Hello, ' + param;\n}\n")),Object(o.b)("h2",{id:"\u6587\u4ef6\u64cd\u4f5c"},"\u6587\u4ef6\u64cd\u4f5c"),Object(o.b)("h3",{id:"1-memfs---\u5185\u5b58\u6587\u4ef6\u7cfb\u7edf"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/streamich/memfs"}),"1. ",Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/streamich/memfs?label=memfs&style=social",alt:"memfs - \u5185\u5b58\u6587\u4ef6\u7cfb\u7edf"})))),Object(o.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"fs"),"\u4e00\u6837\u7684",Object(o.b)("inlineCode",{parentName:"p"},"api"),"\uff0c\u5c06\u6587\u4ef6\u5199\u5165\u5185\u5b58\u4e2d\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { fs } from 'memfs';\n\nfs.writeFileSync('/hello.txt', 'World!');\nfs.readFileSync('/hello.txt', 'utf8'); // World!\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"webpack-dev-middleware\u4f7f\u7528 memory-fs\uff0c\u501f\u52a9 memory-fs\uff0c\u53ef\u4ee5\u5c06 compiler \u7684 outputFileSystem \u8bbe\u7f6e\u6210 MemoryFileSystem\uff0c\u8fd9\u6837\u4ee5\u5185\u5b58\u8bfb\u5199\u7684\u65b9\u5f0f\uff0c\u5c06\u8d44\u6e90\u7f16\u8bd1\u6587\u4ef6\u4e0d\u843d\u5730\u8f93\u51fa\uff0c\u5927\u5927\u63d0\u9ad8\u6784\u5efa\u6027\u80fd\u3002"))))}p.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return r?a.a.createElement(u,i(i({ref:t},s),{},{components:r})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);