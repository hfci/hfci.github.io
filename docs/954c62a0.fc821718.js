(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(2),r=(t(0),t(292));const i={id:"reactPerformanceManyTimesRender",title:"react\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3\u95ee\u9898",hide_title:!0,sidebar_label:"\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3\u95ee\u9898"},c={unversionedId:"react/performance/reactPerformanceManyTimesRender",id:"react/performance/reactPerformanceManyTimesRender",isDocsHomePage:!1,title:"react\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3\u95ee\u9898",description:"react \u9ed8\u8ba4\u6e32\u67d3\u884c\u4e3a",source:"@site/docs/react/performance/\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3.md",slug:"/react/performance/reactPerformanceManyTimesRender",permalink:"/docs/react/performance/reactPerformanceManyTimesRender",version:"current",sidebar_label:"\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3\u95ee\u9898",sidebar:"reactdoc",previous:{title:"react render prop",permalink:"/docs/react/advance/reactRenderProp"},next:{title:"react\u6279\u91cf\u66f4\u65b0",permalink:"/docs/react/performance/reactBatchUpdate"}},o=[{value:"react \u9ed8\u8ba4\u6e32\u67d3\u884c\u4e3a",id:"react-\u9ed8\u8ba4\u6e32\u67d3\u884c\u4e3a",children:[]},{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[{value:"1. \u62c6\u5206\u7ec4\u4ef6\uff0c\u79fb\u52a8 state",id:"1-\u62c6\u5206\u7ec4\u4ef6\uff0c\u79fb\u52a8-state",children:[]},{value:"2. \u5185\u5bb9\u63d0\u5347\uff0c\u901a\u8fc7 children \u4f20\u9012",id:"2-\u5185\u5bb9\u63d0\u5347\uff0c\u901a\u8fc7-children-\u4f20\u9012",children:[]},{value:"3. \u7f13\u5b58\u7ec4\u4ef6",id:"3-\u7f13\u5b58\u7ec4\u4ef6",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],l={rightToc:o};function b({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"react-\u9ed8\u8ba4\u6e32\u67d3\u884c\u4e3a"},"react \u9ed8\u8ba4\u6e32\u67d3\u884c\u4e3a"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"react")," \u7684\u6bcf\u6b21\u89e6\u53d1\u9875\u9762\u66f4\u65b0\u5b9e\u9645\u4e0a\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"render")," : \u4e3b\u8981\u8d1f\u8d23\u8fdb\u884c ",Object(r.b)("inlineCode",{parentName:"li"},"vdom")," \u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"diff")," \u8ba1\u7b97"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"commit phase"),": \u4e3b\u8981\u8d1f\u8d23\u5c06 ",Object(r.b)("inlineCode",{parentName:"li"},"vdom diff")," \u7684\u7ed3\u679c\u66f4\u65b0\u5230\u5b9e\u9645\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"DOM")," \u4e0a")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"react\u6e32\u67d3\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u7279\u6027")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5f53\u7236\u7ec4\u4ef6\u91cd\u6e32\u67d3\u7684\u65f6\u5019\uff0c\u5176\u4f1a\u9ed8\u8ba4\u9012\u5f52\u7684\u91cd\u6e32\u67d3\u6240\u6709\u5b50\u7ec4\u4ef6"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default function Parent() {\n  const [text, setText] = useState<number>(0)\n\n  function clickEvent() {\n    setText(text + 1)\n  }\n  return (\n    <>\n      <div onClick={clickEvent}>\u6309\u94ae {text}</div>\n      <Child />\n    </>\n  )\n}\n\nfunction Child() {\n  return <div>\u5b50\u5143\u7d20</div>\n}\n")),Object(r.b)("p",{parentName:"div"},"\u5982\ud83d\udc46\u4e3a\u4f8b\uff0c\u867d\u7136 ",Object(r.b)("inlineCode",{parentName:"p"},"Child")," \u7ec4\u4ef6\u6ca1\u6709\u4efb\u4f55\u53d8\u5316\uff0c\u4f46\u662f\u7531\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},"Parent")," \u7ec4\u4ef6\u91cd\u6e32\u67d3\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"\u5e26\u52a8\u4e86Child\u7684\u91cd\u6e32\u67d3"),"\u3002"))),Object(r.b)("h2",{id:"\u4f18\u5316"},"\u4f18\u5316"),Object(r.b)("p",null,"\u8fd9\u91cc\u662f\u4e00\u4e2a\u5177\u6709\u4e25\u91cd\u6e32\u67d3\u6027\u80fd\u95ee\u9898\u7684\u7ec4\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { useState } from 'react';\n\nexport default function App() {\n  let [color, setColor] = useState('red');\n  return (\n    <div>\n      <input value={color} onChange={(e) => setColor(e.target.value)} />\n      <p style={{ color }}>Hello, world!</p>\n      <ExpensiveTree />\n    </div>\n  );\n}\n\nfunction ExpensiveTree() {\n  let now = performance.now();\n  while (performance.now() - now < 100) {\n    // Artificial delay -- do nothing for 100ms\n  }\n  return <p>I am a very slow component tree.</p>;\n}\n")),Object(r.b)("p",null,"\u95ee\u9898\u5c31\u662f\u5f53 ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"color")," \u53d8\u5316\u65f6\uff0c\u6211\u4eec\u4f1a\u91cd\u65b0\u6e32\u67d3\u4e00\u6b21\u88ab\u6211\u4eec\u624b\u52a8\u5927\u5e45\u5ef6\u7f13\u6e32\u67d3\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"<ExpensiveTree />")," \u7ec4\u4ef6\u3002"),Object(r.b)("h3",{id:"1-\u62c6\u5206\u7ec4\u4ef6\uff0c\u79fb\u52a8-state"},"1. \u62c6\u5206\u7ec4\u4ef6\uff0c\u79fb\u52a8 state"),Object(r.b)("p",null,"\u5982\u679c\u4f60\u4ed4\u7ec6\u770b\u4e00\u4e0b\u6e32\u67d3\u4ee3\u7801\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u8fd4\u56de\u7684\u6811\u4e2d\u53ea\u6709\u4e00\u90e8\u5206\u771f\u6b63\u5173\u5fc3\u5f53\u524d\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"state: color"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,6}","{5,6}":!0}),"export default function App() {\n  let [color, setColor] = useState('red');\n  return (\n    <div>\n      <input value={color} onChange={(e) => setColor(e.target.value)} />\n      <p style={{ color }}>Hello, world!</p>\n      <ExpensiveTree />\n    </div>\n  );\n}\n")),Object(r.b)("p",null,"\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u628a\u9700\u8981\u8fd9\u4e2a ",Object(r.b)("inlineCode",{parentName:"p"},"state: color")," \u7684\u5143\u7d20\u5355\u72ec\u62ce\u5230\u4e00\u4e2a\u7ec4\u4ef6 ",Object(r.b)("inlineCode",{parentName:"p"},"Form")," \u4e2d\uff0c\u8ba9\u4ed6\u4eec\u6210\u529f\u5144\u5f1f\u7ec4\u4ef6\uff0c\u800c\u4e0d\u662f\u5305\u88f9\u7684\u5f62\u5f0f\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"export default function App() {\n  return (\n    <>\n      <Form />\n      <ExpensiveTree />\n    </>\n  );\n}\n\nfunction Form() {\n  let [color, setColor] = useState('red');\n  return (\n    <>\n      <input value={color} onChange={(e) => setColor(e.target.value)} />\n      <p style={{ color }}>Hello, world!</p>\n    </>\n  );\n}\n")),Object(r.b)("h3",{id:"2-\u5185\u5bb9\u63d0\u5347\uff0c\u901a\u8fc7-children-\u4f20\u9012"},"2. \u5185\u5bb9\u63d0\u5347\uff0c\u901a\u8fc7 children \u4f20\u9012"),Object(r.b)("p",null,"\u5982\u679c\u8fd9\u4e2a\u72b6\u6001\u5728\u4e0a\u5c42\u4ee3\u7801\u4e2d\uff0c\u4e0a\u8ff0\u7684\u65b9\u6cd5\u5c31\u4e0d\u53ef\u884c\u4e86\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u6211\u4eec\u5c06 ",Object(r.b)("inlineCode",{parentName:"p"},"color")," \u653e\u5230\u7236\u5143\u7d20 ",Object(r.b)("inlineCode",{parentName:"p"},"div")," \u4e2d\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"export default function App() {\n  let [color, setColor] = useState('red');\n  return (\n    <div style={{ color }}>\n      <input value={color} onChange={(e) => setColor(e.target.value)} />\n      <p>Hello, world!</p>\n      <ExpensiveTree />\n    </div>\n  );\n}\n")),Object(r.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u5185\u5bb9\u63d0\u5347 ",Object(r.b)("inlineCode",{parentName:"p"},"<ExpensiveTree />\u7ec4\u4ef6\u4ee5prop"),"\u7684\u5f62\u5f0f\u4f20\u5165\uff0c\u72b6\u6001\u53d8\u5316\u7684\u65f6\u5019\u7ec4\u4ef6\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u4f46\u662f\u7ec4\u4ef6\u4f9d\u7136\u4fdd\u5b58\u8fd9\u4e0a\u4e00\u6b21\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"children"),"\uff0c\u6240\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"React")," \u5e76\u4e0d\u4f1a\u8bbf\u95ee\u90a3\u68f5\u5b50\u6811\u3002 \u56e0\u6b64\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"ExpensiveTree")," \u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4-5,16}","{4-5,16}":!0}),'export default function App() {\n  return (\n    <ColorPicker>\n      <p>Hello, world!</p>\n      <ExpensiveTree />\n    </ColorPicker>\n  );\n}\n\nfunction ColorPicker({ children }) {\n  let [color, setColor] = useState("red");\n\n  return (\n    <div style={{ color }}>\n      <input value={color} onChange={(e) => setColor(e.target.value)} />\n      {children}\n    </div>\n  );\n}\n')),Object(r.b)("h3",{id:"3-\u7f13\u5b58\u7ec4\u4ef6"},"3. \u7f13\u5b58\u7ec4\u4ef6"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"React")," \u4e3a\u4e86\u5e2e\u52a9\u89e3\u51b3\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3\u6027\u80fd\u95ee\u9898\uff0c\u5b9e\u9645\u4e0a\u63d0\u4f9b\u4e86\u4e09\u4e2aAPI\u7528\u4e8e\u6027\u80fd\u4f18\u5316"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"class shouldComponentUpdate\u751f\u547d\u5468\u671f"),"\uff1a\u5982\u679c\u5728\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u91cc\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5c31\u53ef\u4ee5\u8df3\u8fc7\u540e\u7eed\u8be5\u7ec4\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"render")," \u8fc7\u7a0b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"React.PureComponent"),"\uff1a\u4f1a\u5bf9\u4f20\u5165\u7ec4\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"props")," \u8fdb\u884c\u6d45\u6bd4\u8f83\uff0c\u5982\u679c\u6d45\u6bd4\u8f83\u76f8\u7b49\uff0c\u5219\u8df3\u8fc7 ",Object(r.b)("inlineCode",{parentName:"li"},"render")," \u8fc7\u7a0b\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"\u9002\u7528\u4e8eClass Component")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"React.memo"),"\uff1a\u540c\u4e0a\uff0c\u9002\u7528\u4e8e ",Object(r.b)("inlineCode",{parentName:"li"},"functional Component"))),Object(r.b)("h4",{id:"\u56e0\u4e3a\u7f13\u5b58\u7ec4\u4ef6\u662f\u901a\u8fc7-\u6d45\u6bd4\u8f83-\u6765\u5224\u65ad\u53d1\u751f\u53d8\u5316\u7684\uff0c\u6240\u4ee5\u5b58\u5728\u8fd9\u4e48\u51e0\u4e2a\u95ee\u9898\uff1a"},"\u56e0\u4e3a\u7f13\u5b58\u7ec4\u4ef6\u662f\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"h4"},"\u6d45\u6bd4\u8f83")," \u6765\u5224\u65ad\u53d1\u751f\u53d8\u5316\u7684\uff0c\u6240\u4ee5\u5b58\u5728\u8fd9\u4e48\u51e0\u4e2a\u95ee\u9898\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5bf9\u8c61 ",Object(r.b)("inlineCode",{parentName:"p"},"\u503c\u4e0d\u53d8")," \u7684\u60c5\u51b5\u4e0b, \u5bf9\u8c61\u5f15\u7528\u53d8\u5316\u4f1a\u5bfc\u81f4 ",Object(r.b)("inlineCode",{parentName:"p"},"React")," \u7ec4\u4ef6\u7684\u7f13\u5b58\u5931\u6548\uff0c\u8fdb\u800c\u5bfc\u81f4\u6027\u80fd\u95ee\u9898"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{8}","{8}":!0}),"export default function Parent() {\n  const [text, setText] = useState<number>(0)\n\n  function clickEvent() {\n    setText(text + 1)\n  }\n\n  const item = { text: '\u4e0d\u53d8' }\n  return (\n    <>\n      <div onClick={clickEvent}>\u6309\u94ae {text}</div>\n      <Child item={item} />\n    </>\n  )\n}\n\nconst Child = React.memo(({ item }) => <div>{item.text}</div>)\n")),Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u56e0\u4e3a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u7684\u539f\u7406\uff0c\u5bfc\u81f4\u6bcf\u4e00\u6b21\u6e32\u67d3\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"item")," \u90fd\u662f\u91cd\u65b0\u751f\u6210\u7684\uff0c\u6240\u4ee5\u6bcf\u6b21\u4f20\u9012\u7ed9 ",Object(r.b)("inlineCode",{parentName:"p"},"<Child />")," \u7ec4\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"item\u5f15\u7528")," \u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5bfc\u81f4\u7f13\u5b58\u65e0\u6548\uff0c\u6bcf\u6b21\u90fd\u6e32\u67d3\u3002")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u5bf9\u8c61 ",Object(r.b)("inlineCode",{parentName:"p"},"\u503c\u53d8\u5316")," \u7684\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8c61\u5f15\u7528\u4e0d\u53d8\u4f1a\u5bfc\u81f4\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"React")," \u7ec4\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"UI")," \u548c\u6570\u636e\u7684\u4e0d\u4e00\u81f4\u6027\u3002"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{1,6,11}","{1,6,11}":!0}),"const item = { text: 1 }\nexport default function Parent() {\n  const [text, setText] = useState<number>(0)\n\n  function clickEvent() {\n    setText(text + 1)\n    item.text += 1\n  }\n  return (\n    <>\n      <div onClick={clickEvent}>\u6309\u94ae {text}</div>\n      <Child item={item} />\n    </>\n  )\n}\n\nconst Child = React.memo(({ item }) => <div>{item.text}</div>)\n")),Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u56e0\u4e3a\u662f\u6d45\u6bd4\u8f83\uff0c\u6240\u4ee5\u5f53 ",Object(r.b)("inlineCode",{parentName:"p"},"item.text")," \u503c\u53d8\u5316\u7684\u65f6\u5019\uff0c\u7ec4\u4ef6\u5e76\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"))))),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://overreacted.io/zh-hans/before-you-memo/"}),"\u5728\u4f60\u5199memo()\u4e4b\u524d")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.zhihu.com/column/p/163590288"}),"React Hooks(\u56db): immutable"))))}b.isMDXComponent=!0},292:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(t),s=a,u=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return t?r.a.createElement(u,o(o({ref:n},b),{},{components:t})):r.a.createElement(u,o({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);