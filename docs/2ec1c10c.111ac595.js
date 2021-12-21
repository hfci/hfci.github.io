(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(7),o=(n(0),n(326)),c={id:"nodePkgFile",title:"\u6587\u4ef6\u64cd\u4f5c",hide_title:!0,sidebar_label:"\u6587\u4ef6\u64cd\u4f5c"},i={unversionedId:"node/package/nodePkgFile",id:"node/package/nodePkgFile",isDocsHomePage:!1,title:"\u6587\u4ef6\u64cd\u4f5c",description:"\u67e5\u627e\u6587\u4ef6",source:"@site/docs/node/package/file.md",slug:"/node/package/nodePkgFile",permalink:"/docs/node/package/nodePkgFile",version:"current",sidebar_label:"\u6587\u4ef6\u64cd\u4f5c",sidebar:"nodedoc",previous:{title:"debug",permalink:"/docs/node/skill/nodeDebug"}},s=[{value:"\u67e5\u627e\u6587\u4ef6",id:"\u67e5\u627e\u6587\u4ef6",children:[{value:"escalade \u4ece\u4e0b\u5f80\u4e0a\u67e5\u627e\u6587\u4ef6",id:"escalade-\u4ece\u4e0b\u5f80\u4e0a\u67e5\u627e\u6587\u4ef6",children:[]},{value:"totalist \u9012\u5f52\u7684\u65b9\u5f0f\u67e5\u8be2\u6240\u6709\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca\u6587\u4ef6\u7684<code>stats</code>\u4fe1\u606f",id:"totalist-\u9012\u5f52\u7684\u65b9\u5f0f\u67e5\u8be2\u6240\u6709\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca\u6587\u4ef6\u7684stats\u4fe1\u606f",children:[]},{value:"mk-dirs \u9012\u5f52\u7684\u65b9\u5f0f\u521b\u5efa\u76ee\u5f55",id:"mk-dirs-\u9012\u5f52\u7684\u65b9\u5f0f\u521b\u5efa\u76ee\u5f55",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u67e5\u627e\u6587\u4ef6"},"\u67e5\u627e\u6587\u4ef6"),Object(o.b)("h3",{id:"escalade-\u4ece\u4e0b\u5f80\u4e0a\u67e5\u627e\u6587\u4ef6"},Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/lukeed/escalade"}),"escalade")," \u4ece\u4e0b\u5f80\u4e0a\u67e5\u627e\u6587\u4ef6"),Object(o.b)("p",null,Object(o.b)("img",{alt:"escalade",src:n(496).default})),Object(o.b)("h3",{id:"totalist-\u9012\u5f52\u7684\u65b9\u5f0f\u67e5\u8be2\u6240\u6709\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca\u6587\u4ef6\u7684stats\u4fe1\u606f"},Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/lukeed/totalist"}),"totalist")," \u9012\u5f52\u7684\u65b9\u5f0f\u67e5\u8be2\u6240\u6709\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca\u6587\u4ef6\u7684",Object(o.b)("inlineCode",{parentName:"h3"},"stats"),"\u4fe1\u606f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { totalist } from 'totalist/sync';\n\nconst styles = new Set();\nconst scripts = new Set();\n\ntotalist('src', (name, abs, stats) => {\n  if (/\\.js$/.test(name)) {\n    scripts.add(abs);\n    if (stats.size >= 100e3) {\n      console.warn(`[WARN] \"${name}\" might cause performance issues (${stats.size})`);\n    }\n  } else if (/\\.css$/.test(name)) {\n    styles.add(abs);\n  }\n});\n\nconsole.log([...scripts]);\n//=> [..., '/Users/lukeed/.../src/path/to/example.css', ...]\n")),Object(o.b)("h3",{id:"mk-dirs-\u9012\u5f52\u7684\u65b9\u5f0f\u521b\u5efa\u76ee\u5f55"},Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/lukeed/mk-dirs"}),"mk-dirs")," \u9012\u5f52\u7684\u65b9\u5f0f\u521b\u5efa\u76ee\u5f55"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { mkdir } from 'mk-dirs';\nimport { resolve } from 'path';\n\n// Async/await\ntry {\n  let output = await mkdir('foo/bar/baz');\n  console.log(output); //=> \"/Users/hello/world/foo/bar/baz\"\n} catch (err) {\n  //\n}\n")))}d.isMDXComponent=!0},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},496:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/escalade-47bf1bbe5f9c29a3816745f04ee9064c.gif"}}]);