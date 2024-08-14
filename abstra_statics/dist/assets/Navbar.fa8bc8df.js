import{d as x,eI as A,r as B,u as e,o as s,c as i,bp as C,W as f,b as a,w as t,ax as r,bL as d,a as m,cY as w,eu as _,cD as I,eG as L,ex as N,f7 as D,aJ as g,R,Z as z,$ as S}from"./vue-router.28b113b5.js";import{a as $}from"./asyncComputed.a2be0755.js";import{G as V}from"./PhChats.vue.2e082c0a.js";import{F as T}from"./PhSignOut.vue.a3d180a8.js";import{C as E}from"./router.2490aba0.js";import{a as k}from"./gateway.c036da04.js";import{A as F}from"./index.88847a2c.js";import{A as G}from"./Avatar.2a86d4fd.js";import{B as P,A as j,b as q}from"./index.0cbeb3ae.js";import{B as H}from"./BookOutlined.6ccce4a8.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="a267df1c-8707-4891-92af-f76be0c69f26",n._sentryDebugIdIdentifier="sentry-dbid-a267df1c-8707-4891-92af-f76be0c69f26")}catch{}})();const J={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},M={style:{display:"flex","flex-direction":"column",gap:"10px"}},O={style:{display:"flex",gap:"5px"}},U=x({__name:"LoginBlock",setup(n){function o(y){const b=y.split("@")[0];return L.exports.kebabCase(b).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=A(),{result:l,loading:u,refetch:h}=$(async()=>k.getAuthor());function v(){k.removeAuthor(),E.shutdown(),h(),c.push({name:"login"})}return(y,b)=>{const p=B("RouterLink");return e(u)?(s(),i(e(C),{key:0})):e(l)?(s(),f("div",J,[a(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e(V),{size:18})]),default:t(()=>[r(" Support ")]),_:1}),a(e(I),{placement:"bottomRight"},{content:t(()=>[m("div",M,[a(e(w),{size:"small",type:"secondary"},{default:t(()=>[r(_(e(l).claims.email),1)]),_:1}),a(e(d),{type:"text",onClick:v},{default:t(()=>[m("div",O,[a(e(T),{size:"20"}),r(" Logout ")])]),_:1})])]),default:t(()=>[a(e(F),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(G),{shape:"square"},{default:t(()=>[r(_(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(s(),i(e(d),{key:2},{default:t(()=>[a(p,{to:"/login"},{default:t(()=>[r("Login")]),_:1})]),_:1}))}}}),W={class:"extra"},Y=x({__name:"Navbar",props:{breadcrumb:{}},setup(n){return(o,c)=>(s(),i(e(q),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(s(),i(e(P),{key:0},{default:t(()=>[(s(!0),f(g,null,N(o.breadcrumb,(l,u)=>(s(),i(e(j),{key:u},{default:t(()=>[a(e(D),{to:l.path},{default:t(()=>[r(_(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):R("",!0)]),extra:t(()=>[m("div",W,[a(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(H))]),default:t(()=>[o.$slots.default?z(o.$slots,"default",{key:0},void 0,!0):(s(),f(g,{key:1},[r("Docs")],64))]),_:3}),a(U)])]),_:3}))}});const ne=S(Y,[["__scopeId","data-v-5ef7b378"]]);export{ne as N};
//# sourceMappingURL=Navbar.fa8bc8df.js.map
