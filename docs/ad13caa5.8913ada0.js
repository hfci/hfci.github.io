(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{310:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),p=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,d=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return t?o.a.createElement(d,i(i({ref:n},b),{},{components:t})):o.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=t[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},44:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(7),a=(t(0),t(310)),c={},i={unversionedId:"package/node/file/_partial-find",id:"package/node/file/_partial-find",isDocsHomePage:!1,title:"_partial-find",description:"\u67e5\u627e\u5339\u914d",source:"@site/docs/package/node/file/_partial-find.md",slug:"/package/node/file/_partial-find",permalink:"/docs/package/node/file/_partial-find",version:"current"},l=[{value:"\u67e5\u627e\u5339\u914d",id:"\u67e5\u627e\u5339\u914d",children:[{value:"globby",id:"globby",children:[]},{value:"node-glob",id:"node-glob",children:[]}]}],b={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u67e5\u627e\u5339\u914d"},"\u67e5\u627e\u5339\u914d"),Object(a.b)("h3",{id:"globby"},"globby"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sindresorhus/globby"}),"globby")," \u5339\u914d\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u652f\u6301\u901a\u914d\u7b26")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\u251c\u2500\u2500 unicorn\n\u251c\u2500\u2500 cake\n\u2514\u2500\u2500 rainbow\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { globby } from 'globby'\n\nconst paths = await globby(['*', '!cake'])\n\nconsole.log(paths)\n//=> ['unicorn', 'rainbow']\n")),Object(a.b)("h3",{id:"node-glob"},"node-glob"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/isaacs/node-glob"}),"node-gloy")," \u5339\u914d\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u652f\u6301\u901a\u914d\u7b26\uff0c\u6bd4",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#globby"}),"globby")," \u652f\u6301\u7684\u901a\u914d\u7b26\u66f4\u591a\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"var glob = require('glob')\n\n// options is optional\nglob('**/*.js', options, function (er, files) {\n  // files is an array of filenames.\n  // If the `nonull` option is set, and nothing\n  // was found, then files is [\"**/*.js\"]\n  // er is an error object or null.\n})\n")))}p.isMDXComponent=!0}}]);