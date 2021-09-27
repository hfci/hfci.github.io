(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));var r=n(2),a=(n(0),n(283));const o={id:"vueMustPkg",title:"\u9879\u76ee\u5fc5\u5907\u7684vue\u8d44\u6e90\u5305",hide_title:!0,sidebar_label:"\u9879\u76ee\u5fc5\u5907"},l={unversionedId:"package/vue/vueMustPkg",id:"package/vue/vueMustPkg",isDocsHomePage:!1,title:"\u9879\u76ee\u5fc5\u5907\u7684vue\u8d44\u6e90\u5305",description:"1. portal-vue",source:"@site/docs/package/vue/\u5fc5\u5907\u7684\u5305.md",slug:"/package/vue/vueMustPkg",permalink:"/docs/package/vue/vueMustPkg",version:"current",sidebar_label:"\u9879\u76ee\u5fc5\u5907",sidebar:"packagedoc",previous:{title:"\u9879\u76ee\u52a9\u624b",permalink:"/docs/package/node/nodeProjectHelper"},next:{title:"\u9879\u76ee\u53ef\u80fd\u4f1a\u7528\u5230\u7684vue\u8d44\u6e90\u5305",permalink:"/docs/package/vue/vueMaybePkg"}},i=[{value:"1. portal-vue",id:"1-portal-vue",children:[]},{value:"2. vue-virtual-scroll-list",id:"2-vue-virtual-scroll-list",children:[]}],u={rightToc:i};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"1-portal-vue"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/LinusBorg/portal-vue"}),"1. portal-vue")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"portal")," ","[\u02c8p\u0254\u02d0tl]"," \u4f20\u9012\u95e8\uff1b\u4f20\u9001\u95e8"),Object(a.b)("p",null,"\u53ef\u4ee5\u5c06",Object(a.b)("inlineCode",{parentName:"p"},"slot"),"\u6e32\u67d3\u5230\u4efb\u4f55\u4f4d\u7f6e\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:"{9}","{9}":!0}),"import PortalVue from 'portal-vue'\nVue.use(PortalVue)\n\n<portal to=\"destination\">\n  <p>This slot content will be rendered wherever the <portal-target> with name 'destination'\n    is  located.</p>\n</portal>\n\n<portal-target name=\"destination\">\n  <-- p\u6807\u7b7e\u5c06\u6e32\u67d3\u5230\u8fd9\u91cc --\x3e\n</portal-target>\n")),Object(a.b)("p",null,"\u4f7f\u7528\u573a\u666f:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u89e3\u51b3\u4e00\u4e9b\u591a\u7ea7\u5d4c\u5957\u51fa\u73b0\u7684\u5c42\u7ea7\u95ee\u9898(\u6bd4\u5982\u7ec4\u4ef6\u5185\u90e8\u6709\u4e2a\u5f39\u7a97\uff0c\u4f46\u662f\u7ec4\u4ef6\u7684\u5c42\u7ea7\u6bd4\u8f83\u4f4e\uff0c\u53ef\u80fd\u5bfc\u81f4\u5f39\u7a97\u4e0d\u4f1a\u663e\u793a\u5728\u6700\u4e0a\u5c42)")),Object(a.b)("h3",{id:"2-vue-virtual-scroll-list"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/tangbc/vue-virtual-scroll-list"}),"2. vue-virtual-scroll-list")),Object(a.b)("p",null,"\u865a\u62df\u5217\u8868\uff0c\u65e0\u9650\u6eda\u52a8\u5bb9\u5668"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <div>\n    <virtual-list style=\"height: 360px; overflow-y: auto;\" // make list scrollable\n      :data-key=\"'uid'\"\n      :data-sources=\"items\"\n      :data-component=\"itemComponent\"\n    />\n  </div>\n</template>\n\n<script>\n  import Item from './Item'\n  import VirtualList from 'vue-virtual-scroll-list'\n\n  export default {\n    name: 'root',\n    data () {\n      return {\n        itemComponent: Item,\n        items: [{uid: 'unique_1', text: 'abc'}, {uid: 'unique_2', text: 'xyz'}, ...]\n      }\n    },\n    components: { 'virtual-list': VirtualList }\n  }\n<\/script>\n")))}c.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);