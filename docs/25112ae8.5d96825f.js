(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{314:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},O=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=l(n),m=a,d=O["".concat(c,".").concat(m)]||O[m]||j[m]||b;return n?r.a.createElement(d,o(o({ref:t},p),{},{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<b;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=(n(0),n(314));const b={id:"cookiesAttack",title:"\u5e38\u89c1\u7684Cookie\u653b\u51fb\u65b9\u5f0f",hide_title:!0,sidebar_label:"Cookie\u653b\u51fb\u65b9\u5f0f"},c={unversionedId:"other/cookies/cookiesAttack",id:"other/cookies/cookiesAttack",isDocsHomePage:!1,title:"\u5e38\u89c1\u7684Cookie\u653b\u51fb\u65b9\u5f0f",description:"CSRF",source:"@site/docs/other/cookies/\u653b\u51fb.md",slug:"/other/cookies/cookiesAttack",permalink:"/docs/other/cookies/cookiesAttack",version:"current",sidebar_label:"Cookie\u653b\u51fb\u65b9\u5f0f",sidebar:"otherdoc",previous:{title:"Cookie\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/other/cookies/cookiesBaseAttr"},next:{title:"vscode\u5e38\u7528\u5feb\u6377\u952e",permalink:"/docs/other/vscode/vscodeShortcutKey"}},o=[{value:"CSRF",id:"csrf",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[{value:"\u9a8c\u8bc1<code>HTTP Referer</code>",id:"\u9a8c\u8bc1http-referer",children:[]},{value:"\u6dfb\u52a0<code>Token</code>\u6821\u9a8c",id:"\u6dfb\u52a0token\u6821\u9a8c",children:[]},{value:"SameSite",id:"samesite",children:[]}]}],i={rightToc:o};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"csrf"},"CSRF"),Object(r.b)("p",null,"CSRF(Cross Site Request Forgery","[\u02c8f\u0254\u02d0d\u0292\u0259ri]",": \u4f2a\u9020) \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff0c\u4e5f\u5c31\u662f\u901a\u8fc7\u4e00\u4e2a\u94fe\u63a5\u4f2a\u9020\u53e6\u4e00\u4e2a\u5e26\u6709\u6b63\u786e",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\u7684",Object(r.b)("inlineCode",{parentName:"p"},"Http"),"\u8bf7\u6c42\u3002"),Object(r.b)("p",null,"\u4e3e\u4f8b\u8bf4\u660e:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u7528\u6237\u767b\u9646\u4e86\u94f6\u884c\u7f51\u7ad9",Object(r.b)("inlineCode",{parentName:"p"},"your-bank.com"),"\uff0c\u94f6\u884c\u670d\u52a1\u5668\u53d1\u6765\u4e86\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\u3002\u7528\u6237\u540e\u6765\u53c8\u8bbf\u95ee\u4e86\u6076\u610f\u7f51\u7ad9",Object(r.b)("inlineCode",{parentName:"p"},"malicious.com"),"\uff0c\u4e0a\u9762\u6709\u4e00\u4e2a\u8868\u5355\u3002",Object(r.b)("inlineCode",{parentName:"p"},'<form action="your-bank.com/transfer" method="POST"></form>'),"\u7528\u6237\u4e00\u65e6\u88ab\u8bf1\u9a97\u53d1\u9001\u8fd9\u4e2a\u8868\u5355\uff0c\u94f6\u884c\u7f51\u7ad9\u5c31\u4f1a\u6536\u5230\u5e26\u6709\u6b63\u786e Cookie \u7684\u8bf7\u6c42\u3002")),Object(r.b)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),Object(r.b)("h3",{id:"\u9a8c\u8bc1http-referer"},"\u9a8c\u8bc1",Object(r.b)("inlineCode",{parentName:"h3"},"HTTP Referer")),Object(r.b)("p",null,"\u8bf7\u6c42\u5230\u540e\u53f0\u65f6\uff0c\u5224\u65ad\u4e0b\u8bf7\u6c42\u662f\u5426\u6765\u81ea\u81ea\u5df1\u7684\u7ad9\u70b9\uff0c\u5982\u679c\u4e0d\u662f",Object(r.b)("inlineCode",{parentName:"p"},"Referer"),"\u7684\u503c\u4e0d\u662f\u4ee5\u81ea\u5df1\u57df\u540d\u5f00\u5934\uff0c\u5219\u4f1a\u8bf7\u6c42\u5931\u8d25\u3002"),Object(r.b)("h3",{id:"\u6dfb\u52a0token\u6821\u9a8c"},"\u6dfb\u52a0",Object(r.b)("inlineCode",{parentName:"h3"},"Token"),"\u6821\u9a8c"),Object(r.b)("p",null,"\u6839\u636e\u8bf7\u6c42\u53c2\u6570\u524d\u7aef\u540e\u624d\u7528\u540c\u6837\u7684\u52a0\u5bc6\u65b9\u6cd5\uff0c\u751f\u6210\u4e00\u4e2a\u6821\u9a8c",Object(r.b)("inlineCode",{parentName:"p"},"Token"),"\uff0c\u5982\u679c\u4fee\u6539\u4e86\u53c2\u6570\u90a3\u4e48",Object(r.b)("inlineCode",{parentName:"p"},"Token"),"\u5c31\u6821\u9a8c\u4e0d\u901a\u8fc7"),Object(r.b)("h3",{id:"samesite"},"SameSite"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\u7684",Object(r.b)("inlineCode",{parentName:"p"},"SameSite"),"\u5c5e\u6027\u7528\u6765\u9650\u5236\u7b2c\u4e09\u65b9",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\uff0c\u4ece\u800c\u51cf\u5c11\u5b89\u5168\u98ce\u9669"),Object(r.b)("p",null,"\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u4e09\u4e2a\u503c\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Strict ",Object(r.b)("inlineCode",{parentName:"li"},"([str\u026akt]: \u4e25\u683c\u7684)")),Object(r.b)("li",{parentName:"ul"},"Lax    ",Object(r.b)("inlineCode",{parentName:"li"},"([l\xe6ks]: \u677e\u61c8\u7684)")),Object(r.b)("li",{parentName:"ul"},"None")),Object(r.b)("p",null,"3.1 ",Object(r.b)("inlineCode",{parentName:"p"},"Strict"),"\u6700\u4e3a\u4e25\u683c\uff0c\u5b8c\u5168\u7981\u6b62\u7b2c\u4e09\u65b9",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\uff0c\u8de8\u7ad9\u70b9\u65f6\uff0c\u4efb\u4f55\u60c5\u51b5\u4e0b\u90fd\u4e0d\u4f1a\u53d1\u9001",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\u3002\u6362\u8a00\u4e4b\uff0c\u53ea\u6709\u5f53\u524d\u7f51\u9875\u7684",Object(r.b)("inlineCode",{parentName:"p"},"URL"),"\u4e0e\u8bf7\u6c42\u76ee\u6807\u4e00\u81f4\uff0c\u624d\u4f1a\u5e26\u4e0a",Object(r.b)("inlineCode",{parentName:"p"},"Cookie")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Set-Cookie: CookieName=CookieValue; SameSite=Strict;\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u89c4\u5219\u8fc7\u4e8e\u4e25\u683c\uff0c\u53ef\u80fd\u9020\u6210\u975e\u5e38\u4e0d\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002\u6bd4\u5982\uff0c\u5f53\u524d\u7f51\u9875\u6709\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"GitHub"),"\u94fe\u63a5\uff0c\u7528\u6237\u70b9\u51fb\u8df3\u8f6c\u5c31\u4e0d\u4f1a\u5e26\u6709",Object(r.b)("inlineCode",{parentName:"p"},"GitHub"),"\u7684",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\uff0c\u8df3\u8f6c\u8fc7\u53bb\u603b\u662f\u672a\u767b\u9646\u72b6\u6001")),Object(r.b)("p",null,"3.2 ",Object(r.b)("inlineCode",{parentName:"p"},"Lax"),"\u89c4\u5219\u7a0d\u7a0d\u653e\u5bbd\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e5f\u662f\u4e0d\u53d1\u9001\u7b2c\u4e09\u65b9",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\uff0c\u4f46\u662f\u5bfc\u822a\u5230\u76ee\u6807\u7f51\u5740\u7684",Object(r.b)("inlineCode",{parentName:"p"},"Get"),"\u8bf7\u6c42\u9664\u5916"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Set-Cookie: CookieName=CookieValue; SameSite=Lax;\n")),Object(r.b)("p",null,"\u5bfc\u822a\u5230\u76ee\u6807\u7f51\u5740\u7684",Object(r.b)("inlineCode",{parentName:"p"},"GET"),"\u8bf7\u6c42\uff0c\u53ea\u5305\u62ec\u4e09\u79cd\u60c5\u51b5\uff1a\u94fe\u63a5\uff0c\u9884\u52a0\u8f7d\u8bf7\u6c42\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"GET"),"\u8868\u5355\u3002\u8be6\u89c1\u4e0b\u8868"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("strong",{parentName:"th"},"\u8bf7\u6c42\u7c7b\u578b")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("strong",{parentName:"th"},"\u793a\u4f8b")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("strong",{parentName:"th"},"\u6b63\u5e38\u60c5\u51b5")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("strong",{parentName:"th"},"Lax")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u94fe\u63a5"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'<a href="\\.\\.\\."></a>')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u9884\u52a0\u8f7d"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'<link rel="prerender" href="\\.\\.\\."/>')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"GET \u8868\u5355"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'<form method="GET" action="\\.\\.\\.">')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"POST \u8868\u5355"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'<form method="POST" action="\\.\\.\\.">')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4e0d\u53d1\u9001")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"iframe"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'<iframe src="\\.\\.\\."></iframe>')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4e0d\u53d1\u9001")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"AJAX"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'$\\.get\\("\\.\\.\\."\\)')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4e0d\u53d1\u9001")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Image"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'<img src="\\.\\.\\.">')),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u53d1\u9001 Cookie"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4e0d\u53d1\u9001")))),Object(r.b)("p",null,"3.3 ",Object(r.b)("inlineCode",{parentName:"p"},"None")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Chrome"),"\u8ba1\u5212\u5c06",Object(r.b)("inlineCode",{parentName:"p"},"Lax"),"\u53d8\u4e3a\u9ed8\u8ba4\u8bbe\u7f6e\u3002\u8fd9\u65f6\uff0c\u7f51\u7ad9\u53ef\u4ee5\u9009\u62e9\u663e\u5f0f\u5173\u95ed",Object(r.b)("inlineCode",{parentName:"p"},"SameSite"),"\u5c5e\u6027\uff0c\u5c06\u5176\u8bbe\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"None"),"\u3002\u4e0d\u8fc7\uff0c\u524d\u63d0\u662f\u5fc5\u987b\u540c\u65f6\u8bbe\u7f6e",Object(r.b)("inlineCode",{parentName:"p"},"Secure"),"\u5c5e\u6027\uff08",Object(r.b)("inlineCode",{parentName:"p"},"Cookie"),"\u53ea\u80fd\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"HTTPS"),"\u534f\u8bae\u53d1\u9001\uff09\uff0c\u5426\u5219\u65e0\u6548\u3002"),Object(r.b)("p",null,"\u4e0b\u9762\u7684\u8bbe\u7f6e\u65e0\u6548:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Set-Cookie: widget_session=abc123; SameSite=None\n")),Object(r.b)("p",null,"\u4e0b\u9762\u7684\u8bbe\u7f6e\u6709\u6548:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Set-Cookie: widget_session=abc123; SameSite=None; Secure\n")))}p.isMDXComponent=!0}}]);