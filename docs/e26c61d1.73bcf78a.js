(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{275:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return p})),n.d(r,"default",(function(){return u}));var t=n(2),o=(n(0),n(339));const a={id:"reactHOC",title:"react \u9ad8\u9636\u7ec4\u4ef6",hide_title:!0,sidebar_label:"\u9ad8\u9636\u7ec4\u4ef6"},c={unversionedId:"react/advance/reactHOC",id:"react/advance/reactHOC",isDocsHomePage:!1,title:"react \u9ad8\u9636\u7ec4\u4ef6",description:"\u9ad8\u9636\u7ec4\u4ef6\u662f\u53c2\u6570\u4e3a\u7ec4\u4ef6\uff0c\u8fd4\u56de\u503c\u4e3a\u65b0\u7ec4\u4ef6\u7684\u51fd\u6570\uff0c\u7528\u4e8e\u590d\u7528\u7ec4\u4ef6\u903b\u8f91\u7684\u4e00\u79cd\u9ad8\u7ea7\u6280\u5de7",source:"@site/docs/react/advance/\u9ad8\u9636\u7ec4\u4ef6.md",slug:"/react/advance/reactHOC",permalink:"/docs/react/advance/reactHOC",version:"current",sidebar_label:"\u9ad8\u9636\u7ec4\u4ef6",sidebar:"reactdoc",previous:{title:"react\u5408\u6210\u4e8b\u4ef6",permalink:"/docs/react/advance/reactCombineEvent"},next:{title:"react render prop",permalink:"/docs/react/advance/reactRenderProp"}},p=[],i={rightToc:p};function u({components:e,...r}){return Object(o.b)("wrapper",Object(t.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u9ad8\u9636\u7ec4\u4ef6\u662f\u53c2\u6570\u4e3a\u7ec4\u4ef6\uff0c\u8fd4\u56de\u503c\u4e3a\u65b0\u7ec4\u4ef6\u7684\u51fd\u6570\uff0c\u7528\u4e8e\u590d\u7528\u7ec4\u4ef6\u903b\u8f91\u7684\u4e00\u79cd\u9ad8\u7ea7\u6280\u5de7")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"const EnhancedComponent = higherOrderComponent(WrappedComponent);\n")),Object(o.b)("p",null,"\u4f8b\u5982\uff1a\u6355\u83b7\u7ec4\u4ef6\u9519\u8bef\u8fb9\u754c\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u4e0b\u9762\u7684\u8fd9\u79cd\u60c5\u5f62\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"<div>\n  <ErrorBoundary>\n    <AAA/>\n  </ErrorBoundary>\n  <ErrorBoundary>\n    <BBB/>\n  </ErrorBoundary>\n  <ErrorBoundary>\n    <CCC/>\n  </ErrorBoundary>\n  <ErrorBoundary>\n    <DDD/>\n  </ErrorBoundary>\n</div>\n")),Object(o.b)("p",null,"\u8981\u5904\u7406\u8fd9\u6837\u5570\u55e6\u7684\u5305\u88f9\uff0c\u53ef\u4ee5\u501f\u9274 ",Object(o.b)("inlineCode",{parentName:"p"},"React Router")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"withRouter")," \u51fd\u6570\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8f93\u51fa\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570    ",Object(o.b)("inlineCode",{parentName:"p"},"withErrorBoundary")," \uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"function withErrorBoundary<P> (Component: React.ComponentType<P>, errorBoundaryProps: ErrorBoundaryProps): React.ComponentType<P> {\n  const Wrapped: React.ComponentType<P> = props => {\n    return (\n      <ErrorBoundary {...errorBoundaryProps}>\n        <Component {...props}/>\n      </ErrorBoundary>\n    )\n  }\n\n  // DevTools \u663e\u793a\u7684\u7ec4\u4ef6\u540d\n  const name = Component.displayName ||Component.name || 'Component';\n  Wrapped.displayName = `withErrorBoundary(${name})`;\n\n  return Wrapped;\n}\n")),Object(o.b)("p",null,"\u8fd9\u6837\u5728\u4f7f\u7528\u7684\u65f6\u5019\u5c31\u7b80\u6d01\u591a\u4e86\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx",metastring:"{15}","{15}":!0}),"// \u4e1a\u52a1\u5b50\u7ec4\u4ef6\nconst User = () => {\n  return <div>User</div>\n}\n// \u5728\u4e1a\u52a1\u7ec4\u4ef6\u52a0\u4e00\u5c42 ErrorBoundary\nconst UserWithErrorBoundary = withErrorBoundary(User, {\n  onError: () => logger.error('\u51fa\u9519\u5566'),\n  onReset: () => console.log('\u5df2\u91cd\u7f6e')\n})\n\n// \u4e1a\u52a1\u7236\u7ec4\u4ef6\nconst App = () => {\n  return (\n    <div>\n      <UserWithErrorBoundary/>\n    </div>\n  )\n}\n")))}u.isMDXComponent=!0},339:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},d=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=t,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(m,p(p({ref:r},u),{},{components:n})):o.a.createElement(m,p({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=b;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);