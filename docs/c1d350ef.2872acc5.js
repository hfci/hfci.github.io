(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(237));const c={id:"reactRenderProp",title:"react render prop",hide_title:!0,sidebar_label:"render prop"},o={unversionedId:"react/advance/reactRenderProp",id:"react/advance/reactRenderProp",isDocsHomePage:!1,title:"react render prop",description:"\u7b80\u4ecb",source:"@site/docs/react/advance/renderProp.md",slug:"/react/advance/reactRenderProp",permalink:"/docs/react/advance/reactRenderProp",version:"current",sidebar_label:"render prop",sidebar:"reactdoc",previous:{title:"react \u9ad8\u9636\u7ec4\u4ef6",permalink:"/docs/react/advance/reactHOC"},next:{title:"react\u5b50\u7ec4\u4ef6\u91cd\u6e32\u67d3\u95ee\u9898",permalink:"/docs/react/performance/reactPerformanceManyTimesRender"}},i=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5982\u679c\u8bf4React\u7684\u6838\u5fc3\u662fState => UI, \u666e\u901a\u7684\u7ec4\u4ef6\u662fUI\u91cd\u7528\uff0c\u90a3\u4e48render props\u5c31\u662f\u4e3a\u4e86State\u91cd\u7528\u800c\u5e94\u8fd0\u800c\u751f\u7684\u3002")),Object(a.b)("p",null,"\u6307\u4e00\u79cd\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"React")," \u7ec4\u4ef6\u4e4b\u95f4\u4f7f\u7528\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"\u503c\u4e3a\u51fd\u6570\u7684 prop")," \u5171\u4eab\u4ee3\u7801\u7684\u7b80\u5355\u6280\u672f"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{9,17-19}","{9,17-19}":!0}),"interface IItemProp {\n  children: (num: number) => JSX.Element;\n}\n\nfunction Item(prop: IItemProp) {\n  const [num, setNum] = React.useState(1)\n  return (\n    <div>\n      { prop.children(num) }\n    </div>\n  )\n}\n\nReactDom.render(\n  <Item>\n    {(num: number) => {\n      return <div>{num}</div>\n    }}\n  </Item>,\n  document.querySelector('#app')\n)\n")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"\u63a7\u5236\u53cd\u8f6c"),"\uff0c\u6570\u636e\u7531\u7236\u7ec4\u4ef6\u63d0\u4f9b\uff0c\u4f46\u662f\u53c8\u4e0d\u76f4\u63a5\u5d4c\u5957\u5728\u7236\u7ec4\u4ef6\u5185\u90e8\uff0c\u8fbe\u5230\u4e86\u89e3\u8026\u7684\u76ee\u7684\u3002"),Object(a.b)("li",{parentName:"ul"},"\u4e00\u5207\u80fd\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"\u9ad8\u9636\u7ec4\u4ef6")," \u5b9e\u73b0\u7684\u903b\u8f91\uff0c\u90fd\u80fd\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"render prop")," \u6765\u89e3\u51b3\u3002")))),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://juejin.cn/post/6844903521343504398"}),"[\u8bd1] \u4f7f\u7528 Render props \u5427\uff01"))))}l.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=d(n),m=r,s=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return n?a.a.createElement(s,i(i({ref:t},l),{},{components:n})):a.a.createElement(s,i({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);