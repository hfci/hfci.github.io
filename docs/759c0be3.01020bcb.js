(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),c=(a(0),a(302)),o={id:"reactHook",title:"react Hook",hide_title:!0,sidebar_label:"reactHook"},i={unversionedId:"react/goods/reactHook",id:"react/goods/reactHook",isDocsHomePage:!1,title:"react Hook",description:"1. useState",source:"@site/docs/react/goods/hook.md",slug:"/react/goods/reactHook",permalink:"/docs/react/goods/reactHook",version:"current",sidebar_label:"reactHook",sidebar:"reactdoc",previous:{title:"react\u4e2d\u7684\u7c7b\u578b",permalink:"/docs/react/goods/reactType"},next:{title:"react \u6700\u4f73\u5b9e\u8df5",permalink:"/docs/react/goods/reactBest"}},b=[{value:"1. useState",id:"1-usestate",children:[{value:"1 \u6ce8\u610f\u4e8b\u9879",id:"1-\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"2. useEffect",id:"2-useeffect",children:[{value:"1. \u57fa\u672c\u7528\u6cd5",id:"1-\u57fa\u672c\u7528\u6cd5",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[{value:"1. useState\u5b9e\u73b0\u539f\u7406 - imweb",id:"1-usestate\u5b9e\u73b0\u539f\u7406---imweb",children:[]},{value:"2. \u4e00\u7bc7\u770b\u61c2 React Hooks",id:"2-\u4e00\u7bc7\u770b\u61c2-react-hooks",children:[]},{value:"3. \u7406\u89e3\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4ee5\u53cahook - \u5b8c\u5168\u6307\u5357",id:"3-\u7406\u89e3\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4ee5\u53cahook---\u5b8c\u5168\u6307\u5357",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-usestate"},"1. useState"),Object(c.b)("h3",{id:"1-\u6ce8\u610f\u4e8b\u9879"},"1 \u6ce8\u610f\u4e8b\u9879"),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u591a\u6b21\u6e32\u67d3\u95ee\u9898")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"setState"),"\u8bbe\u7f6e\u548c\u4e4b\u524d\u72b6\u6001\u76f8\u540c\u7684\u503c\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"React"),"\u6709\u53ef\u80fd\u8fd8\u4f1a\u6e32\u67d3\u5f53\u524d\u7ec4\u4ef6\u3002",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update"}),"\u5b98\u65b9\u8bf4\u660e")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function Component (){\n  const [state, setState] = useState('foo')\n  const onClick = () => setState('foo')\n  console.log(state) // \u6253\u5f00\u63a7\u5236\u53f0\u67e5\u770b\n  return <button onClick={onClick}> Change </button>\n}\n")),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"\u5728\u6309\u4e0b\u6309\u94ae\u4e4b\u524d\uff0cconsole\u4ec5\u6253\u5370null"),Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b21\u6309\u4e0b\u6309\u94ae\u8fdb\u884cconsole\u6253\u5370foo"),Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e8c\u6b21\u6309\u94ae\u662f\u6309\u4e0bconsole\u6253\u5370foo"),Object(c.b)("li",{parentName:"ol"},"\u7b2c\u4e09\u6b21\u53ca\u4ee5\u540econsole\u4e0d\u6253\u5370\u4efb\u4f55\u5185\u5bb9")),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u7ed3\u8bba")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"setState"),"\u8bbe\u7f6e\u76f8\u540c\u7684\u503c\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"render"),"\u4f1a\u6267\u884c\u4e24\u6b21\uff0c\u540e\u7eed\u4e0d\u518d\u6267\u884c")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bbe\u7f6e\u76f8\u540c\u7684\u503c\uff0c\u5e76\u4e0d\u4f1a\u89e6\u53d1\u5b50\u7ec4\u4ef6\u7684",Object(c.b)("inlineCode",{parentName:"p"},"render"),"\uff0c\u800c\u4e14\u4e0d\u4f1a\u89e6\u53d1\u526f\u4f5c\u7528",Object(c.b)("inlineCode",{parentName:"p"},"useEffect"),"\uff0c\u6e32\u67d3\u6027\u80fd\u4e0d\u662f\u95ee\u9898")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5982\u679c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5185\u90e8\u6709\u590d\u6742\u7684\u903b\u8f91\u8ba1\u7b97\u5c31\u4f1a\u5b58\u5728\u8ba1\u7b97\u6027\u80fd\u5f00\u9500")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5982\u679c",Object(c.b)("inlineCode",{parentName:"p"},"useState"),"\u7684\u521d\u59cb\u503c\u662f\u590d\u6742\u7684\u903b\u8f91\u8ba1\u7b97\uff0c\u53ef\u4ee5\u4f20\u5165\u51fd\u6570\u6765\u8fd4\u56de\u521d\u59cb\u503c\uff0c\u8fd9\u6837\u591a\u6b21",Object(c.b)("inlineCode",{parentName:"p"},"render"),"\u4e5f\u53ea\u4f1a\u6267\u884c\u4e00\u6b21"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const [state, setState] = useState(() => {\n  const initialState = someExpensiveComputation(props);\n  return initialState;\n});\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u51fd\u6570\u4f53\u5185\u7684\u590d\u6742\u8ba1\u7b97\u53ef\u4ee5\u901a\u8fc7",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usememo"}),"usememo"),"\u6765\u4f18\u5316"))))))))),Object(c.b)("h2",{id:"2-useeffect"},"2. useEffect"),Object(c.b)("h3",{id:"1-\u57fa\u672c\u7528\u6cd5"},"1. \u57fa\u672c\u7528\u6cd5"),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u6a21\u4effclass\u751f\u547d\u5468\u671f")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'"\u6a21\u4eff\u751f\u547d\u5468\u671f\uff0c',Object(c.b)("inlineCode",{parentName:"p"},"useEffect"),"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u4e2a\u7a7a\u6570\u7ec4\uff0c\u65e0\u4f9d\u8d56\uff0c\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u76f8\u5f53\u4e8e",Object(c.b)("inlineCode",{parentName:"p"},"didmount"),"\u3002\u5982\u679c\u8981\u533a\u5206\u751f\u547d\u5468\u671f\uff0c\u4e0d\u4f20\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u6bcf\u6b21\u90fd\u4f1a\u8dd1\uff0c\u76f8\u5f53\u4e8e",Object(c.b)("inlineCode",{parentName:"p"},"didupdate"),"\u3002\u52a0\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"mount"),"\u6807\u8bb0\u4e00\u4e0b\uff0c\u91cc\u9762\u7528",Object(c.b)("inlineCode",{parentName:"p"},"if"),'\u5224\u65ad\u4e00\u4e0b\uff0c\u5373\u53ef\u4ee5\u8fbe\u5230\u6a21\u62df\u751f\u547d\u5468\u671f\u7684\u6548\u679c"'),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"mounted: \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7a7a\u6570\u7ec4\uff0c\u76f8\u5f53\u4e8e\u65e0\u4f9d\u8d56\uff0c\u90a3\u4e48\u53ea\u4f1a\u5728\u521d\u6b21\u6302\u8f7d\u7684\u65f6\u5019\u6267\u884c\u4e00\u6b21")),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"useEffect(() => {\n  console.log('\u53ea\u6267\u884cmounted\u4e00\u6b21')\n}, [])\n")),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"update: \u53ea\u9700\u8981\u628a\u7b2c\u4e00\u6b21\u6392\u9664\u6389\u5373\u53ef")))),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("h3",{id:"1-usestate\u5b9e\u73b0\u539f\u7406---imweb"},Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://imweb.io/topic/5c7d58b0baf81d795209497e"}),"1. useState\u5b9e\u73b0\u539f\u7406 - imweb")),Object(c.b)("h3",{id:"2-\u4e00\u7bc7\u770b\u61c2-react-hooks"},Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://zhuanlan.zhihu.com/p/50597236"}),"2. \u4e00\u7bc7\u770b\u61c2 React Hooks")),Object(c.b)("h3",{id:"3-\u7406\u89e3\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4ee5\u53cahook---\u5b8c\u5168\u6307\u5357"},Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/"}),"3. \u7406\u89e3\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4ee5\u53cahook - \u5b8c\u5168\u6307\u5357")))}p.isMDXComponent=!0},302:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||c;return a?r.a.createElement(u,i(i({ref:t},l),{},{components:a})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);