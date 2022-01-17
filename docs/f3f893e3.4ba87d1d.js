(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{309:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),c=(r(0),r(361)),i={id:"performanceReactScheduler",title:"\u6027\u80fd\u4f18\u5316-react\u4efb\u52a1\u8c03\u914d",hide_title:!0,sidebar_label:"react \u624b\u52a8\u4e3a\u4efb\u52a1\u5206\u914d\u4f18\u5148\u7ea7"},o={unversionedId:"performance/performanceReactScheduler",id:"performance/performanceReactScheduler",isDocsHomePage:!1,title:"\u6027\u80fd\u4f18\u5316-react\u4efb\u52a1\u8c03\u914d",description:"react \u5355\u72ec\u5206\u79bb\u51fa scheduler \u5e93\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8be5\u5e93\u4e3a react \u4efb\u52a1\u5206\u914d\u4f18\u5148\u7ea7\u3002",source:"@site/docs/performance/react\u5206\u914d\u4efb\u52a1\u4f18\u5148\u7ea7.md",slug:"/performance/performanceReactScheduler",permalink:"/docs/performance/performanceReactScheduler",version:"current",sidebar_label:"react \u624b\u52a8\u4e3a\u4efb\u52a1\u5206\u914d\u4f18\u5148\u7ea7",sidebar:"performancedoc",previous:{title:"\u6027\u80fd\u4f18\u5316-\u5ef6\u8fdf\u6e32\u67d3\u4ee5\u53cajs\u5207\u7247",permalink:"/docs/performance/performanceJSplit"}},l=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"react")," \u5355\u72ec\u5206\u79bb\u51fa ",Object(c.b)("inlineCode",{parentName:"p"},"scheduler")," \u5e93\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8be5\u5e93\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"react")," \u4efb\u52a1\u5206\u914d\u4f18\u5148\u7ea7\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u5c06\u901a\u77e5\u5206\u914d\u4f4e\u4f18\u5148\u7ea7"',title:'"\u5c06\u901a\u77e5\u5206\u914d\u4f4e\u4f18\u5148\u7ea7"'}),'import {\n  unstable_LowPriority,\n  unstable_scheduleCallback\n} from "scheduler";\n\nfunction sendDeferredAnalyticsNotification(value) {\n  unstable_scheduleCallback(unstable_LowPriority, function() {\n    sendAnalyticsNotification(value);\n  });\n}\n')),Object(c.b)("p",null,"\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u4f9d\u6b21\u662f\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"Immediate")," \u7acb\u5373\u6267\u884c\u4f18\u5148\u7ea7\uff0c\u9700\u8981\u540c\u6b65\u6267\u884c\u7684\u4efb\u52a1\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"UserBlocking")," \u7528\u6237\u963b\u585e\u578b\u4f18\u5148\u7ea7\uff08250 ms \u540e\u8fc7\u671f\uff09\uff0c\u9700\u8981\u4f5c\u4e3a\u7528\u6237\u4ea4\u4e92\u7ed3\u679c\u8fd0\u884c\u7684\u4efb\u52a1\uff08\u4f8b\u5982\uff0c\u6309\u94ae\u70b9\u51fb\uff09\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"Normal")," \u666e\u901a\u4f18\u5148\u7ea7\uff085 s \u540e\u8fc7\u671f\uff09\uff0c\u4e0d\u5fc5\u8ba9\u7528\u6237\u7acb\u5373\u611f\u53d7\u5230\u7684\u66f4\u65b0\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"Low")," \u4f4e\u4f18\u5148\u7ea7\uff0810 s \u540e\u8fc7\u671f\uff09\uff0c\u53ef\u4ee5\u63a8\u8fdf\u4f46\u6700\u7ec8\u4ecd\u7136\u9700\u8981\u5b8c\u6210\u7684\u4efb\u52a1\uff08\u4f8b\u5982\uff0c\u5206\u6790\u901a\u77e5\uff09\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"Idle")," \u7a7a\u95f2\u4f18\u5148\u7ea7\uff08\u6c38\u4e0d\u8fc7\u671f\uff09\uff0c\u4e0d\u5fc5\u8fd0\u884c\u7684\u4efb\u52a1\uff08\u4f8b\u5982\uff0c\u9690\u85cf\u754c\u9762\u4ee5\u5916\u7684\u5185\u5bb9\uff09\u3002"))),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://philippspiess.com/scheduling-in-react/"}),"Scheduling in React")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://que01.top/2019/08/28/v16-Scheduling-in-React/"}),"React\u7684\u8c03\u5ea6-v16"))))}u.isMDXComponent=!0},361:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,f=b["".concat(i,".").concat(s)]||b[s]||m[s]||c;return r?a.a.createElement(f,o(o({ref:t},p),{},{components:r})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);