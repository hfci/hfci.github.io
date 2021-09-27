(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),o=(n(0),n(274)),i={id:"webpackModuleFederation",title:"Module federation",hide_title:!0,sidebar_label:"Module federation"},p={unversionedId:"enginee/webpack/webpackModuleFederation",id:"enginee/webpack/webpackModuleFederation",isDocsHomePage:!1,title:"Module federation",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/docs/enginee/webpack/\u6a21\u5757\u8054\u5408.md",slug:"/enginee/webpack/webpackModuleFederation",permalink:"/docs/enginee/webpack/webpackModuleFederation",version:"current",sidebar_label:"Module federation",sidebar:"babeldoc",previous:{title:"tapable",permalink:"/docs/enginee/webpack/webpackTapable"},next:{title:"Asset Module",permalink:"/docs/enginee/webpack/webpackAssetModule"}},l=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[]},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[]},{value:"remotes",id:"remotes",children:[{value:"webpack \u81ea\u52a8\u6dfb\u52a0\uff0c\u91c7\u53d6\u52a8\u6001\u6ce8\u5165\u7684\u65b9\u5f0f\u3002",id:"webpack-\u81ea\u52a8\u6dfb\u52a0\uff0c\u91c7\u53d6\u52a8\u6001\u6ce8\u5165\u7684\u65b9\u5f0f\u3002",children:[]},{value:"\u624b\u52a8\u6dfb\u52a0",id:"\u624b\u52a8\u6dfb\u52a0",children:[]}]},{value:"\u89e3\u51b3 remoteEntry.js \u7f13\u5b58\u95ee\u9898",id:"\u89e3\u51b3-remoteentryjs-\u7f13\u5b58\u95ee\u9898",children:[{value:"\u7f16\u8bd1\u65f6\u4ee3\u7801\u66ff\u6362\u6210\u8fd0\u884c\u65f6\u4ee3\u7801",id:"\u7f16\u8bd1\u65f6\u4ee3\u7801\u66ff\u6362\u6210\u8fd0\u884c\u65f6\u4ee3\u7801",children:[]}]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Host"),"\uff1a\u6d88\u8d39\u5176\u4ed6 ",Object(o.b)("inlineCode",{parentName:"li"},"Remote")," \u7684\u5e94\u7528"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Remote"),"\uff1a\u88ab ",Object(o.b)("inlineCode",{parentName:"li"},"Host")," \u6d88\u8d39\u7684\u5e94\u7528")),Object(o.b)("h3",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"new ModuleFederationPlugin({\n  name: \"app-1\",\n  library: { type: \"var\", name: \"app_1\" },\n  filename: \"remoteEntry.js\",\n  remotes: {\n    app_02: 'app_02',\n    app_03: 'app_03',\n  },\n  exposes: {\n    './antd': './src/antd',\n    './button': './src/button',\n  },\n  shared: ['react', 'react-dom'],\n})\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"name"),"\uff0c\u5fc5\u987b\uff0c\u552f\u4e00 ID\uff0c\u4f5c\u4e3a\u8f93\u51fa\u7684\u6a21\u5757\u540d\uff0c\u4f7f\u7528\u7684\u65f6\u901a\u8fc7 ${name}/${expose} \u7684\u65b9\u5f0f\u4f7f\u7528\uff1b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"library"),"\uff0c\u5fc5\u987b\uff0c\u5176\u4e2d\u8fd9\u91cc\u7684 name \u4e3a\u4f5c\u4e3a umd \u7684 name\uff1b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"remotes"),"\uff0c\u53ef\u9009\uff0c\u8868\u793a\u4f5c\u4e3a Host \u65f6\uff0c\u53bb\u6d88\u8d39\u54ea\u4e9b Remote\uff1b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"exposes"),"\uff0c\u53ef\u9009\uff0c\u8868\u793a\u4f5c\u4e3a Remote \u65f6\uff0cexport \u54ea\u4e9b\u5c5e\u6027\u88ab\u6d88\u8d39\uff1b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"shared"),"\uff0c\u53ef\u9009\uff0c\u4f18\u5148\u7528 Host \u7684\u4f9d\u8d56\uff0c\u5982\u679c Host \u6ca1\u6709\uff0c\u518d\u7528\u81ea\u5df1\u7684\uff08",Object(o.b)("inlineCode",{parentName:"p"},"\u5bf9\u4e8eremote\u6765\u8bf4"),"\uff09\uff1b"))),Object(o.b)("h2",{id:"remotes"},"remotes"),Object(o.b)("p",null,"\u5b9a\u4e49\u7528\u4e8e\u6d88\u8d39\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"remote")," \u7aef\u3002\u6709\u591a\u79cd\u65b9\u5f0f\u5b9a\u4e49\u3002"),Object(o.b)("h3",{id:"webpack-\u81ea\u52a8\u6dfb\u52a0\uff0c\u91c7\u53d6\u52a8\u6001\u6ce8\u5165\u7684\u65b9\u5f0f\u3002"},"webpack \u81ea\u52a8\u6dfb\u52a0\uff0c\u91c7\u53d6\u52a8\u6001\u6ce8\u5165\u7684\u65b9\u5f0f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'new ModuleFederationPlugin({\n  name: "app_one_remote",\n  remotes: {\n    app_two_remote: "app_two_remote@http://localhost:5500/dist/remoteEntry.js"\n  }\n})\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'{6} title="index.js\u7f16\u8bd1\u8fc7\u540e"',"{6}":!0,title:'"index.js\u7f16\u8bd1\u8fc7\u540e"'}),'(e,t,r)=>{\n    var p = new Error;\n    e.exports = new Promise(((e,t)=>{\n        if ("undefined" != typeof app_two_remote)\n            return e();\n        r.l("http://localhost:5500/dist/remoteEntry.js", (r=>{\n            if ("undefined" != typeof app_two_remote)\n                return e();\n            var a = r && ("load" === r.type ? "missing" : r.type)\n              , o = r && r.target && r.target.src;\n            p.message = "Loading script failed.\\n(" + a + ": " + o + ")",\n            p.name = "ScriptExternalLoadError",\n            p.type = a,\n            p.request = o,\n            t(p)\n        }\n        ), "app_two_remote")\n    }\n    )).then((()=>app_two_remote))\n}\n')),Object(o.b)("h3",{id:"\u624b\u52a8\u6dfb\u52a0"},"\u624b\u52a8\u6dfb\u52a0"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'new ModuleFederationPlugin({\n  name: "app_one_remote",\n  remotes: {\n    app_two_remote: "app_two_remote"\n  }\n})\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'{6} title="index.html"',"{6}":!0,title:'"index.html"'}),'<!DOCTYPE html>\n<html lang="en">\n  <head></head>\n  <body>\n    <div id="root"></div>\n    <script src="http://localhost:5500/dist/remoteEntry.js"><\/script>\n  </body>\n</html>\n\n')),Object(o.b)("h2",{id:"\u89e3\u51b3-remoteentryjs-\u7f13\u5b58\u95ee\u9898"},"\u89e3\u51b3 remoteEntry.js \u7f13\u5b58\u95ee\u9898"),Object(o.b)("h3",{id:"\u7f16\u8bd1\u65f6\u4ee3\u7801\u66ff\u6362\u6210\u8fd0\u884c\u65f6\u4ee3\u7801"},"\u7f16\u8bd1\u65f6\u4ee3\u7801\u66ff\u6362\u6210\u8fd0\u884c\u65f6\u4ee3\u7801"),Object(o.b)("p",null,"\u793e\u533a\u5199\u4e86\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"webpack plugin"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/matthewma7/915b28846ad99d582e6b4ddea6dfc309"}),"ExternalTemplateRemotesPlugin.js"),"\uff0c\u53ef\u4ee5\u66ff\u6362\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"plugins: [\n  new ModuleFederationPlugin({\n      name: 'my-app',\n      remotes: {\n          'my-remote-1': 'my-remote-1@[window.remote-1-domain]/remoteEntry.js?[getRandomString()]',\n          ...\n      },\n      shared: {...}\n  }),\n  new ExternalTemplateRemotesPlugin(), //no parameter,\n  ...otherPlugins,\n]\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'{6} title="\u7f16\u8bd1\u8fc7\u540e"',"{6}":!0,title:'"\u7f16\u8bd1\u8fc7\u540e"'}),"\"use strict\";\n\nvar error = new Error();\nmodule.exports = new Promise((resolve, reject) => {\n    if(typeof app_two_remote !== \"undefined\") return resolve();\n    __webpack_require__.l(window.app_two_remote_domain + \"/remoteEntry.js?\" + getRandomString(), (event) => {\n        if(typeof app_two_remote !== \"undefined\") return resolve();\n        var errorType = event && (event.type === 'load' ? 'missing' : event.type);\n        var realSrc = event && event.target && event.target.src;\n        error.message = 'Loading script failed.\\n(' + errorType + ': ' + realSrc + ')';\n        error.name = 'ScriptExternalLoadError';\n        error.type = errorType;\n        error.request = realSrc;\n        reject(error);\n    }, \"app_two_remote\");\n}).then(() => app_two_remote);\n")),Object(o.b)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"exposes"),"\u6a21\u5757\uff0c\u9700\u8981\u5e26\u4e0a",Object(o.b)("inlineCode",{parentName:"p"},"'./moduleName'")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// \u9519\u8bef\nnew ModuleFederationPlugin({\n  exposes: {\n    antd: './src/antd',\n    button: './src/button',\n  }\n})\n\n// \u6b63\u786e\nnew ModuleFederationPlugin({\n  exposes: {\n    './antd': './src/antd',d\n    './button': './src/button',\n  }\n})\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Uncaught TypeError: fn is not a function")))),Object(o.b)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u5f88\u6709\u53ef\u80fd\u662f\u56e0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"remote")," \u7aef\u63d0\u53d6\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"runtime"),"\uff0c\u7136\u540e ",Object(o.b)("inlineCode",{parentName:"p"},"remoteEntry.js")," \u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"host")," \u7aef\u53c8\u6700\u5148\u6267\u884c\uff0c\u5bfc\u81f4 ",Object(o.b)("inlineCode",{parentName:"p"},"webpack")," \u5185\u7f6e\u65b9\u6cd5\u6ca1\u6709\u63d0\u4f9b",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/webpack/webpack/pull/11843"}),"creating the runtime requirements in the ModuleFederationPlugin issue"),"\u3002\u89e3\u51b3\u65b9\u6848\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5173\u95ed ",Object(o.b)("inlineCode",{parentName:"li"},"runtime")," \u63d0\u53d6\u3002"),Object(o.b)("li",{parentName:"ul"},"\u522b\u4eba\u5199\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"remote")," \u7aef\u4f7f\u7528\u3002",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Guriqbal-Singh-Alida/basic-remote-runtime-single/blob/master/apps/app2/plugins/moduleFedSingleRuntime.js"}),"moduleFedSingleRuntime.js"),"\u3002")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"plugins: [\n    new ModuleFedSingleRuntimePlugin(),\n    new ModuleFederationPlugin({....\n")))}b.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,s=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?a.a.createElement(s,p(p({ref:t},c),{},{components:n})):a.a.createElement(s,p({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);