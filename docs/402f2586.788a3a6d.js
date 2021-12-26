(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var i=n(2),r=n(7),a=(n(0),n(339)),c={id:"gitCommonUseGitCommand",title:"\u5e38\u7528\u547d\u4ee4",hide_title:!0,sidebar_label:"\u5e38\u7528\u547d\u4ee4"},o={unversionedId:"git/skill/gitCommonUseGitCommand",id:"git/skill/gitCommonUseGitCommand",isDocsHomePage:!1,title:"\u5e38\u7528\u547d\u4ee4",description:"git reset",source:"@site/docs/git/skill/commonUseGitCommand.md",slug:"/git/skill/gitCommonUseGitCommand",permalink:"/docs/git/skill/gitCommonUseGitCommand",version:"current",sidebar_label:"\u5e38\u7528\u547d\u4ee4",sidebar:"gitdoc",next:{title:"git\u539f\u7406",permalink:"/docs/git/skill/gitLearning"}},b=[{value:"git reset",id:"git-reset",children:[{value:"git reset --soft",id:"git-reset---soft",children:[]},{value:"git reset --mixed (default)",id:"git-reset---mixed-default",children:[]},{value:"git reset --hard",id:"git-reset---hard",children:[]}]},{value:"git revert",id:"git-revert",children:[]},{value:"git checkout",id:"git-checkout",children:[]},{value:"git reset, revert, check \u533a\u522b",id:"git-reset-revert-check-\u533a\u522b",children:[]}],m={rightToc:b};function l(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},m,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"git-reset"},"git reset"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"reset\uff1a\u91cd\u7f6e\uff1b\u6e05\u96f6"),"\uff0c\u547d\u4ee4\u5c06\u4f1a\u79fb\u52a8",Object(a.b)("inlineCode",{parentName:"p"},"HEAD"),"\u6307\u9488\u5230\u6307\u5b9a\u7684 commit\uff0c\u8fd9\u4e2a commit \u4e4b\u540e\u7684 commit \u88ab\u6e05\u9664\u6389")),Object(a.b)("p",null,Object(a.b)("img",{alt:"git-reset",src:n(523).default})),Object(a.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u4e00\u822c\u7528\u6765\u64a4\u9500",Object(a.b)("inlineCode",{parentName:"p"},"\u672a\u88ab\u63d0\u4ea4\u5230\u8fdc\u7a0b\u5b58\u50a8\u5e93"),"\u7684\u64cd\u4f5c\uff0c\u56e0\u4e3a\u4e00\u65e6\u63d0\u4ea4\u5230\u8fdc\u7a0b\u5b58\u50a8\u5e93\uff0c\u8fdc\u7a0b\u5b58\u50a8\u5e93\u7684 commit \u80af\u5b9a\u662f\u5305\u542b\u672c\u5730\u5b58\u50a8\u5e93\u7684 commit\uff0c\u4f7f\u7528\u4f1a\u9700\u8981",Object(a.b)("inlineCode",{parentName:"p"},"git pull"),"\u7684\u64cd\u4f5c\uff0c\u53c8\u4f1a\u88ab\u8fd8\u539f\u56de\u53bb"))),Object(a.b)("h3",{id:"git-reset---soft"},"git reset --soft"),Object(a.b)("p",null,"\u4e00\u5171\u4e09\u4e2a\u6863\u6b21\u7684\u6807\u8bb0\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"soft\uff1a\u67d4\u8f6f\u7684"),"\u4f5c\u4e3a\u7b2c\u4e00\u6863\uff0c\u6e05\u9664\u4e4b\u540e commit \u7684\u540c\u65f6\uff0c\u5c06\u53d1\u751f\u6539\u52a8\u7684\u6587\u4ef6\u5b58\u653e\u5230",Object(a.b)("inlineCode",{parentName:"p"},"\u6682\u5b58\u533a")),Object(a.b)("h3",{id:"git-reset---mixed-default"},"git reset --mixed (default)"),Object(a.b)("p",null,"\u4e00\u5171\u4e09\u4e2a\u6863\u6b21\u7684\u6807\u8bb0\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"mixed\uff1a\u6df7\u5408\u7684"),"\u4f5c\u4e3a\u7b2c\u4e8c\u6863\uff0c\u6e05\u9664\u4e4b\u540e commit \u7684\u540c\u65f6\uff0c\u5c06\u53d1\u751f\u6539\u52a8\u7684\u6587\u4ef6\u5b58\u653e\u5230",Object(a.b)("inlineCode",{parentName:"p"},"\u5df2\u4fee\u6539\u533a")),Object(a.b)("h3",{id:"git-reset---hard"},"git reset --hard"),Object(a.b)("p",null,"\u4e00\u5171\u4e09\u4e2a\u6863\u6b21\u7684\u6807\u8bb0\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"hard\uff1a\u5f3a\u786c\u7684"),"\u4f5c\u4e3a\u7b2c\u4e09\u6863\uff0c\u6e05\u9664\u4e4b\u540e commit \u7684\u540c\u65f6\uff0c\u5c06\u53d1\u751f\u6539\u52a8\u7684\u6587\u4ef6",Object(a.b)("inlineCode",{parentName:"p"},"\u76f4\u63a5\u4e22\u5f03")),Object(a.b)("p",null,Object(a.b)("img",{alt:"git-reset-mode",src:n(524).default})),Object(a.b)("h2",{id:"git-revert"},"git revert"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"revert\uff1a\u590d\u539f"),"\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 commit \u6765\u64a4\u9500",Object(a.b)("inlineCode",{parentName:"p"},"\u4e00\u6b21commit"),"\u6240\u505a\u51fa\u7684\u4fee\u6539\uff0c\u8fd9\u79cd\u64a4\u9500\u7684\u65b9\u5f0f\u662f\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\u5b83\u5e76\u4e0d\u4fee\u6539 commitm history")),Object(a.b)("p",null,Object(a.b)("img",{alt:"git-revert",src:n(525).default})),Object(a.b)("h2",{id:"git-checkout"},"git checkout"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"git checkout commit"),"\uff0c\u53ef\u4ee5\u5c06 HEAD \u6307\u5411\u8fd9\u4e2a commit\uff0c\u7136\u540e\u9488\u5bf9\u5f53\u65f6\u8fd9\u4e2a commit \u65f6\u7684\u72b6\u6001\u7ee7\u7eed\u64cd\u4f5c\uff0c\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5206\u652f\u4fdd\u5b58")),Object(a.b)("p",null,"\u4e3a\u4ec0\u4e48\u8bf4\u662f",Object(a.b)("inlineCode",{parentName:"p"},"\u6e38\u79bb\u72b6\u6001"),"\u4fee\u6539\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u5b9e\u9a8c\u6027\u67d0\u4e2a\u529f\u80fd\u6765\u64cd\u4f5c\uff0c\u56e0\u4e3a\u5f53\u524d\u5206\u652f\u80af\u5b9a\u662f\u5305\u542b\u4e86\u6e38\u79bb\u72b6\u6001\u7684 commit\uff0c\u9488\u5bf9\u8fd9\u4e48 commit \u7684\u6240\u6709\u64cd\u4f5c\uff0c\u7167\u7406\u8bf4\u90fd\u53ef\u4ee5\u76f4\u63a5\u5728\u5f53\u524d\u5206\u652f\u6700\u540e\u7684\u4e00\u4e2a commit \u6765\u64cd\u4f5c"),Object(a.b)("h2",{id:"git-reset-revert-check-\u533a\u522b"},"git reset, revert, check \u533a\u522b"),Object(a.b)("p",null,"1\u3001git reset \u548c git check \u53ef\u4ee5\u4f5c\u7528\u4e8e\u6587\u4ef6\u7ea7\u522b\uff0cgit revert \u53ea\u80fd\u4f5c\u7528\u4e8e commit \u7ea7\u522b"),Object(a.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell",metastring:'title="\u9488\u5bf9index.txt\u91cd\u7f6e\u5230commitID\u65f6\u7684\u72b6\u6001"',title:'"\u9488\u5bf9index.txt\u91cd\u7f6e\u5230commitID\u65f6\u7684\u72b6\u6001"'}),"git reset commitID index.txt\n")),Object(a.b)("p",{parentName:"div"},"\u4e0d\u80fd\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"--hard"),"\u6807\u8bc6\u7b26\uff0c\u56e0\u4e3a\u9488\u5bf9\u6587\u4ef6\u7ea7\u522b\u7684\u64cd\u4f5c\uff0c\u80af\u5b9a\u662f\u4e0d\u80fd\u4e22\u5f03 commit \u7684\uff0c\u4fee\u6539\u5b8c index.txt \u9700\u8981\u63d0\u4ea4\u4e00\u4e2a\u65b0\u7684 commit"))))}l.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),l=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,u=d["".concat(c,".").concat(p)]||d[p]||s[p]||a;return n?r.a.createElement(u,o(o({ref:t},m),{},{components:n})):r.a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var m=2;m<a;m++)c[m]=n[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},523:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git_reset-eca0fb4f9faaa5bcb9bb45d30890a1b6.png"},524:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/git_reset_mode-689a1a49a309c1fe37e05121137857ce.png"},525:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3kkd2ahn41zixs12xgpf-ca7b54fa63e1b60dbe3a0b18e06b0025.gif"}}]);