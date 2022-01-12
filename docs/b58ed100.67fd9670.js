(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{361:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(361));const c={},o={unversionedId:"react/nextjs/renderMode/_ssg",id:"react/nextjs/renderMode/_ssg",isDocsHomePage:!1,title:"_ssg",description:"\u9759\u6001\u751f\u6210\uff08SSG\uff09",source:"@site/docs/react/nextjs/renderMode/_ssg.md",slug:"/react/nextjs/renderMode/_ssg",permalink:"/docs/react/nextjs/renderMode/_ssg",version:"current"},l=[{value:"\u9759\u6001\u751f\u6210\uff08SSG\uff09",id:"\u9759\u6001\u751f\u6210\uff08ssg\uff09",children:[{value:"SSG \u8fd0\u884c\u6b65\u9aa4",id:"ssg-\u8fd0\u884c\u6b65\u9aa4",children:[]},{value:"Next.js SSG \u5f00\u542f",id:"nextjs-ssg-\u5f00\u542f",children:[]},{value:"getStaticProps",id:"getstaticprops",children:[]},{value:"getStaticPaths.fallback",id:"getstaticpathsfallback",children:[]}]}],i={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u9759\u6001\u751f\u6210\uff08ssg\uff09"},"\u9759\u6001\u751f\u6210\uff08SSG\uff09"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u9759\u6001\u751f\u6210\uff1a\u7f16\u8bd1\u9636\u6bb5\u5c06\u54cd\u5e94\u7684\u8def\u7531\u76f4\u63a5\u7f16\u8bd1\u6210 html\uff0c\u6570\u636e\u8bf7\u6c42\u53ef\u4ee5\u5728\u7f16\u8bd1\u9636\u6bb5\u751f\u6210\uff0c\u4e5f\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u6e32\u67d3\u9636\u6bb5\u6267\u884c")),Object(a.b)("h3",{id:"ssg-\u8fd0\u884c\u6b65\u9aa4"},"SSG \u8fd0\u884c\u6b65\u9aa4"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u7f16\u8bd1\u751f\u6210\u9875\u9762\u7684 html"),Object(a.b)("li",{parentName:"ol"},"\u7528\u6237\u53d1\u9001\u8bf7\u6c42\u5230 server"),Object(a.b)("li",{parentName:"ol"},"server \u5c06\u5bf9\u5e94\u7684 html \u4ee5\u53ca js\uff0c\u8fd4\u56de\u5230\u6d4f\u89c8\u5668"),Object(a.b)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u6e32\u67d3 html\uff0c\u6267\u884c React \u4ee3\u7801\u5c06 javascript \u4e8b\u4ef6\u7ed1\u5b9a\uff0c\u6fc0\u6d3b\u4ee5\u8ba9\u9875\u9762\u5177\u6709\u4ea4\u4e92\u6027\uff0c\u4e5f\u79f0\u4e3a",Object(a.b)("inlineCode",{parentName:"li"},"\u6c34\u5408"))),Object(a.b)("h3",{id:"nextjs-ssg-\u5f00\u542f"},"Next.js SSG \u5f00\u542f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u662f\u5f00\u542f SSG \u6e32\u67d3\u6a21\u5f0f\uff0c\u65e0\u975e\u5c31\u662f\u6ca1\u6709\u7f13\u5b58\u6570\u636e"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"getStaticProps"),"\u548c",Object(a.b)("inlineCode",{parentName:"li"},"getStaticPaths")," \u624b\u52a8\u5f00\u542f\uff0c\u5e76\u6307\u5b9a\u6570\u636e")),Object(a.b)("h3",{id:"getstaticprops"},"getStaticProps"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function Post(props) {\n  const {postData} = props\n  return <div>{postData.title}</div>\n}\n\nexport async function getStaticProps(context) {\n  // \u6a21\u62df\u83b7\u53d6\u9759\u6001\u6570\u636e\n  const postData = await getPostData()\n  return {\n    props: {postData}\n  }\n}\n")),Object(a.b)("h3",{id:"getstaticpathsfallback"},"getStaticPaths.fallback"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fallback: false"),"\uff1a\u4e0d\u964d\u7ea7\uff0c\u8bbf\u95ee\u672a\u7f16\u8bd1\u751f\u6210\u7684\u9875\u9762\uff0c\u76f4\u63a5\u8fd4\u56de 404"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fallback: true"),"\uff1a\u751f\u6210\u4e00\u4e2a\u6ca1\u6709\u6570\u636e\u7684 html \u8fd4\u56de\u6d4f\u89c8\u5668\uff0c\u7136\u540e\u540e\u53f0\u540c\u6b65\u751f\u6210\u5305\u542b props \u6570\u636e\u7684 json \u6587\u4ef6\u8fd4\u56de\u5230\u6d4f\u89c8\u5668\uff0c\u518d\u91cd\u65b0\u6e32\u67d3\u8fd9\u4e2a\u6570\u636e",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u8bbf\u95ee\uff1aserver \u8fd4\u56de\u4e00\u4e2a\u4e0d\u5305\u542b props \u7684 html \u5230\u6d4f\u89c8\u5668"),Object(a.b)("li",{parentName:"ol"},"server \u7aef\u540c\u6b65\u751f\u6210\u4e00\u4e2a\u5305\u542b props \u7684 json \u6587\u4ef6\uff0c\u4ee5\u53ca\u5305\u542b\u8fd9\u4e2a\u8def\u5f84\u5b8c\u6574\u7684 props \u7684 html \u6587\u4ef6"),Object(a.b)("li",{parentName:"ol"},"json \u6587\u4ef6\u8fd4\u56de\u5230\u6d4f\u89c8\u5668\uff0c\u8fdb\u884c\u6c34\u5408\u91cd\u65b0\u6e32\u67d3\u9875\u9762\uff0chtml \u6587\u4ef6\u5b58\u653e\u5230\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u4e0b\u6b21\u76f4\u63a5\u4f7f\u7528"),Object(a.b)("li",{parentName:"ol"},"\u518d\u6b21\u8bbf\u95ee\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u4ece\u4e4b\u524d\u6784\u5efa\u5b8c\u6210\u7684 html \u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668"),Object(a.b)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u76f4\u63a5\u6e32\u67d3\u5b8c\u6574\u7684 html"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fallback: blocking"),"\uff1a\u4e0d\u964d\u7ea7\uff0c\u5e76\u4e14\u8981\u6c42\u7528\u6237\u8bf7\u6c42\u4e00\u76f4\u7b49\u5230\u65b0\u9875\u9762\u9759\u6001\u751f\u6210\u7ed3\u675f\u518d\u8fd4\u56de\u5230\u6d4f\u89c8\u5668\u7aef\uff0c\u5e76\u7f13\u5b58\u5230\u670d\u52a1\u5668\u672c\u5730\uff0c\u4f9b\u4e0b\u6b21\u76f4\u63a5\u4f7f\u7528")))}s.isMDXComponent=!0}}]);