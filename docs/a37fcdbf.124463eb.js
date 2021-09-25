(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(237)),c={id:"performanceJSplit",title:"\u6027\u80fd\u4f18\u5316-\u5ef6\u8fdf\u6e32\u67d3\u4ee5\u53cajs\u5207\u7247",hide_title:!0,sidebar_label:"\u5ef6\u8fdf\u6e32\u67d3 & js\u5207\u7247"},i={unversionedId:"performance/performanceJSplit",id:"performance/performanceJSplit",isDocsHomePage:!1,title:"\u6027\u80fd\u4f18\u5316-\u5ef6\u8fdf\u6e32\u67d3\u4ee5\u53cajs\u5207\u7247",description:"\u5ef6\u8fdf\u6e32\u67d3",source:"@site/docs/performance/\u5ef6\u8fdf\u6e32\u67d3\u548cjs\u5207\u7247.md",slug:"/performance/performanceJSplit",permalink:"/docs/performance/performanceJSplit",version:"current",sidebar_label:"\u5ef6\u8fdf\u6e32\u67d3 & js\u5207\u7247",sidebar:"performancedoc",next:{title:"\u6027\u80fd\u4f18\u5316-react\u4efb\u52a1\u8c03\u914d",permalink:"/docs/performance/performanceReactScheduler"}},p=[{value:"\u5ef6\u8fdf\u6e32\u67d3",id:"\u5ef6\u8fdf\u6e32\u67d3",children:[{value:"\u9501",id:"\u9501",children:[]}]},{value:"js \u5207\u7247",id:"js-\u5207\u7247",children:[{value:"\u9012\u5f52",id:"\u9012\u5f52",children:[]}]}],l={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u5ef6\u8fdf\u6e32\u67d3"},"\u5ef6\u8fdf\u6e32\u67d3"),Object(o.b)("p",null,"\u56e0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"requestAnimationFrame")," \u7684\u7279\u6027\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"\u6bcf\u4e00\u5e27\u6e32\u67d3\u4e4b\u524d\u6267\u884c"),"\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u5176\u505a\u5ef6\u8fdf\u6e32\u67d3\uff0c\u6216\u8005\u53eb\u505a ",Object(o.b)("inlineCode",{parentName:"p"},"\u6e32\u67d3\u5207\u7247"),"\u3002"),Object(o.b)("h3",{id:"\u9501"},"\u9501"),Object(o.b)("p",null,"\u4f8b\u5982\uff1a\u6ed1\u52a8\u7684\u65f6\u5019\u53bb\u8bbe\u7f6e\u6837\u5f0f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"$box.on('mousemove',function(e){\n  requestAnimationFrame(function(){\n    $point.css({\n      top : e.pageY,\n      left : e.pageX\n    })\n  })\n});\n")),Object(o.b)("p",null,"\u8fd9\u6837\u5c31\u4f1a\u6709\u95ee\u9898\uff0c\u56e0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"rAF\u961f\u5217")," \u4f1a\u5728\u6e32\u67d3\u4e4b\u524d\uff0c\u4e00\u6b21\u6e05\u7a7a\u6240\u6709\u7684\u4efb\u52a1\uff0c\u6240\u4ee5\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u53ea\u4e0d\u8fc7\u662f\u5c06\u8bbe\u7f6e\u6837\u5f0f\u8fd9\u4e2a\u52a8\u4f5c\uff0c\u653e\u5230\u4e86\u4e0b\u4e00\u5e27\uff0c\u5e76\u4e0d\u80fd\u8fbe\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"\u5207\u7247")," \u7684\u76ee\u7684\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5229\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"\u9501")," \u6765\u9501\u5b9a\u64cd\u4f5c\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"var locked = false;\n$box.on('mousemove',function(e){\n  if(!locked){\n    requestAnimationFrame(function(){\n      changeCSS(e);\n    });\n    locked = true;\n  }else {\n    return;\n  }\n});\nfunction changeCSS(e) {\n  $point.css({\n    top : e.pageY,\n    left : e.pageX\n  })\n  locked = false;\n}\n")),Object(o.b)("h2",{id:"js-\u5207\u7247"},"js \u5207\u7247"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"requestAnimationFrame")," \u7684\u6267\u884c\u65f6\u673a\u662f\u5728\u9875\u9762\u91cd\u7ed8\u4e4b\u524d\uff0c\u6211\u4eec\u77e5\u9053\u6d4f\u89c8\u5668\u4e2d ",Object(o.b)("inlineCode",{parentName:"p"},"JS")," \u7684\u6267\u884c\u662f\u4f1a\u963b\u585e\u9875\u9762\u6e32\u67d3\u7684\uff0c\u6240\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"requestAnimationFrame")," \u7684\u6267\u884c\u65f6\u673a\u540c\u6837\u4ee3\u8868\u7740\u5f53\u524d ",Object(o.b)("inlineCode",{parentName:"p"},"JS")," \u7ebf\u7a0b\u7684\u7a7a\u95f2\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7ed9\u5927\u7684\u6570\u91cf\uff0c\u6765\u505a\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"\u5207\u7247"),"\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u5835\u8f66\u4e86\u3002"),Object(o.b)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),Object(o.b)("p",null,"\u7528\u9012\u5f52\u7684\u65b9\u5f0f\uff0c\u53bb\u521b\u5efa\u5206\u5206\u5e27\u64cd\u4f5c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"$(function(){\n  var lazyLoadList = [A,B,C,D];\n  var load = function() {\n    var module = lazyLoadList.shift();\n    if(module) {\n      new module();\n      window.requestAnimationFrame(load); //\u5199\u4e2a\u9012\u5f52\n    }\n  }\n  window.requestAnimationFrame(load);\n})\n")))}u.isMDXComponent=!0},237:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(t),s=r,d=b["".concat(c,".").concat(s)]||b[s]||m[s]||o;return t?a.a.createElement(d,i(i({ref:n},l),{},{components:t})):a.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);