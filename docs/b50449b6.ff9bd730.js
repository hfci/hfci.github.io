(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=(n(0),n(237));const c={id:"reactGoods1",title:"react \u77e5\u8bc6\u70b9",hide_title:!0,sidebar_label:"react\u77e5\u8bc6\u70b9"},i={unversionedId:"react/goods/reactGoods1",id:"react/goods/reactGoods1",isDocsHomePage:!1,title:"react \u77e5\u8bc6\u70b9",description:"\u4f20\u9012\u6570\u636e",source:"@site/docs/react/goods/\u5e72\u8d27.md",slug:"/react/goods/reactGoods1",permalink:"/docs/react/goods/reactGoods1",version:"current",sidebar_label:"react\u77e5\u8bc6\u70b9",sidebar:"reactdoc",previous:{title:"react \u57fa\u7840",permalink:"/docs/react/goods/reactBase"},next:{title:"react\u4e2d\u7684\u7c7b\u578b",permalink:"/docs/react/goods/reactType"}},o=[{value:"\u4f20\u9012\u6570\u636e",id:"\u4f20\u9012\u6570\u636e",children:[{value:"1. <code>chldren</code>\u53ef\u4ee5\u901a\u8fc7<code>props</code>\u7684\u65b9\u5f0f\u4f20\u9012",id:"1-chldren\u53ef\u4ee5\u901a\u8fc7props\u7684\u65b9\u5f0f\u4f20\u9012",children:[]},{value:"2. <code>{}</code>\u4f20\u9012\u7ec4\u4ef6\u548c<code>JSX</code>\u7684\u533a\u522b",id:"2-\u4f20\u9012\u7ec4\u4ef6\u548cjsx\u7684\u533a\u522b",children:[]}]}],d={rightToc:o};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u4f20\u9012\u6570\u636e"},"\u4f20\u9012\u6570\u636e"),Object(r.b)("h3",{id:"1-chldren\u53ef\u4ee5\u901a\u8fc7props\u7684\u65b9\u5f0f\u4f20\u9012"},"1. ",Object(r.b)("inlineCode",{parentName:"h3"},"chldren"),"\u53ef\u4ee5\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"h3"},"props"),"\u7684\u65b9\u5f0f\u4f20\u9012"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function Demo(({ children })) {\n  return children\n}\n\n// \u539f\u59cb\u65b9\u5f0f\n<Demo>\n  <div>child</div>\n</Demo>\n\n// \u901a\u8fc7prop\u4f20\u9012\n<Demo children={<div>child</div>}>\n</Demo>\n")),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u91ca\u4e49")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u4e24\u79cd\u65b9\u5f0f\u662f\u4e00\u6837\u7684\uff0c\u5176\u5b9e\u653e\u5728\u7ec4\u4ef6\u91cc\u9762\u7684",Object(r.b)("inlineCode",{parentName:"p"},"jsx"),"\uff0c\u6700\u7ec8\u5c31\u662f\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"props"),"\u4f20\u9012\u7684"))),Object(r.b)("h3",{id:"2-\u4f20\u9012\u7ec4\u4ef6\u548cjsx\u7684\u533a\u522b"},"2. ",Object(r.b)("inlineCode",{parentName:"h3"},"{}"),"\u4f20\u9012\u7ec4\u4ef6\u548c",Object(r.b)("inlineCode",{parentName:"h3"},"JSX"),"\u7684\u533a\u522b"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const Test = <div></div>\n\nfunction renderTest () {\n  return (\n    // \u65b9\u5f0f\u4e00\n    <div>{Test}</div>\n  )\n}\n\nfunction renderTest () {\n  return (\n    // \u65b9\u5f0f\u4e8c\n    <div><Test /></div>\n  )\n}\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u91cd\u8981\u63d0\u793a")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u82b1\u62ec\u53f7",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"\u5185\u7684\u53d8\u91cf\uff0c\u5c06\u76f4\u63a5\u53d8\u6210\u8868\u8fbe\u5f0f\uff0c\u4e0d\u4f1a\u88ab\u8f6c\u6362\u6210",Object(r.b)("inlineCode",{parentName:"p"},"JSX")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MyComponent>\n  {"My address is {{address}}."}\n</MyComponent>\n\n// jsx\u5b9e\u9645\u4e0a\u4f1a\u8fd9\u6837,\u800c\u8868\u8fbe\u5f0f\u4e0d\u4f1a\u8f6c\u6362\nReact.createElement(MyComponent, null, "My address is {{address}}.");\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6bd4\u5982\u6e32\u67d3",Object(r.b)("inlineCode",{parentName:"p"},"lazy"),"\u7ec4\u4ef6\uff0c\u5c31\u4e0d\u80fd\u76f4\u63a5\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"\u4f20\u9012\u6e32\u67d3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const Text = React.lazy(() => import('text.tsx))\nfunction renderText () {\n  return (\n    <div>{Text}</div>\n  )\n}\n")),Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\ud83d\udc46\u5c31\u4f1a\u62a5\u9519")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Text"),"\u5e76\u4e0d\u662f\u4e00\u4e2a\u771f\u6b63\u7684\u7ec4\u4ef6\uff0c\u5e76\u4e0d\u80fd\u76f4\u63a5\u6e32\u67d3\uff0c\u9700\u8981\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"p"},"React.createElement"),"\u65b9\u6cd5\u624d\u884c\uff0c\u6240\u4ee5\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u624b\u52a8\u8f6c\u6362")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"  const Text = React.lazy(() => import('text.tsx))\n  function renderText () {\n    return (\n      <div>{React.createElement(Text)}</div>\n    )\n  }\n")),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u901a\u8fc7\u8f6c\u6362\u5668\u8f6c\u6362")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const Text = React.lazy(() => import('text.tsx))\n  function renderText () {\n    return (\n      <div><Text /></div>\n    )\n  }\n")))))))))}b.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,O=s["".concat(i,".").concat(m)]||s[m]||l[m]||c;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);