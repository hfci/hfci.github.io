(window.webpackJsonp=window.webpackJsonp||[]).push([[24,48,230],{249:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(292),l=t(293),o=t(25),i=t(305),s=t(2),u=t(295),m=t(298),d=t(362),b=t(355),p=t(359),h=t(360),f=t(361),O=t(358),v=t(294),E=t(296),y=t(280),g=t.n(y);const j=(e,a)=>"link"===e.type?Object(d.a)(e.href,a):"category"===e.type&&e.items.some((e=>j(e,a)));function k({item:e,onItemClick:a,collapsible:t,activePath:c,...l}){const{items:o,label:i}=e,m=j(e,c),d=function(e){const a=Object(n.useRef)(e);return Object(n.useEffect)((()=>{a.current=e}),[e]),a.current}(m),[b,p]=Object(n.useState)((()=>!!t&&(!m&&e.collapsed)));Object(n.useEffect)((()=>{m&&!d&&b&&p(!1)}),[m,d,b]);const h=Object(n.useCallback)((e=>{e.preventDefault(),p((e=>!e))}),[p]);return 0===o.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":b}),key:i},r.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&m,[g.a.menuLinkText]:!t}),onClick:t?h:void 0,href:t?"#!":void 0},l),i),r.a.createElement("ul",{className:"menu__list"},o.map((e=>r.a.createElement(_,{tabIndex:b?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t,activePath:c})))))}function w({item:e,onItemClick:a,activePath:t,collapsible:n,...c}){const{href:l,label:o}=e,i=j(e,t);return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(v.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":i}),to:l},Object(E.a)(l)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),o))}function _(e){switch(e.item.type){case"category":return r.a.createElement(k,e);case"link":default:return r.a.createElement(w,e)}}var N=function({path:e,sidebar:a,sidebarCollapsible:t=!0}){const[c,o]=Object(n.useState)(!1),{navbar:{title:i,hideOnScroll:d}}=Object(m.a)(),{isClient:E}=Object(l.a)(),{logoLink:y,logoLinkProps:j,logoImageUrl:k,logoAlt:w}=Object(f.a)(),{isAnnouncementBarClosed:N}=Object(b.a)(),{scrollY:C}=Object(O.a)();Object(p.a)(c);const x=Object(h.a)();return Object(n.useEffect)((()=>{x===h.b.desktop&&o(!1)}),[x]),r.a.createElement("div",{className:Object(u.a)(g.a.sidebar,{[g.a.sidebarWithHideableNavbar]:d})},d&&r.a.createElement(v.a,Object(s.a)({tabIndex:-1,className:g.a.sidebarLogo,to:y},j),null!=k&&r.a.createElement("img",{key:E,src:k,alt:w}),null!=i&&r.a.createElement("strong",null,i)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",g.a.menu,{"menu--show":c,[g.a.menuWithAnnouncementBar]:!N&&0===C})},r.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{o(!c)}},c?r.a.createElement("span",{className:Object(u.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},a.map((a=>r.a.createElement(_,{key:a.label,item:a,onItemClick:e=>{e.target.blur(),o(!1)},collapsible:t,activePath:e}))))))},C=t(395),x=(t(283),t(284)),P=t.n(x);var S=e=>function({id:a,...t}){const{navbar:{hideOnScroll:n}}=Object(m.a)();return a?r.a.createElement(e,t,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[P.a.enhancedAnchor]:!n}),id:a}),t.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,t)},M=t(285),I=t.n(M);var B={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?r.a.createElement(C.a,e):r.a.createElement("code",e):a},a:e=>r.a.createElement(v.a,e),pre:e=>r.a.createElement("div",Object(s.a)({className:I.a.mdxCodeBlock},e)),h1:S("h1"),h2:S("h2"),h3:S("h3"),h4:S("h4"),h5:S("h5"),h6:S("h6")},T=t(354),D=t(299),L=t(286),R=t.n(L),A=t(363);function F({currentDocRoute:e,versionMetadata:a,children:t}){var n,o;const{siteConfig:s,isClient:u}=Object(l.a)(),{pluginId:m,permalinkToSidebar:d,docsSidebars:b,version:p}=a,h=d[e.path],f=b[h];return r.a.createElement(i.a,{key:u,searchMetadatas:{version:p,tag:Object(A.b)(m,p)}},r.a.createElement("div",{className:R.a.docPage},f&&r.a.createElement("div",{className:R.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{key:h,sidebar:f,path:e.path,sidebarCollapsible:null===(n=null===(o=s.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===n||n})),r.a.createElement("main",{className:R.a.docMainContainer},r.a.createElement(c.a,{components:B},t))))}a.default=function(e){const{route:{routes:a},versionMetadata:t,location:n}=e,c=a.find((e=>Object(D.matchPath)(n.pathname,e)));return c?r.a.createElement(F,{currentDocRoute:c,versionMetadata:t},Object(o.a)(a)):r.a.createElement(T.default,e)}},292:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return p}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=u(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),b=n,p=m["".concat(l,".").concat(b)]||m[b]||d[b]||c;return t?r.a.createElement(p,o(o({ref:a},s),{},{components:t})):r.a.createElement(p,o({ref:a},s))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=b;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<c;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},306:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(301),l=t.n(c),o=t(293),i=t(299);a.a=e=>{const[a,c]=Object(n.useState)(!1),s=Object(n.useRef)(null),{siteConfig:u={}}=Object(o.a)(),{themeConfig:{algolia:m}}=u,d=Object(i.useHistory)();const b=(e=!0)=>{a||Promise.all([Promise.all([t.e(228),t.e(231)]).then(t.t.bind(null,307,7)),t.e(0).then(t.t.bind(null,271,7))]).then((([{default:a}])=>{c(!0),window.docsearch=a,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,handleSelected:(e,a,t)=>{const n=document.createElement("a");n.href=t.url;const r="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;d.push(r)}}),e&&s.current.focus()}(e)}))},p=Object(n.useCallback)((()=>{b(),a&&s.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),h=Object(n.useCallback)((()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(n.useCallback)((e=>{const a="mouseover"!==e.type;b(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:h,ref:s}))}},354:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(305);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);