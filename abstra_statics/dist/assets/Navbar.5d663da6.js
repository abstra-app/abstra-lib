import{_ as I}from"./logo.084e5d7c.js";import{x,b as r,ew as p,eC as w,eD as C,e as d,d as k,eK as N,a as D,u as e,c as l,bh as L,w as t,f as a,as as c,eH as f,bG as m,cE as S,cA as $,eN as E,eF as V,f9 as z,aE as y,ey as F,dn as R}from"./outputWidgets.7283f964.js";import{b as h,c as T}from"./router.fd0b3fbd.js";import{a as H}from"./asyncComputed.f97cb5b1.js";import{F as P}from"./PhSignOut.vue.aafa823a.js";import{A as j}from"./Text.a06b48cd.js";import{A as q}from"./index.dfec6c49.js";import{B as G,A as K,b as M}from"./index.27831ee9.js";import{B as O}from"./BookOutlined.6c6af48d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="d3bad02b-8f6c-45be-a537-5e4fe6f88ab8",o._sentryDebugIdIdentifier="sentry-dbid-d3bad02b-8f6c-45be-a537-5e4fe6f88ab8")}catch{}})();const U={},v=o=>(w("data-v-46e041c1"),o=o(),C(),o),J={class:"logo"},Q=v(()=>d("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=v(()=>d("span",null,"Abstra",-1)),X=[Q,W];function Y(o,s){return r(),p("div",J,X)}const Z=x(U,[["render",Y],["__scopeId","data-v-46e041c1"]]),ee={style:{display:"flex","flex-direction":"column",gap:"10px"}},te={style:{display:"flex",gap:"5px"}},oe=k({__name:"LoginBlock",setup(o){function s(b){const g=b.split("@")[0];return E.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const i=N(),{result:n,loading:_,refetch:A}=H(async()=>h.getAuthor());function B(){h.removeAuthor(),T.shutdown(),A(),i.push({name:"login"})}return(b,g)=>{const u=D("router-link");return e(_)?(r(),l(e(L),{key:0})):e(n)?(r(),l(e($),{key:1,placement:"bottomRight"},{content:t(()=>[d("div",ee,[a(e(j),{size:"small",type:"secondary"},{default:t(()=>[c(f(e(n).claims.email),1)]),_:1}),a(e(m),{type:"text",onClick:B},{default:t(()=>[d("div",te,[a(e(P),{size:"20"}),c(" Logout ")])]),_:1})])]),default:t(()=>[a(e(S),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[a(e(q),{shape:"square"},{default:t(()=>[c(f(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),l(e(m),{key:2},{default:t(()=>[a(u,{to:"/login"},{default:t(()=>[c("Login")]),_:1})]),_:1}))}}}),ae={class:"extra"},se=k({__name:"Navbar",props:{breadcrumb:{}},setup(o){return(s,i)=>(r(),l(e(M),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[s.breadcrumb?(r(),l(e(G),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),p(y,null,V(s.breadcrumb,(n,_)=>(r(),l(e(K),{key:_},{default:t(()=>[a(e(z),{to:n.path},{default:t(()=>[c(f(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[a(Z)]),extra:t(()=>[d("div",ae,[a(e(m),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[a(e(O))]),default:t(()=>[s.$slots.default?R(s.$slots,"default",{key:0},void 0,!0):(r(),p(y,{key:1},[c("Docs")],64))]),_:3}),a(oe)])]),_:3}))}});const fe=x(se,[["__scopeId","data-v-31e2a422"]]);export{fe as N};
//# sourceMappingURL=Navbar.5d663da6.js.map
