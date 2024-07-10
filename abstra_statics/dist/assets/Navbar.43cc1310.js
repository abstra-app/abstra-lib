import{d as h,eM as A,r as B,u as e,o,c as i,bk as C,eu as f,b as a,w as t,as as r,bH as d,a as m,cR as w,eA as _,cx as N,R as D,eD as I,fc as S,aE as g,ew as z,dB as L,S as R}from"./vue-router.8bd5b149.js";import{a as V}from"./asyncComputed.19d51d96.js";import{G as $}from"./PhChats.vue.a157e5f9.js";import{F as E}from"./PhSignOut.vue.556bf6a7.js";import{C as T}from"./router.06a964a8.js";import{a as k}from"./gateway.e5632fe1.js";import{A as F}from"./index.2436b06a.js";import{A as H}from"./index.f6e3f928.js";import{B as M,A as P,b as j}from"./index.2e110e1e.js";import{B as q}from"./BookOutlined.111a2a53.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="080d3cf5-f7e9-4c33-a9ea-0bfe9aef51fb",n._sentryDebugIdIdentifier="sentry-dbid-080d3cf5-f7e9-4c33-a9ea-0bfe9aef51fb")}catch{}})();const G={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},O={style:{display:"flex","flex-direction":"column",gap:"10px"}},U={style:{display:"flex",gap:"5px"}},J=h({__name:"LoginBlock",setup(n){function s(b){const y=b.split("@")[0];return D.exports.kebabCase(y).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=A(),{result:l,loading:u,refetch:x}=V(async()=>k.getAuthor());function v(){k.removeAuthor(),T.shutdown(),x(),c.push({name:"login"})}return(b,y)=>{const p=B("router-link");return e(u)?(o(),i(e(C),{key:0})):e(l)?(o(),f("div",G,[a(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e($),{size:18})]),default:t(()=>[r(" Support ")]),_:1}),a(e(N),{placement:"bottomRight"},{content:t(()=>[m("div",O,[a(e(w),{size:"small",type:"secondary"},{default:t(()=>[r(_(e(l).claims.email),1)]),_:1}),a(e(d),{type:"text",onClick:v},{default:t(()=>[m("div",U,[a(e(E),{size:"20"}),r(" Logout ")])]),_:1})])]),default:t(()=>[a(e(F),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(H),{shape:"square"},{default:t(()=>[r(_(s(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(o(),i(e(d),{key:2},{default:t(()=>[a(p,{to:"/login"},{default:t(()=>[r("Login")]),_:1})]),_:1}))}}}),K={class:"extra"},Q=h({__name:"Navbar",props:{breadcrumb:{}},setup(n){return(s,c)=>(o(),i(e(j),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[s.breadcrumb?(o(),i(e(M),{key:0},{default:t(()=>[(o(!0),f(g,null,I(s.breadcrumb,(l,u)=>(o(),i(e(P),{key:u},{default:t(()=>[a(e(S),{to:l.path},{default:t(()=>[r(_(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):z("",!0)]),extra:t(()=>[m("div",K,[a(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(q))]),default:t(()=>[s.$slots.default?L(s.$slots,"default",{key:0},void 0,!0):(o(),f(g,{key:1},[r("Docs")],64))]),_:3}),a(J)])]),_:3}))}});const ne=R(Q,[["__scopeId","data-v-170b9411"]]);export{ne as N};
//# sourceMappingURL=Navbar.43cc1310.js.map
