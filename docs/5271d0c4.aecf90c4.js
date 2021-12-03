(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return i}));var a=t(2),r=(t(0),t(314));const o={id:"babelPlugins",title:"babel\u5e38\u7528\u63d2\u4ef6",hide_title:!0,sidebar_label:"\u5e38\u7528\u63d2\u4ef6"},l={unversionedId:"enginee/babel/babelPlugins",id:"enginee/babel/babelPlugins",isDocsHomePage:!1,title:"babel\u5e38\u7528\u63d2\u4ef6",description:"\u4f7f\u7528\u88c5\u9970\u5668",source:"@site/docs/enginee/babel/\u5e38\u7528\u63d2\u4ef6.md",slug:"/enginee/babel/babelPlugins",permalink:"/docs/enginee/babel/babelPlugins",version:"current",sidebar_label:"\u5e38\u7528\u63d2\u4ef6",sidebar:"babeldoc",previous:{title:"babel\u5e94\u7528\u89c4\u5219",permalink:"/docs/enginee/babel/babel"},next:{title:"babel\u7248\u672c\u66f4\u65b0\u603b\u7ed3",permalink:"/docs/enginee/babel/babelVersions"}},b=[{value:"\u4f7f\u7528\u88c5\u9970\u5668",id:"\u4f7f\u7528\u88c5\u9970\u5668",children:[]},{value:"\u53ef\u9009\u94fe\u5f0f\u8c03\u7528",id:"\u53ef\u9009\u94fe\u5f0f\u8c03\u7528",children:[]},{value:"\u7a7a\u503c\u5408\u5e76",id:"\u7a7a\u503c\u5408\u5e76",children:[]},{value:"\u7ba1\u9053\u64cd\u4f5c\u7b26",id:"\u7ba1\u9053\u64cd\u4f5c\u7b26",children:[]},{value:"\u7c7b\u7684\u79c1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5",id:"\u7c7b\u7684\u79c1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5",children:[]},{value:"\u81ea\u5df1\u5b9e\u73b0require-context Babel macros",id:"\u81ea\u5df1\u5b9e\u73b0require-context-babel-macros",children:[]}],c={rightToc:b};function i({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u4f7f\u7528\u88c5\u9970\u5668"},"\u4f7f\u7528\u88c5\u9970\u5668"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators"}),"@babel/plugin-proposal-decorators")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"@annotation\nclass MyClass { }\n\nfunction annotation(target) {\n  target.annotated = true;\n}\n")),Object(r.b)("h2",{id:"\u53ef\u9009\u94fe\u5f0f\u8c03\u7528"},"\u53ef\u9009\u94fe\u5f0f\u8c03\u7528"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining"}),"@babel/plugin-proposal-optional-chaining")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"console.log(favorites?.video?.shows[0]); // 'The Simpsons'\nconsole.log(favorites?.audio?.audiobooks[0]); // undefined\n")),Object(r.b)("h2",{id:"\u7a7a\u503c\u5408\u5e76"},"\u7a7a\u503c\u5408\u5e76"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator"}),"@babel/plugin-proposal-nullish-coalescing-operator")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var foo = object.foo ?? \"default\"\n\nfoo === null || foo == undefined ? 'default' : foo\n")),Object(r.b)("h2",{id:"\u7ba1\u9053\u64cd\u4f5c\u7b26"},"\u7ba1\u9053\u64cd\u4f5c\u7b26"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"}),"@babel/plugin-proposal-pipeline-operator")),Object(r.b)("p",null,"\u5f53\u94fe\u5f0f\u8c03\u7528\u591a\u4e2a\u51fd\u6570\u65f6\uff0c\u4f7f\u7528\u7ba1\u9053\u64cd\u4f5c\u7b26\u53ef\u4ee5\u6539\u5584\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const double = (n) => n * 2;\nconst increment = (n) => n + 1;\n\n// \u6ca1\u6709\u7528\u7ba1\u9053\u64cd\u4f5c\u7b26\ndouble(increment(double(5))); // 22\n\n// \u7528\u4e0a\u7ba1\u9053\u64cd\u4f5c\u7b26\u4e4b\u540e\n5 |> double |> increment |> double; // 22\n")),Object(r.b)("h2",{id:"\u7c7b\u7684\u79c1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5"},"\u7c7b\u7684\u79c1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties"}),"@babel/plugin-proposal-class-properties"),"\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-proposal-private-methods"}),"@babel/plugin-proposal-private-methods")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Counter extends HTMLElement {\n  #xValue = 0;\n\n  get #x() { return this.#xValue; }\n  set #x(value) {\n    this.#xValue = value;\n    window.requestAnimationFrame(\n      this.#render.bind(this));\n  }\n\n  #clicked() {\n    this.#x++;\n  }\n}\n\n")),Object(r.b)("h2",{id:"\u81ea\u5df1\u5b9e\u73b0require-context-babel-macros"},Object(r.b)("a",Object(a.a)({parentName:"h2"},{href:"https://github.com/kentcdodds/babel-plugin-macros"}),"\u81ea\u5df1\u5b9e\u73b0require-context Babel macros")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://zhuanlan.zhihu.com/p/64346538"}),"\u53c2\u8003")))}i.isMDXComponent=!0},314:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,j=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return t?r.a.createElement(j,b(b({ref:n},i),{},{components:t})):r.a.createElement(j,b({ref:n},i))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<o;i++)l[i]=t[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);