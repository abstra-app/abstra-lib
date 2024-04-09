import{_ as I}from"./logo.084e5d7c.js";import{v,b as r,eu as p,eE as C,eF as w,e as d,d as k,eI as L,a as N,u as e,c,bf as D,w as t,f as o,aq as l,eD as f,bE as m,cC as S,cy as $,eL as E,eB as V,f6 as z,aC as y,ew as F,dj as R}from"./outputWidgets.b1051bf6.js";import{b as h,c as T}from"./router.1b3abbc5.js";import{a as j}from"./asyncComputed.024639a6.js";import{F as q}from"./PhSignOut.vue.a485b179.js";import{A as P}from"./Text.e1e330eb.js";import{A as H}from"./index.c2fb932a.js";import{B as M,A as O,b as U}from"./index.bfbe6382.js";import{B as G}from"./BookOutlined.9a0a4755.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="50a3d289-169f-4a1f-afb7-aa9f36a5b8ae",a._sentryDebugIdIdentifier="sentry-dbid-50a3d289-169f-4a1f-afb7-aa9f36a5b8ae")}catch{}})();const J={},x=a=>(C("data-v-46e041c1"),a=a(),w(),a),K={class:"logo"},Q=x(()=>d("img",{class:"logo-img",src:I,alt:"Abstra cloud logo"},null,-1)),W=x(()=>d("span",null,"Abstra",-1)),X=[Q,W];function Y(a,s){return r(),p("div",K,X)}const Z=v(J,[["render",Y],["__scopeId","data-v-46e041c1"]]),ee={style:{display:"flex","flex-direction":"column",gap:"10px"}},te={style:{display:"flex",gap:"5px"}},ae=k({__name:"LoginBlock",setup(a){function s(b){const g=b.split("@")[0];return E.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const i=L(),{result:n,loading:_,refetch:A}=j(async()=>h.getAuthor());function B(){h.removeAuthor(),T.shutdown(),A(),i.push({name:"login"})}return(b,g)=>{const u=N("router-link");return e(_)?(r(),c(e(D),{key:0})):e(n)?(r(),c(e($),{key:1,placement:"bottomRight"},{content:t(()=>[d("div",ee,[o(e(P),{size:"small",type:"secondary"},{default:t(()=>[l(f(e(n).claims.email),1)]),_:1}),o(e(m),{type:"text",onClick:B},{default:t(()=>[d("div",te,[o(e(q),{size:"20"}),l(" Logout ")])]),_:1})])]),default:t(()=>[o(e(S),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(H),{shape:"square"},{default:t(()=>[l(f(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),c(e(m),{key:2},{default:t(()=>[o(u,{to:"/login"},{default:t(()=>[l("Login")]),_:1})]),_:1}))}}}),oe={class:"extra"},se=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,i)=>(r(),c(e(U),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[s.breadcrumb?(r(),c(e(M),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),p(y,null,V(s.breadcrumb,(n,_)=>(r(),c(e(O),{key:_},{default:t(()=>[o(e(z),{to:n.path},{default:t(()=>[l(f(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(Z)]),extra:t(()=>[d("div",oe,[o(e(m),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[o(e(G))]),default:t(()=>[s.$slots.default?R(s.$slots,"default",{key:0},void 0,!0):(r(),p(y,{key:1},[l("Docs")],64))]),_:3}),o(ae)])]),_:3}))}});const fe=v(se,[["__scopeId","data-v-31e2a422"]]);export{fe as N};
//# sourceMappingURL=Navbar.cb8d29c9.js.map
