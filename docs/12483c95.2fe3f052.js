(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{326:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},327:function(e,t,n){"use strict";var a=n(0),r=n(21);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},328:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(15),c=n(329),o=n(11);const b=Object(a.createContext)({collectLink:()=>{}});var s=n(331),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:p,href:u,activeClassName:d,isActive:m,"data-noBrokenLinkCheck":O}=e,j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]);const{withBaseUrl:N}=Object(s.b)(),g=Object(a.useContext)(b),f=p||u,v=Object(c.a)(f),h=null==f?void 0:f.replace("pathname://",""),y=void 0!==h?(e=>e.startsWith("/"))(w=h)?N(w):w:void 0;var w;const C=Object(a.useRef)(!1),x=n?i.e:i.c,k=o.a.canUseIntersectionObserver;let T;Object(a.useEffect)((()=>(!k&&v&&window.docusaurus.prefetch(y),()=>{k&&T&&T.disconnect()})),[y,k,v]);const S=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,D=!y||!v||S;return y&&v&&!S&&!O&&g.collectLink(y),D?r.a.createElement("a",Object.assign({href:y},f&&!v&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(x,Object.assign({},j,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(y),C.current=!0)},innerRef:e=>{var t,n;k&&e&&v&&(t=e,n=()=>{window.docusaurus.prefetch(y)},T=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))})),T.observe(t))},to:y||""},n&&{isActive:m,activeClassName:d}))}},329:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},331:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(327),r=n(329);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,a)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(326)),c=n(328),o={id:"typescriptTsConfigJSON",title:"tsconfig.json",hide_title:!0,sidebar_label:"tsconfig.json"},b={unversionedId:"enginee/typescript/typescriptTsConfigJSON",id:"enginee/typescript/typescriptTsConfigJSON",isDocsHomePage:!1,title:"tsconfig.json",description:"\u914d\u7f6e\u8bf4\u660e",source:"@site/docs/enginee/typescript/tsconfig.md",slug:"/enginee/typescript/typescriptTsConfigJSON",permalink:"/docs/enginee/typescript/typescriptTsConfigJSON",version:"current",sidebar_label:"tsconfig.json",sidebar:"babeldoc",previous:{title:"ts\u57fa\u7840\u914d\u7f6e",permalink:"/docs/enginee/typescript/typescriptBseconfig"},next:{title:"import type\u7684\u4f5c\u7528",permalink:"/docs/enginee/typescript/typescriptImportTypes"}},s=[{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",children:[{value:"target",id:"target",children:[]},{value:"lib",id:"lib",children:[]},{value:"isolatedModules",id:"isolatedmodules",children:[]},{value:"rootDir",id:"rootdir",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),Object(i.b)("h3",{id:"target"},"target"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4ee3\u7801\u7f16\u8bd1\u7684 ECMAScript \u76ee\u6807\u7248\u672c\uff0c\u679a\u4e3e\u503c\u6709\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"es3"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es5"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es6"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es2015"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es2016"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es2017"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es2018"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es2019"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es2020"),", ",Object(i.b)("inlineCode",{parentName:"p"},"es2021"),", ",Object(i.b)("inlineCode",{parentName:"p"},"esnext"))),Object(i.b)("p",null,"\u5f53\u7f16\u8bd1 ts \u4ee3\u7801\u65f6\uff0c\u53ef\u4ee5\u628a ts \u8f6c\u4e3a ES5 \u6216\u66f4\u65e9\u7684 js \u4ee3\u7801\u3002\u6240\u4ee5\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u7f16\u8bd1\u7684\u76ee\u6807\u7248\u672c\u3002vue-cli3 \u7684 typescript \u6a21\u677f\uff0c\u8bbe\u7f6e\u4e3a\u201cESNext\u201d\uff0c\u56e0\u4e3a\u73b0\u4ee3\u5927\u90e8\u5206\u5e94\u7528\u9879\u76ee\u90fd\u4f1a\u4f7f\u7528 Webpack\uff08Parcel \u4e5f\u5f88\u68d2\uff09\u8fdb\u884c\u6253\u5305\uff0cWebpack \u4f1a\u628a\u4f60\u7684\u4ee3\u7801\u8f6c\u6362\u6210\u5728\u6240\u6709\u6d4f\u89c8\u5668\u4e2d\u53ef\u8fd0\u884c\u7684\u4ee3\u7801\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "target": "es5",\n    // target: es5\u9ed8\u8ba4\u7684lib\u503c\n    "lib": ["DOM", "ES5", "ScriptHost"]\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u6ce8\u610f\u4e8b\u9879")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"target"),"\u9664\u4e86\u5f71\u54cd\u7f16\u8bd1\u4e4b\u540e\u7684\u4ee3\u7801\uff0c\u5728\u6ca1\u6709\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"p"},"lib"),"\u914d\u7f6e\u9879\u7684\u65f6\u5019\uff0c\u4f1a\u9ed8\u8ba4\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"p"},"lib"),"\u7684\u503c"))),Object(i.b)("h3",{id:"lib"},"lib"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u5728 ts \u4ee3\u7801\u4e2d\u4f7f\u7528 ES6 \u4e2d\u7684\u7c7b\uff0c\u6bd4\u5982 Array.form\u3001Set\u3001Reflect \u7b49\uff0c\u9700\u8981\u8bbe\u7f6e lib \u9009\u9879\uff0c\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u628a\u8fd9\u4e9b\u6807\u51c6\u5e93\u5f15\u5165\u3002\u8fd9\u6837\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u9047\u5230\u5c5e\u4e8e\u8fd9\u4e9b\u6807\u51c6\u5e93\u7684 class \u6216 api \u65f6\uff0cts \u7f16\u8bd1\u5668\u4e0d\u4f1a\u62a5\u9519\u3002")),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u6ce8\u610f\u4e8b\u9879")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"lib"),"\u53ea\u662f\u914d\u7f6e\u4e00\u4e9b\u7f16\u8bd1\u5668\u9700\u8981\u80fd\u591f\u8bc6\u522b\u7684\u8bed\u6cd5\uff0c\u4fdd\u8bc1",Object(i.b)("inlineCode",{parentName:"p"},"ts\u7f16\u8bd1\u5668"),"\u4e0d\u4f1a\u62a5\u9519\uff0c\u4e0d\u4f1a\u5f71\u54cd\u8f6c\u8bd1\u540e\u7684\u4ee3\u7801\u3002"),Object(i.b)("p",{parentName:"div"},"\u6240\u4ee5\u5f53\u6e90\u4ee3\u7801\u9700\u8981",Object(i.b)("inlineCode",{parentName:"p"},"polyfill"),"\uff0c\u8fd8\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u624b\u52a8\u5f15\u5165"))),Object(i.b)("h3",{id:"isolatedmodules"},"isolatedModules"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u786e\u4fdd\u6bcf\u4e2a\u6587\u4ef6\u90fd\u662f\u80fd\u5355\u72ec\u7f16\u8bd1\u7684\uff0c\u4e0d\u4f9d\u8d56\u4e0a\u4e0b\u6587\uff0c\u914d\u7f6e\u9879\u4e0d\u4f1a\u6539\u53d8\u7f16\u8bd1\u8fc7\u540e\u7684\u4ee3\u7801\u884c\u4e3a\uff0c\u53ea\u662f\u4f1a\u5728\u68c0\u6d4b\u5230\u6587\u4ef6\u4e0d\u80fd\u5355\u72ec\u7f16\u8bd1\u7684\u65f6\u5019\u4f1a\u53d1\u51fa\u8b66\u544a")),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"babel"),"\u7f16\u8bd1\u5668\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u5f00\u542f\u8fd9\u4e2a\u529f\u80fd\uff0c\u53ef\u4ee5\u5e2e\u5fd9\u68c0\u6d4b\u98ce\u9669\u4ee3\u7801"))),Object(i.b)("p",null,"\u80fd\u8fbe\u5230\u4ee5\u4e0b\u51e0\u70b9\u4f5c\u7528\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u68c0\u6d4b\u6587\u4ef6\u4e0d\u80fd\u5355\u72ec\u7f16\u8bd1\u7684\u4ee3\u7801\uff1a",Object(i.b)(c.a,{to:"/docs/enginee/typescript/typescriptImportTypes#\u6848\u4f8b\u5206\u6790",mdxType:"Link"},"\u6848\u4f8b\u5206\u6790")),Object(i.b)("li",{parentName:"ol"},"\u8981\u6c42\u6bcf\u4e2a\u6587\u4ef6\u5fc5\u987b\u662f\u6a21\u5757\u4e5f\u5c31\u662f\u5fc5\u987b\u5305\u542b",Object(i.b)("inlineCode",{parentName:"li"},"import/export"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// isolatedModules\u6821\u9a8c\u4e0d\u901a\u8fc7\uff0c\u4f1a\u62a5\u9519\nfunction fn() {\n  doThing()\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// isolatedModules\u6821\u9a8c\u901a\u8fc7\nfunction fn() {\n  doThing()\n}\n\nexport {}\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"\u9650\u5236\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"\u73af\u5883\u5e38\u91cf\u679a\u4e3e"),"\u5f15\u7528\uff0c\u4e5f\u5c31\u662f\u7533\u660e\u7684\u5168\u5c40\u7684\u5e38\u7528\u679a\u4e3e")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare const enum Numbers {\n  One\n}\n\n// \u4f7f\u7528\u7c7b\u578b\u2705\nconst num: Numbers = 1\n// \u4f7f\u7528\u679a\u4e3e\u5f15\u7528\u274e\nconst num = Numbers.One\n")),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u679a\u4e3e\u6bd4\u8f83\u7279\u6b8a\uff0c\u672c\u8eab\u5177\u5907\u8fd0\u884c\u65f6\u4ee3\u7801"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6b63\u5e38\u7684\u679a\u4e3e\u4f1a\u88ab\u7f16\u8bd1\u6210\u5bf9\u8c61"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="input.ts"',title:'"input.ts"'}),"enum Numbers {\n  One,\n  Two\n}\nconst num = Numbers.One\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="output.js"',title:'"output.js"'}),'"use strict";\nvar Numbers;\n(function (Numbers) {\n    Numbers[Numbers["One"] = 0] = "One";\n    Numbers[Numbers["Two"] = 1] = "Two";\n})(Numbers || (Numbers = {}));\nconst num = Numbers.One;\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5e38\u91cf\u679a\u4e3e\uff0c\u5728\u4f7f\u7528\u679a\u4e3e\u5f15\u7528\u7684\u5730\u65b9\uff0c\u4f1a\u88ab\u76f4\u63a5\u7f16\u8bd1\u6210\u5b9e\u9645\u503c.(\u56e0\u4e3a\u5e38\u91cf\u679a\u4e3e\u610f\u5473\u7740\u6570\u636e\u7c7b\u578b\u662f\u4e0d\u4f1a\u53d8\u7684\uff0c\u6bd4\u8f83\u7b80\u5355)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="input.ts"',title:'"input.ts"'}),"const enum Numbers {\n  One,\n  Two\n}\nconst num = Numbers.One\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="output.js"',title:'"output.js"'}),'"use strict";\nconst num = 0 /* One */;\n'))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u56e0\u4e3a\u50cf",Object(i.b)("inlineCode",{parentName:"p"},"babel"),"\u7b49\u7f16\u8bd1\u5668\u6ca1\u6709\u4e0a\u4e0b\u6587\u7684\u6982\u5ff5\uff0c\u90a3\u4e48\u7533\u660e\u7684",Object(i.b)("inlineCode",{parentName:"p"},"\u5168\u5c40\u5e38\u91cf\u679a\u4e3e"),"\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"babel"),"\u662f\u65e0\u6cd5\u8bc6\u522b\u5230\u5f15\u7528\u7684\u503c\uff0c\u90a3\u4e48\u5c31\u6ca1\u529e\u6cd5\u7528\u5b9e\u9645\u503c\u66ff\u6362\u5e38\u91cf\u679a\u4e3e\u5f15\u7528\uff0c\u5bfc\u81f4\u62a5\u9519"))))),Object(i.b)("h3",{id:"rootdir"},"rootDir"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u76f8\u5f53\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"cwd"),"\uff0c\u4e3b\u8981\u7528\u6765\u8bbe\u7f6e\u7f16\u8bd1\u5668\u7684\u6267\u884c\u7f16\u8bd1\u7684\u4e0a\u4e0b\u6587\uff0c\u4f1a\u5f71\u54cd\u5230\u8f93\u51fa\u6587\u4ef6\u7684\u76ee\u5f55\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u6e90\u7801\u6587\u4ef6"',title:'"\u6e90\u7801\u6587\u4ef6"'}),".\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 interface.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 readJSONData.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 readTSData.ts\n\u2514\u2500\u2500 tsconfig.json\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u5982\u679c\u201crootDir: .\u201c\uff0c\u7f16\u8bd1\u4e4b\u540e\u7684\u4ee3\u7801\u76ee\u5f55\uff0c\u591a\u4e86\u4e00\u5c42\u201csrc\u201d\u76ee\u5f55\uff1a"',title:'"\u5982\u679c\u201crootDir:','.\u201c\uff0c\u7f16\u8bd1\u4e4b\u540e\u7684\u4ee3\u7801\u76ee\u5f55\uff0c\u591a\u4e86\u4e00\u5c42\u201csrc\u201d\u76ee\u5f55\uff1a"':!0}),".\n\u251c\u2500\u2500 dist\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 interface.js\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 readJSONData.js\n\u2502   \u2502\xa0\xa0 \u2514\u2500\u2500 readTSData.js\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"title=\"\u5982\u679c\u201crootDir: './src'\u201d\uff0c\u7f16\u8bd1\u4e4b\u540e\u7684\u4ee3\u7801\u76ee\u5f55\uff0c\u5c31\u6ca1\u6709\u201csrc\u201d\u76ee\u5f55\uff1a\"",title:'"\u5982\u679c\u201crootDir:',"'./src'\u201d\uff0c\u7f16\u8bd1\u4e4b\u540e\u7684\u4ee3\u7801\u76ee\u5f55\uff0c\u5c31\u6ca1\u6709\u201csrc\u201d\u76ee\u5f55\uff1a\"":!0}),".\n\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 interface.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 readJSONData.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 readTSData.js\n")),Object(i.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.typescriptlang.org/tsconfig#rootDirs"}),"typescript#tsconfig"))))}p.isMDXComponent=!0}}]);