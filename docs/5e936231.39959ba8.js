(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(314));const c={id:"reactNoticeUseEffect",title:"react useEffect",hide_title:!0,sidebar_label:"useEffect"},o={unversionedId:"react/notice/reactNoticeUseEffect",id:"react/notice/reactNoticeUseEffect",isDocsHomePage:!1,title:"react useEffect",description:"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",source:"@site/docs/react/notice/useEffect.md",slug:"/react/notice/reactNoticeUseEffect",permalink:"/docs/react/notice/reactNoticeUseEffect",version:"current",sidebar_label:"useEffect",sidebar:"reactdoc",previous:{title:"react bailout",permalink:"/docs/react/performance/reactBailout"},next:{title:"react-typescript \u57fa\u7840\u7c7b\u578b",permalink:"/docs/react/typescript/reactTypescriptBase"}},i=[{value:"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",id:"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",children:[{value:"1. \u5f02\u6b65\u6267\u884c\u5b8c\u6bd5\uff0c\u7ec4\u4ef6\u5df2\u7ecf\u5378\u8f7d\u3002",id:"1-\u5f02\u6b65\u6267\u884c\u5b8c\u6bd5\uff0c\u7ec4\u4ef6\u5df2\u7ecf\u5378\u8f7d\u3002",children:[]}]}],s={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898"},"\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898"),Object(a.b)("h3",{id:"1-\u5f02\u6b65\u6267\u884c\u5b8c\u6bd5\uff0c\u7ec4\u4ef6\u5df2\u7ecf\u5378\u8f7d\u3002"},"1. \u5f02\u6b65\u6267\u884c\u5b8c\u6bd5\uff0c\u7ec4\u4ef6\u5df2\u7ecf\u5378\u8f7d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useEffect} from 'react';\n\nexport default function UseEffectWithRaceCondition() {\n  const [todo, setTodo] = useState(null);\n  useEffect(() => {\n    const fetchData = async () => {\n      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n      const newData = await response.json();\n      setTodo(newData);\n    };\n    fetchData();\n  }, []);\n\n  if (data) {\n    return <div>{data.title}</div>;\n  } else {\n    return null;\n  }\n}\n")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u5f53\u5f02\u6b65\u8bf7\u6c42\u6267\u884c\u5b8c\u6bd5\uff0c\u66f4\u65b0 ",Object(a.b)("inlineCode",{parentName:"p"},"state")," \u7684\u65f6\u5019\uff0c\u6709\u53ef\u80fd\u5f53\u524d ",Object(a.b)("inlineCode",{parentName:"p"},"\u7ec4\u4ef6\u88ab\u5378\u8f7d")," \u4e86\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u4f1a\u5f15\u53d1 ",Object(a.b)("inlineCode",{parentName:"p"},"\u5185\u5b58\u6cc4\u6f0f")," \u95ee\u9898\u3002"),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5e94\u8be5\u548c ",Object(a.b)("inlineCode",{parentName:"p"},"vue beforeDestroy")," \u4e00\u6837\uff0c\u5728\u7ec4\u4ef6\u5378\u8f7d\u4e4b\u524d\uff0c\u5e94\u8be5\u6e05\u9664\u6389\u6240\u6709\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"\u5b9a\u65f6\u5668\uff1b\u8ba2\u9605\uff1b\u5f02\u6b65\u4efb\u52a1")," \u7b49\u7b49\u3002"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{8,15}","{8,15}":!0}),"export default function UseEffectWithRaceCondition() {\n  const [todo, setTodo] = useState(null);\n  useEffect(() => {\n    let isComponentMounted = true\n\n    const fetchData = async () => {\n      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n      if (isComponentMounted) {\n        const newData = await response.json();\n        setTodo(newData);\n      }\n    };\n    fetchData();\n    return () => {\n      isComponentMounted = false\n    }\n  }, []);\n\n  if (data) {\n    return <div>{data.title}</div>;\n  } else {\n    return null;\n  }\n}\n")))))))}p.isMDXComponent=!0},314:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(o,".").concat(f)]||u[f]||d[f]||c;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);