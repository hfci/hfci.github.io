(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),i=(t(0),t(238)),c={id:"version4.1",title:"ts\u66f4\u65b0\u65e5\u5fd7-4.1.0",hide_title:!0,sidebar_label:"4.1.0"},o={unversionedId:"ts/update/version4.1",id:"ts/update/version4.1",isDocsHomePage:!1,title:"ts\u66f4\u65b0\u65e5\u5fd7-4.1.0",description:"4.1.0",source:"@site/docs/ts/update/4.1.0.md",slug:"/ts/update/version4.1",permalink:"/docs/ts/update/version4.1",version:"current",sidebar_label:"4.1.0",sidebar:"tsdoc",previous:{title:"ts\u66f4\u65b0\u65e5\u5fd7-4.2.0",permalink:"/docs/ts/update/version4.2.0"},next:{title:"ts\u66f4\u65b0\u65e5\u5fd7-4.0.0",permalink:"/docs/ts/update/version4.0"}},p=[{value:"4.1.0",id:"410",children:[{value:"1. \u6a21\u677f\u5b57\u6bb5\u91cf",id:"1-\u6a21\u677f\u5b57\u6bb5\u91cf",children:[]},{value:"2. \u6620\u5c04\u7c7b\u578b\u4e2d\u52a0\u5165\u952e\u91cd\u6620\u5c04",id:"2-\u6620\u5c04\u7c7b\u578b\u4e2d\u52a0\u5165\u952e\u91cd\u6620\u5c04",children:[]},{value:"3. \u9012\u5f52\u6761\u4ef6\u7c7b\u578b",id:"3-\u9012\u5f52\u6761\u4ef6\u7c7b\u578b",children:[]},{value:"4. \u6355\u83b7\u8d8a\u754c\u9519\u8bef",id:"4-\u6355\u83b7\u8d8a\u754c\u9519\u8bef",children:[]}]}],s={rightToc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"410"},"4.1.0"),Object(i.b)("h3",{id:"1-\u6a21\u677f\u5b57\u6bb5\u91cf"},"1. \u6a21\u677f\u5b57\u6bb5\u91cf"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'type World = "world";\n\n\ntype Greeting = `hello ${World}`;\n// same as\n//   type Greeting = "hello world";\n')),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u8054\u5408\u7c7b\u578b")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u5728\u8054\u5408\u7c7b\u578b\u4e0a\u4f7f\u7528\u6a21\u677f\u5b57\u6bb5\u91cf\uff0c\u5b83\u4f1a\u751f\u6210\u53ef\u4ee5\u7531\u6bcf\u4e2a\u8054\u5408\u6210\u5458\u8868\u793a\u7684\u6240\u6709\u53ef\u80fd\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7684\u96c6\u5408\u3002"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'type Color = "red" | "blue";\ntype Quantity = "one" | "two";\n\n\ntype SeussFish = `${Quantity | Color} fish`;\n// same as\n//   type SeussFish = "one fish" | "two fish"\n//                  | "red fish" | "blue fish";5\n')))),Object(i.b)("h3",{id:"2-\u6620\u5c04\u7c7b\u578b\u4e2d\u52a0\u5165\u952e\u91cd\u6620\u5c04"},"2. \u6620\u5c04\u7c7b\u578b\u4e2d\u52a0\u5165\u952e\u91cd\u6620\u5c04"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'type Options = {\n    [K in "noImplicitAny" | "strictNullChecks" | "strictFunctionTypes"]?: boolean\n};\n// same as\n//   type Options = {\n//       noImplicitAny?: boolean,\n//       strictNullChecks?: boolean,\n//       strictFunctionTypes?: boolean\n//   };\n')),Object(i.b)("p",null,"\u4ee5\u524d\uff0c\u6620\u5c04\u7c7b\u578b\u53ea\u80fd\u4f7f\u7528\u4f60\u63d0\u4f9b\u7684\u952e\u6765\u751f\u6210\u65b0\u7684\u5bf9\u8c61\u7c7b\u578b\u3002\u4f46\u5f88\u591a\u65f6\u5019\u4f60\u5e0c\u671b\u80fd\u591f\u6839\u636e\u8f93\u5165\u6765\u521b\u5efa\u65b0\u952e\u6216\u8fc7\u6ee4\u6389\u952e\u3002"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"as")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"TypeScript 4.1")," \u5141\u8bb8\u4f60\u4f7f\u7528\u65b0\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"as")," \u5b50\u53e5\u91cd\u65b0\u6620\u5c04\u6620\u5c04\u7c7b\u578b\u4e2d\u7684\u952e\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type MappedTypeWithNewKeys<T> = {\n  [K in keyof T as NewKeyType]: T[K]\n}\n\n// \u5982\u4e0b\uff1a\n\ntype Getters<T> = {\n    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]\n};\ninterface Person {\n    name: string;\n    age: number;\n    location: string;\n}\ntype LazyPerson = Getters<Person>\n\n// same as\n//   type LazyPerson = {\n//     getName: () => string;\n//     getAge: () => number;\n//     getLocation: () => string;\n//   }\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"never")," \u8fc7\u6ee4\u79d8\u94a5\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'type RemoveKindField<T> = {\n  [K in keyof T as Exclude<K, "kind">]: T[K]\n};\ninterface Circle {\n  kind: "circle";\n  radius: number;\n}\ntype KindlessCircle = RemoveKindField<Circle>;\n')))))),Object(i.b)("h3",{id:"3-\u9012\u5f52\u6761\u4ef6\u7c7b\u578b"},"3. \u9012\u5f52\u6761\u4ef6\u7c7b\u578b"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"TypeScript 4.1")," \u4e2d\uff0c\u6761\u4ef6\u7c7b\u578b\u73b0\u5728\u53ef\u4ee5\u7acb\u5373\u5728\u5176\u5206\u652f\u4e2d\u5f15\u7528\u81ea\u8eab\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u66f4\u5bb9\u6613\u7f16\u5199\u9012\u5f52\u7c7b\u578b\u522b\u540d\u4e86"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type ElementType<T> =\n    T extends ReadonlyArray<infer U> ? ElementType<U> : T;\n")),Object(i.b)("h3",{id:"4-\u6355\u83b7\u8d8a\u754c\u9519\u8bef"},"4. \u6355\u83b7\u8d8a\u754c\u9519\u8bef"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"TypeScript")," \u6709\u4e00\u4e2a\u79f0\u4e3a\u7d22\u5f15\u7b7e\u540d\u7684\u7279\u6027\u3002\u8fd9\u4e9b\u7b7e\u540d\u53ef\u4ee5\u7528\u6765\u544a\u77e5\u7c7b\u578b\u7cfb\u7edf\uff0c\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u4efb\u610f\u547d\u540d\u7684\u5c5e\u6027\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface Options {\n  path: string;\n  permissions: number;\n\n\n  // Extra properties are caught by this index signature.\n  [propName: string]: string | number;\n}\n\n\nfunction checkOptions(opts: Options) {\n  opts.path // string\n  opts.permissions // number\n\n\n  // These are all allowed too!\n  // They have the type 'string | number'.\n  opts.yadda.toString();\n  opts[\"foo bar baz\"].toString();\n  opts[Math.random()].toString();\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u52a8\u6001\u7d22\u5f15")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5373\u4f7f\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u7684\u503c\u662f",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"number"),"\uff0c\u4f46\u662f\u7d22\u5f15\u4e5f\u6709\u53ef\u80fd\u4e0d\u5b58\u5728\u5bf9\u8c61\u4e2d\uff0c\u629b\u51fa",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"TypeScript 4.1")," \u52a0\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"--noUncheckedIndexedAccess")," \u7684\u65b0\u6807\u5fd7\u3002\u5728\u8fd9\u79cd\u65b0\u6a21\u5f0f\u4e0b\uff0c\u6bcf\u4e2a\u5c5e\u6027\u8bbf\u95ee\uff08\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},"foo.bar"),"\uff09\u6216\u7d22\u5f15\u8bbf\u95ee\uff08\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},'foo["bar"'),"]\uff09\u90fd\u88ab\u8ba4\u4e3a\u53ef\u80fd\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," \u7684\u3002\u8fd9\u610f\u5473\u7740\u5728\u6211\u4eec\u7684\u6700\u540e\u4e00\u4e2a\u793a\u4f8b\u4e2d\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"opts.yadda")," \u7684\u7c7b\u578b\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"string | number | undefined"),"\uff0c\u800c\u4e0d\u53ea\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"string | number"),"\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"--noUncheckedIndexedAccess")," \u7684\u4e00\u4e2a\u540e\u679c\u662f\uff0c\u5373\u4f7f\u5728\u8fb9\u754c\u68c0\u67e5\u5faa\u73af\u4e2d\uff0c\u4e5f\u4f1a\u66f4\u4e25\u683c\u5730\u68c0\u67e5\u5bf9\u6570\u7ec4\u7684\u7d22\u5f15\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function screamLines(strs: string[]) {\n  // this will have issues\n  for (let i = 0; i < strs.length; i++) {\n      console.log(strs[i].toUpperCase());\n      //          ~~~~~~~\n      // error! Object is possibly 'undefined'.\n  }\n}\n")))))))}b.isMDXComponent=!0},238:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(t),m=a,u=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return t?r.a.createElement(u,o(o({ref:n},s),{},{components:t})):r.a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);