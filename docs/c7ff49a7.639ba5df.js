(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(237)),o={id:"babelMacros",title:"babel macros",hide_title:!0,sidebar_label:"macros \u5b8f"},b={unversionedId:"enginee/babel/babelMacros",id:"enginee/babel/babelMacros",isDocsHomePage:!1,title:"babel macros",description:"\u5b8f\u7684\u91ca\u4e49",source:"@site/docs/enginee/babel/macros.md",slug:"/enginee/babel/babelMacros",permalink:"/docs/enginee/babel/babelMacros",version:"current",sidebar_label:"macros \u5b8f",sidebar:"babeldoc",previous:{title:"babel\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/enginee/babel/babelBase"},next:{title:"webpack loader",permalink:"/docs/enginee/webpack/webpackLoader"}},l=[{value:"\u5b8f\u7684\u91ca\u4e49",id:"\u5b8f\u7684\u91ca\u4e49",children:[]},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",children:[]},{value:"\u5e38\u7528\u63d2\u4ef6",id:"\u5e38\u7528\u63d2\u4ef6",children:[]},{value:"\u63a8\u8350",id:"\u63a8\u8350",children:[{value:"1. awesome-babel-macros",id:"1-awesome-babel-macros",children:[]}]}],i={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u5b8f\u7684\u91ca\u4e49"},"\u5b8f\u7684\u91ca\u4e49"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5b8f(Macro), \u662f\u4e00\u79cd\u6279\u5904\u7406\u7684\u79f0\u8c13\uff0c\u5b83\u6839\u636e\u4e00\u7cfb\u5217\u7684\u9884\u5b9a\u4e49\u89c4\u5219\u8f6c\u6362\u4e00\u5b9a\u7684\u6587\u672c\u6a21\u5f0f\u3002\u89e3\u91ca\u5668\u6216\u7f16\u8bd1\u5668\u5728\u9047\u5230\u5b8f\u65f6\u4f1a\u81ea\u52a8\u8fdb\u884c\u8fd9\u4e00\u6a21\u5f0f\u8f6c\u6362\uff0c\u8fd9\u4e2a\u8f6c\u6362\u8fc7\u7a0b\u88ab\u79f0\u4e3a\u201c\u5b8f\u5c55\u5f00(Macro Expansion)\u201d\u3002\u5bf9\u4e8e\u7f16\u8bd1\u8bed\u8a00\uff0c\u5b8f\u5c55\u5f00\u5728\u7f16\u8bd1\u65f6\u53d1\u751f\uff0c\u8fdb\u884c\u5b8f\u5c55\u5f00\u7684\u5de5\u5177\u5e38\u88ab\u79f0\u4e3a\u5b8f\u5c55\u5f00\u5668\u3002")),Object(c.b)("p",null,"\u7b80\u5355\u91ca\u4e49\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5b8f\u662f\u7528\u6765\u751f\u6210\u4ee3\u7801\u7684\u4ee3\u7801\uff0c\u4ed6\u6709\u80fd\u529b\u8fdb\u884c\u4e00\u4e9b\u53e5\u6cd5\u89e3\u6790\u548c\u4ee3\u7801\u8f6c\u6362\u3002")),Object(c.b)("h2",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"Macro")," \u4e0d\u9700\u8981\u914d\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},".babelrc"),"\u3002(\u6bd4\u5982",Object(c.b)("inlineCode",{parentName:"p"},"create-react-app"),"\u811a\u624b\u67b6\u4e0d\u63a8\u8350\u81ea\u5df1\u914d\u7f6e\u6784\u5efa\u811a\u672c\u7684\u5de5\u5177\u5c31\u53ea\u80fd\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"macros"),")")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u7531\u9690\u5f0f\u8f6c\u6362\u4e3a\u4e86\u663e\u5f0f\u3002"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="plugin\u7684\u5f62\u5f0f"',title:'"plugin\u7684\u5f62\u5f0f"'}),"// .babelrc\n{\n  \"plugins\": [\"preval\"]\n}\n\n// \u9690\u5f0f\u8c03\u7528\nconst greeting = preval`\n  const fs = require('fs')\n  module.exports = fs.readFileSync(require.resolve('./greeting.txt'), 'utf8')\n`\n")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="macros\u7684\u5f62\u5f0f',title:'"macros\u7684\u5f62\u5f0f'}),"// \u9996\u5148\u4f60\u8981\u663e\u5f0f\u5bfc\u5165\nimport preval from 'preval.macro'\n\n// \u663e\u793a\u8c03\u7528\nconst greeting = preval`\n  const fs = require('fs')\n  module.exports = fs.readFileSync(require.resolve('./greeting.txt'), 'utf8')\n`\n")))),Object(c.b)("h2",{id:"\u5e38\u7528\u63d2\u4ef6"},"\u5e38\u7528\u63d2\u4ef6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ridermansb/files.macro"}),"files.macro \u751f\u6210\u6307\u5b9a\u76ee\u5f55\u7684\u6587\u4ef6\u540d\u6570\u7ec4")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import files from \"files.macro\";\n\nconst allImages = files(\"./assets/images\");\nconst allImages = [ 'avatar.png', 'catalog.png' ]\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kentcdodds/codegen.macro"}),"codegen.macro \u751f\u6210\u8fd0\u884c\u65f6\u4ee3\u7801")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import codegen from 'codegen.macro'\n\ncodegen`module.exports = ['a', 'b', 'c'].map(l => 'export const ' + l + ' = ' + JSON.stringify(l)).join(';')`\n\n      \u2193 \u2193 \u2193 \u2193 \u2193 \u2193\n\nexport const a = \"a\";\nexport const b = \"b\";\nexport const c = \"c\";\n")))),Object(c.b)("p",null,"\u6bd4\u5982\uff0c\u6709\u4e9b ",Object(c.b)("inlineCode",{parentName:"p"},"js")," \u4ee3\u7801\u5728\u591a\u4e2a\u9879\u76ee\u4e2d\u516c\u7528\uff1a\u76f4\u63a5\u751f\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"\u6a21\u677f\u5185\u5bb9")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import codegen from 'codegen.macro'\n\ncodegen`module.exports = require('@kentcdodds/react-workshop-app/codegen')({\n  options: {concurrentMode: true}\n})`\n")),Object(c.b)("h2",{id:"\u63a8\u8350"},"\u63a8\u8350"),Object(c.b)("h3",{id:"1-awesome-babel-macros"},Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/jgierer12/awesome-babel-macros"}),"1. awesome-babel-macros")))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||c;return n?a.a.createElement(d,b(b({ref:t},i),{},{components:n})):a.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);