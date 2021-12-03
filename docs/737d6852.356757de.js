(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{159:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return a})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),o=(r(0),r(314));const i={id:"nodeProjectHelper",title:"\u9879\u76ee\u52a9\u624b",hide_title:!0,sidebar_label:"\u9879\u76ee\u52a9\u624b"},a={unversionedId:"package/node/nodeProjectHelper",id:"package/node/nodeProjectHelper",isDocsHomePage:!1,title:"\u9879\u76ee\u52a9\u624b",description:"1. svg \u5904\u7406",source:"@site/docs/package/node/\u9879\u76ee\u52a9\u624b.md",slug:"/package/node/nodeProjectHelper",permalink:"/docs/package/node/nodeProjectHelper",version:"current",sidebar_label:"\u9879\u76ee\u52a9\u624b",sidebar:"packagedoc",previous:{title:"\u5e38\u7528\u7684cli\u8d44\u6e90\u5305",permalink:"/docs/package/node/nodeToolCli"},next:{title:"\u9879\u76ee\u5fc5\u5907\u7684vue\u8d44\u6e90\u5305",permalink:"/docs/package/vue/vueMustPkg"}},c=[{value:"1. svg \u5904\u7406",id:"1-svg-\u5904\u7406",children:[{value:"1. icon-pipeline",id:"1-icon-pipeline",children:[]},{value:"2. micromark \u5fae\u578bmarkdown\u89e3\u6790\u5668",id:"2-micromark-\u5fae\u578bmarkdown\u89e3\u6790\u5668",children:[]}]}],l={rightToc:c};function p({components:e,...n}){return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-svg-\u5904\u7406"},"1. svg \u5904\u7406"),Object(o.b)("h3",{id:"1-icon-pipeline"},"1. ",Object(o.b)("a",Object(t.a)({parentName:"h3"},{href:"https://github.com/DavidWells/icon-pipeline"}),"icon-pipeline")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"svg")," \u56fe\u6807\u538b\u7f29\u5408\u5e76\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const path = require('path')\nconst iconPipeline = require('icon-pipeline')\n\nconst iconSrcFolder = path.join(__dirname, 'src', 'icons')\nconst iconOutputFolder = path.join(__dirname, 'build', 'icons')\n\n/* Generate optimized SVGs and icon sprite */\niconPipeline({\n  // Location of non optimized svg icons\n  srcDir: iconSrcFolder,\n  // Output directory for optimized svg icons & svg sprite\n  outputDir: iconOutputFolder,\n  // Includes the sprite.js && sprite.svg in original icon directory\n  includeSpriteInSrc: true,\n  // Turn off additional svg classes added for advanced styling\n  /* disableClasses: true, */\n  // Namespace of icon IDs. Will prefix icon names. Example 'foo.svg' will become 'company-foo'\n  /* namespace: 'company' */\n}).then((iconData) => {\n  console.log('iconData', iconData)\n})\n\nconsole.log(iconData)\n")),Object(o.b)("h3",{id:"2-micromark-\u5fae\u578bmarkdown\u89e3\u6790\u5668"},Object(o.b)("a",Object(t.a)({parentName:"h3"},{href:"https://github.com/micromark/micromark"}),Object(o.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/micromark/micromark?label=micromark&style=social",alt:"2. micromark \u5fae\u578bmarkdown\u89e3\u6790\u5668"})))),Object(o.b)("p",null,"\u5fae\u578b ",Object(o.b)("inlineCode",{parentName:"p"},"markdown")," \u89e3\u6790\u5668\uff0c\u8fd8\u6709\u5404\u79cd\u63d2\u4ef6\u4f7f\u7528"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import {micromark} from 'micromark'\n\nconsole.log(micromark('## Hello, *world*!'))\n\n// result\n<h2>Hello, <em>world</em>!</h2>\n")))}p.isMDXComponent=!0},314:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return r?o.a.createElement(b,c(c({ref:n},p),{},{components:r})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);