import{_ as C}from"./logo.084e5d7c.js";import{x,b as r,ew as p,eC as I,eD as w,e as d,d as k,eK as N,a as D,u as e,c as l,bh as L,w as t,f as o,as as c,eH as m,bG as f,cC as S,cy as $,eO as V,eF as z,f9 as E,aE as g,ey as F,dj as R}from"./outputWidgets.7dd23d3d.js";import{b as h,c as T}from"./router.55ae8196.js";import{a as j}from"./asyncComputed.8f047c40.js";import{F as H}from"./PhSignOut.vue.0b43dbfe.js";import{A as O}from"./Text.8f0caa1d.js";import{A as P}from"./index.3a6370f6.js";import{B as q,A as G,b as K}from"./index.9c3c61e5.js";import{B as M}from"./BookOutlined.ecab59cc.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="15bfaab5-876b-4a98-adab-ac24b13b1053",a._sentryDebugIdIdentifier="sentry-dbid-15bfaab5-876b-4a98-adab-ac24b13b1053")}catch{}})();const U={},v=a=>(I("data-v-46e041c1"),a=a(),w(),a),J={class:"logo"},Q=v(()=>d("img",{class:"logo-img",src:C,alt:"Abstra cloud logo"},null,-1)),W=v(()=>d("span",null,"Abstra",-1)),X=[Q,W];function Y(a,s){return r(),p("div",J,X)}const Z=x(U,[["render",Y],["__scopeId","data-v-46e041c1"]]),ee={style:{display:"flex","flex-direction":"column",gap:"10px"}},te={style:{display:"flex",gap:"5px"}},ae=k({__name:"LoginBlock",setup(a){function s(b){const y=b.split("@")[0];return V.exports.kebabCase(y).toUpperCase().split("-").slice(0,2).map(u=>u[0]).join("")}const i=N(),{result:n,loading:_,refetch:A}=j(async()=>h.getAuthor());function B(){h.removeAuthor(),T.shutdown(),A(),i.push({name:"login"})}return(b,y)=>{const u=D("router-link");return e(_)?(r(),l(e(L),{key:0})):e(n)?(r(),l(e($),{key:1,placement:"bottomRight"},{content:t(()=>[d("div",ee,[o(e(O),{size:"small",type:"secondary"},{default:t(()=>[c(m(e(n).claims.email),1)]),_:1}),o(e(f),{type:"text",onClick:B},{default:t(()=>[d("div",te,[o(e(H),{size:"20"}),c(" Logout ")])]),_:1})])]),default:t(()=>[o(e(S),{align:"center",style:{cursor:"pointer"}},{default:t(()=>[o(e(P),{shape:"square"},{default:t(()=>[c(m(s(e(n).claims.email)),1)]),_:1})]),_:1})]),_:1})):(r(),l(e(f),{key:2},{default:t(()=>[o(u,{to:"/login"},{default:t(()=>[c("Login")]),_:1})]),_:1}))}}}),oe={class:"extra"},se=k({__name:"Navbar",props:{breadcrumb:{}},setup(a){return(s,i)=>(r(),l(e(K),{style:{padding:"5px 25px",border:"1px solid #f0f0f0"}},{subTitle:t(()=>[s.breadcrumb?(r(),l(e(q),{key:0,style:{margin:"0px 50px"}},{default:t(()=>[(r(!0),p(g,null,z(s.breadcrumb,(n,_)=>(r(),l(e(G),{key:_},{default:t(()=>[o(e(E),{to:n.path},{default:t(()=>[c(m(n.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):F("",!0)]),title:t(()=>[o(Z)]),extra:t(()=>[d("div",oe,[o(e(f),{class:"docs-button",href:"https://docs.abstra.io/",target:"_blank",type:"link",style:{color:"#d14056"},size:"small"},{icon:t(()=>[o(e(M))]),default:t(()=>[s.$slots.default?R(s.$slots,"default",{key:0},void 0,!0):(r(),p(g,{key:1},[c("Docs")],64))]),_:3}),o(ae)])]),_:3}))}});const me=x(se,[["__scopeId","data-v-31e2a422"]]);export{me as N};
//# sourceMappingURL=Navbar.f1e46e17.js.map
