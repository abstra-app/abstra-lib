import{_ as I}from"./logo.084e5d7c.js";import{v,b as r,eu as p,eE as C,eF as w,e as l,d as k,eI as L,a as N,u as e,c as d,bf as D,w as t,f as o,aq as c,eD as m,bE as f,cC as S,cy as $,eL as E,eB as V,f6 as z,aC as y,ew as F,dj as R}from"./outputWidgets.b653f677.js";import{b as h,c as T}from"./router.3fdc46b8.js";import{a as j}from"./asyncComputed.32b8217e.js";import{F as q}from"./PhSignOut.vue.340a98d7.js";import{A as P}from"./Text.5459f482.js";import{A as H}from"./index.37c0d891.js";import{B as M,A as O,b as U}from"./index.f6f49e90.js";import{B as G}from"./BookOutlined.069096d9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="405d93a5-b1aa-448e-8d03-2cbcdca9a575",a._sentryDebugIdIdentifier="sentry-dbid-405d93a5-b1aa-448e-8d03-2cbcdca9a575")}catch{}})();const J={},x=a=>(C("data-v-46e041c1"),a=a(),w(),a),K={class:"logo"},Q=x(()=>l("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=x(()=>l("span",null,"Abstra",-1)),X=[Q,W];function Y(a,s){return r(),p("div",K,X)}const Z=v(J,[["render",Y],["__scopeId","data-v-46e041c1"]]),ee={style:{display:"flex","flex-direction":"column",gap:"10px"}},te={style:{display:"flex",gap:"5px"}},ae=k({__name:"LoginBlock",setup(a){function s(b){const g=b.split("@")[0];return E.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const i=L(),{result:n,loading:_,refetch:A}=j(async()=>h.getAuthor());function B(){h.removeAuthor(),T.shutdown(),A(),i.push({name:"login"})}return(b,g)=>{const u=N("router-link");return e(_)?(r(),d(e(D),{key:0})):e(n)?(r(),d(e($),{key:1,placement:"bottomRight"},{content:t(()=>[l("div",ee,[o(e(P),{size:"small",type:"secondary"},{default:t(()=>[c(m(e(n).claims.email),1)]),_:1}),o(e(f),{type:"text",onClick:B},{default:t(()=>[l("div",te,[o(e(q),{size:"20"}),c(" Logout ")])]),_:1})])]),default:t(()=>[o(e(S),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(H),{shape:"square"},{default:t(()=>[c(m(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),d(e(f),{key:2},{default:t(()=>[o(u,{to:"/login"},{default:t(()=>[c("Login")]),_:1})]),_:1}))}}}),oe={class:"extra"},se=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,i)=>(r(),d(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[s.breadcrumb?(r(),d(e(M),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),p(y,null,V(s.breadcrumb,(n,_)=>(r(),d(e(O),{key:_},{default:t(()=>[o(e(z),{to:n.path},{default:t(()=>[c(m(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(Z)]),extra:t(()=>[l("div",oe,[o(e(f),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[o(e(G))]),default:t(()=>[s.$slots.default?R(s.$slots,"default",{key:0},void 0,!0):(r(),p(y,{key:1},[c("Docs")],64))]),_:3}),o(ae)])]),_:3}))}});const me=v(se,[["__scopeId","data-v-31e2a422"]]);export{me as N};
//# sourceMappingURL=Navbar.ee34a0a6.js.map
