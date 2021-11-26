(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(7),a=(n(0),n(310)),o={id:"goodShell",title:"\u6709\u7528\u7684shell",hide_title:!0,sidebar_label:"\u6709\u7528\u7684shell"},l={unversionedId:"node/goodShell",id:"node/goodShell",isDocsHomePage:!1,title:"\u6709\u7528\u7684shell",description:"\u4f7f\u7528prettier\u7f8e\u5316\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\u4ee3\u7801",source:"@site/docs/node/\u597d\u7528\u7684shell\u811a\u672c.md",slug:"/node/goodShell",permalink:"/docs/node/goodShell",version:"current",sidebar_label:"\u6709\u7528\u7684shell"},c=[{value:"\u4f7f\u7528<code>prettier</code>\u7f8e\u5316\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\u4ee3\u7801",id:"\u4f7f\u7528prettier\u7f8e\u5316\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\u4ee3\u7801",children:[]}],p={rightToc:c};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u4f7f\u7528prettier\u7f8e\u5316\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\u4ee3\u7801"},"\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"h3"},"prettier"),"\u7f8e\u5316\u53d1\u751f\u6539\u53d8\u7684\u6587\u4ef6\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"{5}","{5}":!0}),'#!/bin/sh\n\nBASEDIR="<path to my project dir>"\n\nfiles=$(git diff --name-status master);\n\nwhile read -r file; do\n  mode=$(echo "$file" | awk \'{print $1}\')\n  filePath=$(echo "$file" | awk \'{print $2}\')\n  if [ "$mode" = "M" ] || [ "$mode" = "A" ] || [ "$mode" = "AM" ]\n    then\n      npx prettier --write $filePath\n  fi\ndone <<< "$files"\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git diff --name-status master")," \u5c06\u5f53\u524d\u5206\u652f\u4e0e",Object(a.b)("inlineCode",{parentName:"li"},"master"),"\u8fdb\u884c\u6bd4\u8f83\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"--name-status"),"\u751f\u6210\u4e24\u5217\u3002\u4e00\u5217\u662f",Object(a.b)("strong",{parentName:"li"},"\u6587\u4ef6\u66f4\u6539\u7c7b\u578b"),"\uff0c\u4e00\u5217\u662f",Object(a.b)("strong",{parentName:"li"},"\u6587\u4ef6\u8def\u5f84"),"\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a")),Object(a.b)("p",null,Object(a.b)("img",{alt:"git_diff",src:n(528).default})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"while read -r file; do"),"\u904d\u5386\u8bfb\u53d6\u7684\u6587\u4ef6\u7684\u884c"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mode=$(echo \"$file\" | awk '{print $1}')")," \u83b7\u53d6\u7b2c\u4e00\u5217\u7684\u5185\u5bb9\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"filePath=$(echo \"$file\" | awk '{print $2}')"),"\u83b7\u53d6\u7b2c\u4e8c\u5217\u7684\u5185\u5bb9\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"npx prettier --write $filePath"),"\u683c\u5f0f\u5316\u5e76\u8f93\u51fa\u6587\u4ef6\u3002")))}b.isMDXComponent=!0},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),f=r,s=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return n?i.a.createElement(s,l(l({ref:t},p),{},{components:n})):i.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},528:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git_diff-ce867befabdb84db0218dfa091017987.png"}}]);