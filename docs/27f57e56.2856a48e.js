(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(7),o=(t(0),t(350)),c={id:"unKnow",title:"\u65b0\u6536\u83b7\u7684js\u77e5\u8bc6\u70b9",hide_title:!0,sidebar_label:"\u7efc\u5408"},i={unversionedId:"js/goods/unKnow",id:"js/goods/unKnow",isDocsHomePage:!1,title:"\u65b0\u6536\u83b7\u7684js\u77e5\u8bc6\u70b9",description:"\u521b\u5efa\u6ce8\u91caDOM",source:"@site/docs/js/goods/\u5e72\u8d27.md",slug:"/js/goods/unKnow",permalink:"/docs/js/goods/unKnow",version:"current",sidebar_label:"\u7efc\u5408",sidebar:"jsdoc",previous:{title:"\u8bbe\u8ba1\u63d2\u4ef6\u7cfb\u7edf",permalink:"/docs/js/goods/jsCustomPlugin"},next:{title:"object\u77e5\u8bc6",permalink:"/docs/js/goods/jsObject"}},l=[{value:"\u521b\u5efa\u6ce8\u91caDOM",id:"\u521b\u5efa\u6ce8\u91cadom",children:[]},{value:"2. string \u8f6c location",id:"2-string-\u8f6c-location",children:[]}],p={rightToc:l};function s(e){var n=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u521b\u5efa\u6ce8\u91cadom"},"\u521b\u5efa\u6ce8\u91caDOM"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createComment()"),"\u65b9\u6cd5\u7528\u6765\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a\u6ce8\u91ca\u8282\u70b9\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const container = document.createComment('fragment#14289a5f52d#head')\n\nconst div1 = document.createElement('div')\ndiv1.innerHTML = '123'\ncontainer.appendChild(div1)\n\nconst div1 = document.createElement('div')\ndiv1.innerHTML = '789'\ncontainer.appendChild(div1)\n\ndocument.body.appendChild(container)\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"createComment",src:t(402).default})),Object(o.b)("h2",{id:"2-string-\u8f6c-location"},"2. string \u8f6c location"),Object(o.b)("p",null,"\u6bd4\u5982\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"www.baidu.com"),"\u5b57\u7b26\u4e32\u60f3\u8981\u548c",Object(o.b)("inlineCode",{parentName:"p"},"window.location"),"\u90a3\u6837\u4f7f\u7528\u3002"),Object(o.b)("p",null,"###1. \u8f6c\u6210",Object(o.b)("inlineCode",{parentName:"p"},"<a>"),"\u6807\u7b7e"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<a>"),"\u6807\u7b7e\u7684\u4e00\u4e9b\u5c5e\u6027\u548c",Object(o.b)("inlineCode",{parentName:"p"},"window.location"),"\u7684\u5c5e\u6027\u5dee\u4e0d\u591a\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function parseURL(url) {\n  var a =  document.createElement('a');\n  a.href = url\n  return {\n      source: url,\n      protocol: a.protocol.replace(':',''),\n      host: a.hostname,\n      port: a.port,\n      query: a.search,\n      params: (function(){\n          var ret = {},\n              seg = a.search.replace(/^?/,'').split('&'),\n              len = seg.length, i = 0, s;\n          for (;i<len;i++) {\n              if (!seg[i]) { continue; }\n              s = seg[i].split('=');\n              ret[s[0]] = s[1]\n          }\n          return ret\n      })(),\n      file: (a.pathname.match(//([^/?#]+)$/i) || [,''])[1],\n      hash: a.hash.replace('#',''),\n      path: a.pathname.replace(/^([^/])/,'/$1'),\n      relative: (a.href.match(/tps?://[^/]+(.+)/) || [,''])[1],\n      segments: a.pathname.replace(/^//,'').split('/')\n  }\n}\n")))}s.isMDXComponent=!0},350:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},402:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/fragment.qh9nkp02p2-7663d737cc843f7042eba33f300a57d0.png"}}]);