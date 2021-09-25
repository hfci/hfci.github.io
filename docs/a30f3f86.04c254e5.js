(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(237));const o={id:"version4.2.0",title:"ts\u66f4\u65b0\u65e5\u5fd7-4.2.0",hide_title:!0,sidebar_label:"4.2.0"},i={unversionedId:"ts/update/version4.2.0",id:"ts/update/version4.2.0",isDocsHomePage:!1,title:"ts\u66f4\u65b0\u65e5\u5fd7-4.2.0",description:"4.2.0",source:"@site/docs/ts/update/4.2.0.md",slug:"/ts/update/version4.2.0",permalink:"/docs/ts/update/version4.2.0",version:"current",sidebar_label:"4.2.0",sidebar:"tsdoc",previous:{title:"ts\u66f4\u65b0\u65e5\u5fd7-4.3.0",permalink:"/docs/ts/update/version4.3"},next:{title:"ts\u66f4\u65b0\u65e5\u5fd7-4.1.0",permalink:"/docs/ts/update/version4.1"}},c=[{value:"1. \u89e3\u6784\u53ef\u7528\u4e8e\u5143\u7956\u7684\u4efb\u4f55\u4f4d\u7f6e",id:"1-\u89e3\u6784\u53ef\u7528\u4e8e\u5143\u7956\u7684\u4efb\u4f55\u4f4d\u7f6e",children:[]}],p={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"420"},"4.2.0"),Object(a.b)("h3",{id:"1-\u89e3\u6784\u53ef\u7528\u4e8e\u5143\u7956\u7684\u4efb\u4f55\u4f4d\u7f6e"},"1. \u89e3\u6784\u53ef\u7528\u4e8e\u5143\u7956\u7684\u4efb\u4f55\u4f4d\u7f6e"),Object(a.b)("p",null,"\u5728\u4e4b\u524d\u7248\u672c\u4e2d ",Object(a.b)("inlineCode",{parentName:"p"},"Rest")," \u53c2\u6570\u53ea\u80fd\u5728\u5143\u7956\u672b\u5c3e\u5904\u4f7f\u7528\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"type T1 = [number, ...string[]] // number\u540e\u8ddf\u7740\u4efb\u610f\u4e2astring\n\ntype T2 = [boolean, ...string[], number] // \u274c error: A rest element must be last in a tuple type\n")),Object(a.b)("p",null,"\u73b0\u5728\u53ef\u7528\u4e8e\u4efb\u4f55\u4f4d\u7f6e\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"type T1 = [...string[], number] // \u4efb\u610f\u4e2astring\u8ddf\u7740\u4e00\u4e2anumber\n\ntype T2 = [number, ...string[], number] // string\u4e4b\u524d\u5404\u6709\u4e00\u4e2anumber\n")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u9650\u5236")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5143\u7956\u4e2d\u53ea\u80fd\u6709\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"Rest")," \u53c2\u6570"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"type T1 = [...string[], ...number[]] // \u274c error: A rest element cannot follow another rest element.\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"Rest")," \u53c2\u6570\u540e\u4e0d\u80fd\u51fa\u73b0\u53ef\u9009\u53c2\u6570"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"type T2 = [...string[], number?] // \u274c error: An optional element cannot follow a rest element.\n")))))))}l.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);