(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(7),i=(n(0),n(361)),o={id:"webpackImportantMethod",title:"import()",hide_title:!0,sidebar_label:"import()"},c={unversionedId:"enginee/webpack/webpackImportantMethod",id:"enginee/webpack/webpackImportantMethod",isDocsHomePage:!1,title:"import()",description:"import(\u52a8\u6001\u8868\u8fbe\u5f0f)",source:"@site/docs/enginee/webpack/import\u65b9\u6cd5.md",slug:"/enginee/webpack/webpackImportantMethod",permalink:"/docs/enginee/webpack/webpackImportantMethod",version:"current",sidebar_label:"import()",sidebar:"babeldoc",previous:{title:"optimization",permalink:"/docs/enginee/webpack/webpackOptimization"},next:{title:"splitChunks",permalink:"/docs/enginee/webpack/webpackOftenPkg"}},p=[{value:"import(\u52a8\u6001\u8868\u8fbe\u5f0f)",id:"import\u52a8\u6001\u8868\u8fbe\u5f0f",children:[]}],b={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"import\u52a8\u6001\u8868\u8fbe\u5f0f"},"import(\u52a8\u6001\u8868\u8fbe\u5f0f)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"import()"),"\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u52a8\u6001\u8868\u8fbe\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// \u60f3\u8c61\u6211\u4eec\u6709\u4e00\u4e2a\u4ece cookies \u6216\u5176\u4ed6\u5b58\u50a8\u4e2d\u83b7\u53d6\u8bed\u8a00\u7684\u65b9\u6cd5\nconst language = detectVisitorLanguage();\nimport(`./locale/${language}.json`).then(module => {\n  // do something with the translations\n});\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4e0d\u80fd\u4f7f\u7528\u5b8c\u5168\u52a8\u6001\u7684\u65b9\u5f0f\uff0c\u5fc5\u987b\u5305\u542b\u4e00\u4e9b\u8def\u5f84\u4fe1\u606f\uff0c\u5982",Object(i.b)("inlineCode",{parentName:"p"},"import(foo)"),"\u662f\u4e0d\u53ef\u4ee5\u7684\uff0c\u4f46\u662f",Object(i.b)("inlineCode",{parentName:"p"},"import(`./locale/${language}.json`)"),"\u662f\u53ef\u4ee5\u7684\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528\u52a8\u6001\u8868\u8fbe\u5f0f\u7684\u65f6\u5019\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"webpack"),"\u4f1a\u628a\u53ef\u80fd\u7684\u6a21\u5757\u90fd\u6253\u5305\u751f\u6210\u6bcf\u4e00\u4e2a\u53ef\u80fd\u7684",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\uff0c\u6700\u540e\u4ee3\u7801\u8fd0\u884c\u9636\u6bb5\uff0c\u786e\u5b9a\u4e86\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u5c31\u53ea\u52a0\u8f7d\u8fd9\u4e2a\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5b8c\u5168\u52a8\u6001\u7684\uff0c\u90a3\u4e48",Object(i.b)("inlineCode",{parentName:"li"},"webpack"),"\u662f\u65e0\u6cd5\u5206\u6790\u7684\uff0c\u5fc5\u987b\u5305\u542b\u4e00\u4e9b\u8def\u5f84\u4fe1\u606f\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5982",Object(i.b)("inlineCode",{parentName:"li"},"import(`./locale/${language}.json`)"),"\uff0c\u4f1a\u628a",Object(i.b)("inlineCode",{parentName:"li"},"locale"),"\u76ee\u5f55\u4e0b\u6240\u6709\u7684",Object(i.b)("inlineCode",{parentName:"li"},"json"),"\u6587\u4ef6\u90fd\u6253\u5305\u51fa\u6bcf\u4e2a\u5bf9\u5e94\u7684\u6587\u4ef6\uff0c\u4f9b\u672a\u6765\u7684\u7ed3\u679c\u52a0\u8f7d\u3002"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f8b\u5b50\uff1a"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 components\n    \u251c\u2500\u2500 a.js\n    \u251c\u2500\u2500 b.js\n\u251c\u2500\u2500 index.js\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),"function test() {\n  return 'a'\n}\n\nimport(`./components/${test()}.js`).then((res) => {\n  console.log(res)\n})\n")),Object(i.b)("p",{parentName:"li"},"\u6700\u7ec8\u4f1a\u6253\u5305\u51fa\u6765",Object(i.b)("inlineCode",{parentName:"p"},"a,b"),"\u4e24\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"bundle"),"\uff0c\u4f9b\u4f7f\u7528\uff0c\u4f46\u662f\u6700\u7ec8\u53ea\u4f1a\u52a0\u8f7d",Object(i.b)("inlineCode",{parentName:"p"},"a bundle"),"\u3002"))))))}l.isMDXComponent=!0},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(o,".").concat(u)]||m[u]||s[u]||i;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);