(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(313),s=n(303),o=n(299),i=n.n(o);t.default=function(){const{siteMetadata:e}=Object(s.a)();return r.a.createElement(c.a,null,r.a.createElement("h2",null,"Site Metadata"),r.a.createElement("div",null,"Docusaurus Version: ",r.a.createElement("code",null,e.docusaurusVersion)),r.a.createElement("div",null,"Site Version:"," ",r.a.createElement("code",null,e.siteVersion||"No version specified")),r.a.createElement("h3",{className:i.a.sectionTitle},"Plugins and themes"),r.a.createElement("ul",{className:i.a.list},Object.entries(e.pluginVersions).map((([e,t])=>r.a.createElement("li",{key:e,className:i.a.listItem},t.version&&r.a.createElement("div",{className:i.a.version},r.a.createElement("code",null,t.version)),r.a.createElement("div",{className:i.a.name},e),r.a.createElement("div",null,"Type: ",t.type))))))}},303:function(e,t,n){"use strict";var a=n(0),r=n(21);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(15),s=n(305),o=n(11);const i=Object(a.createContext)({collectLink:()=>{}});var u=n(307),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:m,isActive:v,"data-noBrokenLinkCheck":b}=e,E=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]);const{withBaseUrl:p}=Object(u.b)(),h=Object(a.useContext)(i),w=d||f,O=Object(s.a)(w),g=null==w?void 0:w.replace("pathname://",""),j=void 0!==g?(e=>e.startsWith("/"))(k=g)?p(k):k:void 0;var k;const y=Object(a.useRef)(!1),N=n?c.e:c.c,_=o.a.canUseIntersectionObserver;let C;Object(a.useEffect)((()=>(!_&&O&&window.docusaurus.prefetch(j),()=>{_&&C&&C.disconnect()})),[j,_,O]);const x=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,L=!j||!O||x;return j&&O&&!x&&!b&&h.collectLink(j),L?r.a.createElement("a",Object.assign({href:j},w&&!O&&{target:"_blank",rel:"noopener noreferrer"},E)):r.a.createElement(N,Object.assign({},E,{onMouseEnter:()=>{y.current||(window.docusaurus.preload(j),y.current=!0)},innerRef:e=>{var t,n;_&&e&&O&&(t=e,n=()=>{window.docusaurus.prefetch(j)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:j||""},n&&{isActive:v,activeClassName:m}))}},305:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},307:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(303),r=n(305);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(t,e,n,a)}}function s(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},313:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(304),s=n(281),o=n.n(s);const i=({to:e,children:t})=>r.a.createElement(c.a,{className:o.a.navlink,isNavLink:!0,to:e,exact:!0,activeStyle:{backgroundColor:"#363739"}},t);t.a=function({children:e}){return r.a.createElement("div",null,r.a.createElement("nav",{className:o.a.nav},r.a.createElement(i,{to:"/__docusaurus/debug"},"Config"),r.a.createElement(i,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.a.createElement(i,{to:"/__docusaurus/debug/registry"},"Registry"),r.a.createElement(i,{to:"/__docusaurus/debug/routes"},"Routes"),r.a.createElement(i,{to:"/__docusaurus/debug/content"},"Content"),r.a.createElement(i,{to:"/__docusaurus/debug/globalData"},"Global data")),r.a.createElement("main",{className:o.a.container},e))}}}]);