(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{302:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=n,b=s["".concat(c,".").concat(d)]||s[d]||f[d]||o;return t?a.a.createElement(b,i(i({ref:r},u),{},{components:t})):a.a.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(7),o=(t(0),t(302)),c={},i={unversionedId:"package/node/file/_partial-create",id:"package/node/file/_partial-create",isDocsHomePage:!1,title:"_partial-create",description:"\u521b\u5efa",source:"@site/docs/package/node/file/_partial-create.md",slug:"/package/node/file/_partial-create",permalink:"/docs/package/node/file/_partial-create",version:"current"},p=[{value:"\u521b\u5efa",id:"\u521b\u5efa",children:[{value:"make-dir",id:"make-dir",children:[]}]}],u={rightToc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u521b\u5efa"},"\u521b\u5efa"),Object(o.b)("h3",{id:"make-dir"},"make-dir"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sindresorhus/make-dir"}),"make-dir")," \u9012\u5f52\u521b\u5efa\u76ee\u5f55")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const makeDir = require('make-dir');\n(async () => {\n  const path = await makeDir('unicorn/rainbow/cake');\n\n  console.log(path);\n  //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'\n})();\n")))}l.isMDXComponent=!0}}]);