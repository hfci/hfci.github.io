(window.webpackJsonp=window.webpackJsonp||[]).push([[119,130],{319:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(0),r=t.n(n),c=t(362),o=t(378),s=t(8),l=t.n(s);function i({title:e,id:a,style:t,children:c}){const o=String(a||e).trim().replace(/\s/g,"-").toLowerCase(),s=Object(n.useRef)(null);function l(){history.replaceState(history.state,"","#"+o)}return Object(n.useEffect)((()=>{function e(){const e=document.getElementById(o);if(e){const a=e.getBoundingClientRect();a.top<=80&&a.top>=0&&l()}}return window.location.hash.substring(1)==o&&s.current.scrollIntoView({behavior:"smooth"}),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),r.a.createElement("section",{className:"section-lg"},r.a.createElement("div",{className:"container Section"},r.a.createElement("h2",{className:d[t]+" Section-Title",ref:s,onClick:function(){l(),s.current.scrollIntoView({behavior:"smooth"})},id:o},e,r.a.createElement("span",{className:"Section-Hash"},"#")),r.a.createElement("div",null,c)))}const d={underline:"with-underline"};i.propTypes={title:l.a.string.isRequired,style:l.a.oneOf(["underline"])};var u=t(364),m=t(592);function p(){const{siteConfig:e={}}=Object(c.a)(),a=m.sort(((e,a)=>e.project_or_company.name.localeCompare(a.project_or_company.name)));return r.a.createElement(o.a,{title:e.title,description:e.tagline},r.a.createElement(i,{title:"Built with Supabase!",style:"underline"},r.a.createElement(h,{showcase:a})),r.a.createElement(i,{title:"Do you want to add your project?",style:"underline"},r.a.createElement("p",null,r.a.createElement(u.a,{href:"docs/handbook/contributing#how-to-add-a-your-project-to-our-showcase"},"Learn how")," to add your project to our showcase.")))}function h({showcase:e}){return r.a.createElement("div",{className:"row is-multiline"},e.map(((e,a)=>r.a.createElement("div",{className:"col col--4",key:`${a}-${e.project_or_company.image}`},r.a.createElement(b,{projectOrCompany:e.project_or_company,isOpenSource:e.is_open_source,publicRepo:e.public_repo})))))}function b({projectOrCompany:e,isOpenSource:a,publicRepo:t}){const n=e.web_site&&t&&a?"ShowcaseCard-Footer-Spaced":null,c=(e,a)=>r.a.createElement("a",{className:"button button--secondary ShowcaseCard-Footer-Item",target:"_blank",href:a},e);return r.a.createElement("div",{className:"card card__body ShowcaseCard"},r.a.createElement("div",{className:"ShowcaseCard-Content"},r.a.createElement("div",{className:"ShowcaseCard-ImgContainer"},r.a.createElement("img",{className:"ShowcaseCard-Img",src:"/img/showcase-logo/"+e.image})),r.a.createElement("div",{className:"ShowcaseCard-Text"},r.a.createElement("h3",{className:""},e.name),r.a.createElement("span",{className:"ShowcaseCard-Tag"},a?"#OpenSource":null),r.a.createElement("p",null,e.description))),r.a.createElement("div",{className:n+" ShowcaseCard-Footer"},e.web_site?c("Web site",e.web_site):null,t&&a?c("View repo",t):null))}},379:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(374),o=t.n(c),s=t(362),l=t(372);a.a=e=>{const[a,c]=Object(n.useState)(!1),i=Object(n.useRef)(null),{siteConfig:d={}}=Object(s.a)(),{themeConfig:{algolia:u}}=d,m=Object(l.useHistory)();const p=(e=!0)=>{a||Promise.all([Promise.all([t.e(296),t.e(299)]).then(t.t.bind(null,380,7)),t.e(0).then(t.t.bind(null,340,7))]).then((([{default:a}])=>{c(!0),window.docsearch=a,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:(e,a,t)=>{const n=document.createElement("a");n.href=t.url;const r="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;m.push(r)}}),e&&i.current.focus()}(e)}))},h=Object(n.useCallback)((()=>{p(),a&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),w=Object(n.useCallback)((e=>{const a="mouseover"!==e.type;p(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:w,onFocus:w,onBlur:b,ref:i}))}},592:function(e){e.exports=JSON.parse("[]")}}]);