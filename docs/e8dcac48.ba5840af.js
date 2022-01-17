(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{301:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(7),c=(t(0),t(361)),o={id:"webpackFood",title:"webpack\u77e5\u8bc6\u70b9",hide_title:!0,sidebar_label:"\u77e5\u8bc6\u70b9"},i={unversionedId:"enginee/webpack/webpackFood",id:"enginee/webpack/webpackFood",isDocsHomePage:!1,title:"webpack\u77e5\u8bc6\u70b9",description:"\u591a\u6a21\u5757\u7f16\u8bd1",source:"@site/docs/enginee/webpack/webpack\u77e5\u8bc6\u70b9.md",slug:"/enginee/webpack/webpackFood",permalink:"/docs/enginee/webpack/webpackFood",version:"current",sidebar_label:"\u77e5\u8bc6\u70b9",sidebar:"babeldoc",previous:{title:"splitChunks",permalink:"/docs/enginee/webpack/webpackOftenPkg"},next:{title:"webpack\u6253\u5305\u8d44\u6e90\u5305\u6ce8\u610f\u4e8b\u9879",permalink:"/docs/enginee/webpack/webpackComponentNotice"}},p=[{value:"\u591a\u6a21\u5757\u7f16\u8bd1",id:"\u591a\u6a21\u5757\u7f16\u8bd1",children:[]},{value:"Compiler",id:"compiler",children:[{value:"\u62ff\u5230compiler",id:"\u62ff\u5230compiler",children:[]},{value:"hooks",id:"hooks",children:[]}]},{value:"\u70ed\u66f4\u65b0\u95ee\u9898",id:"\u70ed\u66f4\u65b0\u95ee\u9898",children:[{value:"1. \u4ee3\u7406\u6216\u8005\u66ff\u6362 host \u60c5\u51b5\u4e0b\u89e3\u51b3\u70ed\u66f4\u65b0\u95ee\u9898",id:"1-\u4ee3\u7406\u6216\u8005\u66ff\u6362-host-\u60c5\u51b5\u4e0b\u89e3\u51b3\u70ed\u66f4\u65b0\u95ee\u9898",children:[]}]},{value:"\u9ad8\u7ea7\u914d\u7f6e\u9879",id:"\u9ad8\u7ea7\u914d\u7f6e\u9879",children:[{value:"1. performance \u63a7\u5236 webpack \u5982\u4f55\u901a\u77e5\u8d44\u6e90(asset)\u548c\u5165\u53e3\u8d77\u70b9\u8d85\u8fc7\u6307\u5b9a\u6587\u4ef6\u9650\u5236",id:"1-performance-\u63a7\u5236-webpack-\u5982\u4f55\u901a\u77e5\u8d44\u6e90asset\u548c\u5165\u53e3\u8d77\u70b9\u8d85\u8fc7\u6307\u5b9a\u6587\u4ef6\u9650\u5236",children:[]}]}],b={rightToc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u591a\u6a21\u5757\u7f16\u8bd1"},"\u591a\u6a21\u5757\u7f16\u8bd1"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"MultiCompiler"),"\u6a21\u5757\u5141\u8bb8 ",Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u5728\u5355\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"compiler")," \u4e2d\u8fd0\u884c\u591a\u4e2a\u914d\u7f6e\u3002 \u5982\u679c ",Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"NodeJS")," ",Object(c.b)("inlineCode",{parentName:"p"},"API")," \u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\uff0c\u662f\u4e00\u4e2a\u7531 ",Object(c.b)("inlineCode",{parentName:"p"},"options")," \u6784\u6210\u7684\u6570\u7ec4\uff0c\u5219 ",Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u4f1a\u5bf9\u5176\u5e94\u7528\u5355\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"compiler"),"\uff0c\u5e76\u5728\u6240\u6709 ",Object(c.b)("inlineCode",{parentName:"p"},"compiler")," \u6267\u884c\u7ed3\u675f\u65f6\uff0c\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"callback")," \u65b9\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{12}","{12}":!0}),"var webpack = require('webpack');\n\nvar config1 = {\n  entry: './index1.js',\n  output: {filename: 'bundle1.js'}\n}\nvar config2 = {\n  entry: './index2.js',\n  output: {filename:'bundle2.js'}\n}\n\nwebpack([config1, config2], (err, stats) => {\n  process.stdout.write(stats.toString() + \"\\n\");\n})\n")),Object(c.b)("h2",{id:"compiler"},"Compiler"),Object(c.b)("p",null,"\u901a\u8fc7",Object(c.b)("inlineCode",{parentName:"p"},"node api"),"\u6765\u7f16\u8bd1"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const webpack = require("webpack");\n\nwebpack(webpackConfig, (err, stats) => {\n  if (err || stats.hasErrors()) {\n    // \u5728\u8fd9\u91cc\u5904\u7406\u9519\u8bef\n  }\n  // \u5904\u7406\u5b8c\u6210\n})\n')),Object(c.b)("h3",{id:"\u62ff\u5230compiler"},"\u62ff\u5230compiler"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u4e0d\u5411 ",Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u6267\u884c\u51fd\u6570\u4f20\u5165\u56de\u8c03\u51fd\u6570\uff0c\u5c31\u4f1a\u5f97\u5230\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"webpack")," ",Object(c.b)("inlineCode",{parentName:"p"},"Compiler")," \u5b9e\u4f8b\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\u624b\u52a8\u89e6\u53d1 ",Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u6267\u884c\u5668\uff0c\u6216\u8005\u662f\u8ba9\u5b83\u6267\u884c\u6784\u5efa\u5e76\u76d1\u542c\u53d8\u66f4\u3002\u548c ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.docschina.org/api/cli/"}),"CLI API"),"  \u5f88\u7c7b\u4f3c\u3002",Object(c.b)("inlineCode",{parentName:"p"},"Compiler")," \u5b9e\u4f8b\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"run(callback)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"watch(watchOptions, handler)"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const webpack = require("webpack");\n\nconst compiler = webpack({\n  // \u914d\u7f6e\u5bf9\u8c61\n});\n\ncompiler.run((err, stats) => {\n  // ...\n});\n')),Object(c.b)("h3",{id:"hooks"},Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://webpack.js.org/api/compiler-hooks/#hooks"}),"hooks")),Object(c.b)("p",null,"\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\uff0c\u662f\u7531 compiler \u66b4\u9732\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8bbf\u95ee:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"compiler.hooks.someHook.tap(/* ... */)\n")),Object(c.b)("p",null,"\u4f8b\u5982",Object(c.b)("inlineCode",{parentName:"p"},"afterPlugins"),"(",Object(c.b)("strong",{parentName:"p"},"\u8bbe\u7f6e\u5b8c\u521d\u59cb\u63d2\u4ef6\u4e4b\u540e"),")"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"compiler.hooks.afterPlugins.tap(() => {\n  ...\n})\n")),Object(c.b)("h2",{id:"\u70ed\u66f4\u65b0\u95ee\u9898"},"\u70ed\u66f4\u65b0\u95ee\u9898"),Object(c.b)("h3",{id:"1-\u4ee3\u7406\u6216\u8005\u66ff\u6362-host-\u60c5\u51b5\u4e0b\u89e3\u51b3\u70ed\u66f4\u65b0\u95ee\u9898"},"1. \u4ee3\u7406\u6216\u8005\u66ff\u6362 host \u60c5\u51b5\u4e0b\u89e3\u51b3\u70ed\u66f4\u65b0\u95ee\u9898"),Object(c.b)("p",null,"\u9700\u8981\u914d\u7f6e",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/dev-server/#devserversockhost"}),"sockHost"),"\u6765\u89e3\u51b3"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{5,14}","{5,14}":!0}),'{\n  "devServer": {\n    "host": "0.0.0.0",\n    "port": 8080,\n    "disableHostCheck": true,\n    "hot": true,\n    "overlay": {\n      "warnings": true,\n      "errors": true\n    },\n    "contentBase": "dist",\n    "quiet": true,\n    "hotOnly": true,\n    "sockHost": "v2.zhaogang.com"\n  }\n}\n')),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"disableHostCheck"),"\u662f\u4e3a\u4e86\u89e3\u51b3\u914d\u7f6e",Object(c.b)("inlineCode",{parentName:"p"},"host"),"\u60c5\u51b5\u4e0b\u6821\u9a8c\u95ee\u9898"))),Object(c.b)("h2",{id:"\u9ad8\u7ea7\u914d\u7f6e\u9879"},"\u9ad8\u7ea7\u914d\u7f6e\u9879"),Object(c.b)("h3",{id:"1-performance-\u63a7\u5236-webpack-\u5982\u4f55\u901a\u77e5\u8d44\u6e90asset\u548c\u5165\u53e3\u8d77\u70b9\u8d85\u8fc7\u6307\u5b9a\u6587\u4ef6\u9650\u5236"},"1. performance \u63a7\u5236 webpack \u5982\u4f55\u901a\u77e5\u8d44\u6e90(asset)\u548c\u5165\u53e3\u8d77\u70b9\u8d85\u8fc7\u6307\u5b9a\u6587\u4ef6\u9650\u5236"),Object(c.b)("p",null,"\u5f53\u6587\u4ef6\u5927\u5c0f\u8d85\u51fa\u8bbe\u7f6e\u7684\u8d44\u6e90\u5305\u5927\u5c0f\u7684\u65f6\u5019\uff0c\u7ed9\u51fa\u8b66\u544a\uff0c\u6216\u8005\u7f16\u8bd1\u9519\u8bef\uff0c",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.docschina.org/configuration/performance/"}),"webpack performance")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  peformance: {\n    hints: 'error',\n    maxAssetSize: 300 * 1026,\n    maxEntrypointSize: 300 * 1026\n  }\n}\n")))}l.isMDXComponent=!0},361:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=a,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||c;return t?r.a.createElement(u,i(i({ref:n},b),{},{components:t})):r.a.createElement(u,i({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);