import{_ as I}from"./logo.084e5d7c.js";import{v,b as r,eu as p,eE as w,eF as C,e as l,d as k,eI as N,a as D,u as e,c,bf as L,w as t,f as s,aq as d,eD as f,bE as m,cA as S,cw as $,eM as E,eB as V,f7 as z,aC as b,ew as F,dh as R}from"./outputWidgets.59239215.js";import{b as h,c as T}from"./router.5e1b2a3a.js";import{a as q}from"./asyncComputed.2e1e6d57.js";import{F as M}from"./PhSignOut.vue.5614d4c8.js";import{A as P}from"./Text.96005f3c.js";import{A as j}from"./index.a8a2670b.js";import{B as H,A as O,b as U}from"./index.0543f1bb.js";import{B as G}from"./BookOutlined.5ca502bc.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="7fd1d4d6-11fa-403c-83ae-dd7229251e0d",o._sentryDebugIdIdentifier="sentry-dbid-7fd1d4d6-11fa-403c-83ae-dd7229251e0d")}catch{}})();const J={},x=o=>(w("data-v-46e041c1"),o=o(),C(),o),K={class:"logo"},Q=x(()=>l("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=x(()=>l("span",null,"Abstra",-1)),X=[Q,W];function Y(o,a){return r(),p("div",K,X)}const Z=v(J,[["render",Y],["__scopeId","data-v-46e041c1"]]),ee={style:{display:"flex","flex-direction":"column",gap:"10px"}},te={style:{display:"flex",gap:"5px"}},oe=k({__name:"LoginBlock",setup(o){function a(g){const y=g.split("@")[0];return E.exports.kebabCase(y).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const i=N(),{result:n,loading:_,refetch:A}=q(async()=>h.getAuthor());function B(){h.removeAuthor(),T.shutdown(),A(),i.push({name:"login"})}return(g,y)=>{const u=D("router-link");return e(_)?(r(),c(e(L),{key:0})):e(n)?(r(),c(e($),{key:1,placement:"bottomRight"},{content:t(()=>[l("div",ee,[s(e(P),{size:"small",type:"secondary"},{default:t(()=>[d(f(e(n).claims.email),1)]),_:1}),s(e(m),{type:"text",onClick:B},{default:t(()=>[l("div",te,[s(e(M),{size:"20"}),d(" Logout ")])]),_:1})])]),default:t(()=>[s(e(S),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[s(e(j),{shape:"square"},{default:t(()=>[d(f(a(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(m),{key:2},{default:t(()=>[s(u,{to:"/login"},{default:t(()=>[d("Login")]),_:1})]),_:1}))}}}),se={class:"extra"},ae=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(a,i)=>(r(),c(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[a.breadcrumb?(r(),c(e(H),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),p(b,null,V(a.breadcrumb,(n,_)=>(r(),c(e(O),{key:_},{default:t(()=>[s(e(z),{to:n.path},{default:t(()=>[d(f(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[s(Z)]),extra:t(()=>[l("div",se,[s(e(m),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[s(e(G))]),default:t(()=>[a.$slots.default?R(a.$slots,"default",{key:0},void 0,!0):(r(),p(b,{key:1},[d("Docs")],64))]),_:3}),s(oe)])]),_:3}))}});const fe=v(ae,[["__scopeId","data-v-31e2a422"]]);export{fe as N};
//# sourceMappingURL=Navbar.448385b6.js.map
