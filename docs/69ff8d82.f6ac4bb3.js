(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{342:function(e,a,n){"use strict";var c=n(0),r=n.n(c),s=n(335),t=n.n(s),o=n(327),l=n(333);a.a=e=>{const[a,s]=Object(c.useState)(!1),i=Object(c.useRef)(null),{siteConfig:d={}}=Object(o.a)(),{themeConfig:{algolia:h}}=d,u=Object(l.useHistory)();const p=(e=!0)=>{a||Promise.all([Promise.all([n.e(261),n.e(264)]).then(n.t.bind(null,343,7)),n.e(0).then(n.t.bind(null,304,7))]).then((([{default:a}])=>{s(!0),window.docsearch=a,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:(e,a,n)=>{const c=document.createElement("a");c.href=n.url;const r="#__docusaurus"===c.hash?""+c.pathname:`${c.pathname}${c.hash}`;u.push(r)}}),e&&i.current.focus()}(e)}))},b=Object(c.useCallback)((()=>{p(),a&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),m=Object(c.useCallback)((()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),S=Object(c.useCallback)((e=>{const a="mouseover"!==e.type;p(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:t()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:t()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:S,onFocus:S,onBlur:m,ref:i}))}}}]);