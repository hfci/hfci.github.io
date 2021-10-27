(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{292:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?a.a.createElement(u,o(o({ref:n},s),{},{components:t})):a.a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(2),a=(t(0),t(292));const i={id:"jsPromise",title:"Promise\u77e5\u8bc6",hide_title:!0,sidebar_label:"Promise"},c={unversionedId:"js/goods/jsPromise",id:"js/goods/jsPromise",isDocsHomePage:!1,title:"Promise\u77e5\u8bc6",description:"1. \u6570\u7ec4\u4e32\u884c\u5f02\u6b65",source:"@site/docs/js/goods/promise.md",slug:"/js/goods/jsPromise",permalink:"/docs/js/goods/jsPromise",version:"current",sidebar_label:"Promise",sidebar:"jsdoc",previous:{title:"Array\u77e5\u8bc6",permalink:"/docs/js/goods/jsArray"},next:{title:"Proxy",permalink:"/docs/js/goods/jsProxy"}},o=[{value:"1. \u6570\u7ec4\u4e32\u884c\u5f02\u6b65",id:"1-\u6570\u7ec4\u4e32\u884c\u5f02\u6b65",children:[{value:"1. \u4f7f\u7528\u7eaf\u5faa\u73af",id:"1-\u4f7f\u7528\u7eaf\u5faa\u73af",children:[]},{value:"2. \u4f7f\u7528 reduce",id:"2-\u4f7f\u7528-reduce",children:[]}]},{value:"2. \u5e76\u884c\u8fd0\u884c\uff0c\u63d0\u53d6\u6536\u4e2a\u6210\u529f\u7684\u503c",id:"2-\u5e76\u884c\u8fd0\u884c\uff0c\u63d0\u53d6\u6536\u4e2a\u6210\u529f\u7684\u503c",children:[]}],l={rightToc:o};function s({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-\u6570\u7ec4\u4e32\u884c\u5f02\u6b65"},"1. \u6570\u7ec4\u4e32\u884c\u5f02\u6b65"),Object(a.b)("h3",{id:"1-\u4f7f\u7528\u7eaf\u5faa\u73af"},"1. \u4f7f\u7528\u7eaf\u5faa\u73af"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"(async () => {\n  const data = [1, 2, 3]\n  let result = 0\n  for (let i = 0; i < data.length; i++) {\n    const currentData = await new Promise(resolve => {\n      setTimeout(() => {\n        resolve(data[i])\n      }, 500)\n    })\n    result += <number>currentData\n  }\n  console.log(result)\n})()\n")),Object(a.b)("h3",{id:"2-\u4f7f\u7528-reduce"},"2. \u4f7f\u7528 reduce"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"(async () => {\n  const data = [1, 2, 3]\n  const result = await (<any>data.reduce)(async (preValue, current) => {\n    console.log(preValue)\n    // \u540e\u9762\u7684\u5904\u7406\u8981\u7b49\u5f85\u524d\u9762\u5b8c\u6210\n    const accum = await preValue\n    const next = await apiCall(accum, current)\n    return next\n  }, 0)\n  console.log(result) // 6\n\n  async function apiCall (a, b) {\n    return new Promise((resolve) => {\n      setTimeout(() => { resolve(a + b) }, 300)\n    })\n  }\n})()\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u5229\u7528",Object(a.b)("inlineCode",{parentName:"p"},"reduce"),"\u7684",Object(a.b)("inlineCode",{parentName:"p"},"preValue"),"\u6bcf\u6b21\u90fd\u662f\u4e0a\u4e00\u6b21",Object(a.b)("inlineCode",{parentName:"p"},"callback"),"\u7684\u8fd4\u56de\u503c\u7684\u7279\u6027\uff1a"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\uff1a ",Object(a.b)("inlineCode",{parentName:"li"},"0")),Object(a.b)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b21: ",Object(a.b)("inlineCode",{parentName:"li"},"Promise\xa0{<pending>}")),Object(a.b)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b21: ",Object(a.b)("inlineCode",{parentName:"li"},"Promise\xa0{<pending>}"))))),Object(a.b)("h2",{id:"2-\u5e76\u884c\u8fd0\u884c\uff0c\u63d0\u53d6\u6536\u4e2a\u6210\u529f\u7684\u503c"},"2. \u5e76\u884c\u8fd0\u884c\uff0c\u63d0\u53d6\u6536\u4e2a\u6210\u529f\u7684\u503c"),Object(a.b)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u9002\u5408\u7684\u573a\u666f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6709\u591a\u6761\u8def\u53ef\u4ee5\u8d70\uff0c\u5176\u4e2d\u4efb\u610f\u4e00\u6761\u8def\u8d70\u901a\u5373\u53ef\uff0c\u5176\u4e2d\u6709\u4e00\u4e9b\u8def\u5931\u8d25\u4e5f\u6ca1\u5173\u7cfb"),Object(a.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u52a0\u901f\u5f97\u5230\u7ed3\u679c\uff0c\u5e76\u53d1\u5730\u8d70\u591a\u6761\u8def\uff0c\u907f\u514d\u7011\u5e03\u5f0f\u5c1d\u8bd5")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const promise1 = new Promise((resolve) => {\n  setTimeout(() => {\n    resolve(1)\n  }, 1000)\n})\n\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    reject(new Error('fail'))\n  }, 500)\n})\n\nconst currentPromise1 = promise1.then(\n  value => Promise.reject(value),\n  err => Promise.resolve(err)\n)\nconst currentPromise2 = promise2.then(\n  value => Promise.reject(value),\n  err => Promise.resolve(err)\n)\n\nPromise.all([currentPromise1, currentPromise2])\n  .catch(err => {\n    console.log(err)\n  })\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Promise.race"),"\u53d6\u503c\u7684\uff0c\u6700\u5148\u6709\u6539\u53d8\u72b6\u6001\u7684",Object(a.b)("inlineCode",{parentName:"li"},"Promise"),"\uff0c\u6709\u53ef\u80fd\u662f",Object(a.b)("inlineCode",{parentName:"li"},"rejected"),"\u72b6\u6001\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Promise.all"),"\u662f\u8981\u7b49\u5f85\u6240\u6709\u7684",Object(a.b)("inlineCode",{parentName:"li"},"Promise"),"\u90fd\u6210\u529f\u624d\u4f1a",Object(a.b)("inlineCode",{parentName:"li"},"resolve"),",\u5982\u679c\u51fa\u73b0",Object(a.b)("inlineCode",{parentName:"li"},"rejected"),"\u90a3\u4e48\u4e5f\u4f1a\u7ed3\u675f")),Object(a.b)("p",{parentName:"div"},"\u6211\u4eec\u53ef\u4ee5\u5229\u7528",Object(a.b)("inlineCode",{parentName:"p"},"Promise.all"),"\u7684\u673a\u5236\uff0c\u628a\u6240\u6709\u7684",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"\u53d6\u53cd\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"resolve"),"\u72b6\u6001\u6539\u6210",Object(a.b)("inlineCode",{parentName:"p"},"rejected"),"\u72b6\u6001\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"rejected"),"\u72b6\u6001\u6539\u6210",Object(a.b)("inlineCode",{parentName:"p"},"resolve"),"\u72b6\u6001\uff0c\u90a3\u4e48\u53ea\u8981\u51fa\u73b0",Object(a.b)("inlineCode",{parentName:"p"},"rejected"),"\u72b6\u6001\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"Promise.all"),"\u5c31\u4f1a\u7ed3\u675f\u3002"))))}s.isMDXComponent=!0}}]);