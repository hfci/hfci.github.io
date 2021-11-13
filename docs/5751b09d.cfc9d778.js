(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(7),o=(t(0),t(302)),c={id:"nodeErrorHandle",title:"\u53cb\u597d\u7684\u9519\u8bef\u63d0\u793a",hide_title:!0,sidebar_label:"node\u5982\u4f55\u53cb\u597d\u7684\u9519\u8bef\u63d0\u793a"},i={unversionedId:"node/basic/nodeErrorHandle",id:"node/basic/nodeErrorHandle",isDocsHomePage:!1,title:"\u53cb\u597d\u7684\u9519\u8bef\u63d0\u793a",description:"1. \u7740\u91cd\u663e\u793a\u9519\u8bef\u6d88\u606f\u53ca\u6587\u4ef6, \u5e76\u629b\u51fa trace",source:"@site/docs/node/basic/\u5982\u4f55\u5904\u7406\u9519\u8bef.md",slug:"/node/basic/nodeErrorHandle",permalink:"/docs/node/basic/nodeErrorHandle",version:"current",sidebar_label:"node\u5982\u4f55\u53cb\u597d\u7684\u9519\u8bef\u63d0\u793a",sidebar:"nodedoc",previous:{title:"\u81ea\u5b9a\u4e49\u6a21\u5757\u522b\u540d",permalink:"/docs/node/basic/nodeModuleAlias"},next:{title:"process(\u8fdb\u7a0b)",permalink:"/docs/node/nodeKnowledge"}},l=[],s={rightToc:l};function b(e){var n=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u7740\u91cd\u663e\u793a",Object(o.b)("inlineCode",{parentName:"li"},"\u9519\u8bef\u6d88\u606f\u53ca\u6587\u4ef6"),", \u5e76\u629b\u51fa ",Object(o.b)("inlineCode",{parentName:"li"},"trace"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function exitError (err) {\n  cli.showUsage()\n\n  if (err && err.message) {\n    console.log('\\x1b[31m')\n    console.trace(err)\n\n    if (err.message === 'Unable to determine the domain name') {\n      console.log('-> check your connection options to the docker daemon and confirm containers exist')\n    }\n    console.log('\\x1b[0m')\n  }\n\n  process.exit(-1)\n}\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"node_error_handle",src:t(521).default})),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u6355\u83b7\u5230\u9519\u8bef\uff0c\u8981\u4f7f\u7528\u6b63\u786e\u7684\u9000\u51fa\u4ee3\u7801\uff0c\u5426\u5219\u540e\u7eed\u7a0b\u5e8f\u5c06\u6309\u7167\u6b63\u5e38\u7684\u6d41\u7a0b\u7ee7\u7eed\u5f80\u4e0b\u8d70\u3002"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:"{6}","{6}":!0}),"try {\n  console.log(a)\n} catch (err) {\n  exitError(err)\n\n  process.exit(1)\n}\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0")," \u8868\u793a\u6210\u529f"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"1")," \u8868\u793a\u5931\u8d25")))))))}b.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(t),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},521:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/node_error_handle-454205acd574386fe058b8900402dc63.png"}}]);