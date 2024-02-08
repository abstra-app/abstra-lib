import{F as I,r as R,R as B}from"./FormRunner.aa344f6d.js";import{d as P,eB as q,eA as x,G as D,J as d,H as y,u as p,b as s,ev as c,f as E,c as F,eE as S,eF as K,e as u,v as L}from"./outputWidgets.244ba1c8.js";import{u as h}from"./uuid.7f04de1c.js";import{a as N}from"./asyncComputed.9805a381.js";import{a as A}from"./api.438fac86.js";import{L as C}from"./CircularLoading.eff52010.js";import"./url.f5db59c1.js";import"./Passwordless.ede28e9e.js";import"./index.cc4549b3.js";import"./pubsub.f74b1921.js";import"./icons.a522dd78.js";import"./PlayerNavbar.61cd08b8.js";import"./ActionButton.9bef0cef.js";import"./WidgetsFrame.e7652a72.js";import"./Card.c3bad4d1.js";import"./TabPane.bad26671.js";import"./hasIn.d73516ff.js";import"./Typography.52981f51.js";import"./runnerData.64dc3fe3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="0612c010-44db-45bd-9cf7-168a4762c7aa",o._sentryDebugIdIdentifier="sentry-dbid-0612c010-44db-45bd-9cf7-168a4762c7aa")}catch{}})();const i=o=>(S("data-v-485e3719"),o=o(),K(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=i(()=>u("h1",null,"Oops! Something went wrong",-1)),H=i(()=>u("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),J=[G,H],O={key:2,class:"form"},j={key:3,class:"error not-found",style:{height:"100vh"}},z=i(()=>u("h1",null,"Page not found",-1)),M=i(()=>u("p",null,"The page you requested could not be found.",-1)),Q=[z,M],U=P({__name:"Player",setup(o){const t=q(),l=x(),m=D({playerKey:h()});d(t,()=>w());function v(e,a){R("player",l,e,a)}const g=({path:e})=>{l.push({name:"player",query:t.query,params:{path:e.split("/")}})},_=async()=>{m.playerKey=h()};d([()=>t.path,()=>t.query],()=>_());const{loading:b,result:r,error:k,refetch:w}=N(()=>{var e;return A((e=t.path.slice(1))!=null?e:"")}),f=y(()=>n.value?B.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return d(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>p(b)?(s(),c("div",T,[E(C)])):p(k)?(s(),c("div",V,J)):n.value&&f.value?(s(),c("div",O,[(s(),F(I,{key:m.playerKey,class:"player",form:n.value,"is-preview":!1,params:p(t).query,broker:f.value,"enable-auto-focus":!0,onNavigate:g,onLogout:_,onRedirect:v},null,8,["form","params","broker"]))])):(s(),c("div",j,Q))}});const _e=L(U,[["__scopeId","data-v-485e3719"]]);export{_e as default};
//# sourceMappingURL=Player.85ee0366.js.map
