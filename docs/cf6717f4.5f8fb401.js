(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=o(n),m=r,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<i;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(292));const i={},p={unversionedId:"enginee/eslint/configOptions/_partial-parser",id:"enginee/eslint/configOptions/_partial-parser",isDocsHomePage:!1,title:"_partial-parser",description:"parser",source:"@site/docs/enginee/eslint/configOptions/_partial-parser.md",slug:"/enginee/eslint/configOptions/_partial-parser",permalink:"/docs/enginee/eslint/configOptions/_partial-parser",version:"current"},c=[{value:"parser",id:"parser",children:[{value:"esprima \u5904\u7406js\u8bed\u6cd5",id:"esprima-\u5904\u7406js\u8bed\u6cd5",children:[]},{value:"@babel/eslint-parser \u5904\u7406\u6240\u6709\u7684 babel code",id:"babeleslint-parser-\u5904\u7406\u6240\u6709\u7684-babel-code",children:[]},{value:"@typescript-eslint/parser \u5904\u7406 typescript \u8bed\u6cd5",id:"typescript-eslintparser-\u5904\u7406-typescript-\u8bed\u6cd5",children:[]},{value:"\u5904\u7406 react",id:"\u5904\u7406-react",children:[]},{value:"\u5904\u7406 vue",id:"\u5904\u7406-vue",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}]}],b={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"parser"},"parser"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ESLint")," \u4f1a\u5bf9\u6211\u4eec\u7684\u4ee3\u7801\u8fdb\u884c\u6821\u9a8c\uff0c\u800c ",Object(a.b)("inlineCode",{parentName:"p"},"parser")," \u7684\u4f5c\u7528\u662f\u5c06\u6211\u4eec\u5199\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://link.zhihu.com/?target=https%3A//github.com/estree/estree"}),"ESTree"),"\uff0cESLint \u4f1a\u5bf9 ESTree \u8fdb\u884c\u6821\u9a8c\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"ESTree")," \u53ea\u662f\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"AST")," \u7684\u67d0\u4e00\u79cd\u89c4\u8303\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"ESTree")," \u672c\u8d28\u4e0a\u8fd8\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"AST"),"\u3002")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("inlineCode",{parentName:"p"},"ESLint")," \u9ed8\u8ba4\u4f7f\u7528 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eslint/espree"}),"Espree")," \u4f5c\u4e3a\u5176\u89e3\u6790\u5668\uff0c\u53ea\u80fd\u8f6c\u6362\u4e24\u79cd\u8bed\u6cd5\u6a21\u5f0f\uff1a"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"js"),"\uff1a\u53ea\u80fd\u5904\u7406\u6807\u51c6\u6027\u7684\u8bed\u6cd5"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"jsx"),"\uff1a\u9700\u8981\u914d\u4e0a ",Object(a.b)("inlineCode",{parentName:"li"},"parserOptions.ecmaFeatures.jsx"))),Object(a.b)("p",{parentName:"div"},"\u6240\u4ee5\u9700\u8981\u89e3\u6790\u522b\u7684\u8bed\u6cd5\u89c4\u5219\u5c31\u9700\u8981\u7279\u6b8a\u800c\u4e14\u4e0e ",Object(a.b)("inlineCode",{parentName:"p"},"ESLint")," \u517c\u5bb9\u7684\u89e3\u6790\u5668\uff1a"))),Object(a.b)("h3",{id:"esprima-\u5904\u7406js\u8bed\u6cd5"},"esprima \u5904\u7406js\u8bed\u6cd5"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"esprima")," \u548c\u9ed8\u8ba4\u89e3\u6790\u5668\u4e00\u6837\uff0c\u53ea\u662f\u80fd\u89e3\u6790 ",Object(a.b)("inlineCode",{parentName:"p"},"js")," \u8bed\u6cd5\uff0c\u53ea\u4e0d\u8fc7\u80fd\u517c\u5bb9\u66f4\u591a\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"jsx")," \u8bed\u6cd5\uff0c\u5f88\u5c11\u573a\u666f\u4f7f\u7528\u3002"),Object(a.b)("h3",{id:"babeleslint-parser-\u5904\u7406\u6240\u6709\u7684-babel-code"},"@babel/eslint-parser \u5904\u7406\u6240\u6709\u7684 babel code"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"ESLint"),"\u7684\u6838\u5fc3\u89c4\u5219\u4e0d\u652f\u6301\u5b9e\u9a8c\u6027\u8bed\u6cd5\uff0c\u56e0\u6b64\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff0c@babel/eslint-parser \u662f\u5141\u8bb8 ESLint \u5728\u7531 Babel \u8f6c\u6362\u7684\u6e90\u4ee3\u7801\u4e0a\u8fd0\u884c\u7684\u89e3\u6790\u5668\uff0c\u6240\u4ee5\u80fd\u5904\u7406\u6240\u6709 babel \u652f\u6301\u7684\u6e90\u4ee3\u7801\u3002")),Object(a.b)("h3",{id:"typescript-eslintparser-\u5904\u7406-typescript-\u8bed\u6cd5"},"@typescript-eslint/parser \u5904\u7406 typescript \u8bed\u6cd5"),Object(a.b)("h3",{id:"\u5904\u7406-react"},"\u5904\u7406 react"),Object(a.b)("p",null,"react \u5176\u5b9e\u7528\u7684\u662f jsx \u8bed\u6cd5\uff0c\u6240\u4ee5\u9ed8\u8ba4\u7684 parser \u5c31\u652f\u6301\uff0c\u4f46\u662f\u7531\u4e8e react \u62d3\u5c55\u4e86\u66f4\u591a jsx \u8bed\u6cd5\uff0c\u8fd9\u4e9b\u8bed\u6cd5 \u9ed8\u8ba4\u7684\u89e3\u6790\u5668\u662f\u8bc6\u522b\u4e0d\u4e86\u7684\uff0c\u6240\u4ee5\u9700\u8981\u63d2\u4ef6\u652f\u6301\u8fd9\u4e9b\u62d3\u5c55\u8bed\u6cd5\uff1a",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react"}),"eslint-plugin-react")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  env: {\n    browser: true,\n    es2021: false,\n    node: true\n  },\n  extends: [\n    'plugin:react/recommended'\n  ],\n  // react\u4e0d\u9700\u8981\u5355\u72ec\u7684\u89e3\u6790\u5668\n  parser: '@typescript-eslint/parser',\n  plugins: ['react', '@typescript-eslint'],\n  parserOptions: {\n    ecmaFeatures: {\n      impliedStrict: true,\n      // \u8bbe\u7f6e\u652f\u6301 jsx \u5c31\u53ef\u4ee5\u4e86\n      jsx: true\n    },\n    ecmaVersion: 12,\n    sourceType: 'module'\n  }\n}\n")),Object(a.b)("h3",{id:"\u5904\u7406-vue"},"\u5904\u7406 vue"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"vue")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"template")," \u8bed\u6cd5\u4e5f\u662f\u7279\u6b8a\u7684\u8bed\u6cd5\uff0c\u6240\u4ee5\u9700\u8981\u7279\u6b8a\u7684\u89e3\u6790\u5668\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"vue")," \u5b98\u65b9\u7684 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/vuejs/vue-eslint-parser/blob/master/docs/ast.md"}),"vue-eslint-parser")),Object(a.b)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"parser")," \u5168\u5c40\u53ea\u6709\u4e00\u4e2a"),Object(a.b)("p",{parentName:"li"},"\u5f53\u81ea\u5b9a\u4e49\u7684 eslintrc \u6587\u4ef6\u914d\u7f6e\u4e86 parser\uff0c\u90a3\u4e48\u8fd9\u4e2a\u4f18\u5148\u7ea7\u662f\u6700\u9ad8\u7684\uff0c\u4f1a\u8986\u76d6\u6389 extends \u91cc\u9762\u914d\u7f6e\u7684 parser\uff0c\u4e5f\u5c31\u662f\u4e0b\u9762\u7684\u4f18\u5148\u7ea7\u987a\u5e8f\uff1a"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"eslintrc")," \u914d\u7f6e\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"parser")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"extends")," \u914d\u7f6e\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"parser")),Object(a.b)("li",{parentName:"ol"},"\u9ed8\u8ba4\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"parser"))))))}l.isMDXComponent=!0}}]);