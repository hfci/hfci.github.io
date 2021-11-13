(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{229:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return o}));var a=t(2),r=t(7),i=(t(0),t(302)),c={id:"webpackAssetModule",title:"Asset Module",hide_title:!0,sidebar_label:"Asset Module"},l={unversionedId:"enginee/webpack/webpackAssetModule",id:"enginee/webpack/webpackAssetModule",isDocsHomePage:!1,title:"Asset Module",description:"\u7b80\u4ecb",source:"@site/docs/enginee/webpack/assetModule.md",slug:"/enginee/webpack/webpackAssetModule",permalink:"/docs/enginee/webpack/webpackAssetModule",version:"current",sidebar_label:"Asset Module",sidebar:"babeldoc",previous:{title:"Module federation",permalink:"/docs/enginee/webpack/webpackModuleFederation"},next:{title:"webpack5-changelog",permalink:"/docs/enginee/webpack/webpack5Changelog"}},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"asset/resource",id:"assetresource",children:[]},{value:"asset/inline",id:"assetinline",children:[]},{value:"asset/source",id:"assetsource",children:[]},{value:"asset",id:"asset",children:[]},{value:"\u5b9a\u4e49\u8f93\u51fa\u7684\u6587\u4ef6\u540d",id:"\u5b9a\u4e49\u8f93\u51fa\u7684\u6587\u4ef6\u540d",children:[]},{value:"URL \u8d44\u6e90",id:"url-\u8d44\u6e90",children:[]}],b={rightToc:p};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(i.b)("p",null,"\u8d44\u6e90\u6a21\u5757(",Object(i.b)("inlineCode",{parentName:"p"},"asset module"),")\u662f\u4e00\u79cd\u6a21\u5757\u7c7b\u578b\uff0c\u5b83\u5141\u8bb8\u4f7f\u7528\u8d44\u6e90\u6587\u4ef6\uff08\u5b57\u4f53\uff0c\u56fe\u6807\u7b49\uff09\u800c\u65e0\u9700\u914d\u7f6e\u989d\u5916 ",Object(i.b)("inlineCode",{parentName:"p"},"loader"),"\u3002"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"webpack 5")," \u4e4b\u524d\uff0c\u901a\u5e38\u4f7f\u7528\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"raw-loader")," \u5c06\u6587\u4ef6\u53d8\u6210\u5b57\u7b26\u4e32\u5185\u8054\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"url-loader")," \u5c06\u6587\u4ef6\u53d8\u6210 ",Object(i.b)("inlineCode",{parentName:"p"},"data url")," \u5185\u8054\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"file-loader")," \u5c06\u6587\u4ef6\u5f04\u5230\u8f93\u51fa\u76ee\u5f55\u3002"))),Object(i.b)("h3",{id:"assetresource"},"asset/resource"),Object(i.b)("p",null,"\u53d1\u9001\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u5e76\u5bfc\u51fa ",Object(i.b)("inlineCode",{parentName:"p"},"URL"),"\u3002\u4e4b\u524d\u901a\u8fc7\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"file-loader")," \u5b9e\u73b0\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'{6} title = "webpack config"',"{6}":!0,title:!0,"":"",'"webpack':!0,'config"':!0}),'\n{\n  "rules": [\n    {\n      "test": "/\\.(?:ico|gif|png|jpg|jpeg)$/i",\n      "type": "asset/resource"\n    }\n  ]\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import favicon from './images/favicon.png'\n\nfavicon // a1af828b4e65d37668e1.png\n")),Object(i.b)("h3",{id:"assetinline"},"asset/inline"),Object(i.b)("p",null,"\u5bfc\u51fa\u4e00\u4e2a\u8d44\u6e90\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"data URI"),"\u3002\u4e4b\u524d\u901a\u8fc7\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"url-loader")," \u5b9e\u73b0\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'{6} title = "webpack config"',"{6}":!0,title:!0,"":"",'"webpack':!0,'config"':!0}),'\n{\n  "rules": [\n    {\n      "test": "/\\.(?:ico|gif|png|jpg|jpeg)$/i",\n      "type": "asset/inline"\n    }\n  ]\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import favicon from './images/favicon.png'\n\nfavicon // data:image/png;base64,iVBORw0KGgoAAAANSUhEU...\n")),Object(i.b)("h3",{id:"assetsource"},"asset/source"),Object(i.b)("p",null,"\u5230\u5904\u8d44\u6e90\u7684\u6e90\u4ee3\u7801\u3002\u4e4b\u524d\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"raw-loader"),"\u6765\u5b9e\u73b0\u3002"),Object(i.b)("h3",{id:"asset"},"asset"),Object(i.b)("p",null,"\u5bfc\u51fa\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"data URI")," \u548c\u53d1\u9001\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e4b\u95f4\u81ea\u52a8\u9009\u62e9\u3002\u4e4b\u524d\u901a\u8fc7\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"url-loader"),"\uff0c\u5e76\u4e14\u914d\u7f6e\u8d44\u6e90\u4f53\u79ef\u9650\u5236\u5b9e\u73b0\u3002"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"webpack")," \u5c06\u6309\u7167\u9ed8\u8ba4\u6761\u4ef6\uff0c\u81ea\u52a8\u5730\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"resource")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"inline")," \u4e4b\u95f4\u8fdb\u884c\u9009\u62e9\uff1a\u5c0f\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"8kb")," \u7684\u6587\u4ef6\uff0c\u5c06\u4f1a\u89c6\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"inline")," \u6a21\u5757\u7c7b\u578b\uff0c\u5426\u5219\u4f1a\u88ab\u89c6\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"resource")," \u6a21\u5757\u7c7b\u578b\u3002"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"Rule.parser.dataUrlCondition.maxSize"),"\u6765\u4fee\u6539\u8fd9\u4e2a\u914d\u7f6e\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{16}","{16}":!0}),"\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'main.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  module: {\n    rules:\n    [\n      {\n        test: /\\.txt/,\n        type: 'asset',\n        parser: {\n          dataUrlCondition: {\n            maxSize: 4 * 1024 // 4kb\n          }\n        }\n      }\n    ]\n  },\n};\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u65b9\u6cd5 ",Object(i.b)("inlineCode",{parentName:"p"},"function (source, { filename, module }) => boolean"),"\uff0c\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", ",Object(i.b)("inlineCode",{parentName:"p"},"webpack")," \u5c06\u6a21\u5757\u4f5c\u4e3a\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"Base64")," \u7f16\u7801\u7684\u5b57\u7b26\u4e32\u6ce8\u5165\u5230\u5305\u4e2d\uff0c \u5426\u5219\u6a21\u5757\u6587\u4ef6\u4f1a\u88ab\u751f\u6210\u5230\u8f93\u51fa\u7684\u76ee\u6807\u76ee\u5f55\u4e2d\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  //...\n  module: {\n    rules: [\n      {\n        //...\n        parser: {\n          dataUrlCondition: (source, { filename, module }) => {\n            const content = source.toString();\n            return content.includes('some marker');\n          }\n        }\n      }\n    ]\n  }\n};\n")))),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"")))))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5982\u679c\u5728",Object(i.b)("inlineCode",{parentName:"p"},"webpack5"),"\u4e2d\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"loader"),"\u6765\u5904\u7406\u6a21\u5757\uff0c\u9700\u8981\u5c06",Object(i.b)("inlineCode",{parentName:"p"},"asset type"),"\u8bbe\u7f6e\u6210",Object(i.b)("inlineCode",{parentName:"p"},"javascript/auto"),"\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u591a\u6b21\u5904\u7406\uff0c\u6709\u53ef\u80fd\u4ea7\u751f",Object(i.b)("inlineCode",{parentName:"p"},"asset"),"\u91cd\u590d\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{16}","{16}":!0}),"\nmodule.exports = {\n\n  module: {\n    rules: [\n        {\n          test: /\\.(png|jpg|gif)$/i,\n          use: [\n            {\n              loader: 'url-loader',\n              options: {\n                limit: 8192,\n              }\n            },\n          ],\n          type: 'javascript/auto'\n        },\n    ]\n  },\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"loader"),"\u5904\u7406\u7684\u65f6\u5019\uff0c\u4f1a\u5bf9",Object(i.b)("inlineCode",{parentName:"p"},"URL"),"\u7684\u6a21\u5757\u4ea7\u751f\u5f71\u54cd"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"new URL('./images/favicon.png', import.meta.url) // http://localhost:8080/[object%20Module]\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"dependency: { not: ['url'] }")," \u914d\u7f6e\u89e3\u51b3"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{16}","{16}":!0}),"\nmodule.exports = {\n  module: {\n    rules: [\n        {\n          test: /\\.(png|jpg|gif)$/i,\n          use: [\n            {\n              loader: 'url-loader',\n              options: {\n                limit: 8192,\n              }\n            },\n          ],\n          type: 'javascript/auto'\n          dependency: { not: ['url'] },\n        },\n    ]\n  },\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"loader"),"\uff0c \u4f7f\u7528\u5185\u7f6e",Object(i.b)("inlineCode",{parentName:"p"},"type: asset")," \u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u95ee\u9898\u3002"))))))),Object(i.b)("h3",{id:"\u5b9a\u4e49\u8f93\u51fa\u7684\u6587\u4ef6\u540d"},"\u5b9a\u4e49\u8f93\u51fa\u7684\u6587\u4ef6\u540d"),Object(i.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"asset/resource")," \u6a21\u5757\u4ee5 ",Object(i.b)("inlineCode",{parentName:"p"},"[hash][ext][query]")," \u6587\u4ef6\u540d\u53d1\u9001\u5230\u8f93\u51fa\u76ee\u5f55\u3002\u6709\u4e24\u79cd\u65b9\u5f0f\u81ea\u5b9a\u4e49\u8f93\u51fa\u6587\u4ef6\u540d"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"output.assetModuleFilename"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{6}","{6}":!0}),"module.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'main.js',\n    path: path.resolve(__dirname, 'dist'),\n    assetModuleFilename: 'images/[hash][ext][query]'\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.png/,\n        type: 'asset/resource'\n      }\n    ]\n  },\n};\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Rule.generator.filename"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{13}","{13}":!0}),"module.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'main.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.png/,\n        type: 'asset/resource',\n        generator: {\n          filename: 'static/[hash][ext][query]'\n        }\n      }\n    ]\n  },\n};\n")),Object(i.b)("h3",{id:"url-\u8d44\u6e90"},"URL \u8d44\u6e90"),Object(i.b)("p",null,"\u5f53\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"new URL('./path/to/asset', import.meta.url)"),"\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"webpack")," \u4e5f\u4f1a\u521b\u5efa\u8d44\u6e90\u6a21\u5757\uff0c\u7f16\u8bd1\u5230\u8f93\u51fa\u76ee\u5f55\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/index.js"',title:'"src/index.js"'}),"const logo = new URL('./logo.svg', import.meta.url);\n")),Object(i.b)("p",null,"\u6839\u636e\u4f60\u914d\u7f6e\u4e2d ",Object(i.b)("inlineCode",{parentName:"p"},"target")," \u7684\u4e0d\u540c\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"webpack")," \u4f1a\u5c06\u4e0a\u8ff0\u4ee3\u7801\u7f16\u8bd1\u6210\u4e0d\u540c\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// target: web\nnew URL(__webpack_public_path__ + 'logo.svg', document.baseURI || self.location.href);\n\n// target: webworker\nnew URL(__webpack_public_path__ + 'logo.svg', self.location);\n\n// target: node, node-webkit, nwjs, electron-main, electron-renderer, electron-preload, async-node\nnew URL(__webpack_public_path__ + 'logo.svg', require('url').pathToFileUrl(__filename));\n")))}o.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),o=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=o(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=o(t),m=a,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return t?r.a.createElement(u,l(l({ref:n},b),{},{components:t})):r.a.createElement(u,l({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<i;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);