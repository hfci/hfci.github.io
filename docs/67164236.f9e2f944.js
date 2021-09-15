(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),c=(n(0),n(238)),a={id:"reactStyledComponentsTypescript",title:"styled-components typescript",hide_title:!0,sidebar_label:"typescript"},p={unversionedId:"react/styledComponents/reactStyledComponentsTypescript",id:"react/styledComponents/reactStyledComponentsTypescript",isDocsHomePage:!1,title:"styled-components typescript",description:"1. \u5b9a\u4e49 props",source:"@site/docs/react/styledComponents/typescript.md",slug:"/react/styledComponents/reactStyledComponentsTypescript",permalink:"/docs/react/styledComponents/reactStyledComponentsTypescript",version:"current",sidebar_label:"typescript",sidebar:"reactdoc",previous:{title:"react \u6d45\u6bd4\u8f83",permalink:"/docs/react/goods/reactShallowCompare"},next:{title:"styled-components \u4f7f\u7528\u6280\u5de7",permalink:"/docs/react/styledComponents/reactStyledComponentsSkill"}},i=[{value:"1. \u5b9a\u4e49 props",id:"1-\u5b9a\u4e49-props",children:[]}],s={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"1-\u5b9a\u4e49-props"},"1. \u5b9a\u4e49 props"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{6}","{6}":!0}),"interface IStyledButton {\n  /** \u900f\u660e\u5ea6 */\n  opacity?: number;\n}\n\nconst Button = styled.div<IStyledButton>`\n  width: 100px;\n  height: 100px;\n  background-color: blue;\n  border-radius: 6px;\n  color: red;\n  opacity: ${p => p.opacity};\n`\n\nfunction App (): JSX.Element {\n  return <Button opacity={0.1}><h1>1</h1></Button>\n}\n")))}l.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,m=u["".concat(a,".").concat(y)]||u[y]||d[y]||c;return n?o.a.createElement(m,p(p({ref:t},s),{},{components:n})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);