(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{339:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?a.a.createElement(b,p(p({ref:t},u),{},{components:r})):a.a.createElement(b,p({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=(r(0),r(339));const o={},c={unversionedId:"package/node/http/_partial-request-data",id:"package/node/http/_partial-request-data",isDocsHomePage:!1,title:"_partial-request-data",description:"\u8bf7\u6c42\u6570\u636e",source:"@site/docs/package/node/http/_partial-request-data.md",slug:"/package/node/http/_partial-request-data",permalink:"/docs/package/node/http/_partial-request-data",version:"current"},p=[{value:"\u8bf7\u6c42\u6570\u636e",id:"\u8bf7\u6c42\u6570\u636e",children:[{value:"got \u5f3a\u5927\u7684http\u8bf7\u6c42\u5e93",id:"got-\u5f3a\u5927\u7684http\u8bf7\u6c42\u5e93",children:[]}]}],i={rightToc:p};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u8bf7\u6c42\u6570\u636e"},"\u8bf7\u6c42\u6570\u636e"),Object(a.b)("h3",{id:"got-\u5f3a\u5927\u7684http\u8bf7\u6c42\u5e93"},"got \u5f3a\u5927\u7684http\u8bf7\u6c42\u5e93"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sindresorhus/got"}),"got")," \u529f\u80fd\u975e\u5e38\u5f3a\u5927\u7684 http \u8bf7\u6c42\u5e93\uff0c\u652f\u6301\u5404\u79cd\u63d2\u4ef6")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import got from 'got';\nconst {data} = await got.post('https://httpbin.org/anything', {\n  json: {\n    hello: 'world'\n  }\n}).json();\n\nconsole.log(data);\n//=> {\"hello\": \"world\"}\n")))}u.isMDXComponent=!0}}]);