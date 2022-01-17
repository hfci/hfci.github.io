(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{304:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(7),c=(t(0),t(361)),o={id:"nodePerformancePkg",title:"\u4f18\u5316\u6027\u80fd\u7684node\u8d44\u6e90\u5305",hide_title:!0,sidebar_label:"\u63d0\u9ad8\u6027\u80fd"},i={unversionedId:"package/node/nodePerformancePkg",id:"package/node/nodePerformancePkg",isDocsHomePage:!1,title:"\u4f18\u5316\u6027\u80fd\u7684node\u8d44\u6e90\u5305",description:"\u591a\u7ebf\u7a0b",source:"@site/docs/package/node/\u4f18\u5316\u6027\u80fd\u7684\u5305.md",slug:"/package/node/nodePerformancePkg",permalink:"/docs/package/node/nodePerformancePkg",version:"current",sidebar_label:"\u63d0\u9ad8\u6027\u80fd",sidebar:"packagedoc",previous:{title:"\u8f85\u52a9\u5de5\u5177",permalink:"/docs/package/node/nodeToolUtils"},next:{title:"\u5e38\u7528\u7684node\u8d44\u6e90\u5305",permalink:"/docs/package/node/nodeToolPkg"}},s=[{value:"\u591a\u7ebf\u7a0b",id:"\u591a\u7ebf\u7a0b",children:[{value:"piscina \u5feb\u901f\u9ad8\u6548\u7684\u521b\u5efa\u7ebf\u7a0b\u6c60",id:"piscina-\u5feb\u901f\u9ad8\u6548\u7684\u521b\u5efa\u7ebf\u7a0b\u6c60",children:[]},{value:"napajs \u5f00\u542f\u591a\u7ebf\u7a0b\uff0c\u800c\u4e14\u80fd\u76f8\u4e92\u901a\u4fe1",id:"napajs-\u5f00\u542f\u591a\u7ebf\u7a0b\uff0c\u800c\u4e14\u80fd\u76f8\u4e92\u901a\u4fe1",children:[]}]},{value:"\u6587\u4ef6\u64cd\u4f5c",id:"\u6587\u4ef6\u64cd\u4f5c",children:[{value:"1. memfs - \u5185\u5b58\u6587\u4ef6\u7cfb\u7edf",id:"1-memfs---\u5185\u5b58\u6587\u4ef6\u7cfb\u7edf",children:[]}]}],p={rightToc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u591a\u7ebf\u7a0b"},"\u591a\u7ebf\u7a0b"),Object(c.b)("h3",{id:"piscina-\u5feb\u901f\u9ad8\u6548\u7684\u521b\u5efa\u7ebf\u7a0b\u6c60"},"piscina \u5feb\u901f\u9ad8\u6548\u7684\u521b\u5efa\u7ebf\u7a0b\u6c60"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/piscinajs/piscina"}),"piscina")," \u652f\u6301 CommonJS\u3001ESM \u548c TypeScript \u529f\u80fd\u5f3a\u5927\u7684\u4f7f\u7528\u591a\u7ebf\u7a0b")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const path = require('path')\nconst Piscina = require('piscina')\n\nconst piscina = new Piscina({\n  filename: path.resolve(__dirname, 'worker.js')\n})\n\n;(async function () {\n  const result = await piscina.run({a: 4, b: 6})\n  console.log(result) // Prints 10\n})()\n\n// worker.js\nmodule.exports = ({a, b}) => {\n  return a + b\n}\n")),Object(c.b)("h3",{id:"napajs-\u5f00\u542f\u591a\u7ebf\u7a0b\uff0c\u800c\u4e14\u80fd\u76f8\u4e92\u901a\u4fe1"},"napajs \u5f00\u542f\u591a\u7ebf\u7a0b\uff0c\u800c\u4e14\u80fd\u76f8\u4e92\u901a\u4fe1"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/napajs"}),"napajs")," \u652f\u6301\u8de8\u7ebf\u7a0b\u4e4b\u95f4\u6570\u636e\u4f20\u8f93\u548c\u5171\u4eab")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const napa = require('napajs')\nconst zone1 = napa.zone.create('zone1', {workers: 4})\n\nzone1.broadcast('console.log(\"hello world\");')\n\nzone1\n  .execute(text => text, ['hello napa'])\n  .then(result => {\n    console.log(result.value)\n  })\n")),Object(c.b)("h2",{id:"\u6587\u4ef6\u64cd\u4f5c"},"\u6587\u4ef6\u64cd\u4f5c"),Object(c.b)("h3",{id:"1-memfs---\u5185\u5b58\u6587\u4ef6\u7cfb\u7edf"},Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/streamich/memfs"}),"1. ",Object(c.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/streamich/memfs?label=memfs&style=social",alt:"memfs - \u5185\u5b58\u6587\u4ef6\u7cfb\u7edf"})))),Object(c.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"fs"),"\u4e00\u6837\u7684",Object(c.b)("inlineCode",{parentName:"p"},"api"),"\uff0c\u5c06\u6587\u4ef6\u5199\u5165\u5185\u5b58\u4e2d\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import {fs} from 'memfs'\n\nfs.writeFileSync('/hello.txt', 'World!')\nfs.readFileSync('/hello.txt', 'utf8') // World!\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"webpack-dev-middleware \u4f7f\u7528 memory-fs\uff0c\u501f\u52a9 memory-fs\uff0c\u53ef\u4ee5\u5c06 compiler \u7684 outputFileSystem \u8bbe\u7f6e\u6210 MemoryFileSystem\uff0c\u8fd9\u6837\u4ee5\u5185\u5b58\u8bfb\u5199\u7684\u65b9\u5f0f\uff0c\u5c06\u8d44\u6e90\u7f16\u8bd1\u6587\u4ef6\u4e0d\u843d\u5730\u8f93\u51fa\uff0c\u5927\u5927\u63d0\u9ad8\u6784\u5efa\u6027\u80fd\u3002"))))}l.isMDXComponent=!0},361:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||c;return t?r.a.createElement(u,i(i({ref:n},p),{},{components:t})):r.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);