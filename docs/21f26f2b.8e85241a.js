(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(7),c=(t(0),t(361)),o={id:"DSLPEGJS",title:"DSL - PEG.js",hide_title:!0,sidebar_label:"PEG.js"},i={unversionedId:"enginee/DSL/DSLPEGJS",id:"enginee/DSL/DSLPEGJS",isDocsHomePage:!1,title:"DSL - PEG.js",description:"\u8bed\u6cd5",source:"@site/docs/enginee/DSL/pegjs.md",slug:"/enginee/DSL/DSLPEGJS",permalink:"/docs/enginee/DSL/DSLPEGJS",version:"current",sidebar_label:"PEG.js",sidebar:"babeldoc",previous:{title:"DSL - \u5b9e\u8df5",permalink:"/docs/enginee/DSL/DSLBase"},next:{title:"json\u6587\u4ef6\u667a\u80fd\u611f\u77e5 - vscode",permalink:"/docs/enginee/jsonschema/jsonschemaVscodeIntellisense"}},b=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[{value:"\u201dliteral\u201c",id:"literal",children:[]},{value:"<code>.</code>",id:"",children:[]},{value:"characters",id:"characters",children:[]},{value:"expression <code>*</code>",id:"expression-",children:[]},{value:"expression <code>+</code>",id:"expression--1",children:[]},{value:"expression <code>?</code>",id:"expression--2",children:[]},{value:"<code>&amp;</code> expression (\u5f85\u7406\u89e3)",id:"-expression-\u5f85\u7406\u89e3",children:[]},{value:"<code>!</code> expression (\u5f85\u7406\u89e3)",id:"-expression-\u5f85\u7406\u89e3-1",children:[]}]}],l={rightToc:b};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),Object(c.b)("h3",{id:"literal"},"\u201dliteral\u201c"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7cbe\u786e\u5339\u914d\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u7d27\u8ddf",Object(c.b)("inlineCode",{parentName:"p"},"i"),"\u8868\u793a\u4e0d\u533a\u5206\u5927\u5c0f\u5199")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const grammar = `Start = 'a'i`\nconst grammar = `Start = ('a' / 'b')i`\n")),Object(c.b)("h3",{id:""},Object(c.b)("inlineCode",{parentName:"h3"},".")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},".")," \u5339\u914d\u4efb\u610f\u5b57\u7b26\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u5b57\u7b26\u4e32\u8fd4\u56de")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const grammar = `Start = .*`\nparse('abc') // [ 'a', 'b', 'c' ]\n")),Object(c.b)("h3",{id:"characters"},"[characters]"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5339\u914d\u96c6\u5408\u4e2d\u7684\u4e00\u4e2a\u5b57\u7b26\u5e76\u5c06\u5176\u4f5c\u4e3a\u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u7d27\u8ddf",Object(c.b)("inlineCode",{parentName:"p"},"i"),"\u8868\u793a\u4e0d\u533a\u5206\u5927\u5c0f\u5199")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5b57\u7b26\u5217\u8868\u8fd8\u53ef\u4ee5\u5305\u542b\u8303\u56f4\uff08\u4f8b\u5982",Object(c.b)("inlineCode",{parentName:"li"},"[a-z]")," \u8868\u793a\u201c\u6240\u6709\u5c0f\u5199\u5b57\u6bcd\u201d"),Object(c.b)("li",{parentName:"ul"},"\u524d\u9762\u7684\u5b57\u7b26",Object(c.b)("inlineCode",{parentName:"li"},"^")," \u53cd\u8f6c\u5339\u914d\u7684\u96c6\u5408\uff08\u4f8b\u5982\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"[^a-z]"),"\u8868\u793a\u201c\u9664\u5c0f\u5199\u5b57\u6bcd\u4e4b\u5916\u7684\u6240\u6709\u5b57\u7b26\u201d\uff09")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const grammar = `Start = [abc]i+`\nparse('abcA') // [ 'a', 'b', 'c', 'A' ]\n")),Object(c.b)("h3",{id:"expression-"},"expression ",Object(c.b)("inlineCode",{parentName:"h3"},"*")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5339\u914d\u8868\u8fbe\u5f0f\u7684\u96f6\u6b21\u6216\u591a\u6b21\u91cd\u590d\uff0c\u5e76\u5728\u6570\u7ec4\u4e2d\u8fd4\u56de\u5b83\u4eec\u7684\u5339\u914d\u7ed3\u679c\u3002\u5339\u914d\u662f\u8d2a\u5a6a\u7684\uff0c\u5373\u89e3\u6790\u5668\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u591a\u5730\u5339\u914d\u8868\u8fbe\u5f0f\u3002\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0d\u540c\uff0c\u6ca1\u6709\u56de\u6eaf")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const grammar = `Start = 'a'i*`\nparse('aaAaA') // [ 'a', 'a', 'A', 'a', 'A' ]\n")),Object(c.b)("h3",{id:"expression--1"},"expression ",Object(c.b)("inlineCode",{parentName:"h3"},"+")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u91cd\u590d\u7684\u8868\u8fbe\u5f0f\uff0c\u5e76\u5728\u4e00\u4e2a\u6570\u7ec4\u4e2d\u8fd4\u56de\u5b83\u4eec\u7684\u5339\u914d\u7ed3\u679c\u3002\u5339\u914d\u662f\u8d2a\u5a6a\u7684\uff0c\u5373\u89e3\u6790\u5668\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u591a\u5730\u5339\u914d\u8868\u8fbe\u5f0f\u3002\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0d\u540c\uff0c\u6ca1\u6709\u56de\u6eaf\u3002")),Object(c.b)("h3",{id:"expression--2"},"expression ",Object(c.b)("inlineCode",{parentName:"h3"},"?")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5c1d\u8bd5\u5339\u914d\u8868\u8fbe\u5f0f\u3002\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5219\u8fd4\u56de\u5176\u5339\u914d\u7ed3\u679c\uff0c\u5426\u5219\u8fd4\u56de null\u3002\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0d\u540c\uff0c\u6ca1\u6709\u56de\u6eaf\u3002")),Object(c.b)("h3",{id:"-expression-\u5f85\u7406\u89e3"},Object(c.b)("inlineCode",{parentName:"h3"},"&")," expression (\u5f85\u7406\u89e3)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"& expression")," \u5c1d\u8bd5\u5339\u914d\u8868\u8fbe\u5f0f\u3002\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5c31\u8fd4\u56de undefined\uff0c\u4e0d\u6d88\u8017\u4efb\u4f55\u8f93\u5165\uff0c\u5426\u5219\u8ba4\u4e3a\u5339\u914d\u5931\u8d25\u3002")),Object(c.b)("h3",{id:"-expression-\u5f85\u7406\u89e3-1"},Object(c.b)("inlineCode",{parentName:"h3"},"!")," expression (\u5f85\u7406\u89e3)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5c1d\u8bd5\u5339\u914d\u8868\u8fbe\u5f0f\u3002\u5982\u679c\u5339\u914d\u4e0d\u6210\u529f\uff0c\u5c31\u8fd4\u56de undefined\uff0c\u4e0d\u6d88\u8017\u4efb\u4f55\u8f93\u5165\uff0c\u5426\u5219\u8ba4\u4e3a\u5339\u914d\u5931\u8d25\u3002")))}p.isMDXComponent=!0},361:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,j=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return t?a.a.createElement(j,i(i({ref:n},l),{},{components:t})):a.a.createElement(j,i({ref:n},l))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);