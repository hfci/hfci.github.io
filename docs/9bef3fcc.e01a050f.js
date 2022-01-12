(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{224:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),i=(t(0),t(361));const c={id:"webpackOftenPkg",title:"splitChunks",hide_title:!0,sidebar_label:"splitChunks"},b={unversionedId:"enginee/webpack/webpackOftenPkg",id:"enginee/webpack/webpackOftenPkg",isDocsHomePage:!1,title:"splitChunks",description:"\u7406\u89e3 module chunk bundle",source:"@site/docs/enginee/webpack/splitChunks.md",slug:"/enginee/webpack/webpackOftenPkg",permalink:"/docs/enginee/webpack/webpackOftenPkg",version:"current",sidebar_label:"splitChunks",sidebar:"babeldoc",previous:{title:"import()",permalink:"/docs/enginee/webpack/webpackImportantMethod"},next:{title:"webpack\u77e5\u8bc6\u70b9",permalink:"/docs/enginee/webpack/webpackFood"}},l=[{value:"\u7406\u89e3 module chunk bundle",id:"\u7406\u89e3-module-chunk-bundle",children:[{value:"module",id:"module",children:[]},{value:"chunk",id:"chunk",children:[]},{value:"bundle",id:"bundle",children:[]},{value:"\u7f16\u8bd1\u8fc7\u7a0b",id:"\u7f16\u8bd1\u8fc7\u7a0b",children:[]},{value:"cacheGroup.test",id:"cachegrouptest",children:[]},{value:"cacheGroup.chunks",id:"cachegroupchunks",children:[]},{value:"cacheGroup.name",id:"cachegroupname",children:[]},{value:"cacheGroup.minSize",id:"cachegroupminsize",children:[]},{value:"cacheGroup.maxSize",id:"cachegroupmaxsize",children:[]},{value:"cacheGroup.minChunks",id:"cachegroupminchunks",children:[]}]}],r={rightToc:l};function p({components:e,...n}){return Object(i.b)("wrapper",Object(a.a)({},r,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u7406\u89e3-module-chunk-bundle"},"\u7406\u89e3 module chunk bundle"),Object(i.b)("p",null,Object(i.b)("img",{alt:"webpack-module_chunk_bundle",src:t(642).default})),Object(i.b)("h3",{id:"module"},"module"),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"module")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"module"),": \u4e5f\u5c31\u662f\u5f00\u53d1\u7f16\u5199\u7684\u9879\u76ee\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u90fd\u662f\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u3002\u5305\u62ec\u4f9d\u8d56\u9879\u4ee5\u53ca\u4f9d\u8d56\u9879\u91cc\u9762\u7684\u6bcf\u4e2a\u4f9d\u8d56\u9879\u3002"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),"import Vue from 'vue'\nimport App from './app.vue'\nimport router from './router.js'\nimport store from './store.js'\n\nconst vue = new Vue({\n  router,\n  store,\n  render: (h) => h(App)\n})\n")),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"index.js"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"node_modules/vue/dist/vue.esm.js"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"app.vue"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"router.js"),"\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"store.js")," \u7b49\u90fd\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"module")),Object(i.b)("li",{parentName:"ul"},"\u4ee5\u53ca",Object(i.b)("inlineCode",{parentName:"li"},"babel polyfill"),"\u6ce8\u5165\u7684\u6587\u4ef6\u7b49\u90fd\u662f",Object(i.b)("inlineCode",{parentName:"li"},"module")),Object(i.b)("li",{parentName:"ul"},"\u4ee5\u53ca",Object(i.b)("inlineCode",{parentName:"li"},"app.vue router.js store.js"),"\u7b49\u6587\u4ef6\u91cc\u9762\u7684\u4f9d\u8d56\u9879\u90fd\u662f",Object(i.b)("inlineCode",{parentName:"li"},"module"))))),Object(i.b)("h3",{id:"chunk"},"chunk"),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"chunk")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"chunk"),": ",Object(i.b)("inlineCode",{parentName:"p"},"webpack"),"\u7528\u6765\u5206\u6790\u4f9d\u8d56\u7684\u5165\u53e3\uff0c\u4ea7\u751f",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\uff0c\u6709\u4e24\u79cd\u5f62\u5f0f\uff1a"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5165\u53e3\u6587\u4ef6",Object(i.b)("inlineCode",{parentName:"p"},"entry"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u624d\u7528\u5f02\u6b65\u65b9\u5f0f\u5bfc\u5165\u7684\u6587\u4ef6",Object(i.b)("inlineCode",{parentName:"p"},"import()")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import Vue from 'vue'\nimport App from './app.vue'\nimport router from './router.js'\nimport store from './store.js'\n\nimport(/* webpackChunkName: \"demo1\" */'./demo1')\n  .then(console.log)\nconst vue = new Vue({\n  router,\n  store,\n  render: (h) => h(App)\n})\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chunks"),"\u6709\u4e24\u4e2a\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"index"),"\uff0c ",Object(i.b)("inlineCode",{parentName:"li"},"demo1"))))))),Object(i.b)("h3",{id:"bundle"},"bundle"),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"bundle")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"bundle"),": \u4e5f\u5c31\u662f\u7ecf\u8fc7",Object(i.b)("inlineCode",{parentName:"p"},"webpack"),"\u7f16\u8bd1\u8fc7\u540e\u751f\u6210\u7684\u6700\u7ec8\u6587\u4ef6\u3002"))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"\u4e00\u4e2a\u9879\u76ee\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u662f\u56fa\u5b9a\u4e0d\u53d8\u7684\uff0c\u4e5f\u5c31\u662f\u8fd9\u4e2a\u5e94\u7528\u7684\u6240\u6709\u7684\u6a21\u5757\u6587\u4ef6\u3002\u4e0d\u4f1a\u56e0\u4e3a\u63d0\u53d6\u516c\u5171\u6a21\u5757\u6216\u8005",Object(i.b)("inlineCode",{parentName:"li"},"splitChunks"),"\u5207\u5272\u6a21\u5757\u800c\u5bfc\u81f4",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u53d8\u5316\u3002"),Object(i.b)("li",{parentName:"ol"},"\u4e00\u4e2a\u9879\u76ee\u4e2d",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u4e5f\u662f\u4e0d\u53d8\u7684\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u63d0\u53d6\u516c\u5171\u6a21\u5757\u6216\u8005",Object(i.b)("inlineCode",{parentName:"li"},"splitChunks"),"\u5207\u5272\u6a21\u5757\u800c\u5bfc\u81f4",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u53d8\u5316\u3002")))),Object(i.b)("h3",{id:"\u7f16\u8bd1\u8fc7\u7a0b"},"\u7f16\u8bd1\u8fc7\u7a0b"),Object(i.b)("p",null,Object(i.b)("img",{alt:"splitChunks_cacheGroups_prosess",src:t(643).default})),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5207\u5272\u662f\u57fa\u4e8e\u7f16\u5199\u7684\u6587\u4ef6\u7684\u4e5f\u5c31\u662f",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#module"}),"module"),"\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u4f1a\u6309\u7167",Object(i.b)("inlineCode",{parentName:"p"},"cacheGroup"),"\u7684\u4f18\u5148\u7ea7\u5148\u8fdb\u5165\u5230",Object(i.b)("inlineCode",{parentName:"p"},"cacheGroup.test"),"\u6821\u9a8c\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"true"),"\uff1a\u7b49\u5f85\u6240\u6709",Object(i.b)("inlineCode",{parentName:"li"},"cacheGroup.test"),"\u6821\u9a8c\u5b8c\u6bd5\uff0c\u8fdb\u5165\u5230",Object(i.b)("inlineCode",{parentName:"li"},"cacheGroup.chuns"),"\u6821\u9a8c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"false"),"\uff1a\u9000\u51fa\u5f53\u524d",Object(i.b)("inlineCode",{parentName:"li"},"cacheGroup"),"\uff0c\u4e5f\u5c31\u662f\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u4e0d\u53c2\u4e0e\u5230\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"group"),"\u7684\u5207\u5272\u3002"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u8fdb\u5165\u5230",Object(i.b)("inlineCode",{parentName:"p"},"cacheGroup.chunks"),"\u6821\u9a8c\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"true"),"\uff1a\u7b49\u5f85\u6240\u6709",Object(i.b)("inlineCode",{parentName:"p"},"cacheGroup.chunks"),"\u6821\u9a8c\u5b8c\u6bd5\uff0c\u8fdb\u5165\u5230",Object(i.b)("inlineCode",{parentName:"p"},"cacheGroup.name"),"\u6821\u9a8c")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"false"),"\uff1a\u9000\u51fa\u5f53\u524d",Object(i.b)("inlineCode",{parentName:"p"},"cacheGroup"),"\uff0c\u4e5f\u5c31\u662f\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u4e0d\u53c2\u4e0e\u5230\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"group"),"\u7684\u5207\u5272\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879"),"\uff1a\u53ea\u6709\u5f53\u524d",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u5c5e\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\u624d\u4f1a\u8fdb\u5165\u5230",Object(i.b)("inlineCode",{parentName:"p"},"chunks"),"\u6821\u9a8c\uff0c\u4e0d\u5c5e\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\uff0c\u90a3\u5c31\u662f",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u6240\u5728\u7684",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\u4e4b\u524d\u6821\u9a8c\u7684\u8fd4\u56de\u503c\u6765\u51b3\u5b9a\u662f\u5426\u9000\u51fa\u5f53\u524d",Object(i.b)("inlineCode",{parentName:"p"},"cacheGroup"),"\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5982\u679c",Object(i.b)("inlineCode",{parentName:"p"},"chunks"),"\u662f\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u4f1a\u8fdb\u5165\u5230\u8fd9\u4e2a\u65b9\u6cd5\u5185\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),"import Vue from 'vue'\nimport App from './app.vue'\nimport router from './router.js'\nimport store from './store.js'\n\nconst vue = new Vue({\n  router,\n  store,\n  render: (h) => h(App)\n})\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"index.js"),"\u662f",Object(i.b)("inlineCode",{parentName:"li"},"entry"),"\uff0c\u8fd9\u4e2a\u6587\u4ef6\u4f1a\u8fdb\u5165\u5230",Object(i.b)("inlineCode",{parentName:"li"},"cacheGroup.chunks"),"\u91cc\u9762\u6821\u9a8c\u3002",Object(i.b)("inlineCode",{parentName:"li"},"app.vue"),"\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u4e0d\u5c5e\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\uff0c\u4f46\u662f\u4f1a\u6839\u636e\u524d\u9762",Object(i.b)("inlineCode",{parentName:"li"},"index.js"),"\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u7684\u6821\u9a8c\u503c\u6765\u51b3\u5b9a\u662f\u5426\u8fdb\u5165\u5230",Object(i.b)("inlineCode",{parentName:"li"},"cacheGroup.name"),"\u4e2d\u8fdb\u884c\u4e0b\u4e00\u6b65\u3002")))))))),Object(i.b)("h3",{id:"cachegrouptest"},"cacheGroup.test"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"function (module, chunk) => boolean; RegExp; string")),Object(i.b)("p",null,"\u63a7\u5236\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"group"),"\u9009\u62e9\u7684",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u3002"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RegExp"),"\u5339\u914d\u7684\u662f",Object(i.b)("inlineCode",{parentName:"li"},"module.resource"),"\u4e5f\u5c31\u662f\u6e90\u6587\u4ef6\u7684\u8def\u5f84\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),"\u5339\u914d\u7684\u662f",Object(i.b)("inlineCode",{parentName:"li"},"chunk.name"),"\uff0c\u5982\u679c\u5b58\u5728\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\uff0c\u90a3\u4e48\u5c31\u662f\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u4e0b\u7684\u6240\u6709",Object(i.b)("inlineCode",{parentName:"li"},"bundle"),"\u3002")))),Object(i.b)("h3",{id:"cachegroupchunks"},"cacheGroup.chunks"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"all | initial | async | function (chunk)")),Object(i.b)("p",null,"\u63a7\u5236\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"group"),"\u9009\u62e9\u7684",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\uff0c\u4e5f\u5c31\u662f\u547d\u4e2d\u7684",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\u4e0b\u7684\u6240\u6709",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u3002"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u8fd9\u4e2a\u914d\u7f6e\u9879\u662f\u57fa\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u5e76\u4e0d\u662f\u57fa\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u7684\uff0c\u5982\u679c\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u4e0d\u5c5e\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\uff0c\u90a3\u5c31\u662f\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u6240\u5728\u7684",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u7684\u6821\u9a8c\u503c\u3002"),Object(i.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u662f",Object(i.b)("inlineCode",{parentName:"li"},"cacheGroup.test"),"\u7684",Object(i.b)("inlineCode",{parentName:"li"},"string"),"\u5339\u914d\u6a21\u5f0f\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5f53\u524d",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u7684",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u5982\u679c\u4e0d\u7b26\u5408\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"chunks"),"\uff0c\u90a3\u4e48\u4e5f\u662f\u76f4\u63a5\u9000\u51fa\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"cacheGroup"))))),Object(i.b)("h3",{id:"cachegroupname"},"cacheGroup.name"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"boolean = false | function (module, chunks, cacheGroupKey) => string | string")),Object(i.b)("p",null,"\u7528\u4e8e\u63a7\u5236\u5207\u5272\u5757\u7684\u540d\u5b57\u3002"),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u4e0d\u540c\u7684",Object(i.b)("inlineCode",{parentName:"h5"},"module"),"\u5f53",Object(i.b)("inlineCode",{parentName:"h5"},"name"),"\u76f8\u540c\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u6253\u5305\u5230\u4e00\u8d77")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"boolean")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ea\u6709",Object(i.b)("inlineCode",{parentName:"li"},"false"),"\u6ca1\u6709",Object(i.b)("inlineCode",{parentName:"li"},"true"),"\u7684\u9009\u9879\uff0c\u56e0\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"false"),"\u8868\u793a\u4e0d\u8bbe\u7f6e\u540d\u5b57\u4e5f\u5c31\u662f\u548c",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u4fdd\u6301\u540c\u6837\u7684\u540d\u5b57\uff0c\u8fd9\u6837\u5c31\u662f\u4e0d\u5207\u5272",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\uff0c\u5168\u90e8\u6253\u5305\u5230",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u4e2d\u53bb\u3002"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"li"},"true"),"\u6ca1\u6709\u4efb\u4f55\u8bed\u4e49\uff0c\u4f46\u662f\u4e5f\u4f1a\u8d77\u4f5c\u7528\uff0c\u6548\u679c\u548c",Object(i.b)("inlineCode",{parentName:"li"},"false"),"\u4e00\u6837\u3002"),Object(i.b)("li",{parentName:"ul"},"\u4e5f\u5c31\u662f\u53ea\u8981\u662f",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),"\u7c7b\u578b\u7684\u503c\uff0c\u6548\u679c\u90fd\u4e00\u81f4\uff1a\u5c31\u662f\u4e0d\u5207\u5272\u6a21\u5757\uff0c\u6253\u5305\u5230",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u4e2d\u3002"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"function (module, chunks, cacheGroupKey) => string"),"\uff1a\u5f53",Object(i.b)("inlineCode",{parentName:"p"},"name"),"\u7684\u503c\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"function"),"\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u8ba4\u4e3a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u53ea\u6709\u4e24\u79cd\u7c7b\u578b",Object(i.b)("inlineCode",{parentName:"p"},"undefined | string"),"\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"false"),": \u5f53\u8fd4\u56de\u503c\u662f",Object(i.b)("inlineCode",{parentName:"p"},"false"),"\u7684\u65f6\u5019\uff0c\u4f1a\u5f53\u6210",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u4e5f\u5c31\u662f\u6ca1\u6709\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"p"},"name"),"\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\uff1a"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6309\u7167\u8d44\u6e90",Object(i.b)("inlineCode",{parentName:"li"},"id"),"\u6765\u8bbe\u7f6e\u6253\u5305\u8d44\u6e90\u7684\u6587\u4ef6\u540d\u79f0\u5982\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"1.js")),Object(i.b)("li",{parentName:"ul"},"\u867d\u7136\u6ca1\u6709\u8bbe\u7f6e\u540d\u5b57\u4f46\u662f\u8d44\u6e90\u8fd8\u662f\u4f1a\u6253\u5305\u5230\u4e00\u4e2a\u6587\u4ef6\u5982",Object(i.b)("inlineCode",{parentName:"li"},"1.js")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"true"),": \u5f53\u8fd4\u56de\u503c\u662f",Object(i.b)("inlineCode",{parentName:"p"},"true"),"\u7684\u65f6\u5019\uff0c\u4f1a\u5f53\u6210\u5b57\u7b26\u4e32",Object(i.b)("inlineCode",{parentName:"p"},'"true"'),"\u6765\u5904\u7406\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6253\u5305\u8d44\u6e90\u7684\u6587\u4ef6\u540d\u79f0\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"true.js")),Object(i.b)("li",{parentName:"ul"},"\u8d44\u6e90\u8fd8\u662f\u4f1a\u6253\u5305\u5230\u4e00\u4e2a\u6587\u4ef6",Object(i.b)("inlineCode",{parentName:"li"},"true.js")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"string"),": \u53ef\u4ee5\u6839\u636e",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u7684\u8def\u5f84\u4ee5\u53ca\u6240\u5c5e",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\u7684\u540d\u79f0\u6765\u8fd4\u56de\u4e0d\u540c\u7684\u540d\u5b57\uff0c\u8fd9\u6837\u5c31\u4f1a\u5207\u5272\u51fa\u591a\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"bundle"),"\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  commons: {\n    test: /[\\\\/]node_modules[\\\\/]/,\n    // cacheGroupKey here is `commons` as the key of the cacheGroup\n    name(module, chunks, cacheGroupKey) {\n      const moduleFileName = module.identifier().split('/').reduceRight(item => item);\n      const allChunksNames = chunks.map((item) => item.name).join('~');\n      return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;\n    }\n  }\n}\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"string"),": \u6240\u6709\u7684",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u90fd\u4f1a\u6253\u5305\u5230\u8fd9\u4e2a\u5305\u4e2d\u3002"))))),Object(i.b)("h3",{id:"cachegroupminsize"},"cacheGroup.minSize"),Object(i.b)("p",null,"\u7ea6\u5b9a\u201d\u751f\u6210\u5757\u201c\u7684\u6700\u5c0f\u5927\u5c0f\u3002\u5355\u4f4d",Object(i.b)("inlineCode",{parentName:"p"},"byte; 1kb = 1024byte")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5f53\u5207\u5272\u51fa\u6765\u7684\u5757\uff0c\u6ca1\u6709\u8fbe\u5230\u8fd9\u4e2a\u6700\u5c0f\u5927\u5c0f\uff0c\u90a3\u4e48\u5c06\u4e0d\u4f1a\u88ab\u5207\u5272\u51fa\u6765\u3002"))),Object(i.b)("h3",{id:"cachegroupmaxsize"},"cacheGroup.maxSize"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"webpack"),"\u5c1d\u8bd5\u5c06\u5927\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"maxSize"),"\u5927\u5c0f\u7684",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\uff0c\u8fdb\u4e00\u6b65\u7684\u5207\u5272\uff0c\u5207\u5272\u51fa\u6765\u7684\u90e8\u5206\u4e0d\u80fd\u5c0f\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"minSize"),"\u3002"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),Object(i.b)("inlineCode",{parentName:"h5"},"maxSize"),"\u7684\u4f18\u5148\u7ea7\u6bd4\u8f83\u4f4e")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5f53",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u5373\u4f7f\u5927\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"maxSize"),"\uff0c\u4f46\u662f\u5df2\u7ecf\u4e0d\u80fd\u5207\u5272\u4e86\uff0c\u6bd4\u5982\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u5185\u90e8\u7684\u4ee3\u7801\u5168\u90e8\u662f\u5185\u8054\u7684\uff0c\u5e76\u6ca1\u6709",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\uff0c\u90a3\u5c31\u6ca1\u6709\u529e\u6cd5\u5207\u5272\u4e86\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5f53",Object(i.b)("inlineCode",{parentName:"li"},"chunk"),"\u80fd\u591f\u8fdb\u4e00\u6b65\u7684\u5207\u5272\uff0c\u4f46\u662f\u91cc\u9762\u7684",Object(i.b)("inlineCode",{parentName:"li"},"module"),"\u90fd\u5927\u4e8e",Object(i.b)("inlineCode",{parentName:"li"},"minSize"),"\uff0c\u90a3\u4e48\u4e5f\u4e0d\u4f1a\u8fdb\u4e00\u6b65\u7684\u5207\u5272\u3002"),Object(i.b)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"minSize")," > ",Object(i.b)("inlineCode",{parentName:"li"},"maxSize")," > ",Object(i.b)("inlineCode",{parentName:"li"},"maxInitialRequest/maxAsyncRequests"))))),Object(i.b)("h3",{id:"cachegroupminchunks"},"cacheGroup.minChunks"),Object(i.b)("p",null,"\u5728\u88ab\u5207\u5272\u4e4b\u524d\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"module"),"\u6700\u5c11\u8981\u88ab\u4e0d\u540c",Object(i.b)("inlineCode",{parentName:"p"},"chunk"),"\u5171\u4eab\u7684\u6b21\u6570\u3002"))}p.isMDXComponent=!0},361:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),o=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},j=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=o(t),j=a,u=m["".concat(b,".").concat(j)]||m[j]||d[j]||c;return t?i.a.createElement(u,l(l({ref:n},p),{},{components:t})):i.a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,b=new Array(c);b[0]=j;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var p=2;p<c;p++)b[p]=t[p];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},642:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/webpack-module_chunk_bundle-4d1196be100fd7e24bb3f52fff182259.jpeg"},643:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/splitChunks_cacheGroups_presess-95d4695c872d1fde49b61022db671dc9.gif"}}]);