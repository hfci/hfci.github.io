(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(325),o=n(24),s=n(310),u=n.n(s);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h2",null,"Registry"),r.a.createElement("ul",{className:u.a.list},Object.values(o.a).map((([,e,t])=>r.a.createElement("li",{key:e,className:u.a.listItem},r.a.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",r.a.createElement("code",null,e)),r.a.createElement("div",null,"Resolved Path: ",r.a.createElement("code",null,t)))))))}},315:function(e,t,n){"use strict";var a=n(0),r=n(21);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},316:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(15),o=n(317),s=n(11);const u=Object(a.createContext)({collectLink:()=>{}});var i=n(319),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:b,isActive:v,"data-noBrokenLinkCheck":m}=e,p=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]);const{withBaseUrl:h}=Object(i.b)(),E=Object(a.useContext)(u),w=d||f,O=Object(o.a)(w),g=null==w?void 0:w.replace("pathname://",""),k=void 0!==g?(e=>e.startsWith("/"))(j=g)?h(j):j:void 0;var j;const y=Object(a.useRef)(!1),_=n?c.e:c.c,C=s.a.canUseIntersectionObserver;let N;Object(a.useEffect)((()=>(!C&&O&&window.docusaurus.prefetch(k),()=>{C&&N&&N.disconnect()})),[k,C,O]);const x=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,B=!k||!O||x;return k&&O&&!x&&!m&&E.collectLink(k),B?r.a.createElement("a",Object.assign({href:k},w&&!O&&{target:"_blank",rel:"noopener noreferrer"},p)):r.a.createElement(_,Object.assign({},p,{onMouseEnter:()=>{y.current||(window.docusaurus.preload(k),y.current=!0)},innerRef:e=>{var t,n;C&&e&&O&&(t=e,n=()=>{window.docusaurus.prefetch(k)},N=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())}))})),N.observe(t))},to:k||""},n&&{isActive:v,activeClassName:b}))}},317:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},319:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(315),r=n(317);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},325:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(316),o=n(293),s=n.n(o);const u=({to:e,children:t})=>r.a.createElement(c.a,{className:s.a.navlink,isNavLink:!0,to:e,exact:!0,activeStyle:{backgroundColor:"#363739"}},t);t.a=function({children:e}){return r.a.createElement("div",null,r.a.createElement("nav",{className:s.a.nav},r.a.createElement(u,{to:"/__docusaurus/debug"},"Config"),r.a.createElement(u,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.a.createElement(u,{to:"/__docusaurus/debug/registry"},"Registry"),r.a.createElement(u,{to:"/__docusaurus/debug/routes"},"Routes"),r.a.createElement(u,{to:"/__docusaurus/debug/content"},"Content"),r.a.createElement(u,{to:"/__docusaurus/debug/globalData"},"Global data")),r.a.createElement("main",{className:s.a.container},e))}}}]);