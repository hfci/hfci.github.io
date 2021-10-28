(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(7),c=(n(0),n(297)),a={id:"cssCubicBezier",title:"cubic-bezier",hide_title:!0,sidebar_label:"cubic-bezier"},o={unversionedId:"css/animation/cssCubicBezier",id:"css/animation/cssCubicBezier",isDocsHomePage:!1,title:"cubic-bezier",description:"\u67e5\u8be2 cubic-bezier \u51fd\u6570",source:"@site/docs/css/animation/cubic-bezier.md",slug:"/css/animation/cssCubicBezier",permalink:"/docs/css/animation/cssCubicBezier",version:"current",sidebar_label:"cubic-bezier",sidebar:"cssdoc",previous:{title:"css\u4e2d\u7684vertical-align",permalink:"/docs/css/attributes/cssVerticalAlign"},next:{title:"svg - dasharray&dashoffset",permalink:"/docs/css/animation/cssSvgStrokeDasharray"}},s=[{value:"\u67e5\u8be2 cubic-bezier \u51fd\u6570",id:"\u67e5\u8be2-cubic-bezier-\u51fd\u6570",children:[]},{value:"cubic-bezier \u8f6c js",id:"cubic-bezier-\u8f6c-js",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u67e5\u8be2-cubic-bezier-\u51fd\u6570"},"\u67e5\u8be2 cubic-bezier \u51fd\u6570"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://easings.net/"}),"https://easings.net/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://cubic-bezier.com/"}),"\u624b\u52a8\u5236\u4f5c\uff0c\u5e76\u652f\u6301\u5bfc\u5165\u51fd\u6570\u91cd\u65b0\u5236\u4f5c"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"cubic-bezier-\u8f6c-js"},"cubic-bezier \u8f6c js"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gre/bezier-easing"}),Object(c.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/gre/bezier-easing?label=bezier-easing&style=social",alt:"bezier-easing \u4f7f\u7528cubic-bezier\u51fd\u6570\u6839\u636ex\u8f74(time)\u8ba1\u7b97y\u8f74(\u4f4d\u79fb)"})))),Object(c.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"cubic-bezier"),"\u51fd\u6570\u6839\u636e",Object(c.b)("inlineCode",{parentName:"p"},"x\u8f74"),"\u8ba1\u7b97",Object(c.b)("inlineCode",{parentName:"p"},"y\u8f74"),"\u503c\u7684\u5e93\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import BezierEasing from 'bezier-easing'\n\nconst easing = BezierEasing(0.25, 0.1, 0.11, 1.44)\n\n\nconst start = Date.now()\n// \u8fd0\u52a8\u603b\u65f6\u957f\nconst totalTime = 300\n// \u8fd0\u52a8\u603b\u4f4d\u7f6e\nconst translate = 1000\nconst loop = () => {\n  const p = (Date.now() - start) / totalTime\n  if (p >= 1) {\n    requestAnimationFrame(() => {\n      this.setStyle(translate)\n    })\n  } else {\n    requestAnimationFrame(() => {\n      this.setStyle(easing(p) * translate)\n      loop()\n    })\n  }\n}\nloop()\n")))}l.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||c;return n?i.a.createElement(f,o(o({ref:t},b),{},{components:n})):i.a.createElement(f,o({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var b=2;b<c;b++)a[b]=n[b];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);