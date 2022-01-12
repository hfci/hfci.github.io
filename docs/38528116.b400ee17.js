(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(2),i=a(7),c=(a(0),a(361)),r={id:"gitLearning",title:"git\u539f\u7406",hide_title:!0,sidebar_label:"git\u539f\u7406"},b={unversionedId:"git/skill/gitLearning",id:"git/skill/gitLearning",isDocsHomePage:!1,title:"git\u539f\u7406",description:"git vs svn",source:"@site/docs/git/skill/learningGit.md",slug:"/git/skill/gitLearning",permalink:"/docs/git/skill/gitLearning",version:"current",sidebar_label:"git\u539f\u7406",sidebar:"gitdoc",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/docs/git/skill/gitCommonUseGitCommand"},next:{title:"git\u9ed1\u79d1\u6280",permalink:"/docs/git/skill/gitSkillBlack"}},l=[{value:"git vs svn",id:"git-vs-svn",children:[]},{value:"\u91cd\u8981\u6982\u5ff5",id:"\u91cd\u8981\u6982\u5ff5",children:[{value:"\u6587\u4ef6\u72b6\u6001",id:"\u6587\u4ef6\u72b6\u6001",children:[]},{value:"commit \u8282\u70b9",id:"commit-\u8282\u70b9",children:[]},{value:"HEAD",id:"head",children:[]},{value:"\u5206\u79bb\u72b6\u6001",id:"\u5206\u79bb\u72b6\u6001",children:[]},{value:"\u5206\u79bb\u72b6\u6001\u7684\u4f7f\u7528\u573a\u666f",id:"\u5206\u79bb\u72b6\u6001\u7684\u4f7f\u7528\u573a\u666f",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],o={rightToc:l};function m(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"git-vs-svn"},"git vs svn"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"git"),"\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"svn"),"\u662f\u4e00\u4e2a\u96c6\u4e2d\u5f0f\u7248\u672c\u7ba1\u7406\u5de5\u5177")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"\u96c6\u4e2d\u5f0f"),"\uff1a\u7cfb\u7edf\u5c06\u6240\u6709\u6587\u4ef6\u548c\u5386\u53f2\u6570\u636e\u5b58\u50a8\u5728\u4e2d\u592e\u670d\u52a1\u5668\u4e0a\uff0c\u63d0\u4ea4\u66f4\u6539\u65f6\u76f4\u63a5\u4fee\u6539\u4e2d\u592e\u670d\u52a1\u5668\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"\u5206\u5e03\u5f0f"),"\uff1a\u6bcf\u4e2a\u7528\u6237\u90fd\u6709\u4e00\u4e2a\u672c\u5730\u5b58\u50a8\u5e93\uff0c\u7136\u540e\u670d\u52a1\u5668\u4e0a\u6709\u4e00\u4e2a\u5b58\u50a8\u5e93\uff0c\u6bcf\u4e2a\u7528\u6237\u5148\u5c06\u4ee3\u7801\u63d0\u4ea4\u5230\u672c\u5730\u5b58\u50a8\u5e93\uff0c\u7136\u540e\u5c06\u672c\u5730\u5b58\u50a8\u5e93\u63a8\u9001\u5230\u8fdc\u7a0b\u5b58\u50a8\u5e93\u3002")),Object(c.b)("p",null,Object(c.b)("img",{alt:"git-svn",src:a(537).default})),Object(c.b)("h2",{id:"\u91cd\u8981\u6982\u5ff5"},"\u91cd\u8981\u6982\u5ff5"),Object(c.b)("h3",{id:"\u6587\u4ef6\u72b6\u6001"},"\u6587\u4ef6\u72b6\u6001"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5728 Git \u4e2d\u6587\u4ef6\u5927\u6982\u5206\u4e3a\u4e09\u79cd\u72b6\u6001\uff1a\u5df2\u4fee\u6539\uff08modified\uff09\u3001\u5df2\u6682\u5b58\uff08staged\uff09\u3001\u5df2\u63d0\u4ea4\uff08committed\uff09")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"\u4fee\u6539"),"\uff1aGit \u53ef\u4ee5\u611f\u77e5\u5230\u5de5\u4f5c\u76ee\u5f55\u4e2d\u54ea\u4e9b\u6587\u4ef6\u88ab\u4fee\u6539\u4e86\uff0c\u7136\u540e\u628a\u4fee\u6539\u7684\u6587\u4ef6\u52a0\u5165\u5230 modified \u533a\u57df"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"\u6682\u5b58"),"\uff1a\u901a\u8fc7 add \u547d\u4ee4\u5c06\u5de5\u4f5c\u76ee\u5f55\u4e2d\u4fee\u6539\u7684\u6587\u4ef6\u63d0\u4ea4\u5230\u6682\u5b58\u533a\uff0c\u7b49\u5019\u88ab commit"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"\u63d0\u4ea4"),"\uff1a\u5c06\u6682\u5b58\u533a\u6587\u4ef6 commit \u81f3 Git \u76ee\u5f55\u4e2d\u6c38\u4e45\u4fdd\u5b58")),Object(c.b)("p",null,Object(c.b)("img",{alt:"git-status",src:a(538).default})),Object(c.b)("h3",{id:"commit-\u8282\u70b9"},"commit \u8282\u70b9"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6bcf\u6b21\u6267\u884c",Object(c.b)("inlineCode",{parentName:"p"},"git commit"),"\u5c31\u4f1a\u751f\u6210\u4e00\u4e2a\u8282\u70b9\uff0c\u8fd9\u5c31\u662f commit \u8282\u70b9")),Object(c.b)("p",null,"\u5728 git \u4e2d\u6bcf\u6b21\u6267\u884c",Object(c.b)("inlineCode",{parentName:"p"},"git commit"),"\u5c31\u4f1a\u6839\u636e\u63d0\u4ea4\u7684\u5185\u5bb9\u901a\u8fc7 SHA1 \u8ba1\u7b97\u5185\u5bb9\u7684\u54c8\u5e0c\u503c\uff0c\u591a\u6b21\u63d0\u4ea4\u5c31\u4f1a\u5f62\u6210\u4e00\u4e2a\u7ebf\u6027\u8282\u70b9\u94fe"),Object(c.b)("p",null,Object(c.b)("img",{alt:"git-commit",src:a(539).default})),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u540e\u9762\u7684 commit \u8282\u70b9\u5305\u542b\u524d\u9762\u7684 commit \u8282\u70b9\uff1a\u4e5f\u5c31\u662f",Object(c.b)("inlineCode",{parentName:"p"},"commit3"),"\u5305\u542b",Object(c.b)("inlineCode",{parentName:"p"},"commit2"),"\u548c",Object(c.b)("inlineCode",{parentName:"p"},"commit1"),"\u7684\u5185\u5bb9"))),Object(c.b)("h3",{id:"head"},"HEAD"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"HEAD \u662f Git \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u4e2a\u6982\u5ff5\uff0c\u4f60\u53ef\u4ee5\u79f0\u5b83\u4e3a\u6307\u9488\u6216\u8005\u5f15\u7528\uff0c\u5b83\u53ef\u4ee5\u6307\u5411\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\uff0c\u5e76\u4e14\u6307\u5411\u7684\u8282\u70b9\u59cb\u7ec8\u4e3a\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\uff0c\u6362\u53e5\u8bdd\u8bf4\u5c31\u662f\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55(\u4e5f\u5c31\u662f\u4f60\u6240\u770b\u5230\u7684\u4ee3\u7801)\u5c31\u662f HEAD \u6307\u5411\u7684\u8282\u70b9")),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8fd9\u6837\u7406\u89e3\uff1a\u5206\u652f\u672c\u8d28\u4e0a\u5c31\u662f\u6307\u5411 commit \u7684\u6307\u9488\uff0c\u4f46\u662f\u5462\u5206\u652f\u4f1a\u6709\u591a\u4e2a\uff0cgit \u9700\u8981\u77e5\u9053\u4f60\u5f53\u524d\u5728\u54ea\u4e2a\u5206\u652f\u4e0a\u9762\u5de5\u4f5c\uff0c\u6240\u6709\u5c31\u6709\u4e86 HEAD"),Object(c.b)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a HEAD \u5c31\u662f git \u7528\u6765\u77e5\u9053\u7528\u6237\u5f53\u524d\u5728\u54ea\u4e2a\u8282\u70b9\u5de5\u4f5c\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u90fd\u662f\u6307\u5411\u5206\u652f\u7684\u6307\u9488")),Object(c.b)("p",{parentName:"div"},Object(c.b)("img",{alt:"git-HEAD",src:a(540).default})))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u8c03\u8bd5\u6b65\u9aa4")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\u67e5\u770b\u5f53\u524d",Object(c.b)("inlineCode",{parentName:"li"},"HEAD"),"\u7684\u6307\u5411\uff1a",Object(c.b)("inlineCode",{parentName:"li"},"cat .git/HEAD"))),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="HEAD\u6307\u9488\u6307\u5411\u4e86\u53e6\u4e00\u4e2a\u6587\u4ef6\uff1arefs/heads/master"',title:'"HEAD\u6307\u9488\u6307\u5411\u4e86\u53e6\u4e00\u4e2a\u6587\u4ef6\uff1arefs/heads/master"'}),"ref: refs/heads/master\n")),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\u67e5\u770b",Object(c.b)("inlineCode",{parentName:"li"},"refs/heads/master"),"\u6587\u4ef6\u7684\u5185\u5bb9\uff1a",Object(c.b)("inlineCode",{parentName:"li"},"cat .git/refs/heads/master"))),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="\u6307\u5411\u4e00\u4e2acommit"',title:'"\u6307\u5411\u4e00\u4e2acommit"'}),"262715af460ffe2bdd0bfa8b21014248f1dbaa4b\n")),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\u8bc1\u5b9e\u4e86\u4e0a\u9762 HEAD \u2192 branch \u2192 commit")))),Object(c.b)("h3",{id:"\u5206\u79bb\u72b6\u6001"},"\u5206\u79bb\u72b6\u6001"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"HEAD"),"\u9ed8\u8ba4\u6307\u5411\u5206\u652f\u6307\u9488\uff0c\u5982\u679c",Object(c.b)("inlineCode",{parentName:"p"},"HEAD"),"\u76f4\u63a5\u6307\u5411\u67d0\u4e2a commit \u7684\u65f6\u5019\u5c31\u662f",Object(c.b)("inlineCode",{parentName:"p"},"\u5206\u79bb\u72b6\u6001"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git checkout 62f1f045395b3ce1db323b70733323e3f277906a\n")),Object(c.b)("h3",{id:"\u5206\u79bb\u72b6\u6001\u7684\u4f7f\u7528\u573a\u666f"},"\u5206\u79bb\u72b6\u6001\u7684\u4f7f\u7528\u573a\u666f"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"git checkout commitID")," \u5206\u79bb\u72b6\u6001\u53ef\u4ee5\u57fa\u4e8e\u5f53\u524d commit \u505a\u4ee3\u7801\u7684\u4fee\u6539\uff0c\u6700\u540e\u51b3\u5b9a\u4f7f\u7528\u8fd9\u4e9b commit \u7684\u65f6\u5019\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5206\u652f\u4fdd\u7559")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"git checkout 62f1f045395b3ce1db323b70733323e3f277906a")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"git add newfile")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"git checkout -b new_branch"))),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://marklodato.github.io/visual-git-guide/index-zh-cn.html"}),"\u56fe\u89e3 git")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247490189&idx=1&sn=9fdfc612e777c03be1f162c86ae2b8c8&chksm=fc10d8dbcb6751cd12f9cfff9a4761d2da4b7097a3187decccdc1398e7489a719255be041058&mpshare=1&scene=1&srcid=1222N6Pgddf8YraShUAEr35d&sharer_sharetime=1640158251444&sharer_shareid=dd3bb47266e2ae385f2e9fc9db95e4e4&version=3.1.20.90367&platform=mac#rd"}),"Git \u5404\u6307\u4ee4\u7684\u672c\u8d28\uff0c\u771f\u662f\u901a\u4fd7\u6613\u61c2\u554a"))))}m.isMDXComponent=!0},361:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),m=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=m(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=m(a),s=n,u=d["".concat(r,".").concat(s)]||d[s]||p[s]||c;return a?i.a.createElement(u,b(b({ref:t},o),{},{components:a})):i.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var o=2;o<c;o++)r[o]=a[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},537:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/git-and-svn-1024x576-a6bd795d9924fa2a1fbd52092e6e5ff6.png"},538:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/git_status-62c43dd01dd53b08ec50d0b8ed8a7167.png"},539:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/git_commit-c5c7bea46ae83f4d864962f8231f07d4.png"},540:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/git_HEAD-7403822974db49c01c5a9622f79f0fd8.png"}}]);