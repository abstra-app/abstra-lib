import{d as m,b as n,ev as _,ex as v,e as L,eD as i,v as N,eA as w,a as A,u as e,c as l,bv as C,w as a,f as r,ar as c,bV as g,cF as y,cB as U,eL as x,eC as I,f3 as D,a$ as V}from"./outputWidgets.6f2079f2.js";import{u as k}from"./index.ce842f51.js";import{a as $}from"./asyncComputed.cabe49c9.js";import{A as R}from"./Text.2ca6ae2d.js";import"./index.12201595.js";import{A as S,B as E,a as F,c as P}from"./index.b13203ef.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="f6b441b8-b310-4927-8ea9-4bc5e9e56e92",s._sentryDebugIdIdentifier="sentry-dbid-f6b441b8-b310-4927-8ea9-4bc5e9e56e92")}catch{}})();const T={class:"logo"},j=["src"],H=m({__name:"Logo",props:{brandName:{},logoUrl:{}},setup(s){const u=`${s.brandName} logo`;return(o,d)=>(n(),_("div",T,[o.logoUrl?(n(),_("img",{key:0,class:"logo-img",src:o.logoUrl,alt:u},null,8,j)):v("",!0),L("span",null,i(o.brandName),1)]))}});const M=N(H,[["__scopeId","data-v-b39249e9"]]),q=m({__name:"LoginBlock",setup(s){function t(b){const f=b.split("@")[0];return x.exports.kebabCase(f).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const u=w(),{result:o,loading:d,refetch:h}=$(async()=>k.getUser());function B(){k.removeUser(),h(),u.push({name:"playerLogin"})}return(b,f)=>{const p=A("router-link");return e(d)?(n(),l(e(C),{key:0})):e(o)?(n(),l(e(U),{key:1,placement:"bottomRight"},{content:a(()=>[r(e(y),{direction:"vertical"},{default:a(()=>[r(e(R),null,{default:a(()=>[c(i(e(o).claims.email),1)]),_:1}),r(e(g),{onClick:B},{default:a(()=>[c("Logout")]),_:1})]),_:1})]),default:a(()=>[r(e(y),{align:"center",style:{cursor:"pointer"}},{default:a(()=>[r(e(S),null,{default:a(()=>[c(i(t(e(o).claims.email)),1)]),_:1})]),_:1})]),_:1})):(n(),l(e(g),{key:2},{default:a(()=>[r(p,{to:"/_player/login"},{default:a(()=>[c("Login")]),_:1})]),_:1}))}}}),W=m({__name:"Navbar",props:{brandName:{},logoUrl:{},breadcrumb:{}},setup(s){return(t,u)=>(n(),l(e(P),{style:{padding:"5px 25px",width:"100vw"}},{breadcrumb:a(()=>[t.breadcrumb?(n(),l(e(E),{key:0},{default:a(()=>[(n(!0),_(V,null,I(t.breadcrumb,(o,d)=>(n(),l(e(F),{key:d},{default:a(()=>[r(e(D),{to:o.path},{default:a(()=>[c(i(o.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):v("",!0)]),title:a(()=>[r(M,{"brand-name":t.brandName,"logo-url":t.logoUrl},null,8,["brand-name","logo-url"])]),extra:a(()=>[r(q)]),_:1}))}});export{W as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.c6534f26.js.map
