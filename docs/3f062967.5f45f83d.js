(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(292));const o={id:"reactUsefulPlugin",title:"\u6709\u7528\u63d2\u4ef61",hide_title:!0,sidebar_label:"react \u6709\u7528\u63d2\u4ef6"},c={unversionedId:"react/plugins/reactUsefulPlugin",id:"react/plugins/reactUsefulPlugin",isDocsHomePage:!1,title:"\u6709\u7528\u63d2\u4ef61",description:"1. react-loadable \u52a0\u8f7d\u5e26 Promise \u7684\u9ad8\u9636\u7ec4\u4ef6",source:"@site/docs/react/plugins/\u6709\u7528\u63d2\u4ef61.md",slug:"/react/plugins/reactUsefulPlugin",permalink:"/docs/react/plugins/reactUsefulPlugin",version:"current",sidebar_label:"react \u6709\u7528\u63d2\u4ef6",sidebar:"reactdoc",previous:{title:"react-typescript \u57fa\u7840\u7c7b\u578b",permalink:"/docs/react/typescript/reactTypescriptBase"},next:{title:"recoil \u57fa\u7840\u7528\u6cd5",permalink:"/docs/react/recoil/reactRecoilBase"}},i=[{value:"1. react-loadable \u52a0\u8f7d\u5e26 Promise \u7684\u9ad8\u9636\u7ec4\u4ef6",id:"1-react-loadable-\u52a0\u8f7d\u5e26-promise-\u7684\u9ad8\u9636\u7ec4\u4ef6",children:[]},{value:"2. react-router-config \u9759\u6001\u914d\u7f6e\u8def\u7531\u7ba1\u7406\u5668",id:"2-react-router-config-\u9759\u6001\u914d\u7f6e\u8def\u7531\u7ba1\u7406\u5668",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[{value:"1. react-slick \u53ef\u9ad8\u5ea6\u5b9a\u5236\u8f6e\u64ad\u7ec4\u4ef6",id:"1-react-slick-\u53ef\u9ad8\u5ea6\u5b9a\u5236\u8f6e\u64ad\u7ec4\u4ef6",children:[]},{value:"2. react-hot-toast \u8f7b\u5de7\u7f8e\u89c2\u53ef\u5b9a\u5236\u7684Toast\u63d0\u793a",id:"2-react-hot-toast-\u8f7b\u5de7\u7f8e\u89c2\u53ef\u5b9a\u5236\u7684toast\u63d0\u793a",children:[]},{value:"3. react-sortable-hoc \u9ad8\u6027\u80fd\u8f7b\u91cf\u7ea7\u7684\u62d6\u62fd\u6392\u5e8f\u5e93",id:"3-react-sortable-hoc-\u9ad8\u6027\u80fd\u8f7b\u91cf\u7ea7\u7684\u62d6\u62fd\u6392\u5e8f\u5e93",children:[]},{value:"5. react-beautiful-dnd \u529f\u80fd\u5f3a\u5927\u7684\u62d6\u62fd\u5e93",id:"5-react-beautiful-dnd-\u529f\u80fd\u5f3a\u5927\u7684\u62d6\u62fd\u5e93",children:[]}]}],l={rightToc:i};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"1-react-loadable-\u52a0\u8f7d\u5e26-promise-\u7684\u9ad8\u9636\u7ec4\u4ef6"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/jamiebuilds/react-loadable#readme"}),"1. react-loadable")," \u52a0\u8f7d\u5e26 Promise \u7684\u9ad8\u9636\u7ec4\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Loadable from 'react-loadable';\nimport Loading from './my-loading-component';\n\nconst LoadableComponent = Loadable({\n  loader: () => import('./my-component'),\n  loading: Loading,\n});\n\nexport default class App extends React.Component {\n  render() {\n    return <LoadableComponent/>;\n  }\n}\n")),Object(a.b)("h3",{id:"2-react-router-config-\u9759\u6001\u914d\u7f6e\u8def\u7531\u7ba1\u7406\u5668"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config"}),"2. react-router-config")," \u9759\u6001\u914d\u7f6e\u8def\u7531\u7ba1\u7406\u5668"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const routes = [\n  {\n    component: Root,\n    routes: [\n      {\n        path: "/",\n        exact: true,\n        component: Home\n      },\n      {\n        path: "/child/:id",\n        component: Child,\n        routes: [\n          {\n            path: "/child/:id/grand-child",\n            component: GrandChild\n          }\n        ]\n      }\n    ]\n  }\n]\n')),Object(a.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(a.b)("h3",{id:"1-react-slick-\u53ef\u9ad8\u5ea6\u5b9a\u5236\u8f6e\u64ad\u7ec4\u4ef6"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/akiran/react-slick"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/akiran/react-slick?label=react-slick&style=social",alt:"1. react-slick \u53ef\u9ad8\u5ea6\u5b9a\u5236\u8f6e\u64ad\u7ec4\u4ef6"})))),Object(a.b)("p",null,"\u53ef\u9ad8\u5ea6\u5b9a\u5236\u7684\u8f6e\u64ad\u7ec4\u4ef6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport Slider from "react-slick";\n\nexport default function SimpleSlider() {\n  var settings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1\n  };\n  return (\n    <Slider {...settings}>\n      <div>\n        <h3>1</h3>\n      </div>\n      <div>\n        <h3>2</h3>\n      </div>\n      <div>\n        <h3>3</h3>\n      </div>\n      <div>\n        <h3>4</h3>\n      </div>\n      <div>\n        <h3>5</h3>\n      </div>\n      <div>\n        <h3>6</h3>\n      </div>\n    </Slider>\n  );\n}\n')),Object(a.b)("h3",{id:"2-react-hot-toast-\u8f7b\u5de7\u7f8e\u89c2\u53ef\u5b9a\u5236\u7684toast\u63d0\u793a"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/timolins/react-hot-toast"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/timolins/react-hot-toast?label=react-hot-toast&style=social",alt:"2. react-hot-toast \u8f7b\u5de7\u7f8e\u89c2\u53ef\u5b9a\u5236\u7684Toast\u63d0\u793a"})))),Object(a.b)("p",null,"\u8f7b\u5de7\u7f8e\u89c2\u53ef\u5b9a\u5236\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Toast")," \u63d0\u793a\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import toast, { Toaster } from 'react-hot-toast';\n\nconst notify = () => toast('Here is your toast.');\n\nconst App = () => {\n  return (\n    <div>\n      <button onClick={notify}>Make me a toast</button>\n      <Toaster />\n    </div>\n  );\n};\n")),Object(a.b)("h3",{id:"3-react-sortable-hoc-\u9ad8\u6027\u80fd\u8f7b\u91cf\u7ea7\u7684\u62d6\u62fd\u6392\u5e8f\u5e93"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/clauderic/react-sortable-hoc"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/clauderic/react-sortable-hoc?label=react-sortable-hoc&style=social",alt:"3. react-sortable-hoc \u9ad8\u6027\u80fd\u8f7b\u91cf\u7ea7\u7684\u62d6\u62fd\u6392\u5e8f\u5e93"})))),Object(a.b)("p",null,"\u9ad8\u6027\u80fd\u800c\u4e14\u8f7b\u91cf\u7ea7\u7684\u62d6\u62fd\u6392\u5e8f\u5e93\uff0c\u8fd8\u6709\u987a\u6ed1\u7684\u6eda\u52a8\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, {Component} from 'react';\nimport {render} from 'react-dom';\nimport {SortableContainer, SortableElement} from 'react-sortable-hoc';\nimport arrayMove from 'array-move';\n\nconst SortableItem = SortableElement(({value}) => <li>{value}</li>);\n\nconst SortableList = SortableContainer(({items}) => {\n  return (\n    <ul>\n      {items.map((value, index) => (\n        <SortableItem key={`item-${value}`} index={index} value={value} />\n      ))}\n    </ul>\n  );\n});\n\nclass SortableComponent extends Component {\n  state = {\n    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],\n  };\n  onSortEnd = ({oldIndex, newIndex}) => {\n    this.setState(({items}) => ({\n      items: arrayMove(items, oldIndex, newIndex),\n    }));\n  };\n  render() {\n    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;\n  }\n}\n\nrender(<SortableComponent />, document.getElementById('root'));\n")),Object(a.b)("h3",{id:"5-react-beautiful-dnd-\u529f\u80fd\u5f3a\u5927\u7684\u62d6\u62fd\u5e93"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/atlassian/react-beautiful-dnd"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/atlassian/react-beautiful-dnd?label=react-beautiful-dnd&style=social",alt:"5. react-beautiful-dnd \u529f\u80fd\u5f3a\u5927\u7684\u62d6\u62fd\u5e93"})))),Object(a.b)("p",null,"\u529f\u80fd\u975e\u5e38\u5f3a\u5927\u7684\u62d6\u62fd\u5e93\u3002"))}s.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);