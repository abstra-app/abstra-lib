import{_ as I}from"./logo.084e5d7c.js";import{E as x,b as r,eV as _,e$ as C,f0 as w,e as d,d as k,f7 as $,a as N,u as e,c,be as S,f as s,w as t,am as n,bF as i,cV as D,f4 as f,cH as L,cB as V,D as z,f2 as E,fy as F,ay as b,eX as R,dy as T}from"./outputWidgets.0b268a6e.js";import{a as H}from"./asyncComputed.e4eff947.js";import{G as P}from"./PhChats.vue.0b9ce541.js";import{F as j}from"./PhSignOut.vue.20afdbb9.js";import{C as q}from"./router.2e50c1be.js";import{a as h}from"./gateway.6b86361a.js";import{A as G}from"./index.92a391ca.js";import{B as M,A as O,b as U}from"./index.e2723ae6.js";import{B as X}from"./BookOutlined.25d33713.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="b1d1cde8-66a0-42db-8049-387184d9767e",o._sentryDebugIdIdentifier="sentry-dbid-b1d1cde8-66a0-42db-8049-387184d9767e")}catch{}})();const J={},v=o=>(C("data-v-46e041c1"),o=o(),w(),o),K={class:"logo"},Q=v(()=>d("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=v(()=>d("span",null,"Abstra",-1)),Y=[Q,W];function Z(o,a){return r(),_("div",K,Y)}const ee=x(J,[["render",Z],["__scopeId","data-v-46e041c1"]]),te={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},se={style:{display:"flex","flex-direction":"column",gap:"10px"}},oe={style:{display:"flex",gap:"5px"}},ae=k({__name:"LoginBlock",setup(o){function a(y){const g=y.split("@")[0];return z.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(m=>m[0]).join("")}const p=$(),{result:l,loading:u,refetch:A}=H(async()=>h.getAuthor());function B(){h.removeAuthor(),q.shutdown(),A(),p.push({name:"login"})}return(y,g)=>{const m=N("router-link");return e(u)?(r(),c(e(S),{key:0})):e(l)?(r(),_("div",te,[s(e(i),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[s(e(P),{size:18})]),default:t(()=>[n(" Support ")]),_:1}),s(e(V),{placement:"bottomRight"},{content:t(()=>[d("div",se,[s(e(D),{size:"small",type:"secondary"},{default:t(()=>[n(f(e(l).claims.email),1)]),_:1}),s(e(i),{type:"text",onClick:B},{default:t(()=>[d("div",oe,[s(e(j),{size:"20"}),n(" Logout ")])]),_:1})])]),default:t(()=>[s(e(L),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[s(e(G),{shape:"square"},{default:t(()=>[n(f(a(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(r(),c(e(i),{key:2},{default:t(()=>[s(m,{to:"/login"},{default:t(()=>[n("Login")]),_:1})]),_:1}))}}}),re={class:"extra"},ne=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(a,p)=>(r(),c(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[a.breadcrumb?(r(),c(e(M),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),_(b,null,E(a.breadcrumb,(l,u)=>(r(),c(e(O),{key:u},{default:t(()=>[s(e(F),{to:l.path},{default:t(()=>[n(f(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):R("",!0)]),title:t(()=>[s(ee)]),extra:t(()=>[d("div",re,[s(e(i),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[s(e(X))]),default:t(()=>[a.$slots.default?T(a.$slots,"default",{key:0},void 0,!0):(r(),_(b,{key:1},[n("Docs")],64))]),_:3}),s(ae)])]),_:3}))}});const ge=x(ne,[["__scopeId","data-v-31e2a422"]]);export{ge as N};
//# sourceMappingURL=Navbar.9a8afbba.js.map
