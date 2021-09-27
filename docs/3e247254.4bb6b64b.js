(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{237:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),p=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,u=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return t?o.a.createElement(u,i(i({ref:n},m),{},{components:t})):o.a.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(237)),c={id:"nodeES6",title:"node\u5982\u4f55\u5904\u7406ES6",hide_title:!0,sidebar_label:"node\u5982\u4f55\u5904\u7406ES6"},i={unversionedId:"node/basic/nodeES6",id:"node/basic/nodeES6",isDocsHomePage:!1,title:"node\u5982\u4f55\u5904\u7406ES6",description:"\u6587\u4ef6\u533a\u5206",source:"@site/docs/node/basic/\u5982\u4f55\u5904\u7406ES6\u6a21\u5757.md",slug:"/node/basic/nodeES6",permalink:"/docs/node/basic/nodeES6",version:"current",sidebar_label:"node\u5982\u4f55\u5904\u7406ES6",sidebar:"nodedoc",previous:{title:"Streams(\u6d41)",permalink:"/docs/node/nodeStreams"},next:{title:"package\u5305\u7684\u5165\u53e3\u70b9",permalink:"/docs/node/basic/nodePackageEntry"}},s=[{value:"\u6587\u4ef6\u533a\u5206",id:"\u6587\u4ef6\u533a\u5206",children:[]},{value:"CommonJS \u6a21\u5757\u52a0\u8f7d ES6 \u6a21\u5757",id:"commonjs-\u6a21\u5757\u52a0\u8f7d-es6-\u6a21\u5757",children:[]},{value:"ES6 \u6a21\u5757\u52a0\u8f7d CommonJS \u6a21\u5757",id:"es6-\u6a21\u5757\u52a0\u8f7d-commonjs-\u6a21\u5757",children:[]}],m={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6587\u4ef6\u533a\u5206"},"\u6587\u4ef6\u533a\u5206"),Object(a.b)("p",null,'Node.js \u8981\u6c42 ES6 \u6a21\u5757\u91c7\u7528.mjs\u540e\u7f00\u6587\u4ef6\u540d\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u8981\u811a\u672c\u6587\u4ef6\u91cc\u9762\u4f7f\u7528import\u6216\u8005export\u547d\u4ee4\uff0c\u90a3\u4e48\u5c31\u5fc5\u987b\u91c7\u7528.mjs\u540e\u7f00\u540d\u3002Node.js \u9047\u5230.mjs\u6587\u4ef6\uff0c\u5c31\u8ba4\u4e3a\u5b83\u662f ES6 \u6a21\u5757\uff0c\u9ed8\u8ba4\u542f\u7528\u4e25\u683c\u6a21\u5f0f\uff0c\u4e0d\u5fc5\u5728\u6bcf\u4e2a\u6a21\u5757\u6587\u4ef6\u9876\u90e8\u6307\u5b9a"use strict"\u3002'),Object(a.b)("p",null,"\u5982\u679c\u4e0d\u5e0c\u671b\u5c06\u540e\u7f00\u540d\u6539\u6210.mjs\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u7684package.json\u6587\u4ef6\u4e2d\uff0c\u6307\u5b9atype\u5b57\u6bb5\u4e3amodule\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "module"\n}\n')),Object(a.b)("p",null,"\u4e00\u65e6\u8bbe\u7f6e\u4e86\u4ee5\u540e\uff0c\u8be5\u76ee\u5f55\u91cc\u9762\u7684 JS \u811a\u672c\uff0c\u5c31\u88ab\u89e3\u91ca\u7528 ES6 \u6a21\u5757\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"node index.js\n")),Object(a.b)("p",null,"\u5982\u679c\u8fd9\u65f6\u8fd8\u8981\u4f7f\u7528 CommonJS \u6a21\u5757\uff0c\u90a3\u4e48\u9700\u8981\u5c06 CommonJS \u811a\u672c\u7684\u540e\u7f00\u540d\u90fd\u6539\u6210.cjs\u3002\u5982\u679c\u6ca1\u6709type\u5b57\u6bb5\uff0c\u6216\u8005type\u5b57\u6bb5\u4e3acommonjs\uff0c\u5219.js\u811a\u672c\u4f1a\u88ab\u89e3\u91ca\u6210 CommonJS \u6a21\u5757\u3002"),Object(a.b)("div",{className:"admonition admonition-success alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u603b\u7ed3")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},".mjs\u6587\u4ef6\u603b\u662f\u4ee5 ES6 \u6a21\u5757\u52a0\u8f7d\uff0c.cjs\u6587\u4ef6\u603b\u662f\u4ee5 CommonJS \u6a21\u5757\u52a0\u8f7d\uff0c.js\u6587\u4ef6\u7684\u52a0\u8f7d\u53d6\u51b3\u4e8epackage.json\u91cc\u9762type\u5b57\u6bb5\u7684\u8bbe\u7f6e\u3002"))),Object(a.b)("h2",{id:"commonjs-\u6a21\u5757\u52a0\u8f7d-es6-\u6a21\u5757"},"CommonJS \u6a21\u5757\u52a0\u8f7d ES6 \u6a21\u5757"),Object(a.b)("p",null,"CommonJS \u7684require()\u547d\u4ee4\u4e0d\u80fd\u52a0\u8f7d ES6 \u6a21\u5757\uff0c\u4f1a\u62a5\u9519\uff0c\u53ea\u80fd\u4f7f\u7528import()\u8fd9\u4e2a\u65b9\u6cd5\u52a0\u8f7d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"(async () => {\n  await import('./my-app.mjs');\n})();\n")),Object(a.b)("p",null,"require()\u4e0d\u652f\u6301 ES6 \u6a21\u5757\u7684\u4e00\u4e2a\u539f\u56e0\u662f\uff0c\u5b83\u662f\u540c\u6b65\u52a0\u8f7d\uff0c\u800c ES6 \u6a21\u5757\u5185\u90e8\u53ef\u4ee5\u4f7f\u7528\u9876\u5c42await\u547d\u4ee4\uff0c\u5bfc\u81f4\u65e0\u6cd5\u88ab\u540c\u6b65\u52a0\u8f7d\u3002"),Object(a.b)("h2",{id:"es6-\u6a21\u5757\u52a0\u8f7d-commonjs-\u6a21\u5757"},"ES6 \u6a21\u5757\u52a0\u8f7d CommonJS \u6a21\u5757"),Object(a.b)("p",null,"ES6 \u6a21\u5757\u7684import\u547d\u4ee4\u53ef\u4ee5\u52a0\u8f7d CommonJS \u6a21\u5757\uff0c\u4f46\u662f\u53ea\u80fd\u6574\u4f53\u52a0\u8f7d\uff0c\u4e0d\u80fd\u53ea\u52a0\u8f7d\u5355\u4e00\u7684\u8f93\u51fa\u9879\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// \u6b63\u786e\nimport packageMain from 'commonjs-package';\n\n// \u62a5\u9519\nimport { method } from 'commonjs-package';\n")))}p.isMDXComponent=!0}}]);