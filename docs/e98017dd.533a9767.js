(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),i=(n(0),n(326)),c={id:"typescriptBseconfig",title:"ts\u57fa\u7840\u914d\u7f6e",hide_title:!0,sidebar_label:"\u57fa\u7840\u914d\u7f6e"},l={unversionedId:"enginee/typescript/typescriptBseconfig",id:"enginee/typescript/typescriptBseconfig",isDocsHomePage:!1,title:"ts\u57fa\u7840\u914d\u7f6e",description:"babel-typescript",source:"@site/docs/enginee/typescript/ts\u57fa\u7840\u914d\u7f6e.md",slug:"/enginee/typescript/typescriptBseconfig",permalink:"/docs/enginee/typescript/typescriptBseconfig",version:"current",sidebar_label:"\u57fa\u7840\u914d\u7f6e",sidebar:"babeldoc",previous:{title:"eslint prettier editorconfig \u4e09\u8005\u533a\u522b",permalink:"/docs/enginee/eslint/eslintPrettierEslintEditorconfig"},next:{title:"tsconfig.json",permalink:"/docs/enginee/typescript/typescriptTsConfigJSON"}},o=[{value:"babel-typescript",id:"babel-typescript",children:[]},{value:"google/gts",id:"googlegts",children:[]}],p={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"babel-typescript"},"babel-typescript"),Object(i.b)("p",null,"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"babel"),"\u53bb\u5904\u7406",Object(i.b)("inlineCode",{parentName:"p"},"typescript"),"\u3002\u53c2\u8003",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/TypeScript-Babel-Starter"}),"TypeScript-Babel-Starter")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u9996\u5148\u5b89\u88c5\u5fc5\u987b\u7684",Object(i.b)("inlineCode",{parentName:"li"},"npm"),"\u5305")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"devDependencies": {\n    "@babel/cli": "^7.8.3",\n    "@babel/core": "^7.8.3",\n    "@babel/plugin-proposal-class-properties": "^7.8.3",\n    "@babel/preset-env": "^7.8.3",\n    "@babel/preset-typescript": "^7.8.3",\n    "typescript": "^3.7.5"\n}\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"\u7136\u540e\u521b\u5efa",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"tsc --init --declaration --allowSyntheticDefaultImports --target esnext --outDir lib\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"\u521b\u5efa",Object(i.b)("inlineCode",{parentName:"li"},".babelrc"),"\u6587\u4ef6")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "presets": [\n        "@babel/env",\n        "@babel/typescript"\n    ],\n    "plugins": [\n        "@babel/proposal-class-properties"\n    ]\n}\n')),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"\u6700\u540e\u521b\u5efa",Object(i.b)("inlineCode",{parentName:"li"},"webpack.config.js"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const path = require('path')\n\nmodule.exports = {\n    // Change to your \"entry-point\".\n    entry: './src/index',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'app.bundle.js'\n    },\n    resolve: {\n        extensions: ['.ts', '.tsx', '.js', '.json']\n    },\n    module: {\n        rules: [{\n            // Include ts, tsx, js, and jsx files.\n            test: /\\.(ts|js)x?$/,\n            exclude: /node_modules/,\n            loader: 'babel-loader',\n        }],\n    }\n}\n")),Object(i.b)("h2",{id:"googlegts"},"google/gts"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/google/gts"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/google/gts?label=gts&style=social",alt:"gts"})))),Object(i.b)("p",null,"\u8c37\u6b4c",Object(i.b)("inlineCode",{parentName:"p"},"typescript"),"\u98ce\u683c\uff0c\u5305\u62ec\u4e86\u5404\u79cd\u5e94\u7528\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u521d\u59cb\u5316",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"npx gts init\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"check")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fix")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clean")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"compile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pretest"))))}b.isMDXComponent=!0},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(n),j=r,m=s["".concat(c,".").concat(j)]||s[j]||u[j]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);