(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{237:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var b=t(0),a=t.n(b);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);n&&(b=b.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,b)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,b,a=function(e,n){if(null==e)return{};var t,b,a={},l=Object.keys(e);for(b=0;b<l.length;b++)t=l[b],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)t=l[b],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),o=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},j=a.a.forwardRef((function(e,n){var t=e.components,b=e.mdxType,l=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=o(t),j=b,O=u["".concat(c,".").concat(j)]||u[j]||d[j]||l;return t?a.a.createElement(O,i(i({ref:n},p),{},{components:t})):a.a.createElement(O,i({ref:n},p))}));function O(e,n){var t=arguments,b=n&&n.mdxType;if("string"==typeof e||b){var l=t.length,c=new Array(l);c[0]=j;var i={};for(var r in n)hasOwnProperty.call(n,r)&&(i[r]=n[r]);i.originalType=e,i.mdxType="string"==typeof e?e:b,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},60:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var b=t(2),a=(t(0),t(237));const l={id:"webpackOptimization",title:"optimization",hide_title:!0,sidebar_label:"optimization"},c={unversionedId:"enginee/webpack/webpackOptimization",id:"enginee/webpack/webpackOptimization",isDocsHomePage:!1,title:"optimization",description:"optimization.chunkIds",source:"@site/docs/enginee/webpack/optimization.md",slug:"/enginee/webpack/webpackOptimization",permalink:"/docs/enginee/webpack/webpackOptimization",version:"current",sidebar_label:"optimization",sidebar:"babeldoc",previous:{title:"webpack5-changelog",permalink:"/docs/enginee/webpack/webpack5Changelog"},next:{title:"import()",permalink:"/docs/enginee/webpack/webpackImportantMethod"}},i=[{value:"optimization.chunkIds",id:"optimizationchunkids",children:[]},{value:"optimization.moduleIds",id:"optimizationmoduleids",children:[]}],r={rightToc:i};function p({components:e,...n}){return Object(a.b)("wrapper",Object(b.a)({},r,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"optimizationchunkids"},"optimization.chunkIds"),Object(a.b)("p",null,"\u51b3\u5b9a\u4e86\u6587\u4ef6\u6700\u7ec8\u6253\u5305\u8fc7\u540e\u7684",Object(a.b)("inlineCode",{parentName:"p"},"bundle"),"\u7684\u6587\u4ef6\u540d\u79f0\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"dist\n\u251c\u2500\u2500 0.js // \u51b3\u5b9a\u4e86output\u7684\u540d\u79f0\uff0c\u6bd4\u5982\uff1a0\n\u251c\u2500\u2500 1.js\n")),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u9009\u9879"),Object(a.b)("th",null,"\u63cf\u8ff0"),Object(a.b)("th",null,"\u793a\u4f8b")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'natural'"))),Object(a.b)("td",null,"\u6309\u7167\u4f7f\u7528\u987a\u5e8f\u7684ID"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 2.43c64a.bundle.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.049323.bundle.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 runtime.ad2065.bundle.js\n")))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'named'"))),Object(a.b)("td",null,"\u6309\u7167\u6587\u4ef6\u7684\u76ee\u5f55\uff0c\u751f\u6210\u4e00\u4e2a\u53ef\u8bfb\u7684ID\u3002\u5f00\u53d1\u6a21\u5f0f\u9ed8\u8ba4\u542f\u7528"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.2d2e17.bundle.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 runtime.5b83b2.bundle.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 src_a_js.aa6820.bundle.js\n")))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'deterministic'"))),Object(a.b)("td",null,"\u7b80\u77ed\u7684\u6570\u5b57ID\uff0c\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\u3002\u9002\u5408\u957f\u671f\u7f13\u5b58\u3002\u751f\u4ea7\u6a21\u5f0f\u9ed8\u8ba4\u542f\u7528"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 150.ff1a6d.bundle.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.ade014.bundle.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 runtime.3edf33.bundle.js\n")))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'size'"))),Object(a.b)("td",null,"\u6570\u5b57ID\u4e13\u6ce8\u4e8e\u6700\u5c0f\u7684\u521d\u59cb\u4e0b\u8f7d\u5927\u5c0f\u3002"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 0.75299b.bundle.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.2c53d4.bundle.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 runtime.5417e4.bundle.js\n")))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'total-size'"))),Object(a.b)("td",null,"\u6570\u5b57ID\u4e13\u6ce8\u4e8e\u6700\u5c0f\u7684\u603b\u4e0b\u8f7d\u5927\u5c0f\u3002"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 2.43c64a.bundle.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.049323.bundle.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 runtime.ad2065.bundle.js\n"))))),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(b.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(b.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(b.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(b.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(b.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u5f00\u53d1\u6a21\u5f0f\u9ed8\u8ba4\u503c: ",Object(a.b)("inlineCode",{parentName:"li"},"chunkIds = 'named'")),Object(a.b)("li",{parentName:"ul"},"\u751f\u4ea7\u6a21\u5f0f\u9ed8\u8ba4\u503c: ",Object(a.b)("inlineCode",{parentName:"li"},"chunkIds = 'deterministic'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"chunkIds"),"\u53ea\u662f\u51b3\u5b9a\u4e86\u6587\u4ef6\u7684",Object(a.b)("inlineCode",{parentName:"li"},"name"),"\uff0c\u4f46\u662f\u4e00\u4e2a\u5b8c\u6210\u7684\u94fe\u63a5\uff0c\u5e94\u8be5\u662f",Object(a.b)("inlineCode",{parentName:"li"},"[name].[contenthash].js"),"\u4f8b\u5982\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"src_a_js.aa6820.js"),"\uff0c\u6240\u4ee5",Object(a.b)("inlineCode",{parentName:"li"},"name"),"\u53ef\u4ee5\u4e00\u76f4\u56fa\u5b9a\u4e0d\u53d8\uff0c\u53d8\u5316\u7684\u53ea\u8981\u662f",Object(a.b)("inlineCode",{parentName:"li"},"contenthash"),"\u5c31\u53ef\u4ee5\u4e86\u3002")))),Object(a.b)("h3",{id:"optimizationmoduleids"},"optimization.moduleIds"),Object(a.b)("p",null,"\u51b3\u5b9a\u4e86\u4ee3\u7801\u5185\u90e8\u6bcf\u4e2a",Object(a.b)("inlineCode",{parentName:"p"},"module"),"\u7684\u4f9d\u8d56\u7684",Object(a.b)("inlineCode",{parentName:"p"},"id")),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-javascript"}),"(self.webpackChunkwebpack_boilerplate = self.webpackChunkwebpack_boilerplate || []).push([[0], {\n    579: (e,l,b)=>{\n        b.e(2).then(b.bind(b, 150)),\n        console.log(1)\n    }\n}, 0, [[579, 1]]]);\n\n// \ud83d\udc46\u6240\u793a\uff0c579\u5c31\u662f\u7531moduleIds\u751f\u6210\u7684\n")),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u9009\u9879"),Object(a.b)("th",null,"\u63cf\u8ff0"),Object(a.b)("th",null,"\u793a\u4f8b")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'natural'"))),Object(a.b)("td",null,"\u6309\u7167\u4f7f\u7528\u987a\u5e8f\u7684ID"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-javascript"}),"(self.webpackChunkwebpack_boilerplate = self.webpackChunkwebpack_boilerplate || []).push([[179], [(e,l,b)=>{\n    b.e(150).then(b.bind(b, 1)),\n    console.log(1)\n}\n], 0, [[0, 666]]]);\n")))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'named'"))),Object(a.b)("td",null,"\u6309\u7167\u6587\u4ef6\u7684\u76ee\u5f55\uff0c\u751f\u6210\u4e00\u4e2a\u53ef\u8bfb\u7684ID\u3002\u5f00\u53d1\u6a21\u5f0f\u9ed8\u8ba4\u542f\u7528"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-javascript"}),'(self.webpackChunkwebpack_boilerplate = self.webpackChunkwebpack_boilerplate || []).push([[179], {\n    "./src/index.js": (e,s,c)=>{\n        c.e(150).then(c.bind(c, "./src/a.js")),\n        console.log(1)\n    }\n}, 0, [["./src/index.js", 666]]]);\n')))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'deterministic'"))),Object(a.b)("td",null,"\u7b80\u77ed\u7684\u6570\u5b57ID\uff0c\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\u3002\u9002\u5408\u957f\u671f\u7f13\u5b58\u3002\u751f\u4ea7\u6a21\u5f0f\u9ed8\u8ba4\u542f\u7528"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-javascript"}),"(self.webpackChunkwebpack_boilerplate = self.webpackChunkwebpack_boilerplate || []).push([[179], {\n    579: (e,l,b)=>{\n        b.e(150).then(b.bind(b, 150)),\n        console.log(1)\n    }\n}, 0, [[579, 666]]]);\n")))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"'size'"))),Object(a.b)("td",null,"\u6570\u5b57ID\u4e13\u6ce8\u4e8e\u6700\u5c0f\u7684\u521d\u59cb\u4e0b\u8f7d\u5927\u5c0f\u3002"),Object(a.b)("td",null,Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-javascript"}),"(self.webpackChunkwebpack_boilerplate = self.webpackChunkwebpack_boilerplate || []).push([[179], [(e,l,b)=>{\n    b.e(150).then(b.bind(b, 1)),\n    console.log(1)\n}\n], 0, [[0, 666]]]);\n"))))))}p.isMDXComponent=!0}}]);