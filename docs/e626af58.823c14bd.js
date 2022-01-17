(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),c=(n(0),n(361)),o={id:"reactRecoilBase",title:"recoil \u57fa\u7840\u7528\u6cd5",hide_title:!0,sidebar_label:"\u57fa\u7840\u7528\u6cd5"},i={unversionedId:"react/recoil/reactRecoilBase",id:"react/recoil/reactRecoilBase",isDocsHomePage:!1,title:"recoil \u57fa\u7840\u7528\u6cd5",description:"atom",source:"@site/docs/react/recoil/\u57fa\u7840\u7528\u6cd5.md",slug:"/react/recoil/reactRecoilBase",permalink:"/docs/react/recoil/reactRecoilBase",version:"current",sidebar_label:"\u57fa\u7840\u7528\u6cd5",sidebar:"reactdoc",previous:{title:"\u6709\u7528\u63d2\u4ef61",permalink:"/docs/react/plugins/reactUsefulPlugin"}},l=[{value:"atom",id:"atom",children:[]},{value:"atomFamily",id:"atomfamily",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"atom"},"atom"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3}","{3}":!0}),"function atom<T>({\n  key: string,\n  default: T | Promise<T> | RecoilValue<T>,\n})\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"default")," \u53ef\u4ee5\u662f\u8fd9\u51e0\u79cd\u7c7b\u578b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u56fa\u5b9a\u7684\u503c")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// \u57fa\u7840\u6570\u636e\nconst personAtom = atom({\n  key: 'personAtom',\n  default: 1\n})\n\n// \u590d\u6742\u6570\u636e\nconst personAtom = atom({\n  key: 'personAtom',\n  default: { name: 'xi' }\n})\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Promise"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const personAtom = atom({\n  key: 'personAtom',\n  default: new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(1)\n    }, 1000)\n  })\n})\n")),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"promise\u7c7b\u578b\u7684atom")," \u7684\u5730\u65b9\uff0c\u4f1a\u7b49\u5f85\u8fd9\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"promise")," \u7ed3\u675f\u4e4b\u540e\u624d\u4f1a\u6e32\u67d3\uff1a"),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u9ed8\u8ba4\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"React Suspense")," \u5e76\u5b58\u7684\uff0c\u4e5f\u5c31\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u6ca1\u6709 ",Object(c.b)("inlineCode",{parentName:"p"},"resolved")," \u90a3\u4e48\u5c06\u6e32\u67d3 ",Object(c.b)("inlineCode",{parentName:"p"},"suspense fallback"),"\u3002")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5efa\u8bae\u914d\u5408 ",Object(c.b)("inlineCode",{parentName:"p"},"useRecoilStateLoadable")," \u6216\u8005 ",Object(c.b)("inlineCode",{parentName:"p"},"useRecoilValueLoadable")," \u914d\u5408\u4f7f\u7528\u3002"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const personAtom = atom({\n  key: 'personAtom',\n  default: new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(1)\n    }, 1000)\n  })\n})\n\nfunction UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(personAtom);\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")))))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53e6\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"li"},"atom"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const itemAtom = atom({\n  key: 'itemAtom',\n  default: 1\n})\n\nconst personAtom = atom({\n  key: 'personAtom',\n  default: itemAtom\n})\n")),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f53\u4f9d\u8d56\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"itemAtom")," \u53d8\u5316\u7684\u65f6\u5019\uff0c\u4e5f\u4f1a\u51fa ",Object(c.b)("inlineCode",{parentName:"p"},"personAtom")," \u53d8\u5316\uff0c\u8fd9\u6837\u4ed6\u4eec\u4e4b\u95f4\u5f62\u6210\u4e86\u4f9d\u8d56\u5173\u7cfb\uff0c\u8ba2\u9605\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"personAtom")," \u7684\u7ec4\u4ef6\u4e5f\u4f1a\u518d\u6b21\u51fa\u53d1\u66f4\u65b0"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53e6\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"li"},"selector"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export const withItem = selector({\n  key: 'withTest',\n  get: async () => {\n    const result = await new Promise((resolve) => {\n      setTimeout(() => {\n        resolve('\u5b8c\u6210')\n      }, 6000)\n    })\n    return result\n  }\n})\n\nexport const testAtom = atom({\n  key: 'test',\n  default: withItem\n})\n")),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u8fd9\u79cd\u60c5\u51b5\u4e5f\u4f1a\u5f62\u6210\u4f9d\u8d56\u5173\u7cfb\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"selector")," \u53d8\u5316\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"atom")," \u4e5f\u4f1a\u53d8\u5316"))),Object(c.b)("h2",{id:"atomfamily"},"atomFamily"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u7406\u89e3\u4e3a\u6839\u636e\u53c2\u6570\u5bf9\u5e94\u4e0d\u540c\u7684atom\u503c\u5219\u5fc5\u987b\u4f7f\u7528atomFamily\uff0c\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u76f8\u540c\u8f93\u5165\u5fc5\u5f97\u5230\u76f8\u540c\u8f93\u51fa")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function atomFamily<T, Parameter>({\n  key: string,\n  default:\n    | RecoilValue<T>\n    | Promise<T>\n    | T\n    | (Parameter => T | RecoilValue<T> | Promise<T>),\n}): Parameter => RecoilState<T>\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"default")," \u53ef\u4ee5\u662f\u8fd9\u51e0\u79cd\u7c7b\u578b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u56fa\u5b9a\u7684\u503c")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const personAtom = atomFamily({\n  key: 'personAtom',\n  default: 1\n})\n\nfunction Item() {\n  const [testValue, setTestValue] = useRecoilState(personAtom(1))\n\n  setTestValue(3) // \u751f\u6210\u5bf9\u5e94\u7684atom\u6620\u5c04\uff1a1 => 3\n\n  const personValue = useRecoilValue(personAtom(1)) // 3\n  const personValue = useRecoilValue(personAtom(2)) // 1 \u56e0\u4e3a\u6ca1\u6709\u751f\u6210\u6620\u5c04\uff0c\u6240\u4ee5\u7528\u7684\u8fd8\u662f\u539f\u6765\u7684\u503c\n}\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"(Parameter => T | RecoilValue<T> | Promise<T>)"))),Object(c.b)("p",null,"\u6839\u636e\u63a5\u6536\u7684\u53c2\u6570\u503c\uff0c\u5904\u7406\u8fc7\u540e\u8fd4\u56de\u5b9e\u9645\u7684\u9ed8\u8ba4\u503c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: param => 3 * param,\n});\n")))}b.isMDXComponent=!0},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||c;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);