import{d as m,b as n,ev as _,ex as v,e as L,eD as i,v as N,eA as w,a as A,u as e,c as l,bv as C,w as a,f as r,ar as u,bV as b,cF as y,cB as U,eL as x,eC as I,f3 as D,a$ as V}from"./outputWidgets.244ba1c8.js";import{u as k}from"./index.cc4549b3.js";import{a as $}from"./asyncComputed.9805a381.js";import{A as R}from"./Text.fbfa9a45.js";import"./index.e7c19b0b.js";import{A as S,B as E,a as F,c as P}from"./index.29328ced.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="e35c6d11-4c9c-4611-91d9-41205adee3a0",s._sentryDebugIdIdentifier="sentry-dbid-e35c6d11-4c9c-4611-91d9-41205adee3a0")}catch{}})();const T={class:"logo"},j=["src"],H=m({__name:"Logo",props:{brandName:{},logoUrl:{}},setup(s){const c=`${s.brandName} logo`;return(o,d)=>(n(),_("div",T,[o.logoUrl?(n(),_("img",{key:0,class:"logo-img",src:o.logoUrl,alt:c},null,8,j)):v("",!0),L("span",null,i(o.brandName),1)]))}});const M=N(H,[["__scopeId","data-v-b39249e9"]]),q=m({__name:"LoginBlock",setup(s){function t(g){const f=g.split("@")[0];return x.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=w(),{result:o,loading:d,refetch:h}=$(async()=>k.getUser());function B(){k.removeUser(),h(),c.push({name:"playerLogin"})}return(g,f)=>{const p=A("router-link");return e(d)?(n(),l(e(C),{key:0})):e(o)?(n(),l(e(U),{key:1,placement:"bottomRight"},{content:a(()=>[r(e(y),{direction:"vertical"},{default:a(()=>[r(e(R),null,{default:a(()=>[u(i(e(o).claims.email),1)]),_:1}),r(e(b),{onClick:B},{default:a(()=>[u("Logout")]),_:1})]),_:1})]),default:a(()=>[r(e(y),{align:"center",style:{cursor:"pointer"}},{default:a(()=>[r(e(S),null,{default:a(()=>[u(i(t(e(o).claims.email)),1)]),_:1})]),_:1})]),_:1})):(n(),l(e(b),{key:2},{default:a(()=>[r(p,{to:"/_player/login"},{default:a(()=>[u("Login")]),_:1})]),_:1}))}}}),W=m({__name:"Navbar",props:{brandName:{},logoUrl:{},breadcrumb:{}},setup(s){return(t,c)=>(n(),l(e(P),{style:{padding:"5px 25px",width:"100vw"}},{breadcrumb:a(()=>[t.breadcrumb?(n(),l(e(E),{key:0},{default:a(()=>[(n(!0),_(V,null,I(t.breadcrumb,(o,d)=>(n(),l(e(F),{key:d},{default:a(()=>[r(e(D),{to:o.path},{default:a(()=>[u(i(o.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):v("",!0)]),title:a(()=>[r(M,{"brand-name":t.brandName,"logo-url":t.logoUrl},null,8,["brand-name","logo-url"])]),extra:a(()=>[r(q)]),_:1}))}});export{W as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.b46a23b6.js.map
