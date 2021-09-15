(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(238)),o={id:"browserTask",title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",hide_title:!0,sidebar_label:"\u4e8b\u4ef6\u5faa\u73af"},c={unversionedId:"js/browserTask",id:"js/browserTask",isDocsHomePage:!1,title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",description:"\u4e8b\u4ef6\u5faa\u73af\u8fc7\u7a0b",source:"@site/docs/js/\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1.md",slug:"/js/browserTask",permalink:"/docs/js/browserTask",version:"current",sidebar_label:"\u4e8b\u4ef6\u5faa\u73af",sidebar:"jsdoc",previous:{title:"Proxy",permalink:"/docs/js/goods/jsProxy"},next:{title:"typescript\u7c7b\u578b",permalink:"/docs/js/typescript/typescriptTypes"}},l=[{value:"\u4e8b\u4ef6\u5faa\u73af\u8fc7\u7a0b",id:"\u4e8b\u4ef6\u5faa\u73af\u8fc7\u7a0b",children:[{value:"\u6bcf\u4e00\u5e27\u7684\u6267\u884c\u8fc7\u7a0b",id:"\u6bcf\u4e00\u5e27\u7684\u6267\u884c\u8fc7\u7a0b",children:[]}]},{value:"\u7279\u6027",id:"\u7279\u6027",children:[{value:"requestAnimationFrame",id:"requestanimationframe",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u4e8b\u4ef6\u5faa\u73af\u8fc7\u7a0b"},"\u4e8b\u4ef6\u5faa\u73af\u8fc7\u7a0b"),Object(i.b)("div",{style:{backgroundColor:"#FFFFFF"}},Object(i.b)("img",{src:n(404).default})),Object(i.b)("h3",{id:"\u6bcf\u4e00\u5e27\u7684\u6267\u884c\u8fc7\u7a0b"},"\u6bcf\u4e00\u5e27\u7684\u6267\u884c\u8fc7\u7a0b"),Object(i.b)("div",{style:{backgroundColor:"#FFFFFF"}},Object(i.b)("p",null,Object(i.b)("img",{alt:"event_loop",src:n(405).default}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u6267\u884c\u4e3b\u7ebf\u7a0b ",Object(i.b)("inlineCode",{parentName:"li"},"js stack"),"\u3002"),Object(i.b)("li",{parentName:"ol"},"\u6267\u884c\u76d1\u542c\u4e8b\u4ef6\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Handler"),"\u4ee5\u53ca\u6570\u636e\u8bf7\u6c42 ",Object(i.b)("inlineCode",{parentName:"li"},"response"),"\uff0c \u6bd4\u5982\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"\uff08inputEvent, clickEvent, scrollEvent\uff09"),"\u3002"),Object(i.b)("li",{parentName:"ol"},"\u6267\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"requestAnimationFrame")," \u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Layout"),"\u3002"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Paint"),"\u3002"),Object(i.b)("li",{parentName:"ol"},"\u5982\u679c\u5f53\u524d\u5e27\u8fd8\u6709\u7a7a\u95f2\u65f6\u95f4\uff0c\u6267\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"requestIdleCallback")," \u56de\u8c03\u51fd\u6570\u3002")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const now = performance.now()\ndocument.addEventListener('click', () => {\n  console.log('click-handler')\n})\nsetTimeout(() => {\n  console.log('timeout')\n})\nwhile (performance.now() - now < 5000) {}\nvoid Promise.resolve()\n  .then(() => {\n    console.log('micro-task')\n  })\nrequestAnimationFrame(() => {\n  console.log('requestAnimationFrame1')\n  requestAnimationFrame(() => {\n    console.log('requestAnimationFrame2')\n  })\n})\n")),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u6253\u5370\u7ed3\u679c\u4f9d\u6b21\u662f\uff1amicro-task\uff0cclick-handler\uff0crequestAnimationFrame1\uff0crequestAnimationFrame2\uff0ctimeout"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u5fae\u4efb\u52a1")," \u5c5e\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"JS Stack")," \u8fc7\u7a0b\uff0c\u4e00\u65e6\u4e3b\u7ebf\u7a0b ",Object(i.b)("inlineCode",{parentName:"li"},"js")," \u6267\u884c\u5b8c\u6bd5\uff0c\u7acb\u5373\u68c0\u9a8c ",Object(i.b)("inlineCode",{parentName:"li"},"\u5fae\u4efb\u52a1\u961f\u5217")," \u4f1a\u628a\u6240\u6709\u7684\u5fae\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u7136\u540e\u7ee7\u7eed\u5f80\u4e0b\u8d70\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5e76\u4e0d\u4f1a\u5728\u6bcf\u4e00\u5e27\u904d\u5386 ",Object(i.b)("inlineCode",{parentName:"li"},"\u5b8f\u4efb\u52a1\u961f\u5217"),"\uff0c\u6240\u4ee5 ",Object(i.b)("inlineCode",{parentName:"li"},"setTimeout")," \u7684\u6267\u884c\u65f6\u673a\u5e76\u4e0d\u786e\u5b9a\u3002")))),Object(i.b)("video",{controls:!0,autoplay:!0},Object(i.b)("source",{src:n(406).default,type:"video/mp4"})),Object(i.b)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),Object(i.b)("h3",{id:"requestanimationframe"},"requestAnimationFrame"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rAF")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"\u5fae\u4efb\u52a1\u961f\u5217")," \u4e00\u6837\uff0c\u4f1a\u628a\u961f\u5217\u4e2d\u6ce8\u518c\u7684\u6240\u6709 ",Object(i.b)("inlineCode",{parentName:"p"},"rAF handler")," \u4e00\u4e0b\u5904\u7406\u5b8c\u3002"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"setTimeout(() => {\n  console.log('timeout')\n})\nrequestAnimation(() => {\n  console.log(1)\n})\nconsole.log(3)\nrequestAnimation(() => {\n  console.log(2)\n})\n\n// \u6253\u5370\u987a\u5e8f\uff1a3\uff0c1\uff0c2\uff0ctimeout\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rAF")," \u5728\u9875\u9762\u5207\u6362\u4e5f\u5c31\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"tab")," \u4e0d\u662f\u6fc0\u6d3b\u72b6\u6001\u7684\u65f6\u5019\uff0c\u4f1a\u88ab\u51bb\u7ed3\u4e5f\u5c31\u662f\u4e0d\u6267\u884c\u3002\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e0b\u65b9\u5f0f ",Object(i.b)("inlineCode",{parentName:"p"},"polyfill"),"\uff1a"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var requestAnimationFrameWithTimeout = function(callback) {\n  // schedule rAF and also a setTimeout\n  rAFID = localRequestAnimationFrame(function(timestamp) {\n    // cancel the setTimeout\n    localClearTimeout(rAFTimeoutID);\n    callback(timestamp);\n  });\n  rAFTimeoutID = localSetTimeout(function() {\n    // cancel the requestAnimationFrame\n    localCancelAnimationFrame(rAFID);\n    callback(getCurrentTime());\n  }, ANIMATION_FRAME_TIMEOUT);\n};\n")),Object(i.b)("p",null,"\u6838\u5fc3\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"rAF")," \u4f18\u5148\u7ea7\u9ad8\u4e8esetTimeout\u3002\u5982\u679c\u9875\u9762\u6b63\u5728\u663e\u793a\u90a3\u4e48\u548crAF\u6ca1\u533a\u522b\uff0c\u56e0\u4e3asetTimeout\u4f1a\u88abrAF\u53d6\u6d88\uff0c\u4f46\u662f\u5982\u679c\u5728\u9875\u9762\u88ab\u9690\u85cf\u65f6\u5019\uff0c\u6b64\u65f6rAF\u5c31\u4e0d\u4f1a\u8fd0\u884c\u4e86\uff0c\u6b64\u65f6setTimeout\u4f1a\u63a5\u66ff\u5b83\u7684\u5de5\u4f5c\u3002"))}s.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},404:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1_atEwskfs0gtIryRrgnAPkw-925f3fa7f84bb8b970a1661cc486d54e.png"},405:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/event_loop-6a5e715b37fdda298a52a538ffaf7338.svg"},406:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/medias/e_loop-d6ad284fae6b3bcaf3d6ac92fb2a87f3.mp4"}}]);