(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),o=(n(0),n(361)),c={id:"reactShallowCompare",title:"react \u6d45\u6bd4\u8f83",hide_title:!0,sidebar_label:"\u6d45\u6bd4\u8f83"},i={unversionedId:"react/goods/reactShallowCompare",id:"react/goods/reactShallowCompare",isDocsHomePage:!1,title:"react \u6d45\u6bd4\u8f83",description:"\u57fa\u7840\u6570\u636e\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u901a\u8fc7 object.is \u5224\u65ad\u3002",source:"@site/docs/react/goods/\u6d45\u6bd4\u8f83.md",slug:"/react/goods/reactShallowCompare",permalink:"/docs/react/goods/reactShallowCompare",version:"current",sidebar_label:"\u6d45\u6bd4\u8f83",sidebar:"reactdoc",previous:{title:"react \u76ee\u5f55\u89c4\u8303",permalink:"/docs/react/goods/reactDirectory"},next:{title:"next.js \u6e32\u67d3\u6a21\u5f0f",permalink:"/docs/react/nextjs/reactNextJsRenderMode"}},l=[{value:"object.is",id:"objectis",children:[{value:"==",id:"",children:[]},{value:"===",id:"-1",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u603b\u7ed3")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u57fa\u7840\u6570\u636e\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"object.is")," \u5224\u65ad\u3002\n\u5bf9\u8c61\u6570\u636e\u7c7b\u578b\uff0c\u5224\u65ad\u5bf9\u8c61\u7684\u4e00\u7ea7\u5c5e\u6027\u7684\u503c\u662f\u5426\u76f8\u7b49\u3002"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="\u6e90\u7801"',title:'"\u6e90\u7801"'}),"const hasOwn = Object.prototype.hasOwnProperty\n\nfunction is(x, y) {\n  if (x === y) {\n    return x !== 0 || y !== 0 || 1 / x === 1 / y\n  } else {\n    return x !== x && y !== y\n  }\n}\n\nexport default function shallowEqual(objA, objB) {\n  if (is(objA, objB)) return true\n\n  if (typeof objA !== 'object' || objA === null ||\n      typeof objB !== 'object' || objB === null) {\n    return false\n  }\n\n  const keysA = Object.keys(objA)\n  const keysB = Object.keys(objB)\n\n  if (keysA.length !== keysB.length) return false\n\n  for (let i = 0; i < keysA.length; i++) {\n    if (!hasOwn.call(objB, keysA[i]) ||\n        !is(objA[keysA[i]], objB[keysA[i]])) {\n      return false\n    }\n  }\n\n  return true\n}\n")),Object(o.b)("h2",{id:"objectis"},"object.is"),Object(o.b)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u7528\u8fd9\u4e2a\u6765\u6bd4\u8f83\u800c\u4e0d\u662f == \u6216\u8005 === \u5462\uff1f"),Object(o.b)("h3",{id:""},"=="),Object(o.b)("p",null,"\u9996\u5148\u5148\u770b ==\uff0c\u7531\u4e8eJS\u662f\u5f31\u7c7b\u578b\u7684\uff0c\u5982\u679c\u4f7f\u7528 == \u8fdb\u884c\u6bd4\u8f83\uff0c== \u64cd\u4f5c\u7b26\u4f1a\u81ea\u52a8\u5c06 0\uff0c\u2018 \u2019\uff08\u7a7a\u5b57\u7b26\u4e32\uff09\uff0cnull\uff0cundefined \u8f6c\u6210\u5e03\u5c14\u578bfalse\uff0c\u8fd9\u6837\u5c31\u4f1a\u51fa\u73b0"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"0 == ' '  // true\nnull == undefined // true\n[1] == true // true\n")),Object(o.b)("h3",{id:"-1"},"==="),Object(o.b)("p",null,"\u5168\u7b49\u64cd\u4f5c\u7b26 ===\uff0c\u5b83\u4e0d\u4f1a\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u4e5f\u5c31\u662f\u8bf4\u5982\u679c\u4e24\u4e2a\u503c\u4e00\u6837\uff0c\u5fc5\u987b\u7b26\u5408\u7c7b\u578b\u4e5f\u4e00\u6837\u3002\u4f46\u662f\uff0c\u5b83\u8fd8\u662f\u6709\u4e24\u79cd\u758f\u6f0f\u7684\u60c5\u51b5"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"+0 === -0 // true\uff0c\u4f46\u6211\u4eec\u671f\u5f85\u5b83\u8fd4\u56defalse\nNaN === NaN // false\uff0c\u6211\u4eec\u671f\u5f85\u5b83\u8fd4\u56detrue\n")),Object(o.b)("p",null,"\u6240\u4ee5\uff0cObject.is\u4fee\u590d\u4e86=== \u8fd9\u4e24\u79cd\u5224\u65ad\u4e0d\u7b26\u5408\u9884\u671f\u7684\u60c5\u51b5\uff0c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function(x, y) {\n  // SameValue algorithm\n  if (x === y) {\n    // \u5904\u7406\u4e3a+0 != -0\u7684\u60c5\u51b5\n    return x !== 0 || 1 / x === 1 / y;\n  } else {\n  // \u5904\u7406 NaN === NaN\u7684\u60c5\u51b5\n    return x !== x && y !== y;\n  }\n};\n")),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.imweb.io/topic/598973c2c72aa8db35d2e291"}),"\u4f60\u771f\u7684\u4e86\u89e3\u6d45\u6bd4\u8f83\u4e48\uff1f"))))}s.isMDXComponent=!0},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,j=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(j,i(i({ref:t},b),{},{components:n})):a.a.createElement(j,i({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);