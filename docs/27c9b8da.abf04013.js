(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{350:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||c;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(350));const c={},o={unversionedId:"react/goods/hook/_useEffect",id:"react/goods/hook/_useEffect",isDocsHomePage:!1,title:"_useEffect",description:"useEffect",source:"@site/docs/react/goods/hook/_useEffect.md",slug:"/react/goods/hook/_useEffect",permalink:"/docs/react/goods/hook/_useEffect",version:"current"},i=[{value:"useEffect",id:"useeffect",children:[{value:"useEffect \u6267\u884c\u8fc7\u7a0b",id:"useeffect-\u6267\u884c\u8fc7\u7a0b",children:[]},{value:"\u79fb\u9664 useEffect \u7684\u4f9d\u8d56",id:"\u79fb\u9664-useeffect-\u7684\u4f9d\u8d56",children:[]}]}],s={rightToc:i};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"useeffect"},"useEffect"),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u5fc3\u667a\u6a21\u578b")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"\u6bcf\u4e00\u6b21\u6e32\u67d3\u90fd\u6709\u5b83\u81ea\u5df1\u7684\u2026\u6240\u6709\uff0c\u5305\u62ec prop\u3001state\u3001effect\u3002"),Object(r.b)("li",{parentName:"ol"},"useEffect \u5e94\u8be5\u4ee5\u76ee\u7684\u7684\u89d2\u5ea6\u53bb\u601d\u8003\uff0c\u800c\u4e0d\u662f\u8fc7\u7a0b(\u7b2c\u4e00\u6b21\u6e32\u67d3\u6216\u8005\u4ec0\u4e48\u65f6\u673a)\uff1aReact \u672c\u8d28\u4e0a\u6839\u636e\u73b0\u5728\u7684 prop \u548c state \u540c\u6b65 DOM\uff0c\u6211\u4eec\u5e94\u8be5\u4ee5\u540c\u6837\u7684\u89d2\u5ea6\u53bb\u601d\u8003 useEffect\uff1auseEffect \u4f7f\u4f60\u80fd\u591f\u6839\u636e props \u548c state \u540c\u6b65 DOM \u4e4b\u5916\u7684\u4e1c\u897f\u3002")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function Greeting({name}) {\n  useEffect(() => {\n    document.title = 'Hello, ' + name\n  }, [name])\n  return <h1 className='Greeting'>Hello, {name}</h1>\n}\n")),Object(r.b)("p",{parentName:"div"},"\u4fdd\u8bc1\u6d4f\u89c8\u5668\u7684\u6807\u9898\u59cb\u7ec8\u548c name \u540c\u6b65\uff0c\u800c\u4e0d\u662f\u601d\u8003\u7b2c\u4e00\u6b21\u6e32\u67d3\u7684\u65f6\u5019\u8bbe\u7f6e\u6d4f\u89c8\u5668\u6807\u9898"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u57fa\u672c\u7528\u6cd5"',title:'"\u57fa\u672c\u7528\u6cd5"'}),"useEffect(function effectEvent() {\n  ...\n  return function clearEffect() {\n    ...\n  }\n}, [dependProp1, dependProp2])\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u8bbe\u7f6e\u7a7a\u7684\u4f9d\u8d56\uff1a\u4ee3\u8868\u4e0d\u9700\u8981\u540c\u6b65\u4efb\u4f55prop\u548cstate\uff0c\u6240\u4ee5\u59cb\u7ec8\u53ea\u4f1a\u6267\u884c\u4e00\u6b21"',title:'"\u8bbe\u7f6e\u7a7a\u7684\u4f9d\u8d56\uff1a\u4ee3\u8868\u4e0d\u9700\u8981\u540c\u6b65\u4efb\u4f55prop\u548cstate\uff0c\u6240\u4ee5\u59cb\u7ec8\u53ea\u4f1a\u6267\u884c\u4e00\u6b21"'}),"useEffect(() => {}, [])\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="\u6ca1\u6709\u8bbe\u7f6e\u4f9d\u8d56\uff1a\u9ed8\u8ba4\u4ee3\u8868\u4f9d\u8d56\u6240\u6709\u7684prop\u548cstate\uff0c\u6240\u4ee5\u6bcf\u6b21\u6e32\u67d3\u90fd\u4f1a\u6267\u884c"',title:'"\u6ca1\u6709\u8bbe\u7f6e\u4f9d\u8d56\uff1a\u9ed8\u8ba4\u4ee3\u8868\u4f9d\u8d56\u6240\u6709\u7684prop\u548cstate\uff0c\u6240\u4ee5\u6bcf\u6b21\u6e32\u67d3\u90fd\u4f1a\u6267\u884c"'}),"useEffect(() => {})\n")),Object(r.b)("h3",{id:"useeffect-\u6267\u884c\u8fc7\u7a0b"},"useEffect \u6267\u884c\u8fc7\u7a0b"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u7ed8\u5236 UI \u5230\u5c4f\u5e55"),Object(r.b)("li",{parentName:"ol"},"\u6267\u884c\u5148\u524d\u4e00\u6b21\u6e32\u67d3\u7684\u6e05\u9664\u526f\u4f5c\u7528\u7684\u51fd\u6570 clearEffect (\u6e05\u9664\u4e0a\u4e00\u6b21\u7684\u6e32\u67d3\u7684\u526f\u4f5c\u7528\uff0c\u7b2c\u4e00\u6b21\u6e32\u67d3\u4e0d\u4f1a\u6267\u884c)")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5047\u8bbe\u7b2c\u4e00\u6b21\u6e32\u67d3\u7684\u65f6\u5019 props \u662f{id: 10}\uff0c\u7b2c\u4e8c\u6b21\u6e32\u67d3\u7684\u65f6\u5019\u662f{id: 20}"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"React \u6e32\u67d3{id: 20}\u7684 UI\u3002"),Object(r.b)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7ed8\u5236\u3002\u6211\u4eec\u5728\u5c4f\u5e55\u4e0a\u770b\u5230{id: 20}\u7684 UI\u3002"),Object(r.b)("li",{parentName:"ul"},"React \u6e05\u9664{id: 10}\u7684 effect\u3002"),Object(r.b)("li",{parentName:"ul"},"React \u8fd0\u884c{id: 20}\u7684 effect\u3002")))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"\u6267\u884c\u526f\u4f5c\u7528\u51fd\u6570 effectEvent")),Object(r.b)("h3",{id:"\u79fb\u9664-useeffect-\u7684\u4f9d\u8d56"},"\u79fb\u9664 useEffect \u7684\u4f9d\u8d56"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="1\u3001\u8ba9useEffect\u81ea\u7ed9\u81ea\u8db3"',title:'"1\u3001\u8ba9useEffect\u81ea\u7ed9\u81ea\u8db3"'}),"useEffect(() => {\n  const timer = setInterval(() => {\n    setCount(count + 1)\n  }, 1000)\n}, [count])\n\n// \u5229\u7528useState\u8bbf\u95ee\u65e7\u7684state\uff0c\u8fbe\u5230\u4e0d\u76f4\u63a5\u4f9d\u8d56state\u7684\u76ee\u7684\nuseEffect(() => {\n  const timer = setInterval(() => {\n    setCount(count => count + 1)\n  }, 1000)\n}, [])\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="2\u3001\u867d\u7136reducer\u51fd\u6570\u6bcf\u6b21\u90fd\u5728\u6e32\u67d3\u65f6\u91cd\u65b0\u751f\u6210\uff0c\u4f46\u662fstate\u53c2\u6570\u7684\u503c\u59cb\u7ec8\u662f\u6267\u884c\u65f6\u6700\u65b0\u7684"',title:'"2\u3001\u867d\u7136reducer\u51fd\u6570\u6bcf\u6b21\u90fd\u5728\u6e32\u67d3\u65f6\u91cd\u65b0\u751f\u6210\uff0c\u4f46\u662fstate\u53c2\u6570\u7684\u503c\u59cb\u7ec8\u662f\u6267\u884c\u65f6\u6700\u65b0\u7684"'}),"function Counter({step}) {\n  const [count, dispatch] = useReducer(reducer, 0)\n\n  // \u5185\u8054reducer\u51fd\u6570\n  function reducer(state, action) {\n    if (action.type === 'tick') {\n      // \u540c\u65f6\u4f9d\u8d56state\u548cprop\n      // highlight-next-line\n      return state + step\n    } else {\n      throw new Error()\n    }\n  }\n\n  useEffect(() => {\n    const id = setInterval(() => {\n      dispatch({type: 'tick'})\n    }, 1000)\n    return () => clearInterval(id)\n  }, [dispatch])\n\n  return <h1>{count}</h1>\n}\n")))}l.isMDXComponent=!0}}]);