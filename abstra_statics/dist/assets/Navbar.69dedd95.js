import{_ as I}from"./logo.084e5d7c.js";import{E as x,b as r,eV as _,e$ as C,f0 as w,e as i,d as k,f7 as $,a as N,u as e,c,be as S,f as s,w as t,am as n,bF as d,cV as D,f4 as f,cH as L,cB as V,D as z,f2 as E,fy as F,ay as b,eX as R,dy as T}from"./outputWidgets.1b2f0fc6.js";import{a as H}from"./asyncComputed.c726d074.js";import{G as P}from"./PhChats.vue.46e59001.js";import{F as j}from"./PhSignOut.vue.cf7062df.js";import{C as q}from"./router.b44f083b.js";import{a as h}from"./gateway.46ff34c5.js";import{A as G}from"./index.f7468171.js";import{B as M,A as O,b as U}from"./index.2e2a0716.js";import{B as X}from"./BookOutlined.5944a467.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="459d65d4-b6ea-40e8-8755-3089874b90a6",a._sentryDebugIdIdentifier="sentry-dbid-459d65d4-b6ea-40e8-8755-3089874b90a6")}catch{}})();const J={},v=a=>(C("data-v-46e041c1"),a=a(),w(),a),K={class:"logo"},Q=v(()=>i("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=v(()=>i("span",null,"Abstra",-1)),Y=[Q,W];function Z(a,o){return r(),_("div",K,Y)}const ee=x(J,[["render",Z],["__scopeId","data-v-46e041c1"]]),te={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},se={style:{display:"flex","flex-direction":"column",gap:"10px"}},ae={style:{display:"flex",gap:"5px"}},oe=k({__name:"LoginBlock",setup(a){function o(y){const g=y.split("@")[0];return z.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(m=>m[0]).join("")}const p=$(),{result:l,loading:u,refetch:A}=H(async()=>h.getAuthor());function B(){h.removeAuthor(),q.shutdown(),A(),p.push({name:"login"})}return(y,g)=>{const m=N("router-link");return e(u)?(r(),c(e(S),{key:0})):e(l)?(r(),_("div",te,[s(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[s(e(P),{size:18})]),default:t(()=>[n(" Support ")]),_:1}),s(e(V),{placement:"bottomRight"},{content:t(()=>[i("div",se,[s(e(D),{size:"small",type:"secondary"},{default:t(()=>[n(f(e(l).claims.email),1)]),_:1}),s(e(d),{type:"text",onClick:B},{default:t(()=>[i("div",ae,[s(e(j),{size:"20"}),n(" Logout ")])]),_:1})])]),default:t(()=>[s(e(L),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[s(e(G),{shape:"square"},{default:t(()=>[n(f(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(r(),c(e(d),{key:2},{default:t(()=>[s(m,{to:"/login"},{default:t(()=>[n("Login")]),_:1})]),_:1}))}}}),re={class:"extra"},ne=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(o,p)=>(r(),c(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(r(),c(e(M),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),_(b,null,E(o.breadcrumb,(l,u)=>(r(),c(e(O),{key:u},{default:t(()=>[s(e(F),{to:l.path},{default:t(()=>[n(f(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):R("",!0)]),title:t(()=>[s(ee)]),extra:t(()=>[i("div",re,[s(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[s(e(X))]),default:t(()=>[o.$slots.default?T(o.$slots,"default",{key:0},void 0,!0):(r(),_(b,{key:1},[n("Docs")],64))]),_:3}),s(oe)])]),_:3}))}});const ge=x(ne,[["__scopeId","data-v-31e2a422"]]);export{ge as N};
//# sourceMappingURL=Navbar.69dedd95.js.map
