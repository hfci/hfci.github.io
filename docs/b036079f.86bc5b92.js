(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{361:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||c;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(361));const c={},o={unversionedId:"react/goods/performance/_batchUpdate",id:"react/goods/performance/_batchUpdate",isDocsHomePage:!1,title:"_batchUpdate",description:"\u6279\u91cf\u66f4\u65b0",source:"@site/docs/react/goods/performance/_batchUpdate.md",slug:"/react/goods/performance/_batchUpdate",permalink:"/docs/react/goods/performance/_batchUpdate",version:"current"},i=[{value:"\u6279\u91cf\u66f4\u65b0",id:"\u6279\u91cf\u66f4\u65b0",children:[{value:"unstable_batchedUpdates",id:"unstable_batchedupdates",children:[]}]}],u={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6279\u91cf\u66f4\u65b0"},"\u6279\u91cf\u66f4\u65b0"),Object(a.b)("h3",{id:"unstable_batchedupdates"},"unstable_batchedUpdates"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"setTimeout"),"\u4e2d\u66f4\u65b0\u662f\u540c\u6b65\u7684")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u6e32\u67d3\u591a\u6b21"',title:'"\u6e32\u67d3\u591a\u6b21"'}),"function Item() {\n  const [num, setNum] = React.useState(1)\n  function clickEvent() {\n    // highlight-start\n    setTimeout(() => {\n      setNum(2)\n      setNum(3)\n    }, 0)\n    // highlight-end\n  }\n  return <div onClick={clickEvent}>child {num}</div>\n}\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"Promise"),"\u4e2d\u66f4\u65b0\u662f\u540c\u6b65\u7684")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u8bf7\u6c42\u6570\u636e\u5b8c\u6210\u540esetState\u6267\u884c\u591a\u6b21"',title:'"\u8bf7\u6c42\u6570\u636e\u5b8c\u6210\u540esetState\u6267\u884c\u591a\u6b21"'}),"function Item() {\n  console.log('child render')\n\n  const [num, setNum] = React.useState(1)\n  const [num1, setNum1] = React.useState(1)\n  React.useEffect(() => {\n    async function loadData() {\n      await window.fetch(window.location.href)\n      // \u6267\u884c\u591a\u6b21\n      setNum(3)\n      setNum1(2)\n    }\n    loadData()\n  }, [])\n  return (\n    <div id='item'>\n      child {num} {num1}\n    </div>\n  )\n}\n")),Object(a.b)("p",null,"3\u3001\u539f\u751f DOM \u4e8b\u4ef6\u4e2d\u66f4\u65b0\u662f\u540c\u6b65\u7684"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u975ereact\u5408\u6210\u4e8b\u4ef6\uff0c\u76f4\u63a5\u7ed1\u5b9aDOM\u4e8b\u4ef6setState\u6267\u884c\u591a\u6b21"',title:'"\u975ereact\u5408\u6210\u4e8b\u4ef6\uff0c\u76f4\u63a5\u7ed1\u5b9aDOM\u4e8b\u4ef6setState\u6267\u884c\u591a\u6b21"'}),"function Item() {\n  const [num, setNum] = React.useState(1)\n  React.useEffect(() => {\n    document.querySelector('#item')?.addEventListener('click', () => {\n      setNum(2)\n      setNum(6)\n    })\n  }, [])\n  return <div id='item'>child {num}</div>\n}\n")))}l.isMDXComponent=!0}}]);