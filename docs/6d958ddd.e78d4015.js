(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(7),a=(t(0),t(302)),c={id:"nodeToolUtils",title:"\u8f85\u52a9\u5de5\u5177",hide_title:!0,sidebar_label:"\u8f85\u52a9\u5de5\u5177"},i={unversionedId:"package/node/nodeToolUtils",id:"package/node/nodeToolUtils",isDocsHomePage:!1,title:"\u8f85\u52a9\u5de5\u5177",description:"\u67e5\u8be2\u6570\u636e",source:"@site/docs/package/node/utils.md",slug:"/package/node/nodeToolUtils",permalink:"/docs/package/node/nodeToolUtils",version:"current",sidebar_label:"\u8f85\u52a9\u5de5\u5177",sidebar:"packagedoc",previous:{title:"\u6587\u4ef6\u64cd\u4f5c",permalink:"/docs/package/node/nodeToolFile"},next:{title:"\u4f18\u5316\u6027\u80fd\u7684node\u8d44\u6e90\u5305",permalink:"/docs/package/node/nodePerformancePkg"}},l=[{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",children:[{value:"fullname \u67e5\u8be2\u8bbe\u5907\u767b\u5f55\u7528\u6237",id:"fullname-\u67e5\u8be2\u8bbe\u5907\u767b\u5f55\u7528\u6237",children:[]}]},{value:"\u64cd\u4f5c\u6570\u636e",id:"\u64cd\u4f5c\u6570\u636e",children:[{value:"open \u6253\u5f00\u5404\u79cd\u6587\u4ef6",id:"open-\u6253\u5f00\u5404\u79cd\u6587\u4ef6",children:[]}]}],p={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),Object(a.b)("h3",{id:"fullname-\u67e5\u8be2\u8bbe\u5907\u767b\u5f55\u7528\u6237"},"fullname \u67e5\u8be2\u8bbe\u5907\u767b\u5f55\u7528\u6237"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sindresorhus/fullname"}),"fullname"),", \u8de8\u5e73\u53f0\u652f\u6301\u67e5\u8be2\u5f53\u524d\u8bbe\u5907\u767b\u5f55\u7528\u6237")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const fullName = require('fullname');\n\n(async () => {\n  console.log(await fullName());\n  //=> 'Sindre Sorhus'\n})();\n")),Object(a.b)("h2",{id:"\u64cd\u4f5c\u6570\u636e"},"\u64cd\u4f5c\u6570\u636e"),Object(a.b)("h3",{id:"open-\u6253\u5f00\u5404\u79cd\u6587\u4ef6"},"open \u6253\u5f00\u5404\u79cd\u6587\u4ef6"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sindresorhus/open"}),"open")," \u8de8\u5e73\u53f0\u6253\u5f00\u5404\u79cd\u683c\u5f0f\u7684\u6587\u4ef6")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const open = require('open');\n\nawait open('unicorn.png', {wait: true});\nconsole.log('The image viewer app quit');\n\nawait open('https://sindresorhus.com');\n\nawait open('https://sindresorhus.com', {app: {name: 'firefox'}});\n\nawait open('https://sindresorhus.com', {app: {name: 'google chrome', arguments: ['--incognito']}});\n")))}u.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(f,i(i({ref:n},p),{},{components:t})):o.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);