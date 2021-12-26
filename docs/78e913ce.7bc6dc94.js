(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),c=(n(0),n(339));const o={id:"nodeCliTool",title:"cli-tool",hide_title:!0,sidebar_label:"cli-tool"},a={unversionedId:"package/node/nodeCliTool",id:"package/node/nodeCliTool",isDocsHomePage:!1,title:"cli-tool",description:"run scripts",source:"@site/docs/package/node/cli-tool.md",slug:"/package/node/nodeCliTool",permalink:"/docs/package/node/nodeCliTool",version:"current",sidebar_label:"cli-tool",sidebar:"packagedoc",previous:{title:"\u9879\u76ee\u4e2d\u5fc5\u5907\u7684js\u8d44\u6e90\u5305",permalink:"/docs/package/js/jsMustPkg"},next:{title:"node:util",permalink:"/docs/package/node/nodeModuleUtil"}},l=[{value:"run scripts",id:"run-scripts",children:[{value:"concurrently",id:"concurrently",children:[]}]}],i={rightToc:l};function u({components:e,...t}){return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"run-scripts"},"run scripts"),Object(c.b)("h3",{id:"concurrently"},"concurrently"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/open-cli-tools/concurrently"}),"concurrently"),"\u53cb\u597d\u7684\u5e76\u884c\u6267\u884c\u547d\u4ee4")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'concurrently "npm:watch-js" "npm:watch-css" "npm:watch-node"\n\n# Equivalent to:\nconcurrently -n watch-js,watch-css,watch-node "npm run watch-js" "npm run watch-css" "npm run watch-node"\n')),Object(c.b)("p",null,Object(c.b)("img",{alt:"concurrently",src:n(599).default})))}u.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),p=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return n?c.a.createElement(f,l(l({ref:t},u),{},{components:n})):c.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},599:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/concurrently-603ce78e838e8ac8a0739bdf783d5ac5.png"}}]);