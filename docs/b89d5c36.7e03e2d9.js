(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),o=(n(0),n(361)),c={id:"version4.3",title:"ts\u66f4\u65b0\u65e5\u5fd7-4.3.0",hide_title:!0,sidebar_label:"4.3.0"},i={unversionedId:"ts/update/version4.3",id:"ts/update/version4.3",isDocsHomePage:!1,title:"ts\u66f4\u65b0\u65e5\u5fd7-4.3.0",description:"4.3.0",source:"@site/docs/ts/update/4.3.0.md",slug:"/ts/update/version4.3",permalink:"/docs/ts/update/version4.3",version:"current",sidebar_label:"4.3.0",sidebar:"tsdoc",previous:{title:"ts-commonjs\u652f\u6301",permalink:"/docs/ts/goods/tsSupportCommonJs"},next:{title:"ts\u66f4\u65b0\u65e5\u5fd7-4.2.0",permalink:"/docs/ts/update/version4.2.0"}},s=[{value:"1. get &amp; set \u7c7b\u578b",id:"1-get--set-\u7c7b\u578b",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"430"},"4.3.0"),Object(o.b)("h3",{id:"1-get--set-\u7c7b\u578b"},"1. get & set \u7c7b\u578b"),Object(o.b)("p",null,"\u5141\u8bb8\u540c\u4e00\u4e2a\u5c5e\u6027\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"get")," \u8fd4\u56de\u503c \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"set")," \u63a5\u6536\u503c\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u7c7b\u578b\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,6}","{3,6}":!0}),"const obj: Thing = {\n  item: '1',\n  get size(): number {\n    return 1\n  },\n  set size(val: string) {\n    this.item = val\n  }\n}\n")),Object(o.b)("div",{className:"admonition admonition-success alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u73b0\u5728\u662f\u6709\u6548\u7684\uff1a"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"interface Thing {\n  get size(): number\n  set size(value: number | string | boolean);\n}\n")))))}u.isMDXComponent=!0},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);