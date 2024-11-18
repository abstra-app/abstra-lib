import{d as h,eo as A,r as B,u as e,o as s,c as i,bx as C,X as f,b as a,w as t,aF as r,bS as c,a as m,db as N,e9 as _,cN as w,ej as I,eb as L,f0 as R,aR as g,R as D,Z as S,$ as z}from"./vue-router.15b5a782.js";import{a as $}from"./asyncComputed.65159a36.js";import{G as V}from"./PhChats.vue.c09e15a9.js";import{F}from"./PhSignOut.vue.8539c9c6.js";import{C as T}from"./router.4ae1a0f1.js";import{a as k}from"./gateway.041a7801.js";import{A as j}from"./index.e7bba326.js";import{A as E}from"./Avatar.2649e614.js";import{B as P,A as q,b as G}from"./index.413c4a8b.js";import{B as H}from"./BookOutlined.295cb718.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="c597e0ff-c6a6-4656-8698-22dec7c92216",n._sentryDebugIdIdentifier="sentry-dbid-c597e0ff-c6a6-4656-8698-22dec7c92216")}catch{}})();const M={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},O={style:{display:"flex","flex-direction":"column",gap:"10px"}},U={style:{display:"flex",gap:"5px"}},X=h({__name:"LoginBlock",setup(n){function o(y){const b=y.split("@")[0];return I.exports.kebabCase(b).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const d=A(),{result:l,loading:u,refetch:x}=$(async()=>k.getAuthor());function v(){k.removeAuthor(),T.shutdown(),x(),d.push({name:"login"})}return(y,b)=>{const p=B("RouterLink");return e(u)?(s(),i(e(C),{key:0})):e(l)?(s(),f("div",M,[a(e(c),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e(V),{size:18})]),default:t(()=>[r(" Support ")]),_:1}),a(e(w),{placement:"bottomRight"},{content:t(()=>[m("div",O,[a(e(N),{size:"small",type:"secondary"},{default:t(()=>[r(_(e(l).claims.email),1)]),_:1}),a(e(c),{type:"text",onClick:v},{default:t(()=>[m("div",U,[a(e(F),{size:"20"}),r(" Logout ")])]),_:1})])]),default:t(()=>[a(e(j),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(E),{shape:"square"},{default:t(()=>[r(_(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(s(),i(e(c),{key:2},{default:t(()=>[a(p,{to:"/login"},{default:t(()=>[r("Login")]),_:1})]),_:1}))}}}),Z={class:"extra"},J=h({__name:"Navbar",props:{breadcrumb:{}},setup(n){return(o,d)=>(s(),i(e(G),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(s(),i(e(P),{key:0},{default:t(()=>[(s(!0),f(g,null,L(o.breadcrumb,(l,u)=>(s(),i(e(q),{key:u},{default:t(()=>[a(e(R),{to:l.path},{default:t(()=>[r(_(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),extra:t(()=>[m("div",Z,[a(e(c),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(H))]),default:t(()=>[o.$slots.default?S(o.$slots,"default",{key:0},void 0,!0):(s(),f(g,{key:1},[r("Docs")],64))]),_:3}),a(X)])]),_:3}))}});const ne=z(J,[["__scopeId","data-v-5ef7b378"]]);export{ne as N};
//# sourceMappingURL=Navbar.fc7b7b64.js.map
