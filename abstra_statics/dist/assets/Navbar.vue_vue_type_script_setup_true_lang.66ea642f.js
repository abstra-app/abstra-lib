import{d as m,b as n,ev as _,ex as v,e as N,eD as i,v as w,eA as B,a as C,u as e,c as l,bg as L,w as a,f as r,ar as u,bG as f,cE as y,cA as U,eM as x,eC as D,f5 as I,aD as V}from"./outputWidgets.25aedb6c.js";import{u as k}from"./index.7b0b853e.js";import{a as E}from"./asyncComputed.df165b68.js";import{A as R,B as S,a as $,c as M}from"./index.f80cf54f.js";import{A as P}from"./Text.1c2b46e0.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="6567e947-54cc-404b-a332-6f2a210abbae",s._sentryDebugIdIdentifier="sentry-dbid-6567e947-54cc-404b-a332-6f2a210abbae")}catch{}})();const T={class:"logo"},j=["src"],F=m({__name:"Logo",props:{brandName:{},logoUrl:{}},setup(s){const c=`${s.brandName} logo`;return(o,d)=>(n(),_("div",T,[o.logoUrl?(n(),_("img",{key:0,class:"logo-img",src:o.logoUrl,alt:c},null,8,j)):v("",!0),N("span",null,i(o.brandName),1)]))}});const G=w(F,[["__scopeId","data-v-b39249e9"]]),H=m({__name:"LoginBlock",setup(s){function t(b){const g=b.split("@")[0];return x.exports.kebabCase(g).toUpperCase().split("-").slice(0,2).map(p=>p[0]).join("")}const c=B(),{result:o,loading:d,refetch:h}=E(async()=>k.getUser());function A(){k.removeUser(),h(),c.push({name:"playerLogin"})}return(b,g)=>{const p=C("router-link");return e(d)?(n(),l(e(L),{key:0})):e(o)?(n(),l(e(U),{key:1,placement:"bottomRight"},{content:a(()=>[r(e(y),{direction:"vertical"},{default:a(()=>[r(e(P),null,{default:a(()=>[u(i(e(o).claims.email),1)]),_:1}),r(e(f),{onClick:A},{default:a(()=>[u("Logout")]),_:1})]),_:1})]),default:a(()=>[r(e(y),{align:"center",style:{cursor:"pointer"}},{default:a(()=>[r(e(R),null,{default:a(()=>[u(i(t(e(o).claims.email)),1)]),_:1})]),_:1})]),_:1})):(n(),l(e(f),{key:2},{default:a(()=>[r(p,{to:"/_player/login"},{default:a(()=>[u("Login")]),_:1})]),_:1}))}}}),Q=m({__name:"Navbar",props:{brandName:{},logoUrl:{},breadcrumb:{}},setup(s){return(t,c)=>(n(),l(e(M),{style:{padding:"5px 25px",width:"100vw"}},{breadcrumb:a(()=>[t.breadcrumb?(n(),l(e(S),{key:0},{default:a(()=>[(n(!0),_(V,null,D(t.breadcrumb,(o,d)=>(n(),l(e($),{key:d},{default:a(()=>[r(e(I),{to:o.path},{default:a(()=>[u(i(o.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):v("",!0)]),title:a(()=>[r(G,{"brand-name":t.brandName,"logo-url":t.logoUrl},null,8,["brand-name","logo-url"])]),extra:a(()=>[r(H)]),_:1}))}});export{Q as _};
//# sourceMappingURL=Navbar.vue_vue_type_script_setup_true_lang.66ea642f.js.map
