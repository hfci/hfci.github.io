(window.webpackJsonp=window.webpackJsonp||[]).push([[298,130],{379:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(374),l=n.n(c),o=n(362),s=n(372);a.a=e=>{const[a,c]=Object(t.useState)(!1),i=Object(t.useRef)(null),{siteConfig:d={}}=Object(o.a)(),{themeConfig:{algolia:h}}=d,u=Object(s.useHistory)();const p=(e=!0)=>{a||Promise.all([Promise.all([n.e(296),n.e(299)]).then(n.t.bind(null,380,7)),n.e(0).then(n.t.bind(null,340,7))]).then((([{default:a}])=>{c(!0),window.docsearch=a,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:(e,a,n)=>{const t=document.createElement("a");t.href=n.url;const r="#__docusaurus"===t.hash?""+t.pathname:`${t.pathname}${t.hash}`;u.push(r)}}),e&&i.current.focus()}(e)}))},m=Object(t.useCallback)((()=>{p(),a&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(t.useCallback)((()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(t.useCallback)((e=>{const a="mouseover"!==e.type;p(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:b,ref:i}))}},432:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(378);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);