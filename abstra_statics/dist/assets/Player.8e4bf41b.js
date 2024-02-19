import{F as I,r as R,R as B}from"./FormRunner.a377a8d3.js";import{d as P,eB as q,eA as x,G as D,J as d,H as y,u as p,b as s,ev as u,f as E,c as F,eE as S,eF as K,e as c,v as L}from"./outputWidgets.cdb991c0.js";import{u as h}from"./uuid.befb7455.js";import{a as N}from"./asyncComputed.08afc622.js";import{a as A}from"./api.569e0d1c.js";import{L as C}from"./CircularLoading.12f1c8d2.js";import"./url.89f36b88.js";import"./Passwordless.f1d73db0.js";import"./index.8e65e13e.js";import"./pubsub.83305973.js";import"./icons.6cfd480b.js";import"./PlayerNavbar.092146f9.js";import"./ActionButton.386ea3be.js";import"./WidgetsFrame.a0b027fc.js";import"./Card.bd5c0234.js";import"./TabPane.2a290f49.js";import"./hasIn.070ddd79.js";import"./Typography.bbe6290b.js";import"./runnerData.00833d0d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="177234aa-9fea-4d5f-8c0f-d4297e795381",o._sentryDebugIdIdentifier="sentry-dbid-177234aa-9fea-4d5f-8c0f-d4297e795381")}catch{}})();const i=o=>(S("data-v-485e3719"),o=o(),K(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=i(()=>c("h1",null,"Oops! Something went wrong",-1)),H=i(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),J=[G,H],O={key:2,class:"form"},j={key:3,class:"error not-found",style:{height:"100vh"}},z=i(()=>c("h1",null,"Page not found",-1)),M=i(()=>c("p",null,"The page you requested could not be found.",-1)),Q=[z,M],U=P({__name:"Player",setup(o){const t=q(),l=x(),m=D({playerKey:h()});d(t,()=>w());function v(e,a){R("player",l,e,a)}const g=({path:e})=>{l.push({name:"player",query:t.query,params:{path:e.split("/")}})},f=async()=>{m.playerKey=h()};d([()=>t.path,()=>t.query],()=>f());const{loading:k,result:r,error:b,refetch:w}=N(()=>{var e;return A((e=t.path.slice(1))!=null?e:"")}),_=y(()=>n.value?B.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return d(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>p(k)?(s(),u("div",T,[E(C)])):p(b)?(s(),u("div",V,J)):n.value&&_.value?(s(),u("div",O,[(s(),F(I,{key:m.playerKey,class:"player",form:n.value,"is-preview":!1,params:p(t).query,broker:_.value,"enable-auto-focus":!0,onNavigate:g,onLogout:f,onRedirect:v},null,8,["form","params","broker"]))])):(s(),u("div",j,Q))}});const fe=L(U,[["__scopeId","data-v-485e3719"]]);export{fe as default};
//# sourceMappingURL=Player.8e4bf41b.js.map
