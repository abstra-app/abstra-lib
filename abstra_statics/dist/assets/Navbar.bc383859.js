import{_ as C}from"./logo.084e5d7c.js";import{x,b as r,ew as p,eC as I,eD as w,e as d,d as k,eK as N,a as D,u as e,c as l,bh as L,w as t,f as s,as as c,eH as f,bG as m,cC as S,cy as $,eO as V,eF as z,f9 as E,aE as g,ey as F,dj as R}from"./outputWidgets.7250f034.js";import{b as h,c as T}from"./router.26c23698.js";import{a as j}from"./asyncComputed.03680468.js";import{F as H}from"./PhSignOut.vue.5a7c6d2c.js";import{A as O}from"./Text.c39e2b03.js";import{A as P}from"./index.847e0bed.js";import{B as q,A as G,b as K}from"./index.5f60e6b6.js";import{B as M}from"./BookOutlined.f2d46935.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="6966ef09-e5b7-4982-bbeb-3927570efcc3",o._sentryDebugIdIdentifier="sentry-dbid-6966ef09-e5b7-4982-bbeb-3927570efcc3")}catch{}})();const U={},v=o=>(I("data-v-46e041c1"),o=o(),w(),o),J={class:"logo"},Q=v(()=>d("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),W=v(()=>d("span",null,"Abstra",-1)),X=[Q,W];function Y(o,a){return r(),p("div",J,X)}const Z=x(U,[["render",Y],["__scopeId","data-v-46e041c1"]]),ee={style:{display:"flex","flex-direction":"column",gap:"10px"}},te={style:{display:"flex",gap:"5px"}},oe=k({__name:"LoginBlock",setup(o){function a(b){const y=b.split("@")[0];return V.exports.kebabCase(y).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const i=N(),{result:n,loading:_,refetch:A}=j(async()=>h.getAuthor());function B(){h.removeAuthor(),T.shutdown(),A(),i.push({name:"login"})}return(b,y)=>{const u=D("router-link");return e(_)?(r(),l(e(L),{key:0})):e(n)?(r(),l(e($),{key:1,placement:"bottomRight"},{content:t(()=>[d("div",ee,[s(e(O),{size:"small",type:"secondary"},{default:t(()=>[c(f(e(n).claims.email),1)]),_:1}),s(e(m),{type:"text",onClick:B},{default:t(()=>[d("div",te,[s(e(H),{size:"20"}),c(" Logout ")])]),_:1})])]),default:t(()=>[s(e(S),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[s(e(P),{shape:"square"},{default:t(()=>[c(f(a(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),l(e(m),{key:2},{default:t(()=>[s(u,{to:"/login"},{default:t(()=>[c("Login")]),_:1})]),_:1}))}}}),se={class:"extra"},ae=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(a,i)=>(r(),l(e(K),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[a.breadcrumb?(r(),l(e(q),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),p(g,null,z(a.breadcrumb,(n,_)=>(r(),l(e(G),{key:_},{default:t(()=>[s(e(E),{to:n.path},{default:t(()=>[c(f(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[s(Z)]),extra:t(()=>[d("div",se,[s(e(m),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[s(e(M))]),default:t(()=>[a.$slots.default?R(a.$slots,"default",{key:0},void 0,!0):(r(),p(g,{key:1},[c("Docs")],64))]),_:3}),s(oe)])]),_:3}))}});const fe=x(ae,[["__scopeId","data-v-31e2a422"]]);export{fe as N};
//# sourceMappingURL=Navbar.bc383859.js.map
