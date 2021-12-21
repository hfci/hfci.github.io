(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),c=(n(0),n(326)),i={id:"version4.0",title:"ts\u66f4\u65b0\u65e5\u5fd7-4.0.0",hide_title:!0,sidebar_label:"4.0.0"},o={unversionedId:"ts/update/version4.0",id:"ts/update/version4.0",isDocsHomePage:!1,title:"ts\u66f4\u65b0\u65e5\u5fd7-4.0.0",description:"4.0.0",source:"@site/docs/ts/update/4.0.0.md",slug:"/ts/update/version4.0",permalink:"/docs/ts/update/version4.0",version:"current",sidebar_label:"4.0.0",sidebar:"tsdoc",previous:{title:"ts\u66f4\u65b0\u65e5\u5fd7-4.1.0",permalink:"/docs/ts/update/version4.1"}},p=[{value:"4.0.0",id:"400",children:[{value:"1. spread \u5143\u7ec4\u548c\u6570\u7ec4",id:"1-spread-\u5143\u7ec4\u548c\u6570\u7ec4",children:[]},{value:"2. \u6807\u8bb0\u7684\u5143\u7ec4\u5143\u7d20",id:"2-\u6807\u8bb0\u7684\u5143\u7ec4\u5143\u7d20",children:[]},{value:"3. catch \u5b50\u53e5\u7ed1\u5b9a\u652f\u6301 unknown",id:"3-catch-\u5b50\u53e5\u7ed1\u5b9a\u652f\u6301-unknown",children:[]},{value:"4. @deprecated \u652f\u6301",id:"4-deprecated-\u652f\u6301",children:[]}]}],s={rightToc:p};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"400"},"4.0.0"),Object(c.b)("h3",{id:"1-spread-\u5143\u7ec4\u548c\u6570\u7ec4"},"1. spread \u5143\u7ec4\u548c\u6570\u7ec4"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type Strings = [string, string];\ntype Numbers = [number, number];\n// [string, string, number, number]\ntype StrStrNumNum = [...Strings, ...Numbers];\n")),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u4e24\u4e2a\u57fa\u7840\u66f4\u6539")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5143\u7ec4\u7c7b\u578b\u8bed\u6cd5\u4e2d\u7684 spread \u73b0\u5728\u53ef\u4ee5\u6cdb\u578b\u3002"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"function tail<T extends any[]>(arr: readonly [any, ...T]) {\n  const [_ignored, ...rest] = arr;\n  return rest;\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"rest \u5143\u7d20\u53ef\u4ee5\u51fa\u73b0\u5728\u5143\u7ec4\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5728\u7ed3\u5c3e\uff01"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type arr1<T extends Array<any>> = [string, number, ...T]\ntype arr2 = [Function, object]\n\nexport type arr = [...arr1<[]>, 1, ...arr2, 2]\n")))))),Object(c.b)("h3",{id:"2-\u6807\u8bb0\u7684\u5143\u7ec4\u5143\u7d20"},"2. \u6807\u8bb0\u7684\u5143\u7ec4\u5143\u7d20"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// \u539f\u6765\u7684\u5143\u7ec4\u53ea\u80fd\u8fd9\u6837\u5b9a\u4e49\uff1a\ntype Range = [number, number]\n\n// \u73b0\u5728\u53ef\u4ee5\u8fd9\u4e48\u5b9a\u4e49\uff1a\ntype Range = [start: number, end: number]\n")),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u589e\u5f3a\u53ef\u8bfb\u6027")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// \u539f\u6765\u7684\u65b9\u6cd5\u53c2\u6570\u5b9a\u4e49\nfunction foo(...args: [string, number]): void {\n}\n\n// \u73b0\u5728\u7684\u65b9\u6cd5\u53c2\u6570\u5b9a\u4e49\nfunction foo(x: [first: string, second: number]) {\n  let [a, b] = x;\n}\n")))),Object(c.b)("h3",{id:"3-catch-\u5b50\u53e5\u7ed1\u5b9a\u652f\u6301-unknown"},"3. catch \u5b50\u53e5\u7ed1\u5b9a\u652f\u6301 unknown"),Object(c.b)("p",null,"\u4e4b\u524d ",Object(c.b)("inlineCode",{parentName:"p"},"catch")," \u5b50\u53e5\u53d8\u91cf\u56fa\u5316\u4e0b\u6765\u5c31\u662f",Object(c.b)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u3002\u8fd9\u610f\u5473\u7740 TypeScript \u5141\u8bb8\u4f60\u5bf9\u5b83\u4eec\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"try {\n  // ...\n}\ncatch (x) {\n  // x has type 'any' - have fun!\n  console.log(x.message);\n  console.log(x.toUpperCase());\n  x++;\n  x.yadda.yadda.yadda();\n}\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"4.0.0"),"\u7248\u672c\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49",Object(c.b)("inlineCode",{parentName:"p"},"catch"),"\u5b50\u53e5\u53d8\u91cf\u7684\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"try {\n  // ...\n} catch (e: unknown) {\n  // error!\n  // Property 'toUpperCase' does not exist on type 'unknown'.\n  console.log(e.toUpperCase())\n  if (typeof e === 'string') {\n    // works!\n    // We've narrowed 'e' down to the type 'string'.\n    console.log(e.toUpperCase())\n  }\n}\n")),Object(c.b)("h3",{id:"4-deprecated-\u652f\u6301"},"4. @deprecated \u652f\u6301"),Object(c.b)("p",null,"\u6dfb\u52a0",Object(c.b)("inlineCode",{parentName:"p"},"@deprecated"),"\u4f1a\u88ab\u89c6\u4e3a\u5f03\u7528\u6a21\u5757\u3002"),Object(c.b)("p",null,Object(c.b)("img",{alt:"@deprecated",src:n(384).default})))}b.isMDXComponent=!0},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||l[u]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},384:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/@deprecated-f6add80e7e307c0c2a7f9f9c404bc9a8.png"}}]);