(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(237)),c={id:"jsObject",title:"object\u77e5\u8bc6",hide_title:!0,sidebar_label:"Object"},i={unversionedId:"js/goods/jsObject",id:"js/goods/jsObject",isDocsHomePage:!1,title:"object\u77e5\u8bc6",description:"\u76d1\u542c\u5bf9\u8c61",source:"@site/docs/js/goods/object.md",slug:"/js/goods/jsObject",permalink:"/docs/js/goods/jsObject",version:"current",sidebar_label:"Object",sidebar:"jsdoc",previous:{title:"\u65b0\u6536\u83b7\u7684js\u77e5\u8bc6\u70b9",permalink:"/docs/js/goods/unKnow"},next:{title:"Blob",permalink:"/docs/js/goods/jsBlob"}},b=[{value:"\u76d1\u542c\u5bf9\u8c61",id:"\u76d1\u542c\u5bf9\u8c61",children:[{value:"Object.defineProperty\u65b9\u5f0f",id:"objectdefineproperty\u65b9\u5f0f",children:[]},{value:"<code>__defineGetter__</code>\u548c<code>__defineSetter__</code>\u65b9\u5f0f",id:"__definegetter__\u548c__definesetter__\u65b9\u5f0f",children:[]},{value:"\u76f4\u63a5\u5728\u5bf9\u8c61\u4e0a\u9762\u5b9a\u4e49",id:"\u76f4\u63a5\u5728\u5bf9\u8c61\u4e0a\u9762\u5b9a\u4e49",children:[]},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",children:[]}]}],s={rightToc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u76d1\u542c\u5bf9\u8c61"},"\u76d1\u542c\u5bf9\u8c61"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"object"),"\u7684",Object(o.b)("inlineCode",{parentName:"p"},"getter"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"setter"),"\u80fd\u591f\u76d1\u542c\u5bf9\u8c61\u7684\u8bfb\u53d6\u548c\u8bbe\u7f6e\u64cd\u4f5c\u3002\u5e76\u4e14\u6709\u4e2a\u76f8\u5f53\u91cd\u8981\u7684\u70b9:"),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u91cd\u70b9\u77e5\u8bc6")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"getter"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"setter"),"\u51fd\u6570\u4e2d\u7684",Object(o.b)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411\u8be5\u5bf9\u8c61\u3002"))),Object(o.b)("h3",{id:"objectdefineproperty\u65b9\u5f0f"},"Object.defineProperty\u65b9\u5f0f"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u5bf9\u8c61\u5c5e\u6027\u7279\u6027\u63cf\u8ff0\uff0c\u4e3b\u8981\u5c31\u662f\u662f\u5426\u53ef\u679a\u4e3e\u4fee\u6539\u5220\u9664\u8bbe\u7f6e\u7b49\u4ee5\u53ca",Object(o.b)("inlineCode",{parentName:"p"},"value/getter/setter"),"\u7b49\u8bbe\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var test = {};\nObject.defineProperty(test, 'o', {\n  get() {\n     console.log('\u76d1\u542c\u5230\u6b63\u5728\u83b7\u53d6\u5c5e\u6027o\u7684\u503c');\n     return this._o;\n  },\n  set(v) {\n    console.log('\u76d1\u542c\u5230\u6b63\u5728\u8bbe\u7f6e\u5c5e\u6027o\u7684\u503c\u4e3a\uff1a' + v);\n    this._o = v;\n    return this._o;\n  }\n});\n\ntest.o = 14; // \u76d1\u542c\u5230\u6b63\u5728\u8bbe\u7f6e\u5c5e\u6027o\u7684\u503c\u4e3a\uff1a14\nconsole.log(test.o); // \u76d1\u542c\u5230\u6b63\u5728\u83b7\u53d6\u5c5e\u6027o\u7684\u503c\n")),Object(o.b)("h3",{id:"__definegetter__\u548c__definesetter__\u65b9\u5f0f"},Object(o.b)("inlineCode",{parentName:"h3"},"__defineGetter__"),"\u548c",Object(o.b)("inlineCode",{parentName:"h3"},"__defineSetter__"),"\u65b9\u5f0f"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"__defineGetter__"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"__defineSetter__"),"\u662f\u5bf9\u8c61\u539f\u578b\u4e0a\u9762\u7684\u65b9\u6cd5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var test = {};\n\ntest.__defineGetter__('o', function(){\n    console.log('\u76d1\u542c\u5230\u6b63\u5728\u83b7\u53d6\u5c5e\u6027o\u7684\u503c');\n    return this._o;\n});\n\ntest.__defineSetter__('o', function(v){\n    console.log('\u76d1\u542c\u5230\u6b63\u5728\u8bbe\u7f6e\u5c5e\u6027o\u7684\u503c\u4e3a\uff1a' + v);\n    this._o = v;\n    return this._o;\n});\n\ntest.o = 14; // \u76d1\u542c\u5230\u6b63\u5728\u8bbe\u7f6e\u5c5e\u6027o\u7684\u503c\u4e3a\uff1a14\nconsole.log(test.o); // \u76d1\u542c\u5230\u6b63\u5728\u83b7\u53d6\u5c5e\u6027o\u7684\u503c\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u8fd9\u4e24\u79cd\u65b9\u6cd5\u5df2\u7ecf\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u800c\u4e14\u968f\u7740\u6d4f\u89c8\u5668\u66f4\u65b0\u4f1a\u6162\u6162\u629b\u5f03\u4e0d\u518d\u652f\u6301\u8fd9\u4e24\u79cd\u5199\u6cd5\u3002"))),Object(o.b)("h3",{id:"\u76f4\u63a5\u5728\u5bf9\u8c61\u4e0a\u9762\u5b9a\u4e49"},"\u76f4\u63a5\u5728\u5bf9\u8c61\u4e0a\u9762\u5b9a\u4e49"),Object(o.b)("p",null,"\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"get"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"set"),"\u7684\u65b9\u5f0f\u6765\u5b9a\u4e49:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var test = {\n  get o(){\n    console.log('\u76d1\u542c\u5230\u6b63\u5728\u83b7\u53d6\u5c5e\u6027o\u7684\u503c');\n    return this._o;\n  },\n  set o(v){\n    console.log('\u76d1\u542c\u5230\u6b63\u5728\u8bbe\u7f6e\u5c5e\u6027o\u7684\u503c\u4e3a\uff1a' + v);\n    this._o = v;\n    return this._o;\n  }\n}\n")),Object(o.b)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u83b7\u53d6\u95ed\u5305\u5185\u5bf9\u8c61")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var foo = (function(){\n  var o = {\n      a: 1,\n      b: 2\n  };\n  return function(key) {\n      return o[key];\n  }\n})();\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"getter"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"setter"),"\u51fd\u6570\u4e2d\u7684",Object(o.b)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411\u8be5\u5bf9\u8c61\u3002\u8fd9\u4e2a\u77e5\u8bc6\u70b9\u6211\u4eec\u53ef\u4ee5\u5728\u6240\u6709\u7684\u5bf9\u8c61\u539f\u578b\u4e0a\u9762\u5b9a\u4e49\u4e00\u4e2a\u5c5e\u6027\u7684",Object(o.b)("inlineCode",{parentName:"p"},"gettter")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{2,6}","{2,6}":!0}),"// \u5b9a\u4e49\u4e00\u4e2a\u552f\u4e00\u7684key\u5fc5\u987b\u6c61\u67d3\u5bf9\u8c61\nconst key = Symbol()\n\nObject.defineProperty(Object.prototype, key, {\n  get () {\n    return this;\n  }\n})\n\nfoo(key)\n")))}l.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(n),j=a,O=p["".concat(c,".").concat(j)]||p[j]||d[j]||o;return n?r.a.createElement(O,i(i({ref:t},s),{},{components:n})):r.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=j;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);