(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),c=(a(0),a(361)),i={id:"nodeModulePath",title:"node:path",hide_title:!0,sidebar_label:"node:path"},o={unversionedId:"package/node/nodeModulePath",id:"package/node/nodeModulePath",isDocsHomePage:!1,title:"node:path",description:"API",source:"@site/docs/package/node/node-path.md",slug:"/package/node/nodeModulePath",permalink:"/docs/package/node/nodeModulePath",version:"current",sidebar_label:"node:path",sidebar:"packagedoc",previous:{title:"node:util",permalink:"/docs/package/node/nodeModuleUtil"},next:{title:"\u7ec8\u7aef\u6837\u5f0f",permalink:"/docs/package/node/nodeToolTerminalStyle"}},l=[{value:"API",id:"api",children:[{value:"path.join()",id:"pathjoin",children:[]},{value:"path.resolve()",id:"pathresolve",children:[]},{value:"path.relative()",id:"pathrelative",children:[]},{value:"path.parse()",id:"pathparse",children:[]}]},{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",children:[{value:"__dirname",id:"__dirname",children:[]},{value:"__filename",id:"__filename",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("h3",{id:"pathjoin"},"path.join()"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4f1a\u6b63\u786e\u4f7f\u7528\u7cfb\u7edf\u8def\u5f84\u5206\u9694\u7b26\u6765",Object(c.b)("inlineCode",{parentName:"p"},"\u8fde\u63a5\u8def\u5f84"),"\uff0cUnix \u7cfb\u7edf\u662f",Object(c.b)("inlineCode",{parentName:"p"},"\u201d/\u201c"),"\uff0cWindows \u7cfb\u7edf\u662f",Object(c.b)("inlineCode",{parentName:"p"},"\u201d\\\u201c"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"path.join('src', 'lib', 'index.ts')\n\n// src/lib/index.ts\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u9664\u4e86\u8fde\u63a5\u8def\u5f84\uff0c\u4e5f\u4f1a\u683c\u5f0f\u5316\u8def\u5f84\uff0c\u5982\u679c\u5f53\u524d\u8def\u5f84\u5305\u542b\u4e0d\u6b63\u5e38\u8def\u5f84\u5206\u9694\u7b26\u4f1a\u88ab\u683c\u5f0f\u5316\u6210\u5f53\u524d\u7cfb\u7edf\u7684\u8def\u5f84\u5206\u9694\u7b26\uff1a"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"path.join('src', 'lib', '\\\\index.ts')\n// src/lib/index.ts\n")))),Object(c.b)("h3",{id:"pathresolve"},"path.resolve()"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5c06\u76f8\u5bf9\u8def\u5f84\u8f6c\u6362\u6210",Object(c.b)("inlineCode",{parentName:"p"},"\u7edd\u5bf9\u8def\u5f84"),"\uff0c\u5982\u679c\u6839\u636e\u53c2\u6570\u65e0\u6cd5\u5f97\u5230\u7edd\u5bf9\u8def\u5f84\uff0c\u90a3\u5c31\u662f\u4ee5\u5f53\u524d\u6587\u4ef6\u4e3a\u57fa\u51c6\uff0c\u83b7\u5f97\u7edd\u5bf9\u8def\u5f84")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"path.resolve('src', 'lib', 'index.ts')\n// \u7b49\u540c\u4e8e\uff1a\npath.resolve(__dirname, 'src', 'lib', 'index.ts')\n")),Object(c.b)("h3",{id:"pathrelative"},"path.relative()"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u6587\u4ef6\u76f8\u5bf9\u4e8e\u53e6\u5916\u4e00\u4e2a\u6587\u4ef6\u7684\u76f8\u5bf9\u8def\u5f84")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// \u7b2c\u4e8c\u4e2a\u8def\u5f84\u76f8\u5bf9\u4e8e\u7b2c\u4e00\u4e2a\u8def\u5f84\u7684\u76f8\u5bf9\u4f4d\u7f6e\npath.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u4e24\u4e2a\u8def\u5f84\u90fd\u5e94\u8be5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u5982\u679c\u4f20\u5165\u7684\u4e0d\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u4f1a\u4ee5\u5f53\u524d\u6587\u4ef6\u4e3a\u57fa\u51c6\u683c\u5f0f\u5316\u6210\u7edd\u5bf9\u8def\u5f84\uff0c\u518d\u8fdb\u884c\u8def\u5f84\u5224\u65ad\uff1a"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"path.relative('src', 'lib')\n// \u76f8\u5f53\u4e8e\npath.relative(path.resolve(__dirname, 'src'), path.resolve(__dirname, 'lib'))\n// \u7ed3\u679c\uff1a../lib\n")))),Object(c.b)("h3",{id:"pathparse"},"path.parse()"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u83b7\u53d6\u8def\u5f84\u7684\u5404\u90e8\u5206\u4fe1\u606f\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"path.parse(path.resolve('src/index.ts'))\n/* {\n  root: '/',\n  dir: '/Users/cuihaifeng/Documents/\u4e2a\u4eba/github/load-config/src',\n  base: 'index.ts',\n  ext: '.ts',\n  name: 'index'\n} */\n")),Object(c.b)("h2",{id:"\u5168\u5c40\u53d8\u91cf"},"\u5168\u5c40\u53d8\u91cf"),Object(c.b)("h3",{id:"__dirname"},"_","_","dirname"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5f53\u524d\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"console.log(__dirname)\n// /Users/cuihaifeng/Documents/\u4e2a\u4eba/github/load-config\n")),Object(c.b)("h3",{id:"__filename"},"_","_","filename"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5f53\u524d\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"console.log(__filename)\n// /Users/cuihaifeng/Documents/\u4e2a\u4eba/github/load-config/index.js\n")))}p.isMDXComponent=!0},361:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||c;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);