(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{267:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(7),o=(t(0),t(326)),c={id:"tsUnknownType",title:"ts-unknown",hide_title:!0,sidebar_label:"unknown"},i={unversionedId:"ts/goods/tsUnknownType",id:"ts/goods/tsUnknownType",isDocsHomePage:!1,title:"ts-unknown",description:"unknown \u7c7b\u578b\uff0c\u5b83\u662f any \u7c7b\u578b\u5bf9\u5e94\u7684\u5b89\u5168\u7c7b\u578b\u3002",source:"@site/docs/ts/goods/unknow\u7c7b\u578b.md",slug:"/ts/goods/tsUnknownType",permalink:"/docs/ts/goods/tsUnknownType",version:"current",sidebar_label:"unknown",sidebar:"tsdoc",previous:{title:"ts\u4e2d\u7684class",permalink:"/docs/ts/goods/tsClass"},next:{title:"ts-never",permalink:"/docs/ts/goods/tsNeverType"}},s=[{value:"\u7c7b\u578b\u4fdd\u62a4",id:"\u7c7b\u578b\u4fdd\u62a4",children:[]},{value:"\u573a\u666f",id:"\u573a\u666f",children:[{value:"\u4ece localStorage \u4e2d\u8bfb\u53d6JSON",id:"\u4ece-localstorage-\u4e2d\u8bfb\u53d6json",children:[]}]}],l={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"unknown \u7c7b\u578b\uff0c\u5b83\u662f any \u7c7b\u578b\u5bf9\u5e94\u7684\u5b89\u5168\u7c7b\u578b\u3002"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5728\u5bf9 unknown \u7c7b\u578b\u7684\u503c\u6267\u884c\u5927\u591a\u6570\u64cd\u4f5c\u4e4b\u524d\uff0c\u6211\u4eec\u5fc5\u987b\u8fdb\u884c\u67d0\u79cd\u5f62\u5f0f\u7684\u68c0\u67e5\u3002\u800c\u5728\u5bf9 any \u7c7b\u578b\u7684\u503c\u6267\u884c\u64cd\u4f5c\u4e4b\u524d\uff0c\u6211\u4eec\u4e0d\u5fc5\u8fdb\u884c\u4efb\u4f55\u68c0\u67e5\u3002"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const a: unknown = '123'\na.substr(1) // error\n\nif (typeof a === 'string') {\n  a.substr(1) // ok\n}\n")))),Object(o.b)("h2",{id:"\u7c7b\u578b\u4fdd\u62a4"},"\u7c7b\u578b\u4fdd\u62a4"),Object(o.b)("p",null,"\u8981\u60f3\u64cd\u4f5c ",Object(o.b)("inlineCode",{parentName:"p"},"unknown")," \u7c7b\u578b\u6570\u636e\uff0c\u5fc5\u987b\u7f29\u5c0f unknown \u7c7b\u578b\u8303\u56f4\uff0c\u7f29\u5c0f\u8303\u56f4\u5462\uff0c\u5c31\u662f\u901a\u8fc7",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"docs/ts/goods/tsGoods1#5-%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4"}),"\u7c7b\u578b\u4fdd\u62a4"),"\u7684\u65b9\u5f0f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'function stringifyForLogging(value: unknown): string {\n  if (typeof value === "function") {\n    const functionName = value.name || "(anonymous)";\n    return `[function ${functionName}]`;\n  }\n\n  if (value instanceof Date) {\n    return value.toISOString();\n  }\n\n  return String(value);\n}\n')),Object(o.b)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),Object(o.b)("h3",{id:"\u4ece-localstorage-\u4e2d\u8bfb\u53d6json"},"\u4ece localStorage \u4e2d\u8bfb\u53d6JSON"),Object(o.b)("p",null,"\u56e0\u4e3a\u6211\u4eec\u4e0d\u77e5\u9053\u5728\u53cd\u5e8f\u5217\u5316\u6301\u4e45\u5316\u7684 JSON \u5b57\u7b26\u4e32\u540e\u6211\u4eec\u4f1a\u5f97\u5230\u4ec0\u4e48\u7c7b\u578b\u7684\u503c\u3002\u6211\u4eec\u5c06\u4f7f\u7528 unknown \u4f5c\u4e3a\u53cd\u5e8f\u5217\u5316\u503c\u7684\u7c7b\u578b\u3002\u90a3\u4e48\u5728\u4f7f\u7528\u8fd4\u56de\u503c\u4e4b\u524d\u5fc5\u987b\u8fdb\u884c\u67d0\u79cd\u5f62\u5f0f\u7684\u7c7b\u578b\u68c0\u67e5\u3002"))}u.isMDXComponent=!0},326:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(f,i(i({ref:n},l),{},{components:t})):a.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);