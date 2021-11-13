(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),i=(n(0),n(302)),c={id:"jsProxy",title:"Proxy",hide_title:!0,sidebar_label:"Proxy"},o={unversionedId:"js/goods/jsProxy",id:"js/goods/jsProxy",isDocsHomePage:!1,title:"Proxy",description:"set",source:"@site/docs/js/goods/Proxy.md",slug:"/js/goods/jsProxy",permalink:"/docs/js/goods/jsProxy",version:"current",sidebar_label:"Proxy",sidebar:"jsdoc",previous:{title:"Promise\u77e5\u8bc6",permalink:"/docs/js/goods/jsPromise"},next:{title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",permalink:"/docs/js/browserTask"}},l=[{value:"set",id:"set",children:[{value:"set() \u65b9\u6cd5\u5e94\u5f53\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002",id:"set-\u65b9\u6cd5\u5e94\u5f53\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002",children:[]},{value:"set() \u591a\u6b21\u6267\u884c",id:"set-\u591a\u6b21\u6267\u884c",children:[]}]},{value:"proxy \u53ea\u80fd\u4ee3\u7406\u4e00\u5c42",id:"proxy-\u53ea\u80fd\u4ee3\u7406\u4e00\u5c42",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[{value:"Vue3 \u4e2d\u7684\u6570\u636e\u4fa6\u6d4b",id:"vue3-\u4e2d\u7684\u6570\u636e\u4fa6\u6d4b",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"set"},"set"),Object(i.b)("h3",{id:"set-\u65b9\u6cd5\u5e94\u5f53\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"},"set() \u65b9\u6cd5\u5e94\u5f53\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"true")," \u4ee3\u8868\u5c5e\u6027\u8bbe\u7f6e\u6210\u529f\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c ",Object(i.b)("inlineCode",{parentName:"li"},"set()")," \u65b9\u6cd5\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"\uff0c\u90a3\u4e48\u4f1a\u629b\u51fa\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"TypeError")," \u5f02\u5e38\u3002")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"{9}","{9}":!0}),"let p = new Proxy(data, {\n  get(target, key) {\n    return target[key]\n  },\n\n  set(target, key, value) {\n    target[key] = value\n\n    return true\n  }\n});\n")),Object(i.b)("h3",{id:"set-\u591a\u6b21\u6267\u884c"},"set() \u591a\u6b21\u6267\u884c"),Object(i.b)("p",null,"\u5f53\u4ee3\u7406\u7684\u5bf9\u8c61\u662f\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"\u6570\u7ec4"),"\u7c7b\u578b\u7684\u65f6\u5019\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"set handler"),"\u4f1a\u6267\u884c\u591a\u6b21\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"let p = new Proxy([1,2,3], {\n  get(target, key, receiver) {\n    console.log('get value:', key)\n    return target[key]\n  },\n  set(target, key, value, receiver) {\n    console.log('set value:', key, value)\n    target[key] = value\n    return true\n  }\n})\n\np.push(1)\n\n// get value: push\n// get value: length\n// set value: 3 1\n// set value: length 4\n")),Object(i.b)("p",null,"\u5f53\u6267\u884c",Object(i.b)("inlineCode",{parentName:"p"},"push"),"\u52a8\u4f5c\u7684\u65f6\u5019\uff0c\u9664\u4e86\u6dfb\u52a0\u4e86\u65b0\u7684\u6570\u636e\uff0c\u540c\u65f6\u4e5f\u8bbe\u7f6e\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"array.length"),"\u5c5e\u6027\u7684\u503c\uff0c\u6240\u4ee5\u4f1a\u6267\u884c\u591a\u6b21\u3002"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u53ef\u4ee5\u901a\u8fc7",Object(i.b)("inlineCode",{parentName:"p"},"\u5224\u65ad key \u662f\u5426\u4e3a target \u81ea\u8eab\u5c5e\u6027\uff0c\u4ee5\u53ca\u8bbe\u7f6eval\u662f\u5426\u8ddftarget[key]\u76f8\u7b49"),"\u6765\u5224\u65ad\u662f\u5426\u64cd\u4f5c\u4e86\u5173\u8054\u5c5e\u6027\u3002"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"length")," \u662f",Object(i.b)("inlineCode",{parentName:"li"},"target"),"\u7684\u81ea\u8eab\u5c5e\u6027"),Object(i.b)("li",{parentName:"ul"},"\u5f53\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"length"),"\u7684\u503c\u7684\u65f6\u5019\uff0c\u518d\u901a\u8fc7",Object(i.b)("inlineCode",{parentName:"li"},"target.length"),"\u83b7\u53d6\u7684\u5c31\u662f\u65b0\u589e\u4e4b\u540e\u7684\u957f\u5ea6\u548c\u8981\u8bbe\u7f6e\u7684",Object(i.b)("inlineCode",{parentName:"li"},"length"),"\u7684\u503c\u662f\u76f8\u7b49\u7684")))),Object(i.b)("h2",{id:"proxy-\u53ea\u80fd\u4ee3\u7406\u4e00\u5c42"},"proxy \u53ea\u80fd\u4ee3\u7406\u4e00\u5c42"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"{18,19}","{18,19}":!0}),"const data = { item: { id: 1 }, arr: [1] }\n\nconst proxy = new Proxy(data, {\n  get (target, key) {\n    const value = target[key]\n    console.log('[get]', key, value)\n    return value\n  },\n\n  set (target, key, value) {\n    console.log('[set]', key, value)\n\n    target[key] = value\n    return true\n  }\n})\n\nproxy.item.id = 6 // [get] item {id: 1}\nproxy.arr.push(6) // [get] arr [1]\n")),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u6df1\u5c42\u5bf9\u8c61\u64cd\u4f5c\u4e0d\u4f1a\u88ab\u62e6\u622a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f1a\u89e6\u53d1\u5916\u5c42\u5bf9\u8c61\u7684",Object(i.b)("inlineCode",{parentName:"li"},"get"),"\u64cd\u4f5c\uff0c\u56e0\u4e3a\u5728\u8bbf\u95ee\u6df1\u5c42\u5bf9\u8c61\u8fc7\u7a0b\u4e2d\uff0c\u662f\u8981\u5148\u67e5\u8be2\u5916\u5c42\u7684\u7d22\u5f15"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u8c61\u5185\u90e8\u7684\u6df1\u5ea6\u4fa6\u6d4b\uff0c\u662f\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u5b9e\u73b0\u7684")))))),Object(i.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(i.b)("h3",{id:"vue3-\u4e2d\u7684\u6570\u636e\u4fa6\u6d4b"},Object(i.b)("a",Object(r.a)({parentName:"h3"},{href:"https://juejin.cn/post/6844903957807169549"}),"Vue3 \u4e2d\u7684\u6570\u636e\u4fa6\u6d4b")))}s.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);