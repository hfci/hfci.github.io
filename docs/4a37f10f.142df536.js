(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(7),c=(n(0),n(297)),o={id:"reactContext",title:"react context",hide_title:!0,sidebar_label:"context"},i={unversionedId:"react/advance/reactContext",id:"react/advance/reactContext",isDocsHomePage:!1,title:"react context",description:"1. \u57fa\u7840\u7528\u6cd5",source:"@site/docs/react/advance/useContext.md",slug:"/react/advance/reactContext",permalink:"/docs/react/advance/reactContext",version:"current",sidebar_label:"context",sidebar:"reactdoc",previous:{title:"react \u7ec4\u4ef6\u901a\u4fe1",permalink:"/docs/react/advance/reactPassMessage"},next:{title:"react useReducer",permalink:"/docs/react/advance/reactUseReducer"}},s=[{value:"1. \u57fa\u7840\u7528\u6cd5",id:"1-\u57fa\u7840\u7528\u6cd5",children:[]},{value:"2. \u81ea\u5b9a\u4e49 hook \u5c01\u88c5 context",id:"2-\u81ea\u5b9a\u4e49-hook-\u5c01\u88c5-context",children:[]},{value:"3. \u4f20\u9001 setState\uff0c\u907f\u514d\u4e00\u5c42\u4e00\u5c42\u4f20\u9012",id:"3-\u4f20\u9001-setstate\uff0c\u907f\u514d\u4e00\u5c42\u4e00\u5c42\u4f20\u9012",children:[]},{value:"4. \u5c01\u88c5\u5230\u5355\u72ec\u6587\u4ef6",id:"4-\u5c01\u88c5\u5230\u5355\u72ec\u6587\u4ef6",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"1-\u57fa\u7840\u7528\u6cd5"},"1. \u57fa\u7840\u7528\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// 1. \u521b\u5efa\u4e00\u4e2acontext\nconst MyContext = React.createContext({ height: 180 });\n\n// 2. \u521b\u5efa\u4e00\u4e2a\u4f7f\u7528\u7684\u4e0a\u4e0b\u6587\nfunction Parent() {\n  const [val, setVal] = React.useState({ height: 182 })\n  return (\n    <MyContext.Provider value={val}>\n    </MyContext.Provider>\n  )\n}\n\n// 3. \u6d88\u8d39context\nfunction Child() {\n  const val = React.useContext(MyContext)\n}\n")),Object(c.b)("h3",{id:"2-\u81ea\u5b9a\u4e49-hook-\u5c01\u88c5-context"},"2. \u81ea\u5b9a\u4e49 hook \u5c01\u88c5 context"),Object(c.b)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\u65f6\u5019\u7684\u4fbf\u5229\uff0c\u53ef\u4ee5\u5c06 ",Object(c.b)("inlineCode",{parentName:"p"},"context")," \u5c01\u88c5\u5230\u81ea\u5b9a\u4e49 ",Object(c.b)("inlineCode",{parentName:"p"},"hook")," \u4e2d"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// 1. \u521b\u5efa\u4e00\u4e2a\u9876\u5c42\u7ec4\u4ef6\nconst HistoryContext = React.createContext(null)\nfunction History(prop) {\n  return (\n    <HistoryContext.Provider>\n      {prop.children}\n    </HistoryContext.Provider>\n  )\n}\n\n// 2. \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49hook\nfunction useHistory() {\n  const history = React.useContext(HistoryContext)\n\n  return history\n}\n")),Object(c.b)("p",null,"\u4f7f\u7528\u9876\u5c42\u7ec4\u4ef6\u548c ",Object(c.b)("inlineCode",{parentName:"p"},"hook")," \u63d0\u53d6\u6570\u636e\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,5,10}","{3,5,10}":!0}),"function App() {\n  return (\n    <History>\n      <Item />\n    </History>\n  )\n}\n\nfunction Item() {\n  const history = useHistory()\n\n  return <div>{history.location.path}</div>\n}\n")),Object(c.b)("h3",{id:"3-\u4f20\u9001-setstate\uff0c\u907f\u514d\u4e00\u5c42\u4e00\u5c42\u4f20\u9012"},"3. \u4f20\u9001 setState\uff0c\u907f\u514d\u4e00\u5c42\u4e00\u5c42\u4f20\u9012"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3-6,13,19}","{3-6,13,19}":!0}),"const TodosDispatch = React.createContext(null);\n// \u5bf9\u5916\u66b4\u9732hook\nfunction useDispatch() {\n  const dispatch = React.useContext(TodosDispatch)\n  return dispatch\n}\n\nfunction TodosApp() {\n  const [todos, dispatch] = useReducer(todosReducer);\n\n  return (\n    <TodosDispatch.Provider value={dispatch}>\n      <DeepTree todos={todos} />\n    </TodosDispatch.Provider>\n  );\n}\n\nfunction DeepTree() {\n  const dispatch = useDispatch()\n\n  return ...\n}\n")),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"useState\u7684setState")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"useReducer\u7684dispatch")," \u6bcf\u6b21 ",Object(c.b)("inlineCode",{parentName:"li"},"render")," \u80fd\u591f\u4fdd\u8bc1\u5f15\u7528\u662f\u4e0d\u53d8\u7684\uff0c\u6240\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"context")," \u4f20\u9012\u662f\u4e0d\u4f1a\u5f15\u53d1\u91cd\u65b0\u6e32\u7684"),Object(c.b)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49 ",Object(c.b)("inlineCode",{parentName:"li"},"hook")," \u5c01\u88c5 ",Object(c.b)("inlineCode",{parentName:"li"},"context")," \u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u6709\u4e24\u79cd\u5f62\u5f0f\uff1a")),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5f53\u4e0d\u9700\u8981\u8ba2\u9605 ",Object(c.b)("inlineCode",{parentName:"p"},"state")," \u7684\u65f6\u5019\uff0c\u7c7b\u4f3c ",Object(c.b)("inlineCode",{parentName:"p"},"recoil")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"useSetRecoilState(state)"),"\uff0c\u5373\u4f7f\u72b6\u6001\u53d1\u751f\u53d8\u66f4\uff0c\u4e5f\u4e0d\u9700\u8981\u89e6\u53d1\u7ec4\u4ef6\u6e32\u67d3\uff1a\u5c31\u5982\u4e0a\u9762\u7684\u4ee3\u7801\u6240\u793a")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u53e6\u5916\u4e00\u79cd\u5c31\u662f\u9700\u8981\u8ba2\u9605 ",Object(c.b)("inlineCode",{parentName:"p"},"state")," \u53d8\u66f4\uff0c\u89e6\u53d1\u6e32\u67d3\uff0c\u53ea\u9700\u8981\u4f20\u9012 ",Object(c.b)("inlineCode",{parentName:"p"},"value")," \u7684\u65f6\u5019\uff0c\u540c\u65f6\u4f20\u9012 ",Object(c.b)("inlineCode",{parentName:"p"},"state"),"\uff1a"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,7}","{3,7}":!0}),"function useDispatch() {\n  const [state, dispatch] = React.useContext(TodosDispatch)\n  return [state, dispatch]\n}\n\nfunction TodosApp() {\n  const [todos, dispatch] = useReducer(todosReducer)\n\n  return (\n    <TodosDispatch.Provider value={[todos, dispatch]}>\n      <DeepTree todos={todos} />\n    </TodosDispatch.Provider>\n  )\n}\n")))))),Object(c.b)("h3",{id:"4-\u5c01\u88c5\u5230\u5355\u72ec\u6587\u4ef6"},"4. \u5c01\u88c5\u5230\u5355\u72ec\u6587\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,8,15,23}","{5,8,15,23}":!0}),"import React from 'react';\n\nconst CurrencyContext = React.createContext(null);\n\n// 1. \u66b4\u9732\u63d0\u53d6\u6570\u636e\u7684hook\nconst useCurrency = () => React.useContext(CurrencyContext);\n\n// 2. \u9ad8\u9636\u7ec4\u4ef6\u5305\u88f9\u4e00\u4e0b\uff0c\u901a\u8fc7prop\u63d0\u53d6\u6570\u636e\nconst withCurrency = (Component) => (props) => {\n  const currency = useCurrency();\n\n  return <Component {...props} currency={currency} />;\n};\n\n// 3. \u76f4\u63a5\u66b4\u9732Provider\nconst CurrencyProvider = ({ value, children }) => {\n  return (\n    <CurrencyContext.Provider value={value}>\n      {children}\n    </CurrencyContext.Provider>\n  );\n};\n// 4. \u5173\u8054\u7684\u5e38\u91cf\u6570\u636e\nconst CURRENCIES = {\n  Euro: {\n    code: 'EUR',\n    label: 'Euro',\n    conversionRate: 1, // base conversion rate\n  },\n  Usd: {\n    code: 'USD',\n    label: 'US Dollar',\n    conversionRate: 1.19,\n  },\n};\nexport { CurrencyProvider, useCurrency, withCurrency, CURRENCIES };\n")),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"context")," \u5173\u8054\u7684\u6240\u6709\u6570\u636e\uff0c\u90fd\u5b58\u653e\u5728\u4e00\u8d77"))),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.robinwieruch.de/react-usecontext-hook"}),"How to useContext in React")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.robinwieruch.de/react-context-injection"}),"React Context Injection"))))}l.isMDXComponent=!0},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||c;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);