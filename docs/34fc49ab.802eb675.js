(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),i=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,l(l({ref:t},p),{},{components:n})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=(n(0),n(292));const a={id:"tsSupportCommonJs",title:"ts-commonjs\u652f\u6301",hide_title:!0,sidebar_label:"esmodule\u7684\u5f62\u5f0f\u5bfc\u5165commonjs"},c={unversionedId:"ts/goods/tsSupportCommonJs",id:"ts/goods/tsSupportCommonJs",isDocsHomePage:!1,title:"ts-commonjs\u652f\u6301",description:"\u6bd4\u5982 react \u662f\u4ee5 commonjs \u5f62\u5f0f\u5bfc\u51fa\u7684\uff0c\u5f53\u5728 ts \u4e2d\uff1a",source:"@site/docs/ts/goods/\u5bfc\u5165commonjs.md",slug:"/ts/goods/tsSupportCommonJs",permalink:"/docs/ts/goods/tsSupportCommonJs",version:"current",sidebar_label:"esmodule\u7684\u5f62\u5f0f\u5bfc\u5165commonjs",sidebar:"tsdoc",previous:{title:"ts-never",permalink:"/docs/ts/goods/tsNeverType"},next:{title:"ts\u66f4\u65b0\u65e5\u5fd7-4.3.0",permalink:"/docs/ts/update/version4.3"}},l=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],s={rightToc:l};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6bd4\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"react")," \u662f\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"commonjs")," \u5f62\u5f0f\u5bfc\u51fa\u7684\uff0c\u5f53\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"ts")," \u4e2d\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\n")),Object(o.b)("p",null,"\u4f1a\u629b\u51fa\u9519\u8bef ",Object(o.b)("inlineCode",{parentName:"p"},"Module '\"react\"' has no default export.")),Object(o.b)("p",null,"\u5fc5\u987b\u8fd9\u6837\u5199\u624d\u884c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react'\n")),Object(o.b)("p",null,"TS \u662f\u5141\u8bb8\u4f60\u8fd9\u4e48\u5199\u7684\uff0c\u4f46\u662f\u9700\u8981\u5728 tsconfig.json \u4e2d\u914d\u7f6e\u4e24\u4e2a\u5b57\u6bb5"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "allowSyntheticDefaultImports": true,\n  "esModuleInterop": true\n}\n')),Object(o.b)("p",null,"\u5148\u8bf4\u4e0b allowSyntheticDefaultImports\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u5b9e\u9645\u53ea\u8d77\u5230\u68c0\u67e5\u7684\u4f5c\u7528\uff0c\u4e0d\u4f1a\u5bf9\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u6709\u4efb\u4f55\u5f71\u54cd\u3002"),Object(o.b)("p",null,"\u800c esModuleInterop \u5c31\u4e0d\u4e00\u6837\uff0c\u5b9e\u9645\u4e0a\u5f00\u542f\u8fd9\u4e2a\u5b57\u6bb5\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4e5f\u662f\u4f1a\u5f00\u542f allowSyntheticDefaultImports\uff0c\u5e76\u4e14\u5bf9\u4e8e\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e5f\u505a\u4e86\u517c\u5bb9\u3002\u8fd8\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u4e2a\u5b57\u6bb5\u53ea\u6709\u5f53\u628a\u4ee3\u7801\u7f16\u8bd1\u6210 commonJS \u7684\u65f6\u5019\u624d\u4f1a\u8d77\u4f5c\u7528\u3002"),Object(o.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://blog.leodots.me/post/40-think-about-allowSyntheticDefaultImports.html"}),"\u7531 allowSyntheticDefaultImports \u5f15\u8d77\u7684\u601d\u8003"))))}p.isMDXComponent=!0}}]);