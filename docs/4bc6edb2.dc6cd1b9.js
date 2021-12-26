(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(7),o=(r(0),r(339)),a={id:"prettierPlugin",title:"prettier\u5e38\u7528\u63d2\u4ef6",hide_title:!0,sidebar_label:"\u5e38\u7528\u63d2\u4ef6"},p={unversionedId:"enginee/prettier/prettierPlugin",id:"enginee/prettier/prettierPlugin",isDocsHomePage:!1,title:"prettier\u5e38\u7528\u63d2\u4ef6",description:"1. prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f",source:"@site/docs/enginee/prettier/\u5e38\u7528\u63d2\u4ef6.md",slug:"/enginee/prettier/prettierPlugin",permalink:"/docs/enginee/prettier/prettierPlugin",version:"current",sidebar_label:"\u5e38\u7528\u63d2\u4ef6",sidebar:"babeldoc",previous:{title:"postcss\u5e38\u7528\u63d2\u4ef6",permalink:"/docs/enginee/postcss/postcssPlugin"},next:{title:"stylus\u6709\u7528\u7684\u63d2\u4ef6",permalink:"/docs/enginee/stylus/stylusUsefulPlugin"}},c=[{value:"1. prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f",id:"1-prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f",children:[]}],l={rightToc:c};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1-prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/trivago/prettier-plugin-sort-imports"}),"1. prettier-plugin-sort-imports\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f")),Object(o.b)("p",null,"\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6a21\u5757\u5bfc\u5165\u987a\u5e8f"),Object(o.b)("p",null,Object(o.b)("img",{alt:"import-sort",src:r(392).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npm install --save-dev @trivago/prettier-plugin-sort-imports\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  "printWidth": 80,\n  "tabWidth": 4,\n  "trailingComma": "all",\n  "singleQuote": true,\n  "jsxBracketSameLine": true,\n  "semi": true,\n  "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],\n  "importOrderSeparation": true,\n}\n')))}s.isMDXComponent=!0},339:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(a,".").concat(m)]||u[m]||b[m]||o;return r?i.a.createElement(f,p(p({ref:t},l),{},{components:r})):i.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},392:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/import-sort-e8ff2e1db48b1890c264de36da4f8b43.gif"}}]);