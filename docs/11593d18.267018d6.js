(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{339:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(f,u(u({ref:t},l),{},{components:n})):a.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},385:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debug-output-fetch-error-case-3f528a8c7fc9b376094dc3145b53bf9f.png"},41:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),o=(n(0),n(339)),c={},u={unversionedId:"react/goods/hook/_useDebugValue",id:"react/goods/hook/_useDebugValue",isDocsHomePage:!1,title:"_useDebugValue",description:"useDebugValue",source:"@site/docs/react/goods/hook/_useDebugValue.md",slug:"/react/goods/hook/_useDebugValue",permalink:"/docs/react/goods/hook/_useDebugValue",version:"current"},i=[{value:"useDebugValue",id:"usedebugvalue",children:[]}],l={rightToc:i};function s(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usedebugvalue"},"useDebugValue"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5728 React \u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u663e\u793a\u81ea\u5b9a\u4e49 hook \u7684\u6807\u7b7e\uff0c\u4e3b\u8981\u7528\u6765\u8c03\u8bd5\u4f7f\u7528")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function useFriendStatus(friendID) {\n  const [isOnline, setIsOnline] = useState(null)\n  // \u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u7684\u8fd9\u4e2a Hook \u65c1\u8fb9\u663e\u793a\u6807\u7b7e\n  // e.g. \"FriendStatus: Online\"\n  useDebugValue(isOnline ? 'Online' : 'Offline')\n  return isOnline\n}\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"react-usedebugvalue",src:n(385).default})),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u5171\u4eab\u5e93\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a hook \u5c31\u6709\u5f88\u5927\u7684\u4ef7\u503c"),Object(o.b)("li",{parentName:"ul"},"\u5ef6\u8fdf\u683c\u5f0f\u5316 debug \u503c\uff1auseDebugValue \u63a5\u53d7\u4e00\u4e2a\u683c\u5f0f\u5316\u51fd\u6570\u4f5c\u4e3a\u53ef\u9009\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002\u8be5\u51fd\u6570\u53ea\u6709\u5728 Hook \u88ab\u68c0\u67e5\u65f6\u624d\u4f1a\u88ab\u8c03\u7528\u3002\u5b83\u63a5\u53d7 debug \u503c\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u4e14\u4f1a\u8fd4\u56de\u4e00\u4e2a\u683c\u5f0f\u5316\u7684\u663e\u793a\u503c\u3002")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"useDebugValue(date, date => formatData(date))\n")))))}s.isMDXComponent=!0}}]);