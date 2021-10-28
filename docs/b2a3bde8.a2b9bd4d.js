(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),i=(n(0),n(297)),o={id:"eslintPrettier",title:"prettier",hide_title:!0,sidebar_label:".prettierrc"},c={unversionedId:"enginee/eslint/eslintPrettier",id:"enginee/eslint/eslintPrettier",isDocsHomePage:!1,title:"prettier",description:"\u5e38\u7528\u914d\u7f6e",source:"@site/docs/enginee/eslint/prettier.md",slug:"/enginee/eslint/eslintPrettier",permalink:"/docs/enginee/eslint/eslintPrettier",version:"current",sidebar_label:".prettierrc",sidebar:"babeldoc",previous:{title:"eslint options",permalink:"/docs/enginee/eslint/eslintConfigOptions"},next:{title:"eslint prettier editorconfig \u4e09\u8005\u533a\u522b",permalink:"/docs/enginee/eslint/eslintPrettierEslintEditorconfig"}},s=[{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",children:[]},{value:"overrides \u914d\u7f6e\u8986\u76d6",id:"overrides-\u914d\u7f6e\u8986\u76d6",children:[]},{value:"\u5171\u4eab\u914d\u7f6e",id:"\u5171\u4eab\u914d\u7f6e",children:[]},{value:"parser \u7279\u6b8a\u6587\u4ef6\u89e3\u6790\u5668",id:"parser-\u7279\u6b8a\u6587\u4ef6\u89e3\u6790\u5668",children:[]},{value:"prettier \u63d2\u4ef6\u751f\u6001",id:"prettier-\u63d2\u4ef6\u751f\u6001",children:[{value:"prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f",id:"prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f",children:[]}]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}],l={rightToc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u5e38\u7528\u914d\u7f6e"},"\u5e38\u7528\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "printWidth": 80,\n  "tabWidth": 2,\n  "useTabs": false,\n  "semi": false,\n  "singleQuote": true,\n  "trailingComma": "none",\n  "bracketSpacing": true,\n  "bracketSameLine": true,\n  "jsxSingleQuote": true,\n  "arrowParens": "avoid",\n  "endOfLine": "lf"\n}\n')),Object(i.b)("h2",{id:"overrides-\u914d\u7f6e\u8986\u76d6"},"overrides \u914d\u7f6e\u8986\u76d6"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"overrides \u53ef\u4ee5\u9488\u5bf9\u7279\u6b8a\u62d3\u5c55\u540d\uff0c\u6587\u4ef6\u5939\u6216\u8005\u6587\u4ef6\u8fdb\u884c\u4e0d\u540c\u7684\u914d\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "semi": false,\n  "overrides": [\n    {\n      "files": "*.test.js",\n      "options": {\n        "semi": true\n      }\n    },\n    {\n      "files": ["*.html", "legacy/**/*.js"],\n      "options": {\n        "tabWidth": 4\n      }\n    }\n  ]\n}\n')),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"overrides.options")," \u4e0b\u9762\u7684\u914d\u7f6e\u9879\u53ea\u7528\u6dfb\u52a0\u548c\u5916\u5c42\u4e0d\u4e00\u81f4\u7684\u914d\u7f6e\u5c31\u53ef\u4ee5\u4e86\uff1a"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "arrowParens": "avoid",\n  // highlight-next-line\n  "endOfLine": "lf",\n  "overrides": [\n    {\n      "files": [\n        "*.js"\n      ],\n      "options": {\n        "arrowParens": "always"\n      }\n    }\n  ]\n}\n')),Object(i.b)("p",{parentName:"div"},"\u5c31\u6bd4\u5982\u4e0a\u9762\u7684\u793a\u4f8b\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"js")," \u6587\u4ef6\u8bbe\u7f6e\u4e86\u7bad\u5934\u51fd\u6570\u53c2\u6570\u603b\u662f\u5e26\u62ec\u53f7\uff0c\u4f46\u662f\u6ca1\u6709\u8bbe\u7f6e\u6362\u884c\u7b26\uff0c\u4f1a\u4f7f\u7528\u5916\u9762\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"endOfLine"),"\u7684\u914d\u7f6e\u4e5f\u5c31\u662f\u5168\u5c40\u7684\u914d\u7f6e\u9879\u3002"))),Object(i.b)("h2",{id:"\u5171\u4eab\u914d\u7f6e"},"\u5171\u4eab\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title=".prettierrc.js"',title:'".prettierrc.js"'}),'module.exports = {\n  ...require("@company/prettier-config"),\n  semi: false\n}\n')),Object(i.b)("h2",{id:"parser-\u7279\u6b8a\u6587\u4ef6\u89e3\u6790\u5668"},"parser \u7279\u6b8a\u6587\u4ef6\u89e3\u6790\u5668"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"overrides.options.parser")," \u53ef\u4ee5\u8ba9 ",Object(i.b)("inlineCode",{parentName:"p"},"prettier")," \u652f\u6301\u65e0\u6cd5\u89e3\u6790\u7684\u6587\u4ef6")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "overrides": [\n    {\n      "files": ".prettierrc",\n      "options": { "parser": "json" }\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"prettier-\u63d2\u4ef6\u751f\u6001"},"prettier \u63d2\u4ef6\u751f\u6001"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u63d2\u4ef6\u529f\u80fd\u7684\u652f\u6301\u8ba9prettier\u7684\u529f\u80fd\u66f4\u52a0\u5f3a\u5927\u548c\u4e30\u5bcc\uff0c",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://prettier.io/docs/en/plugins.html#using-plugins"}),"prettier plugin"))),Object(i.b)("p",null,"\u6bd4\u5982\uff1a"),Object(i.b)("h3",{id:"prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f"},Object(i.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/trivago/prettier-plugin-sort-imports"}),"prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f")),Object(i.b)("p",null,"\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f"),Object(i.b)("p",null,Object(i.b)("img",{alt:"import-sort",src:n(350).default})),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install --save-dev @trivago/prettier-plugin-sort-imports\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  "printWidth": 80,\n  "tabWidth": 4,\n  "trailingComma": "all",\n  "singleQuote": true,\n  "jsxBracketSameLine": true,\n  "semi": true,\n  "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],\n  "importOrderSeparation": true,\n}\n')),Object(i.b)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5efa\u8bae\u5b89\u88c5\u7f16\u8f91\u5668\u63d2\u4ef6\uff0c\u800c\u4e14\u5f00\u542f",Object(i.b)("inlineCode",{parentName:"p"},"\u4fdd\u5b58\u81ea\u52a8\u683c\u5f0f\u5316\u529f\u80fd"),"\u3002")),Object(i.b)("p",null,"\u5efa\u8bae\u5b89\u88c5\u63d2\u4ef6\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title=".vscode/extension.json"',title:'".vscode/extension.json"'}),'{\n  "recommendations": [\n    "esbenp.prettier-vscode"\n  ]\n}\n')),Object(i.b)("p",null,"\u4fdd\u5b58\u81ea\u52a8\u683c\u5f0f\u5316\u914d\u7f6e\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'}),'{\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "editor.formatOnSave": true,\n  // highlight-start\n  "[javascript]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode",\n    "editor.formatOnSave": true\n  }\n  // highlight-end\n}\n')),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5982\u4e0a\u56fe\u6240\u6807\u793a\u7684\uff0c\u9700\u8981\u8bbe\u7f6e\u6bcf\u79cd\u8bed\u8a00\u7684\u914d\u7f6e\uff0c\u8981\u4e0d\u7136\u53ef\u80fd\u4e0d\u751f\u6548\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u652f\u6301\u7684\u8bed\u8a00\u6709\uff1a"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"javascript\njavascriptreact\ntypescript\ntypescriptreact\njson\ngraphql\n...\n")))))))}p.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},350:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/import-sort-e8ff2e1db48b1890c264de36da4f8b43.gif"}}]);