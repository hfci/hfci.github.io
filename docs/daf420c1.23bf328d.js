(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{224:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t(2),r=(t(0),t(292));const c={id:"reactBailout",title:"react bailout",hide_title:!0,sidebar_label:"bailout"},i={unversionedId:"react/performance/reactBailout",id:"react/performance/reactBailout",isDocsHomePage:!1,title:"react bailout",description:"\u7b80\u4ecb",source:"@site/docs/react/performance/bailout.md",slug:"/react/performance/reactBailout",permalink:"/docs/react/performance/reactBailout",version:"current",sidebar_label:"bailout",sidebar:"reactdoc",previous:{title:"react\u6279\u91cf\u66f4\u65b0",permalink:"/docs/react/performance/reactBatchUpdate"},next:{title:"react useEffect",permalink:"/docs/react/notice/reactNoticeUseEffect"}},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[{value:"1. render",id:"1-render",children:[]},{value:"2. bailout",id:"2-bailout",children:[]}]},{value:"\u4f8b\u5b50\u8bf4\u660e",id:"\u4f8b\u5b50\u8bf4\u660e",children:[]},{value:"bailout\u7684\u6761\u4ef6",id:"bailout\u7684\u6761\u4ef6",children:[{value:"1. oldProps === newProps",id:"1-oldprops--newprops",children:[]},{value:"<del>2. context value \u6ca1\u6709\u53d8\u5316</del>",id:"2-context-value-\u6ca1\u6709\u53d8\u5316",children:[]},{value:"3. workInProgress.type === current.type",id:"3-workinprogresstype--currenttype",children:[]},{value:"4. !includesSomeLane(renderLanes, updateLanes)",id:"4-includessomelanerenderlanes-updatelanes",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={rightToc:o};function l({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"React")," \u4e2d\uff0c\u6bcf\u5f53\u89e6\u53d1\u66f4\u65b0\uff08\u6bd4\u5982\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"this.setState"),"\u3001 ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," \uff09\uff0c\u4f1a\u4e3a\u7ec4\u4ef6\u521b\u5efa\u5bf9\u5e94\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"fiber")," \u8282\u70b9\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"DOM")," \u5143\u7d20\u6765\u8bbf\u95ee\u5b83: ",Object(r.b)("inlineCode",{parentName:"p"},"query('#container')._reactRootContainer._internalRoot.current"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4e24\u79cd\u65b9\u5f0f\u521b\u5efa ",Object(r.b)("inlineCode",{parentName:"li"},"fiber")," \u8282\u70b9\uff1a")),Object(r.b)("h3",{id:"1-render"},"1. render"),Object(r.b)("p",null,"\u7ecf\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"diff")," \u7b97\u6cd5\u540e\u751f\u6210\u4e00\u4e2a\u65b0 ",Object(r.b)("inlineCode",{parentName:"p"},"fiber")," \u8282\u70b9\u3002\u7ec4\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"render"),"\uff08\u6bd4\u5982 ",Object(r.b)("inlineCode",{parentName:"p"},"ClassComponent")," \u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\u8c03\u7528\u3001",Object(r.b)("inlineCode",{parentName:"p"},"FunctionComponent")," \u7684\u6267\u884c\uff09\u5c31\u53d1\u751f\u5728\u8fd9\u4e00\u6b65\u3002"),Object(r.b)("h3",{id:"2-bailout"},"2. bailout"),Object(r.b)("p",null,"\u5373\u590d\u7528\u524d\u4e00\u6b21\u66f4\u65b0\u8be5\u7ec4\u4ef6\u5bf9\u5e94\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"fiber")," \u8282\u70b9\u4f5c\u4e3a\u672c\u6b21\u66f4\u65b0\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"fiber")," \u8282\u70b9\u3002"),Object(r.b)("h2",{id:"\u4f8b\u5b50\u8bf4\u660e"},"\u4f8b\u5b50\u8bf4\u660e"),Object(r.b)("p",null,"\u5bf9\u4e8e\u5982\u4e0b ",Object(r.b)("inlineCode",{parentName:"p"},"Demo")," \uff0c\u70b9\u51fb ",Object(r.b)("inlineCode",{parentName:"p"},"Parent")," \u7ec4\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"div")," \uff0c\u89e6\u53d1\u66f4\u65b0\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Son")," \u7ec4\u4ef6\u6bcf\u6b21\u90fd\u4f1a\u6267\u884c"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function App () {\n  function Son() {\n    console.log('child render!');\n    return <div>Son</div>;\n  }\n\n\n  function Parent() {\n    const [count, setCount] = React.useState(0);\n\n    return (\n      <div onClick={() => {setCount(count + 1)}}>\n        \u70b9\u51fb {count}\n        <Son />\n      </div>\n    );\n  }\n\n  return <Parent />\n}\n")),Object(r.b)("p",null,"\u4f46\u662f\u5982\u679c\u6211\u4eec\u662f\u4e0b\u9762\u8fd9\u79cd\u5f62\u5f0f\uff0c\u6bcf\u6b21\u70b9\u51fb\u90fd\u4e0d\u5728\u89e6\u53d1 ",Object(r.b)("inlineCode",{parentName:"p"},"Son")," \u7684\u6267\u884c\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function App () {\n  function Son() {\n    console.log('child render!');\n    return <div>Son</div>;\n  }\n\n\n  function Parent(props) {\n    const [count, setCount] = React.useState(0);\n\n    return (\n      <div onClick={() => {setCount(count + 1)}}>\n        \u70b9\u51fb {count}\n        {props.children}\n      </div>\n    );\n  }\n\n  return (\n    <Parent>\n      <Son />\n    </Parent>\n  )\n}\n")),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u70b9\u51fb ",Object(r.b)("inlineCode",{parentName:"p"},"Parent")," \u7ec4\u4ef6\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"div")," \u5b50\u7ec4\u4ef6\uff0c\u89e6\u53d1\u66f4\u65b0\uff0c\u4f46\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"child render!")," \u5e76\u4e0d\u4f1a\u6253\u5370\u3002\n\u8fd9\u662f\u56e0\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"Son")," \u7ec4\u4ef6\u4f1a\u8fdb\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"bailout")," \u903b\u8f91\u3002"))),Object(r.b)("h2",{id:"bailout\u7684\u6761\u4ef6"},"bailout\u7684\u6761\u4ef6"),Object(r.b)("h3",{id:"1-oldprops--newprops"},"1. oldProps === newProps"),Object(r.b)("p",null,"\u8fd9\u91cc\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"\u5168\u7b49\u6bd4\u8f83"),"\uff0c\u5305\u542b\u5f15\u7528\u76f8\u7b49\u3002"),Object(r.b)("p",null,"\u6211\u4eec\u77e5\u9053\u7ec4\u4ef6render\u4f1a\u8fd4\u56deJSX\uff0cJSX\u662fReact.createElement\u7684\u8bed\u6cd5\u7cd6\u3002"),Object(r.b)("p",null,"\u6240\u4ee5render\u7684\u8fd4\u56de\u7ed3\u679c\u5b9e\u9645\u4e0a\u662fReact.createElement\u7684\u6267\u884c\u7ed3\u679c\uff0c\u5373\u4e00\u4e2a\u5305\u542bprops\u5c5e\u6027\u7684\u5bf9\u8c61\u3002"),Object(r.b)("p",null,"\u5373\u4f7f\u672c\u6b21\u66f4\u65b0\u4e0e\u4e0a\u6b21\u66f4\u65b0props\u4e2d\u6bcf\u4e00\u9879\u53c2\u6570\u90fd\u6ca1\u6709\u53d8\u5316\uff0c\u4f46\u662f\u672c\u6b21\u66f4\u65b0\u662fReact.createElement\u7684\u6267\u884c\u7ed3\u679c\uff0c\u662f\u4e00\u4e2a\u5168\u65b0\u7684props\u5f15\u7528\uff0c\u6240\u4ee5oldProps !== newProps\u3002"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"\u5982\u4f55\u4fdd\u8bc1 oldProps === newProps")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u901a\u8fc7\u53d8\u91cf\u4fdd\u5b58 ",Object(r.b)("inlineCode",{parentName:"p"},"React.createElement")," \u7684\u6267\u884c\u7ed3\u679c"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'{6,13} title="\u521b\u5efa\u4e34\u65f6\u53d8\u91cf"',"{6,13}":!0,title:'"\u521b\u5efa\u4e34\u65f6\u53d8\u91cf"'}),"function Son() {\n  console.log('child render!');\n  return <div>Son</div>;\n}\nconst MemoSon = <Son />\nfunction Parent() {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <div onClick={() => {setCount(count + 1)}}>\n      \u70b9\u51fb {count}\n      <MemoSon />\n    </div>\n  );\n}\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'{11} title="\u901a\u8fc7children\u6e32\u67d3"',"{11}":!0,title:'"\u901a\u8fc7children\u6e32\u67d3"'}),"function Son() {\n  console.log('child render!');\n  return <div>Son</div>;\n}\nfunction Parent(props) {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <div onClick={() => {setCount(count + 1)}}>\n      \u70b9\u51fb {count}\n      {props.children}\n    </div>\n  );\n}\n\n<Parent>\n  <Son />\n</Parent>\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"children")," \u5b9e\u9645\u5c31\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"jsx"),"\uff0c\u4e5f\u5c31\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"React.createElement")," \u7684\u6267\u884c\u7ed3\u679c\uff0c\u6bcf\u6b21\u90fd\u662f\u540c\u4e00\u4e2a\u5f15\u7528"))))),Object(r.b)("h3",{id:"2-context-value-\u6ca1\u6709\u53d8\u5316"},Object(r.b)("del",{parentName:"h3"},"2. context value \u6ca1\u6709\u53d8\u5316")),Object(r.b)("p",null,"\u8fd9\u4e2a\u5224\u65ad\u6761\u4ef6\u662f\u7559\u7ed9\u5df2\u5e9f\u5f03\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"context")," \u4f7f\u7528\u7684\uff0c\u53ef\u4ee5\u5ffd\u7565\u3002"),Object(r.b)("h3",{id:"3-workinprogresstype--currenttype"},"3. workInProgress.type === current.type"),Object(r.b)("p",null,"\u66f4\u65b0\u524d\u540e ",Object(r.b)("inlineCode",{parentName:"p"},"fiber.type")," \u4e0d\u53d8\uff0c\u6bd4\u5982 ",Object(r.b)("inlineCode",{parentName:"p"},"div")," \u6ca1\u53d8\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"p")," \u3002"),Object(r.b)("h3",{id:"4-includessomelanerenderlanes-updatelanes"},"4. !includesSomeLane(renderLanes, updateLanes)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"includesSomeLane(renderLanes, updateLanes)")," \u8fd9\u53e5\u4ee3\u7801\u662f\u4e3a\u4e86\u5224\u65ad\u5f53\u524d\u8282\u70b9\u4e0a\u7684\u66f4\u65b0\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u662f\u5426\u5305\u542b\u5728\u4e86\u6b64\u6b21\u66f4\u65b0 \u7684\u4f18\u5148\u7ea7\u4e4b\u4e2d\u3002\u5982\u679c\u5f53\u524d\u8282\u70b9\u7684\u66f4\u65b0\u4f18\u5148\u7ea7\u5927\u4e8e\u7b49\u4e8e\u6b64\u6b21\u66f4\u65b0\u7684\u4f18\u5148\u7ea7\uff0c\u5219 ",Object(r.b)("inlineCode",{parentName:"p"},"includesSomeLane(renderLanes, updateLanes)")," \u4f1a\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3}","{3}":!0}),"import React from 'react'\nfunction Son() {\n  const [count, setCount] = React.useState(1)\n  return <div onClick={() => setCount(2)}>{count}</div>;\n}\n\nconst memoizedSon = <Son />\n\nexport default class App extends React.Component {\n  render() {\n    return memoizedSon\n  }\n}\n")),Object(r.b)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u5f53\u70b9\u51fb ",Object(r.b)("inlineCode",{parentName:"p"},"div")," \u65f6\u4f1a\u89e6\u53d1\u4e00\u8f6e\u66f4\u65b0\uff0c ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u4f1a\u8fdb\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"bailout")," \u903b\u8f91\uff0c\u4e14 ",Object(r.b)("inlineCode",{parentName:"p"},"includesSomeLane(renderLanes, workInProgress.childLanes)")," \u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"true")," \u6240\u4ee5\u4f1a\u7ee7\u7eed\u5904\u7406\u5b50\u8282\u70b9 ",Object(r.b)("inlineCode",{parentName:"p"},"Son"),"\u3002\u800c ",Object(r.b)("inlineCode",{parentName:"p"},"Son")," \u8282\u70b9\u5bf9\u5e94\u7684\u66f4\u65b0\u4f18\u5148\u7ea7\u662f\u7b49\u4e8e\u6b64\u6b21\u66f4\u65b0\u7684\u4f18\u5148\u7ea7\u7684\uff0c\u6240\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"Son")," \u4e0d\u4f1a\u8d70 ",Object(r.b)("inlineCode",{parentName:"p"},"bailout"),"\u3002"),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://mp.weixin.qq.com/s?__biz=MzkzMjIxNTcyMA==&mid=2247485292&idx=1&sn=822bfd7aafb151652c3102acaa6c8ba1&chksm=c25e69abf529e0bdac15cd21567aac53de693ab5159839f345e62d323a29069dc251888535ad&cur_album_id=1783121402896678912&scene=189#rd"}),"\u4eceContext\u6e90\u7801\u5b9e\u73b0\u8c08React\u6027\u80fd\u4f18\u5316")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://mp.weixin.qq.com/s?__biz=MzkzMjIxNTcyMA==&mid=2247485264&idx=1&sn=57dcf2fa177e0ae92a754176452139f5&chksm=c25e6997f529e081c2b27fec875a9b23ee6b24b7657e6f9bbc54ee72e6ea5a8e16947f916b66&token=296021054&lang=zh_CN#rd"}),"React\u7ec4\u4ef6\u5230\u5e95\u4ec0\u4e48\u65f6\u5019render\u554a")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.qiyuandi.com/zhanzhang/zonghe/12611.html"}),"React \u6e90\u7801\u89e3\u6790\u4e4b\u534f\u8c03\u8fc7\u7a0b\uff08\u4e00\uff09"))))}l.isMDXComponent=!0},292:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(t),s=a,m=d["".concat(i,".").concat(s)]||d[s]||u[s]||c;return t?r.a.createElement(m,o(o({ref:n},l),{},{components:t})):r.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=s;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);