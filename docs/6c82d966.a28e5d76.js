(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{350:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(350));const a={},c={unversionedId:"react/nextjs/renderMode/_isr",id:"react/nextjs/renderMode/_isr",isDocsHomePage:!1,title:"_isr",description:"\u589e\u91cf\u9759\u6001\u518d\u751f\uff08ISR\uff09",source:"@site/docs/react/nextjs/renderMode/_isr.md",slug:"/react/nextjs/renderMode/_isr",permalink:"/docs/react/nextjs/renderMode/_isr",version:"current"},i=[{value:"\u589e\u91cf\u9759\u6001\u518d\u751f\uff08ISR\uff09",id:"\u589e\u91cf\u9759\u6001\u518d\u751f\uff08isr\uff09",children:[{value:"ISR \u8fd0\u884c\u6b65\u9aa4",id:"isr-\u8fd0\u884c\u6b65\u9aa4",children:[]},{value:"Next.js ISR \u5f00\u542f",id:"nextjs-isr-\u5f00\u542f",children:[]}]}],s={rightToc:i};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u589e\u91cf\u9759\u6001\u518d\u751f\uff08isr\uff09"},"\u589e\u91cf\u9759\u6001\u518d\u751f\uff08ISR\uff09"),Object(o.b)("p",null,"\u5f53\u6d4f\u89c8\u5668\u8bf7\u6c42\u5df2\u5728\u6784\u5efa\u65f6\u6e32\u67d3\u751f\u6210\u7684\u9875\u9762\u65f6\uff0c\u9996\u5148\u8fd4\u56de\u7684\u662f\u7f13\u5b58\u7684 HTML\uff0c10s \u540e\u9875\u9762\u5f00\u59cb\u91cd\u65b0\u6e32\u67d3\uff0c\u9875\u9762\u6210\u529f\u751f\u6210\u540e\uff0c\u66f4\u65b0\u7f13\u5b58\uff0c\u6d4f\u89c8\u5668\u518d\u6b21\u8bf7\u6c42\u9875\u9762\u65f6\u5c31\u80fd\u62ff\u5230\u6700\u65b0\u6e32\u67d3\u7684\u9875\u9762\u5185\u5bb9\u4e86\u3002"),Object(o.b)("h3",{id:"isr-\u8fd0\u884c\u6b65\u9aa4"},"ISR \u8fd0\u884c\u6b65\u9aa4"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u7f16\u8bd1\u9636\u6bb5\u751f\u6210\u9759\u6001 html\uff0c\u540c ssg \u6b65\u9aa4"),Object(o.b)("li",{parentName:"ol"},"\u7528\u6237\u8bf7\u6c42 server"),Object(o.b)("li",{parentName:"ol"},"server \u8fd4\u56de\u7f13\u5b58\u7684 html\uff0c\u95f4\u9694\u4e00\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e\u6784\u5efa\u91cd\u65b0\u751f\u6210\u5bf9\u5e94\u7684 html\uff0c\u66f4\u65b0\u539f\u6765\u7684\u7f13\u5b58 html")),Object(o.b)("h3",{id:"nextjs-isr-\u5f00\u542f"},"Next.js ISR \u5f00\u542f"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getStaticProps")," \u8fd4\u56de ",Object(o.b)("inlineCode",{parentName:"p"},"revalidate"),"\u914d\u7f6e\u591a\u5c11\u79d2\u4e4b\u540e\u91cd\u65b0\u751f\u6210 html"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"export async function getStaticProps() {\n  const res = await fetch('https://.../posts')\n  const posts = await res.json()\n\n  return {\n    props: {\n      posts\n    },\n    // 10\u79d2\u4e4b\u540e\u91cd\u65b0\u751f\u6210html\n    // highlight-next-line\n    revalidate: 10\n  }\n}\n\nexport async function getStaticPaths() {\n  const res = await fetch('https://.../posts')\n  const posts = await res.json()\n\n  const paths = posts.map(post => ({\n    params: {id: post.id}\n  }))\n  return {paths, fallback: 'blocking'}\n}\n\nexport default Blog\n")))}p.isMDXComponent=!0}}]);