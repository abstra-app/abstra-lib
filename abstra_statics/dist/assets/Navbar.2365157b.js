import{_ as B}from"./logo.084e5d7c.js";import{E as x,b as r,eq as _,ew as C,ex as I,e as i,d as k,eF as L,a as N,u as e,c,bc as S,f as o,w as t,ak as n,bz as d,cL as $,eC as f,cr as D,D as z,eA as V,f8 as E,aw as y,es as F,dv as R}from"./outputWidgets.fd23be41.js";import{a as T}from"./asyncComputed.1151ee43.js";import{G as q}from"./PhChats.vue.14290151.js";import{F as P}from"./PhSignOut.vue.08444aa0.js";import{C as j}from"./router.40b877dd.js";import{a as h}from"./gateway.0fcf97ac.js";import{A as G}from"./index.3fc5d928.js";import{A as H}from"./index.688d3200.js";import{B as M,A as O,b as U}from"./index.0c47ac36.js";import{B as J}from"./BookOutlined.aefca60a.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="a00b69dd-a188-4690-b80f-899d019c34bc",s._sentryDebugIdIdentifier="sentry-dbid-a00b69dd-a188-4690-b80f-899d019c34bc")}catch{}})();const K={},v=s=>(C("data-v-46e041c1"),s=s(),I(),s),Q={class:"logo"},W=v(()=>i("img",{class:"logo-img",src:B,alt:"Abstra cloud logo"},null,-1)),X=v(()=>i("span",null,"Abstra",-1)),Y=[W,X];function Z(s,a){return r(),_("div",Q,Y)}const ee=x(K,[["render",Z],["__scopeId","data-v-46e041c1"]]),te={key:1,style:{display:"flex","align-items":"center",gap:"16px"}},oe={style:{display:"flex","flex-direction":"column",gap:"10px"}},se={style:{display:"flex",gap:"5px"}},ae=k({__name:"LoginBlock",setup(s){function a(g){const b=g.split("@")[0];return z.exports.kebabCase(b).toUpperCase().split("-").slice(0,2).map(m=>m[0]).join("")}const p=L(),{result:l,loading:u,refetch:A}=T(async()=>h.getAuthor());function w(){h.removeAuthor(),j.shutdown(),A(),p.push({name:"login"})}return(g,b)=>{const m=N("router-link");return e(u)?(r(),c(e(S),{key:0})):e(l)?(r(),_("div",te,[o(e(d),{class:"intercom-launcher",target:"_blank",type:"link",size:"small",style:{color:"#d14056",display:"flex","align-items":"center",gap:"6px"}},{icon:t(()=>[o(e(q),{size:18})]),default:t(()=>[n(" Support ")]),_:1}),o(e(D),{placement:"bottomRight"},{content:t(()=>[i("div",oe,[o(e($),{size:"small",type:"secondary"},{default:t(()=>[n(f(e(l).claims.email),1)]),_:1}),o(e(d),{type:"text",onClick:w},{default:t(()=>[i("div",se,[o(e(P),{size:"20"}),n(" Logout ")])]),_:1})])]),default:t(()=>[o(e(G),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(H),{shape:"square"},{default:t(()=>[n(f(a(e(l).claims.email)),1)]),_:1})]),_:1})]),_:1})])):(r(),c(e(d),{key:2},{default:t(()=>[o(m,{to:"/login"},{default:t(()=>[n("Login")]),_:1})]),_:1}))}}}),re={class:"extra"},ne=k({__name:"Navbar",props:{breadcrumb:{}},setup(s){return(a,p)=>(r(),c(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[a.breadcrumb?(r(),c(e(M),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),_(y,null,V(a.breadcrumb,(l,u)=>(r(),c(e(O),{key:u},{default:t(()=>[o(e(E),{to:l.path},{default:t(()=>[n(f(l.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(ee)]),extra:t(()=>[i("div",re,[o(e(d),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[o(e(J))]),default:t(()=>[a.$slots.default?R(a.$slots,"default",{key:0},void 0,!0):(r(),_(y,{key:1},[n("Docs")],64))]),_:3}),o(ae)])]),_:3}))}});const ye=x(ne,[["__scopeId","data-v-31e2a422"]]);export{ye as N};
//# sourceMappingURL=Navbar.2365157b.js.map
