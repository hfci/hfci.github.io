(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(7),c=(a(0),a(361)),i={id:"webpackCompileProcess",title:"webpack \u7f16\u8bd1\u6d41\u7a0b",hide_title:!0,sidebar_label:"webpack \u7f16\u8bd1\u6d41\u7a0b"},o={unversionedId:"enginee/webpack/webpackCompileProcess",id:"enginee/webpack/webpackCompileProcess",isDocsHomePage:!1,title:"webpack \u7f16\u8bd1\u6d41\u7a0b",description:"\u6d41\u7a0b\u7b80\u4ecb",source:"@site/docs/enginee/webpack/\u7f16\u8bd1\u6d41\u7a0b.md",slug:"/enginee/webpack/webpackCompileProcess",permalink:"/docs/enginee/webpack/webpackCompileProcess",version:"current",sidebar_label:"webpack \u7f16\u8bd1\u6d41\u7a0b",sidebar:"babeldoc",previous:{title:"webpack \u5e38\u7528\u64cd\u4f5c",permalink:"/docs/enginee/webpack/webpackOftenFunctional"},next:{title:"tapable",permalink:"/docs/enginee/webpack/webpackTapable"}},p=[{value:"1\u3001compiler",id:"1\u3001compiler",children:[]},{value:"2\u3001compilation",id:"2\u3001compilation",children:[]},{value:"3\u3001NormalModuleFactory",id:"3\u3001normalmodulefactory",children:[]},{value:"4\u3001ContextModuleFactory",id:"4\u3001contextmodulefactory",children:[]},{value:"5\u3001JavascriptParser",id:"5\u3001javascriptparser",children:[]}],b={rightToc:p};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u6d41\u7a0b\u7b80\u4ecb"},"\u6d41\u7a0b\u7b80\u4ecb"),Object(c.b)("p",null,"\u7f16\u8bd1\u4e3b\u6d41\u7a0b\u4e3b\u8981\u7ecf\u5386\u56db\u4e2a\u9636\u6bb5\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"initial options"),"\uff1a\u521d\u59cb\u5316\u9636\u6bb5\uff0c\u4e3b\u8981\u662f\u521d\u59cb\u5316\u914d\u7f6e\u9879\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"loader"),"\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"plugins")," \u7b49\u7b49\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"make module"),"\uff1a\u521d\u59cb\u5316\u5b8c\u4e4b\u540e\uff0c\u5c31\u662f\u7f16\u8bd1\u9636\u6bb5\uff0c\u7f16\u8bd1\u6e90\u4ee3\u7801\u4e5f\u5c31\u662f ",Object(c.b)("inlineCode",{parentName:"li"},"module"),"\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"seal chunk"),"\uff1a\u7f16\u8bd1\u5b8c\u6210\u4e4b\u540e\uff0c\u4e5f\u5c31\u662f\u6253\u5305\u4f18\u5316\u9636\u6bb5\uff0c\u4e3b\u8981\u5c31\u662f\u6574\u5408 ",Object(c.b)("inlineCode",{parentName:"li"},"module")," \u653e\u5230\u5185\u5b58\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"chunk")," \u4e2d\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"emit assets"),"\uff1a\u6253\u5305\u5b8c\u6210\u4e4b\u540e\uff0c\u9700\u8981\u6574\u5408\u6700\u540e\u5b58\u50a8\u5230\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f ",Object(c.b)("inlineCode",{parentName:"li"},"asset"),"\u3002")),Object(c.b)("p",null,"\u5bf9\u5e94\u7684\u6d41\u7a0b\u56fe\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{alt:"webpack-compile-process",src:a(532).default})),Object(c.b)("p",null,"\u5e38\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"hooks")," \u5bf9\u5e94\u7684\u9636\u6bb5\uff1a"),Object(c.b)("p",null,Object(c.b)("img",{alt:"webpack-process",src:a(533).default})),Object(c.b)("h1",{id:"\u6838\u5fc3\u5bf9\u8c61\u4ecb\u7ecd"},"\u6838\u5fc3\u5bf9\u8c61\u4ecb\u7ecd"),Object(c.b)("h3",{id:"1\u3001compiler"},"1\u3001compiler"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"compiler")," \u662f\u5728\u542f\u52a8\u7684\u65f6\u5019\u521b\u5efa\u7684\uff0c\u662f\u5168\u5c40\u552f\u4e00\u7684\uff0c\u53ef\u4ee5\u7406\u89e3\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"webpack \u5b9e\u4f8b"),"\uff0c\u4ee3\u8868\u4e86\u4ece\u542f\u52a8\u5230\u7ed3\u675f\u6574\u4e2a\u751f\u547d\u5468\u671f\uff0c\u53ef\u4ee5\u62ff\u5230\u5f88\u591a\u914d\u7f6e\u4fe1\u606f\uff1a",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/webpack/webpack/blob/main/lib/Compiler.js#L193"}),"\u66f4\u591a\u5c5e\u6027")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"options"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"loaders"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"plugins")," \u7b49\u7b49\u914d\u7f6e\u4fe1\u606f\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bfb\u53d6\u662f\u5426\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"watch")," \u6a21\u5f0f\uff1a ",Object(c.b)("inlineCode",{parentName:"p"},"compiler.watchMode"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5c31\u5f88\u6709\u7528\u4e86: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/webpack/webpack/blob/main/lib/index.js#L549"}),"\u66f4\u591a\u5c5e\u6027")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u7f16\u5199\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u4e0d\u7528\u5b89\u88c5\u5bfc\u5165 ",Object(c.b)("inlineCode",{parentName:"p"},"webpack"),"\uff0c\u53ef\u4ee5\u907f\u514d\u7248\u672c\u4e0d\u4e00\u81f4\u5bfc\u81f4\u7684\u95ee\u9898"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const webpack = compiler.webpack\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u5b9e\u4f8b\u4e0a\u9762\u672c\u8eab\u9644\u52a0\u4e86\u5f88\u591a\u6709\u7528\u7684\u5bf9\u8c61\uff0c\u907f\u514d\u518d\u53bb\u5b89\u88c5"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"/** webpack-sources */\nconst sources = webpack.sources\nconst { RowSource } = sources\n\nconst Template = webpack.Template\n")))))),Object(c.b)("h3",{id:"2\u3001compilation"},"2\u3001compilation"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"compilation")," \u4ee3\u8868\u4e86\u4e00\u6b21\u65b0\u7684\u7f16\u8bd1\uff0c\u5305\u542b\u4e86\u5f53\u524d\u7684\u6a21\u5757\u8d44\u6e90\u3001\u7f16\u8bd1\u751f\u6210\u8d44\u6e90\u3001\u53d8\u5316\u7684\u6587\u4ef6\u7b49\uff0c\u5f53 ",Object(c.b)("inlineCode",{parentName:"p"},"Webpack")," \u4ee5 ",Object(c.b)("inlineCode",{parentName:"p"},"watch")," \u6a21\u5f0f\u8fd0\u884c\u65f6\uff0c\u6bcf\u5f53\u68c0\u6d4b\u5230\u4e00\u4e2a\u6587\u4ef6\u53d8\u5316\uff0c\u4e00\u6b21\u65b0\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"Compilation")," \u5c06\u88ab\u521b\u5efa\u3002"),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u5f53 ",Object(c.b)("inlineCode",{parentName:"p"},"watch")," \u6a21\u5f0f\u4e0b\uff0c\u867d\u7136\u6bcf\u6b21\u6587\u4ef6\u53d1\u751f\u53d8\u52a8\u90fd\u4f1a\u91cd\u65b0\u751f\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"compilation"),"\uff0c\u4f46\u662f\u56e0\u4e3a\u4e4b\u524d\u7f16\u8bd1\u8fc7\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"module"),"\uff0c\u90fd\u5df2\u7ecf\u7f13\u5b58\u4e86\u8d77\u6765\uff0c\u4e0d\u9700\u8981\u7f16\u8bd1\u4e86\uff0c\u6bd4\u5982\uff1a"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// a.js\nconst name = 'file:a'\n\n// index.js\nimport name from './a.js'\n")),Object(c.b)("p",{parentName:"div"},"\u7b2c\u4e00\u6b21\u7f16\u8bd1\u7684\u65f6\u5019\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"compilation.hooks.buildModule(module)"),"\uff0c\u4f1a\u7ecf\u5386 ",Object(c.b)("inlineCode",{parentName:"p"},"a.js; index.js"),"\uff0c\u5f53 ",Object(c.b)("inlineCode",{parentName:"p"},"index.js")," \u53d1\u751f\u53d8\u52a8\u7684\u65f6\u5019\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"compilation.hooks.buildModule(module)"),"\uff0c\u53ea\u4f1a\u7ecf\u5386 ",Object(c.b)("inlineCode",{parentName:"p"},"index.js"),"\uff0c\u4f46\u662f\u6700\u7ec8\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"compilation")," \u4f1a\u5305\u542b\u6240\u6709\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"module")))),Object(c.b)("h3",{id:"3\u3001normalmodulefactory"},"3\u3001NormalModuleFactory"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"NormalModuleFactory")," \u4e3b\u8981\u662f\u901a\u8fc7\u5de5\u5382\u51fd\u6570\u5c06\u6240\u6709\u7684\u6e90\u7801\u6587\u4ef6\u53d8\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"Module")," \u5b9e\u4f8b\uff0c\u53ef\u4ee5\u7528\u6765\u7cbe\u786e\u5206\u6790\u6bcf\u4e00\u4e2a\u6587\u4ef6\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"compiler.hooks.normalModuleFactory.tap(pluginName, (factory) => {\n  factory.hooks.module.tap(pluginName, (module) => {\n  })\n})\n")),Object(c.b)("h3",{id:"4\u3001contextmodulefactory"},"4\u3001ContextModuleFactory"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ContextModuleFactory")," \u4e3b\u8981\u662f\u7528\u6765\u89e3\u6790 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://webpack.docschina.org/api/module-methods/#requirecontext"}),"require.context")," ",Object(c.b)("inlineCode",{parentName:"p"},"API")," \u4ea7\u751f\u7684\u8bf7\u6c42\u3002"),Object(c.b)("h3",{id:"5\u3001javascriptparser"},"5\u3001JavascriptParser"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"JavascriptParser")," \u7528\u4e8e\u89e3\u6790 ",Object(c.b)("inlineCode",{parentName:"p"},"webpack")," \u5904\u7406\u7684\u6bcf\u4e2a\u6a21\u5757\uff0c\u4e3b\u8981\u662f\u89e3\u6790\u7279\u5b9a\u8bed\u6cd5\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"compiler.hooks.normalModuleFactory.tap(pluginName, (factory) => {\n  factory.hooks.parser.for('javascript/auto').tap(pluginName, (parser) => {\n    /**\n     * \u89e3\u6790import\u8bed\u6cd5\n     * @example import _ from 'lodash'\n     */\n    parser.hooks.import.tap(pluginName, (statement, source) => {})\n  })\n})\n")))}l.isMDXComponent=!0},361:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,u=m["".concat(i,".").concat(d)]||m[d]||s[d]||c;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},532:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/webpack-process-4b37367a007623dd17d20560ec48aa67.png"},533:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/webpack-process-1f0fc5c3e50a4a17c0a8fc8d2766e194.jpeg"}}]);