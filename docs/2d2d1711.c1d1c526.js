(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{314:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||s[f]||l;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},365:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cli-table3-example-6041e4b30070f5ce670b6929910bc6fb.png"},43:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(314));const l={},c={unversionedId:"package/node/terminalStyle/_partial-table",id:"package/node/terminalStyle/_partial-table",isDocsHomePage:!1,title:"_partial-table",description:"table",source:"@site/docs/package/node/terminalStyle/_partial-table.md",slug:"/package/node/terminalStyle/_partial-table",permalink:"/docs/package/node/terminalStyle/_partial-table",version:"current"},o=[{value:"table",id:"table",children:[{value:"cli-table3 \u6e32\u67d3table\u6837\u5f0f",id:"cli-table3-\u6e32\u67d3table\u6837\u5f0f",children:[]}]}],i={rightToc:o};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"table"},"table"),Object(a.b)("h3",{id:"cli-table3-\u6e32\u67d3table\u6837\u5f0f"},"cli-table3 \u6e32\u67d3table\u6837\u5f0f"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/cli-table/cli-table3"}),"cli-table3")," \u7ec8\u7aef\u663e\u793a\u8868\u683c")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"var Table = require('cli-table3');\n\n// instantiate\nvar table = new Table({\n    head: ['TH 1 label', 'TH 2 label']\n  , colWidths: [100, 200]\n});\n\n// table is an Array, so you can `push`, `unshift`, `splice` and friends\ntable.push(\n    ['First value', 'Second value']\n  , ['First value', 'Second value']\n);\n\nconsole.log(table.toString());\n")),Object(a.b)("p",null,Object(a.b)("img",{alt:"cli-table3-example.png",src:n(365).default})))}b.isMDXComponent=!0}}]);