import{_ as I}from"./logo.084e5d7c.js";import{v,b as r,eu as p,eE as C,eF as w,e as d,d as k,eI as L,a as N,u as e,c as l,bf as D,w as t,f as s,aq as c,eD as f,bE as m,cC as S,cy as $,eL as E,eB as V,f6 as z,aC as y,ew as F,dj as R}from"./outputWidgets.ee4285cb.js";import{b as h,c as T}from"./router.c8e24317.js";import{a as j}from"./asyncComputed.092d2b62.js";import{F as q}from"./PhSignOut.vue.a0de0697.js";import{A as P}from"./Text.a86ec181.js";import{A as H}from"./index.c811ba96.js";import{B as M,A as O,b as U}from"./index.a1105c66.js";import{B as G}from"./BookOutlined.994f65a4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="cbb9d123-e556-4d20-94ae-60f78287f87e",o._sentryDebugIdIdentifier="sentry-dbid-cbb9d123-e556-4d20-94ae-60f78287f87e")}catch{}})();const J={},x=o=>(C("data-v-46e041c1"),o=o(),w(),o),K={class:"logo"},Q=x(()=>d("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=x(()=>d("span",null,"Abstra",-1)),X=[Q,W];function Y(o,a){return r(),p("div",K,X)}const Z=v(J,[["render",Y],["__scopeId","data-v-46e041c1"]]),ee={style:{display:"flex","flex-direction":"column",gap:"10px"}},te={style:{display:"flex",gap:"5px"}},oe=k({__name:"LoginBlock",setup(o){function a(b){const g=b.split("@")[0];return E.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const i=L(),{result:n,loading:_,refetch:A}=j(async()=>h.getAuthor());function B(){h.removeAuthor(),T.shutdown(),A(),i.push({name:"login"})}return(b,g)=>{const u=N("router-link");return e(_)?(r(),l(e(D),{key:0})):e(n)?(r(),l(e($),{key:1,placement:"bottomRight"},{content:t(()=>[d("div",ee,[s(e(P),{size:"small",type:"secondary"},{default:t(()=>[c(f(e(n).claims.email),1)]),_:1}),s(e(m),{type:"text",onClick:B},{default:t(()=>[d("div",te,[s(e(q),{size:"20"}),c(" Logout ")])]),_:1})])]),default:t(()=>[s(e(S),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[s(e(H),{shape:"square"},{default:t(()=>[c(f(a(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),l(e(m),{key:2},{default:t(()=>[s(u,{to:"/login"},{default:t(()=>[c("Login")]),_:1})]),_:1}))}}}),se={class:"extra"},ae=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(a,i)=>(r(),l(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[a.breadcrumb?(r(),l(e(M),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),p(y,null,V(a.breadcrumb,(n,_)=>(r(),l(e(O),{key:_},{default:t(()=>[s(e(z),{to:n.path},{default:t(()=>[c(f(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[s(Z)]),extra:t(()=>[d("div",se,[s(e(m),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[s(e(G))]),default:t(()=>[a.$slots.default?R(a.$slots,"default",{key:0},void 0,!0):(r(),p(y,{key:1},[c("Docs")],64))]),_:3}),s(oe)])]),_:3}))}});const fe=v(ae,[["__scopeId","data-v-31e2a422"]]);export{fe as N};
//# sourceMappingURL=Navbar.4013ab75.js.map
