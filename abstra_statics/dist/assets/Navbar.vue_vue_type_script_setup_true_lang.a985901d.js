import{d as m,b as n,ev as _,ex as v,e as A,eD as i,v as w,eA as B,a as C,u as e,c as l,bg as L,w as a,f as r,ar as c,bG as f,cE as y,cA as U,eN as x,eC as D,f4 as I,aD as V}from"./outputWidgets.cd96f4d9.js";import{u as k}from"./index.f149225e.js";import{a as E}from"./asyncComputed.9d274812.js";import{A as R,B as S,a as $,c as P}from"./index.e787d5ca.js";import{A as T}from"./Text.b6298f40.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="4b9b36f7-989a-41d1-981b-0322b286d6bc",s._sentryDebugIdIdentifier="sentry-dbid-4b9b36f7-989a-41d1-981b-0322b286d6bc")}catch{}})();const j={class:"logo"},F=["src"],G=m({__name:"Logo",props:{brandName:{},logoUrl:{}},setup(s){const u=`${s.brandName} logo`;return(o,d)=>(n(),_("div",j,[o.logoUrl?(n(),_("img",{key:0,class:"logo-img",src:o.logoUrl,alt:u},null,8,F)):v("",!0),A("span",null,i(o.brandName),1)]))}});const H=w(G,[["__scopeId","data-v-b39249e9"]]),M=m({__name:"LoginBlock",setup(s){function t(b){const g=b.split("@")[0];return x.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const u=B(),{result:o,loading:d,refetch:h}=E(async()=>k.getUser());function N(){k.removeUser(),h(),u.push({name:"playerLogin"})}return(b,g)=>{const p=C("router-link");return e(d)?(n(),l(e(L),{key:0})):e(o)?(n(),l(e(U),{key:1,placement:"bottomRight"},{content:a(()=>[r(e(y),{direction:"vertical"},{default:a(()=>[r(e(T),null,{default:a(()=>[c(i(e(o).claims.email),1)]),_:1}),r(e(f),{onClick:N},{default:a(()=>[c("Logout")]),_:1})]),_:1})]),default:a(()=>[r(e(y),{align:"center",style:{cursor:"pointer"}},{default:a(()=>[r(e(R),null,{default:a(()=>[c(i(t(e(o).claims.email)),1)]),_:1})]),_:1})]),_:1})):(n(),l(e(f),{key:2},{default:a(()=>[r(p,{to:"/_player/login"},{default:a(()=>[c("Login")]),_:1})]),_:1}))}}}),Q=m({__name:"Navbar",props:{brandName:{},logoUrl:{},breadcrumb:{}},setup(s){return(t,u)=>(n(),l(e(P),{style:{padding:"5px 25px",width:"100vw"}},{breadcrumb:a(()=>[t.breadcrumb?(n(),l(e(S),{key:0},{default:a(()=>[(n(!0),_(V,null,D(t.breadcrumb,(o,d)=>(n(),l(e($),{key:d},{default:a(()=>[r(e(I),{to:o.path},{default:a(()=>[c(i(o.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):v("",!0)]),title:a(()=>[r(H,{"brand-name":t.brandName,"logo-url":t.logoUrl},null,8,["brand-name","logo-url"])]),extra:a(()=>[r(M)]),_:1}))}});export{Q as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.a985901d.js.map
