import{_ as w}from"./logo.084e5d7c.js";import{S as x,b as r,eu as _,eA as I,eB as C,e as i,d as k,eJ as S,a as N,u as e,c,bj as $,f as o,w as t,ar as n,bG as d,cQ as D,eG as f,cw as L,R as z,eE as R,fb as V,aD as y,ew as E,dB as G}from"./vue-router.67809441.js";import{a as T}from"./asyncComputed.c6a51599.js";import{G as j}from"./PhChats.vue.9275071c.js";import{F}from"./PhSignOut.vue.35a3c0cf.js";import{C as P}from"./router.f4c6c59f.js";import{a as h}from"./gateway.e3e12758.js";import{A as q}from"./index.31900902.js";import{A as H}from"./index.72ae5bd0.js";import{B as J,A as M,b as O}from"./index.d0d1d727.js";import{B as Q}from"./BookOutlined.aea72855.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="54db76df-6b75-44bd-8068-3368ca7e8409",s._sentryDebugIdIdentifier="sentry-dbid-54db76df-6b75-44bd-8068-3368ca7e8409")}catch{}})();const U={},v=s=>(I("data-v-46e041c1"),s=s(),C(),s),K={class:"logo"},W=v(()=>i("img",{class:"logo-img",src:w,alt:"Abstra cloud logo"},null,-1)),X=v(()=>i("span",null,"Abstra",-1)),Y=[W,X];function Z(s,a){return r(),_("div",K,Y)}const ee=x(U,[["render",Z],["__scopeId","data-v-46e041c1"]]),te={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},oe={style:{display:"flex","flex-direction":"column",gap:"10px"}},se={style:{display:"flex",gap:"5px"}},ae=k({__name:"LoginBlock",setup(s){function a(b){const g=b.split("@")[0];return z.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(m=>m[0]).join("")}const p=S(),{result:l,loading:u,refetch:A}=T(async()=>h.getAuthor());function B(){h.removeAuthor(),P.shutdown(),A(),p.push({name:"login"})}return(b,g)=>{const m=N("router-link");return e(u)?(r(),c(e($),{key:0})):e(l)?(r(),_("div",te,[o(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[o(e(j),{size:18})]),default:t(()=>[n(" Support ")]),_:1}),o(e(L),{placement:"bottomRight"},{content:t(()=>[i("div",oe,[o(e(D),{size:"small",type:"secondary"},{default:t(()=>[n(f(e(l).claims.email),1)]),_:1}),o(e(d),{type:"text",onClick:B},{default:t(()=>[i("div",se,[o(e(F),{size:"20"}),n(" Logout ")])]),_:1})])]),default:t(()=>[o(e(q),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(H),{shape:"square"},{default:t(()=>[n(f(a(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(r(),c(e(d),{key:2},{default:t(()=>[o(m,{to:"/login"},{default:t(()=>[n("Login")]),_:1})]),_:1}))}}}),re={class:"extra"},ne=k({__name:"Navbar",props:{breadcrumb:{}},setup(s){return(a,p)=>(r(),c(e(O),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[a.breadcrumb?(r(),c(e(J),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),_(y,null,R(a.breadcrumb,(l,u)=>(r(),c(e(M),{key:u},{default:t(()=>[o(e(V),{to:l.path},{default:t(()=>[n(f(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):E("",!0)]),title:t(()=>[o(ee)]),extra:t(()=>[i("div",re,[o(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[o(e(Q))]),default:t(()=>[a.$slots.default?G(a.$slots,"default",{key:0},void 0,!0):(r(),_(y,{key:1},[n("Docs")],64))]),_:3}),o(ae)])]),_:3}))}});const ye=x(ne,[["__scopeId","data-v-31e2a422"]]);export{ye as N};
//# sourceMappingURL=Navbar.403c7aad.js.map
