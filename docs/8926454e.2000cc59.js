(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{161:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(7),a=(r(0),r(297)),i={id:"nodeToolPkg1",title:"\u5e38\u7528\u7684node\u8d44\u6e90\u5305",hide_title:!0,sidebar_label:"\u5e38\u7528\u5de5\u51771"},l={unversionedId:"package/node/nodeToolPkg1",id:"package/node/nodeToolPkg1",isDocsHomePage:!1,title:"\u5e38\u7528\u7684node\u8d44\u6e90\u5305",description:"radis",source:"@site/docs/package/node/\u5de5\u5177\u53051.md",slug:"/package/node/nodeToolPkg1",permalink:"/docs/package/node/nodeToolPkg1",version:"current",sidebar_label:"\u5e38\u7528\u5de5\u51771",sidebar:"packagedoc",previous:{title:"\u5e38\u7528\u7684node\u8d44\u6e90\u5305",permalink:"/docs/package/node/nodeToolPkg"},next:{title:"\u5e38\u7528\u7684cli\u8d44\u6e90\u5305",permalink:"/docs/package/node/nodeToolCli"}},c=[{value:"radis",id:"radis",children:[{value:"1. ioredis \u529f\u80fd\u5f3a\u5927\u7684radis\u5de5\u5177",id:"1-ioredis-\u529f\u80fd\u5f3a\u5927\u7684radis\u5de5\u5177",children:[]}]},{value:"GraphQL",id:"graphql",children:[{value:"1. apollo-client \u9002\u7528\u4e8eweb\u4ee5\u53caios\u4ee5\u53caandroid\u7684GraphQL\u5ba2\u6237\u7aef",id:"1-apollo-client-\u9002\u7528\u4e8eweb\u4ee5\u53caios\u4ee5\u53caandroid\u7684graphql\u5ba2\u6237\u7aef",children:[]}]}],s={rightToc:c};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"radis"},"radis"),Object(a.b)("h3",{id:"1-ioredis-\u529f\u80fd\u5f3a\u5927\u7684radis\u5de5\u5177"},Object(a.b)("a",Object(t.a)({parentName:"h3"},{href:"https://github.com/luin/ioredis"}),Object(a.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/luin/ioredis?label=ioredis&style=social",alt:"1. ioredis \u529f\u80fd\u5f3a\u5927\u7684radis\u5de5\u5177"})))),Object(a.b)("p",null,"\u529f\u80fd\u5f3a\u5927\u7684",Object(a.b)("inlineCode",{parentName:"p"},"radis"),"\u5de5\u5177\uff0c\u963f\u91cc\u4e5f\u5728\u4f7f\u7528"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'const Redis = require("ioredis");\nconst redis = new Redis();\nredis.set("foo", "bar");\nredis.get("foo", function (err, result) {\n  if (err) {\n    console.error(err);\n  } else {\n    console.log(result);\n  }\n});\nredis.get("foo").then(function (result) {\n  console.log(result); // Prints "bar"\n});\nredis.zadd("sortedSet", 1, "one", 2, "dos", 4, "quatro", 3, "three");\nredis.zrange("sortedSet", 0, 2, "WITHSCORES").then((res) => console.log(res));\nredis.set("key", 100, "EX", 10);\n')),Object(a.b)("h2",{id:"graphql"},"GraphQL"),Object(a.b)("h3",{id:"1-apollo-client-\u9002\u7528\u4e8eweb\u4ee5\u53caios\u4ee5\u53caandroid\u7684graphql\u5ba2\u6237\u7aef"},Object(a.b)("a",Object(t.a)({parentName:"h3"},{href:"https://github.com/apollographql/apollo-client"}),Object(a.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/apollographql/apollo-client?label=apollo-client&style=social",alt:"1. apollo-client \u9002\u7528\u4e8eweb\u4ee5\u53caios\u4ee5\u53caandroid\u7684GraphQL\u5ba2\u6237\u7aef"})))),Object(a.b)("p",null,"\u9002\u7528\u4e8e\u4efb\u4f55\u6846\u67b6(",Object(a.b)("inlineCode",{parentName:"p"},"react,vue,angular"),")\u6216\u8005\u5e73\u53f0(",Object(a.b)("inlineCode",{parentName:"p"},"ios,android"),")\u7684",Object(a.b)("inlineCode",{parentName:"p"},"GraphQL"),"\u5ba2\u6237\u7aef"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"import { ApolloClient, InMemoryCache } from '@apollo/client';\n\nconst client = new ApolloClient({\n  uri: 'https://48p1r2roz4.sse.codesandbox.io',\n  cache: new InMemoryCache()\n});\n\nimport { gql } from '@apollo/client';\nclient\n  .query({\n    query: gql`\n      query GetRates {\n        rates(currency: \"USD\") {\n          currency\n        }\n      }\n    `\n  })\n  .then(result => console.log(result));\n")))}p.isMDXComponent=!0},297:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return g}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),b=t,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return r?o.a.createElement(g,l(l({ref:n},s),{},{components:r})):o.a.createElement(g,l({ref:n},s))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);