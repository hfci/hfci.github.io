(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{326:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),f=t,d=l["".concat(i,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(d,c(c({ref:n},s),{},{components:r})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(7),a=(r(0),r(326)),i={},c={unversionedId:"enginee/esbuild/base/_partialServe",id:"enginee/esbuild/base/_partialServe",isDocsHomePage:!1,title:"_partialServe",description:"Serve",source:"@site/docs/enginee/esbuild/base/_partialServe.md",slug:"/enginee/esbuild/base/_partialServe",permalink:"/docs/enginee/esbuild/base/_partialServe",version:"current"},u=[{value:"Serve",id:"serve",children:[{value:"options",id:"options",children:[]}]}],s={rightToc:u};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"serve"},"Serve"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u542f\u52a8\u4e00\u4e2a",Object(a.b)("inlineCode",{parentName:"p"},"web"),"\u670d\u52a1\u5668")),Object(a.b)("h3",{id:"options"},"options"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"interface ServeOptions {\n  port?: number;\n  host?: string;\n  servedir?: string;\n  onRequest?: (args: ServeOnRequestArgs) => void;\n}\n\ninterface ServeOnRequestArgs {\n  remoteAddress: string;\n  method: string;\n  path: string;\n  status: number;\n  timeInMS: number;\n}\n")))}p.isMDXComponent=!0}}]);