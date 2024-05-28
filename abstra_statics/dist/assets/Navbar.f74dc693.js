import{_ as I}from"./logo.084e5d7c.js";import{E as x,b as r,ey as _,eE as C,eF as w,e as i,d as k,eM as N,a as S,u as e,c,bj as $,f as a,w as t,au as n,bI as d,eJ as m,cG as L,cC as D,B as z,eH as E,f9 as V,aG as b,eA as F,dq as G}from"./outputWidgets.5808ba34.js";import{a as R}from"./asyncComputed.fcfb976b.js";import{G as T}from"./PhChats.vue.2a760936.js";import{F as j}from"./PhSignOut.vue.42d11463.js";import{b as h,c as q}from"./router.7ea33f30.js";import{A as H}from"./Text.3998bffc.js";import{A as M}from"./index.550c692d.js";import{B as P,A as J,b as O}from"./index.d01e6bda.js";import{B as U}from"./BookOutlined.6c232466.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[o]="cec84b07-893a-4f24-9fea-68f120a9d96e",s._sentryDebugIdIdentifier="sentry-dbid-cec84b07-893a-4f24-9fea-68f120a9d96e")}catch{}})();const K={},v=s=>(C("data-v-46e041c1"),s=s(),w(),s),Q={class:"logo"},W=v(()=>i("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),X=v(()=>i("span",null,"Abstra",-1)),Y=[W,X];function Z(s,o){return r(),_("div",Q,Y)}const ee=x(K,[["render",Z],["__scopeId","data-v-46e041c1"]]),te={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},ae={style:{display:"flex","flex-direction":"column",gap:"10px"}},se={style:{display:"flex",gap:"5px"}},oe=k({__name:"LoginBlock",setup(s){function o(g){const y=g.split("@")[0];return z.exports.kebabCase(y).toUpperCase().split("-").slice(0,2).map(f=>f[0]).join("")}const p=N(),{result:l,loading:u,refetch:A}=R(async()=>h.getAuthor());function B(){h.removeAuthor(),q.shutdown(),A(),p.push({name:"login"})}return(g,y)=>{const f=S("router-link");return e(u)?(r(),c(e($),{key:0})):e(l)?(r(),_("div",te,[a(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[a(e(T),{size:18})]),default:t(()=>[n(" Support ")]),_:1}),a(e(D),{placement:"bottomRight"},{content:t(()=>[i("div",ae,[a(e(H),{size:"small",type:"secondary"},{default:t(()=>[n(m(e(l).claims.email),1)]),_:1}),a(e(d),{type:"text",onClick:B},{default:t(()=>[i("div",se,[a(e(j),{size:"20"}),n(" Logout ")])]),_:1})])]),default:t(()=>[a(e(L),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(M),{shape:"square"},{default:t(()=>[n(m(o(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(r(),c(e(d),{key:2},{default:t(()=>[a(f,{to:"/login"},{default:t(()=>[n("Login")]),_:1})]),_:1}))}}}),re={class:"extra"},ne=k({__name:"Navbar",props:{breadcrumb:{}},setup(s){return(o,p)=>(r(),c(e(O),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[o.breadcrumb?(r(),c(e(P),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),_(b,null,E(o.breadcrumb,(l,u)=>(r(),c(e(J),{key:u},{default:t(()=>[a(e(V),{to:l.path},{default:t(()=>[n(m(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[a(ee)]),extra:t(()=>[i("div",re,[a(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(U))]),default:t(()=>[o.$slots.default?G(o.$slots,"default",{key:0},void 0,!0):(r(),_(b,{key:1},[n("Docs")],64))]),_:3}),a(oe)])]),_:3}))}});const ye=x(ne,[["__scopeId","data-v-31e2a422"]]);export{ye as N};
//# sourceMappingURL=Navbar.f74dc693.js.map
