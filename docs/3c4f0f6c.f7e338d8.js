(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),c=n(7),r=(n(0),n(326)),i={id:"reactTypescriptBase",title:"react-typescript \u57fa\u7840\u7c7b\u578b",hide_title:!0,sidebar_label:"\u57fa\u7840\u7c7b\u578b"},l={unversionedId:"react/typescript/reactTypescriptBase",id:"react/typescript/reactTypescriptBase",isDocsHomePage:!1,title:"react-typescript \u57fa\u7840\u7c7b\u578b",description:"React \u5143\u7d20",source:"@site/docs/react/typescript/\u57fa\u7840\u7c7b\u578b.md",slug:"/react/typescript/reactTypescriptBase",permalink:"/docs/react/typescript/reactTypescriptBase",version:"current",sidebar_label:"\u57fa\u7840\u7c7b\u578b",sidebar:"reactdoc",previous:{title:"react useEffect",permalink:"/docs/react/notice/reactNoticeUseEffect"},next:{title:"\u6709\u7528\u63d2\u4ef61",permalink:"/docs/react/plugins/reactUsefulPlugin"}},b=[{value:"React \u5143\u7d20",id:"react-\u5143\u7d20",children:[{value:"1. JSX.Element",id:"1-jsxelement",children:[]},{value:"2. React.ReactChild",id:"2-reactreactchild",children:[]},{value:"3. React.ReactNode",id:"3-reactreactnode",children:[]}]},{value:"\u4e8b\u4ef6\u7c7b\u578b",id:"\u4e8b\u4ef6\u7c7b\u578b",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"react-\u5143\u7d20"},"React \u5143\u7d20"),Object(r.b)("h3",{id:"1-jsxelement"},"1. JSX.Element"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"JSX.Element")," \u662f ",Object(r.b)("inlineCode",{parentName:"p"},"react")," \u5185\u90e8\u7533\u660e\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"\u5168\u5c40\u7c7b\u578b")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"type Props = {\n  title: string,\n  children: JSX.Element,\n};\n\nconst Page = ({ title, children }: Props) => (\n  <div>\n    <h1>{title}</h1>\n    {children}\n  </div>\n);\n")),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u591a\u4e2a\u5143\u7d20\u7684Element")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u53ef\u4ee5\u662f\u4e00\u4e2a\u591a\u4e2a\u5143\u7d20\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Element")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{3,8,9}","{3,8,9}":!0}),"type Props = {\n  title: string,\n  children: JSX.Element | JSX.Element[],\n};\nfunction Test () {\n  return (\n    <Page>\n      <div>1</div>\n      <div>2</div>\n    </Page>\n  )\n}\n\nconst Page = ({ title, children }: Props) => (\n  <div>\n    <h1>{title}</h1>\n    {children}\n  </div>\n);\n")))),Object(r.b)("h3",{id:"2-reactreactchild"},"2. React.ReactChild"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"JSX.Element")," \u53ea\u80fd\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"React\u5143\u7d20")," \u7c7b\u578b\uff0c\u4f46\u662f\u4f5c\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"children")," \u6e32\u67d3\u7167\u7406\u8bf4\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u3002")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"React.ReactChild")," \u662f ",Object(r.b)("inlineCode",{parentName:"p"},"react.children")," \u7684\u6807\u51c6\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"React\u5143\u7d20\uff1b\u5b57\u7b26\u4e32\uff1b\u6570\u5b57"),"\u7b49\u7b49\u3002"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'type Props = {\n  title: string,\n  children: React.ReactChild,\n};\n\n<Page children="1" />\n')),Object(r.b)("h3",{id:"3-reactreactnode"},"3. React.ReactNode"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"React.ReactChild")," \u4e0d\u80fd\u4ee3\u8868\u591a\u4e2a\u5143\u7d20\uff0c\u9700\u8981\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"Array")," \u6765\u7533\u660e\u6709\u70b9\u5197\u4f59\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"type Props = {\n  title: string,\n  children: React.ReactChild | React.ReactChild[],\n};\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ReactNode")," \u5141\u8bb8\u591a\u4e2a\u5143\u7d20\uff0c\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\uff0c\u7247\u6bb5\uff0c\u95e8\u6237\u2026\u2026\u3002")),Object(r.b)("h2",{id:"\u4e8b\u4ef6\u7c7b\u578b"},"\u4e8b\u4ef6\u7c7b\u578b"),Object(r.b)("p",null,"\u6211\u4eec\u4e0d\u80fd\u76f4\u63a5\u5c06 ",Object(r.b)("inlineCode",{parentName:"p"},"typescript")," \u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u7528\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"react")," \u7684\u4e8b\u4ef6\u7c7b\u578b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"react\u4e8b\u4ef6"),"\u662f",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/events.html"}),"\u5408\u6210\u4e8b\u4ef6"),"\uff0c\u90fd\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"boolean bubbles\nboolean cancelable\nDOMEventTarget currentTarget\nboolean defaultPrevented\nnumber eventPhase\nboolean isTrusted\nDOMEvent nativeEvent\nvoid preventDefault()\nboolean isDefaultPrevented()\nvoid stopPropagation()\nboolean isPropagationStopped()\nvoid persist()\nDOMEventTarget target\nnumber timeStamp\nstring type\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u539f\u751f\u4e8b\u4ef6\u4e0d\u591f\u4e25\u8c28\uff0c\u5b58\u5728\u4e00\u5b9a\u95ee\u9898\uff0c\u800c ",Object(r.b)("inlineCode",{parentName:"p"},"react \u4e8b\u4ef6")," \u66f4\u52a0\u4e25\u8c28"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onClick = (e: MouseEvent) => console.log(`(${e.clientX}, ${e.clientY})`);\n\nwindow.addEventListener('click', onClick);\nwindow.addEventListener('keydown', onClick);\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u8fd9\u79cd\u60c5\u51b5 ",Object(r.b)("inlineCode",{parentName:"p"},"typescript")," \u4e0d\u6c47\u62a5\u9519\uff0c\u4f46\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"keydown\u7684clientX\u548cclientY\u662f \u201cundefined\u201d")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"react")," \u5bf9\u6240\u6709\u7684\u4e8b\u4ef6\u90fd\u63d0\u4f9b\u4e86 ",Object(r.b)("inlineCode",{parentName:"li"},"\u7c7b\u578b\u5b9a\u4e49"),"\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"react \u4e8b\u4ef6")," \u7c7b\u578b\u6709\u4e00\u5b9a\u7684\u89c4\u5219\uff1a",Object(r.b)("inlineCode",{parentName:"li"},"\u4e8b\u4ef6\u540d\u79f0\u7684\u7b2c\u4e8c\u4e2a\u5355\u8bcd")," + ",Object(r.b)("inlineCode",{parentName:"li"},"Event"))),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{1,2}","{1,2}":!0}),"function clickEvent (event: React.ClickEvent) {}\nfunction changeEvent (event: React.ChangeEvent) {}\n\n<div onClick={clickEvent}></div>\n<input onChange={changeEvent} />\n")))))}p.isMDXComponent=!0},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,O=d["".concat(i,".").concat(m)]||d[m]||s[m]||r;return n?c.a.createElement(O,l(l({ref:t},o),{},{components:n})):c.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<r;o++)i[o]=n[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);