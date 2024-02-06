import{F as I,r as R,R as B}from"./FormRunner.8d19c6ba.js";import{d as P,eB as q,eA as x,G as D,J as p,H as y,u as d,b as s,ev as i,f as E,c as F,eE as S,eF as K,e as c,v as L}from"./outputWidgets.a313d7bb.js";import{u as h}from"./uuid.8c61f1d9.js";import{a as N}from"./asyncComputed.406915d3.js";import{g as A}from"./api.a6127cba.js";import{L as C}from"./CircularLoading.afb8d96a.js";import"./url.0e0499a0.js";import"./Passwordless.bab6633c.js";import"./index.3f33b64a.js";import"./pubsub.371a5a5b.js";import"./icons.ef464e95.js";import"./PlayerNavbar.35c17a24.js";import"./ActionButton.182187cb.js";import"./WidgetsFrame.c32b81e0.js";import"./index.61c797fc.js";import"./Base.b4f5920a.js";import"./Link.bb890dc3.js";import"./Paragraph.894f4ef1.js";import"./Text.c0f20880.js";import"./Title.86e73542.js";import"./Card.dd3f7a1d.js";import"./TabPane.9058b02e.js";import"./hasIn.7b35fbd0.js";import"./runnerData.020725ac.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="4989a31c-9a5c-46a6-a47c-2b8e3243e1b3",o._sentryDebugIdIdentifier="sentry-dbid-4989a31c-9a5c-46a6-a47c-2b8e3243e1b3")}catch{}})();const u=o=>(S("data-v-485e3719"),o=o(),K(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=u(()=>c("h1",null,"Oops! Something went wrong",-1)),H=u(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),J=[G,H],O={key:2,class:"form"},j={key:3,class:"error not-found",style:{height:"100vh"}},z=u(()=>c("h1",null,"Page not found",-1)),M=u(()=>c("p",null,"The page you requested could not be found.",-1)),Q=[z,M],U=P({__name:"Player",setup(o){const t=q(),l=x(),m=D({playerKey:h()});p(t,()=>w());function v(e,a){R("player",l,e,a)}const g=({path:e})=>{l.push({name:"player",query:t.query,params:{path:e.split("/")}})},_=async()=>{m.playerKey=h()};p([()=>t.path,()=>t.query],()=>_());const{loading:b,result:r,error:k,refetch:w}=N(()=>{var e;return A((e=t.path.slice(1))!=null?e:"")}),f=y(()=>n.value?B.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return p(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>d(b)?(s(),i("div",T,[E(C)])):d(k)?(s(),i("div",V,J)):n.value&&f.value?(s(),i("div",O,[(s(),F(I,{key:m.playerKey,class:"player",form:n.value,"is-preview":!1,params:d(t).query,broker:f.value,"enable-auto-focus":!0,onNavigate:g,onLogout:_,onRedirect:v},null,8,["form","params","broker"]))])):(s(),i("div",j,Q))}});const ge=L(U,[["__scopeId","data-v-485e3719"]]);export{ge as default};
//# sourceMappingURL=Player.25701cc0.js.map
