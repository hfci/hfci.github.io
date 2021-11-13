(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),c=n(7),r=(n(0),n(302)),i={id:"reactBatchUpdate",title:"react\u6279\u91cf\u66f4\u65b0",hide_title:!0,sidebar_label:"\u6279\u91cf\u66f4\u65b0"},o={unversionedId:"react/performance/reactBatchUpdate",id:"react/performance/reactBatchUpdate",isDocsHomePage:!1,title:"react\u6279\u91cf\u66f4\u65b0",description:"\u5728 legacy \u6a21\u5f0f\u4e0b\uff0creact \u9ed8\u8ba4\u662f\u6279\u91cf\u6765\u66f4\u65b0\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u60c5\u51b5\u4f1a\u88ab\u6253\u7834\u8fd9\u79cd\u6279\u91cf\u66f4\u65b0\u7684\u60c5\u51b5\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7 unstable_batchedUpdates \u6765\u6279\u91cf\u66f4\u65b0\u3002",source:"@site/docs/react/performance/\u6279\u91cf\u66f4\u65b0.md",slug:"/react/performance/reactBatchUpdate",permalink:"/docs/react/performance/reactBatchUpdate",version:"current",sidebar_label:"\u6279\u91cf\u66f4\u65b0",sidebar:"reactdoc",previous:{title:"react\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3\u95ee\u9898",permalink:"/docs/react/performance/reactPerformanceManyTimesRender"},next:{title:"react bailout",permalink:"/docs/react/performance/reactBailout"}},l=[{value:"\u5f02\u6b65",id:"\u5f02\u6b65",children:[{value:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e5f\u5c31\u662f\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u662f\u5f02\u6b65\u7684",id:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e5f\u5c31\u662f\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u662f\u5f02\u6b65\u7684",children:[]},{value:"<code>React</code> \u5408\u6210\u4e8b\u4ef6\u4e2d\uff0c\u4e5f\u662f\u5f02\u6b65\u7684",id:"react-\u5408\u6210\u4e8b\u4ef6\u4e2d\uff0c\u4e5f\u662f\u5f02\u6b65\u7684",children:[]}]},{value:"\u540c\u6b65",id:"\u540c\u6b65",children:[{value:"<code>setTimeout</code> \u4e2d\u7684\u66f4\u65b0\u662f\u540c\u6b65\u7684",id:"settimeout-\u4e2d\u7684\u66f4\u65b0\u662f\u540c\u6b65\u7684",children:[]},{value:"<code>ajax</code> \u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f <code>Promise</code>\u91cc\u9762\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684\u3002",id:"ajax-\u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f-promise\u91cc\u9762\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684\u3002",children:[]},{value:"\u539f\u751f <code>DOM</code> \u4e8b\u4ef6\u5185\u90e8\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684",id:"\u539f\u751f-dom-\u4e8b\u4ef6\u5185\u90e8\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"legacy")," \u6a21\u5f0f\u4e0b\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"react")," \u9ed8\u8ba4\u662f\u6279\u91cf\u6765\u66f4\u65b0\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u60c5\u51b5\u4f1a\u88ab\u6253\u7834\u8fd9\u79cd\u6279\u91cf\u66f4\u65b0\u7684\u60c5\u51b5\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"unstable_batchedUpdates")," \u6765\u6279\u91cf\u66f4\u65b0\u3002"),Object(r.b)("p",null,"\u7b80\u5355\u6765\u89e3\u91ca\uff0cReact \u7684\u66f4\u65b0\u662f\u57fa\u4e8e Transaction\uff08\u4e8b\u52a1\uff09\u7684\uff0cTransacation \u5c31\u662f\u7ed9\u76ee\u6807\u6267\u884c\u7684\u51fd\u6570\u5305\u88f9\u4e00\u4e0b\uff0c\u52a0\u4e0a\u524d\u7f6e\u548c\u540e\u7f6e\u7684 hook \uff08\u6709\u70b9\u7c7b\u4f3c koa \u7684 middleware\uff09\uff0c\u5728\u5f00\u59cb\u6267\u884c\u4e4b\u524d\u5148\u6267\u884c initialize hook\uff0c\u7ed3\u675f\u4e4b\u540e\u518d\u6267\u884c close hook\uff0c\u8fd9\u6837\u642d\u914d\u4e0a isBatchingUpdates \u8fd9\u6837\u7684\u5e03\u5c14\u6807\u5fd7\u4f4d\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e00\u6574\u4e2a\u51fd\u6570\u8c03\u7528\u6808\u5185\u7684\u591a\u6b21 setState \u5168\u90e8\u5165 pending \u961f\u5217\uff0c\u7ed3\u675f\u540e\u7edf\u4e00 apply \u4e86\u3002"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6240\u6709\u7684\u5f02\u6b65\u51fd\u6570\uff08",Object(r.b)("inlineCode",{parentName:"p"},"setTimeout, Promise"),"\uff09\u5185\u90e8\u7684\u53d8\u66f4\u90fd\u4e0d\u4f1a\u6279\u91cf\u5904\u7406\uff0c\u56e0\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"react")," \u6ca1\u529e\u6cd5\u77e5\u9053\u6267\u884c\u7ed3\u675f\u7684\u65f6\u673a\u3002")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"unstable_batchedUpdates")," \u6765\u89e3\u51b3\uff1a"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{6-11}","{6-11}":!0}),"function Parent() {\n    const [show, setShow] = React.useState(true)\n    const [count, setCount] = React.useState(1)\n    console.log('parent render')\n    function clickEvent() {\n      setTimeout(() => {\n        ReactDom.unstable_batchedUpdates(() => {\n          setShow(!show)\n          setCount(count + 1)\n        })\n      }, 0)\n    }\n    return (\n      <div>\n        { show ? <Child /> : false }\n        <div>{count}</div>\n        <div onClick={clickEvent}>\u5207\u6362</div>\n      </div>\n    )\n  }\n")))))),Object(r.b)("h2",{id:"\u5f02\u6b65"},"\u5f02\u6b65"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u591a\u6b21 ",Object(r.b)("inlineCode",{parentName:"p"},"setState"),"\uff0c\u6279\u91cf\u66f4\u65b0\u53ea\u6267\u884c\u4e00\u6b21 ",Object(r.b)("inlineCode",{parentName:"p"},"render"))),Object(r.b)("h3",{id:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e5f\u5c31\u662f\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u662f\u5f02\u6b65\u7684"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e5f\u5c31\u662f\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u662f\u5f02\u6b65\u7684"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4-5}","{4-5}":!0}),"function Select() {\n  const [num, setNum] = React.useState(1)\n\n  setNum(1)\n  setNum(2)\n\n  return <div>{num}</div> // \u53ea\u4f1arender\u4e00\u6b21\n}\n")),Object(r.b)("h3",{id:"react-\u5408\u6210\u4e8b\u4ef6\u4e2d\uff0c\u4e5f\u662f\u5f02\u6b65\u7684"},Object(r.b)("inlineCode",{parentName:"h3"},"React")," \u5408\u6210\u4e8b\u4ef6\u4e2d\uff0c\u4e5f\u662f\u5f02\u6b65\u7684"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{5,21}","{5,21}":!0}),"function Parent() {\n  const [num, setNum] = React.useState(1)\n  function clickEvent() {\n    console.log('parent setState')\n    setNum(num + 1)\n  }\n  return (\n    <div onClick={clickEvent}>\n      <div>parent</div>\n      <Child />\n    </div>\n  )\n}\n\nfunction Child() {\n  console.log('child render')\n\n  const [num, setNum] = React.useState(1)\n  function clickEvent() {\n    console.log('child setState')\n    setNum(num + 1)\n  }\n  return <div onClick={clickEvent}>child</div>\n}\n")),Object(r.b)("p",null,"  :::success \u70b9\u51fbchild\u6267\u884c\u7ed3\u679c\n\u4f9d\u6b21\u6253\u5370\uff1a",Object(r.b)("inlineCode",{parentName:"p"},"child setState"),"\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"parent setState"),"\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"child render"),"\uff0c\u53ef\u4ee5\u4e24\u6b21 ",Object(r.b)("inlineCode",{parentName:"p"},"setState"),"\uff0c\u53ea\u6709\u4e00\u6b21 ",Object(r.b)("inlineCode",{parentName:"p"},"render"),"\n:::"),Object(r.b)("h2",{id:"\u540c\u6b65"},"\u540c\u6b65"),Object(r.b)("p",null,"\u6bcf\u4e00\u6b21 ",Object(r.b)("inlineCode",{parentName:"p"},"setState"),"\uff0c\u90fd\u7acb\u9a6c\u6267\u884c ",Object(r.b)("inlineCode",{parentName:"p"},"render")),Object(r.b)("h3",{id:"settimeout-\u4e2d\u7684\u66f4\u65b0\u662f\u540c\u6b65\u7684"},Object(r.b)("inlineCode",{parentName:"h3"},"setTimeout")," \u4e2d\u7684\u66f4\u65b0\u662f\u540c\u6b65\u7684"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{8}","{8}":!0}),"function Item() {\n  console.log('item render')\n\n  const [num, setNum] = React.useState(1)\n  function clickEvent() {\n    setTimeout(() => {\n      console.log('item setState')\n      setNum(2)\n\n      console.log('item setState')\n      setNum(3)\n    }, 0)\n  }\n  return <div onClick={clickEvent}>child {num}</div>\n}\n")),Object(r.b)("p",null,"  :::success \u70b9\u51fb\u4e4b\u540e\u6267\u884c\u7ed3\u679c\n\u4f9d\u6b21\u6253\u5370:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"item setState"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"item render"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"item setState"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"item render")),Object(r.b)("p",{parentName:"li"},"\u4ece\u6253\u5370\u7ed3\u679c\u6765\u770b\u6bcf\u6b21 ",Object(r.b)("inlineCode",{parentName:"p"},"setState")," \u90fd\u4f1a\u7acb\u9a6c\u6267\u884c\u4e00\u6b21 ",Object(r.b)("inlineCode",{parentName:"p"},"render"),"\n:::"))),Object(r.b)("h3",{id:"ajax-\u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f-promise\u91cc\u9762\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684\u3002"},Object(r.b)("inlineCode",{parentName:"h3"},"ajax")," \u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f ",Object(r.b)("inlineCode",{parentName:"h3"},"Promise"),"\u91cc\u9762\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{11,13}","{11,13}":!0}),"function Item() {\n  console.log('child render')\n\n  const [num, setNum] = React.useState(1)\n  const [num1, setNum1] = React.useState(1)\n  React.useEffect(() => {\n    async function loadData() {\n\n    await window.fetch(window.location.href)\n    console.log('item setState')\n    setNum(3)\n    console.log('item setState')\n    setNum1(2)\n    }\n    loadData()\n  }, [])\n  return <div id=\"item\">child {num} {num1}</div>\n}\n")),Object(r.b)("h3",{id:"\u539f\u751f-dom-\u4e8b\u4ef6\u5185\u90e8\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684"},"\u539f\u751f ",Object(r.b)("inlineCode",{parentName:"h3"},"DOM")," \u4e8b\u4ef6\u5185\u90e8\u7684\u6267\u884c\u4e5f\u662f\u540c\u6b65\u7684"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:"{6,8,11}","{6,8,11}":!0}),"function Item() {\n  console.log('child render')\n\n  const [num, setNum] = React.useState(1)\n  React.useEffect(() => {\n    document.querySelector('#item')?.addEventListener('click', () => {\n      console.log('item setState')\n      setNum(2)\n\n      console.log('item setState')\n      setNum(6)\n    })\n  }, [])\n  return <div id=\"item\">child {num}</div>\n}\n")),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000021303172"}),"React transaction\u5b8c\u5168\u89e3\u8bfb"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000039776687"}),"setState\u8be6\u89e3\u4e0eReact\u6027\u80fd\u4f18\u5316")))))}p.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),p=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||r;return n?c.a.createElement(u,o(o({ref:t},b),{},{components:n})):c.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<r;b++)i[b]=n[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);