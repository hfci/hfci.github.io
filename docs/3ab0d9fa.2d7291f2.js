(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(350));const c={id:"reactPersistedState",title:"react \u6301\u4e45\u5316\u72b6\u6001",hide_title:!0,sidebar_label:"\u6301\u4e45\u5316\u72b6\u6001"},o={unversionedId:"react/goods/reactPersistedState",id:"react/goods/reactPersistedState",isDocsHomePage:!1,title:"react \u6301\u4e45\u5316\u72b6\u6001",description:"\u81ea\u5b9a\u4e49 hook",source:"@site/docs/react/goods/\u6301\u4e45\u5316\u72b6\u6001.md",slug:"/react/goods/reactPersistedState",permalink:"/docs/react/goods/reactPersistedState",version:"current",sidebar_label:"\u6301\u4e45\u5316\u72b6\u6001",sidebar:"reactdoc",previous:{title:"react - \u6027\u80fd\u4f18\u5316",permalink:"/docs/react/goods/reactPerformance"},next:{title:"react \u95ee\u9898\u4e0e\u89e3\u51b3",permalink:"/docs/react/goods/reactQuestionFix"}},i=[{value:"\u81ea\u5b9a\u4e49 hook",id:"\u81ea\u5b9a\u4e49-hook",children:[]},{value:"\u8fdb\u9636",id:"\u8fdb\u9636",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],s={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u81ea\u5b9a\u4e49-hook"},"\u81ea\u5b9a\u4e49 hook"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function useLocalStorageState(\n  key,\n  defaultValue = '',\n  {serialize = JSON.stringify, deserialize = JSON.parse} = {},\n) {\n  const [state, setState] = React.useState(() => {\n    const valueInLocalStorage = window.localStorage.getItem(key)\n    if (valueInLocalStorage) {\n      try {\n        return deserialize(valueInLocalStorage)\n      } catch (error) {\n        window.localStorage.removeItem(key)\n      }\n    }\n    return typeof defaultValue === 'function' ? defaultValue() : defaultValue\n  })\n\n  const prevKeyRef = React.useRef(key)\n  React.useEffect(() => {\n    const prevKey = prevKeyRef.current\n    if (prevKey !== key) {\n      window.localStorage.removeItem(prevKey)\n    }\n    prevKeyRef.current = key\n    window.localStorage.setItem(key, serialize(state))\n  }, [key, state, serialize])\n\n  return [state, setState]\n}\n")),Object(a.b)("h3",{id:"\u8fdb\u9636"},"\u8fdb\u9636"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"storage")," \u4e8b\u4ef6\u8fbe\u5230\u8de8\u6d4f\u89c8\u5668\u6807\u7b7e\u540c\u6b65\u7f13\u5b58"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{6}","{6}":!0}),"const usePersistedState = (initialState, key, { get, set }) => {\n  const globalState = useRef(null);\n  const [state, setState] = useState(() => get(key, initialState));\n\n  // subscribe to `storage` change events\n  useEventListener('storage', ({ key: k, newValue }) => {\n    if (k === key) {\n      const newState = JSON.parse(newValue);\n      if (state !== newState) {\n        setState(newState);\n      }\n    }\n  });\n}\n")),Object(a.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-success alert alert--success"}),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u5176\u5b9e\u4e5f\u53d8\u76f8\u7684\u5b9e\u73b0\u4e86\uff0c\u540c\u4e00\u4e2a\u6807\u7b7e\u9875\u7684\u8de8\u7ec4\u4ef6\u540c\u6b65\u72b6\u6001\u7684\u76ee\u7684"))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5bb9\u6613\u5c01\u88c5\u548c\u5171\u4eab"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3}","{3}":!0}),"import createPersistedState from 'use-persisted-state';\n// \u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u63d0\u53d6\u51fa\u6765\uff0c\u7528\u4e8e\u5c01\u88c5\u540c\u4e00\u7f13\u5b58\nconst useCounterState = createPersistedState('count');\n\nconst useCounter = initialCount => {\n  const [count, setCount] = useCounterState(initialCount);\n\n  return {\n    count,\n    increment: () => setCount(currentCount => currentCount + 1),\n    decrement: () => setCount(currentCount => currentCount - 1),\n  };\n};\n\nexport default useCounter;\n")))),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/donavon/use-persisted-state"}),"use-persisted-state"))))}l.isMDXComponent=!0},350:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);