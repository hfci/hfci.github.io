(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{326:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return t?a.a.createElement(m,o(o({ref:n},p),{},{components:t})):a.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(7),c=(t(0),t(326)),i={},o={unversionedId:"enginee/eslint/configOptions/_partial-extends",id:"enginee/eslint/configOptions/_partial-extends",isDocsHomePage:!1,title:"_partial-extends",description:"extends",source:"@site/docs/enginee/eslint/configOptions/_partial-extends.md",slug:"/enginee/eslint/configOptions/_partial-extends",permalink:"/docs/enginee/eslint/configOptions/_partial-extends",version:"current"},l=[{value:"extends",id:"extends",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"extends"},"extends"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"extends")," \u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"eslint")," \u5f00\u5934\u7684\uff1a\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"ESLint")," \u5b98\u65b9\u7684\u6269\u5c55\uff1a"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  extends: [\n    'eslint:recommended'\n  ]\n}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"plugin")," \u5f00\u5934\u7684\uff1a\u4f7f\u7528\u63d2\u4ef6\u91cc\u9762\u5b9a\u4e49\u7684\u89c4\u5219\u7ed3\u5408"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  plugins: [\n    'react'\n  ]\n  extends: [\n    'plugin:react/recommended'\n  ]\n}\n")),Object(c.b)("p",{parentName:"li"},"  \u63d2\u4ef6\u4e0b\u9762\u5b9a\u4e49\u7684\u89c4\u5219\u96c6\u5408\u662f\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"configs")," \u6765\u5b9a\u4e49\u7684"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  deprecatedRules,\n  rules: allRules,\n  configs: {\n    // \u53ef\u4ee5\u901a\u8fc7\uff1aplugin:react/recommended \u6765\u4f7f\u7528\n    recommended: {\n      rules: {...}\n    },\n    // \u53ef\u4ee5\u901a\u8fc7\uff1aplugin:react/all \u6765\u4f7f\u7528\n    all: {\n      rules: activeRulesConfig\n    },\n    // \u53ef\u4ee5\u901a\u8fc7\uff1aplugin:react/jsx-runtime \u6765\u4f7f\u7528\n    'jsx-runtime': {\n      rules: {\n        'react/react-in-jsx-scope': 0,\n        'react/jsx-uses-react': 0\n      }\n    }\n}\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"eslint-config-x")," \u6216\u8005 ",Object(c.b)("inlineCode",{parentName:"p"},"@cope/eslint-config-x")," \uff1a\u662f\u6765\u81f3 ",Object(c.b)("inlineCode",{parentName:"p"},"npm")," \u5305\u81ea\u5b9a\u4e49\u89c4\u5219\u7684"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = {\n  extends: [\n    'react',\n    'eslint-config-react',\n    '@vue/vue',\n    '@vue/eslint-config-vue'\n  ]\n}\n")))))))}s.isMDXComponent=!0}}]);