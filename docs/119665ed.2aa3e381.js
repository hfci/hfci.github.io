(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{302:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,g=s["".concat(o,".").concat(f)]||s[f]||b[f]||a;return n?i.a.createElement(g,c(c({ref:t},l),{},{components:n})):i.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(7),a=(n(0),n(302)),o={},c={unversionedId:"enginee/configItems/gitattributes/_partial",id:"enginee/configItems/gitattributes/_partial",isDocsHomePage:!1,title:"_partial",description:".gitattributes",source:"@site/docs/enginee/configItems/gitattributes/_partial.md",slug:"/enginee/configItems/gitattributes/_partial",permalink:"/docs/enginee/configItems/gitattributes/_partial",version:"current"},u=[{value:".gitattributes",id:"gitattributes",children:[{value:"\u6700\u4f73\u914d\u7f6e",id:"\u6700\u4f73\u914d\u7f6e",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"gitattributes"},".gitattributes"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6bcf\u5f53\u6709\u6587\u4ef6\u4fdd\u5b58\u6216\u8005\u521b\u5efa\u65f6\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"git"),"\u4f1a\u6839\u636e\u6307\u5b9a\u7684\u5c5e\u6027\u6765\u81ea\u52a8\u5730\u4fdd\u5b58\u3002\u5f00\u53d1\u8005\u4f7f\u7528\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u9ed8\u8ba4\u7684\u6587\u4ef6\u7ed3\u5c3e\u884c\u5c31\u4f1a\u4e0d\u540c\u3002\u5728 Windows \u4e0a\u9ed8\u8ba4\u7684\u662f\u56de\u8f66\u6362\u884c\uff08Carriage Return Line Feed, CRLF\uff09\uff0c\u7136\u800c\uff0c\u5728 Linux/MacOS \u4e0a\u5219\u662f\u6362\u884c\uff08Line Feed, LF\uff09\u3002")),Object(a.b)("h3",{id:"\u6700\u4f73\u914d\u7f6e"},"\u6700\u4f73\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# \u81ea\u52a8\u8bc6\u522b\u6587\u4ef6\u662f\u5426\u4e3atext\n# \u4f7f\u7528 lf \u6362\u884c\u7b26\u8fdb\u884c\u5b58\u50a8\n* text=auto eol=lf\n\n# \u8986\u76d6\u90e8\u5206\u6587\u4ef6\u914d\u7f6e, checkout \u65f6\u66ff\u6362\u4e3a crlf.\n*.bat text eol=crlf\n")))}p.isMDXComponent=!0}}]);