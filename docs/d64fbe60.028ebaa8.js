(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{237:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),a=(r(0),r(314));const o={id:"webpackKnowledge",title:"\u6709\u7528\u77e5\u8bc6\u70b9",hide_title:!0,sidebar_label:"webpack\u6709\u7528\u77e5\u8bc6\u70b9"},l={unversionedId:"enginee/webpack/webpackKnowledge",id:"enginee/webpack/webpackKnowledge",isDocsHomePage:!1,title:"\u6709\u7528\u77e5\u8bc6\u70b9",description:"\u5220\u9664\u9879\u76ee",source:"@site/docs/enginee/webpack/\u6709\u7528\u7684\u77e5\u8bc6\u70b9.md",slug:"/enginee/webpack/webpackKnowledge",permalink:"/docs/enginee/webpack/webpackKnowledge",version:"current",sidebar_label:"webpack\u6709\u7528\u77e5\u8bc6\u70b9"},c=[{value:"\u5220\u9664\u9879\u76ee",id:"\u5220\u9664\u9879\u76ee",children:[{value:"resolve.alias.package\uff1afalse",id:"resolvealiaspackage\uff1afalse",children:[]},{value:"null-loader",id:"null-loader",children:[]}]}],i={rightToc:c};function p({components:e,...n}){return Object(a.b)("wrapper",Object(t.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5220\u9664\u9879\u76ee"},"\u5220\u9664\u9879\u76ee"),Object(a.b)("p",null,"\u6bd4\u5982\u5220\u9664\u9879\u76ee\u4e2d\u6df1\u5c42\u4f9d\u8d56\u7684\u6ca1\u6709\u7528\u7684\u6a21\u5757\u3002"),Object(a.b)("h3",{id:"resolvealiaspackage\uff1afalse"},"resolve.alias.package\uff1afalse"),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"webpack@5")," \u4e2d\u901a\u8fc7\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"alias.package: false"),"\uff0c\u6765\u89e3\u51b3\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  resolve: {\n    alias: {\n      'ignored-module': false,\n      './ignored-module': false\n    }\n  }\n}\n")),Object(a.b)("h3",{id:"null-loader"},"null-loader"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"// webpack.config.js\nconst path = require('path');\n\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        // Test for a polyfill (or any file) and it won't be included in your\n        // bundle\n        test: path.resolve(__dirname, 'node_modules/library/polyfill.js'),\n        use: 'null-loader'\n      }\n    ]\n  }\n}\n")))}p.isMDXComponent=!0},314:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=t,f=s["".concat(l,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:n},p),{},{components:r})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);