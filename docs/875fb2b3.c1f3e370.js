(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(314));const i={id:"vueMaybePkg",title:"\u9879\u76ee\u53ef\u80fd\u4f1a\u7528\u5230\u7684vue\u8d44\u6e90\u5305",hide_title:!0,sidebar_label:"\u9879\u76ee\u53ef\u80fd\u9700\u8981"},o={unversionedId:"package/vue/vueMaybePkg",id:"package/vue/vueMaybePkg",isDocsHomePage:!1,title:"\u9879\u76ee\u53ef\u80fd\u4f1a\u7528\u5230\u7684vue\u8d44\u6e90\u5305",description:"1. vue-promised",source:"@site/docs/package/vue/\u6709\u7528\u7684\u5305.md",slug:"/package/vue/vueMaybePkg",permalink:"/docs/package/vue/vueMaybePkg",version:"current",sidebar_label:"\u9879\u76ee\u53ef\u80fd\u9700\u8981",sidebar:"packagedoc",previous:{title:"\u9879\u76ee\u5fc5\u5907\u7684vue\u8d44\u6e90\u5305",permalink:"/docs/package/vue/vueMustPkg"},next:{title:"\u9879\u76ee\u4e2d\u53ef\u80fd\u4f1a\u7528\u5230flutter\u8d44\u6e90\u5305",permalink:"/docs/package/flutter/flutterMaybePkg"}},p=[{value:"1. vue-promised",id:"1-vue-promised",children:[]},{value:"2. vue-fragment",id:"2-vue-fragment",children:[]},{value:"3. vue-smooth-dnd",id:"3-vue-smooth-dnd",children:[]},{value:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668",id:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668",children:[{value:"1. tiptap \u8f7b\u91cf\u7ea7\u5bcc\u6587\u672c\u7f16\u8f91\u5668",id:"1-tiptap-\u8f7b\u91cf\u7ea7\u5bcc\u6587\u672c\u7f16\u8f91\u5668",children:[]}]}],c={rightToc:p};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"1-vue-promised"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/posva/vue-promised"}),"1. vue-promised")),Object(a.b)("p",null,"\u6839\u636e",Object(a.b)("inlineCode",{parentName:"p"},"promise"),"\u7684\u72b6\u6001\uff0c\u9009\u62e9\u6027\u7684\u6e32\u67d3\u5404\u4e2a\u72b6\u6001\u7684",Object(a.b)("inlineCode",{parentName:"p"},"slot"),"\u5185\u5bb9\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <Promised :promise="usersPromise">\n    <template v-slot:pending>\n      <p>Loading...</p>\n    </template>\n    <template v-slot="data">\n      <ul>\n        <li v-for="user in data">{{ user.name }}</li>\n      </ul>\n    </template>\n    <template v-slot:rejected="error">\n      <p>Error: {{ error.message }}</p>\n    </template>\n  </Promised>\n</template>\n\n<script>\nimport { Promised } from \'vue-promised\'\nVue.component(\'Promised\', Promised)\n\nexport default {\n  data: () => ({ usersPromise: null }),\n\n  created() {\n    this.usersPromise = this.getUsers()\n  },\n}\n<\/script>\n')),Object(a.b)("h3",{id:"2-vue-fragment"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/y-nk/vue-fragment"}),"2. vue-fragment")),Object(a.b)("p",null,"\u5355\u6587\u4ef6\u7ec4\u4ef6(",Object(a.b)("inlineCode",{parentName:"p"},".vue"),")\u6a21\u677f\u91cc\u9762\u5fc5\u987b\u8981\u6709\u4e00\u4e2a\u6839\u51e0\u70b9\uff0c\u53ef\u80fd\u6709\u65f6\u5019\u8fd9\u4e2a\u8282\u70b9\u5e76\u6ca1\u6709\u7528\uff0c\u8fd9\u5c31\u5bfc\u81f4",Object(a.b)("inlineCode",{parentName:"p"},"DOM"),"\u5c42\u7ea7\u8fc7\u6df1\u3002\u5c31\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\uff0c\u6700\u7ec8\u6e32\u67d3\u4e00\u4e2a\u6ce8\u91ca\u8282\u70b9\u6765\u5305\u88f9\u91cc\u9762\u7684\u5185\u5bb9\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<template>\n<fragment>\n   <li>123</li>\n   <li>789</li>\n</fragment>\n</template>\n\n<script>\nimport { Fragment } from 'vue-fragment'\nexport default {\n  name: 'Test',\n  components: { Fragment },\n  props: {\n    msg: String\n  }\n}\n<\/script>\n")),Object(a.b)("p",null,"\u6548\u679c\u5982\u4e0b:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"fragment",src:n(364).default})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4e0d\u662f\u7279\u522b\u9700\u8981\u7684\u573a\u666f\u5efa\u8bae\u4e0d\u8981\u4f7f\u7528\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u539f\u7406\u662f\u5728",Object(a.b)("inlineCode",{parentName:"p"},"mounted"),"\u751f\u547d\u5468\u671f\u5185\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"p"},"js"),"\u6765\u64cd\u4f5c",Object(a.b)("inlineCode",{parentName:"p"},"dom"),"\u6765\u5b9e\u73b0\u7684, \u5e76\u4e0d\u662f\u5728\u7f16\u8bd1\u9636\u6bb5\u6765\u5904\u7406\u7684\uff0c\u6240\u4ee5\u4f1a\u5728\u8fd0\u884c\u65f6\u5f71\u54cd\u6027\u80fd\u3002",Object(a.b)("img",{alt:"fragment",src:n(552).default}))),Object(a.b)("h3",{id:"3-vue-smooth-dnd"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/kutlugsahin/vue-smooth-dnd"}),"3. vue-smooth-dnd")),Object(a.b)("p",null,"\u987a\u7545\u7684\u62d6\u52a8\u7ec4\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <div>\n    <div class="simple-page">\n        <Container @drop="onDrop">\n          <Draggable v-for="item in items" :key="item.id">\n            <div class="draggable-item">\n              {{item.data}}\n            </div>\n          </Draggable>\n        </Container>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { Container, Draggable } from "vue-smooth-dnd";\nimport { applyDrag, generateItems } from "./utils";\nexport default {\n  name: "Simple",\n  components: { Container, Draggable },\n  data() {\n    return {\n      items: generateItems(50, i => ({ id: i, data: "Draggable " + i }))\n    };\n  },\n  methods: {\n    onDrop(dropResult) {\n      this.items = applyDrag(this.items, dropResult);\n    }\n  }\n};\n<\/script>\n')),Object(a.b)("h2",{id:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668"},"\u5bcc\u6587\u672c\u7f16\u8f91\u5668"),Object(a.b)("h3",{id:"1-tiptap-\u8f7b\u91cf\u7ea7\u5bcc\u6587\u672c\u7f16\u8f91\u5668"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/scrumpy/tiptap"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/scrumpy/tiptap?label=tiptap&style=social",alt:"1. tiptap \u8f7b\u91cf\u7ea7\u5bcc\u6587\u672c\u7f16\u8f91\u5668"})))),Object(a.b)("p",null,"\u8f7b\u91cf\u7ea7\u800c\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <editor-content :editor=\"editor\" />\n</template>\n\n<script>\n// Import the editor\nimport { Editor, EditorContent } from 'tiptap'\n\nexport default {\n  components: {\n    EditorContent,\n  },\n  data() {\n    return {\n      editor: null,\n    }\n  },\n  mounted() {\n    this.editor = new Editor({\n      content: '<p>This is just a boring paragraph</p>',\n    })\n  },\n  beforeDestroy() {\n    this.editor.destroy()\n  },\n}\n<\/script>\n")))}l.isMDXComponent=!0},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(b,p(p({ref:t},l),{},{components:n})):a.a.createElement(b,p({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},364:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/fragment.qh9nkp02p2-7663d737cc843f7042eba33f300a57d0.png"},552:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/vue_fragment.0chl6w31ust8-b29a9cc9001cc9217120fa91883e3266.png"}}]);