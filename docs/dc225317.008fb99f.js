(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{212:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),c=(t(0),t(237)),l={id:"webpackPlugin",title:"\u5199webpack\u63d2\u4ef6",hide_title:!0,sidebar_label:"\u7f16\u5199\u63d2\u4ef6"},o={unversionedId:"enginee/webpack/webpackPlugin",id:"enginee/webpack/webpackPlugin",isDocsHomePage:!1,title:"\u5199webpack\u63d2\u4ef6",description:"\u94a9\u5b50\u5206\u7c7b",source:"@site/docs/enginee/webpack/\u7f16\u5199\u63d2\u4ef6.md",slug:"/enginee/webpack/webpackPlugin",permalink:"/docs/enginee/webpack/webpackPlugin",version:"current",sidebar_label:"\u7f16\u5199\u63d2\u4ef6",sidebar:"babeldoc",previous:{title:"webpack\u6253\u5305\u8d44\u6e90\u5305\u6ce8\u610f\u4e8b\u9879",permalink:"/docs/enginee/webpack/webpackComponentNotice"},next:{title:"webpack-\u597d\u7528\u63d2\u4ef6",permalink:"/docs/enginee/webpack/webpackUsefulPlugin"}},p=[{value:"\u94a9\u5b50\u5206\u7c7b",id:"\u94a9\u5b50\u5206\u7c7b",children:[{value:"1. SyncHook",id:"1-synchook",children:[]},{value:"2. SyncBailHook",id:"2-syncbailhook",children:[]},{value:"3. SyncWaterfallHook",id:"3-syncwaterfallhook",children:[]},{value:"4. AsyncSeriesHook",id:"4-asyncserieshook",children:[]},{value:"5. AsyncWaterfallHook",id:"5-asyncwaterfallhook",children:[]}]}],i={rightToc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u94a9\u5b50\u5206\u7c7b"},"\u94a9\u5b50\u5206\u7c7b"),Object(c.b)("h3",{id:"1-synchook"},"1. SyncHook"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u6267\u884c\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u540c\u6b65\u4e32\u884c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u4e0d\u5173\u5fc3\u51fd\u6570\u7684\u8fd4\u56de\u503c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u89e6\u53d1\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"tap"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"compilation.hooks.buildModule.tap('Test', (compilation, callback) => {\n  // \u8fd4\u56de\u503c\u4e0d\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\n  return true\n})\n")))),Object(c.b)("h3",{id:"2-syncbailhook"},"2. SyncBailHook"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u6267\u884c\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u540c\u6b65\u4e32\u884c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u51fd\u6570\u8fd4\u56de\u975eundefined\u503c\uff0c\u5c06\u4e0d\u518d\u6267\u884c\u522b\u7684\u63d2\u4ef6\u6ce8\u518c\u7684\u8be5\u94a9\u5b50\u51fd\u6570"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u89e6\u53d1\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"tap"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{13}","{13}":!0}),"// \u53ea\u4f1a\u6253\u53701,2\nclass Plugin1 {\n  apply (compiler) {\n    compiler.hooks.entryOption.tap('Plugin1', (compilation, callback) => {\n      console.log(1)\n    })\n  }\n}\nclass Plugin2 {\n  apply (compiler) {\n    compiler.hooks.entryOption.tap('Plugin2', (compilation, callback) => {\n      console.log(2)\n      return 6\n    })\n  }\n}\nclass Plugin3 {\n  apply (compiler) {\n    compiler.hooks.entryOption.tap('Plugin3', (compilation, callback) => {\n      console.log(3)\n    })\n  }\n}\n")))),Object(c.b)("h3",{id:"3-syncwaterfallhook"},"3. SyncWaterfallHook"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u6267\u884c\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u540c\u6b65\u4e32\u884c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u4e0a\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u7684\u8fd4\u56de\u503c\u53ef\u4ee5\u4f20\u7ed9\u4e0b\u4e00\u4e2a\u76d1\u542c\u51fd\u6570"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u89e6\u53d1\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"tap"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Plugin1 {\n    apply (compiler) {\n      compiler.hooks.assetPath.tap('Plugin1', (filename, data) => {\n        console.log(1, data)\n        return 1\n      })\n    }\n  }\n  class Plugin2 {\n    apply (compiler) {\n      compiler.hooks.assetPath.tap('Plugin2', (filename, data) => {\n        console.log(2, data)\n        return 2\n      })\n    }\n  }\n  class Plugin3 {\n    apply (compiler) {\n      compiler.hooks.assetPath.tap('Plugin3', (filename, data) => {\n        console.log(3, data)\n      })\n    }\n  }\n  // 1 undefined\n  // 2 1\n  // 3 2\n")))),Object(c.b)("h3",{id:"4-asyncserieshook"},"4. AsyncSeriesHook"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u6267\u884c\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u5f02\u6b65\u4e32\u884c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u6309\u7167\u6ce8\u518c\u987a\u5e8f\u8fdb\u884c\u8c03\u7528\u3002\u6240\u6709\u5904\u7406\u51fd\u6570\u8c03\u7528\u4e4b\u540e\u4f1a\u8c03\u7528callback"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u89e6\u53d1\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"tap")," / ",Object(c.b)("inlineCode",{parentName:"p"},"tapAsync")," / ",Object(c.b)("inlineCode",{parentName:"p"},"tapPromise"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import Car from './Car';\n\nconst car = new Car();\ncar.hooks.calculateRoutes.tapPromise('calculateRoutesPlugin1', () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('\u8ba1\u7b97\u8def\u7ebf1');\n\n      resolve();\n    }, 1000);\n  });\n});\n\ncar.hooks.calculateRoutes.tapPromise('calculateRoutesPlugin2', () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('\u8ba1\u7b97\u8def\u7ebf2');\n      resolve();\n    }, 2000);\n  });\n});\n\ncar.calculateRoutes().then(() => { console.log('\u6700\u7ec8\u7684\u56de\u8c03'); });\n// 1s\u8fc7\u540e\uff0c\u6253\u5370\u8ba1\u7b97\u8def\u7ebf1\uff0c\u518d\u8fc72s\uff08\u800c\u4e0d\u662f\u5230\u4e86\u7b2c2s\uff0c\u800c\u662f\u5230\u4e86\u7b2c3s\uff09\uff0c\u6253\u5370\u8ba1\u7b97\u8def\u7ebf2\uff0c\u518d\u7acb\u9a6c\u6253\u5370\u6700\u7ec8\u7684\u56de\u8c03\u3002\n")))),Object(c.b)("h3",{id:"5-asyncwaterfallhook"},"5. AsyncWaterfallHook"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u6267\u884c\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u5f02\u6b65\u4e32\u884c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u6309\u7167\u6ce8\u518c\u987a\u5e8f\u8fdb\u884c\u8c03\u7528\u3002\u6240\u6709\u5904\u7406\u51fd\u6570\u8c03\u7528\u4e4b\u540e\u4f1a\u8c03\u7528callback"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u89e6\u53d1\u65b9\u5f0f\uff1a")," ",Object(c.b)("inlineCode",{parentName:"p"},"tap")," / ",Object(c.b)("inlineCode",{parentName:"p"},"tapAsync")," / ",Object(c.b)("inlineCode",{parentName:"p"},"tapPromise"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import Car from './Car';\n\nconst car = new Car();\ncar.hooks.calculateRoutes.tapPromise('calculateRoutesPlugin1', () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('\u8ba1\u7b97\u8def\u7ebf1');\n\n      resolve();\n    }, 1000);\n  });\n});\n\ncar.hooks.calculateRoutes.tapPromise('calculateRoutesPlugin2', () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('\u8ba1\u7b97\u8def\u7ebf2');\n      resolve();\n    }, 2000);\n  });\n});\n\ncar.calculateRoutes().then(() => { console.log('\u6700\u7ec8\u7684\u56de\u8c03'); });\n// 1s\u8fc7\u540e\uff0c\u6253\u5370\u8ba1\u7b97\u8def\u7ebf1\uff0c\u518d\u8fc72s\uff08\u800c\u4e0d\u662f\u5230\u4e86\u7b2c2s\uff0c\u800c\u662f\u5230\u4e86\u7b2c3s\uff09\uff0c\u6253\u5370\u8ba1\u7b97\u8def\u7ebf2\uff0c\u518d\u7acb\u9a6c\u6253\u5370\u6700\u7ec8\u7684\u56de\u8c03\u3002\n")))),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5f02\u6b65\u4e8b\u4ef6\u7684\u94a9\u5b50\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"tap"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"tapAsync"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"tapPromise"),"\u6765\u76d1\u542c")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u540c\u6b65\u4e8b\u4ef6\u7684\u94a9\u5b50\uff0c\u53ea\u80fd\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"tap"),"\u6765\u76d1\u542c")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"tap"),"\u662f\u901a\u8fc7\u76f4\u63a5",Object(c.b)("inlineCode",{parentName:"p"},"return"),"\u6765\u5904\u7406\u8fd4\u56de\u503c"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{4}","{4}":!0}),"class Plugin2 {\n  apply (compiler) {\n    compiler.hooks.entryOption.tap('Plugin2', (compilation, callback) => {\n      return 6\n    })\n  }\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"tapAsync"),"\u9700\u8981\u901a\u8fc7\u8c03\u7528",Object(c.b)("inlineCode",{parentName:"p"},"callback"),"\u6765\u5904\u7406\u8fd4\u56de\u503c\u3002\u6b64",Object(c.b)("inlineCode",{parentName:"p"},"callback"),"\u5c06\u4f5c\u4e3a\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\u76d1\u542c\u51fd\u6570"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{5}","{5}":!0}),"compiler.hooks.emit.tapAsync('HelloAsyncPlugin', (compilation, callback) => {\n  // \u505a\u4e00\u4e9b\u5f02\u6b65\u7684\u4e8b\u60c5\u2026\u2026\n  setTimeout(function() {\n    console.log('Done with async work...');\n    callback();\n  }, 1000);\n});\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"tapPromise"),"\u9700\u8981\u901a\u8fc7\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"promise"),"\uff0c\u8fd9\u4e2a\u5f02\u6b65\u4efb\u52a1\u5b8c\u6210\u7684\u65f6\u5019\u8c03\u7528",Object(c.b)("inlineCode",{parentName:"p"},"resolve"),"\u6389"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{6}","{6}":!0}),"compiler.hooks.emit.tapPromise('HelloAsyncPlugin', compilation => {\n  // \u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u5728\u6211\u4eec\u7684\u5f02\u6b65\u4efb\u52a1\u5b8c\u6210\u65f6 resolve\u2026\u2026\n  return new Promise((resolve, reject) => {\n    setTimeout(function() {\n      console.log('\u5f02\u6b65\u5de5\u4f5c\u5b8c\u6210\u2026\u2026');\n      resolve();\n    }, 1000);\n  });\n});\n")))))))}b.isMDXComponent=!0},237:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,O=s["".concat(l,".").concat(u)]||s[u]||m[u]||c;return t?r.a.createElement(O,o(o({ref:n},i),{},{components:t})):r.a.createElement(O,o({ref:n},i))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=t[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);