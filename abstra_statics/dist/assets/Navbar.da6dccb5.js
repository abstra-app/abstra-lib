import{d as h,eo as A,r as B,u as e,o as s,c as i,by as C,Y as m,b as a,w as t,aG as r,bT as d,a as f,de as w,e9 as _,cQ as N,ej as I,eb as L,eY as S,aS as g,S as D,$ as z,a0 as R}from"./index.e1ec3e10.js";import{a as $}from"./asyncComputed.63476e9c.js";import{G as T}from"./PhChats.vue.43012746.js";import{F as V}from"./PhSignOut.vue.988a35f9.js";import{C as j}from"./router.eb7833e2.js";import{a as k}from"./gateway.ab874197.js";import{A as E}from"./index.73a3b654.js";import{A as F}from"./Avatar.c727ae9f.js";import{B as G,A as P,b as Y}from"./index.4aa0caca.js";import{B as q}from"./BookOutlined.24fb62d6.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="22ca2e54-5c5a-443d-9da2-74bfa724a023",n._sentryDebugIdIdentifier="sentry-dbid-22ca2e54-5c5a-443d-9da2-74bfa724a023")}catch{}})();const H={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},M={style:{display:"flex","flex-direction":"column",gap:"10px"}},O={style:{display:"flex",gap:"5px"}},Q=h({__name:"LoginBlock",setup(n){function o(y){const b=y.split("@")[0];return I.exports.kebabCase(b).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=A(),{result:l,loading:u,refetch:x}=$(async()=>k.getAuthor());function v(){k.removeAuthor(),j.shutdown(),x(),c.push({name:"login"})}return(y,b)=>{const p=B("RouterLink");return e(u)?(s(),i(e(C),{key:0})):e(l)?(s(),m("div",H,[a(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e(T),{size:18})]),default:t(()=>[r(" Support ")]),_:1}),a(e(N),{placement:"bottomRight"},{content:t(()=>[f("div",M,[a(e(w),{size:"small",type:"secondary"},{default:t(()=>[r(_(e(l).claims.email),1)]),_:1}),a(e(d),{type:"text",onClick:v},{default:t(()=>[f("div",O,[a(e(V),{size:"20"}),r(" Logout ")])]),_:1})])]),default:t(()=>[a(e(E),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(F),{shape:"square"},{default:t(()=>[r(_(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(s(),i(e(d),{key:2},{default:t(()=>[a(p,{to:"/login"},{default:t(()=>[r("Login")]),_:1})]),_:1}))}}}),U={class:"extra"},J=h({__name:"Navbar",props:{breadcrumb:{}},setup(n){return(o,c)=>(s(),i(e(Y),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(s(),i(e(G),{key:0},{default:t(()=>[(s(!0),m(g,null,L(o.breadcrumb,(l,u)=>(s(),i(e(P),{key:u},{default:t(()=>[a(e(S),{to:l.path},{default:t(()=>[r(_(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),extra:t(()=>[f("div",U,[a(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(q))]),default:t(()=>[o.$slots.default?z(o.$slots,"default",{key:0},void 0,!0):(s(),m(g,{key:1},[r("Docs")],64))]),_:3}),a(Q)])]),_:3}))}});const ne=R(J,[["__scopeId","data-v-5ef7b378"]]);export{ne as N};
//# sourceMappingURL=Navbar.da6dccb5.js.map
