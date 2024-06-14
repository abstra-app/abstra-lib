import{_ as I}from"./logo.084e5d7c.js";import{E as x,b as r,eV as _,e$ as C,f0 as w,e as i,d as k,f7 as $,a as N,u as e,c,be as S,f as a,w as t,am as n,bF as d,cV as D,f4 as m,cH as L,cB as V,D as z,f2 as E,fy as F,ay as b,eX as R,dy as T}from"./outputWidgets.32e23fb8.js";import{a as H}from"./asyncComputed.9004c435.js";import{G as P}from"./PhChats.vue.02bf3a32.js";import{F as j}from"./PhSignOut.vue.089e7817.js";import{C as q}from"./router.ab5a3510.js";import{a as h}from"./gateway.1f5565de.js";import{A as G}from"./index.bb9e7192.js";import{B as M,A as O,b as U}from"./index.ac1fd817.js";import{B as X}from"./BookOutlined.310f3f0f.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="4326f73e-89a2-45a6-b85a-e6f3cbc9a2c8",s._sentryDebugIdIdentifier="sentry-dbid-4326f73e-89a2-45a6-b85a-e6f3cbc9a2c8")}catch{}})();const J={},v=s=>(C("data-v-46e041c1"),s=s(),w(),s),K={class:"logo"},Q=v(()=>i("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=v(()=>i("span",null,"Abstra",-1)),Y=[Q,W];function Z(s,o){return r(),_("div",K,Y)}const ee=x(J,[["render",Z],["__scopeId","data-v-46e041c1"]]),te={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},ae={style:{display:"flex","flex-direction":"column",gap:"10px"}},se={style:{display:"flex",gap:"5px"}},oe=k({__name:"LoginBlock",setup(s){function o(y){const g=y.split("@")[0];return z.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(f=>f[0]).join("")}const p=$(),{result:l,loading:u,refetch:A}=H(async()=>h.getAuthor());function B(){h.removeAuthor(),q.shutdown(),A(),p.push({name:"login"})}return(y,g)=>{const f=N("router-link");return e(u)?(r(),c(e(S),{key:0})):e(l)?(r(),_("div",te,[a(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e(P),{size:18})]),default:t(()=>[n(" Support ")]),_:1}),a(e(V),{placement:"bottomRight"},{content:t(()=>[i("div",ae,[a(e(D),{size:"small",type:"secondary"},{default:t(()=>[n(m(e(l).claims.email),1)]),_:1}),a(e(d),{type:"text",onClick:B},{default:t(()=>[i("div",se,[a(e(j),{size:"20"}),n(" Logout ")])]),_:1})])]),default:t(()=>[a(e(L),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(G),{shape:"square"},{default:t(()=>[n(m(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(r(),c(e(d),{key:2},{default:t(()=>[a(f,{to:"/login"},{default:t(()=>[n("Login")]),_:1})]),_:1}))}}}),re={class:"extra"},ne=k({__name:"Navbar",props:{breadcrumb:{}},setup(s){return(o,p)=>(r(),c(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(r(),c(e(M),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),_(b,null,E(o.breadcrumb,(l,u)=>(r(),c(e(O),{key:u},{default:t(()=>[a(e(F),{to:l.path},{default:t(()=>[n(m(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):R("",!0)]),title:t(()=>[a(ee)]),extra:t(()=>[i("div",re,[a(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(X))]),default:t(()=>[o.$slots.default?T(o.$slots,"default",{key:0},void 0,!0):(r(),_(b,{key:1},[n("Docs")],64))]),_:3}),a(oe)])]),_:3}))}});const ge=x(ne,[["__scopeId","data-v-31e2a422"]]);export{ge as N};
//# sourceMappingURL=Navbar.c34ea13f.js.map
