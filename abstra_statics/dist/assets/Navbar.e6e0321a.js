import{_ as w}from"./logo.084e5d7c.js";import{S as x,b as r,eu as _,eA as I,eB as C,e as c,d as k,eJ as S,a as N,u as e,c as i,bj as $,f as o,w as t,ar as n,bG as d,cQ as D,eG as f,cw as L,R as z,eE as R,fb as V,aD as b,ew as E,dB as G}from"./vue-router.4aa75747.js";import{a as T}from"./asyncComputed.c2fb5ad3.js";import{G as j}from"./PhChats.vue.766e2929.js";import{F}from"./PhSignOut.vue.05766a17.js";import{C as P}from"./router.a85d9206.js";import{a as h}from"./gateway.34b2905a.js";import{A as q}from"./index.2b85f3b8.js";import{A as H}from"./index.74a7cf06.js";import{B as J,A as M,b as O}from"./index.f624ccb3.js";import{B as Q}from"./BookOutlined.a27b4df7.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="84a80473-16f9-4008-b2e2-95e21767e96a",s._sentryDebugIdIdentifier="sentry-dbid-84a80473-16f9-4008-b2e2-95e21767e96a")}catch{}})();const U={},v=s=>(I("data-v-46e041c1"),s=s(),C(),s),K={class:"logo"},W=v(()=>c("img",{class:"logo-img",src:w,alt:"Abstra cloud logo"},null,-1)),X=v(()=>c("span",null,"Abstra",-1)),Y=[W,X];function Z(s,a){return r(),_("div",K,Y)}const ee=x(U,[["render",Z],["__scopeId","data-v-46e041c1"]]),te={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},oe={style:{display:"flex","flex-direction":"column",gap:"10px"}},se={style:{display:"flex",gap:"5px"}},ae=k({__name:"LoginBlock",setup(s){function a(g){const y=g.split("@")[0];return z.exports.kebabCase(y).toUpperCase().split("-").slice(0,2).map(m=>m[0]).join("")}const p=S(),{result:l,loading:u,refetch:A}=T(async()=>h.getAuthor());function B(){h.removeAuthor(),P.shutdown(),A(),p.push({name:"login"})}return(g,y)=>{const m=N("router-link");return e(u)?(r(),i(e($),{key:0})):e(l)?(r(),_("div",te,[o(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[o(e(j),{size:18})]),default:t(()=>[n(" Support ")]),_:1}),o(e(L),{placement:"bottomRight"},{content:t(()=>[c("div",oe,[o(e(D),{size:"small",type:"secondary"},{default:t(()=>[n(f(e(l).claims.email),1)]),_:1}),o(e(d),{type:"text",onClick:B},{default:t(()=>[c("div",se,[o(e(F),{size:"20"}),n(" Logout ")])]),_:1})])]),default:t(()=>[o(e(q),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(H),{shape:"square"},{default:t(()=>[n(f(a(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(r(),i(e(d),{key:2},{default:t(()=>[o(m,{to:"/login"},{default:t(()=>[n("Login")]),_:1})]),_:1}))}}}),re={class:"extra"},ne=k({__name:"Navbar",props:{breadcrumb:{}},setup(s){return(a,p)=>(r(),i(e(O),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[a.breadcrumb?(r(),i(e(J),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),_(b,null,R(a.breadcrumb,(l,u)=>(r(),i(e(M),{key:u},{default:t(()=>[o(e(V),{to:l.path},{default:t(()=>[n(f(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):E("",!0)]),title:t(()=>[o(ee)]),extra:t(()=>[c("div",re,[o(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[o(e(Q))]),default:t(()=>[a.$slots.default?G(a.$slots,"default",{key:0},void 0,!0):(r(),_(b,{key:1},[n("Docs")],64))]),_:3}),o(ae)])]),_:3}))}});const be=x(ne,[["__scopeId","data-v-31e2a422"]]);export{be as N};
//# sourceMappingURL=Navbar.e6e0321a.js.map
